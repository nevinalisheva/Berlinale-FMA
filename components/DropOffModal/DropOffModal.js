import { useEffect, useState } from "react";
import styles from "./DropOffModal.module.css";
import { SlEmotsmile } from "react-icons/sl";
import { useRouter } from "next/router";

function DropOffModal({ setShowModal, data, clicked, title, user_id }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showNoConfirmation, setShowNoConfirmation] = useState(false);
  const [selected, setSelected] = useState("");

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
                  onChange={(e) => setSelected(e.target.value)}
                >
                  <option value="">---</option>
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
              </label>
            </form>
          )}
          {selected !== "" && !showConfirm && (
            <button
              className={styles.button}
              onClick={() => setShowConfirm(true)}
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
              <div className={styles.summary}>Oops! Please call 911</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default DropOffModal;
