import React from 'react'

function Card(props) {
  return (
    <div className="card">
    <div className="card-image">
        <img src={props.image} alt="" className="card-img" />
    </div>
    <div className="card-profile-img">
        <img src={props.profilePicture} alt="" className="card-prof-img" />
    </div>
    <div className="card-content">
        <a className="art-name">{props.artName}</a>
        <br/>
        <a className="artits-name">{props.artistName}</a>
    </div>
</div>
  )
}

export default Card