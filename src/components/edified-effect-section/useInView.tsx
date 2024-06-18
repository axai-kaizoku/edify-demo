'use client';
import { useEffect, useState, RefObject } from 'react';
const useInView = (ref: RefObject<HTMLElement>): boolean => {
	const [isInView, setIsInView] = useState<boolean>(false);
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsInView(entry.isIntersecting);
			},
			{ threshold: 0.1 },
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [ref]);
	return isInView;
};
export default useInView;
