import type {Metadata} from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import QuoteForm from "@/components/QuoteForm";
import {pageMetadata} from "@/lib/metadata";
export const metadata:Metadata=pageMetadata("Portfólio de Topografia | NGA","Conheça os trabalhos técnicos da NGA Topografia.","/portfolio/");
export default function Page(){return <><Navbar/><main className="max-w-6xl mx-auto px-6 py-20 min-h-[50vh]"><h1 className="text-4xl font-bold mb-8">Portfólio técnico</h1><p className="text-xl max-w-3xl mb-12">Estamos selecionando fotografias e descrições de serviços reais executados pela NGA, respeitando autorizações e confidencialidade dos contratantes. Os registros serão publicados após validação.</p><a className="text-primary underline font-semibold" href="/contato/">Solicitar orçamento</a></main><Contact/></>}
