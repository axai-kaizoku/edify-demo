import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQCardProps } from '@/types';

export default function FAQCard({ title, description }: FAQCardProps) {
	return (
		<>
			<Accordion
				type="single"
				collapsible
				className="w-full   rounded-2xl px-5 bg-opacity-80">
				<AccordionItem value="item-1">
					<AccordionTrigger className="font-manuale text-sm sm:text-2xl font-semibold">
						{title}
					</AccordionTrigger>
					<AccordionContent className="max-w-6xl text-slate-500 font-graphik text-xs sm:text-xl font-light">
						{description}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	);
}
