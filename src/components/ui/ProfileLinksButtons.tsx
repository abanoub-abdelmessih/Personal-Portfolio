import { profileLinksData } from "@/data/profileLinksData";

export const ProfileLinksButtons = () => {
  return (
    <div className="flex gap-1.5 p-2 border border-gray-200 rounded-full bg-gray-100">
      {profileLinksData.map(({ icon, href, label }, index) => (
        <a
          key={index}
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white rounded-full transition-all duration-300 hover:shadow-md hover:scale-105"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};
