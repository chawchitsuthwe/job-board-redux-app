import React from 'react';

import './JobDetail.css';

const JobDetail = () => {

	return (
		<div className="container mb-2">
			<div className="card detail-card">
				<div className="row">
					<div className="col-12">
						<h1>Job Title</h1>
						<h4>Company Name</h4>
						<h6 className="text-dark">Published Date - April 2, 2020</h6>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-12">
						<p>
							Job Type - <br />
							Salary - <br/>
							Category - <br/>
						</p>
					</div>
				</div>
				<div className="row mt-3 content">
					<div className="col-lg-4 col-md-2 col-sm-12"></div>
					<div className="col-lg-8 col-md-10 col-sm-12">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default JobDetail;