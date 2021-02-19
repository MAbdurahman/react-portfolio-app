import React from 'react';

export default function Contact() {
   return (
		<div id='contacts' className='contacts'>
			<div className='text-center'>
				<h1>contact me</h1>
				<p>
					Fill out the form, describe your project needs, and I will
					contact you as soon as possible.
				</p>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6 col-xs-12'>
						<input
							className='form-control'
							type='text'
							placeholder='First and last name'
							name='name'
						/>

						<input
							className='form-control'
							type='text'
							placeholder='Phone number'
							name='phone'
						/>

						<input
							className='form-control'
							type='email'
							placeholder='First and last name'
							name='email'
						/>

						<input
							className='form-control'
							type='text'
							placeholder='Subject'
							name='subject'
						/>
					</div>
					<div className='col-md-6 col-xs-12'>
						<textarea
							className='form-control'
							type='text'
							placeholder='Message'
							name='description'
						></textarea>
						<button className='btn-main-offer contact-btn' type='submit'>
							send message
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
