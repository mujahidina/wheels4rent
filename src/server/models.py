
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from flask_migrate import Migrate
from sqlalchemy import MetaData, func
from datetime import datetime, timedelta
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData()
db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(), nullable=False)
    email = db.Column(db.String(), unique=True, nullable=False)
    password = db.Column(db.String(), nullable=False)
    cars = db.relationship('Car', backref='owner', lazy=True)
    rentals = db.relationship('Rent', backref='user', lazy=True)
  
    @validates('password')
    def validate_password(self, key, password):
        if len(password) < 8:
            raise ValueError('Password must be more than 8 characters.')
        return password
    
    @validates('email')
    def validate_email(self, key, email):
        if not email.endswith("@gmail.com"):
            raise ValueError("Email is not valid. It should end with @gmail.com")
        return email

    def __repr__(self):
        return f'<User {self.id} ({self.name})>'


class Car(db.Model, SerializerMixin):
    __tablename__ = 'cars'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)  
    price = db.Column(db.Integer, nullable=False)
    image_url = db.Column(db.String, nullable=False)  
    type = db.Column(db.String, nullable=False)
    is_available = db.Column(db.Boolean, default=True, nullable=False)  
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    rentals = db.relationship('Rent', backref='car', lazy=True)



    def __repr__(self):
        return f'<Car {self.id} ({self.name})>'


class Rent(db.Model, SerializerMixin):
    __tablename__ = 'rents'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    car_id = db.Column(db.Integer, db.ForeignKey('cars.id'), nullable=False)
    start_date = db.Column(db.DateTime, default=func.now(), nullable=False)
    end_date = db.Column(db.DateTime, nullable=False)


    def __repr__(self):
        return f'<Rent {self.id} User {self.user_id} Car {self.car_id}>'




