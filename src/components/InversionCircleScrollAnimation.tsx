import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Hero from "./Hero";
import Bpkedu from "./Bpkedu";

function CircleRevealSection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("circle-reveal");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalDistance = section.offsetHeight - viewportHeight;

      if (totalDistance <= 0) return;

      const currentDistance = Math.min(
        Math.max(-rect.top, 0),
        totalDistance
      );

      setProgress(currentDistance / totalDistance);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Crescimento da bolinha
  const circleSize = 10 + progress * 190;

  // Texto aparece conforme a bolinha cresce
  const textOpacity = Math.min(progress * 2.5, 1);

  return (
    <section
      id="circle-reveal"
      className="relative h-[180vh] w-full bg-[#275fcf]"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">

        {/* Bolinha que cresce */}
        <motion.div
          className="absolute rounded-full bg-white"
          style={{
            width: `${circleSize}vw`,
            height: `${circleSize}vw`,
          }}
        />

        {/* Texto dentro da animação */}
        <div
          className="relative z-10 px-6 text-center"
          style={{
            opacity: textOpacity,
          }}
        >
          <h2 className="text-5xl font-bold text-[#275fcf] md:text-7xl">
            Aprender.
            <br />
            Criar.
            <br />
            Transformar.
          </h2>
        </div>

      </div>
    </section>
  );
}

export default function InversionCircleScrollAnimation() {
  return (
    <div className="w-full overflow-x-clip">

      {/* 1 — HERO */}
      <Hero />

      {/* 2 — ANIMAÇÃO DA BOLINHA */}
      <CircleRevealSection />

      {/* 3 — SEU BPKEDU EXISTENTE */}
      <Bpkedu />

    </div>
  );
}