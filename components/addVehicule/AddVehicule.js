import styles from "./AddVehicule.module.css";

const AddVehicule = () => {
  return (
    <div className={styles.formContainer}>
      <form>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Name:</label>
          </div>
          <div className={styles.col70}>
            <input type="text" name="name" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Brand:</label>
          </div>
          <div className={styles.col70}>
            <input type="text" name="brand" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Model:</label>
          </div>
          <div className={styles.col70}>
            <input type="text" name="model" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Description:</label>
          </div>
          <div className={styles.col70}>
            <textarea type="text" name="description" />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col30}>
            <label>Mileage</label>
          </div>
          <div className={styles.col70}>
            <input type="number" name="mileage" />
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
            />
          </div>
        </div>

        <input className="button" type="submit" value="Add Vehicule" />
      </form>
    </div>
  );
};

export default AddVehicule;
