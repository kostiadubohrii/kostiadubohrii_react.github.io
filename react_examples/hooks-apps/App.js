import {useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';



const calcValue = () => {
    console.log('random');

    return Math.random() * (50 - 1) + 1;
}

const Slider = (props) => {

    const [slide, setSlide] = useState(calcValue);
    const [autoplay, setAutoplay] = useState(false);
    
    function changeSlide(i) {
        setSlide(slide => slide + i);
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);
    }
    // const [state, setState] =  useState({slide: 0, autoplay: false});

    // function changeSlide(i) {
    //     setState(state => ({...state, slide: state.slide + i}));
    // }

    // function toggleAutoplay() {
    //     setState(state => ({...state, autoplay: !state.autoplay}));
    // }


    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
                <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : 'manual'}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}


function App() {
  return (
        <Slider/>
  );
}

export default App;
