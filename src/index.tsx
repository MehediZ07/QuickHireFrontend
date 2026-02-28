import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ElementLandingPage } from "./screens/ElementLandingPage/ElementLandingPage";
import { JobDetailsPage } from "./screens/JobDetailsPage/JobDetailsPage";
import { AdminPage } from "./screens/AdminPage/AdminPage";
import { CustomerDashboard } from "./screens/CustomerDashboard/CustomerDashboard";
import { AllJobsPage } from "./screens/AllJobsPage/AllJobsPage";
import { NotFoundPage } from "./screens/NotFoundPage/NotFoundPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<ElementLandingPage />} />
        <Route path="/jobs" element={<AllJobsPage />} />
        <Route path="/jobs/:id" element={<JobDetailsPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<CustomerDashboard />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
