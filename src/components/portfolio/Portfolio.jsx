import React from 'react';
import cityGuide from '../../img/portfolio/city-guide-app.png';
import netflix from '../../img/portfolio/netflix.png';
import portfolio from '../../img/portfolio/portfolio.png';
import taskManager from '../../img/portfolio/task-manager.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
	return (
		<div className='portfolio-wrapper'>
			<div className='container'>
				<h1 className='text-uppercase text-center py-5'>portfolio</h1>
				<div className='image-box-wrapper row justify-content-center'>
					<div className='portfolio-image-box'>
						<img
							className='portfolio-image'
							src={netflix}
							alt='Netflix Clone Project'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='portfolio-icon'
							icon={faSearchPlus}
						/>
					</div>

					{/* - */}

					<div className='portfolio-image-box'>
						<img
							className='portfolio-image'
							src={cityGuide}
							alt='City Guide Project'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='portfolio-icon'
							icon={faSearchPlus}
						/>
					</div>

					{/* - */}

					<div className='portfolio-image-box'>
						<img
							className='portfolio-image'
							src={portfolio}
							alt='React and Material UI Project'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='portfolio-icon'
							icon={faSearchPlus}
						/>
					</div>

					{/* - */}

					<div className='portfolio-image-box'>
						<img
							className='portfolio-image'
							src={taskManager}
							alt='React and Redux Project'
						/>
						<div className='overflow'></div>
						<FontAwesomeIcon
							className='portfolio-icon'
							icon={faSearchPlus}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
