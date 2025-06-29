export const HeroImage = () => {
  return (
    <div className="border border-gray-400 p-3 rounded-full shadow-sm/70">
      <picture>
        <source srcSet="/images/abanoub.webp" type="image/webp" />
        <img
          src="/images/abanoub.jpg"
          alt="Abanoub profile photo"
          className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover object-top grayscale hover:grayscale-0 duration-300"
        />
      </picture>
    </div>
  );
};
