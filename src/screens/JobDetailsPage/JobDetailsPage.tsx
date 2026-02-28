import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { jobsApi, applicationsApi } from "../../services/api";
import { Job } from "../../types/api";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";

export const JobDetailsPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resumeLink: "",
    coverNote: ""
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (id) {
      jobsApi.getJobById(parseInt(id))
        .then(setJob)
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await applicationsApi.submitApplication({
        jobId: parseInt(id!),
        ...formData
      });
      toast.success("Application submitted successfully!");
      setShowForm(false);
      setFormData({ name: "", email: "", resumeLink: "", coverNote: "" });
    } catch (error: any) {
      toast.error(error.message || "Failed to submit application");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brandsprimary"></div></div>;
  if (!job) return <div className="flex justify-center items-center min-h-screen"><p className="text-xl text-neutrals-60">Job not found</p></div>;

  return (
    <div className="min-h-screen bg-neutrals-0 py-12 px-4 md:px-[124px]">
      <div className="max-w-[1200px] mx-auto">
        <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Jobs
        </Button>

        <Card>
          <CardContent className="p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                {job.logo ? (
                  <img 
                    src={job.logo} 
                    alt={job.company} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-3xl font-bold text-brandsprimary">${job.company.charAt(0)}</span>`;
                    }}
                  />
                ) : (
                  <span className="text-3xl font-bold text-brandsprimary">{job.company.charAt(0)}</span>
                )}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-neutrals-100 mb-2">{job.title}</h1>
                <p className="text-xl text-neutrals-80 mb-4">{job.company}</p>
                <div className="flex gap-4 flex-wrap">
                  <Badge variant="outline">{job.location}</Badge>
                  <Badge variant="outline">{job.category}</Badge>
                  <Badge className="bg-brandsprimary text-white">{job.type}</Badge>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Job Description</h2>
              <p className="text-neutrals-80 whitespace-pre-line">{job.description}</p>
            </div>

            {!showForm ? (
              <Button onClick={() => setShowForm(true)} className="bg-brandsprimary hover:bg-brandsprimary/90">
                Apply Now
              </Button>
            ) : (
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Apply for this position</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Resume Link *</label>
                      <Input
                        required
                        type="url"
                        value={formData.resumeLink}
                        onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                        placeholder="https://drive.google.com/..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Cover Note</label>
                      <textarea
                        className="w-full min-h-[100px] p-3 border rounded-md"
                        value={formData.coverNote}
                        onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                        placeholder="Tell us why you're a great fit..."
                      />
                    </div>
                    <div className="flex gap-4">
                      <Button type="submit" disabled={submitting} className="bg-brandsprimary hover:bg-brandsprimary/90">
                        {submitting ? "Submitting..." : "Submit Application"}
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
