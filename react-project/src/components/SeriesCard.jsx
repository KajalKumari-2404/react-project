import styles from "./Netflix.module.css";
import styled from "styled-components"

export const SeriesCard = ({ data }) => {
    // console.log(props);
    const {  img_url, name, rating, description, cast, genre, watch_url } = data;

    // const btn_style = {
    //   padding: "1.2rem 2.4rem",
    //   border: "none",
    //   fontSize: "1.6rem",
    //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    //   color: "var( --btn-color )",
    //   fontWeight: "bold",
    //   cursor: "pointer",
    // };

    //directly object ke through
    
    // const ButtonThapa = styled.button({
    //   padding: "1.2rem 2.4rem",
    //   border: "none",
    //   fontSize: "1.6rem",
    //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    //   color: "var( --btn-color )",
    //   fontWeight: "bold",
    //   cursor: "pointer",
    // });

    //template literals ke through
    
    const ButtonThapa = styled.button`
      padding: 1.2rem 2.4rem;
      border: none;
      font-size: 1.6rem;
      background-color: ${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
      color: var( --btn-color );
      font-weight: bold;
      cursor: pointer;`


      //In styled-components, you can pass a function within the template literal to
      //  dynamically set CSS properties based on props or state.


      const Rating = styled.h3`
      font-size: 1.6rem;
      color: #7dcea0;
      text-transform: capitalize;
      `;


    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

    return (
        <li className={styles.card}>
    {/* <div className="text-white p-10"> */}
    <div className="text-white">

      <div className="card-image">
        {/* <img
          src={img_url}
          alt={name}
          width="40%"
          height="40%"/> */}

          <img
          src={img_url}
          alt={name}
          className="card-image"
          />
      </div>
      <div className={styles["card-content"]}>

      <h2>Name: {name} </h2>

      <Rating>Rating:
        <span className={`${styles.rating} ${ratingClass}`}> {rating} </span> 
        </Rating>

      <p>Summary: {description} </p>

      <p>Genre: {genre} </p>

      <p>Cast: {cast} </p>

      <a href={watch_url} target="_blank">
        {/* <button style={btn_style}>Watch Now</button> */}
        <ButtonThapa rating={rating}>Watch Now</ButtonThapa>
        </a>
        </div>
        </div>
        </li>
        );
      };