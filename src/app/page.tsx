import React from "react";
import Image from "next/image";
import Board from "../../containers/Board";
import Square from "../../components/Square";

export default function Home() {
  return (
   <div >
      <head>
        <title>Tic Tac Toe</title>
        <link rel="icon" href="/favicon.ico"/>

      </head>
      <main >
        <Board/>
        
        
        </main>
      </div>
    
  );
}
