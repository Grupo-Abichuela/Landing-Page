import React from 'react';

function Guias(props) {
  return (
    <li>
        <a href={props.href}>
            <img src={props.src}/>
            <h2>{props.title}</h2>
        </a>
        <p>{props.text}</p>
    </li>
  )
}

export default Guias