# NGA Topografia — versão de homologação

O site de produção não foi modificado. Esta cópia acrescenta quatro páginas comerciais e quatro páginas institucionais, sitemap, robots, metadados, formulário via WhatsApp e eventos de clique.

## Antes de publicar
1. Confirmar domínio canônico, informações da empresa e serviços/habilitações.
2. Adicionar fotos e casos reais autorizados ao portfólio. Os exemplos genéricos foram retirados.
3. Configurar GA4 no ambiente de hospedagem e validar eventos de conversão. A tag GA4 é carregada quando `NEXT_PUBLIC_GA_ID` está configurada. Verificar eventos e conversões no GA4 e Google Ads antes de publicar.
4. Testar o WhatsApp, telefone, formulários e dispositivos móveis.
5. Fazer inventário das URLs antigas indexadas e criar redirects 301 se houver mudanças.
6. Rodar `npm install`, `npm run build` e testes antes de implantar em ambiente de homologação.
7. Validar sitemap, Search Console, métricas e publicação gradual.

## Observações
- O formulário abre uma mensagem pré-preenchida no WhatsApp; não há backend de e-mail.
- As páginas secundárias de serviços não foram criadas para evitar conteúdo superficial.
- O projeto original continha exemplos não confirmados de portfólio e descrições de serviços amplas; revisar a lista geral de serviços antes de publicar.
