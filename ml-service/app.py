from flask import Flask, request, jsonify
import pandas as pd
import joblib

app = Flask(__name__)

model = joblib.load("crowd_model.pkl")


@app.route("/predict-crowd", methods=["POST"])
def predict_crowd():

    data = request.json

    sample = pd.DataFrame({
        "train_id": [data["train_id"]],
        "day_of_week": [data["day_of_week"]],
        "month": [data["month"]],
        "booked_seats": [data["booked_seats"]]
    })

    prediction = model.predict(sample)

    return jsonify({
        "crowd_percentage": round(
            float(prediction[0]), 2
        )
    })

sample = pd.DataFrame({
    "train_id": [1],
    "day_of_week": [5],
    "month": [6],
    "booked_seats": [750]
})

print(model.predict(sample))
if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )