import "./App.css";
import react, { useState, useEffect } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Card from "./Components/Card";
import Pagination from "./Components/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const onpaging=(start,end)=>{
setpaging({start:start,end:end})
  }
  const [showperpage, setShowperpage] = useState(8);
  const [paging, setpaging] = useState({
    start: 0,
    end: showperpage,
  });

  const { start, end } = paging;
  const disp = (val, index) => {
    const { id, title, body } = val;
    return <Card key={index} id={id} title={title} body={body} />;
  };

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setPosts(res.data);
        });
    };
    fetch();
  }, []);

  return (
    <div className="App">
      <div className="row mx-md-5 my-md-5">
        <div className="d-flex flex-wrap ">
          {posts.slice(start, end).map(disp)}
        </div>
      </div>
      <Pagination showperpage={showperpage} onpaging={onpaging} total={posts.length}/>
    </div>
  );
}

export default App;
