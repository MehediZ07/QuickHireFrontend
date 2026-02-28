import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { jobsApi } from "../../../../services/api";
import { Job } from "../../../../types/api";

export const HeroSearchSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    jobsApi.getAllJobs()
      .then((data) => setJobs(data.slice(0, 8)))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="flex flex-col items-start gap-12 py-0 pb-[72px] px-4 mx-auto w-full max-w-[1470px] bg-neutrals-0">
        <div className="flex justify-center items-center w-full h-64">
          <p>Loading jobs...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-start gap-12 py-0 pb-[72px] px-4 mx-auto w-full max-w-[1470px] bg-neutrals-0">
      <div className="flex w-full items-end justify-between">
        <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
          <span className="text-[#25324b]">Featured </span>
          <span className="text-[#26a3ff]">jobs</span>
        </h2>

        <Button
          variant="ghost"
          onClick={() => navigate("/jobs")}
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
          {jobs.map((job) => (
            <Card
              key={job.id}
              onClick={() => navigate(`/jobs/${job.id}`)}
              className="flex flex-col gap-4 p-6 bg-white border border-solid border-[#d6ddeb] hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-0 flex flex-col gap-4">
                <div className="flex items-start justify-between w-full">
                  <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                    {job.logo ? (
                      <img
                        className="w-full h-full object-contain"
                        alt="Company logo"
                        src={job.logo}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<span class="text-xl font-bold text-brandsprimary">${job.company.charAt(0)}</span>`;
                        }}
                      />
                    ) : (
                      <span className="text-xl font-bold text-brandsprimary">{job.company.charAt(0)}</span>
                    )}
                  </div>

                  <Badge
                    variant="outline"
                    className="px-3 py-1 border-brandsprimary"
                  >
                    <span className="font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-brandsprimary text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)]">
                      {job.type}
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

                <p className="font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-neutrals-60 text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)] line-clamp-2">
                  {job.description}
                </p>

                <div className="flex items-start gap-2 flex-wrap">
                  <Badge
                    variant="secondary"
                    className="px-4 py-1 bg-[#4640de1a] rounded-[80px]"
                  >
                    <span className="font-body-small-semibold font-[number:var(--body-small-semibold-font-weight)] text-brandsprimary text-[length:var(--body-small-semibold-font-size)] leading-[var(--body-small-semibold-line-height)] tracking-[var(--body-small-semibold-letter-spacing)] [font-style:var(--body-small-semibold-font-style)]">
                      {job.category}
                    </span>
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
