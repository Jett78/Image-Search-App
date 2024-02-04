import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import { Card } from "./components/Card";
import BeatLoader from "react-spinners/BeatLoader";

const App = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("cats"); 

  useEffect(() => {
    let timeoutId
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=41844389-d3d3c83c92fefa5a2171b085e&q=${searchQuery}&per_page=200&image_type=photo&pretty=true`
        );
        const data = await response.json();
        setImage(data.hits);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    };
    timeoutId = setTimeout(fetchdata, 2500); 
  },[searchQuery]);

  const handleSearch = (event) => {
    const search = event.target.value;
    setSearchQuery(search);
  };


  //in case of error return these statement
  if (error) return;
  <div className="absolute top-[50%] left-[50%]">
    {error}
    </div>;

  if (loading)
    return (
      <div className="absolute top-[50%] left-[50%]">
        <BeatLoader
          color="#36d7b7"
          cssOverride={{}}
          loading
          margin={2}
          size={15}
          speedMultiplier={2}
        />
      </div>
    );

    // grid grid-cols-4 gap-6
  return (
    <main className="max-w-[1400px] mx-auto">
      <Navigation handleSearch={handleSearch} />
      <div className="grid grid-cols-4 flex-wrap">
        {image?.map((image) => (
          <Card key={image.id} image={image} />
        ))}
      </div>
    </main>
  );
};

export default App;
