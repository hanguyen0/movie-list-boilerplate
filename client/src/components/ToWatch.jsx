import React from 'react';

const ToWatch = (props) => {
    return (
        <div onClick={() => props.event()}>
            To Watch
            {props.toWatchMoives.map((movie, idx) => {
                <li key={idx + movie}>{movie}</li>
            })}
        </div>
    )
}

export default ToWatch;