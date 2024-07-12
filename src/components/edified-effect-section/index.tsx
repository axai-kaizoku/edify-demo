import Container from '../common/Container';
import CustomHeading from '../common/CustomHeading';
import ImageSliderComponent from './ImageSliderComponent';
import IncreasingNumbers from './IncreasingNumbers';

export default function EdifiedEffectSection() {
	return (
		<>
			<Container isBorder className="bg-white gap-10 sm:gap-14 pt-10 pb-16">
				<CustomHeading heading="The Edified Effect" />
				<ImageSliderComponent />
				<div className="flex sm:hidden py-0 flex-col gap-4">
					<IncreasingNumbers
						value="kWh"
						description="of energy saved"
						endNumber={525000}
					/>
					<div className="flex w-full justify-between">
						<IncreasingNumbers
							value="tons"
							description="of lesser CO2 Emission"
							endNumber={872.5}
						/>
						<IncreasingNumbers
							value="tons"
							description="of e-waste saved"
							endNumber={6.25}
						/>
					</div>
				</div>

				<div className="sm:flex hidden w-full md:gap-20 lg:gap-0 lg:justify-evenly items-center">
					<IncreasingNumbers
						value="tons"
						description="of e-waste saved from ending up in landfills"
						endNumber={6.25}
					/>
					<hr className="border border-slate-200 h-20 lg:block hidden" />
					<IncreasingNumbers
						value="kWh"
						description="of energy saved"
						endNumber={525000}
					/>
					<hr className="border border-slate-200 h-20 lg:block hidden" />
					<IncreasingNumbers
						value="tons"
						description="less CO2 Emission"
						endNumber={872.5}
					/>
				</div>
			</Container>
		</>
	);
}
