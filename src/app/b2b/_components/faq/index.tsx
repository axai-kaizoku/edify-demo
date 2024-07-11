import CustomHeading from '@/components/common/CustomHeading';
import FAQCard from '@/components/faq-section/FAQCard';
import { frequentlyAskedQuestions } from '@/constants';
import React from 'react';

export default function FAQ() {
	return (
		<>
			<CustomHeading
				heading="Frequently Asked Questions"
				styles="py-8 sm:py-14"
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
		</>
	);
}
