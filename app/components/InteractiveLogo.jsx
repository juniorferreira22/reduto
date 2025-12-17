"use client";
import { useState } from "react";
import Image from "next/image";

export default function InteractiveLogo() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const { innerWidth, innerHeight } = window;

    const rotationX = ((e.clientY - innerHeight / 2) / innerHeight) * 15;
    const rotationY = ((e.clientX - innerWidth / 2) / innerWidth) * 15;

    setRotate({ x: rotationX, y: rotationY });
  }

  function resetRotate() {
    setRotate({ x: 0, y: 0 });
  }

  return (
    <div
      className="perspective-1000 select-none flex justify-center items-center mb-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotate}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        style={{
          transform: `rotateX(${(rotate.x)*-3}deg) rotateY(${(rotate.y)*3}deg)`,
          transition: "transform 0.18s ease-out",
        }}
      >
        <img
          src="/logo.png"
          height="100%"
          width="100%"
          alt="reduto dos loucos logo"
          className="opacity-90 h-auto w-[37.5vw] my-auto"
          priority
        />
      </div>
      
    </div>
  );
}
