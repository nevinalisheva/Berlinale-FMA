import { useEffect, useState } from "react";
import styles from "./CancelModal.module.css";
import axios from "axios";

function CancelModal({ setShowModal, data }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showNoConfirmation, setShowNoConfirmation] = useState(false);
  function handleClick() {
    setShowModal(false);
    document.body.style.overflow = "scroll";
  }
  console.log(data);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [data]);

  function handleYesClick(e) {
    e.preventDefault();
    setShowModal(false);
    document.body.style.overflow = "scroll";
  }
  function handleNoClick(e) {
    e.preventDefault();
    axios
      .put(`/api/vehicles/${data}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    axios
      .put(`/api/bookings/update/${data}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    setShowNoConfirmation(true);
  }
  return (
    <>
      <div className={styles.modal_container}>
        <div className={styles.modal}>
          <div className={styles.modal_header}>
            <p>Cancel your booking vehicle</p>
            <div onClick={handleClick} className={styles.header_x}>
              &#10005;
            </div>
          </div>
          {data && !showConfirm && !showNoConfirmation && (
            <div className={styles.modal_content}>
              <div className={styles.data_container}>
                <div className={styles.summary}>
                  Are you sure you want to cancel your booking?
                </div>
                <button onClick={handleYesClick}>No, don't cancel</button>
                <button onClick={handleNoClick} className="secondary_button">
                  Yes, cancel
                </button>
              </div>
            </div>
          )}
          {showNoConfirmation && (
            <div className={styles.modal_content}>
              <div className={styles.summary}>
                Done! Your booking is cancelled!
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default CancelModal;
