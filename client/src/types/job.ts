export interface Job {
  _id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  category: string;
  type: string;
  tags: string[];
  description: string;
  salary?: string;
  isFeatured: boolean;
  createdAt: string;
}

export interface JobsResponse {
  success: boolean;
  data: Job[];
}
