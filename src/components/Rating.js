import './Rating.css'; 
import starIcon from '../images/icon-star.svg'; 

function Rating(props){

    

    function pushStars(){
        let starsArray = []; 

            for(let i=0; i< 5; i++){
                starsArray.push(<img key={i} className="star" src={starIcon} alt="une étoile"/>);
            }
            return (
                starsArray
            )
    }

    let stars = pushStars(); 

    return(
        <div className="Rating" >
            <div className="starsContainer" >
                {stars}
            </div>
            <p className="ratingText" >Rated 5 Stars in {props.magazine}</p>
        </div>
    )
}

export default Rating; 