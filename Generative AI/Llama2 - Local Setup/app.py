import time
import streamlit as st
from langchain.prompts import PromptTemplate
from langchain_community.llms import CTransformers


# method to fetch info from Llama2
def get_response_from_llama2(input_text, num_words, blog_type):

    # llm model
    llm = CTransformers(
                        model = 'model/llama-2-7b-chat.ggmlv3.q8_0.bin',
                        # model = 'model/llama-2-7b-chat.ggmlv3.q4_0.bin',
                        # model = 'model/llama-7b-ggml-model-q4_0.bin',
                        # model = 'model/llama-2-7b-chat-hf.Q5_K_M.gguf',
                        # model = 'model/neuuni-2-7b-miniassistant-mytho.v3.q4_k_m.bin',
                        model_type = 'llama',
                        gpu_layers = 50,
                        config={'max_new_tokens':256,
                                'temperature':0
                                }
                        )
    
    # prompt template
    template = "Write a blog for {blog_type} on topic {input_text} and it should not exceed {num_words} words."

    promp = PromptTemplate(input_variables = ['blog_type', 'input_text', 'num_words'],
                           template = template
                           )
    
    # generate response from llama2
    response = llm(promp.format(blog_type=blog_type, input_text=input_text, num_words=num_words))

    return response



# streamlit app
st.set_page_config(
    page_title="LangChain Llama2 App",
    page_icon="🦙",
    layout="centered",
    initial_sidebar_state="collapsed"
)

st.header('Local Llama2 Model 🦙')
input_text = st.text_input('Topic')


# creating divs
type_col, len_col = st.columns([5,5])

with type_col:
    blog_type = st.selectbox('Theme', 
                             ('Researcher', 'Data Scientist', 'Students'), 
                             index=0)
with len_col:
    num_words = st.text_input('Word Limit')
    
submit = st.button('Generate Blog')

# call llama2 model
if submit:
    start = time.time()

    response = get_response_from_llama2(input_text, num_words, blog_type)
    print('Llama2 Response\n')
    st.write(response)

    end = time.time()
    st.write(f'\nResponse : {round((end-start)/60,2)} mins')