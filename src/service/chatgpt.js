// This code is for v4 of the openai package: npmjs.com/package/openai
//import OpenAI from "openai";
const {Configuration, OpenAIApi} = require("openai")

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function getCompletion(){
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [],
        temperature: 0.5,
        max_tokens: 256,
      });

      console.log(response);

}

getCompletion();