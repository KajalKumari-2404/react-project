// import React from "react";

// const App = () => {
//   const user = "kajal"
//   const age = 20
//   return (
//     <div>Hello {user},{age}</div>
//   )
// }



// function call karenge ab

// import React from 'react'

// const App = () => {
//   let user = 'kajal'

//   const changeUser = ()=>{
//     console.log(user)
//     user = "kangna"
//     console.log(user)
//   }

//   // const abc = () => {
//   //   console.log("Hello")
//   // }
//   // abc()
//   return (
//     <div>
//       <h1>Username is {user}</h1>
//       <button onClick={changeUser}>Change User</button>
//       </div>
//   )
// }

// export default App


// import  { useState } from 'react'

// export const App = () => {
//   const [a, setA] = useState(10)

//   const ChangeA = () =>{
//     console.log("changeB")
//     setA(20)
//   }
//   return (
//     <div>
//       <h1>Value of a is {a} </h1>
//       <button onClick={ChangeA}>Change A</button>
//     </div>
//   )
// }



// import React, { useState } from 'react'

// export const App = () => {
//   const [num, setNum] = useState("kajal")
//   return (
//     <div>
//       <h3>Number is {num}</h3>
//       <button onClick={()=>setNum(num+10)}>Increment</button>
//       <button onClick={()=>setNum(num-10)}>Decrement</button>
//     </div>
//   )
// }


// import React from 'react'

// export const App = () => {
//   return (
//     <div>
//       <h2 className='text-5xl bg-pink-700 text-black'>Hello Guys</h2>
//       <h2>hello everyone</h2>
//     </div>
//   )
// }

// export function App() {
//   return (
//     <h1 className="text-3xl font-bold">
//       Heyy Kajal
//     </h1>
//   )
// }



// import React, { useState } from 'react'

// export const App = () => {
//   const [username, setUsername] = useState('')

  
//   const submitHandler = (e)=>{
//     e.preventDefault()
//    console.log(username)

//    setUsername('')
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input 
//         value={username}
//         onChange={(e)=>{
//           setUsername(e.target.value)
//         }}
//         className='px-4 rounded py-3 text-xl m-5 bg-white text-black' 
//         type="text" 
//         placeholder='Enter your name'/>
//         <button className='px-4 text-white py-3 m-5 text-xl font-semibold bg-emerald-600 rounded'>submit</button>
//       </form>
//     </div>
//   )
// }


// import React from 'react'
// import { Header } from './components/Header'

// export const App = () => {
//   return (
//     <>
//     <Header/>
//     <nav className='flex py-5 bg-emerald-950 px-10 items-center justify-between'>
//       <h2 className='text-2xl'>throne8</h2>
//        <div className='flex gap-8 items-center'>
//         <h4 className='text-xl'>About</h4>
//         <h4 className='text-xl'>Contact</h4>
//         <h4 className='text-xl'>Services</h4>
//         <h4 className='text-xl'>Your Account</h4>
//       </div>
//     </nav>
    
//     </>
//   )
// }

//PROPS
// import React from 'react'
// import { Card } from './components/Card'

// export const App = () => {
//   return (
//     <div>
//       <Card a='kajal'/>
//       <Card a='kangana' />
//     </div>
//   )
// }


// import React from 'react'
// import { Card } from './components/Card'

// export const App = () => {
//   const users = [
//   {
//     "name": "Kajal Kumari",
//     "city": "Bhopal",
//     "age": 20,
//     "profession": "Student",
//     "profilePhoto": "https://randomuser.me/api/portraits/women/1.jpg"
//   },
//   {
//     "name": "Anjali Sharma",
//     "city": "Delhi",
//     "age": 22,
//     "profession": "Software Developer",
//     "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
//   },
//   {
//     "name": "Rahul Verma",
//     "city": "Mumbai",
//     "age": 25,
//     "profession": "UI Designer",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
//   },
//   {
//     "name": "Priya Singh",
//     "city": "Indore",
//     "age": 21,
//     "profession": "Web Developer",
//     "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
//   },
//   {
//     "name": "Aman Gupta",
//     "city": "Pune",
//     "age": 24,
//     "profession": "Backend Developer",
//     "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
//   }
// ]

//add for each
// users.forEach(function(elem){
//   console.log(elem)
// })


//   return (
//     <div>
//       <div className='p-10'>
//         {users.map(function(elem,idx){
//          return <Card key={idx} username={elem.name} age={elem.age} city={elem.city} photo={elem.profilePhoto} prof={elem.profession}/>
//         })}
//     </div>
//     </div>
//   )
// }


// import React from 'react'
// import { Ex } from './components/Ex'

// export const App = () => {
//   return (
//     <div>
//       <Ex name="kajal"/>
//     </div>
//   )
// }



// //INTEGRATING API(axios)
// import React, { useEffect, useState } from 'react'
// import axios from 'axios';

// export const App = () => {
//   const [data, setData] = useState([])
//   const getData = async ()=>{
//     const response = await axios.get('https://picsum.photos/v2/list')

//     setData (response.data)

//     // console.log(data[0].download_url)
//   }

//   useEffect(() => {
//     getData()
//     }, [])
  

//   return (
//     <div className='p-10'>
//       <button onClick={getData} className='bg-teal-600 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90'>Get Data</button>
//       <div className='p-5 mt-5 bg-gray-950'>
//         {data.map(function(elem,idx){
//           return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
//             <img className='h-40' src={elem.download_url} alt="" />
//             <h1>{elem.author}</h1>

//           </div>
//         })}

//       </div>
//     </div>
//   )
// }




// //React Router DOM
// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import { About } from './pages/About'
// import { Contact } from './pages/Contact'
// import { Product } from './pages/Product'
// import { Home } from './pages/Home'
// import { Header } from './components/Header'

// export const App = () => {
//   return (
//     <div>
//       <Header />
//       <Routes>
//         <Route path='/' element={<Home />}/>
//         <Route path='/about' element={<About />}/>
//         <Route path='/contact' element={<Contact />}/>
//         <Route path='/product' element={<Product />}/>
//         {/* <Route path='/home' element={<Home />}/> */}
//       </Routes>
//     </div>
//   )
// }



// //Context API
// import React from 'react'

// export const App = () => {
//   return (
//     <div>App</div>
//   )
// }













































// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
