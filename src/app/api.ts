 
const BASE_URL = "https://jobicy.com/api/v2/remote-jobs/";

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
  jobType: string[];
  jobGeo: string;
  jobLevel: string;
  jobExcerpt: string;
  jobDescription: string;
  pubDate: Date;
}

export async function fetchJobs(): Promise<JobData>{
    return fetch(BASE_URL)
        .then(response => response.json())
        .catch(error => console.error(error));
}