import type {MetadataRoute} from "next";
import {SITE_URL} from "@/lib/metadata";
export default function sitemap():MetadataRoute.Sitemap{return ["/","/topografia-para-obras/","/regularizacao-imobiliaria/","/topografia-para-infraestrutura/","/georreferenciamento/","/empresa/","/portfolio/","/area-de-atuacao/","/contato/"].map(path=>({url:SITE_URL+path,changeFrequency:"monthly" as const,priority:path==="/"?1:0.7}))}
