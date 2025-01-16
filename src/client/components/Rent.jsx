

// import { useState, useEffect } from "react";
// import Car from "./Car";


// function Rent(){

//     const [cars, setCars] = useState([]);
//     const [sortOption, setSortOption] = useState('Default'); 

//     useEffect(() => {
//         fetch("http://127.0.0.1:5000/cars")
//           .then(resp => resp.json())
//           .then((data) => {
//             setCars(data);
//           })
//           .catch(error => {
//             console.error('Error fetching cars:', error);
//           });
//     }, []);




//     const handleSort = (event) => {
//         const option = event.target.value;
//         setSortOption(option);
//         let sortedCars = [...cars];

//         switch (option) {
//             case 'Title':
//                 sortedCars.sort((a, b) => a.name.localeCompare(b.name));
//                 break;
//             case 'Price-low':
//                 sortedCars.sort((a, b) => a.price - b.price);
//                 break;
//             case 'Price-high':
//                 sortedCars.sort((a, b) => b.price - a.price);
//                 break;
//             default:
//                 break;
//         }

//         setCars(sortedCars);
//     };



  
    


//     return(
//          <div className="bg-red-300 h-auto w-full pt-10 ">
//              <div className="">
//                 <p>Filter by typre:</p>
//                 <select  onChange={handleSort}>
//                     <option value="Default">All</option>
//                     <option value="Title">SUVs</option>
//                     <option value="Price-low">Sedan</option>
//                     <option value="Price-high">Pick-Up</option>
//                     <option value="">Hatchback</option>
//                 </select>
//             </div>

//             <div className="">
//               {cars.map((car) => (
//                  <Car key={car.id} name={car.name} price={car.price} image_url={car.image_url} />
//                ))}
//             </div>






//          </div>

//     )
// }

// export default Rent;



import { useState, useEffect } from "react";
import Car from "./Car";

function Rent() {
    const [cars, setCars] = useState([]);
    const [sortOption, setSortOption] = useState("Default");

    useEffect(() => {
        fetch("http://127.0.0.1:5000/cars")
            .then((resp) => resp.json())
            .then((data) => {
                setCars(data);
            })
            .catch((error) => {
                console.error("Error fetching cars:", error);
            });
    }, []);

    const handleSort = (event) => {
        const option = event.target.value;
        setSortOption(option);
        let sortedCars = [...cars];

        switch (option) {
            case "Title":
                sortedCars.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "Price-low":
                sortedCars.sort((a, b) => a.price - b.price);
                break;
            case "Price-high":
                sortedCars.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        setCars(sortedCars);
    };

    return (
        <div className="h-auto w-full pt-10 pl-10">
            <div className="flex flex-row mb-20">
                <p>Filter by type:</p>
                <select onChange={handleSort}>
                    <option value="Default">All</option>
                    <option value="Title">SUVs</option>
                    <option value="Price-low">Sedan</option>
                    <option value="Price-high">Pick-Up</option>
                    <option value="">Hatchback</option>
                </select>
            </div>

            <div className="flex flex-wrap ">
                {cars.map((car) => (
                    <Car
                        key={car.id}
                        name={car.name}
                        price={car.price}
                        image_url={car.image_url}
                    />
                ))}
            </div>
        </div>
    );
}

export default Rent;
