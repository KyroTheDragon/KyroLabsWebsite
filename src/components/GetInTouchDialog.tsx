import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { DiscordLogo } from "./TechLogos";
import { Mail, ArrowUpRight } from "lucide-react";

interface GetInTouchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GetInTouchDialog({ open, onOpenChange }: GetInTouchDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-md mx-auto border border-zinc-800 bg-zinc-950 p-5 sm:p-6 text-zinc-100 shadow-2xl rounded-2xl">
        <DialogHeader className="space-y-1 text-left">
          <DialogTitle className="text-xl font-bold tracking-tight text-white">
            Get in Touch
          </DialogTitle>
          <DialogDescription className="text-xs text-zinc-400">
            Reach out directly to the Kyro Labs engineering team.
          </DialogDescription>
        </DialogHeader>

        {/* Direct Channels - Clean & Minimal */}
        <div className="space-y-2.5 pt-2">
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-white group"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#5865F2] text-white shadow-xs">
                <DiscordLogo className="size-4" />
              </div>
              <div>
                <span className="font-semibold text-sm block">Via Discord</span>
                <span className="text-xs text-zinc-400 block">discord.gg/kyrolabs</span>
              </div>
            </div>
            <ArrowUpRight className="size-4 text-zinc-400 group-hover:text-white transition-colors" />
          </a>

          <a
            href="mailto:contact@kyrolabs.com"
            className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 hover:border-zinc-700 transition-all text-white group"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-xs">
                <Mail className="size-4" />
              </div>
              <div>
                <span className="font-semibold text-sm block">Via Email</span>
                <span className="text-xs text-zinc-400 block">contact@kyrolabs.com</span>
              </div>
            </div>
            <ArrowUpRight className="size-4 text-zinc-400 group-hover:text-white transition-colors" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
