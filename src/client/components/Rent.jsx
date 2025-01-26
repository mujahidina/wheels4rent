import { useState, useEffect } from "react";
import Car from "./Car";

function Rent() {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    const [selectedType, setSelectedType] = useState("All");

    useEffect(() => {
        fetch("http://127.0.0.1:5000/cars")
            .then((resp) => resp.json())
            .then((data) => {
                setCars(data);
                setFilteredCars(data);
            })
            .catch((error) => {
                console.error("Error fetching cars:", error);
            });
    }, []);
    

    const handleFilter = (event) => {
        const type = event.target.value;
        setSelectedType(type);

        if (type === "All") {
            setFilteredCars(cars);
        } else {
            const filtered = cars.filter((car) => car.type === type);
            setFilteredCars(filtered);
        }
    };


    

    return (
        <div className="bg-gray-300 h-auto w-full pt-8 pl-16 bg-gray-100 ">
            <div className="flex flex-row mb-8">
                <p className="poppins-medium  text-gray-600">Filter by type:</p>
                <select onChange={handleFilter} value={selectedType} className="ml-6 border border-black poppins-medium text-sm">
                    <option value="All">All</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUVs</option>
                    <option value="Pickup">Pick-Up</option>
                    <option value="Hatchback">Hatchback</option>
                </select>
            </div>

            <div className="flex flex-wrap ">
                {filteredCars.map((car) => (
                    <Car
                        key={car.id}
                        id={car.id}
                        name={car.name}
                        price={car.price}
                        image_url={car.image_url}
                        seats={car.seats}
                        transmission={car.transmission}
                        fuel={car.fuel_type}
                    />
                ))}
            </div>

        </div>
    );
}

export default Rent;

