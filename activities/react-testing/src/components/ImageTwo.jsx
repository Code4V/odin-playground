import { useEffect, useState } from "react";

const ImageTwo = ({ imageURL }) => {
  const [alt, setAlt] = useState(null)
  const [error, setError] = useState(null);

  if (error) return <p>THE CONTENT FAILED TO LOAD { error }</p>

  return (
    imageURL && (
      <>
        
        <h1>An image</h1>
        <img src={imageURL} alt={"placeholder text"} alt={alt}/>
      </>
    )
  );
};



export default ImageTwo;