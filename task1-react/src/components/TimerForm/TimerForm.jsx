import { useEffect, useRef, useState } from "react";

const TimerForm = ({ init }) => {
	const inputRef = useRef(null);
	const [value, setValue] = useState('');

	const handleForm = (e) => {
		e.preventDefault();

		const timerVal = Number(value.trim());

		if (timerVal) {
			init(timerVal);
		}
	}

	const handleChange = (e) => {
		setValue(e.target.value.replace(/\D/, ''));
	}

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<form className="timer-form" onSubmit={handleForm}>
			<div className="title">На сколько секунд поставить таймер?</div>
			<input ref={inputRef} value={value} onChange={handleChange} />
			<button className="button start">Запустить таймер</button>
		</form>

	)
};

export { TimerForm };