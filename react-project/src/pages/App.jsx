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
// import '../components/Netflix.module.css'
import { Footer } from '../components/Footer'
// import { EventHandling } from '../components/EventHandling'
// import { EventProps } from '../components/EventProps'
import '../components/EV.css';
import { ToggleSwitch } from '../projects/ToggleSwitch/ToggleSwitch';
// import { LiftStateUp } from '../components/LiftStateUp';
// import { Sibling, State } from '../components/hooks/State';
// import { DerivedState } from '../components/DerivedState';
// import { EventPropagation } from '../components/EventPropagation'

export const App = () => {
  return (
    <section className='container'>
      {/* <h1 className='card-heading'>List of Best Netflix Series</h1> */}
    {/* <NetflixSeries /> */}
    {/* <EventHandling /> */}
    {/* <EventProps /> */}
    {/* <EventPropagation /> */}
    {/* <State /> */}
    {/* <Sibling /> */}
    {/* <DerivedState /> */}
    {/* <LiftStateUp /> */}
    <ToggleSwitch />
    </section>
  );
    }





//     export function Sibling(){
//   console.log("Sibling Component rendered");
//   return (
//   <div className='main-div'>
//     <h2>Sibling Component </h2>
//   </div>
//   );
// }




















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
