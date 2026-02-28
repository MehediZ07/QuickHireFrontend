import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const JobPostingCtaSection = (): JSX.Element => {
  return (
    <section className="w-full bg-neutrals-0 py-[72px] px-4">
      <div className="max-w-[1470px] w-full mx-auto">
        <Card className="overflow-hidden border-0 shadow-none bg-gradient-to-r from-brandsprimary to-[#5e57d8]" style={{ clipPath: 'polygon(0 20%, 10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%)' }}>
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex flex-col items-start gap-6 py-12 md:py-[93px] px-8 md:pl-[70px] md:pr-8 w-full md:w-auto">
                <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-white text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Start posting<br />jobs today
                </h2>

                <p className="font-body-normal-medium font-[number:var(--body-normal-medium-font-weight)] text-white text-[length:var(--body-normal-medium-font-size)] tracking-[var(--body-normal-medium-letter-spacing)] leading-[var(--body-normal-medium-line-height)] [font-style:var(--body-normal-medium-font-style)]">
                  Start posting jobs for only $10.
                </p>

                <Button className="bg-white text-brandsprimary hover:bg-white/90 font-button-normal font-[number:var(--button-normal-font-weight)] text-[length:var(--button-normal-font-size)] tracking-[var(--button-normal-letter-spacing)] leading-[var(--button-normal-line-height)] [font-style:var(--button-normal-font-style)] px-6 py-3">
                  Sign Up For Free
                </Button>
              </div>

              <img
                className="h-full object-contain hidden md:block mr-0 md:mr-10"
                alt="Dashboard"
                src="/assets/images/Dashboard Company.png"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
