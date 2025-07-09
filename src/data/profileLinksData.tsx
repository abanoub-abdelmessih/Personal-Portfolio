import type { profileLinksTypes } from "@/Types/profileLinksTypes";
import { FaPhone } from "react-icons/fa";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

export const profileLinksData: profileLinksTypes[] = [
  {
    icon: <SiLinkedin />,
    href: "https://www.linkedin.com/in/abanoub-abdelmessih/",
    label: "LinkedIn",
  },
  {
    icon: <SiGithub />,
    href: "https://github.com/abanoub-abdelmessih",
    label: "GitHub",
  },
  {
    icon: <SiGmail />,
    href: "mailto:abanoubabdelmessih110@gmail.com",
    label: "Gmail",
  },
  {
    icon: <FaPhone />,
    href: "tel:+201559566765",
    label: "Phone",
  },
];
