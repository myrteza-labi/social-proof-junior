import './RatingsContainer.css'; 

function RatingsContainer(props){
    return(
        <div className="RatingsContainer" >
            {props.children}
        </div>
    )
}

export default RatingsContainer; 