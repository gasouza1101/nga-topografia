import OpenAI from "openai";

// Marca essa rota como dinâmica (não fazer SSG)
export const dynamic = "force-dynamic";

/**
 * POST /api/chat
 * Endpoint para enviar mensagens para o ChatGPT
 */
export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      { error: "OPENAI_API_KEY não configurada" },
      { status: 500 }
    );
  }

  try {
    const { message } = await req.json();

    if (!message) {
      return Response.json(
        { error: "Mensagem é obrigatória" },
        { status: 400 }
      );
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 1000,
    });

    const content = response.choices[0].message.content;

    return Response.json({
      output: content,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "Erro ao processar requisição" },
      { status: 500 }
    );
  }
}