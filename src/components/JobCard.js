import React from 'react';
import { Link } from "react-router-dom";

import './JobCard.css';

const JobCard = ({ job, pb }) => {

	var style = pb ? "card-body pb-0" : "card-body";

  	const formatDate = (string) => {
    	var options = { year: 'numeric', month: 'long', day: 'numeric' };
    	return new Date(string).toLocaleDateString([],options);
	}

	return (
			<Link to={`/job/${job.id}`} style={{ textDecoration: 'none' }}>
				<div className="row">
					<div className="col-12">
						<div className="card mb-2 text-dark">
						  	<div className={style}>
						    	<h6 className="card-subtitle mb-2 text-muted">{ job.categories.location ? job.categories.location : "" }</h6>
						    	<h5 className="card-title">{ job.text }</h5>
						    	<h6 className="card-text">{ formatDate(job.createdAt) }</h6>
						    	<p className="card-link">More<i className="fas fa-chevron-right ml-1"></i></p>
						  	</div>
						</div>
					</div>
				</div>
			</Link>
	)
}

export default JobCard;