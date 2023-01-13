import { useEffect, useState } from "react";
import styles from "./DropOffModal.module.css";
import { SlEmotsmile } from "react-icons/sl";
import { useRouter } from "next/router";
import axios from "axios";

function DropOffModal({
  vehicle_id,
  setShowModal,
  data,
  clicked,
  title,
  user_id,
  car_id,
  setCarVisible,
  locations
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showNoConfirmation, setShowNoConfirmation] = useState(false);
  const [selected, setSelected] = useState(undefined);
  

  function handleClick() {
    setShowModal(false);
    document.body.style.overflow = "scroll";
  }
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showConfirm) router.push(`/user/${user_id}`);
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, [showConfirm]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [data]);

  function handleYesClick(e) {
    e.preventDefault();
    axios
      .put(`/api/bookings/update/${car_id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    setShowConfirm(true);

    const timer = setTimeout(() => {
      setCarVisible(false);
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }
  function handleNoClick(e) {
    e.preventDefault();
    setShowNoConfirmation(true);
  }
   const destination = 7;
  
  function handleConfirmation(e) {
    e.preventDefault();

    axios
      .post(`/api/bookings/insertBooking`, {
        vehicle_id,
        user_id,
        destination: selected,
        is_active: 1
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    setShowConfirm(true);
  }

 
console.log(selected)
  return (
    <>
      <div className={styles.modal_container}>
        <div className={styles.modal}>
          <div className={styles.modal_header}>
            <p>{title}</p>
            <div onClick={handleClick} className={styles.header_x}>
              &#10005;
            </div>
          </div>
          {clicked && !showConfirm && (
            <form className={styles.modal_content}>
              <label htmlFor="location-selec">
                Select your destination {""}
                <select
                  id="location-selec"
                  value={selected}
                  onChange={(e) => setSelected(parseInt(e.target.value))}
                >
                  <option value="">---</option>
                  {locations.map((location) => {
                    return (
                      <option
                        key={location.location_id}
                        value={location.location_id}
                      >
                        {" "}
                        {location.venue_name}
                      </option>
                    );
                  })}
                </select>
              </label>
            </form>
          )}
          {selected !== "" && !showConfirm && (
            <button
              className={styles.button}
              onClick={handleConfirmation}
            >
              Confirm booking
            </button>
          )}
          {data && !showConfirm && !showNoConfirmation && (
            <div className={styles.modal_content}>
              <div className={styles.data_container}>
                <div className={styles.summary}>
                  Is this your drop off location:
                  <div>{data}?</div>
                </div>
                <button onClick={handleYesClick}>Yes</button>
                <button onClick={handleNoClick} className="secondary_button">
                  No
                </button>
              </div>
            </div>
          )}
          {showConfirm && (
            <div className={styles.modal_content}>
              <div className={styles.summary}>
                Great! We hope you had a nice trip
              </div>
              <SlEmotsmile />
            </div>
          )}
          {showNoConfirmation && (
            <div className={styles.modal_content}>
              <div className={styles.summary}>
                Oops! Please call 0800 5647382 to tell us where you are dropping
                off the car.
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default DropOffModal;
