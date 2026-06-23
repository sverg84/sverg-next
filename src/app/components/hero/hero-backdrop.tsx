"use client";

import { useEffect } from "react";
import { useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

type BlobConfig = {
  left: string;
  top: string;
  width: string;
  height: string;
  driftX: string[];
  driftY: string[];
  duration: number;
  delay?: number;
  color: string;
};

const BLOBS: BlobConfig[] = [
  {
    left: "72%",
    top: "18%",
    width: "min(90vw, 48rem)",
    height: "min(90vw, 48rem)",
    driftX: ["0vw", "2.8vw", "-1.2vw", "0vw"],
    driftY: ["0vh", "-3.2vh", "2vh", "0vh"],
    duration: 28,
    delay: 0,
    color: "var(--color-hero-mesh-cyan)",
  },
  {
    left: "14%",
    top: "62%",
    width: "min(75vw, 40rem)",
    height: "min(75vw, 40rem)",
    driftX: ["0vw", "-2.2vw", "1.8vw", "0vw"],
    driftY: ["0vh", "2.6vh", "-1.4vh", "0vh"],
    duration: 32,
    delay: 1.5,
    color: "var(--color-hero-mesh-emerald)",
  },
  {
    left: "48%",
    top: "48%",
    width: "min(70vw, 36rem)",
    height: "min(70vw, 36rem)",
    driftX: ["0vw", "-1.6vw", "2.4vw", "0vw"],
    driftY: ["0vh", "2vh", "-2.2vh", "0vh"],
    duration: 24,
    delay: 0.8,
    color: "var(--color-hero-mesh-teal)",
  },
];

function MeshBlob({
  config,
  reduceMotion,
}: {
  config: BlobConfig;
  reduceMotion: boolean;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: config.left, top: config.top }}
    >
      <motion.div
        className="rounded-full opacity-100 blur-[72px] md:blur-[96px] dark:opacity-90
          dark:blur-[88px] dark:md:blur-[118px]"
        style={{
          width: config.width,
          height: config.height,
          background: `radial-gradient(circle closest-side, ${config.color} 0%, transparent 52%)`,
        }}
        initial={{ x: "0vw", y: "0vh" }}
        animate={
          reduceMotion
            ? { x: "0vw", y: "0vh" }
            : { x: config.driftX, y: config.driftY }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                duration: config.duration,
                delay: config.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
    </div>
  );
}

function PointerSheen({ reduceMotion }: { reduceMotion: boolean }) {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 26, damping: 28, mass: 0.45 });
  const smoothY = useSpring(mouseY, { stiffness: 26, damping: 28, mass: 0.45 });

  const sheen = useTransform([smoothX, smoothY], ([x, y]) => {
    const px = typeof x === "number" ? x : 0;
    const py = typeof y === "number" ? y : 0;
    return `radial-gradient(ellipse 110% 85% at ${String(px * 100)}% ${String(py * 100)}%, var(--color-hero-mesh-sheen) 0%, transparent 58%)`;
  });

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: PointerEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduceMotion, mouseX, mouseY]);

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] mix-blend-multiply
        dark:mix-blend-screen"
      style={{ backgroundImage: sheen }}
    />
  );
}

export default function HeroBackdrop() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const prefersReducedMotion = useReducedMotion() ?? false;

  const reduceMotion = !mounted || prefersReducedMotion;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden
        bg-[var(--color-hero-mesh-base)]"
    >
      <div
        className="absolute inset-0 z-0 opacity-58 dark:opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 100%, var(--color-hero-mesh-floor) 0%, transparent 55%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-100 mix-blend-multiply
          dark:opacity-[0.42] dark:mix-blend-screen"
        style={{
          background:
            "radial-gradient(ellipse min(100vw, 72rem) min(95vh, 52rem) at 10% 82%, var(--color-hero-mesh-violet) 0%, transparent 58%)",
        }}
      />

      {BLOBS.map((blob, i) => (
        <MeshBlob key={i} config={blob} reduceMotion={reduceMotion} />
      ))}

      <PointerSheen reduceMotion={reduceMotion} />

      <svg aria-hidden className="absolute h-0 w-0">
        <filter colorInterpolationFilters="sRGB" id="heroMeshNoise">
          <feTurbulence
            baseFrequency="0.9"
            numOctaves="4"
            result="n"
            seed="2"
            stitchTiles="stitch"
            type="fractalNoise"
          />
          <feColorMatrix in="n" result="g" type="saturate" values="0" />
        </filter>
      </svg>
      <div
        className="absolute inset-0 z-[2] opacity-[0.035] mix-blend-overlay dark:opacity-[0.07]"
        style={{ filter: "url(#heroMeshNoise)" }}
      />
    </div>
  );
}
