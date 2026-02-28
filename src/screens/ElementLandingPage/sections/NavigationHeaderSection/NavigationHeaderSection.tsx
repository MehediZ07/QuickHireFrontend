import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { AuthModal } from "../../../../components/AuthModal";
import { jobsApi } from "../../../../services/api";
import { Job } from "../../../../types/api";

const navigationLinks = [
  { label: "Find Jobs", href: "#" },
  { label: "Browse Companies", href: "#" },
];

const popularKeywords = ["UI Designer", "UX Researcher", "Android", "Admin"];
const categories = ["Design", "Sales", "Marketing", "Finance", "Technology", "Engineering", "Business", "Human Resource"];

export const NavigationHeaderSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("florence");
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: "login" | "signup" }>({ isOpen: false, mode: "login" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [suggestions, setSuggestions] = useState<Array<{type: 'job' | 'category', value: string}>>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    jobsApi.getAllJobs().then(setJobs);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setIsLoggedIn(true);
        setUserRole(payload.role);
      } catch {
        setIsLoggedIn(false);
      }
    }
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const jobMatches = jobs
        .filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, 3)
        .map(job => ({ type: 'job' as const, value: job.title }));
      
      const categoryMatches = categories
        .filter(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
        .slice(0, 2)
        .map(cat => ({ type: 'category' as const, value: cat }));
      
      setSuggestions([...categoryMatches, ...jobMatches]);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm, jobs]);

  const handleDashboard = () => {
    navigate(userRole === 'admin' ? '/admin' : '/dashboard');
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserRole(null);
    window.location.reload();
  };

  const handleSuggestionClick = (suggestion: {type: 'job' | 'category', value: string}) => {
    if (suggestion.type === 'category') {
      navigate(`/jobs?category=${suggestion.value}`);
    } else {
      navigate(`/jobs?search=${suggestion.value}`);
    }
    setSearchTerm("");
    setShowSuggestions(false);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.append('search', searchTerm);
    navigate(`/jobs?${params.toString()}`);
    setShowSuggestions(false);
  };

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
            {isLoggedIn ? (
              <>
                <Button
                  variant="ghost"
                  onClick={handleDashboard}
                  className="px-3 md:px-6 py-3 text-sm md:text-base font-button-normal font-[number:var(--button-normal-font-weight)] text-brandsprimary text-[length:var(--button-normal-font-size)] leading-[var(--button-normal-line-height)] tracking-[var(--button-normal-letter-spacing)] [font-style:var(--button-normal-font-style)] hover:bg-transparent"
                >
                  Dashboard
                </Button>

                <div className="w-px h-12 bg-neutrals-20 hidden md:block" />

                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className="px-3 md:px-6 py-3 text-sm md:text-base">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => setAuthModal({ isOpen: true, mode: "login" })}
                  className="px-3 md:px-6 py-3 text-sm md:text-base font-button-normal font-[number:var(--button-normal-font-weight)] text-brandsprimary text-[length:var(--button-normal-font-size)] leading-[var(--button-normal-line-height)] tracking-[var(--button-normal-letter-spacing)] [font-style:var(--button-normal-font-style)] hover:bg-transparent"
                >
                  Login
                </Button>

                <div className="w-px h-12 bg-neutrals-20 hidden md:block" />

                <Button 
                  onClick={() => setAuthModal({ isOpen: true, mode: "signup" })}
                  className="px-3 md:px-6 py-3 text-sm md:text-base bg-brandsprimary hover:bg-brandsprimary/90 font-button-normal font-[number:var(--button-normal-font-weight)] text-neutrals-0 text-[length:var(--button-normal-font-size)] leading-[var(--button-normal-line-height)] tracking-[var(--button-normal-letter-spacing)] [font-style:var(--button-normal-font-style)]">
                  Sign Up
                </Button>
              </>
            )}
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
              src="/assets/images/Group.png"
            />
          </div>

          <p className="max-w-full md:max-w-[521px] mt-6 opacity-70 font-body-xlarge-regular font-[number:var(--body-xlarge-regular-font-weight)] text-neutrals-80 text-[length:var(--body-xlarge-regular-font-size)] tracking-[var(--body-xlarge-regular-letter-spacing)] leading-[var(--body-xlarge-regular-line-height)] [font-style:var(--body-xlarge-regular-font-style)]">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>

          <div className="flex flex-col gap-4 w-full md:max-w-[852px]">
            <div className="flex flex-col md:flex-row items-stretch md:items-center bg-white shadow-shadow p-4 gap-4 md:gap-0">
              <div className="flex items-center gap-4 flex-1 px-4 md:border-r border-neutrals-20 relative">
                <SearchIcon className="w-6 h-6 text-neutrals-60" />
                <div className="flex flex-col flex-1 relative">
                  <Input
                    placeholder="Job title or keyword"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    onFocus={() => searchTerm && setShowSuggestions(true)}
                    className="border-0 border-b border-neutrals-20 rounded-none px-0 pt-5 pb-0 opacity-50 font-body-normal-regular font-[number:var(--body-normal-regular-font-weight)] text-neutrals-60 text-[length:var(--body-normal-regular-font-size)] tracking-[var(--body-normal-regular-letter-spacing)] leading-[var(--body-normal-regular-line-height)] [font-style:var(--body-normal-regular-font-style)] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border rounded-md shadow-lg z-50 max-h-60 w-60 overflow-y-auto">
                      {suggestions.map((suggestion, idx) => (
                        <div
                          key={idx}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                        >
                          <span className="text-xs px-2 py-1 rounded bg-brandsprimary text-white">
                            {suggestion.type === 'category' ? 'Category' : 'Job'}
                          </span>
                          <span className="text-sm">{suggestion.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 flex-1 pl-2 pr-6">
                <MapPinIcon className="w-6 h-6 text-neutrals-60" />
                <div className="flex flex-col flex-1">
                  <Select value={location} onValueChange={setLocation} defaultValue="florence">
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

              <Button onClick={handleSearch} className="w-full md:w-auto px-[27px] py-3.5 bg-brandsprimary hover:bg-brandsprimary/90 font-button-large font-[number:var(--button-large-font-weight)] text-neutrals-0 text-[length:var(--button-large-font-size)] leading-[var(--button-large-line-height)] tracking-[var(--button-large-letter-spacing)] [font-style:var(--button-large-font-style)] whitespace-nowrap">
                Search my job
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

      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        mode={authModal.mode}
      />
    </section>
  );
};
