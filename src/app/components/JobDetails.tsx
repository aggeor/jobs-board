import { replaceAmp } from "../helper";
import DOMPurify from "dompurify";

interface Props{
    jobTitle:string,
    companyName:string,
    jobDescription:string,
    toggleDrawer:()=>void,
}

function JobDescription({ jobDescription }: { jobDescription: string }) {
  const sanitizedHTML = DOMPurify.sanitize(jobDescription);

  return (
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} /> 
  );
}

export default function JobDetails({jobTitle, companyName,jobDescription, toggleDrawer}:Props){
    return (
        <div className="fixed top-0 right-0 w-1/3 h-full bg-gray-700 bg-opacity-90 p-4 text-white transition-transform transform translate-x-0">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{replaceAmp(jobTitle)}</h2>
                <button onClick={toggleDrawer} className="text-white text-xl">X</button>
            </div>
            <p className="mt-2">{companyName}</p>
            <div className="overflow-y-auto h-[calc(100%-50px)] pr-2 scrollbar-hidden">
                <JobDescription jobDescription={jobDescription} />
            </div>
        </div>
    )
}