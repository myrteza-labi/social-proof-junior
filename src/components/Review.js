import './Review.css'; 

function Review(props){
    return(
        <div className="Review" >
            <div className="pictureAndNameContainer" >
                <img className="profilePicture" src={props.src} alt={props.alt} />
                <h4 className="profileName" >{props.name}</h4>
            </div>
            <p className="reviewText" >{props.children}</p>
        </div>
    )
}

export default Review; 