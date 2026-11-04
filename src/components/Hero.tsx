import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  GoLogo,
  NodeLogo,
  TypeScriptLogo,
  ReactLogo,
  PostgreSQLLogo,
  DockerLogo,
  RedisLogo,
  TailwindLogo,
  ViteLogo,
} from "./TechLogos";

export const Hero = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white dark:bg-zinc-950 px-6 pt-24 pb-20 sm:px-8 sm:pt-32 sm:pb-28"
    >
      {/* Ambient Top Light Gradients */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 via-indigo-300 to-cyan-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Main Headline */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.08] max-w-4xl"
        >
          Building focused software for{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            real-world operations
          </span>
          .
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Kryo Labs designs, engineers, and operates digital platforms and technical infrastructure — from intelligent simulator telemetry to real-time operations software.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-xl font-medium text-sm h-11 px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors border-0"
          >
            <a href="#projects" className="flex items-center gap-2">
              <span>Explore Mileora</span>
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-xl font-medium text-sm h-11 px-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-2xs"
          >
            <a href="#contact" className="flex items-center gap-2">
              <span>Contact Team</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        {/* Metric Containers (Gemini Antigravity rounded outline style) */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
            <span className="block text-3xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">
              60 Hz
            </span>
            <span className="mt-1 block text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Live Telemetry Polling
            </span>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
            <span className="block text-3xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400">
              Real-Time
            </span>
            <span className="mt-1 block text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Telemetry &amp; Streams
            </span>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
            <span className="block text-3xl font-extrabold tracking-tight text-purple-600 dark:text-purple-400">
              Local-First
            </span>
            <span className="mt-1 block text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Fast, Resilient State
            </span>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
            <span className="block text-3xl font-extrabold tracking-tight text-amber-600 dark:text-amber-400">
              100%
            </span>
            <span className="mt-1 block text-sm font-medium text-zinc-600 dark:text-zinc-400">
              Independent Studio
            </span>
          </div>
        </div>

        {/* Tech Logo Ribbon Container */}
        <div className="mt-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40 p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
          <div className="flex flex-wrap items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300" title="Go">
              <GoLogo className="size-5" />
              <span>Go</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300" title="Node.js">
              <NodeLogo className="size-5" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300" title="TypeScript">
              <TypeScriptLogo className="size-5" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300" title="React">
              <ReactLogo className="size-5" />
              <span>React</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300" title="PostgreSQL">
              <PostgreSQLLogo className="size-5" />
              <span>PostgreSQL</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300" title="Docker">
              <DockerLogo className="size-5" />
              <span>Docker</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300" title="Redis">
              <RedisLogo className="size-5" />
              <span>Redis</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300" title="Tailwind CSS">
              <TailwindLogo className="size-5" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300" title="Vite">
              <ViteLogo className="size-5" />
              <span>Vite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
