import styles from "./AddVehicule.module.css";
import React, { useState } from "react";

const AddVehicule = () => {
  const [addVehicle, setAddVehicle] = useState({});
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [plate, setPlate] = useState("");
  const [mileage, setMileage] = useState(0);
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");

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

  const handleSubmit = (e) => {
    //e.prevenDefault();
    let vehicle = {
      vehicle_id: 3,
      vehicle_name: name,
      vehicle_desc: description,
      vehicle_brand: brand,
      vehicle_model: model,
      mileage: mileage,
      availability: true,
      plate_no: plate,
      location_id: location,
      image: image,
      company_id: "userid",
    };
    setAddVehicle(vehicle);
  };

  console.log(addVehicle);

  return (
    <div className={styles.formContainer}>
      <form>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Name:</label>
          </div>
          <div className={styles.col70}>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Brand:</label>
          </div>
          <div className={styles.col70}>
            <input
              type="text"
              name="brand"
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Model:</label>
          </div>
          <div className={styles.col70}>
            <input
              type="text"
              name="model"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Plate:</label>
          </div>
          <div className={styles.col70}>
            <input
              type="text"
              name="plate"
              id="plate"
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Description:</label>
          </div>
          <div className={styles.col70}>
            <textarea
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Mileage</label>
          </div>
          <div className={styles.col70}>
            <input
              type="number"
              name="mileage"
              id="mileage"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Image</label>
          </div>
          <div className={styles.col70}>
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg, image/"
              id="name"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Location</label>
          </div>
          <div className={styles.col70}>
            <select
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              {locations.map((location) => {
                return (
                  <option
                    key={location.location_id}
                    value={location.location_id}
                  >
                    {" "}
                    {location.venu_name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <input
          className="button"
          type="submit"
          value="Add Vehicule"
          onClick={(e) => handleSubmit(e)}
        />
      </form>
    </div>
  );
};

export default AddVehicule;
