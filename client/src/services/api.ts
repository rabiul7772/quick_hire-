import api from '../utils/axios';
import type { JobsResponse } from '../types/job';

export const fetchCategoryCounts = async (): Promise<{
  success: boolean;
  data: { name: string; count: number }[];
}> => {
  const { data } = await api.get('/jobs/categories/count');
  return data;
};

export const fetchFeaturedJobs = async (): Promise<JobsResponse> => {
  const { data } = await api.get<JobsResponse>('/jobs', {
    params: { isFeatured: true }
  });
  return data;
};

export const fetchLatestJobs = async (limit = 8): Promise<JobsResponse> => {
  const { data } = await api.get<JobsResponse>('/jobs', {
    params: { limit }
  });
  return data;
};

export const fetchAllJobs = async (params?: {
  search?: string;
  category?: string;
  location?: string;
}): Promise<JobsResponse> => {
  const { data } = await api.get<JobsResponse>('/jobs', { params });
  return data;
};

export const fetchJobById = async (id: string) => {
  const { data } = await api.get(`/jobs/${id}`);
  return data;
};

export const createJob = async (jobData: Record<string, unknown>) => {
  const { data } = await api.post('/jobs', jobData);
  return data;
};

export const deleteJob = async (id: string) => {
  const { data } = await api.delete(`/jobs/${id}`);
  return data;
};

export const submitApplication = async (applicationData: {
  jobId: string;
  name: string;
  email: string;
  resumeLink: string;
  coverNote: string;
}) => {
  const { data } = await api.post('/applications', applicationData);
  return data;
};
