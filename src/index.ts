import 'dotenv/config';
import {createAgent, initChatModel} from 'langchain';
import {model} from "./models.js";

const agent = createAgent({
    model: model
});