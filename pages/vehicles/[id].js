import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from 'swr';
import styles from './[id].module.css';
import img from "../../assets/dummy.jpg";
import { useState } from "react";
import DropOffModal from "../../components/DropOffModal/DropOffModal";

const fetcher = async () => {
    const response = await fetch('url')
    const data = await response.json()
    return data
}

const VehicleById = () => {
  const [clicked, setClicked] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [showCancelModal, setShowCancelModal] = useState(false);

  const booking = () => {
    setClicked(true);
    setShowModal(true)
  }
    let data = 
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
    let user_id = 1;
      

    // const router = useRouter();
    // const {id} = router.query;

    // const { data, error } = useSWR(id ? `/api/vehicles/${id}` : null, fetcher)

    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>

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
                    <td>{data.company_name}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Pick up Location: </strong>
                    </td>
                    <td>{data.pick_up_venue}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Drop off Location: </strong>
                    </td>
                    <td>{data.drop_of_venue}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {data.availability ? (
            <button className={styles.button} onClick={booking}>
              Book now
            </button>
          ) : (
            <button className={styles.button}>Booked out</button>
          )}
          {!data.availability && (
            <p>Oops, this vehicle is not available for booking anymore...</p>
          )}
        </div>
        
       
      </div>
      {showModal && (
        <DropOffModal setShowModal={setShowModal} data={data.drop_of_venue} clicked={clicked} title="Where are you headed?" user_id={user_id}/>
      )}
    </div>
  );
};

export default VehicleById;