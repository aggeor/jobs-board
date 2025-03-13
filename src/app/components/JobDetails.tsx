import { useEffect, useRef } from "react";
import { replaceAmp } from "../helper";
import DOMPurify from "dompurify";

interface Props{
    jobTitle:string,
    companyName:string,
    companyLogo:string,
    url:string
    jobDescription:string,
    toggleDrawer:()=>void,
}

function JobDescription({ jobDescription }: { jobDescription: string }) {
  const sanitizedHTML = DOMPurify.sanitize(jobDescription);

  return (
      <div className="prose max-w-none job-description" dangerouslySetInnerHTML={{ __html: sanitizedHTML }} /> 
  );
}

export default function JobDetails({jobTitle, companyName, companyLogo, url, jobDescription, toggleDrawer}:Props){
    const drawerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
            toggleDrawer(); // Close the drawer if clicking outside
        }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggleDrawer]);
    return (
        <div ref={drawerRef} className="fixed top-0 right-0 w-2/5 h-full bg-gray-700 bg-opacity-90 p-4 text-white transition-transform transform translate-x-0">
            <div className="flex justify-between items-start mb-4">
                
                <div className="flex flex-row">
                    <img className="w-16 h-16 max-w-full rounded-2xl" src={companyLogo} alt="jobImg" />
                    <div className="flex flex-col">
                        <h1 className="ml-2 text-2xl font-bold">{replaceAmp(jobTitle)}</h1>
                        <h2 className="ml-2 text-1xl">{companyName}</h2>
                    </div>
                </div>
                <button onClick={toggleDrawer} className="text-white text-xl">X</button>
            </div>
            <a href={url} className="bg-rose-900 me-2 px-3 py-1 rounded-md">Apply</a>
            <div className="overflow-y-auto h-[calc(100%-50px)] pr-2 scrollbar-hidden">
                <JobDescription jobDescription={jobDescription} />
            </div>
        </div>
    )
}