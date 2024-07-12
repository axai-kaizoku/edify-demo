'use client';
import { useRef } from 'react';
import useInView from './useInView';
import CountUp from 'react-countup';
import { IncreasingNumbersProps } from '@/types';

export default function IncreasingNumbers({
	endNumber,
	value,
	description,
}: IncreasingNumbersProps) {
	const numberRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(numberRef);

	const getDecimalPlaces = (num: number) => {
		const match = num.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
		if (!match) {
			return 0;
		}
		return Math.max(
			0,
			// Number of digits right of decimal point.
			(match[1] ? match[1].length : 0) -
				// Adjust for scientific notation.
				(match[2] ? +match[2] : 0),
		);
	};

	const decimalPlaces = getDecimalPlaces(endNumber);
	return (
		<div className="flex flex-col w-full lg:w-1/5 gap-3 lg:items-center">
			<div
				ref={numberRef}
				className="text-[1.7rem] sm:text-5xl text-[#98C23B] sm:text-[#267C46] font-bold font-manuale  lg:text-center">
				{isInView && (
					<CountUp
						start={0}
						decimals={decimalPlaces}
						separator=","
						decimal="."
						end={endNumber}
						duration={2}
					/>
				)}
				<span className="text-[#98C23B] sm:text-[#267C46] sm:text-xl text-[0.8rem] pl-1 sm:pl-2 lg:pl-4">
					{value}
				</span>
			</div>
			<div className="text-slate-600 w-full text-[0.77rem] sm:text-base lg:text-center">
				{description}
			</div>
		</div>
	);
}
