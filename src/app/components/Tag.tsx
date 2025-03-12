"use client";

import replaceAmp from "../helper";

interface Props {
    text: string;
    type: TagType;
}

export enum TagType{
    jobType,
    jobIndustry
}

const jobTypeColorMap: Record<string, { bg: string; text: string; darkBg: string; darkText: string }> = {
  "full-time": {
    bg: "bg-green-100",
    text: "text-green-800",
    darkBg: "dark:bg-green-900",
    darkText: "dark:text-green-300",
  },
  "contract": {
    bg: "bg-blue-100",
    text: "text-blue-800",
    darkBg: "dark:bg-blue-900",
    darkText: "dark:text-blue-300",
  },
  "internship": {
    bg: "bg-yellow-100",
    text: "text-yellow-800",
    darkBg: "dark:bg-yellow-900",
    darkText: "dark:text-yellow-300",
  },
};

const jobIndustryColorMap: Record<string, { bg: string; text: string; darkBg: string; darkText: string }> = {
    "Software Engineering": {
      bg: "bg-blue-100",
      text: "text-blue-800",
      darkBg: "dark:bg-blue-900",
      darkText: "dark:text-blue-300",
    },
    "Content &amp; Editorial": {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      darkBg: "dark:bg-yellow-900",
      darkText: "dark:text-yellow-300",
    },
};

export default function Tag({ text , type }: Props) {
  var colorClasses;
   if(type === TagType.jobType){
    colorClasses = jobTypeColorMap[text] || jobTypeColorMap["full-time"];
   } else{
    colorClasses = jobIndustryColorMap[text] ||  jobIndustryColorMap["Software Engineering"]
   }

  return (
    <span
      className={`${colorClasses.bg} ${colorClasses.text} text-xs font-medium me-2 px-2.5 py-0.5 rounded-2xl
                  ${colorClasses.darkBg} ${colorClasses.darkText}`}
    >
      {replaceAmp(text).toUpperCase()}
    </span>
  );
}
