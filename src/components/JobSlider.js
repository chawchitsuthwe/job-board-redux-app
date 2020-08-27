import React from 'react';

import './JobSlider.css';
import JobCard from './JobCard';

const JobSlider = () => {

	return (
		<div>
			<div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">

				<div className="controls-top">
					<a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left"></i></a>
					<a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right"></i></a>
				</div>

			  	<div className="carousel-inner mt-4" role="listbox">

	    			<div className="carousel-item active">
	    				<JobCard />
	    				<JobCard />
	    				<JobCard />
	    			</div>
	    			<div className="carousel-item">
	    				<JobCard />
	    				<JobCard />
	    				<JobCard />
	    			</div>
    			</div>
    		</div>

		</div>
	)
}

export default JobSlider;