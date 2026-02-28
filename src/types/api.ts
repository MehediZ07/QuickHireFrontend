export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  logo?: string;
  type: string;
  created_at: string;
}

export interface Application {
  jobId: number;
  name: string;
  email: string;
  resumeLink: string;
  coverNote?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}
