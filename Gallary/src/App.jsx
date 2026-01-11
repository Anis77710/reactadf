import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [UserData, setUserData] = useState([]);

  const getPhotos = async () => {
    const data = await axios.get(
      "https://picsum.photos/v2/list?page=3&limit=20"
    );
    setUserData(data.data);
    console.log(data.data);
  };


  useEffect(() => {
    getPhotos();
  }, [])
  
  let printData = "No Data";
  if (UserData.length > 0) {
    printData = UserData.map(function (elem, idx) {
      return (
        <div className=" h-60 w-68 bg-black  " key={idx}>
          <div className="">
            <img
              className="object-cover h-52 w-64 overflow-hidden rounded-2xl"
              src={elem.download_url}
              alt={elem.author}
            />
            <p className="text-white font-bold text-xl">{elem.author}</p>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="p-10 min-h-screen bg-black">
      {/* <button
        onClick={() => getPhotos()}
        className="bg-blue-500 text-2xl border-black p-5 rounded-2xl text-white active:scale-95 mb-5"
      >
        Get Photos
      </button> */}

        <div className="flex flex-wrap gap-8 text-white">{printData}</div>

    </div>
  );
};

export default App;
