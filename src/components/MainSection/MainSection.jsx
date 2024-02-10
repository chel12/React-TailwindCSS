import React from 'react';

import { ReactComponent as mainImage } from '../../images/girl.jpg';
import { ReactComponent as logo1 } from '../../images/logo1.png';
import { ReactComponent as logo2 } from '../../images/logo2.png';
import { ReactComponent as logo3 } from '../../images/logo3.png';
import { ReactComponent as logo4 } from '../../images/logo4.png';
import Button from '../Button/Button';

const MainSection = () => {
	return (
		<section className="w-full flex mt-60">
			<div className="relative w-2/4 text-left mt-12">
				<h1 className="text-8xl font-black mt-6 whitespace-pre-line">
					{`Make\n remote work`}
				</h1>
				<p className="text-medium-gray text-lg my-12 whitespace-pre-line">
					{`Lorem ipsum dolor sit amet consectetur adipisicing elit.\n Quidem, eveniet tenetur autem voluptates placeat iste, id optio vitae eius quasi, nam error?\n Iusto veritatis aut placeat eligendi excepturi autem saepe!
`}
				</p>
				<Button isFilled>Learn more</Button>
			</div>
		</section>
	);
};

export default MainSection;
