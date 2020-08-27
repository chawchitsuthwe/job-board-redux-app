import React from 'react';

import './JobCard.css';

const JobCard = () => {
	return (
		<div className="col-md-4" style={{float: "left"}}>
			<div class="card mb-2 text-dark">
			  	<div class="card-body">
			    	<h6 class="card-subtitle mb-2 text-muted">Company</h6>
			    	<h5 class="card-title">Job Title</h5>
			    	<h6 class="card-text">April 2, 2020</h6>
			    	<p class="card-link">More<i className="fas fa-chevron-right ml-1"></i></p>
			  	</div>
			</div>
		</div>
	)
}

export default JobCard;