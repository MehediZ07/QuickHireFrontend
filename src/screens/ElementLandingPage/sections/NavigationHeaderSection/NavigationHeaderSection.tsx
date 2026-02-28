import { MapPinIcon, SearchIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";

const navigationLinks = [
  { label: "Find Jobs", href: "#" },
  { label: "Browse Companies", href: "#" },
];

const popularKeywords = ["UI Designer", "UX Researcher", "Android", "Admin"];

export const NavigationHeaderSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[794px] bg-lightsgray overflow-hidden">
      <img
        className="absolute top-0 right-0 w-[69.24%] h-full object-cover hidden md:block"
        alt="Pattern"
        src="/assets/images/Pattern.png"
      />

      <img
        className="absolute top-[87px] right-0 w-[43.61%] h-[707px] object-contain hidden md:block"
        alt="Professional"
        src="/assets/images/hero.png"
      />

      <div className="relative w-full max-w-[1470px] mx-auto px-4 md:px-0">
        <header className="flex items-center justify-between py-6 flex-wrap gap-4">
          <div className="flex items-center gap-4 md:gap-12">
            <div className="flex items-center gap-2">
              <span className="[font-family:'Red_Hat_Display',Helvetica] font-bold text-neutrals-100 text-xl md:text-2xl tracking-[-0.24px] leading-9">
                <img src="/assets/images/Logo.png" alt="Logo" className="h-6 md:h-8" />
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-4">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-6 font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-neutrals-80 text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] [font-style:var(--body-normal-medium-font-style)] hover:text-neutrals-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              className="px-3 md:px-6 py-3 text-sm md:text-base font-button-normal font-[number:var(--button-normal-font-weight)] text-brandsprimary text-[length:var(--button-normal-font-size)] leading-[var(--button-normal-line-height)] tracking-[var(--button-normal-letter-spacing)] [font-style:var(--button-normal-font-style)] hover:bg-transparent"
            >
              Login
            </Button>

            <div className="w-px h-12 bg-neutrals-20 hidden md:block" />

            <Button className="px-3 md:px-6 py-3 text-sm md:text-base bg-brandsprimary hover:bg-brandsprimary/90 font-button-normal font-[number:var(--button-normal-font-weight)] text-neutrals-0 text-[length:var(--button-normal-font-size)] leading-[var(--button-normal-line-height)] tracking-[var(--button-normal-letter-spacing)] [font-style:var(--button-normal-font-style)]">
              Sign Up
            </Button>
          </div>
        </header>

        <div className="flex flex-col items-start gap-[23px] mt-10 md:mt-20 max-w-full md:max-w-[629px]">
          <div className="relative">
            <h1 className="[font-family:'Clash_Display-Regular',Helvetica] font-normal text-4xl md:text-7xl tracking-[0] leading-[48px] md:leading-[72px]">
              <span className="text-[#25324b] leading-[52.8px] md:leading-[79.2px]">
                Discover more than{" "}
              </span>
              <span className="text-[#26a3ff] leading-[52.8px] md:leading-[79.2px]">
                5000+ Jobs
              </span>
            </h1>
            <img
              className="absolute bottom-0 left-0 w-[85.05%] h-auto top-28 md:top-40"
              alt="Underline decoration"
              src="assets/images/Group.png"
            />
          </div>

          <p className="max-w-full md:max-w-[521px] mt-6 opacity-70 font-body-xlarge-regular font-[number:var(--body-xlarge-regular-font-weight)] text-neutrals-80 text-[length:var(--body-xlarge-regular-font-size)] tracking-[var(--body-xlarge-regular-letter-spacing)] leading-[var(--body-xlarge-regular-line-height)] [font-style:var(--body-xlarge-regular-font-style)]">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          <div className="flex flex-col gap-4 w-full md:max-w-[852px]">
            <div className="flex flex-col md:flex-row items-stretch md:items-center bg-white shadow-shadow p-4 gap-4 md:gap-0">
              <div className="flex items-center gap-4 flex-1 px-4 md:border-r border-neutrals-20">
                <SearchIcon className="w-6 h-6 text-neutrals-60" />
                <div className="flex flex-col flex-1">
                  <Input
                    placeholder="Job title or keyword"
                    className="border-0 border-b border-neutrals-20 rounded-none px-0 pt-5 pb-0 opacity-50 font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-neutrals-60 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 flex-1 pl-2 pr-6">
                <MapPinIcon className="w-6 h-6 text-neutrals-60" />
                <div className="flex flex-col flex-1">
                  <Select defaultValue="florence">
                    <SelectTrigger className="border-0 border-b border-neutrals-20 rounded-none px-0 pt-5 pb-0 font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-neutrals-100 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)] opacity-90 focus:ring-0 focus:ring-offset-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="florence">Florence, Italy</SelectItem>
                      <SelectItem value="rome">Rome, Italy</SelectItem>
                      <SelectItem value="milan">Milan, Italy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full md:w-auto px-[27px] py-3.5 bg-brandsprimary hover:bg-brandsprimary/90 font-button-large font-[number:var(--button-large-font-weight)] text-neutrals-0 text-[length:var(--button-large-font-size)] leading-[var(--button-large-line-height)] tracking-[var(--button-large-letter-spacing)] [font-style:var(--button-large-font-style)] whitespace-nowrap">
                SearchIcon my job
              </Button>
            </div>

            <div className="flex items-center opacity-70 [font-family:'Epilogue',Helvetica] text-sm md:text-base tracking-[0] leading-[25.6px] flex-wrap">
              <span className="font-normal text-[#202430]">Popular : </span>
              <span className="font-medium ml-1">
                {popularKeywords.join(", ")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
