import type { Metadata } from "next";
export const SITE_URL = "https://ngatopografia.com.br";
export function pageMetadata(title:string,description:string,path:string):Metadata { const url = `${SITE_URL}${path}`; return {title,description,alternates:{canonical:url},openGraph:{title,description,url,siteName:"NGA Topografia",locale:"pt_BR",type:"website"}}; }
