// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const query = req.query;
  const { question } = query;
  console.log(question);
  const { Configuration, OpenAIApi } = require("openai");

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "you are ethio telecom chatbot, keep your answers concise and simple, if you don't know the answer of a question say dial 994 for more info",
      },
      {
        role: "user",
        content: `${question}`,
      },
    ],
  });
  res.send({
    message: completion.data.choices[0].message,
  });
}
