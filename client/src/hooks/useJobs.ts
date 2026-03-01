import { useQuery } from '@tanstack/react-query';
import {
  fetchFeaturedJobs,
  fetchLatestJobs,
  fetchAllJobs,
  fetchCategoryCounts,
  fetchJobById
} from '../services/api';

export const useCategoryCounts = () => {
  return useQuery({
    queryKey: ['categories', 'counts'],
    queryFn: fetchCategoryCounts
  });
};

export const useFeaturedJobs = () => {
  return useQuery({
    queryKey: ['jobs', 'featured'],
    queryFn: fetchFeaturedJobs
  });
};

export const useLatestJobs = (limit?: number) => {
  return useQuery({
    queryKey: ['jobs', 'latest', limit],
    queryFn: () => fetchLatestJobs(limit)
  });
};

export const useAllJobs = (params?: {
  search?: string;
  category?: string;
  location?: string;
}) => {
  return useQuery({
    queryKey: ['jobs', params],
    queryFn: () => fetchAllJobs(params)
  });
};

export const useJobById = (id: string) => {
  return useQuery({
    queryKey: ['job', id],
    queryFn: () => fetchJobById(id),
    enabled: !!id
  });
};

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitApplication, createJob, deleteJob } from '../services/api';

export const useSubmitApplication = () => {
  return useMutation({
    mutationFn: submitApplication
  });
};

export const useCreateJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    }
  });
};

export const useDeleteJob = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    }
  });
};
