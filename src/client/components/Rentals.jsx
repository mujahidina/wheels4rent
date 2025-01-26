import { useState, useEffect } from "react";
import { GoPeople } from "react-icons/go";
import { TbManualGearbox } from "react-icons/tb";
import { BsFuelPump } from "react-icons/bs";

function Rentals(){

    const [rentals, setRentals] = useState([])

    const userId = sessionStorage.getItem("userId")

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/rents/user/${userId}`)
            .then((resp) => resp.json())
            .then((data) => {
                setRentals(data);
            })
            .catch((error) => {
                console.error("Error fetching rentals:", error);
            });
    }, [userId]);



    const handleReturnCar = (rentId) => {
        fetch(`http://127.0.0.1:5000/rents/${rentId}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                setRentals((prevRentals) => prevRentals.filter(rent => rent.id !== rentId));
            } else {
                console.error("Error returning car:", response.statusText);
            }
        })
        .catch((error) => {
            console.error("Error returning car:", error);
        });
    };

    return(
        <div className="h-auto pt-8 pl-40">
            
            {rentals.length === 0 ? (
                <div className=" h-full flex  pt-72 pl-96">
                    <p>cars youve rented will appear here</p>

                </div>
            ):(
                <div className="flex flex-wrap ">
                 <h1 className="mb-8 text-lg poppins-semibold">Rented Cars</h1>
                {rentals.map((rent) => (
                     <div key={rent.id} className="bg-gray-400 p-4 flex flex-wrap mb-8 mr-7 ">
                         <div className="bg-gray-100 p-3 flex flex-col">
                           <p className="mt-20 text-sm poppins-semibold">Pick-up location:</p>
                           <h1 className="text-sm text-gray-400">{rent.pickup_location}</h1>
                           <p className="poppins-semibold text-sm">Drop-off location:</p>
                           <h1 className="text-sm text-gray-400">{rent.dropoff_location}</h1>
                           <p className="text-sm poppins-semibold">Duration:</p>
                           <h1 className="text-sm text-gray-400">{rent.duration}</h1>
                         </div>
 
 
                         {/* car */}
                         <div className="bg-white w-64 h-64  border border-gray-400 p-3">
                              <img src={rent.car.image_url}  alt="carr" className="h-[45%] w-full object-cover mx-auto border-b border-gray-200" />
                        <div className="p-4 flex flex-col">
                             <h2 className="font-semibold text-md">{rent.car.name}</h2>
                     {/* Icons */}
                         <div className="w-[80%] gap-10 h-12 flex flex-row justify-center mt-2">
                           <div className="flex flex-col items-center">
                             <GoPeople size={26} />
                             <p className="text-sm text-gray-500">{rent.car.seats}</p>
                         </div>
                         <div className="flex flex-col items-center">
                             <BsFuelPump size={26} />
                             <p className="text-sm text-gray-500">{rent.car.fuel_type}</p>
                         </div>
                         <div className="flex flex-col items-center">
                             <TbManualGearbox size={26} />
                             <p className="text-sm text-gray-500">{rent.car.transmission}</p>
                         </div>
                     </div>
                     <button className="mt-2 bg-green-400 flex text-white border border-gray-400 py-1 pl-4 w-[50%] text-sm" onClick={() => handleReturnCar(rent.id)} > Return Car </button>
                 </div>
             </div>
                     </div>
                 ))}
                 
                </div>
            )}
             

        </div>
    )
}

export default Rentals;

