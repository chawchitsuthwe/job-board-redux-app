import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchLimitJobs} from '../actions/fetchJobs';

import JobCard from './JobCard';
import Loader from './Loader';

const JobSlider = ({pending, jobs, fetchJobs}) => {

	useEffect(() => {
		fetchJobs();
	}, [fetchJobs]);

	return (
		<div>
		{ pending ? <Loader /> : 
			jobs && jobs.length && jobs.length>0 && jobs.map( job =>
	    		<JobCard key={job.id} job={job} pb={true} />	
		)}
		</div>
	)
}


const mapStateToProps = state => {
	return state.Jobs;
}

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchJobs: fetchLimitJobs
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(JobSlider);