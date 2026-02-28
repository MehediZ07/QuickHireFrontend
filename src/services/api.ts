import { Job, Application, ApiResponse } from '../types/api';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const jobsApi = {
  getAllJobs: async (): Promise<Job[]> => {
    const response = await fetch(`${API_BASE_URL}/jobs`);
    const data: ApiResponse<Job[]> = await response.json();
    return data.data || [];
  },

  getJobById: async (id: number): Promise<Job | null> => {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`);
    const data: ApiResponse<Job> = await response.json();
    return data.data || null;
  },

  createJob: async (job: Omit<Job, 'id' | 'created_at'>, token: string): Promise<Job> => {
    const response = await fetch(`${API_BASE_URL}/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(job)
    });
    const data: ApiResponse<Job> = await response.json();
    if (!data.success) throw new Error(data.message);
    return data.data!;
  },

  deleteJob: async (id: number, token: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data: ApiResponse<void> = await response.json();
    if (!data.success) throw new Error(data.message);
  }
};

export const applicationsApi = {
  submitApplication: async (application: Application): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(application)
    });
    const data: ApiResponse<void> = await response.json();
    if (!data.success) throw new Error(data.message);
  },

  getMyApplications: async (token: string): Promise<any[]> => {
    const response = await fetch(`${API_BASE_URL}/applications/my-applications`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data: ApiResponse<any[]> = await response.json();
    return data.data || [];
  },

  getAllApplications: async (token: string): Promise<any[]> => {
    const response = await fetch(`${API_BASE_URL}/applications/all`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data: ApiResponse<any[]> = await response.json();
    return data.data || [];
  }
};

export const authApi = {
  login: async (email: string, password: string): Promise<{ token: string }> => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (!data.success) throw new Error(data.message);
    return data.data;
  },

  register: async (name: string, email: string, password: string, phone: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, phone })
    });
    const data = await response.json();
    if (!data.success) throw new Error(data.message);
  }
};
