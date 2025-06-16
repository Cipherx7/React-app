import { useState } from "react";
import "./Lottery.css";
import { genTicket } from "./helper"; // Importing genTicket from helper.js

export default function Lottery() {
    const [ticket, setTicket] = useState(genTicket(3));

    return (
        <div>
            <h1>Game Begins</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
        </div>
    );
}
