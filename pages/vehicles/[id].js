import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from 'swr';
import styles from './[id].module.css'

const fetcher = async () => {
    const response = await fetch('url')
    const data = await response.json()
    return data
}

const VehicleById = () => {
    let data = 
      {
        vehicle_id: 1,
        vehicle_name: "Ford Galaxie 500",
        vehicle_desc: "lalala",
        vehicle_brand: "Ford",
        vehicle_model: "peagot 206",
        mileage: 333999,
        availability: false,
        plate_no: "plate_no",
        location_id: 3,
        image: null,
        company_id: 4,
      };

    // const router = useRouter();
    // const {id} = router.query;

    // const { data, error } = useSWR(id ? `/api/vehicles/${id}` : null, fetcher)

    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.img}>
        <Image
          src={data.image ? data.image : "/Image_not_available.png"}
          alt="vehicle-image"
          width={400}
          height={400}
          
        />
        </div>
        <div className={styles.desc}>
          <div className={styles.info}>
            <h1>{data.vehicle_name}</h1>
            <div className={styles.details}
            {data.vehicle_brand && <p>{data.vehicle_brand}</p>}
            {data.vehicle_model && <p>{data.vehicle_model}</p>}
            {data.vehicle_desc && <p>{data.vehicle_desc}</p>}
            {data.plate_no && <p>{data.plate_no}</p>}
            {data.mileage && <p>{data.mileage}</p>}
            </div>
          </div>
          {data.availability ? (
            <button className="{styles.button}">Book now</button>
          ) : (
            <button className="{styles.booked-button}">Booked out</button>
          )}
        </div>
       
      </div>
    </div>
  );
};

export default VehicleById;