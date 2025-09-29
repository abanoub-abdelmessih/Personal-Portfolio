import { Linkedin, Mail, Users, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

// --- Section Divider ---
function SectionDivider({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-12 bg-zinc-700"></div>
      {icon}
      <div className="h-px w-12 bg-zinc-700"></div>
    </div>
  );
}

// --- Contact Header ---
function ContactHeader() {
  return (
    <div className="space-y-4">
      <h4 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-zinc-100 tracking-tight">
        Let&apos;s Work Together
      </h4>
      <p className="text-zinc-400 max-w-2xl text-base sm:text-lg leading-relaxed">
        I&apos;m available for freelance projects and collaborations. Whether
        you need development work, have questions about my content, or want to
        discuss technology—reach out through any platform below.
      </p>
    </div>
  );
}

// --- Contact Buttons ---
function ContactButtons() {
  return (
    <div className="w-full max-w-2xl space-y-3">
      <Button
        className="w-full bg-zinc-100 hover:bg-zinc-200 text-black"
        asChild
        size="lg"
      >
        <Link
          href={"mailto:abanoubabdelmessih110@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail className="mr-2" size={20} /> Send Email
        </Link>
      </Button>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Button
          asChild
          variant="outline"
          className="w-full border-zinc-700 text-zinc-200 hover:bg-zinc-900"
          size="lg"
        >
          <Link
            href={"https://www.linkedin.com/in/abanoub-abdelmessih/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="mr-2" size={20} /> LinkedIn
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="w-full border-zinc-700 text-zinc-200 hover:bg-zinc-900"
          size="lg"
        >
          <Link
            href={"https://www.upwork.com/freelancers/~01068916f84cefdc9e"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Briefcase className="mr-2" size={20} /> Upwork
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Button
          asChild
          variant="outline"
          className="w-full border-zinc-700 text-zinc-200 hover:bg-zinc-900"
          size="lg"
        >
          <Link
            href={"https://mostaql.com/u/AbanoubAbdo"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Briefcase className="mr-2" size={20} /> Mostaql
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="w-full border-zinc-700 text-zinc-200 hover:bg-zinc-900"
          size="lg"
        >
          <Link
            href={"https://khamsat.com/user/abanoub_abdelmessih"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Briefcase className="mr-2" size={20} /> Khamsat
          </Link>
        </Button>
      </div>
    </div>
  );
}

// --- Main Contact Section ---
function Contact() {
  return (
    <section className="border border-zinc-800 flex flex-col items-center justify-center text-center p-8 sm:p-10 lg:p-14 gap-8 rounded-lg bg-zinc-950">
      <SectionDivider icon={<Users size={32} className="text-zinc-200" />} />

      <ContactHeader />

      <ContactButtons />

      <div className="flex items-center gap-2 text-xs text-zinc-500 mt-2">
        <div className="h-px w-8 bg-zinc-800"></div>
        <span>Available for freelance work</span>
        <div className="h-px w-8 bg-zinc-800"></div>
      </div>
    </section>
  );
}

export default Contact;
