import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
const genAI = new GoogleGenerativeAI("AIzaSyD0g0FfRgyoes6V84JNTCjkQXiZFZwyANo");

const AiCommands = async (query) => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(query);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  try {
    const response = await axios.post(
      "https://text2audio.cc/api/audio",
      {
        language: "hi-IN",
        paragraphs: text,
        splitParagraph: false,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data); // Handle the response data as needed
  } catch (error) {
    console.error(error);
  }
  // return text;
};
module.exports = {
  AiCommands,
};
