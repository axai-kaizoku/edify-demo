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
				className="w-full rounded-2xl bg-opacity-80">
				<AccordionItem value="item-1">
					<AccordionTrigger className="font-manuale text-sm sm:text-[1.3rem] text-slate-900 font-semibold pt-2 sm:pt-7">
						{title}
					</AccordionTrigger>
					<AccordionContent className="w-full text-slate-600 lg:leading-relaxed font-graphik text-xs sm:text-sm lg:text-[0.8rem]  font-light">
						{description}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</>
	);
}
