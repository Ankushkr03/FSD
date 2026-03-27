from flask import Flask, jsonify
import requests

app = Flask(__name__)

customers = {
    101: {"id": 101, "name": "Ankush_kr", "email": "singnankush.j@gmail.com"},
    102: {"id": 102, "name": "Aayush_Jena", "email": "aayushjena5@gmail.com"}
}


@app.route("/customers/<int:user_id>/orders")
def get_account_details(user_id):
    customer = customers.get(user_id)

    if not customer:
        return jsonify({"error": "Customer not found"}), 404

    # Call Order Service
    try:
        response = requests.get(
            f"http://127.0.0.1:5002/orders/user/{user_id}",
            timeout=3
        )

        if response.status_code == 200:
            orders = response.json()
        else:
            orders = []
    except requests.exceptions.RequestException:
        orders = []
    
    account_data = {
        "customer": customer,
        "orders": orders
    }

    return jsonify(account_data)


@app.route("/")
def home():
    return jsonify({"service": "Customer Service Running"})


if __name__ == "__main__":
    app.run(port=5001, debug=True)