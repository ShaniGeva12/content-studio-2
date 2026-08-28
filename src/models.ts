import {initChatModel} from "langchain";

export const model = await initChatModel('gpt-4o', {
    temperature: 0, // The lower the temp the statistically closer association answer to the keyword
    maxTokens: 1000, // max output tokens before error
});

export const creativeModel= await initChatModel('gpt-4o', {
    temperature: 1,
    maxTokens: 1000,
});