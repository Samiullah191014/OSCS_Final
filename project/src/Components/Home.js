
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import SearchBarRes from "./HomePageSearchBar/SearchBarRes";
import SearchResultsList from "./HomePageSearchBar/SearchResultsList";


const Home=()=> {
  const [results, setResults] = useState([]);
  
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 imgclass"
          src="./Images/Homepage/slide4.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        
      
        <SearchBarRes setResults={setResults}/>
        <SearchResultsList results={results}/>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imgclass"
          src="./Images/Homepage/slide21.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
         <SearchBarRes setResults={setResults}/>
         <SearchResultsList results={results}/>


        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imgclass"
          src="./Images/Homepage/slide22.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
         <SearchBarRes setResults={setResults}/>
         <SearchResultsList results={results}/>



        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 imgclass"
          src="./Images/Homepage/slide23.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
        <SearchBarRes setResults={setResults}/>
        <SearchResultsList results={results}/>
            
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Home;