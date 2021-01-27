import React, {useState, useEffect} from 'react';
import './cssStyles/Blocks.css';
import TimezoneSelect from 'react-timezone-select';
import spacetime from 'spacetime';

export const DateTime = () => {
	
	var [date, setDate] = useState(new Date());
	var normalTime = spacetime.now();
	const addBl = document.querySelector('.additionalBlock');
	const [selectedTimezone, setSelectedTimezone] = useState({})

	
	useEffect(() => {
		var timer = setInterval(() => setDate(new Date()), 1000);

		return function cleanTime() {
			clearInterval(timer);
		}
	});
	 
	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		}
		else {
			return num;
		}
	}

		const getResult = () => {
			if(document.querySelector('.btn').classList.contains('24')){

				document.querySelector('.btn').innerHTML = "Transform clock to 24h version";

				let valueP = document.querySelector('.hour').textContent;
				let finallValue = Number(valueP) - 12;
				
				addBl.style.display = 'inline';

				if (finallValue < 0){
					document.querySelector('.hour-p').textContent = valueP;
				} else {
					document.querySelector('.hour-p').textContent = String(getZero(finallValue));
				}
				
			}else{
				document.querySelector('.btn').innerHTML = "Transform clock to 12h version";
				let valueP = document.querySelector('.hour').textContent;
				let finallValue = Number(valueP) + 12;
					if (addBl.innerHTML === "<p>AM</p>") {
						document.querySelector('.hour-p').innerHTML = String(valueP);
					}else {

						document.querySelector('.hour-p').innerHTML = String(getZero(finallValue));
					}
					addBl.style.display = 'none';
			}
		}

	const chageBtnTimeMode = () => {
		document.querySelector('.btn').classList.toggle('24');
		getResult();
	}
	
	
	const plusHour = () => {
		let valueP = document.querySelector('.hour').textContent;
		let finallValue = Number(valueP) + 1;
		if ((document.querySelector('.btn').innerHTML === "Transform clock to 12h version") && (finallValue >= 24)) {
			finallValue = 0;
			document.querySelector('.hour-p').textContent = String(getZero(finallValue));
		} else if ((document.querySelector('.btn').innerHTML === "Transform clock to 24h version") && (finallValue >= 12)) {
			finallValue = 0;
			document.querySelector('.hour-p').textContent = String(getZero(finallValue));
		} else {
			document.querySelector('.hour-p').textContent = String(getZero(finallValue));
		}
	}

	const minusHour = () => {
		let valueP = document.querySelector('.hour').textContent;
		let finallValue = Number(valueP) - 1;
		if ((document.querySelector('.btn').innerHTML === "Transform clock to 12h version") && (finallValue <= 0)) {
			finallValue = 23;
			document.querySelector('.hour-p').textContent = String(getZero(finallValue));
		} else if ((document.querySelector('.btn').innerHTML === "Transform clock to 24h version") && (finallValue <= 0)) {
			finallValue = 11;
			document.querySelector('.hour-p').textContent = String(getZero(finallValue));
		} else {
			document.querySelector('.hour-p').textContent = String(getZero(finallValue));
		}
	}

	const plusMinute = () => {
		let valueP = document.querySelector('.minute').textContent;
		let finallValue = Number(valueP) + 1;
		if (finallValue >= 60) {
			finallValue = 0;
			document.querySelector('.minute-p').textContent = String(getZero(finallValue));
		} else {
			document.querySelector('.minute-p').textContent = String(getZero(finallValue));
		}
	}

	const minusMinute = () => {
		let valueP = document.querySelector('.minute').textContent;
		let finallValue = Number(valueP) - 1;
		if (finallValue <= 0) {
			finallValue = 59;
			document.querySelector('.minute-p').textContent = String(getZero(finallValue));
		} else {
			document.querySelector('.minute-p').textContent = String(getZero(finallValue));
		}
	}

	return(
		<span>
			<div className='select-wrapper'>
		<TimezoneSelect
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
		</div>

		<div className="container">
		<button className="btn" onClick={chageBtnTimeMode}>Transform clock to 12h version</button>
			<div className="promotion__timer">
				<div className="timer">
					<div className="time hour"><p className='hour-p'>{getZero(normalTime.goto(selectedTimezone.value).hour())}</p></div>
					<div className="time minute"><p className='minute-p'>{getZero(normalTime.goto(selectedTimezone.value).minute())}</p></div>
					<div className="time second"><p>{getZero(normalTime.goto(selectedTimezone.value).second())}</p></div>
					<div className="time additionalBlock hide"><p>{(normalTime.goto(selectedTimezone.value).hour() < 12) ? "AM" : "PM"}</p></div>
				</div>
			</div>
		</div>
		<div className="plusAndMinus" style={{flexWrap: "wrap", minWidth: "120px", margin: "20px"}}>
			<div style={{position: "relative", textAlign: "center", margin: "10px"}}>
				<button className="minus" onClick={minusHour}>-</button>	
				<span style={{display: "inline-block", width: "50px", minWidth: "50px", maxWidth: "50px", marginLeft: "25px"}}>hour</span>
				<button className="plus" onClick={plusHour}>+</button>
			</div>

			<div style={{position: "relative", textAlign: "center", margin: "10px"}}>
				<button className="minus" onClick={minusMinute}>-</button>	
				<span style={{display: "inline-block", width: "50px", minWidth: "50px", maxWidth: "50px", marginLeft: "25px"}}>minute</span>
				<button className="plus" onClick={plusMinute}>+</button>
			</div>
		</div>
		</span>
	);
}

export default DateTime;//dateFenes 