Deep Learning | LLMs | Fine-Tuning
==============================

This repository is my attempt to build, train and fine-tune models.

I'll be focusing primarily on the following:

1. Transformers Based models
2. Large Language Models e.g text-to-text
3. Large Models e.g text-to-images or text-to-videos

## Projects

1. [Generative AI Chatbot using LangChain](https://github.com/singh-karanpal/datascience/tree/main/Generative%20AI/LangChain%20Gen%20AI%20-%20Chatbot)
2. [RAG Chatbot - Vector Enabled Semantic Search](https://github.com/singh-karanpal/datascience/tree/main/Generative%20AI/RAG%20Chatbot%20-%20Vector%20Enabled%20Semantic%20Search)
3. [Llama2 - Local Model](https://github.com/singh-karanpal/datascience/tree/main/Generative%20AI/Llama2%20-%20Local%20Setup)
4. [Object Detection - WebML with TensorFlow JS](https://github.com/singh-karanpal/datascience/tree/main/Generative%20AI/Object%20Detection%20-%20TensorFlow%20JS)
5. [Llama2 - Fine Tuning on Custom Data](https://github.com/singh-karanpal/datascience/tree/main/Generative%20AI/Llama2%20Fine-Tuning)

## Package Manager
```
conda update conda-build
```

Project Organization
------------

    ├── LICENSE
    ├── Makefile           <- Makefile with commands like `make data` or `make train`
    ├── README.md          <- The top-level README for developers using this project.
    ├── data
    │   ├── external       <- Data from third party sources.
    │   ├── interim        <- Intermediate data that has been transformed.
    │   ├── processed      <- The final, canonical data sets for modeling.
    │   └── raw            <- The original, immutable data dump.
    │
    ├── docs               <- A default Sphinx project; see sphinx-doc.org for details
    │
    ├── models             <- Trained and serialized models, model predictions, or model summaries
    │
    ├── notebooks          <- Jupyter notebooks. Naming convention is a number (for ordering),
    │                         the creator's initials, and a short `-` delimited description, e.g.
    │                         `1.0-jqp-initial-data-exploration`.
    │
    ├── references         <- Data dictionaries, manuals, and all other explanatory materials.
    │
    ├── reports            <- Generated analysis as HTML, PDF, LaTeX, etc.
    │   └── figures        <- Generated graphics and figures to be used in reporting
    │
    ├── requirements.txt   <- The requirements file for reproducing the analysis environment, e.g.
    │                         generated with `pip freeze > requirements.txt`
    │
    ├── setup.py           <- makes project pip installable (pip install -e .) so src can be imported
    ├── src                <- Source code for use in this project.
    │   ├── __init__.py    <- Makes src a Python module
    │   │
    │   ├── data           <- Scripts to download or generate data
    │   │   └── make_dataset.py
    │   │
    │   ├── features       <- Scripts to turn raw data into features for modeling
    │   │   └── build_features.py
    │   │
    │   ├── models         <- Scripts to train models and then use trained models to make
    │   │   │                 predictions
    │   │   ├── predict_model.py
    │   │   └── train_model.py
    │   │
    │   └── visualization  <- Scripts to create exploratory and results oriented visualizations
    │       └── visualize.py
    │
    └── tox.ini            <- tox file with settings for running tox; see tox.readthedocs.io


--------

<p><small>Project based on the <a target="_blank" href="https://drivendata.github.io/cookiecutter-data-science/">cookiecutter data science project template</a>. #cookiecutterdatascience</small></p>
