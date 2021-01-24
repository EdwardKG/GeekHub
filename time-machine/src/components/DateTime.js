import React, {useState, useEffect} from 'react';
import './cssStyles/Blocks.css';
import TimezoneSelect from 'react-timezone-select';
import spacetime from 'spacetime';

export const DateTime = () => {
	
	var [date, setDate] = useState(new Date());
	var normalTime = spacetime.now();
	var twelveMode = spacetime.now();
	var timeOfDay = null;
	var enabled = false;
	var additionalBlock = document.getElementById('#additionalBlock');
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

	const chageBtnTimeMode = () => {
		if (document.querySelector('.btn').textContent === 'Transform clock to 12h version'){
			document.querySelector('.btn').textContent = 'Transform clock to 24h version';
			getResult(enabled = true);
		} else {
			document.querySelector('.btn').textContent = 'Transform clock to 12h version';
			getResult(enabled = false);
			return timeOfDay = null;
		}
	}

	const getResult = (enabled) => {
		if (enabled){

			twelveMode.hour = (normalTime.hour > 12) ? normalTime.hour - 12 : normalTime.hour;
			twelveMode.hour = (twelveMode.hour === 0) ? 12 : twelveMode.hour;
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
					<div className="time hour"><p>{getZero(normalTime.goto(selectedTimezone.value).hour())}</p></div>
					<div className="time minute"><p>{getZero(normalTime.goto(selectedTimezone.value).minute())}</p></div>
					<div className="time second"><p>{getZero(normalTime.goto(selectedTimezone.value).second())}</p></div>
					<div id="additionalBlock" className="hide"><p>{timeOfDay = (normalTime.hour < 12) ? "AM" : "PM"}</p></div>
				</div>
			</div>
		</div>
		</span>
	);
}

export default DateTime;//dateFenes