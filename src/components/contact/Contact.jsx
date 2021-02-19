import React from 'react';

export default function Contact() {
   return (
		<div id='contacts' className='contacts'>
			<div className='text-center'>
				<h1>contact me</h1>
				<p>
					Fill out the form, briefly describe your project, and I will
					contact you as soon as possible.
				</p>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 col-xs-12'>
						<div className='text-center'>
							<input
								className='form-control'
								type='text'
								placeholder='First and last name'
								name='name'
							/>
							<div className='line'></div>
						</div>

						<div className='text-center'>
							<input
								className='form-control'
								type='text'
								placeholder='Phone number'
								name='phone'
							/>
							<div className='line'></div>
						</div>

						<div className='text-center'>
							<input
								className='form-control'
								type='email'
								placeholder='Email'
								name='email'
							/>
							<div className='line'></div>
						</div>

						<div className='text-center'>
							<input
								className='form-control'
								type='text'
								placeholder='Subject'
								name='subject'
							/>
							<div className='line'></div>
						</div>
					</div>

					<div className='col-md-6 col-xs-12'>
						<div className='text-center'>
							<textarea
								className='form-control'
								type='text'
								placeholder='Brief Message'
								name='description'
							></textarea>
							<div className='line'></div>
						</div>

						<button className='btn-main-offer contact-btn' type='submit'>
							send message
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
