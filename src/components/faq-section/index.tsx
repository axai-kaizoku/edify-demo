import { frequentlyAskedQuestions } from '@/constants';
import CustomHeading from '../common/CustomHeading';
import FAQCard from './FAQCard';
import Container from '../common/Container';

export default function FAQSection() {
	return (
		<>
			<Container isBorder className="pb-0 sm:pb-24">
				<CustomHeading
					heading="Frequently Asked Questions"
					styles="py-8 sm:py-14"
				/>
				<div className="w-full flex justify-center flex-col gap-2 sm:gap-4">
					{frequentlyAskedQuestions.map((question, i) => (
						<FAQCard
							title={question.question}
							description={question.answer}
							key={i}
						/>
					))}
				</div>
			</Container>
		</>
	);
}
