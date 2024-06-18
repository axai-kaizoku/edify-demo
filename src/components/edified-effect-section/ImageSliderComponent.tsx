import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from 'react-compare-slider';

export default function ImageSliderComponent() {
	return (
		<div className="w-full">
			<ReactCompareSlider
				itemOne={
					<ReactCompareSliderImage
						src="/assets/slider-img-2.png"
						alt="Image one"
						className="rounded-xl"
					/>
				}
				itemTwo={
					<ReactCompareSliderImage
						src="/assets/slider-img-1.png"
						alt="Image two"
						className="rounded-xl"
					/>
				}
			/>
		</div>
	);
}
