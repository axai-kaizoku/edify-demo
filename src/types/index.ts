export type FeatureCardProps = {
	logo: string;
	title: string;
	description: string;
};

export type EdifyRockeraCardProp = {
	videoLink: string;
	heading: string;
	subHeading: string;
};

export type LaptopCardProps = {
	src: string;
	title: string;
	description: string;
	href: string;
};

export type CustomButtonProps = {
	title: string;
	styles?: string;
};

export type CustomHeadingProps = {
	heading: string;
	styles?: string;
};

export type RatingStarCompProps = {
	rating: number;
};

export type BestSellerCardProps = {
	src: string;
	title: string;
	price: number;
	rating: number;
	reviews: number;
};

export type ReviewCardProps = {
	src: string;
	name: string;
	review: string;
	date: string;
};

export type FAQCardProps = {
	title: string;
	description: string;
};
export type SocialIconsProps = {
	src: string;
	href: string;
	alt: string;
};

export type FooterProps = {
	title: string;
	href?: string;
};

export type PrivacyPolicyInfoProps = {
	title: string;
	desc: string[];
	points?: string[];
	extraDesc?: string[];
}[];

export type TermsOfServicesProps = {
	title: string;
	desc?: string[];
	points?: string[];
	extraDesc?: string[];
	headingPlusPoints?: {
		title: string;
		desc: string[];
	}[];
	headingPlusPoints2?: {
		title?: string;
		desc?: string[];
	}[];
}[];

export type frequentlyAskedQuestionsProps = {
	question: string;
	answer: string;
}[];

export type AboutSectionProps = {
	src: string;
	title: string;
	description: string[];
	isImageFirst?: boolean;
};

export type LogoComponentCardProps = {
	src: string;
	alt: string;
	width: number;
	height: number;
};
