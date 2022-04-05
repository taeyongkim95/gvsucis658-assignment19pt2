import React, {useState} from 'react';
import axios from 'axios';

const Joke = () => {

  const [joke, setJokes] = useState([]);
  const apiLink = 'https://us-central1-kim-cis680-cloudappdev.cloudfunctions.net/dadjoke-658';

  const fetchData = async () => {
    const res = await axios.get(`${apiLink}`, { headers: { Accept: "application/json" } });
    setJokes([res.data.joke]);
  }

  return(
    <div className='joke-container'>
      <h1>Some Dad Jokes:</h1>
      <button onClick={fetchData}>Load jokes</button>
      {joke && joke.map((j, index) => (
        <div className="data" key={index}>
          {j}
        </div>
      ))}
    </div>
  );
}

export default Joke;