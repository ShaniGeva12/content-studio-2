import { createAgent } from "langchain";
import { TavilySearch } from "@langchain/tavily";
import { model } from "../models.js";

// Pre-built tool: web search designed for LLMs.
const searchWeb = new TavilySearch({ maxResults: 5, name: "search_web" });