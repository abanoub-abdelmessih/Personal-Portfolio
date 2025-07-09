import Image from "next/image";

export const HeroImage = () => {
  return (
    <div className="border border-gray-400 p-3 rounded-full shadow-sm/70">
      <Image
        src="/abanoub.webp"
        alt="Abanoub profile photo"
        className="rounded-full w-48 h-48 md:w-56 md:h-56 grayscale hover:grayscale-0 duration-300"
        width={224}
        height={224}
        priority
      />
    </div>
  );
};
