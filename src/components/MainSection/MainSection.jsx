import React from 'react';

import MainImage from '../../images/girl.jpg';
import MainImageMobile from '../../images/girlMob.jpg';
import { ReactComponent as Logo1 } from '../../images/1.svg';
import { ReactComponent as Logo2 } from '../../images/2.svg';
import { ReactComponent as Logo3 } from '../../images/3.svg';
import { ReactComponent as Logo4 } from '../../images/4.svg';
import Button from '../Button/Button';

const MainSection = () => {
	return (
		<section className="w-full flex-col xl:flex-row flex mt-6 xl:h-screen justify-between">
			<div className="relative order-2 xl:order-1 text-center xl:text-left mt-12 xl:mt-30">
				<h1 className="text-3xl xl:text-8xl font-black  xl:whitespace-pre-line mt-6">
					{`Make\n remote work`}
				</h1>
				<p className="text-medium-gray text-lg my-12 whitespace-pre-line">
					{`Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Quidem, eveniet tenetur autem voluptates placeat iste, id optio vitae eius quasi, nam error?\n Iusto veritatis aut placeat eligendi excepturi autem saepe!
`}
				</p>
				<Button isFilled>Learn more</Button>
				<div className="flex justify-around xl:absolute bottom-2 w-full mt-20">
					<Logo2 className=" w-8 xl:w-16"></Logo2>
					<Logo1 className=" w-8 xl:w-16"></Logo1>
					<Logo3 className=" w-8 xl:w-16"></Logo3>
					<Logo4 className=" w-8 xl:w-16"></Logo4>
				</div>
			</div>
			<div className="hidden xl:flex w-2/4 mt-20 xl:order-2">
				<img className="object-contain" src={MainImage} alt="main" />
			</div>
			<div className="flex xl:hidden w-full justify-center mb-8 order-1">
				<img
					className="object-contain"
					src={MainImageMobile}
					alt="main"
				/>
			</div>
		</section>
	);
};

export default MainSection;
