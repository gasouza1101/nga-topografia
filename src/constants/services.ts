/**
 * Dados dos serviços
 * Lista completa de serviços oferecidos pela NGA Topografia
 */

import { Service } from "@/types";

export const SERVICES: Service[] = [
 {id:"levantamento-planialtimetrico",title:"Levantamento Planialtimétrico Cadastral",description:"Levantamentos de terreno, elementos existentes e cotas para projetos e obras.",icon:"Ruler",category:"levantamentos"},
 {id:"nivelamento",title:"Nivelamento Geométrico",description:"Determinação de diferenças de nível e cotas de referência.",icon:"Ruler",category:"levantamentos"},
 {id:"terraplenagem",title:"Apoio Topográfico à Terraplenagem",description:"Levantamentos e controle geométrico para movimentação de terra.",icon:"Box",category:"projetos"},
 {id:"georreferenciamento",title:"Georreferenciamento",description:"Levantamentos e pontos de apoio georreferenciados conforme o escopo contratado.",icon:"Map",category:"georreferenciamento"},
 {id:"locacao",title:"Locação de Obras",description:"Locação de eixos, alinhamentos e pontos conforme projeto fornecido.",icon:"Zap",category:"locacao"},
 {id:"asbuilt",title:"Levantamento As Built",description:"Cadastro das condições executadas para documentação técnica.",icon:"FileText",category:"levantamentos"},
 {id:"drenagem",title:"Topografia para Drenagem e Saneamento",description:"Cadastro e apoio topográfico em redes e estruturas de infraestrutura.",icon:"MapPin",category:"levantamentos"},
];
