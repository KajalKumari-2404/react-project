import React from 'react'
import seriesData from '../api/seriesData.json'
import { SeriesCard } from './SeriesCard'

export const NetflixSeries = () => {
  return (
    <ul>
      {seriesData.map((curElem) => {
        return <SeriesCard key={curElem.id} data={curElem} //ye key props most imp h
          />
      })}
    </ul>
  )
}
      {/* <li>
    <div className="text-white p-10">

      <div>
        <img
          src={seriesData[1].img_url}
          alt={seriesData[1].name}
          width="40%"
          height="40%"
        />
      </div>

      <h2>
        Name: {seriesData[1].name}
      </h2>

      <h3>
        Rating: {seriesData[1].rating}
      </h3>

      <p>
        Summary: {seriesData[1].description}
      </p>

      <p>
        Genre: {seriesData[1].genre}
      </p>

      <p>
        Cast: {seriesData[1].cast}
      </p>

      <a
        href={seriesData[1].watch_url}
        target="_blank"
      >
        <button>Watch Now</button>
      </a>
      </div>
      </li>
      <li>
    <div className="text-white p-10">

      <div>
        <img
          src={seriesData[2].img_url}
          alt={seriesData[2].name}
          width="40%"
          height="40%"
        />
      </div>

      <h2>
        Name: {seriesData[2].name}
      </h2>

      <h3>
        Rating: {seriesData[2].rating}
      </h3>

      <p>
        Summary: {seriesData[2].description}
      </p>

      <p>
        Genre: {seriesData[2].genre}
      </p>

      <p>
        Cast: {seriesData[2].cast}
      </p>

      <a
        href={seriesData[2].watch_url}
        target="_blank"
      >
        <button>Watch Now</button>
      </a>
      </div>
      </li>
      <li>
    <div className="text-white p-10">

      <div>
        <img
          src={seriesData[3].img_url}
          alt={seriesData[3].name}
          width="40%"
          height="40%"
        />
      </div>

      <h2>
        Name: {seriesData[3].name}
      </h2>

      <h3>
        Rating: {seriesData[3].rating}
      </h3>

      <p>
        Summary: {seriesData[3].description}
      </p>

      <p>
        Genre: {seriesData[3].genre}
      </p>

      <p>
        Cast: {seriesData[3].cast}
      </p>

      <a
        href={seriesData[3].watch_url}
        target="_blank"
      >
        <button>Watch Now</button>
      </a>
      </div>
      </li>
      <li>
    <div className="text-white p-10">

      <div>
        <img
          src={seriesData[4].img_url}
          alt={seriesData[4].name}
          width="40%"
          height="40%"
        />
      </div>

      <h2>
        Name: {seriesData[4].name}
      </h2>

      <h3>
        Rating: {seriesData[4].rating}
      </h3>

      <p>
        Summary: {seriesData[4].description}
      </p>

      <p>
        Genre: {seriesData[4].genre}
      </p>

      <p>
        Cast: {seriesData[4].cast}
      </p>

      <a
        href={seriesData[4].watch_url}
        target="_blank"
      >
        <button>Watch Now</button>
      </a>
      </div>
      </li> */}
    //   </ul>

    
//   )
// }

















































































// import React from 'react'
// import seriesData from '../api/seriesData.json'
// import { Card }i from './Card'

// export const NetflixSeries = () => {
//   return (
//     <div className="text-white p-10">
//       <h1 className="text-4xl font-bold mb-8">
//         Netflix Series
//       </h1>

//       <div className="grid grid-cols-3 gap-6">
//         {seriesData.map((series) => {
//           return (
//             <Card
//               key={series.id}
//               series={series}
//             />
//           )
//         })}
//       </div>
//     </div>
//   )
// }
























// import React from 'react'

// export const NetflixSeries = () => {
//   return (
//     <div>NetflixSeries</div>
//   )
// }



// import React from 'react'

// export const NetflixSeries = () => {
//   return (
//     <div className="text-white text-3xl mt-5">
//       NetflixSeries
//     </div>
//   )
// }
