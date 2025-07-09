import { ExternalButton } from "@/components/ui/ExternalButton";
import { ProfileLinksButtons } from "@/components/ui/ProfileLinksButtons";
import { CgArrowTopRight } from "react-icons/cg";

export const HeroButtons = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 my-5">
      <ProfileLinksButtons />
      <ExternalButton
        label="Preview CV"
        icon={<CgArrowTopRight size={20} />}
        size="lg"
        href="https://drive.google.com/file/d/1bUr2i3qNQ3U9kXX0YRz3ykKNzQDg1LA1/view?usp=drive_link"
      />
    </div>
  );
};
