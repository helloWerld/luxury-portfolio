"use client";

import BoxReveal from "@/components/BoxReveal";
import MagnetLines from "@/components/MagnetLines";
import Particles from "@/components/Particles";
import TypingAnimation from "@/components/TypingAnimation";
import Waves from "@/components/Waves";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [background, setBackground] = useState("waves");
  return (
    <div className="flex-grow overflow-clip">
      {/* Hero Section - Full Height Attempt */}
      {/* Using min-height calculation to subtract header height (h-14 = 3.5rem) */}
      <section className="relative flex flex-row min-h-[calc(100vh-3.5rem)]">
        {/* Text Content Column */}

        <div className="border-y md:border-none top-1/2 -translate-y-1/2 z-10 absolute w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left p-8 md:p-12 lg:p-16 bg-white h-fit md:h-full">
          {/* TODO: Replace with compelling headline */}
          <TypingAnimation
            as="h1"
            duration={50}
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6 relative text-balance"
          >
            Architecting Bespoke Web Properties for The World's Elite.
          </TypingAnimation>

          <TypingAnimation
            as="p"
            duration={20}
            delay={200}
            className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto md:mx-0 mb-8 font-normal"
          >
            {/* TODO: Replace with brief description */}
            Full-stack developer specializing in high-performance, luxurious web
            applications and websites for discerning clients.
          </TypingAnimation>
          {/* Call to Action Buttons */}
          <BoxReveal boxColor="black">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800"
            >
              View Projects
            </Link>
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center px-6 py-3 border border-secondary text-base font-medium rounded-md shadow-sm text-foreground bg-transparent hover:bg-secondary/10 ms-4"
            >
              Testimonials
            </Link>
          </BoxReveal>
          <div className="md:absolute bottom-12 right-12 flex flex-row mx-auto  gap-2 mt-6">
            <button
              onClick={() => setBackground("waves")}
              className={`border size-4 rounded-full ${
                background === "waves" && "bg-black"
              }`}
            ></button>
            <button
              onClick={() => setBackground("particles")}
              className={`border size-4 rounded-full ${
                background === "particles" && "bg-black"
              }`}
            ></button>
            <button
              onClick={() => setBackground("magnet")}
              className={`border size-4 rounded-full ${
                background === "magnet" && "bg-black"
              }`}
            ></button>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 relative ms-auto overflow-clip">
          {background === "waves" && (
            <Waves
              className=" md:border-l"
              lineColor="#000"
              backgroundColor="#fff"
              waveSpeedX={0.06}
              waveSpeedY={0.01}
              waveAmpX={60}
              waveAmpY={20}
              friction={0.75}
              tension={0.01}
              maxCursorMove={120}
              xGap={20}
              yGap={5}
            />
          )}
          {background === "magnet" && (
            <MagnetLines
              rows={25}
              columns={15}
              containerSize="100%"
              lineColor="black"
              lineWidth="0.15vmin"
              lineHeight="2vmin"
              baseAngle={0}
              className=" md:border-l min-h-full max-h-full"
            />
          )}
          {background === "particles" && (
            <Particles
              className=" md:border-l h-full bg-black"
              particleColors={["#fff", "#fff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          )}
        </div>
      </section>

      {/* TODO: Add other sections like featured projects preview later */}
      {/* These sections will now appear below the full-height hero */}
    </div>
  );
}
