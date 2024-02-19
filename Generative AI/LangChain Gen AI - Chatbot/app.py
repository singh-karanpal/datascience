# QA Chatbot

# imports
import os

from langchain.llms import OpenAI
# from openai import OpenAI
from dotenv import load_dotenv
import streamlit as st

# loading env variables from .env
load_dotenv()

# method to call OpenAI api
def get_openai_response(question):
    # llm = OpenAI(api_key=os.getenv('OPENAI_API_KEY'), model_name='gpt-3.5-turbo', temperature=0.6,)
    llm = OpenAI(api_key=os.getenv('OPENAI_API_KEY'), temperature=0.6,)
    response = llm.predict(question)
    return response


# starting streamlit UI
st.set_page_config(page_title='My First Gen AI Chatbot')
st.header('LangChain Gen AI')

input = st.text_input('Type Here', key='input')
submit = st.button('Ask Question')

# if clicked
if submit:
    st.subheader('Response: ')

    response = get_openai_response(input)
    st.write(response)
        