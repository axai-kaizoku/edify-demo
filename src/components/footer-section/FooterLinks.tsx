import { FooterProps } from '@/types';

function FooterLinks({ title }: FooterProps) {
	return (
		<h5 className="font-medium leading-6 text-lg gap-3 flex flex-col justify-center  font-graphik text-gray-500">
			{title}
		</h5>
	);
}

export default FooterLinks;
