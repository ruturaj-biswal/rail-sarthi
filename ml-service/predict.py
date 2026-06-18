import pandas as pd
import joblib

model = joblib.load("crowd_model.pkl")

sample = pd.DataFrame({
    "train_id": [1],
    "day_of_week": [5],
    "month": [6],
    "booked_seats": [750]
})

prediction = model.predict(sample)

print("Predicted Crowd:", prediction[0])