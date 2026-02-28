import { ArrowRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const jobsData = [
  {
    id: 1,
    logo: "https://logo.clearbit.com/revolut.com",
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    description: "Revolut is looking for Email Marketing to help team ma ...",
    tags: [
      {
        label: "Marketing",
        bgColor: "bg-[#ea84331a]",
        textColor: "text-accentsyellow",
      },
      {
        label: "Design",
        bgColor: "bg-[#56cdad1a]",
        textColor: "text-accentsgreen",
      },
    ],
  },
  {
    id: 2,
    logo: "https://logo.clearbit.com/dropbox.com",
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, US",
    description: "Dropbox is looking for Brand Designer to help the team t ...",
    tags: [
      {
        label: "Design",
        bgColor: "bg-[#56cdad1a]",
        textColor: "text-accentsgreen",
      },
      {
        label: "Business",
        bgColor: "bg-[#4640de1a]",
        textColor: "text-brandsprimary",
      },
    ],
  },
  {
    id: 3,
    logo: "https://logo.clearbit.com/pitch.com",
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    description:
      "Pitch is looking for Customer Manager to join marketing t ...",
    tags: [
      {
        label: "Marketing",
        bgColor: "bg-[#ea84331a]",
        textColor: "text-accentsyellow",
      },
    ],
  },
  {
    id: 4,
    logo: "https://logo.clearbit.com/blinkist.com",
    title: "Visual Designer",
    company: "Blinklist",
    location: "Granada, Spain",
    description:
      "Blinkist is looking for Visual Designer to help team desi ...",
    tags: [
      {
        label: "Design",
        bgColor: "bg-[#56cdad1a]",
        textColor: "text-accentsgreen",
      },
    ],
  },
  {
    id: 5,
    logo: "https://logo.clearbit.com/classpass.com",
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    description: "ClassPass is looking for Product Designer to help us...",
    tags: [
      {
        label: "Marketing",
        bgColor: "bg-[#ea84331a]",
        textColor: "text-accentsyellow",
      },
      {
        label: "Design",
        bgColor: "bg-[#56cdad1a]",
        textColor: "text-accentsgreen",
      },
    ],
  },
  {
    id: 6,
    logo: "https://logo.clearbit.com/canva.com",
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    description: "Canva is looking for Lead Engineer to help develop n ...",
    tags: [
      {
        label: "Design",
        bgColor: "bg-[#56cdad1a]",
        textColor: "text-accentsgreen",
      },
      {
        label: "Business",
        bgColor: "bg-[#4640de1a]",
        textColor: "text-brandsprimary",
      },
    ],
  },
  {
    id: 7,
    logo: "https://logo.clearbit.com/godaddy.com",
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    tags: [
      {
        label: "Marketing",
        bgColor: "bg-[#ea84331a]",
        textColor: "text-accentsyellow",
      },
    ],
  },
  {
    id: 8,
    logo: "https://logo.clearbit.com/twitter.com",
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    description: "Twitter is looking for Data Analyst to help team desi ...",
    tags: [
      {
        label: "Technology",
        bgColor: "bg-[#ff65501a]",
        textColor: "text-accentsred",
      },
    ],
  },
];

export const HeroSearchSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-12 py-0 pb-[72px] px-4 mx-auto w-full max-w-[1470px] bg-neutrals-0">
      <div className="flex w-full items-end justify-between">
        <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
          <span className="text-[#25324b]">Featured </span>
          <span className="text-[#26a3ff]">jobs</span>
        </h2>

        <Button
          variant="ghost"
          className="inline-flex items-center gap-4 p-0 hover:bg-transparent"
        >
          <span className="font-body-normal-semibold font-[number:var(--body-normal-semibold-font-weight)] text-brandsprimary text-[length:var(--body-normal-semibold-font-size)] tracking-[var(--body-normal-semibold-letter-spacing)] leading-[var(--body-normal-semibold-line-height)] [font-style:var(--body-normal-semibold-font-style)]">
            Show all jobs
          </span>
          <ArrowRightIcon className="w-6 h-6 text-brandsprimary" />
        </Button>
      </div>

      <div className="flex flex-col items-start gap-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {jobsData.slice(0, 4).map((job) => (
            <Card
              key={job.id}
              className="flex flex-col gap-4 p-6 bg-white border border-solid border-[#d6ddeb] hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-0 flex flex-col gap-4">
                <div className="flex items-start justify-between w-full">
                  <img
                    className="w-12 h-12 object-contain"
                    alt="Company logo"
                    src={job.logo}
                  />

                  <Badge
                    variant="outline"
                    className="px-3 py-1 border-brandsprimary"
                  >
                    <span className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-brandsprimary text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
                      Full Time
                    </span>
                  </Badge>
                </div>

                <div className="flex flex-col gap-0.5">
                  <h3 className="font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-neutrals-100 text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] [font-style:var(--body-large-semibold-font-style)]">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-neutrals-80 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
                      {job.company}
                    </span>

                    <div className="opacity-30 w-1 h-1 bg-neutrals-80 rounded-sm" />

                    <span className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-neutrals-80 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutrals-60 text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                  {job.description}
                </p>

                <div className="flex items-start gap-2 flex-wrap">
                  {job.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className={`px-4 py-1 ${tag.bgColor} rounded-[80px] hover:${tag.bgColor}`}
                    >
                      <span
                        className={`font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] ${tag.textColor} text-[length:var(--body-small-semibold-font-size)] leading-[var(--body-small-semibold-line-height)] tracking-[var(--body-small-semibold-letter-spacing)] [font-style:var(--body-small-semibold-font-style)]`}
                      >
                        {tag.label}
                      </span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {jobsData.slice(4, 8).map((job) => (
            <Card
              key={job.id}
              className="flex flex-col gap-4 p-6 bg-white border border-solid border-[#d6ddeb] hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-0 flex flex-col gap-4">
                <div className="flex items-start justify-between w-full">
                  <img
                    className="w-12 h-12 object-contain"
                    alt="Company logo"
                    src={job.logo}
                  />

                  <Badge
                    variant="outline"
                    className="px-3 py-1 border-brandsprimary"
                  >
                    <span className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-brandsprimary text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
                      Full Time
                    </span>
                  </Badge>
                </div>

                <div className="flex flex-col gap-0.5">
                  <h3 className="font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-neutrals-100 text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] [font-style:var(--body-large-semibold-font-style)]">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-2">
                    <span className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-neutrals-80 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
                      {job.company}
                    </span>

                    <div className="opacity-30 w-1 h-1 bg-neutrals-80 rounded-sm" />

                    <span className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-neutrals-80 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
                      {job.location}
                    </span>
                  </div>
                </div>

                <p className="font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutrals-60 text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                  {job.description}
                </p>

                <div className="flex items-start gap-2 flex-wrap">
                  {job.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className={`px-4 py-1 ${tag.bgColor} rounded-[80px] hover:${tag.bgColor}`}
                    >
                      <span
                        className={`font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] ${tag.textColor} text-[length:var(--body-small-semibold-font-size)] leading-[var(--body-small-semibold-line-height)] tracking-[var(--body-small-semibold-letter-spacing)] [font-style:var(--body-small-semibold-font-style)]`}
                      >
                        {tag.label}
                      </span>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
