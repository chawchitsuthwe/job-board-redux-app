import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchJobsBySearch} from '../actions/fetchJobs';

import SearchBox from './SearchBox';
import NoResult from './NoResult';
import JobCard from './JobCard';
import Loader from './Loader';

const Result = ({ match, pending, jobs, fetchJobs }) => {

	useEffect(() => {
		fetchJobs(match.params.keyword);
	}, [fetchJobs, match.params.keyword]);

	return (
		<div className="container text-center">
			<div className="row my-5">
				<div className="col-12">
					<SearchBox />
				</div>
			</div>
			{
          		pending ? <Loader /> :
          			jobs && jobs.length>0 ? (
    		    	
                    jobs.map(job => <JobCard key={job.id} job={job} pb={false} />)
                  	
          			) : <NoResult keyword={match.params.keyword} />
       		}
		</div>
	)
}

const mapStateToProps = state => {
	return state.Jobs;
}

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchJobs: fetchJobsBySearch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Result);