export default async function handler(req, res) {
  const API_KEY = process.env.GEMINI_API_KEY
  const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`

  const externalData = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: prompt }]
      }]
    })
  })
  const result = await externalData.json()
  
  res.status(200).json(result)
}
