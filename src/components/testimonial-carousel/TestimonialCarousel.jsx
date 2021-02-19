import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import testimonial_1 from '../../img/testimonials/testimonial-1.jpg';
import testimonial_2 from '../../img/testimonials/testimonial-2.jpg';
import testimonial_3 from '../../img/testimonials/testimonial-3.jpg';
import testimonial_4 from '../../img/testimonials/testimonial-4.jpg';

export default function TestimonialCarousel() {
   return (
		<Carousel
			showArrows={true}
			infiniteLoop={true}
			showThumbs={false}
			showStatus={false}
			autoPlay={true}
			interval={3000}
		>
			<>
				<img src={testimonial_1} alt='Male Testimonial 1' />
				<div className='myCarousel'>
					<h3>Aaron Cuppari</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Debitis ratione sequi saepe dicta blanditiis, molestias eum
						excepturi quod fugiat veniam!
					</p>
				</div>
			</>
			<>
				<img src={testimonial_2} alt='Female Testimonial 2' />
				<div className='myCarousel'>
					<h3>Laura Spurrier</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Debitis ratione sequi saepe dicta blanditiis, molestias eum
						excepturi quod fugiat veniam!
					</p>
				</div>
			</>
			<>
				<img src={testimonial_3} alt='Male Testimonial 3' />
				<div className='myCarousel'>
					<h3>Darryl Romaine</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Debitis ratione sequi saepe dicta blanditiis, molestias eum
						excepturi quod fugiat veniam!
					</p>
				</div>
			</>
			<>
				<img src={testimonial_4} alt='Female Testimonial 4' />
				<div className='myCarousel'>
					<h3>Kaitlyn Devney</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Debitis ratione sequi saepe dicta blanditiis, molestias eum
						excepturi quod fugiat veniam!
					</p>
				</div>
			</>
		</Carousel>
	);
};
