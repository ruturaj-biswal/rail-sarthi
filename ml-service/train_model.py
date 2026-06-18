import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib

# Load Dataset
df = pd.read_csv("crowd_data.csv")

# Input Features
X = df[[
    "train_id",
    "day_of_week",
    "month",
    "booked_seats"
]]

# Output
y = df["crowd_percentage"]

# Train Model
model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)

model.fit(X, y)

# Save Model
joblib.dump(
    model,
    "crowd_model.pkl"
)

print("Model Trained Successfully!")