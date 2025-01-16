from flask import Flask, request, jsonify, make_response
from flask_migrate import Migrate
from flask_restful import Resource, Api
from models import db, User, Car, Rent
from flask_cors import CORS



app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///wheels4rent.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.json.compact = False

db.init_app(app)

migrate = Migrate(app, db)
api = Api(app)


# User Registration
class UserRegister(Resource):
    def post(self):
        data = request.get_json()
        name = data.get("name")
        username = data.get("username")
        email = data.get("email")
        password = data.get("password")


        if not username or not email or not password:
            return {"error": "Username, email, and password are required."}, 400

        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return {"error": "Email already in use."}, 400

        new_user = User(
            name=name,
            username=username,
            email=email,
            password=password,
        )

        db.session.add(new_user)
        db.session.commit()

        return new_user.to_dict(), 201

api.add_resource(UserRegister, "/user/register")



class UserLogin(Resource):
    def post(self):
        data = request.get_json()
        email = data.get("email")
        password = str(data.get("password"))

        user = User.query.filter_by(email=email).first()

        if user:
            return user.to_dict(), 200
        else:
            return {"error": "Invalid email or password"}, 400

api.add_resource(UserLogin, "/user/login")


# Fetch All Users
class Users(Resource):
    def get(self):
        users = User.query.all()
        return make_response(jsonify([user.to_dict() for user in users]), 200)

api.add_resource(Users, "/users")



class UserByID(Resource):
    def get(self, id):
        user = User.query.filter(User.id == id).first()
        if user:
            return make_response(jsonify(user.to_dict()), 200)
        else:
            return make_response(jsonify({"error": "User not found"}), 404)

    def patch(self, id):
        data = request.get_json()
        user = User.query.filter(User.id == id).first()

        if not user:
            return make_response(jsonify({"error": "User not found"}), 404)

        for attr in data:
            setattr(user, attr, data.get(attr))

        db.session.add(user)
        db.session.commit()

        return make_response(user.to_dict(), 200)

    def delete(self, id):
        user = User.query.filter(User.id == id).first()
        if user:
            db.session.delete(user)
            db.session.commit()
            return make_response("", 204)
        else:
            return make_response(jsonify({"error": "User not found"}), 404)

api.add_resource(UserByID, "/users/<int:id>")








class Cars(Resource):
    def get(self):
        cars = Car.query.all()
        return make_response(jsonify([car.to_dict() for car in cars]), 200)

    def post(self):
        data = request.get_json()
        user_id = data.get("user_id")
        name = data.get("name")
        price = data.get("price")
        image_url = data.get("image_url")
        is_available = data.get("is_available")
        type = data.get("type")

        new_car = Car(user_id=user_id, name=name, price=price, image_url=image_url, is_available=is_available, type=type)

        db.session.add(new_car)
        db.session.commit()

        return make_response(jsonify(new_car.to_dict()), 201)


class CarByID(Resource):
    def get(self, id):
        car = Car.query.filter(Car.id == id).first()
        if car:
            return make_response(jsonify(car.to_dict()), 200)
        else:
            return make_response(jsonify({"error": "car not found"}), 404)


    def patch(self, id):
        data = request.get_json()
        car = Car.query.filter(Car.id == id).first()

        if car:
            for attr, value in data.items():
                setattr(car, attr, value)

            db.session.commit()
            return make_response(jsonify(car.to_dict()), 200)
        else:
            return make_response(jsonify({"error": "car not found"}), 404)
    
    def delete(self, id):
        car = Car.query.filter(Car.id == id).first()

        if car:
            db.session.delete(car)
            db.session.commit()
            return make_response("", 204)
        else:
            return make_response(jsonify({"error": "car not found"}), 404)


api.add_resource(Cars, "/cars")
api.add_resource(CarByID, "/cars/<int:id>")







class Rent(Resource):
    def get(self):
        rents = Rent.query.all()
        return make_response(jsonify([rent.to_dict() for rent in rents]), 200)

    def post(self):
        data = request.get_json()
        user_id = data.get("user_id")
        car_id = data.get("car_id")
        end_date = data.get("end_date")

        car = Car.query.get(car_id)
        if not car or not car.is_available:
            return make_response(jsonify({"error": "Car is not available"}), 400)


        new_rent = Rent(user_id=user_id, car_id=car_id, end_date=end_date)

        car.is_available = False
        db.session.add(new_rent)
        db.session.commit()

        return make_response(jsonify(new_rent.to_dict()), 201)


class RentByID(Resource):
    def get(self, id):
        rent = Rent.query.filter(Rent.id == id).first()
        if rent:
            return make_response(jsonify(rent.to_dict()), 200)
        else:
            return make_response(jsonify({"error": "Rent not found"}), 404)

    def delete(self, id):
        rent = Rent.query.filter(Rent.id == id).first()
        if rent:
            # Mark the car as available again
            car = Car.query.get(rent.car_id)
            car.is_available = True

            # Delete the rent entry
            db.session.delete(rent)
            db.session.commit()
            return make_response("", 204)
        else:
            return make_response(jsonify({"error": "Rent not found"}), 404)


api.add_resource(Rent, "/rents")
api.add_resource(RentByID, "/rents/<int:id>")






if __name__ == "__main__":
    app.run(debug=True)






