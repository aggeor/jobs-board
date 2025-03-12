
export {replaceAmp};

function replaceAmp(text:string):string{
    return text.replace("&amp;", "&").replace("amp;","");
}


export const jobTypeColorMap: Record<string, { bg: string; text: string; darkBg: string; darkText: string }> = {
    "full-time": {
      bg: "bg-green-100",
      text: "text-green-800",
      darkBg: "dark:bg-green-700",
      darkText: "dark:text-green-100",
    },
    "contract": {
      bg: "bg-blue-100",
      text: "text-blue-800",
      darkBg: "dark:bg-blue-700",
      darkText: "dark:text-blue-100",
    },
    "internship": {
      bg: "bg-yellow-100",
      text: "text-yellow-800",
      darkBg: "dark:bg-yellow-700",
      darkText: "dark:text-yellow-100",
    },
  };
  
  export const jobIndustryColorMap: Record<string, { bg: string; text: string; darkBg: string; darkText: string }> = {
      "Software Engineering": {
        bg: "bg-green-100",
        text: "text-green-800",
        darkBg: "dark:bg-green-900",
        darkText: "dark:text-green-300",
      },
      "Content &amp; Editorial": {
        bg: "bg-yellow-100",
        text: "text-yellow-800",
        darkBg: "dark:bg-yellow-900",
        darkText: "dark:text-yellow-300",
      },
      "DevOps &amp; Infrastructure": {
        bg: "bg-red-100",
        text: "text-red-800",
        darkBg: "dark:bg-red-900",
        darkText: "dark:text-red-300",
      },
      "Sales": {
        bg: "bg-blue-100",
        text: "text-blue-800",
        darkBg: "dark:bg-blue-900",
        darkText: "dark:text-blue-300",
      },
      "Technical Support": {
        bg: "bg-orange-100",
        text: "text-orange-800",
        darkBg: "dark:bg-orange-900",
        darkText: "dark:text-orange-300",
      },
      "Finance &amp; Accounting": {
        bg: "bg-purple-100",
        text: "text-purple-800",
        darkBg: "dark:bg-purple-900",
        darkText: "dark:text-purple-300",
      },
      "Marketing &amp; Sales": {
        bg: "bg-cyan-100",
        text: "text-cyan-800",
        darkBg: "dark:bg-cyan-900",
        darkText: "dark:text-cyan-300",
      },
      "Customer Success": {
        bg: "bg-emerald-100",
        text: "text-emerald-800",
        darkBg: "dark:bg-emerald-900",
        darkText: "dark:text-emerald-300",
      },
      "Data Science &amp; Analytics": {
        bg: "bg-teal-100",
        text: "text-teal-800",
        darkBg: "dark:bg-teal-900",
        darkText: "dark:text-teal-300",
      },
      "Web &amp; App Design": {
        bg: "bg-lime-100",
        text: "text-lime-800",
        darkBg: "dark:bg-lime-900",
        darkText: "dark:text-lime-300",
      },
      "HR &amp; Recruiting": {
        bg: "bg-sky-100",
        text: "text-sky-800",
        darkBg: "dark:bg-sky-900",
        darkText: "dark:text-sky-300",
      },
      "Legal &amp; Compliance": {
        bg: "bg-rose-100",
        text: "text-rose-800",
        darkBg: "dark:bg-rose-900",
        darkText: "dark:text-rose-300",
      },
      "Business Development": {
        bg: "bg-indigo-100",
        text: "text-indigo-800",
        darkBg: "dark:bg-indigo-900",
        darkText: "dark:text-indigo-300",
      },
  };