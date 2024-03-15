import { useState } from "react";
import Link from 'next/link';

function Home () {
    return (
        <div>
            <h1>Home</h1>
            <Contador />
            <Link href="/tictactoe">Tic Tac Toe</Link>
        </div>

)}

function Contador() {
    const [contador,setContador] = useState(1);
    function somarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={somarContador}>Somar contador</button>
        </div>
    )
}

export default Home