import { SocialLinks } from "../../constants/SocialLinks";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-300 py-5 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 mb-1">
              Abanoub Abdelmessih
            </h3>
            <p className="text-gray-500 text-sm">
              © {year} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-5">
            {SocialLinks.map(({ icon, href, label }, index) => (
              <a
                key={index}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-200 hover:scale-105"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
