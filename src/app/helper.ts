

export default function replaceAmp(text:string):string{
    return text.replace("&amp;", "&").replace("amp;","");
}