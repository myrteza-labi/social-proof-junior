import './Rating.css'; 

function Rating(props){
    return(
        <div className="Rating" >
            <div className="ratingImg" ></div>
            <p className="ratingText" >{props.children}</p>
        </div>
    )
}

export default Rating; 