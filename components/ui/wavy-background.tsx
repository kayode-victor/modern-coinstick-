/* eslint-disable prettier/prettier */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

import { cn } from "@/lib/utils";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill = "transparent", // Set default to transparent
  blur = 3, // Reduced blur
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    setCanvasSize();

    window.addEventListener("resize", setCanvasSize);

    render(ctx);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  };

  const waveColors = colors ?? ["#22d3ee", "#0ea5e9"]; // cyan-400 and cyan-600

  const drawWave = (ctx: CanvasRenderingContext2D, n: number, nt: number) => {
    const w = ctx.canvas.width;
    const h = ctx.canvas.height;

    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 30;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      ctx.moveTo(0, h / 2);

      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100; // Increased amplitude

        ctx.lineTo(x, h / 2 + y);
      }

      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const render = (ctx: CanvasRenderingContext2D) => {
    let nt = 0;
    const animate = () => {
      nt += getSpeed();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalAlpha = waveOpacity || 0.5;
      drawWave(ctx, 2, nt); // Reduced to 2 waves for simplicity
      animationId = requestAnimationFrame(animate);
    };

    animate();
  };

  useEffect(() => {
    init();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "relative w-full h-[30rem] flex items-center justify-center overflow-hidden", // Added overflow-hidden
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
