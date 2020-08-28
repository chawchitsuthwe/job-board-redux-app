import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchJobs from '../actions/fetchJobs';

import JobCard from './JobCard';
import Loader from './Loader';

const JobSlider = ({pending, jobs, fetchJobs}) => {

	useEffect(() => {
		fetchJobs("limit");
	}, [fetchJobs]);

	return (
		<div>
		{ pending ? <Loader /> : 
			jobs && jobs.map( job =>
	    		<JobCard key={job.id} job={job} />	
		)}
		</div>
	)
}


const mapStateToProps = state => {
	return state.Job;
}

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchJobs: fetchJobs
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(JobSlider);