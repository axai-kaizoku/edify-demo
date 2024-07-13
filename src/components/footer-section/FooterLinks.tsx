import { FooterProps } from '@/types';

function FooterLinks({ title }: FooterProps) {
	return (
		<p className="font-medium leading-6 text-base gap-3 flex flex-col justify-center  font-graphik text-gray-600">
			{title}
		</p>
	);
}

export default FooterLinks;
