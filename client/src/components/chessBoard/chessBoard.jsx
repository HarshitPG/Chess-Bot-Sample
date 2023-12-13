import React, { useEffect } from "react";

const ChessboardComponent = () => {
  useEffect(() => {
    const board = window.Chessboard("myBoard", "start");
  }, []);

  return (
    <div>
      <div id="myBoard" style={{ width: "400px" }}></div>
    </div>
  );
};

export default ChessboardComponent;
