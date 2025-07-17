# streamlit_dashboard/app.py
import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt

st.title("🔋 AI Smart Grid Forecast Dashboard")
uploaded = st.file_uploader("Upload energy dataset (CSV)", type=["csv"])

if uploaded:
    df = pd.read_csv(uploaded)
    st.write(df.head())
    st.line_chart(df[["load_kw", "solar_kw", "wind_kw"]])
