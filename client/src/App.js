import React, { useEffect, useState } from "react";
import ChessboardComponent from "./components/chessBoard/chessBoard";
import ChessComponent from "./utils/validationchess";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>React App</h1>
      <p>Message from Flask: {data.message}</p>
      <ChessComponent>
        <ChessboardComponent />
      </ChessComponent>
    </div>
  );
}

export default App;
