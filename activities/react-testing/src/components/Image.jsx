import { useEffect, useState } from "react";
import ImageTwo from "./ImageTwo";

const Image = ({ delay }) => {
  const [alt, setAlt] = useState(null)
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true)
  const [secondImageURL, setSecondImageURL] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
        .then((response) => 
          {
            return response.json();
          })
        .then((response) => 
          {
            const { title, url } = response[4];
            setAlt(title)
            setImageURL(url)
          })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
      }, delay)
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
          .then((response) => 
            {
              return response.json();
            })
          .then((response) => 
            {
              const { title, url } = response[49];
              setSecondImageURL(url)
            })
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
        }, delay + 2000)
    }, []);
    

  const changePicture = () => {
    setImageURL("https://picsum.photos/500");
  }

  if (loading) return <p>THE CONTENT IS LOADING</p>
  if (error) return <p>THE CONTENT FAILED TO LOAD { error }</p>

  return (
    imageURL && (
      <>
        
        <h1>An image</h1>
        <img src={imageURL} alt={alt}/>
        <ImageTwo imageURL={secondImageURL}/>
      </>
    )
  );
};

export default Image;