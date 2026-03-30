export async function handler() {
  try {
    const response = await fetch("https://api.openai.com/v1/realtime/sessions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
        // ❌ IMPORTANTE: NO pongas openai-beta
      },
      body: JSON.stringify({
        model: "gpt-4o-realtime-preview",
        voice: "alloy",
        instructions: "You are Morgan, a friendly English pronunciation coach. Help the student improve pronunciation through voice conversation."
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data.client_secret)
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
