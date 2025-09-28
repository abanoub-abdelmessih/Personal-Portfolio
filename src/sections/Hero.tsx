"use client";

import { ExternalButton } from "@/components/ExternalButton";
import IconBar from "@/components/IconBar";
import { ContactLinks } from "@/data/data";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <header className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center md:items-start">
      <HeroImage />
      <div className="space-y-8 md:grow">
        <HeroText />
        <HeroButtons />
      </div>
    </header>
  );
}
export default Hero;

function HeroImage() {
  return (
    <div className="border-2 border-border p-3 rounded-full shadow-sm/70">
      <Image
        src="/abanoub.webp"
        alt="Abanoub profile photo"
        className="rounded-full w-48 h-48 md:w-56 md:h-56"
        width={224}
        height={224}
        priority
      />
    </div>
  );
}

function HeroText() {
  return (
    <div className="space-y-8 md:grow">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-wider text-foreground/95 mb-5 text-center md:text-start">
        <span className="block mb-2 font-light uppercase">Abanoub</span>
        Abdelmessih
      </h1>
      <HeroTagline />
    </div>
  );
}

function HeroTagline() {
  return (
    <div className="flex items-center justify-center md:justify-start gap-3">
      <span className="w-3 h-3 bg-foreground/70 rounded-full animate-pulse block"></span>
      <p className="text-lg md:text-xl font-light tracking-wide uppercase text-foreground/70">
        <TypeAnimation
          sequence={[
            "Front-End Developer",
            2500,
            "React & Next.JS Specialist",
            2500,
            "UI/UX Focused Engineer",
            2500,
            "Clean & Scalable Code",
            2500,
          ]}
          wrapper="span"
          speed={30}
          cursor={true}
          style={{ display: "inline-block" }}
          repeat={Infinity}
        />
      </p>
      <div className="hidden lg:block flex-1 h-0.5 bg-foreground/70" />
    </div>
  );
}

function HeroButtons() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 my-5">
      <IconBar DataArray={ContactLinks} />
      <ExternalButton
        label="Preview CV"
        icon={<MoveUpRight size={20} />}
        size="lg"
        href="https://drive.google.com/file/d/1bUr2i3qNQ3U9kXX0YRz3ykKNzQDg1LA1/view?usp=drive_link"
      />
    </div>
  );
}
