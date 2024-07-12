import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from 'react-compare-slider';

export default function ImageSliderComponent() {
	return (
		<div className="w-full">
			<ReactCompareSlider
				aria-label="React Compare Slider"
				itemOne={
					<ReactCompareSliderImage
						src="/assets/slider/slider-img-2.png"
						alt="Image one"
						className="rounded-xl"
						aria-label="React Compare Slider"
					/>
				}
				itemTwo={
					<ReactCompareSliderImage
						src="/assets/slider/slider-img-1.png"
						alt="Image two"
						className="rounded-xl"
						aria-label="React Compare Slider"
					/>
				}
			/>
		</div>
	);
}
