import React from 'react';
import { Link } from "react-router-dom";

import './JobCard.css';

const JobCard = () => {
	return (
		<div>
			<Link to={'/job'}>
			
				<div className="col-md-4" style={{float: "left"}}>
					<div className="card mb-2 text-dark">
					  	<div className="card-body">
					    	<h6 className="card-subtitle mb-2 text-muted">Company</h6>
					    	<h5 className="card-title">Job Title</h5>
					    	<h6 className="card-text">April 2, 2020</h6>
					    	<p className="card-link">More<i className="fas fa-chevron-right ml-1"></i></p>
					  	</div>
					</div>
				</div>
			
			</Link>
		</div>
	)
}

export default JobCard;