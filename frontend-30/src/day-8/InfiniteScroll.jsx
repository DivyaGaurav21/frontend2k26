import { useEffect, useState } from "react";

let API_URL = "https://jsonplaceholder.typicode.com/posts";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [loading, setLoding] = useState(false);
  const fetchData = async (page = 1) => {
    try {
      setLoding(true);
      let res = await fetch(`${API_URL}?_limit=10&_page=${page}`);
      let newData = await res.json();
      setData((prev) => [...prev, ...newData]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    fetchData(currPage);
  }, [currPage]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight - 100 && !loading) {
        setCurrPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <>
      <p>Infinite Scroll</p>
      <div className="lists">
        {data.map((item) => (
          <div key={item.id} className="list">
            {item.title}
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </>
  );
};

export default InfiniteScroll;


// .lists {
//   display: flex;
//   flex-wrap: wrap;
//   gap: 4px;
// }

// .list {
//   border: 1px solid black;
//   width: 200px;
//   height: 200px;
//   padding: 10px;
// }
