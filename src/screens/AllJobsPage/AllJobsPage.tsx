import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { jobsApi } from "../../services/api";
import { Job } from "../../types/api";

export const AllJobsPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");

  useEffect(() => {
    jobsApi.getAllJobs().then(data => {
      setJobs(data);
      setFilteredJobs(data);
    });
  }, []);

  useEffect(() => {
    let result = jobs;
    
    if (selectedCategory) {
      result = result.filter(job => job.category.toLowerCase() === selectedCategory.toLowerCase());
    }
    
    if (searchTerm) {
      result = result.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredJobs(result);
  }, [searchTerm, selectedCategory, jobs]);

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) setSearchTerm(search);
  }, [searchParams]);

  const categories = ["Design", "Sales", "Marketing", "Finance", "Technology", "Engineering", "Business", "Human Resource"];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-[124px]">
      <div className="max-w-[1200px] mx-auto">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <h1 className="text-4xl font-bold mb-8">All Jobs</h1>

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search by title, company, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border rounded-md"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <p className="text-neutrals-60 mb-6">{filteredJobs.length} jobs found</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredJobs.map((job) => (
            <Card
              key={job.id}
              onClick={() => navigate(`/jobs/${job.id}`)}
              className="cursor-pointer hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6 flex gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                  {job.logo ? (
                    <img src={job.logo} alt={job.company} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-2xl font-bold text-brandsprimary">{job.company.charAt(0)}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <p className="text-neutrals-80 mb-2">{job.company} - {job.location}</p>
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-[#56cdad1a] text-accentsgreen">{job.type}</Badge>
                    <Badge variant="outline" className="border-brandsprimary text-brandsprimary">{job.category}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
