import Image from "next/image";
import useSWR from "swr";
import React, { useState } from "react";
import VehicleCard from "../../components/vehicleCard/VehicleCard";
import styles from "./index.module.css";
import AddVehicule from "../../components/addVehicule/AddVehicule";

const fetcher = async () => {
  const response = await fetch("http://localhost:3000/api/vehicles/");
  const data = await response.json();
  return data;
};
const fetcherLoc = async () => {
  const response = await fetch("http://localhost:3000/api/locations");
  const data = await response.json();
  return data;
};

const VehicleList = () => {
  const [selected, setSelected] = useState("");
  const { data: carList, error } = useSWR("/api/vehicles", fetcher);
  console.log(carList);

  const { data: locations, error: errorLoc } = useSWR(
    "/api/locations",
    fetcherLoc
  );
  console.log(locations);
  const [addCompontentVehicle, setAddComponentVehicle] = useState(false);

  const handleAddVehicule = () => {
    setAddComponentVehicle(!addCompontentVehicle);
  };

  if (error) return <div>Failed to load</div>;
  if (!carList) return <div>Loading...</div>;
  if (errorLoc) return <div>Failed to load</div>;
  if (!locations) return <div>Loading...</div>;

  console.log("SELECTED", selected);

  return (
    <div className={styles.container}>
      <h1>Cars available</h1>
      {/* show only if user is a compagny */}
      <button onClick={handleAddVehicule}>Add vehicle</button>
      {/* show if Add vehiicule is clicked */}
      {addCompontentVehicle && <AddVehicule />}

      {/* show form only if user is a client */}
      <div className={styles.filterContainer}>
        <form>
          <label htmlFor="location-selec">
            Filter by location {""}
            <select
              id="location-selec"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="">---</option>
              {locations.map((location, i) => {
                return (
                  <option key={i} value={location.location_id}>
                    {" "}
                    {location.venue_name}
                  </option>
                );
              })}
            </select>
          </label>
        </form>
      </div>

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
