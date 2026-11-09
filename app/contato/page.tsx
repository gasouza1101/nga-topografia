import type {Metadata} from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import QuoteForm from "@/components/QuoteForm";
import {pageMetadata} from "@/lib/metadata";
export const metadata:Metadata=pageMetadata("Contato e Orçamento | NGA Topografia","Solicite uma proposta de serviços de topografia e agrimensura.","/contato/");
export default function Page(){return <><Navbar/><main className="max-w-6xl mx-auto px-6 py-20 min-h-[50vh]"><h1 className="text-4xl font-bold mb-8">Solicite um orçamento</h1><p className="text-xl max-w-3xl mb-12">Informe o serviço desejado, a localização e as características da sua necessidade para iniciarmos uma proposta técnica.</p><QuoteForm/></main><Contact/></>}
