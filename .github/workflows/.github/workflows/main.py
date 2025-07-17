# fastapi_app/main.py
from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np

app = FastAPI()

class ForecastRequest(BaseModel):
    hours: int

@app.post("/forecast")
def forecast(data: ForecastRequest):
    return {"forecast_kw": list(np.random.randint(100, 200, size=data.hours))}
