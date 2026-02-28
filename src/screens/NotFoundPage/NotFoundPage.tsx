import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Home } from "lucide-react";

export const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-brandsprimary">404</h1>
        <h2 className="text-3xl font-semibold text-neutrals-100 mt-4">Page Not Found</h2>
        <p className="text-neutrals-60 mt-4 mb-8">The page you're looking for doesn't exist.</p>
        <Button onClick={() => navigate("/")} className="bg-brandsprimary hover:bg-brandsprimary/90">
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};
