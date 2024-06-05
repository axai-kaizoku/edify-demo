import CustomHeading from '@/components/common/CustomHeading';
import CustomNewForm from './_components/CustomNewForm';

export default function RequiredFormPage() {
	return (
		<div className="flex w-full justify-center items-center ">
			<div className="w-4/5 flex-col">
				<CustomHeading
					heading="Required Form Page"
					styles="text-center py-16"
				/>
				<div className="w-full flex justify-center">
					<CustomNewForm />
				</div>
			</div>
		</div>
	);
}
