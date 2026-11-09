import type {Metadata} from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import QuoteForm from "@/components/QuoteForm";
import {pageMetadata} from "@/lib/metadata";
export const metadata:Metadata=pageMetadata("Área de Atuação | NGA Topografia São Paulo","Atendimento na capital, Grande São Paulo, interior e litoral paulista.","/area-de-atuacao/");
export default function Page(){return <><Navbar/><main className="max-w-6xl mx-auto px-6 py-20 min-h-[50vh]"><h1 className="text-4xl font-bold mb-8">Área de atuação</h1><p className="text-xl max-w-3xl mb-12">Atendemos demandas na capital paulista, Grande São Paulo, interior e litoral do estado. Consulte disponibilidade de mobilização e condições para sua localidade.</p><a className="text-primary underline font-semibold" href="/contato/">Solicitar orçamento</a></main><Contact/></>}
