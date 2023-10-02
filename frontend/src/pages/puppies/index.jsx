import React, { useState, useEffect } from "react";
import "./puppies.css";

function Puppies(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [puppies, setPuppies] = useState([]);

  const BASE_URL = "http://localhost:3000/puppies"; // Replace with your actual endpoint or use an environment variable

  const getPuppies = async () => {
    try {
      console.log(URL)
      const response = await fetch(BASE_URL);
      const allPuppies = await response.json();
      setPuppies(allPuppies);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPuppies();
  }, []);

  const loaded = () => {
    return puppies?.map((puppy) => {
      return (
        <div key={puppy._id}>
          <h3>{puppy.name}</h3>
          <img className="puppy-image" src={puppy.image} alt={puppy.name} />
          <p>{puppy.breed}</p>
        </div>
      );
    });
  };

  const loading = () => (
    <div className="puppies-list">
      <h1>
        Loading...
        <span>
          <img
            className="spinner"
            src="https://freesvg.org/img/1544764567.png"
            alt="Loading..."
          />
        </span>
      </h1>
    </div>
  );

  return (
    <section className="puppies-list">
      {isLoading ? loading() : loaded()}
    </section>
  );
}

export default Puppies;
