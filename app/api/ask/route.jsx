
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Mensaje requerido' }, { status: 400 });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: message,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error('Respuesta inválida de Gemini');
    }

    const reply = data.candidates[0].content.parts[0].text;

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Error en la API:', error);
    return NextResponse.json({ error: 'Error al conectar con Gemini' }, { status: 500 });
  }
}
