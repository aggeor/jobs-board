"use client";

import replaceAmp, { jobIndustryColorMap, jobTypeColorMap } from "../helper";

interface Props {
    text: string;
    type: TagType;
}

export enum TagType{
    jobType,
    jobIndustry
}

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
