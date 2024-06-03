import Image from 'next/image';
import React from 'react';
import LogoComponentCard from './LogoComponentCard';

const LogoComponent = () => {
	return (
		<>
			<div className="py-16 items-center justify-around hidden sm:flex">
				<LogoComponentCard
					src={'/assets/hp_icon.jpeg.png'}
					alt="HP"
					width={60}
					height={60}
				/>
				<LogoComponentCard
					src={'/assets/apple.svg'}
					alt="Apple"
					width={50}
					height={60}
				/>
				<LogoComponentCard
					src={'/assets/Lenovo.png'}
					alt="Lenovo"
					width={150}
					height={50}
				/>
				<LogoComponentCard
					src={'/assets/Dell.png'}
					alt="Dell"
					width={130}
					height={40}
				/>
			</div>
			<div className="py-12 items-center justify-around sm:hidden flex">
				<LogoComponentCard
					src={'/assets/hp_icon.jpeg.png'}
					alt="HP"
					width={30}
					height={30}
				/>
				<LogoComponentCard
					src={'/assets/apple.svg'}
					alt="Apple"
					width={25}
					height={30}
				/>
				<LogoComponentCard
					src={'/assets/Lenovo.png'}
					alt="Lenovo"
					width={80}
					height={25}
				/>

				<LogoComponentCard
					src={'/assets/Dell.png'}
					alt="Dell"
					width={30}
					height={30}
				/>
			</div>
		</>
	);
};

export default LogoComponent;
