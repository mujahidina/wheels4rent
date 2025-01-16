from app import db, app
from models import Car

def seed_data():
    with app.app_context():

        print('Deleting existing cars...')
        Car.query.delete()

        print('Creating cars...')
        
        user_id = 1  

        # Pickup cars
        pickup1 = Car(name='Ford F-150', price=400, image_url='https://img.freepik.com/free-psd/view-crossroad-car_23-2151780818.jpg?t=st=1737031551~exp=1737035151~hmac=618a56dbe5fea0ac82f236bc45fa0d73a2aed70d318e41def1f37ff82eb912eb&w=900', type='Pickup', is_available=True, user_id=user_id)
        pickup2 = Car(name='Chevrolet Silverado', price=450, image_url='https://img.freepik.com/free-photo/side-view-white-modern-car-outdoors_23-2149385731.jpg?t=st=1737031706~exp=1737035306~hmac=8fcf75f689d84e4f97b1450c4f106c578ebae0ea0f429bf24e8f7b1d447792a9&w=826', type='Pickup', is_available=True, user_id=user_id)
        pickup3 = Car(name='Ram 1500', price=460, image_url='https://img.freepik.com/premium-photo/close-up-silver-ram-truck-white-background-generative-ai_927978-85662.jpg?ga=GA1.1.1686556981.1737030429&semt=ais_hybrid', type='Pickup', is_available=True, user_id=user_id)
        pickup4 = Car(name='Toyota Tundra', price=480, image_url='data:image/jpeg;base64,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', type='Pickup', is_available=True, user_id=user_id)
        pickup5 = Car(name='Nissan Titan', price=470, image_url='data:image/jpeg;base64,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', type='Pickup', is_available=True, user_id=user_id)
        pickup6 = Car(name='GMC Sierra', price=490, image_url='https://example.com/sierra', type='Pickup', is_available=True, user_id=user_id)
        pickup7 = Car(name='Honda Ridgeline', price=420, image_url='https://example.com/ridgeline.jpg', type='Pickup', is_available=True, user_id=user_id)
        pickup8 = Car(name='Ford Ranger', price=430, image_url='https://example.com/ranger.jpg', type='Pickup', is_available=True, user_id=user_id)
        pickup9 = Car(name='Chevrolet Colorado', price=440, image_url='https://example.com/colorado.jpg', type='Pickup', is_available=True, user_id=user_id)
        pickup10 = Car(name='Toyota Tacoma', price=450, image_url='https://example.com/tacoma.jpg', type='Pickup', is_available=True, user_id=user_id)
        pickup11 = Car(name='Ram 2500', price=510, image_url='https://example.com/ram2500.jpg', type='Pickup', is_available=True, user_id=user_id)
        pickup12 = Car(name='Nissan Frontier', price=460, image_url='https://example.com/frontier.jpg', type='Pickup', is_available=True, user_id=user_id)
        pickup13 = Car(name='Ford Super Duty F-350', price=550, image_url='data:image/jpeg;base64,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', type='Pickup', is_available=True, user_id=user_id)

        # SUV cars
        suv1 = Car(name='Toyota RAV4', price=300, image_url='https://example.com/rav4.jpg', type='SUV', is_available=True, user_id=user_id)
        suv2 = Car(name='Honda CR-V', price=320, image_url='https://example.com/crv.jpg', type='SUV', is_available=True, user_id=user_id)
        suv3 = Car(name='Ford Escape', price=310, image_url='https://example.com/escape.jpg', type='SUV', is_available=True, user_id=user_id)
        suv4 = Car(name='Chevrolet Equinox', price=350, image_url='https://example.com/equinox.jpg', type='SUV', is_available=True, user_id=user_id)
        suv5 = Car(name='Nissan Rogue', price=340, image_url='https://example.com/rogue.jpg', type='SUV', is_available=True, user_id=user_id)
        suv6 = Car(name='Mazda CX-5', price=330, image_url='https://example.com/cx5.jpg', type='SUV', is_available=True, user_id=user_id)
        suv7 = Car(name='Hyundai Tucson', price=315, image_url='https://example.com/tucson.jpg', type='SUV', is_available=True, user_id=user_id)
        suv8 = Car(name='Subaru Forester', price=325, image_url='https://example.com/forester.jpg', type='SUV', is_available=True, user_id=user_id)
        suv9 = Car(name='Kia Sportage', price=345, image_url='https://example.com/sportage.jpg', type='SUV', is_available=True, user_id=user_id)
        suv10 = Car(name='BMW X5', price=600, image_url='https://example.com/x5.jpg', type='SUV', is_available=True, user_id=user_id)
        suv11 = Car(name='Audi Q5', price=650, image_url='https://example.com/q5.jpg', type='SUV', is_available=True, user_id=user_id)
        suv12 = Car(name='Mercedes-Benz GLC', price=700, image_url='https://example.com/glc.jpg', type='SUV', is_available=True, user_id=user_id)
        suv13 = Car(name='Lexus RX', price=750, image_url='https://example.com/rx.jpg', type='SUV', is_available=True, user_id=user_id)

        # Sedan cars
        sedan1 = Car(name='Toyota Camry', price=300, image_url='https://example.com/camry.jpg', type='Sedan', is_available=True, user_id=user_id)
        sedan2 = Car(name='Honda Accord', price=320, image_url='https://example.com/accord.jpg', type='Sedan', is_available=True, user_id=user_id)
        sedan3 = Car(name='BMW 3 Series', price=450, image_url='https://example.com/bmw3.jpg', type='Sedan', is_available=True, user_id=user_id)
        sedan4 = Car(name='Mercedes-Benz C-Class', price=500, image_url='https://example.com/cclass.jpg', type='Sedan', is_available=True, user_id=user_id)
        sedan5 = Car(name='Audi A4', price=480, image_url='https://example.com/a4.jpg', type='Sedan', is_available=True, user_id=user_id)
        sedan6 = Car(name='Ford Fusion', price=330, image_url='https://example.com/fusion.jpg', type='Sedan', is_available=True, user_id=user_id)

        # Hatchback cars
        hatchback1 = Car(name='Volkswagen Golf', price=250, image_url='https://example.com/golf.jpg', type='Hatchback', is_available=True, user_id=user_id)
        hatchback2 = Car(name='Honda Fit', price=220, image_url='https://example.com/fit.jpg', type='Hatchback', is_available=True, user_id=user_id)
        hatchback3 = Car(name='Ford Fiesta', price=210, image_url='https://example.com/fiesta.jpg', type='Hatchback', is_available=True, user_id=user_id)
        hatchback4 = Car(name='Toyota Yaris', price=230, image_url='https://example.com/yaris.jpg', type='Hatchback', is_available=True, user_id=user_id)
        hatchback5 = Car(name='Chevrolet Spark', price=200, image_url='https://example.com/spark.jpg', type='Hatchback', is_available=True, user_id=user_id)
        hatchback6 = Car(name='Hyundai Elantra GT', price=240, image_url='https://example.com/elantragt.jpg', type='Hatchback', is_available=True, user_id=user_id)
        hatchback7 = Car(name='Mazda3 Hatchback', price=270, image_url='https://example.com/mazda3.jpg', type='Hatchback', is_available=True, user_id=user_id)
        hatchback8 = Car(name='Kia Rio', price=220, image_url='https://example.com/rio.jpg', type='Hatchback', is_available=True, user_id=user_id)
        hatchback9 = Car(name='Nissan Versa', price=210, image_url='https://example.com/versa.jpg', type='Hatchback', is_available=True, user_id=user_id)
        hatchback10 = Car(name='BMW 1 Series', price=350, image_url='https://example.com/bmw1.jpg', type='Hatchback', is_available=True, user_id=user_id)
        hatchback11 = Car(name='Audi A3 Sportback', price=400, image_url='https://example.com/a3sportback.jpg', type='Hatchback', is_available=True, user_id=user_id)
        hatchback12 = Car(name='Mini Cooper', price=370, image_url='https://example.com/cooper.jpg', type='Hatchback', is_available=True, user_id=user_id)
        hatchback13 = Car(name='Volkswagen Polo', price=280, image_url='https://example.com/polo.jpg', type='Hatchback', is_available=True, user_id=user_id)

        cars = [
            pickup1, pickup2, pickup3, pickup4, pickup5, pickup6, pickup7, pickup8, pickup9, pickup10, pickup11, pickup12, pickup13,
            suv1, suv2, suv3, suv4, suv5, suv6, suv7, suv8, suv9, suv10, suv11, suv12, suv13,
            sedan1, sedan2, sedan3, sedan4, sedan5, sedan6,
            hatchback1, hatchback2, hatchback3, hatchback4, hatchback5, hatchback6, hatchback7, hatchback8, hatchback9, hatchback10, hatchback11, hatchback12, hatchback13
        ]

        db.session.add_all(cars)
        db.session.commit()

        print('Successfully created cars')

if __name__ == '__main__':
    seed_data()
