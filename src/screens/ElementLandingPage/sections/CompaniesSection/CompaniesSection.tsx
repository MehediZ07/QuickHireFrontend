export const CompaniesSection = (): JSX.Element => {
  const companies = [
    { name: "Vodafone", logo: "/assets/images/vodafone-2017-logo.png" },
    { name: "Intel", logo: "/assets/images/intel-3.png" },
    { name: "Tesla", logo: "/assets/images/tesla-9 1.png" },
    { name: "AMD", logo: "/assets/images/amd-logo-1.png" },
    { name: "Talkit", logo: "/assets/images/talkit 1.png" },
  ];

  return (
    <section className="w-full bg-neutrals-0 py-8 px-4 max-w-[1470px] mx-auto">
      <div className="flex flex-col gap-10">
        <p className="text-neutrals-60 font-body-normal-regular text-start">
          Companies we helped grow
        </p>
        
        <div className="flex items-center justify-between gap-12 flex-wrap grayscale">
          {companies.map((company) => (
            <img
              key={company.name}
              src={company.logo}
              alt={company.name}
              className="h-8 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
