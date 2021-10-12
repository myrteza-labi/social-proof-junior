import './App.css';
import SocialProofsBox from './components/SocialProofsBox'; 
import TextPresentation from './components/TextPresentation'; 
import RatingsContainer from './components/RatingsContainer'; 
import Rating from './components/Rating'; 
import ReviewsContainer from './components/ReviewsContainer'; 
import Review from './components/Review'; 

function App() {
  return (
    <div className="App">
      <SocialProofsBox>
        <TextPresentation/>
        <RatingsContainer>
          <Rating/>
          <Rating/>
          <Rating/>
        </RatingsContainer>
        <ReviewsContainer>
          <Review src={""} alt={""} name={""}/>
          <Review src={""} alt={""} name={""}/>
          <Review src={""} alt={""} name={""}/>
        </ReviewsContainer>
      </SocialProofsBox>     
    </div>
  );
}

export default App;
