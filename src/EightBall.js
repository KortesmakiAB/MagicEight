import React, { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answersArr }) => {
    const randIdx = Math.floor(Math.random() * answersArr.length);
    const initialAnswers = { msg:"Think of a Question", color: "black" };
    const [answer, setAnswer] = useState(initialAnswers);

    const handleClick = () => {
        setAnswer(answersArr[randIdx]);
    };

    return (
        <div className="EightBall">
            <div className="EightBall-wrapper" style={ {background:answer.color} } onClick={ handleClick }>
                <blockquote>
                    { answer.msg }
                </blockquote>
            </div>
            <div>
                <button className="EightBall-button" onClick={ () => setAnswer(initialAnswers) }>Reset</button>
            </div>
        </div>

    );
};

export default EightBall;