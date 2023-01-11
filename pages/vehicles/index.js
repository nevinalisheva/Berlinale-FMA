import React, { useState } from "react";
import VehicleCard from "../../components/vehicleCard/VehicleCard";

const VehicleList = () => {
  const [selected, setSelected] = useState("");
  let carList = [
    {
      vehicle_id: 1,
      vehicle_name: "vehicule 1",
      vehicle_desc: "lalala",
      vehicle_brand: "vehicle_brand",
      vehicle_model: "peagot 206",
      mileage: 333999,
      availability: true,
      plate_no: "plate_no",
      location_id: 3,
      image: "url image",
      company_id: 4,
    },
    {
      vehicle_id: 2,
      vehicle_name: "vehicule 2",
      vehicle_desc: "dckdlfkdlfk",
      vehicle_brand: "vehicle_brand",
      vehicle_model: "ddfdffdfddf",
      mileage: 333999,
      availability: true,
      plate_no: "plate_no",
      location_id: 1,
      image: "url image",
      company_id: 4,
    },
    {
      vehicle_id: 3,
      vehicle_name: "vehicule 3",
      vehicle_desc: "fdffdfdfdf",
      vehicle_brand: "vehicle_brand",
      vehicle_model: "fefeefe",
      mileage: 333999,
      availability: true,
      plate_no: "plate_no",
      location_id: 3,
      image: "url image",
      company_id: 4,
    },
    {
      vehicle_id: 4,
      vehicle_name: "vehicule 4",
      vehicle_desc: "dddeed",
      vehicle_brand: "vehicle_brand",
      vehicle_model: "dsdsds",
      mileage: 333999,
      availability: true,
      plate_no: "plate_no",
      location_id: 2,
      image: "url image",
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
    <div>
      <h1>Car list</h1>
      <form>
        <label>
          Filter by location {""}
          <select
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

      {carList
        .filter((car) => !selected.length || car.location_id === selected)
        .map((car) => {
          return <VehicleCard car={car} key={car.vehicle_id} />;
        })}
    </div>
  );
};

export default VehicleList;
