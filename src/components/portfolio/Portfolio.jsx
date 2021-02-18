import React from 'react';
import cityGuide from '../../img/portfolio/city-guide-app.png';
import netflix from '../../img/portfolio/netflix.png';
import portfolio from '../../img/portfolio/portfolio.png';
import taskManager from '../../img/portfolio/task-manager.png';

export default function Portfolio() {
   return (
		<div className='portfolio-wrapper'>
			<div className='container'>
				<h1 className='text-uppercase text-center py-5'>portfolio</h1>
				<div className='image-box-wrapper row justify-content-center'>
					<img
						className='portfolio-image'
						src={netflix}
						alt='Netflix Clone Project'
					/>
				</div>
				{/* - */}
				<div className='image-box-wrapper row justify-content-center'>
					<img
						className='portfolio-image'
						src={cityGuide}
						alt='City Guide Project'
					/>
				</div>
				{/* - */}
				<div className='image-box-wrapper row justify-content-center'>
					<img
						className='portfolio-image'
						src={portfolio}
						alt='React and Material UI Project'
					/>
				</div>
				{/* - */}
				<div className='image-box-wrapper row justify-content-center'>
					<img
						className='portfolio-image'
						src={taskManager}
						alt='React and Redux Project'
					/>
				</div>
			</div>
		</div>
	);
};
