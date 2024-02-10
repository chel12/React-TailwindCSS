import React from 'react';

import MainImage from '../../images/girl.jpg';
import { ReactComponent as Logo1 } from '../../images/1.svg';
import { ReactComponent as Logo2 } from '../../images/2.svg';
import { ReactComponent as Logo3 } from '../../images/3.svg';
import { ReactComponent as Logo4 } from '../../images/4.svg';
import Button from '../Button/Button';

const MainSection = () => {
	return (
		<section className="w-full flex mt-60 h-screen justify-between">
			<div className="relative w-2/4 text-left mt-12">
				<h1 className="text-8xl font-black mt-6 whitespace-pre-line">
					{`Make\n remote work`}
				</h1>
				<p className="text-medium-gray text-lg my-12 whitespace-pre-line">
					{`Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Quidem, eveniet tenetur autem voluptates placeat iste, id optio vitae eius quasi, nam error?\n Iusto veritatis aut placeat eligendi excepturi autem saepe!
`}
				</p>
				<Button isFilled>Learn more</Button>
				<div className="flex justify-around absolute bottom-2 w-full">
					<Logo1 className="w-16"></Logo1>
					<Logo2 className="w-16"></Logo2>
					<Logo3 className="w-16"></Logo3>
					<Logo4 className="w-16"></Logo4>
				</div>
			</div>
			<div className="flex w-2/4 mt-20">
				<img className="object-contain" src={MainImage} alt="main" />
			</div>
		</section>
	);
};

export default MainSection;
