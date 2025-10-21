from phi.agent import Agent
from phi.model.groq import Groq
from phi.tools.website import WebsiteTools
from phi.tools.crawl4ai_tools import Crawl4aiTools
from phi.tools.firecrawl import FirecrawlTools
from phi.tools.yfinance import YFinanceTools
# import phi.api
# from phi.playground import Playground, serve_playgroun_app

import os
from dotenv import load_dotenv
load_dotenv()

fc_api_key = os.getenv('FC_API_KEY')

model = 'llama-3.3-70b-specdec'
# model = 'llama-3.2-3b-preview'


website_agent = Agent(
    tools=[WebsiteTools()], 
    show_tool_calls=True,
    role='search web for the given instructions',
    model=Groq(id=model,max_tokens=1000),
    instructions='Always include the source'
)

yfinance_agent = Agent(
    tools=[YFinanceTools(stock_price=True, analyst_recommendations=True, stock_fundamentals=True)],
    show_tool_calls=True,
    description="You are an investment analyst that researches stock prices, analyst recommendations, and stock fundamentals.",
    instructions=["Format your response using markdown and use tables to display data where possible."],
    model=Groq(id=model,max_tokens=1000)
)

crawl4ai_agent = Agent(
    tools=[Crawl4aiTools(max_length=None)], 
    role='search web for the given user instructions',
    show_tool_calls=True, 
    model=Groq(id=model,max_tokens=1000)
)

firecrawl_agent = Agent(
    tools=[FirecrawlTools(scrape=True, crawl=True, api_key=fc_api_key)], 
    show_tool_calls=True,
    role='search web for the given user instructions', 
    markdown=True,
    model=Groq(id=model,max_tokens=1000)
)

multi_agent = Agent(
    model=Groq(id=model,max_tokens=1000),
    team=[website_agent, yfinance_agent, crawl4ai_agent, firecrawl_agent],
    instructions=['search web as per user instructions', 'search web as per user instructions'],
    show_tool_calls=True,
    markdown=True
)


multi_agent.print_response("""Tell me about 'https://www.telus.com/en/' and Share the Telus Corp stock price and analyst recommendations""", 
                           markdown=True)