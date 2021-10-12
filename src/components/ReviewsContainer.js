import './ReviewsContainer.css'; 

function ReviewsContainer(props){
    return(
        <div className="ReviewsContainer" >
            {props.children}
        </div>
    )
}

export default ReviewsContainer; 