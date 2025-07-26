import matplotlib.pyplot as plt
import numpy as np

# Hypothetical data: 30 days, renewable integration (%)
days = np.arange(1, 31)
mas_integration = np.concatenate([
    np.linspace(60, 72, 10),  # Ramps up to 72% by day 10
    np.full(20, 72) + np.random.normal(0, 1, 20)  # Stabilizes with noise
])
baseline_integration = np.full(30, 55) + np.random.normal(0, 1.5, 30)  # Baseline ~55%

# Plot
plt.figure(figsize=(8, 6))
plt.plot(days, mas_integration, label="MAS (MAPPO)", color="blue", linewidth=2)
plt.plot(days, baseline_integration, label="Baseline (No AI)", color="red", linestyle="--", linewidth=2)
plt.xlabel("Day", fontsize=12)
plt.ylabel("Renewable Integration (%)", fontsize=12)
plt.title("Renewable Integration Trend Over 30 Days", fontsize=14)
plt.grid(True, linestyle="--", alpha=0.7)
plt.legend(fontsize=10)
plt.tight_layout()

# Save as high-resolution PNG for publication
plt.savefig("renewable_integration_trend.png", dpi=300)
plt.close()