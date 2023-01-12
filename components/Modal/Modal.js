import { useEffect } from "react";
import styles from "./Modal.module.css";
import { TfiCommentsSmiley } from "react-icons/Tfi";

function Modal({ setShowModal, data }) {
  function handleClick() {
    setShowModal(false);
    document.body.style.overflow = "scroll";
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
    console.log();
  }, [data]);
  return (
    <>
      <div className={styles.modal_container} onClick={handleClick}>
        <div className={styles.modal}>
          <div className={styles.modal_header}>
            <p>Return the vehicle</p>
            <div onClick={handleClick} className={styles.header_x}>
              &#10005;
            </div>
          </div>
          {data && (
            <div className={styles.modal_content}>
              <div className={styles.data_container}>
                <h3>
                  We hope you had a good ride
                  <TfiCommentsSmiley />
                </h3>
                <div className={styles.summary}>
                  Is this your drop off location?:
                  <span>{data}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Modal;
