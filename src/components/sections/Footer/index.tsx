import { ProfileLinksButtons } from "@/components/ui/ProfileLinksButtons";
import { FooterTitle } from "./FooterTitle";

export const FooterSection = () => {
  return (
    <footer className="border-t border-gray-300 py-5 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-5">
        <FooterTitle />
        <ProfileLinksButtons />
      </div>
    </footer>
  );
};
