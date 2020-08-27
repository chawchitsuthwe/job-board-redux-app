import React from 'react';

import './Home.css';

let Home = () => {

	return (
		<div className="container text-center">
			{/*intro*/}
			<section>
				<div className="jumbotron">
					<h1>Hello</h1>
					<p className="sologan">The home of your dream job</p>
					<p className="introtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

					<form className="mt-2">
						<div className="form-row">
							<div className="col-md-10">
								<input className="form-control mb-1" type="text" placeholder="job,tag,category" />
							</div>
							<div className="col-md-2">
								<button className="btn gradient mb-1">Find Job</button>
							</div>
						</div>
					</form>
				</div>
			</section>

			{/*recent jobs*/}
			<section>
				<h2 className="text-center">Recent Offering Jobs</h2>
			</section>

			{/*categories*/}
			<section id="categories">
				<h2 className="text-center">Find Jobs By Category</h2>
			</section>
		</div>
	)
}

export default Home;