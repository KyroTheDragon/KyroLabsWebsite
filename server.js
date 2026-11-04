import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const CLIENT_ID = process.env.DISCORD_CLIENT_ID || "1567613814327742464";
const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || "KPWaL4jd9oQD3zrO7NZnWpJDoWFT-gAa";
const USER_ID = process.env.DISCORD_USER_ID || "622858248587837481";
const FRIEND_USER_ID = process.env.DISCORD_FRIEND_ID || "815905917097738282";
const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

// Cache for Discord user data (5 minutes TTL)
let cachedData = null;
let cacheTime = 0;
const CACHE_TTL_MS = 5 * 60 * 1000;

export async function getDiscordTeamData() {
  const now = Date.now();
  if (cachedData && now - cacheTime < CACHE_TTL_MS) {
    return cachedData;
  }

  let kyroMember = {
    name: "Kyro",
    role: "Lead Developer",
    avatar: `https://cdn.discordapp.com/avatars/${USER_ID}/102b4babdb814de4b18e55f955a63205.png?size=256`,
    discordId: USER_ID,
    username: "kyrothedragon",
  };

  // Default friend avatar based on Discord Snowflake algorithm
  const friendDefaultAvatarIndex = Number((BigInt(FRIEND_USER_ID) >> 22n) % 6n);
  let friendMember = {
    name: process.env.DISCORD_FRIEND_NAME || "Lucia :3",
    role: "Beta Tester",
    avatar: `https://cdn.discordapp.com/embed/avatars/${friendDefaultAvatarIndex}.png`,
    discordId: FRIEND_USER_ID,
  };

  try {
    // 1. Get access token via client_credentials
    const tokenRes = await fetch("https://discord.com/api/v10/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        scope: "identify",
      }),
    });

    if (tokenRes.ok) {
      const tokenData = await tokenRes.json();
      const accessToken = tokenData.access_token;

      // 2. Fetch authenticated owner user data
      const meRes = await fetch("https://discord.com/api/v10/oauth2/@me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (meRes.ok) {
        const meData = await meRes.json();
        const user = meData.user;
        if (user) {
          const avatarUrl = user.avatar
            ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`
            : `https://cdn.discordapp.com/embed/avatars/0.png`;

          kyroMember = {
            name: "Kyro",
            role: "Lead Developer",
            avatar: avatarUrl,
            discordId: user.id || USER_ID,
            username: user.username || "kyrothedragon",
          };
        }
      }
    }
  } catch (err) {
    console.error("Failed to sync Kyro profile from Discord:", err.message);
  }

  // 3. If BOT_TOKEN is present, attempt to fetch friend's profile directly
  if (BOT_TOKEN) {
    try {
      const friendRes = await fetch(`https://discord.com/api/v10/users/${FRIEND_USER_ID}`, {
        headers: {
          Authorization: `Bot ${BOT_TOKEN}`,
        },
      });
      if (friendRes.ok) {
        const friendData = await friendRes.json();
        const avatarUrl = friendData.avatar
          ? `https://cdn.discordapp.com/avatars/${friendData.id}/${friendData.avatar}.png?size=256`
          : `https://cdn.discordapp.com/embed/avatars/${friendDefaultAvatarIndex}.png`;

        friendMember = {
          name: friendData.global_name || friendData.username || "Lucia :3",
          role: "Beta Tester",
          avatar: avatarUrl,
          discordId: friendData.id,
          username: friendData.username,
        };
      }
    } catch (err) {
      console.warn("Could not fetch friend profile via Bot token:", err.message);
    }
  }

  cachedData = {
    members: [kyroMember, friendMember],
  };
  cacheTime = now;
  return cachedData;
}

// API endpoint for team members
app.get("/api/team", async (req, res) => {
  const data = await getDiscordTeamData();
  res.json(data);
});

// Serve built frontend assets
app.use(express.static(path.join(__dirname, "dist")));

// SPA fallback for all remaining routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start server if executed directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Kyro Labs production server listening on http://0.0.0.0:${PORT}`);
  });
}
