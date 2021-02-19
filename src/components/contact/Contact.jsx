import React from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {

	const serviceID = 'service_id';
	const templateID = 'template_default';
	const userID = 'user_YzQBSK3b0qdtzccL3lnIQ';

function sendEmail(e) {
	e.preventDefault();

	emailjs.sendForm(serviceID, templateID, e.target, userID).then(
		result => {
			console.log(result.text);
		},
		error => {
			console.log(error.text);
		}
	);
}

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
				<form onSubmit={handleSubmit(onSubmit)}>
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

							<button
								className='btn-main-offer contact-btn'
								type='submit'
							>
								send message
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
