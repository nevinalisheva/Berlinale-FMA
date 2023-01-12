import { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import { SlEmotsmile } from "react-icons/sl";

function Modal({ setShowModal, data }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showNoConfirmation, setShowNoConfirmation] = useState(false);
  function handleClick() {
    setShowModal(false);
    document.body.style.overflow = "scroll";
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    console.log();
  }, [data]);

  function handleYesClick(e) {
    e.preventDefault();
    setShowConfirm(true);
  }
  function handleNoClick(e) {
    e.preventDefault();
    setShowNoConfirmation(true);
  }
  return (
    <>
      <div className={styles.modal_container}>
        <div className={styles.modal}>
          <div className={styles.modal_header}>
            <p>Return the vehicle</p>
            <div onClick={handleClick} className={styles.header_x}>
              &#10005;
            </div>
          </div>
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
              <div className={styles.summary}>Oops! Please call 911</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Modal;
