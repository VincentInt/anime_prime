import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const getDataFunc = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    if (url) {
      getDataFunc();
    }
  }, []);
  return [data, setData, getDataFunc];
};

export default useFetch;
