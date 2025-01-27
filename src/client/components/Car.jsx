import { useState } from "react";
import { GoPeople } from "react-icons/go";
import { TbManualGearbox } from "react-icons/tb";
import { BsFuelPump } from "react-icons/bs";

function Car({ id, name, price, image_url, seats, fuel, transmission }) {
    const [showModal, setShowModal] = useState(false);
    const userId = sessionStorage.getItem("userId")


    const [formData, setFormData] = useState({
        user_id: userId, 
        car_id: id, 
        pickup_location: "",
        dropoff_location: "",
        duration: "",
    });
    



    const handleCreateForm = () => setShowModal(true);
    const handleCloseForm = () => setShowModal(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://w4rserver.onrender.com/rents", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Error:", errorData);
                alert(`Error: ${errorData.error || "Failed to create rent"}`);
                return;
            }

            const rentData = await response.json();
            console.log("Rent created successfully:", rentData);
            alert("Booking confirmed!");
            setShowModal(false); 
        } catch (error) {
            console.error("Error creating rent:", error);
            alert("An error occurred. Please try again later.");
        }
        
        
    };

    return (
        <div>
            {/* Car Card */}
            <div className="bg-white w-96 h-96 mb-8 mr-7 border border-gray-400">
                <img
                    src={image_url}
                    className="h-[56%] w-full object-cover mx-auto border-b border-black"
                    alt={name}
                />
                <div className="p-4 flex flex-col">
                    <h2 className="font-semibold text-md">{name}</h2>
                    <h3 className="text-gray-500 text-sm">${price}/day</h3>

                    {/* Icons */}
                    <div className="w-[80%] gap-10 h-12 flex flex-row justify-center mt-2">
                        <div className="flex flex-col items-center">
                            <GoPeople size={26} />
                            <p className="text-sm text-gray-500">{seats}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <BsFuelPump size={26} />
                            <p className="text-sm text-gray-500">{fuel}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <TbManualGearbox size={26} />
                            <p className="text-sm text-gray-500">{transmission}</p>
                        </div>
                    </div>
                    <button
                        className="mt-2 bg-white flex text-black border border-gray-400 py-1 pl-4 w-[35%] text-md"
                        onClick={handleCreateForm}
                    >
                        BOOK NOW
                    </button>
                </div>
            </div>

            {/* Booking Modal */}
            {showModal && (
                <div className="fixed inset-0  flex justify-center items-center backdrop-filter backdrop-blur-sm">
                    <div className="p-6  relative flex flex-row  h-[55%] w-[60%] gap-10 bg-black bg-opacity-30">
                        <div className="bg-white w-[50%] items-center flex flex-col">
                        <button className="absolute top-4 right-4 text-gray-600 border border-red-300 rounded-3xl p-1 text-white" onClick={handleCloseForm}> ✕ </button>
                        <h2 className="text-xl font-bold mb-4">Book {name}</h2>
                        <form onSubmit={handleSubmit} className="w-[80%]">
                            <div className="mb-4">
                                <label className="block mb-2 text-sm">Pickup Location</label>
                                <input
                                    type="text" 
                                    name="pickup_location"
                                    required
                                    value={formData.pickup_location}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-sm">Drop-Off Location</label>
                                <input
                                    type="text"
                                    name="dropoff_location"
                                    required
                                    value={formData.dropoff_location}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-sm">Duration</label>
                                <input
                                    type="text"
                                    name="duration"
                                    required
                                    value={formData.duration}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded"
                                    placeholder="Enter number of days"
                                />
                            </div>
                            <button  type="submit"  className="bg-green-500 w-[30%] text-white px-4 py-2 rounded w-full"> Confirm Booking </button>
                        </form>
                        </div>

                        <div className="w-[40%] flex flex-col text-white border border-gray-200 rounded-md">
                           <img src={image_url} className="h-[56%] w-full object-cover mx-auto border-b border-black"alt={name}/>
                              <div className="p-4 flex flex-col">
                             <h2 className="font-semibold text-md">{name}</h2>
                             <h3 className="text-white text-sm">${price}/day</h3>
         
                              {/* Icons */}
                              <div className="w-[80%] gap-10 h-12 flex flex-row justify-center mt-7">
                                    <div className="flex flex-col items-center">
                                      <GoPeople size={26} />
                                      <p className="text-sm text-white">{seats}</p>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <BsFuelPump size={26} />
                                          <p className="text-sm text-white">{fuel}</p>
                                    </div>
                                   <div className="flex flex-col items-center">
                                         <TbManualGearbox size={26} />
                                        <p className="text-sm text-white">{transmission}</p>
                                   </div>
                             </div>

                        </div>

                        </div>


                       
                    </div>
                </div>
            )}
        </div>
    );
}

export default Car;




















