import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { getDiscordTeamData } from "./server.js";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "discord-api-dev",
      configureServer(server) {
        server.middlewares.use("/api/team", async (req, res) => {
          try {
            const data = await getDiscordTeamData();
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
          } catch {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Failed to fetch team data" }));
          }
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
