import matplotlib.pyplot as plt

models = ['ARIMA', 'LSTM+Prophet']
rmse = [100, 88]  # Assuming 12% improvement
colors = ['#FF6384', '#36A2EB']

plt.figure(figsize=(8, 6))
plt.bar(models, rmse, color=colors, edgecolor='black')
plt.title('Forecasting Accuracy Comparison')
plt.xlabel('Model')
plt.ylabel('RMSE')
plt.ylim(0, max(rmse) * 1.2)
plt.savefig('rmse_comparison.png', dpi=300, bbox_inches='tight')
plt.close()