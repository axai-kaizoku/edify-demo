'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@/lib/utils';
import Image from 'next/image';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn('border-b pb-4', className)}
		{...props}
	/>
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				ref={ref}
				className={cn(
					'flex flex-1 text-left items-center justify-between py-4 font-medium transition-all',
					className,
				)}
				onClick={handleToggle}
				{...props}>
				{children}
				<div className="transition-transform duration-500">
					{isOpen ? (
						<Image
							width={24}
							height={24}
							src="/assets/minus-circle.svg"
							alt="minus-circle"
							className="w-3 h-3 sm:w-6 sm:h-6"
						/>
					) : (
						<Image
							width={24}
							height={24}
							src="/assets/plus-circle.svg"
							alt="plus-circle"
							className="w-3 h-3 sm:w-6 sm:h-6"
						/>
					)}
				</div>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
		{...props}>
		<div className={cn('pb-4 pt-0', className)}>
			<div className={cn('mb-3', className)}></div>
			{children}
		</div>
	</AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
