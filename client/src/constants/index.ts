export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

import {
  Palette,
  Target,
  Megaphone,
  BarChart3,
  Code2,
  Settings,
  Briefcase,
  Users,
  Facebook,
  Instagram,
  Dribbble,
  Linkedin,
  Twitter
} from 'lucide-react';

export const categories = [
  { name: 'Design', icon: Palette, count: 235 },
  { name: 'Sales', icon: Target, count: 756 },
  { name: 'Marketing', icon: Megaphone, count: 140 },
  { name: 'Finance', icon: BarChart3, count: 325 },
  { name: 'Technology', icon: Code2, count: 436 },
  { name: 'Engineering', icon: Settings, count: 542 },
  { name: 'Business', icon: Briefcase, count: 211 },
  { name: 'Human Resource', icon: Users, count: 346 }
];

export const jobTypes = [
  { value: '', label: 'Select a job type' },
  { value: 'Full-Time', label: 'Full-Time' },
  { value: 'Part-Time', label: 'Part-Time' },
  { value: 'Contract', label: 'Contract' },
  { value: 'Internship', label: 'Internship' }
];

export const logos = [
  {
    name: 'Vodafone',
    url: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef86d015-bdb2-4cf3-a1d7-6363ada4d700'
  },
  {
    name: 'Intel',
    url: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/380215fb-1eb9-419d-b58e-3a51474e0853'
  },
  {
    name: 'Tesla',
    url: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0df7b230-fac4-4c0c-80c2-facbeb455894'
  },
  {
    name: 'AMD',
    url: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4057cb07-e712-4f53-b556-5138ca0484d8'
  },
  {
    name: 'Talkit',
    url: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/95400a4e-b0e4-4b5a-b36e-98c938afef80'
  }
];

export const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'Dribbble', icon: Dribbble, url: '#' },
  { name: 'LinkedIn', icon: Linkedin, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' }
];

export const ADMIN_JOBS_PER_PAGE = 5;
