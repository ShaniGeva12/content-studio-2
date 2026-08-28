import { HumanMessage } from "@langchain/core/messages";
import { researchAgent } from "./agents/research-agent.js";

const topic = process.argv[2] ?? "The rise of edge computing";

console.log(`🔎 Researching: ${topic}\n`);

const result = await researchAgent.invoke({
    messages: [new HumanMessage(`Research this topic: ${topic}`)],
});

console.log(result.messages.at(-1)?.content);