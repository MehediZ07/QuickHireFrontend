import { ChevronRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const jobsData = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    logo: "https://logo.clearbit.com/nomadlist.com",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 2,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, USA",
    logo: "https://logo.clearbit.com/dropbox.com",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 3,
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    logo: "https://logo.clearbit.com/terraform.io",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 4,
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    logo: "https://logo.clearbit.com/packer.io",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 5,
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    logo: "https://logo.clearbit.com/netlify.com",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 6,
    title: "Brand Designer",
    company: "Maze",
    location: "San Fransisco, USA",
    logo: "https://logo.clearbit.com/maze.co",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 7,
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    logo: "https://logo.clearbit.com/udacity.com",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
  {
    id: 8,
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    logo: "https://logo.clearbit.com/webflow.com",
    type: "Full-Time",
    categories: ["Marketing", "Design"],
  },
];

export const LatestJobsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[72px] px-4 md:px-[124px] bg-[#F8F8FD] overflow-hidden">
      <img
        className="absolute top-0 right-0 w-full h-full pointer-events-none hidden md:block"
        alt="Pattern"
        src="/assets/images/Pattern.png"
      />

      <div className="relative flex flex-col gap-12 mx-auto max-w-[1470px]">
        <header className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
            <span className="text-[#25324b]">Latest </span>
            <span className="text-[#26a3ff]">jobs open</span>
          </h2>

          <Button
            variant="ghost"
            className="gap-4 font-body-normal-semibold font-[number:var(--body-normal-semibold-font-weight)] text-brandsprimary text-[length:var(--body-normal-semibold-font-size)] tracking-[var(--body-normal-semibold-letter-spacing)] leading-[var(--body-normal-semibold-line-height)] [font-style:var(--body-normal-semibold-font-style)] hover:bg-transparent"
          >
            Show all jobs
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
          {jobsData.map((job) => (
            <Card
              key={job.id}
              className="bg-neutrals-0 border-0 shadow-none hover:shadow-md transition-shadow cursor-pointer"
            >
              <CardContent className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 md:p-10">
                <img
                  className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 object-contain"
                  alt={`${job.company} logo`}
                  src={job.logo}
                />

                <div className="flex flex-col gap-2 flex-1 w-full">
                  <h3 className="font-display-2 font-[number:var(--display-2-font-weight)] text-neutrals-100 text-base sm:text-lg md:text-[length:var(--display-2-font-size)] tracking-[var(--display-2-letter-spacing)] leading-[var(--display-2-line-height)] [font-style:var(--display-2-font-style)]">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-neutrals-80 text-sm md:text-[length:var(--body-normal-regular-font-size)] leading-[var(--body-normal-regular-line-height)] font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] tracking-[var(--body-normal-regular-letter-spacing)] [font-style:var(--body-normal-regular-font-style)]">
                      {job.company}
                    </span>

                    <div className="w-1 h-1 bg-neutrals-80 rounded-sm" />

                    <span className="text-neutrals-80 text-sm md:text-[length:var(--body-normal-regular-font-size)] leading-[var(--body-normal-regular-line-height)] font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] tracking-[var(--body-normal-regular-letter-spacing)] [font-style:var(--body-normal-regular-font-style)]">
                      {job.location}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 flex-wrap">
                    <Badge className="bg-[#56cdad1a] text-accentsgreen hover:bg-[#56cdad1a] rounded-[80px] px-2.5 py-1.5 font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-[length:var(--body-small-semibold-font-size)] leading-[var(--body-small-semibold-line-height)] tracking-[var(--body-small-semibold-letter-spacing)] [font-style:var(--body-small-semibold-font-style)]">
                      {job.type}
                    </Badge>

                    <div className="self-stretch w-px bg-neutrals-20 hidden sm:block" />

                    <Badge
                      variant="outline"
                      className="border-[#feb835] text-accentsyellow hover:bg-transparent rounded-[80px] px-2.5 py-1.5 font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-[length:var(--body-small-semibold-font-size)] leading-[var(--body-small-semibold-line-height)] tracking-[var(--body-small-semibold-letter-spacing)] [font-style:var(--body-small-semibold-font-style)]"
                    >
                      {job.categories[0]}
                    </Badge>

                    <Badge
                      variant="outline"
                      className="border-[#4640de] text-brandsprimary hover:bg-transparent rounded-[80px] px-2.5 py-1.5 font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-[length:var(--body-small-semibold-font-size)] leading-[var(--body-small-semibold-line-height)] tracking-[var(--body-small-semibold-letter-spacing)] [font-style:var(--body-small-semibold-font-style)]"
                    >
                      {job.categories[1]}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
