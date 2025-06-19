import { FaDownload, FaPhone } from "react-icons/fa";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export const HeroButtons = () => {
  const theIcons = [
    {
      icon: <SiLinkedin />,
      href: "https://www.linkedin.com/in/abanoub-abd-elmessih/",
    },
    { icon: <SiGithub />, href: "https://github.com/Abanoub-Abd-Elmessih" },
    { icon: <SiGmail />, href: "mailto:abanoubabdelmessih110@gmail.com" },
    { icon: <FaPhone />, href: "tel:+201559566765" },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-6 md:gap-0 my-4 md:my-5">
      <div className="flex gap-4 justify-center sm:justify-start md:border-r border-r-zinc-300 md:pr-5 md:mr-5">
        {theIcons.map(({ icon, href }, index) => (
          <a
            key={index}
            href={href}
            className="w-12 h-12 flex items-center justify-center text-zinc-500 hover:text-white bg-white hover:bg-zinc-900 border border-zinc-200 hover:border-zinc-900 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        ))}
      </div>
      <a
        href="/path-to-your-cv.pdf"
        className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 text-center justify-center sm:justify-start"
        download="Your-Name-CV.pdf"
      >
        <FaDownload />
        Download CV
      </a>
    </div>
  );
};
