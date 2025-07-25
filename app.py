import streamlit as st
import pandas as pd

st.title("AI Smart Grid Dashboard")
data = pd.read_csv("data/sample_energy_data.csv")
st.line_chart(data[['solar_generation', 'wind_generation', 'load_demand']])
