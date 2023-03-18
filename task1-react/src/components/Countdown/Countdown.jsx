import { useCallback, useEffect, useRef, useState } from 'react';
import moment from 'moment';

const calculateDuration = (eventTime) =>
	moment.duration(eventTime, 'seconds');

const Countdown = ({ eventLastTime, interval = 1000, init }) => {
	const [lastTime, setLastTime] = useState(eventLastTime);
	const timerRef = useRef(0);

	const timerCallback = useCallback(() => {
		setLastTime(prev => prev - interval / 1000);
	}, [interval]);

	const stopCountdown = useCallback(() => {
		clearInterval(timerRef.current);
		init(0);
	}, [init]);


	useEffect(() => {
		timerRef.current = setInterval(timerCallback, interval);

		return () => {
			clearInterval(timerRef.current);
		};
	}, [timerCallback, interval]);

	useEffect(() => {
		if (lastTime <= 0) {
			clearInterval(timerRef.current);

			setTimeout(() => {
				stopCountdown();
			}, 3000);

		}
	}, [lastTime, stopCountdown]);

	const duration = calculateDuration(lastTime);

	return (
		<div className='countdown-container'>
			<div className='countdown'>
				{duration.hours() < 10 ? '0' + duration.hours().toString() : duration.hours()}:
				{duration.minutes() < 10 ? '0' + duration.minutes().toString() : duration.minutes()}:
				{duration.seconds() < 10 ? '0' + duration.seconds().toString() : duration.seconds()}
			</div>

			<button className='button stop' onClick={stopCountdown}>Остановить таймер</button>

		</div>
	);
};

export { Countdown };