import CustomHeading from '@/components/common/CustomHeading';
import TabsDemo from './_components/CustomNewForm';

export default function RequiredFormPage() {
	return (
		<div className="flex w-full flex-col">
			<CustomHeading
				heading="Required Form Page"
				styles="text-center py-16"
			/>
			<TabsDemo />
		</div>
	);
}
