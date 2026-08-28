import 'dotenv/config';
import {createAgent, HumanMessage, initChatModel} from 'langchain';

const llm = await initChatModel('gpt-4o');

const agent = createAgent({
    model: llm
});

const result = await agent.invoke({
    messages: [new HumanMessage('Whats new in CSS?')],
});

console.log(result.messages.at(-1)?.content);