import React, { useState } from "react";
import VehicleCard from "../../components/vehicleCard/VehicleCard";
import { Link } from "react-router-dom";

const VehicleList = () => {
  const [selected, setSelected] = useState("");

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
      image: "url image",
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
      image: "url image",
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
      image: "url image",
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
      <ul>
        <li>
          {carList
            .filter((car) => !selected.length || car.location_id == selected)
            .map((car) => {
              return <VehicleCard car={car} key={car.vehicle_id} />;
            })}
        </li>
      </ul>
    </div>
  );
};

export default VehicleList;

//{
/*<Link key={car.vehicle_id} to={`/vehicule/${car.vehicule_id}`}>
                  
                </Link>*/
//}
