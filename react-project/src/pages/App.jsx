// import React from 'react'
// import { NetflixSeries } from '../components/NetflixSeries'

// export const App = () => {
//   return (
//     <>
//       <NetflixSeries />
//     </>
//   )
// }










import React from 'react'
import { Header } from '../components/Header'
// import { NetflixSeries } from '../components/NetflixSeries'
// import '../components/Netflix.css'
import '../components/Netflix.module.css'
import { Footer } from '../components/Footer'
// import { EventHandling } from '../components/EventHandling'
import { EventProps } from '../components/EventProps'

export const App = () => {
  return (
    <section className='container'>
      {/* <h1 className='card-heading'>List of Best Netflix Series</h1> */}
    {/* <NetflixSeries /> */}
    {/* <EventHandling /> */}
    <EventProps />
    </section>
  );
    }
























// import React from 'react'
// import { Header } from '../components/Header';
// import { NetflixSeries } from '../components/NetflixSeries';
// import { Footer } from '../components/Footer';

// export const App = () => {
//   return (
//     <>
//     <Header />
//     <NetflixSeries />
//     <Footer />
//     </>
//   )
// }
