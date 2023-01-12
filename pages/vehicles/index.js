


// import Image from "next/image";
// import useSWR from 'swr';

// const fetcher = async () => {
//     const response = await fetch('url')
//     const data = await response.json()
//     return data
// }

// const Details = () => {
//     const { data, error } = useSWR('/api/vehicle-data', fetcher)

//     if (error) return <div>Failed to load</div>
//     if (!data) return <div>Loading...</div>

//   return (
//     <div className="container">
//       <Image
//         src={data.image ? data.image : "/Image_not_available.png"}
//         alt="vehicle-image"
//         width={400}
//         height={400}
//       />
//       <div className="info">
//         <h1>{data.vehicle_name}</h1>

//         </div>
//     </div>
//   );
// };

// export default Details;