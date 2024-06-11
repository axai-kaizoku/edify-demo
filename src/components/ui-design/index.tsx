import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from 'react-compare-slider';
export default function ImageSlider() {
	return (
		<>
			<div className="w-full flex justify-center items-center">
				<div className="w-4/5">
					<ReactCompareSlider
						itemOne={
							<ReactCompareSliderImage
								src="https://utfs.io/f/119f891a-3a8a-48fa-9be9-ab9366e23355-xuif36.jpg"
								alt="Image one"
							/>
						}
						itemTwo={
							<ReactCompareSliderImage
								src="https://utfs.io/f/eec40c30-41d1-4ace-b3ed-1c9bf5afe3b0-xuif3b.jpg"
								alt="Image two"
							/>
						}
					/>
				</div>
			</div>
		</>
	);
}
