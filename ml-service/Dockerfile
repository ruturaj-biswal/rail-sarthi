FROM python:3.11-slim

WORKDIR /app

COPY . .

RUN pip install flask pandas joblib scikit-learn

EXPOSE 5000

CMD ["python","app.py"]