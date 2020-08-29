import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchJobs from '../actions/fetchJobs';

import './JobDetail.css';
import Loader from './Loader';

const JobDetail = ({ match, pending, jobs, fetchJobs }) => {


	useEffect(() => {
		fetchJobs(`id:${match.params.id}`);
	}, [match.params.id, fetchJobs]);

	return (
	<div>
	{ pending ? (<div className="text-center my-5"><Loader/></div>) : (
		<div className="container mb-2">
			<div className="card detail-card">
				<div className="row">
					<div className="col-12">
						<h1>{ jobs.text }</h1>
						{
							jobs.categories && 
							( jobs.categories.location &&
								<h4>{jobs.categories.location} </h4>
							)
						}
						<h6 className="text-dark">Published Date - { jobs.created_At}</h6>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-12">
						<p>
						{
							jobs.categories && 
							( jobs.categories.commitment &&
								<span>Commitment - {jobs.categories.commitment} <br/></span>
							)
						}
						{
							jobs.categories && 
							( jobs.categories.department &&
								<span>Department - {jobs.categories.department} <br/> </span>
							)
						}
						{
							jobs.categories && 
							( jobs.categories.team &&
								<span>Team - {jobs.categories.team} </span>
							)
						}
						</p>
					</div>
				</div>
				{
					jobs.lists && jobs.lists.map( (list, index) => (
						<div className="row mt-3" key={index}>
							<div className="col-12">
								<h4>{ list.text }</h4>
								<p className="pl-4" dangerouslySetInnerHTML={{ __html: list.content }} />
							</div>
						</div>
						))
				}
				<div className="row mt-3 content">
					<div className="col-lg-4 col-md-2 col-sm-12"></div>
					<div className="col-lg-8 col-md-10 col-sm-12">
						<p>{ jobs.descriptionPlain }</p>
					</div>
				</div>
			</div>
		</div>
	)}
	</div>
	)
}

const mapStateToProps = state => {
	return state.Jobs;
}

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchJobs: fetchJobs
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);