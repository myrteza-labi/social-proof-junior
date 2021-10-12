import './Rating.css'; 

function Rating(props){
    return(
        <div className="Rating" >
            <div className="ratingImg" ></div>
            <p className="ratingText" >Rated 5 Stars in{props.magazine}</p>
        </div>
    )
}

export default Rating; 