import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRightIcon, Palette, TrendingUp, Megaphone, DollarSign, MonitorSmartphone, Wrench, Briefcase, Users } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { jobsApi } from "../../../../services/api";
import { Job } from "../../../../types/api";

const categories = [
  {
    name: "Design",
    Icon: Palette,
    jobCount: 235,
  },
  {
    name: "Sales",
    Icon: TrendingUp,
    jobCount: 756,
  },
  {
    name: "Marketing",
    Icon: Megaphone,
    jobCount: 140,
  },
  {
    name: "Finance",
    Icon: DollarSign,
    jobCount: 325,
  },
  {
    name: "Technology",
    Icon: MonitorSmartphone,
    jobCount: 436,
  },
  {
    name: "Engineering",
    Icon: Wrench,
    jobCount: 542,
  },
  {
    name: "Business",
    Icon: Briefcase,
    jobCount: 211,
  },
  {
    name: "Human Resource",
    Icon: Users,
    jobCount: 346,
  },
];

export const JobCategoriesSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    jobsApi.getAllJobs().then(setJobs).catch(console.error);
  }, []);

  const getCategoryCount = (category: string) => {
    return jobs.filter(job => job.category.toLowerCase() === category.toLowerCase()).length;
  };

  const categoriesWithCounts = categories.map(cat => ({
    ...cat,
    jobCount: getCategoryCount(cat.name)
  }));

  return (
    <section className="flex flex-col items-start gap-12 pt-[72px] pb-0 px-4 md:px-[124px] w-full bg-neutrals-0">
      <header className="flex items-end justify-between w-full">
        <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-neutrals-100 text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
          <span className="text-[#25324b]">Explore by </span>
          <span className="text-[#26a3ff]">category</span>
        </h2>

        <Button
          variant="ghost"
          onClick={() => navigate("/jobs")}
          className="inline-flex items-center gap-4 p-0 h-auto hover:bg-transparent"
        >
          <span className="font-body-normal-semibold font-[number:var(--body-normal-semibold-font-weight)] text-brandsprimary text-[length:var(--body-normal-semibold-font-size)] tracking-[var(--body-normal-semibold-letter-spacing)] leading-[var(--body-normal-semibold-line-height)] [font-style:var(--body-normal-semibold-font-style)]">
            Show all jobs
          </span>
          <ChevronRightIcon className="w-6 h-6 text-brandsprimary" />
        </Button>
      </header>

      <div className="flex flex-col items-start gap-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {categoriesWithCounts.map((category, index) => (
            <Card
              key={index}
              onClick={() => navigate(`/jobs?category=${category.name}`)}
              className="group cursor-pointer transition-all hover:shadow-lg bg-neutrals-0 border-[#d6ddeb] hover:bg-brandsprimary hover:border-brandsprimary"
            >
              <CardContent className="flex flex-col items-start gap-8 p-8">
                <category.Icon className="w-12 h-12 text-brandsprimary group-hover:text-white transition-colors" />

                <div className="flex flex-col items-start justify-center gap-3 w-full">
                  <h3 className="font-title-large-semibold font-[number:var(--title-large-semibold-font-weight)] text-[length:var(--title-large-semibold-font-size)] tracking-[var(--title-large-semibold-letter-spacing)] leading-[var(--title-large-semibold-line-height)] [font-style:var(--title-large-semibold-font-style)] text-neutrals-100 group-hover:text-white transition-colors">
                    {category.name}
                  </h3>

                  <div className="inline-flex items-center gap-4">
                    <p className="font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-[length:var(--body-large-regular-font-size)] tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] [font-style:var(--body-large-regular-font-style)] text-neutrals-60 group-hover:text-white transition-colors">
                      {category.jobCount} jobs available
                    </p>
                    <ChevronRightIcon className="w-6 h-6 text-neutrals-60 group-hover:text-white transition-colors" />
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
