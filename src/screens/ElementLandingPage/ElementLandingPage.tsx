import { FooterSection } from "./sections/FooterSection";
import { HeroSearchSection } from "./sections/HeroSearchSection/HeroSearchSection";
import { JobCategoriesSection } from "./sections/JobCategoriesSection";
import { JobPostingCtaSection } from "./sections/JobPostingCtaSection/JobPostingCtaSection";
import { LatestJobsSection } from "./sections/LatestJobsSection/LatestJobsSection";
import { NavigationHeaderSection } from "./sections/NavigationHeaderSection";
import { CompaniesSection } from "./sections/CompaniesSection";

export const ElementLandingPage = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start w-full bg-white">
      <NavigationHeaderSection />
      <CompaniesSection />
      <JobCategoriesSection />
      <JobPostingCtaSection />
      <HeroSearchSection />
      <LatestJobsSection />
      <FooterSection />
    </div>
  );
};
