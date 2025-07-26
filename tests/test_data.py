def test_sample_data_shape():
    import pandas as pd
    df = pd.read_csv('data/sample_energy_data.csv')
    assert df.shape[1] == 5, "Expected 5 columns"
    assert df.shape[0] == 48, "Expected 48 rows"
