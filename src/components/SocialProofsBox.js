import './SocialProofsBox.css'; 

function SocialProofsBox(props){
    return(
        <div className="SocialProofsBox" >
            <div className="bgImageTop" ></div>
            <div className="bgImageBottom" ></div>

            {props.children}
        </div>
    )
}

export default SocialProofsBox; 