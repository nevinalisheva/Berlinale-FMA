import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from 'swr';
import styles from './[id].module.css';
import img from "../../public/Image_not_available.png";
import { useState, useEffect } from "react";
import DropOffModal from "../../components/DropOffModal/DropOffModal";
import axios from 'axios';

// const fetcher = async () => {
//   let method = req.method;
//   method=== "GET";
//   const response = await fetch("http://localhost:3000/api/vehicles/[vehicle_id]");
//   const data = await response.json();
//   return data;
// };
const fetcher = async () => {
  const response = await fetch("http://localhost:3000/api/locations");
  const data= await response.json();
  return data;
};

const VehicleById = () => {
  const [clicked, setClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { data:locations, error} = useSWR("/api/locations", fetcher);
  console.log(locations);


  // const router = useRouter();
  // const {id} = router.query;

   

  const booking = () => {
    setClicked(true);
    setShowModal(true)
  }
    let dataM = 
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
        image: null,
        company_id: 4,
      };
    let user_id = 8;
    let isCustomer=true;
    let isCompany=false;

     const router = useRouter();
     const { id } = router.query;
     const [vehicleId] = useState(id);
     const [data, setData] = useState(dataM);
     const [pickupData, setPickupData] = useState("");

     useEffect(() => {
       if (vehicleId) {
         axios
           .get(
             `/api/vehicles/${vehicleId}`
           )
           .then((response) => setData(response.data[0]))
           .catch((err) => console.log(err));

          axios
            .get(`/api/locations/vehicle/${vehicleId}`)
            .then((response) => setPickupData(response.data[0]))
            .catch((err) => console.log(err));
        }
      }, []);

  // const { data, error } = useSWR(id ? `/api/vehicles/${id}` : null, fetcher)

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>
  console.log(locations);
    if (error) return <div>Failed to load</div>;
    if (!locations) return <div>Loading...</div>;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image
            src={data.image ? data.image : img}
            alt="vehicle-image"
            width={400}
            // height={400}
            className="vehicle-pic"
          />
        </div>
        <div className={styles.desc}>
          <div className={styles.info}>
            <h1>{data.vehicle_name}</h1>
            <div className={styles.details}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Brand: </strong>
                    </td>
                    <td>{data.vehicle_brand}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Model: </strong>
                    </td>
                    <td>{data.vehicle_model}</td>
                  </tr>
                  {data.plate_no && (
                    <tr>
                      <td>
                        <strong>License Plate: </strong>
                      </td>
                      <td>{data.plate_no}</td>
                    </tr>
                  )}
                  {data.mileage && (
                    <tr>
                      <td>
                        <strong>Mileage: </strong>
                      </td>
                      <td>{data.mileage}</td>
                    </tr>
                  )}
                  <tr>
                    <td>
                      <strong>Rental Company: </strong>
                    </td>
                    <td>{pickupData.company_name}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Pick up Location: </strong>
                    </td>
                    <td>{pickupData.venue_name}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {isCustomer &&
            (data.availability ? (
              <button className={styles.button} onClick={booking}>
                Book now
              </button>
            ) : (
              <button className={styles.button}>Booked out</button>
            ))}
          {isCustomer && !data.availability && (
            <p>Oops, this vehicle is not available for booking anymore...</p>
          )}
          {isCompany && (
            <button className={styles.button}>Delete Listing</button>
          )}
        </div>
      </div>
      {showModal && (
        <DropOffModal
          setShowModal={setShowModal}
          locations={locations}
          clicked={clicked}
          title="Where are you headed?"
          user_id={user_id}
          vehicle_id={data.vehicle_id}
        />
      )}
    </div>
  );
};

export default VehicleById;
