const DEEPSEEK_API_KEY = "sk-bb4321f7d38e41ac9c44ed0f076173f7"
const DEEPSEEK_API_URL = "https://api.deepseek.com/v1"

async function chatWithDeepSeek(prompt) {
  const response = await fetch(`${DEEPSEEK_API_URL}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${DEEPSEEK_API_KEY}`
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2000
    })
  })
}

chatWithDeepSeek("Jelaskan tentang JavaScript dalam 3 kalimat")
  .then(response => console.log(response))
  .catch(error => console.error(error))