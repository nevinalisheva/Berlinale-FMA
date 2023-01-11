import Image from "next/image";
// import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Details = () => {
  //       const { data, error } = useSWR('/api/profile-data', fetcher)

  //   if (error) return <div>Failed to load</div>
  //   if (!data) return <div>Loading...</div>

  return (
    <div className="container">
      <Image
        src={"/Image_not_available.png"} 
        //data.image ? data.image :
        alt="vehicle-image"
        width={400}
        height={400}
      />
      <div className="info">{/* <h1>{data.name}</h1> */}</div>
    </div>
  );
};

export default Details;
