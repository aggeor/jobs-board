 
export const BASE_URL = "https://jobicy.com/api/v2/remote-jobs";

export function getJobsURL(): string {
  return BASE_URL;
}

export function getJobsByTagURL(tag: string): string {
  return `${BASE_URL}?tag=${tag}`;
}

export interface JobData {
  name: string;
  jobCount: number;
  jobs: Job[];
}

export interface Job {
  id: string;
  url: string;
  jobTitle: string;
  companyName: string;
  companyLogo: string;
  jobIndustry: string[];
  jobType: JobType[];
  jobGeo: string;
  jobLevel: string;
  jobExcerpt: string;
  jobDescription: string;
  pubDate: Date;
}


export enum JobType {
    fullTime = "full-time",
    contract = "contract",
    internship = "internship"
}