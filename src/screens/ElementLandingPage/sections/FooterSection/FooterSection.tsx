import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

const aboutLinks = [
  { label: "Companies", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Advice", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const resourceLinks = [
  { label: "Help Docs", href: "#" },
  { label: "Guide", href: "#" },
  { label: "Updates", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-colorblack py-16 px-8 md:px-16 lg:px-[124px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="flex flex-col gap-8">
            <img className="h-8 w-32 bg-white" src="assets/images/Logo.png" alt="QuickHire Logo" />
            <p className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-neutrals-20 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          <div className="flex flex-col gap-[18px]">
            <h3 className="font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-neutrals-0 text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] [font-style:var(--body-large-semibold-font-style)]">
              About
            </h3>
            <nav className="flex flex-col gap-4">
              {aboutLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-neutrals-20 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)] hover:text-neutrals-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-[18px]">
            <h3 className="font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-white text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] [font-style:var(--body-large-semibold-font-style)]">
              Resources
            </h3>
            <nav className="flex flex-col gap-[23px]">
              {resourceLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-neutrals-20 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)] hover:text-neutrals-0 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-[18px]">
            <h3 className="font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-neutrals-0 text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] [font-style:var(--body-large-semibold-font-style)]">
              Get job notifications
            </h3>
            <p className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-neutrals-20 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex gap-2 mt-10 flex-col sm:flex-row">
              <Input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-neutrals-0 border-[#d6ddeb] font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-neutrals-40 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]"
              />
              <Button className="bg-brandsprimary hover:bg-brandsprimary/90 font-button-normal font-[number:var(--button-normal-font-weight)] text-neutrals-0 text-[length:var(--button-normal-font-size)] tracking-[var(--button-normal-letter-spacing)] leading-[var(--button-normal-line-height)] [font-style:var(--button-normal-font-style)] px-6 w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-neutrals-20 opacity-20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-white text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] [font-style:var(--body-normal-medium-font-style)] opacity-50">
            2021 @ QuickHire. All rights reserved.
          </p>
          <img
            className="w-64 h-8"
            alt="Social media icons"
            src="/social-media-icons.png"
          />
        </div>
      </div>
    </footer>
  );
};
