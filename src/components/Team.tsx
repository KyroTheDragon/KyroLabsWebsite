import { useEffect, useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  discordId?: string;
  username?: string;
}

export const Team = () => {
  const [member, setMember] = useState<TeamMember>({
    name: "Kyro",
    role: "Lead Developer",
    avatar: "https://cdn.discordapp.com/avatars/622858248587837481/102b4babdb814de4b18e55f955a63205.png?size=256",
  });

  useEffect(() => {
    let isMounted = true;
    fetch("/api/team")
      .then((res) => {
        if (!res.ok) throw new Error("Discord API response error");
        return res.json();
      })
      .then((data) => {
        if (isMounted && data?.members?.[0]) {
          setMember(data.members[0]);
        }
      })
      .catch((err) => {
        console.warn("Using cached Discord profile:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="team" className="relative px-6 py-20 sm:px-8 sm:py-28 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Team
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
            The engineering minds behind Kyro Labs software.
          </p>
        </div>

        {/* Minimal Team Member: Image (square with rounded edges), Name, and Role */}
        <div className="flex flex-wrap gap-8">
          <div className="group w-44 sm:w-48 space-y-3">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 aspect-square shadow-sm transition-all group-hover:border-zinc-300 dark:group-hover:border-zinc-700">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "https://cdn.discordapp.com/embed/avatars/0.png";
                }}
              />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-100 tracking-tight">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {member.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
