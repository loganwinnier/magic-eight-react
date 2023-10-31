import { useState } from "react";
import { choice } from "./Random";

const BALL_STATES = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
];

/** Eightball Setup and Output
 * 
 * State: 
 * -ball: object {msg: "string", color: "string"}
 * 
 * App -> Eightball
*/
function Eightball() {
    const [ball, setBall] = useState({ msg: "Think of a question", color: "black" });

    function handleClick() {
        setBall(choice(BALL_STATES));
    }

    return (
        <div onClick={handleClick} style={{ "background-color": ball.color }} className="Eightball">
            <h3>{ball.msg}</h3>
        </div >
    );
};

export default Eightball;