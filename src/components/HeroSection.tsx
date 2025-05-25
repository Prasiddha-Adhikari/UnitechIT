"use client";

import { motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Opposite direction movement values
  const imageX = useTransform(() => -mousePos.x * 0.02);
  const imageY = useTransform(() => -mousePos.y * 0.02);

  return (
    <section className="relative overflow-hidden min-h-screen bg-gray-100 py-20 px-6 md:px-20">
      {/* Decorative Animated Circle - Positioned on right behind the image */}
      <motion.div
        className="absolute w-60 h-60 bg-orange-100 rounded-full z-0"
        style={{
          top: mousePos.y * 0.02 + 100,
          right: mousePos.x * 0.02 + 100,
        }}
      />

      {/* Decorative Dot */}
      <motion.div
        className="absolute w-6 h-6 bg-orange-300 rounded-full z-0"
        style={{
          top: mousePos.y * 0.1 + 150,
          right: mousePos.x * 0.1 + 150,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Content */}
        {/* Left Content */}
<div className="flex-1 text-center md:text-left">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
    Empowering Futures Through Technology
  </h1>
  <p className="text-lg text-gray-600 mb-6">
    Certified to Deliver Excellence, Bridging Skills and Opportunities in IT
  </p>
  <p className="text-md text-gray-600 mb-4">
    Agile Institute is a premier IT training institute based in Kathmandu, Nepal. We specialize in providing professional computer and software training, equipping learners with in-demand skills through real-world projects and guidance from experienced industry professionals.
  </p>

 {/* Certification points side by side */}

<div className="flex justify-center md:justify-start gap-8 mb-6 text-lg font-medium text-green-600">
  <div className="flex items-center gap-2">
    <Image src="/icons/check-mark.png" alt="check" width={20} height={20} />
    <span>Get Certified</span>
  </div>
  <div className="flex items-center gap-2">
    <Image src="/icons/check-mark.png" alt="check" width={20} height={20} />
    <span>Gain Job-ready Skills</span>
  </div>
</div>



  <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-600 transition">
    Get Started
  </button>
</div>


        {/* Right Image - Animated Opposite Direction */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end relative"
          style={{ x: imageX, y: imageY }}
        >
          <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px]">
            <Image
              src="/images/hero1.jpg"
              alt="Hero Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Decorative shape 1 - Orange Square */}
          <motion.div
            className="absolute bottom-[-30px] left-10 w-6 h-6 bg-orange-500 z-0"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />

          {/* Decorative shape 2 - Light Orange Rotating Diamond */}
          <motion.div
            className="absolute bottom-[-40px] right-10 w-5 h-5 bg-orange-200 z-0 rotate-45"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
