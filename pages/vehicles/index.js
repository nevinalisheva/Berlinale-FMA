// import Image from "next/image";
// import useSWR from 'swr';

// const fetcher = async () => {
//     const response = await fetch('url')
//     const data = await response.json()
//     return data
// }

// const Details = () => {
//     const { data, error } = useSWR('/api/vehicle-data', fetcher)

//     if (error) return <div>Failed to load</div>
//     if (!data) return <div>Loading...</div>

//   return (
//     <div className="container">
//       <Image
//         src={data.image ? data.image : "/Image_not_available.png"}
//         alt="vehicle-image"
//         width={400}
//         height={400}
//       />
//       <div className="info">
//         <h1>{data.vehicle_name}</h1>

//         </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import AddVehicule from "../../components/addVehicule/AddVehicule";
import VehicleCard from "../../components/vehicleCard/VehicleCard";
import styles from "./index.module.css";

const VehicleList = () => {
  const [selected, setSelected] = useState("");
  const [addVehicle, setAddVehicle] = useState(false);

  const handleAddVehicule = () => {
    setAddVehicle(!addVehicle);
  };

  //FILTER THE TRUE WITH QUERY WHEN FETCHING the database

  console.log("SELECTED", selected);
  let carList = [
    {
      vehicle_id: 1,
      vehicle_name: "Ford Galaxie 500",
      vehicle_desc: "lalala",
      vehicle_brand: "Ford",
      vehicle_model: "peagot 206",
      mileage: 333999,
      availability: true,
      plate_no: "plate_no",
      location_id: 3,
      image: "/dummy.jpg",
      company_id: 4,
    },
    {
      vehicle_id: 2,
      vehicle_name: "Chevrolet impala",
      vehicle_desc: "dckdlfkdlfk",
      vehicle_brand: "Chevrolet",
      vehicle_model: "ddfdffdfddf",
      mileage: 333999,
      availability: true,
      plate_no: "plate_no",
      location_id: 1,
      image: null,
      company_id: 4,
    },
    {
      vehicle_id: 3,
      vehicle_name: "Citroen ds-21 pallas",
      vehicle_desc: "fdffdfdfdf",
      vehicle_brand: "Citroen",
      vehicle_model: "fefeefe",
      mileage: 333999,
      availability: true,
      plate_no: "plate_no",
      location_id: 3,
      image: null,
      company_id: 4,
    },
    {
      vehicle_id: 4,
      vehicle_name: "Toyota Corona mark ii",
      vehicle_desc: "dddeed",
      vehicle_brand: "Toyota Corona",
      vehicle_model: "dsdsds",
      mileage: 333999,
      availability: true,
      plate_no: "plate_no",
      location_id: 2,
      image: null,
      company_id: 4,
    },
  ];

  let locations = [
    {
      location_id: 1,
      venu_name: "Postdamer platz",
    },
    {
      location_id: 2,
      venu_name: "Alexander platz",
    },
    {
      location_id: 3,
      venu_name: "Berliner palast",
    },
  ];
  return (
    <div className={styles.container}>
      <h1>Cars available</h1>
      {/* show only if user is a compagny */}
      <button onClick={handleAddVehicule}>Add vehicule</button>
      {/* show if Add vehiicule is clicked */}
      {addVehicle && <AddVehicule />}

      {/* show form only if user is a client */}
      <form>
        <label htmlFor="location-selec">
          Filter by location {""}
          <select
            id="location-selec"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">---</option>
            {locations.map((location) => {
              return (
                <option key={location.location_id} value={location.location_id}>
                  {" "}
                  {location.venu_name}
                </option>
              );
            })}
          </select>
        </label>
      </form>
      <div>
        {carList
          .filter((car) => !selected.length || car.location_id == selected)
          .map((car) => {
            return <VehicleCard car={car} key={car.vehicle_id} />;
          })}
      </div>
    </div>
  );
};

export default VehicleList;
