import {initChatModel} from "langchain";

// initChatModel is LangChain's universal model factory: pass a model name,
// get back a standardized chat model. Provider is inferred from the name.
export const model = await initChatModel("gpt-4o", {
    temperature: 0.3,
    timeout: 60_000,
});