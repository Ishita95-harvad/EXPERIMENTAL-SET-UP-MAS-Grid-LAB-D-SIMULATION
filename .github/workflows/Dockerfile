FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["streamlit", "run", "streamlit_dashboard/app.py", "--server.port=8501", "--server.enableCORS=false"]
