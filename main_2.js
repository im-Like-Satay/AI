// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai"

const openai = new OpenAI({
        baseURL: "https://api.deepseek.com",
        apiKey: "sk-bb4321f7d38e41ac9c44ed0f076173f7"
})

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
  })

  console.log(completion.choices[0].message.content)
}

main()