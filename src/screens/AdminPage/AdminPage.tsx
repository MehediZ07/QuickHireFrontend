import { useState, useEffect } from "react";
import { jobsApi, authApi, applicationsApi } from "../../services/api";
import { Job } from "../../types/api";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";

export const AdminPage = (): JSX.Element => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'jobs' | 'applications'>('jobs');
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [showLogin, setShowLogin] = useState(!token);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
    logo: "",
    type: "Full-Time"
  });

  useEffect(() => {
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.role !== 'admin') {
          toast.error('Access denied. Admin only.');
          localStorage.removeItem('token');
          setShowLogin(true);
          return;
        }
      } catch {
        setShowLogin(true);
        return;
      }
      loadJobs();
      loadApplications();
    }
  }, [token]);

  const loadJobs = async () => {
    const data = await jobsApi.getAllJobs();
    setJobs(data);
  };

  const loadApplications = async () => {
    const data = await applicationsApi.getAllApplications(token);
    setApplications(data);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await authApi.login(loginData.email, loginData.password);
      const payload = JSON.parse(atob(result.token.split('.')[1]));
      if (payload.role !== 'admin') {
        toast.error('Access denied. Admin only.');
        return;
      }
      setToken(result.token);
      localStorage.setItem("token", result.token);
      setShowLogin(false);
      toast.success('Login successful!');
    } catch (error: any) {
      toast.error(error.message || "Login failed");
    }
  };

  const handleAddJob = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await jobsApi.createJob(formData, token);
      toast.success("Job created successfully!");
      setShowAddForm(false);
      setFormData({ title: "", company: "", location: "", category: "", description: "", logo: "", type: "Full-Time" });
      loadJobs();
    } catch (error: any) {
      toast.error(error.message || "Failed to create job");
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete this job?")) {
      try {
        await jobsApi.deleteJob(id, token);
        toast.success("Job deleted successfully!");
        loadJobs();
      } catch (error: any) {
        toast.error(error.message || "Failed to delete job");
      }
    }
  };

  if (showLogin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8">
            <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  required
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <Input
                  required
                  type="password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full bg-brandsprimary hover:bg-brandsprimary/90">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-[124px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            {activeTab === 'jobs' && (
              <Button onClick={() => setShowAddForm(!showAddForm)} className="bg-brandsprimary hover:bg-brandsprimary/90">
                {showAddForm ? "Cancel" : "Add New Job"}
              </Button>
            )}
            <Button variant="outline" onClick={() => { setToken(""); localStorage.removeItem("token"); setShowLogin(true); }}>
              Logout
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <Button 
            onClick={() => setActiveTab('jobs')} 
            variant={activeTab === 'jobs' ? 'default' : 'outline'}
            className={activeTab === 'jobs' ? 'bg-brandsprimary' : ''}
          >
            Jobs ({jobs.length})
          </Button>
          <Button 
            onClick={() => setActiveTab('applications')} 
            variant={activeTab === 'applications' ? 'default' : 'outline'}
            className={activeTab === 'applications' ? 'bg-brandsprimary' : ''}
          >
            Applications ({applications.length})
          </Button>
        </div>

        {showAddForm && activeTab === 'jobs' && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Add New Job</h2>
              <form onSubmit={handleAddJob} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title *</label>
                    <Input required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company *</label>
                    <Input required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Location *</label>
                    <Input required value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category *</label>
                    <Input required value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Logo URL</label>
                    <Input value={formData.logo} onChange={(e) => setFormData({ ...formData, logo: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Type</label>
                    <select className="w-full p-2 border rounded-md" value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                      <option>Full-Time</option>
                      <option>Part-Time</option>
                      <option>Contract</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description *</label>
                  <textarea
                    required
                    className="w-full min-h-[150px] p-3 border rounded-md"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>
                <Button type="submit" className="bg-brandsprimary hover:bg-brandsprimary/90">
                  Create Job
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {activeTab === 'jobs' ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">All Jobs ({jobs.length})</h2>
            {jobs.map((job) => (
              <Card key={job.id}>
                <CardContent className="p-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-neutrals-80">{job.company} - {job.location}</p>
                    <p className="text-sm text-neutrals-60 mt-2">{job.category} | {job.type}</p>
                  </div>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(job.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">All Applications ({applications.length})</h2>
            {applications.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center text-neutrals-60">
                  No applications yet
                </CardContent>
              </Card>
            ) : (
              applications.map((app) => (
                <Card key={app.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{app.title}</h3>
                        <p className="text-neutrals-80">{app.company}</p>
                        <div className="mt-4 space-y-2">
                          <p className="text-sm"><span className="font-medium">Applicant:</span> {app.name}</p>
                          <p className="text-sm"><span className="font-medium">Email:</span> {app.email}</p>
                          <p className="text-sm"><span className="font-medium">Resume:</span> <a href={app.resume_link} target="_blank" rel="noopener noreferrer" className="text-brandsprimary hover:underline">View Resume</a></p>
                          {app.cover_note && <p className="text-sm"><span className="font-medium">Cover Note:</span> {app.cover_note}</p>}
                          <p className="text-sm text-neutrals-60">Applied: {new Date(app.created_at).toLocaleDateString()}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
