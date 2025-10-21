from phi.agent import Agent
from phi.model.groq import Groq
from phi.tools.website import WebsiteTools
from phi.tools.crawl4ai_tools import Crawl4aiTools
from phi.tools.firecrawl import FirecrawlTools
from phi.tools.yfinance import YFinanceTools

import os
from dotenv import load_dotenv
load_dotenv()

fc_api_key = os.getenv('FC_API_KEY')

model = 'llama-3.3-70b-specdec'
# model = 'llama-3.2-3b-preview'


firecrawl_agent = Agent(
    tools=[FirecrawlTools(scrape=True, crawl=True, api_key=fc_api_key)], 
    show_tool_calls=True,
    role='search web for the given user instructions', 
    markdown=True,
    model=Groq(id=model,max_tokens=1000)
)

# firecrawl_agent.print_response("Summarize this https://finance.yahoo.com/")
firecrawl_agent.print_response("Summarize this https://www.telus.com/en/health")

