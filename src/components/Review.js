import './Review.css'; 

function Review(props){
    return(
        <div className="Review" >
            <div className="pictureAndNameContainer" >
                <img className="profilePicture" src={props.src} alt={("photo de profile de "+props.name)} />
                <div className="nameAndStatusContainer" >
                    <h4 className="profileName" >{props.name}</h4>
                    <p className="profileStatus" >Verified Buyer</p>
                </div>
            </div>
            <p className="reviewText" >{props.children}</p>
        </div>
    )
}

export default Review; 