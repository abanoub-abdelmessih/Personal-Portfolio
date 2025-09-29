import { ContactLinks } from "@/data/data";
import IconBar from "./IconBar";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-5 px-6 flex flex-col md:flex-row items-center justify-between gap-3 mb-0">
      <div className="flex flex-col gap-2">
        <h3>Abanoub Abdelmessih</h3>
        <p className="text-zinc-400 text-sm">© {year} All rights reserved.</p>
      </div>
      <IconBar DataArray={ContactLinks} />
    </footer>
  );
};
