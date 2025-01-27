

import { useState, useEffect } from "react";
import { GoPeople } from "react-icons/go";
import { TbManualGearbox } from "react-icons/tb";
import { BsFuelPump } from "react-icons/bs";


function MyCars() {
  const [showPost, setShowPost] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null); 
  const [error, setError] = useState(null);



  
  const userId = sessionStorage.getItem('userId')
  

  useEffect(() => {
    fetch(`https://w4rserver.onrender.com/user/${userId}`)
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error fetching my cars:", err));
  }, [userId]);





  const handleCarUpload = (newCar) => {
    fetch(`https://w4rserver.onrender.com/cars`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to upload car");
        }
        return response.json();
      })
      .then((data) => {
        setCars((prevCars) => [...prevCars, data]);
        setShowPost(false);
      })
      .catch((err) => {
        setError(err.message);
        console.error("Error uploading car:", err);
      });
  };

  
  const handleCarEdit = (updatedCar) => {
    fetch(`https://w4rserver.onrender.com/cars/${updatedCar.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCar),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update car");
        }
        return response.json();
      })
      .then((data) => {
        setCars((prevCars) =>
          prevCars.map((car) => (car.id === data.id ? data : car))
        );
        setShowEdit(false);
        setSelectedCar(null);
      })
      .catch((err) => {
        setError(err.message);
        console.error("Error updating car:", err);
      });
  };

  
  const handleCarDelete = (id) => {
    fetch(`https://w4rserver.onrender.com/cars/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete car");
        }
        setCars((prevCars) => prevCars.filter((car) => car.id !== id));
      })
      .catch((err) => {
        setError(err.message);
        console.error("Error deleting car:", err);
      });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newCar = {
      user_id: userId,
      name: formData.get("name"),
      price: formData.get("price"),
      image_url: formData.get("imageUrl"),
      is_available: true,
      type: formData.get("type"),
      seats: formData.get("seats"),
      transmission: formData.get("transmission"),
      fuel_type: formData.get("fuel_type"),
    };
    handleCarUpload(newCar);
    
  };

  
  const handleEditSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedCar = {
      ...selectedCar,
      name: formData.get("name"),
      price: formData.get("price"),
      image_url: formData.get("imageUrl"),
      type: formData.get("type"),
      seats: formData.get("seats"),
      transmission: formData.get("transmission"),
      fuel_type: formData.get("fuel_type"),
    };
    handleCarEdit(updatedCar);
  };

  const handleOpenPost = () => setShowPost(true);
  const handleClosePost = () => setShowPost(false);

  const handleOpenEdit = (car) => {
    setSelectedCar(car);
    setShowEdit(true);
  };

  const handleCloseEdit = () => {
    setSelectedCar(null);
    setShowEdit(false);
  };


  return (
    <div className="bg-white h-[92vh]">
     
      <div className="">
        {cars.length === 0 ? (
          <div className="flex flex-row bg-black h-[92vh] w-full">
          <div className="w-1/2 h-full flex flex-col">
            <h1 className="ml-12 text-white mt-24 text-5xl font-bold">NEW FEATURE</h1>
            <h1 className="ml-12 text-white mt-3 text-4xl font-normal">With Wheels4rent</h1>
            <p className="ml-12 text-lg mt-14 text-white">Now you can manage your cars!</p>
            <div className="ml-12 mt-8 flex tracking-wider">
              <button className="bg-blue-400 text-white w-44 h-14 rounded-lg" onClick={handleOpenPost}>
                Post Your Car
              </button>
            </div>
          </div>
        </div>
        ) : (
  
          <div className="mt-12 mx-12  pt-6">
            <button className="bg-black text-white py-1 px-3" onClick={handleOpenPost}>+  Add car</button>
            <div className="py-10 grid grid-cols-3 gap-4 ">
            {cars.map((car) => (
              <div key={car.id} className="bg-white w-96 h-96 mb-8 mr-7 border border-gray-300">
                <img src={car.image_url} alt={car.name} className="h-[56%] w-full object-cover mx-auto border-b border-black" />
                <h2 className="text-xl poppins-semibold mt-2 ml-4">{car.name}</h2>
                <p className="text-s text-gray-400 ml-4">${car.price}/day</p>
                <div className="w-[80%] gap-10 h-12 flex flex-row justify-center mt-2">
                        <div className="flex flex-col items-center">
                        < GoPeople size={26} />
                        <p className="text-sm text-gray-500">{car.seats}</p>
                        </div>

                        <div className="flex flex-col items-center">
                        <BsFuelPump size={26} />
                        <p className="text-sm text-gray-500">{car.fuel_type}</p>
                        </div>

                        <div className="flex flex-col items-center">
                        <TbManualGearbox size={26} />
                        <p className="text-sm text-gray-500">{car.transmission}</p>
                        </div>
                    </div>
                <button className="bg-white text-black px-3 py-1 mt-2 border border-gray-400 mx-5" onClick={() => handleOpenEdit(car)}> Edit </button>
                <button className="bg-red-600 text-white px-3 py-1 mt-2 " onClick={() => handleCarDelete(car.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
          </div>
        )}
      </div>

      {showPost && (
        <div className="bg-black fixed inset-0 bg-opacity-20 flex justify-center items-center backdrop-filter backdrop-blur-sm">
          <div className="w-[40%] py-4">
            <form className="bg-white p-4 rounded-lg" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Car Name" required className="w-full p-2 mb-4 border rounded" />
              <input type="text" name="price" placeholder="Price" required className="w-full p-2 mb-4 border rounded" />
              <input type="text" name="imageUrl" placeholder="Image URL" required className="w-full p-2 mb-4 border rounded" />
              <input type="text" name="type" placeholder="Type" required className="w-full p-2 mb-4 border rounded" />
              <input type="text" name="seats" placeholder="Seats" required className="w-full p-2 mb-4 border rounded" />
              <input type="text" name="transmission" placeholder="Transmission" required className="w-full p-2 mb-4 border rounded" />
              <input type="text" name="fuel_type" placeholder="Fuel type" required className="w-full p-2 mb-4 border rounded" />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Post</button>
            </form>
          </div>
          <h1 onClick={handleClosePost} className="bg-white">Close Post</h1>
        </div>
      )}

      {showEdit && selectedCar && (
        <div className="bg-black fixed inset-0 bg-opacity-20 flex justify-center items-center backdrop-filter backdrop-blur-sm">
          <div className="w-[40%] py-4">
            <form className="bg-white p-4 rounded-lg" onSubmit={handleEditSubmit}>
              <input type="text" name="name" defaultValue={selectedCar.name} required className="w-full p-2 mb-4 border rounded" />
              <input type="text" name="price" defaultValue={selectedCar.price} required className="w-full p-2 mb-4 border rounded" />
              <input type="text" name="imageUrl" defaultValue={selectedCar.image_url} required className="w-full p-2 mb-4 border rounded" />
              <input type="text" name="type" defaultValue={selectedCar.type} required className="w-full p-2 mb-4 border rounded" />
              <input type="text" name="seats" defaultValue={selectedCar.seats} required className="w-full p-2 mb-4 border rounded" />
              <input type="text" name="fuel_type" defaultValue={selectedCar.fuel_type} required className="w-full p-2 mb-4 border rounded" />
              <input type="text" name="transmission" defaultValue={selectedCar.transmission} required className="w-full p-2 mb-4 border rounded" />
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">Update</button>
            </form>
          </div>
          <h1 onClick={handleCloseEdit} className="bg-white" >Close Edit</h1>
        </div>
      )}

      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
    </div>
  );
}

export default MyCars;
