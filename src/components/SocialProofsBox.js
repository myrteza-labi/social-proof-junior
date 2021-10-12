import './SocialProofsBox.css'; 

function SocialProofsBox(props){
    return(
        <div className="SocialProofsBox" >
            {props.children}
        </div>
    )
}

export default SocialProofsBox; 