import {useState} from 'react';
import {Container} from 'react-bootstrap'
import './App.css';



function useInputDisValidate(initialValue) {
	const [value, setValue] = useState(initialValue);
	const [measure, setMeasure] = useState('miles');


	const onChange = event => {
		change(event.target.value)
	}

	const change = value => {
		if (measure === 'miles') {
			setValue(+value / 1.60934)
		}else {
			setValue(+value * 1.60934)
		}
	}

	const validateInput = () => {
		// return value.search(/\w/) >= 0
		return value
	}

	const onRatioChange = event => {
		setMeasure(event.target.value)
	}
	
	return {value, onChange, validateInput, measure, onRatioChange}
}

const Form = () => {

	const input = useInputDisValidate(0);

	const printedValue = () => {
		if (input.measure === 'km') {
			return `${Math.round(input.value * 100) / 100} km`
		}else {
			return `${Math.round(input.value * 100) / 100} miles`;
		}
	}
	
	const color = input.validateInput() ? 'text-danger' : null;


	return (
		<Container>
			<form className='w-50 border mt-5 p-3 m-auto'>
				<div className='row g-3 mb-3'>
					<div className='col-md-5'>
						<label htmlFor="controlInput" className='form-label mt-3'>Enter distance:</label>
						<input 
							onChange={input.onChange}
							type="text" 
							className={`form-control ${color}`}
							id='controlInput'
							name='distance'
							placeholder='997'

							/>
					</div>
					<div className='form-check col-md-3'>
						<label htmlFor="milesInput" className='form-label mt-3'>Units:</label>
						<select onChange={input.onChange} className="form-select" id="validationCustom04">
							<option selected value="miles">miles</option>
							<option value="km">km</option>
						</select>
						 {/* <input 
							type="radio" 
							name="mesuring" 
							id="milesInput" 
							className='form-check-input'
							value='miles'
							defaultChecked
							onChange={input.onRatioChange}
						  /> */}
					</div>
    				<button type="submit" className="btn btn-primary col-md-3">Convert</button>

					<div class="form-floating">
						<textarea class="form-control" placeholder="answer" id="floatingTextarea"></textarea>
						<label for="floatingTextarea">{printedValue()}</label>
					</div>
				</div>
			</form>
		</Container>
	)
}


function App() {
	return (
		<Form/>
	);
}



export default App;
