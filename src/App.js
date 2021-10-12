import './App.css';
import SocialProofsBox from './components/SocialProofsBox'; 
import TextPresentation from './components/TextPresentation'; 
import RatingsContainer from './components/RatingsContainer'; 
import Rating from './components/Rating'; 
import ReviewsContainer from './components/ReviewsContainer'; 
import Review from './components/Review'; 
import pictureColton from './images/image-colton.jpg'; 
import pictureIrene from './images/image-irene.jpg'; 
import pictureAnne from './images/image-anne.jpg'; 


function App() {
  return (
    <div className="App">
      <SocialProofsBox>
        <TextPresentation/>
        <RatingsContainer>
          <Rating magazine={"Reviews"}/>
          <Rating magazine={"Guru"}/>
          <Rating magazine={"BestTech"}/>
        </RatingsContainer>
        <ReviewsContainer>

          <Review src={pictureColton}  name={"Colton Smith"}>
            "We needed the same printed design as the one we had ordered a week prior.
            Not only did they find the original order, but we also received it in time.
            Excellent!"
          </Review>

          <Review src={pictureIrene}  name={"Irene Roberts"}>
            "Customer service is always excellent and very quick turn around. Completely
            delighted with the simplicity of the purchase and the speed of delivery."
          </Review>

          <Review src={pictureAnne}  name={"Anne Wallace"}>
            "Put an order with this company and can only praise them for the very high
            standard. Will definitely use them again and recommend them to everyone!"
          </Review>

        </ReviewsContainer>
      </SocialProofsBox>     
    </div>
  );
}

export default App;
