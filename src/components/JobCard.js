import React from 'react';
import { Link } from "react-router-dom";

import './JobCard.css';

const JobCard = ({ job }) => {

  	const formatDate = (string) => {
    	var options = { year: 'numeric', month: 'long', day: 'numeric' };
    	return new Date(string).toLocaleDateString([],options);
	}

	return (
		<div>
			<Link to={'/job'} style={{ textDecoration: 'none' }}>
				<div className="row job">
					<div className="col-12">
						<div className="card mb-2 text-dark">
						  	<div className="card-body">
						    	<h6 className="card-subtitle mb-2 text-muted">{ job.company_name }</h6>
						    	<h5 className="card-title">{ job.title }</h5>
						    	<h6 className="card-text">{ formatDate(job.publication_date) }</h6>
						    	<p className="card-link">More<i className="fas fa-chevron-right ml-1"></i></p>
						  	</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default JobCard;