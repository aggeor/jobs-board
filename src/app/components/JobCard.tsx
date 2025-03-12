"use client";
import { Job, JobType } from "../api";
import replaceAmp from "../helper";
import Tag, { TagType } from "./Tag";
import { FaLocationDot } from "react-icons/fa6";

interface Props {
    data: Job;
}

export default function JobCard({ data }: Props) {
    const date = data.pubDate.toLocaleString();
    return (
        <div className="flex items-center m-2 bg-linear-to-r from-gray-900 via-gray-800 to-gray-500 rounded-2xl p-4">
            <img className="w-16 h-16 max-w-full rounded-2xl" src={data.companyLogo} alt="jobImg" />
            
            <div className="ml-3 flex flex-col w-full">
                <a href={data.url} target="_blank" rel="noopener noreferrer">
                    <div className="font-normal text-base">
                        {data.companyName} {data.jobIndustry.map((jobIndustry) => (
                            <Tag key={jobIndustry} type={TagType.jobIndustry} text={jobIndustry} />
                        ))}
                    </div>

                    <div className="font-bold text-lg">
                        {replaceAmp(data.jobTitle)}
                    </div>

                    <div className="font-light text-xs flex items-center justify-between mt-1">
                        <div className="flex items-center">
                            <FaLocationDot className="mr-1" />
                            <div className="mr-2">{data.jobGeo}</div>
                            <div>{data.jobType.map((type) => (
                                <Tag key={type} type={TagType.jobType} text={type} />
                            ))}</div>
                        </div>
                        <div className="font-light text-xs whitespace-nowrap">
                            {date}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
