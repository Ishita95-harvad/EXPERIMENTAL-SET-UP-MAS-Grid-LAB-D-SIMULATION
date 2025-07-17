# -ai-smart-grid-mas-
"A Multi-Agent Reinforcement Learning Approach for Smart Grid Optimization and Real-Time Energy Management"

[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.12345678.svg)](https://doi.org/10.5281/zenodo.12345678)
![GitHub repo size](https://img.shields.io/github/repo-size/Ishita95-harvad/ai-smartgrid-mas)
![GitHub last commit](https://img.shields.io/github/last-commit/Ishita95-harvad/ai-smartgrid-mas)
![GitHub issues](https://img.shields.io/github/issues/Ishita95-harvad/ai-smartgrid-mas)
![License](https://img.shields.io/github/license/Ishita95-harvad/ai-smartgrid-mas)
![Python](https://img.shields.io/badge/python-3.10-blue.svg)
![Google Cloud](https://img.shields.io/badge/Powered%20by-Google%20Cloud-blue?logo=google-cloud)
![TensorFlow](https://img.shields.io/badge/Built%20with-TensorFlow-FF6F00?logo=tensorflow)

[![Open LSTM in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Ishita95-harvad/ai-smartgrid-mas/blob/main/notebooks/forecasting_lstm.ipynb)
[![Open Prophet in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Ishita95-harvad/ai-smartgrid-mas/blob/main/notebooks/prophet_model.ipynb)
[![Open ARIMA in Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/Ishita95-harvad/ai-smartgrid-mas/blob/main/notebooks/arima_model.ipynb)

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## 🌱 AI-Powered Energy Efficiency and Climate-Responsive Forecasting System
A research framework integrating **AI-based forecasting**, **anomaly detection**, and **multi-agent optimization** to enhance energy efficiency in smart grids, compliant with **ISO 50001** and **UN SDG 7**.

---

## 📌 Objectives

- Develop a **modular Multi-Agent System (MAS)** integrating:
  - Short-term forecasting (LSTM, ARIMA, Prophet)
  - Real-time anomaly detection (Autoencoders, Isolation Forest)
  - Grid optimization using mathematical modeling (Pyomo)
- Leverage public and sensor-based datasets from India for real-time modeling
- Deploy on **Google Cloud/Azure** with open dashboards and APIs
- Align with international energy standards and climate goals

---

## 🧠 Methodology

### 3.1 📊 Data Collection

| Source | Data Type | Description |
|--------|-----------|-------------|
| **CEA** (Central Electricity Authority) | Energy Generation, Load Data | National grid-level metrics |
| **POSOCO** | Real-time Grid Frequency, Demand, Load Forecast | Operational grid data |
| **IMD** | Temperature, Rainfall, Humidity, Wind | Weather factors for forecasting |
| **MNRE** | Renewable Energy Reports | Solar/wind capacity, performance |
| **IoT/SCADA Sensors** | Smart Meter + Real-time Usage | Local microgrid data and anomalies |

---

### 3.2 🧠 Model Development

**📂Repository Structure**

```
├── README.md               <-- Project overview, abstract, architecture

├── /notebooks              <-- Jupyter notebooks for LSTM, Prophet, ARIMA

├── /src                    <-- Python modules (agent logic, optimization)

├── /data                   <-- Sample dataset (cleaned and anonymized)

├── /models                 <-- Trained models (optional)

├── requirements.txt        <-- Python dependencies

├── LICENSE                 <-- MIT or Apache License

├── /figures                <-- Plots, model diagrams

├── /simulation             <-- GridLAB-D config, RL agents
```
```
📂 ai-smart-grid-mas/
├── README.md
├── LICENSE (MIT)
├── requirements.txt
├── /data
│   └── sample_energy_data.csv
├── /notebooks
│   ├── forecasting_lstm.ipynb
│   ├── prophet_model.ipynb
│   └── arima_model.ipynb
├── /src
│   ├── agent.py
│   ├── optimization.py
│   ├── rl_agent.py
│   └── communication.py
├── /simulation
│   └── gridlabd_config.glm
├── /models
│   └── pretrained_model.pkl
├── /figures
│   └── mas_architecture.png
└── /docs
    └── paper_summary.pdf
```




#### 🔮 Forecasting Models

Accurately predict short-term energy demand and renewable generation using:

- **LSTM (Long Short-Term Memory)**: Deep learning model for multivariate time-series forecasting  
- **ARIMA (AutoRegressive Integrated Moving Average)**: Classical statistical model for baseline comparison  
- **Prophet**: Robust to seasonality, holidays, and missing data – ideal for real-world deployment

**Output**: Energy demand (MW), renewable generation (solar/wind), load curves

#### 🚨 Anomaly Detection Models

Early detection of irregular consumption, grid faults, or forecast errors:

- **Isolation Forest**: Efficient for high-dimensional, sparse data anomalies  
- **Autoencoders (Deep Learning)**: Learn normal behavior and flag deviations in usage patterns

**Use Case**: SCADA/sensor stream analysis for operational fault detection or sudden surges/drops

#### ⚙️ Optimization Module

Balance energy supply and demand, minimize cost and loss:

- **Pyomo** (Python Optimization Modeling Objects):
  - Linear and non-linear optimization  
  - Formulate grid dispatch, storage scheduling, renewable prioritization
- **Constraints**: Capacity limits, peak load hours, weather uncertainty  
- **Objectives**: Cost minimization, loss reduction, grid stability

#### 🧩 Agent-Based System Architecture
Intelligent agents coordinate and communicate to act autonomously based on roles:

- **Platform**:
  - `JADE` (Java Agent Development) for scalable agent systems  
  - Or **Python-based MAS** using `aiomas` / `spade` for integration ease
    
- **Agent Roles**:
  - **Forecasting Agent**`: Supplies energy/load predictions  
  - **Anomaly Agent**`: Flags abnormal patterns  
  - **Optimization Agent**`: Recommends optimal dispatch  
  - **Coordinator Agent**`: Orchestrates decision-making and API calls



### 🔁 Model Interaction Diagram (Mermaid)
`````
```mermaid

graph TD
    A[Data Inputs: Weather, Load, Gen Data] --> B[Forecasting Agent (LSTM/Prophet)]
    A --> C[Anomaly Agent (Autoencoder/IF)]
    B --> D[Optimization Agent (Pyomo)]
    C --> D
    D --> E[Coordinator Agent]
    E --> F[Streamlit Dashboard/API]
``````

### 3.3 🧰 Tools & Platforms

| Category | Tools / Platforms | Use |
|---------|-------------------|-----|
| **Programming & ML** | Python, Jupyter, Pyomo | Model training, simulations |
| **AI Frameworks** | TensorFlow, Keras, Prophet | Forecasting and anomaly models |
| **Visualization** | Streamlit, Power BI, Seaborn | Dashboards & data exploration |
| **Cloud & Hosting** | Google Cloud / Azure | Deployment, API management |
| **Web Interface** | FastAPI, Flask | REST APIs and front-end interface |
| **Version Control** | GitHub | Collaboration and versioning |
| **Open Repository** | Zenodo | Dataset/code archiving with DOI |

## Run the Application 

```bash
python main.py
```

Or launch the interactive dashboard:

```bash
streamlit run app/dashboard.py
```

### ☁️ Deploy to Cloud (Google Cloud Run / Azure App Service)

1. Create a project on Google Cloud / Azure
2. Enable Cloud Run or App Service
3. Use the Dockerfile for containerized deployment:

```bash
docker build -t ai-energy-mas .
docker run -p 8501:8501 ai-energy-mas
```
## 🔗 Useful Links

- 🌐 [Zenodo Project Archive](https://zenodo.org/)
- 📊 [Live Dashboard (Demo)](https://your-streamlit-url/)
- 📖 [Publication Target – IEEE Access](https://ieeeaccess.ieee.org/)
- 🔄 [Version Control – GitHub](https://github.com/YourRepo)


## 📎 Step 4: Required Files
``

- `README.md`
- `requirements.txt` (with: `numpy`, `pandas`, `scikit-learn`, `keras`, `prophet`, `statsmodels`, `matplotlib`)
- Dummy CSV for `/data/sample_energy_data.csv`
- Forecasting notebooks
- Diagrams as placeholders in `/figures`
``
