import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { applicationsApi } from "../../services/api";

interface User {
  id: number;
  email: string;
  role: string;
}

interface Application {
  id: number;
  job_id: number;
  name: string;
  email: string;
  title: string;
  company: string;
  location: string;
  logo: string;
  created_at: string;
}

export const CustomerDashboard = (): JSX.Element => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.role !== 'customer') {
        navigate("/admin");
        return;
      }
      setUser(payload);
      applicationsApi.getMyApplications(token)
        .then(setApplications)
        .finally(() => setLoading(false));
    } catch {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) return <div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brandsprimary"></div></div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-[124px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Dashboard</h1>
            <p className="text-neutrals-60 mt-2">Welcome back, {user.email}!</p>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => navigate("/")} variant="outline">
              Browse Jobs
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-sm text-neutrals-60 mb-2">Total Applications</h3>
              <p className="text-3xl font-bold">{applications.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-sm text-neutrals-60 mb-2">In Review</h3>
              <p className="text-3xl font-bold">{applications.length}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-sm text-neutrals-60 mb-2">Interviews</h3>
              <p className="text-3xl font-bold">0</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutrals-60 mb-1">Email</label>
                <p className="text-lg">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutrals-60 mb-1">Role</label>
                <Badge className="bg-brandsprimary">{user.role}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">My Applications</h2>
            {loading ? (
              <div className="text-center py-12">Loading...</div>
            ) : applications.length === 0 ? (
              <div className="text-center py-12 text-neutrals-60">
                <p>No applications yet</p>
                <Button onClick={() => navigate("/")} className="mt-4 bg-brandsprimary">
                  Browse Jobs
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {applications.map((app) => (
                  <Card key={app.id} className="border">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                        {app.logo ? (
                          <img src={app.logo} alt={app.company} className="w-full h-full object-contain" />
                        ) : (
                          <span className="text-xl font-bold text-brandsprimary">{app.company.charAt(0)}</span>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{app.title}</h3>
                        <p className="text-neutrals-80">{app.company} - {app.location}</p>
                        <p className="text-sm text-neutrals-60 mt-2">Applied: {new Date(app.created_at).toLocaleDateString()}</p>
                      </div>
                      <Badge variant="outline">Pending</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
