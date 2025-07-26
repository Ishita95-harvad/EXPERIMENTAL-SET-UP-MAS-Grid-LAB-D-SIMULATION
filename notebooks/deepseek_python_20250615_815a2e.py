model = Prophet(
    changepoint_prior_scale=0.05,
    seasonality_mode='multiplicative'
)
model.add_regressor('cloud_cover')
