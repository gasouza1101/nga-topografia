import type {Metadata} from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import QuoteForm from "@/components/QuoteForm";
import {pageMetadata} from "@/lib/metadata";
export const metadata:Metadata=pageMetadata("NGA Topografia | Conheça Nossa Empresa","Mais de 18 anos de experiência em agrimensura e topografia.","/empresa/");
export default function Page(){return <><Navbar/><main className="max-w-6xl mx-auto px-6 py-20 min-h-[50vh]"><h1 className="text-4xl font-bold mb-8">Sobre a NGA Topografia</h1><p className="text-xl max-w-3xl mb-12">Atuando desde 2008, a NGA presta serviços de agrimensura e topografia para obras, imóveis e infraestrutura em São Paulo. Nossa atuação envolve levantamentos técnicos, locações, cadastro e apoio à execução de projetos.</p><a className="text-primary underline font-semibold" href="/contato/">Solicitar orçamento</a></main><Contact/></>}
