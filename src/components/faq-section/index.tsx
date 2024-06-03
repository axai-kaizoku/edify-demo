import { frequentlyAskedQuestions } from '@/constants';
import CustomHeading from '../common/CustomHeading';
import FAQCard from './FAQCard';

export default function FAQSection() {
	return (
		<>
			<div className="w-full flex justify-center py-1 sm:py-6 items-center">
				<div className="w-[87%] sm:w-4/5  flex flex-col">
					<CustomHeading
						heading="Frequently Asked Questions"
						styles=" py-8 sm:py-14"
					/>
					<div className="w-full flex justify-center flex-col gap-4">
						{frequentlyAskedQuestions.map((question, i) => (
							<FAQCard
								title={question.question}
								description={question.answer}
								key={i}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
