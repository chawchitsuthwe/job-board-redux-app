import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { useLocation } from 'react-router-dom'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {fetchAllJobs} from '../actions/fetchJobs';

import './SearchBox.css';
import Loader from './Loader';

const SearchBox = ({ pending, alljobs, fetchJobs }) => {

	const [locationInput, setLocationInput] = useState("undefined");
	const [departmentInput, setDepartmentInput] = useState("undefined");
	const [teamInput, setTeamInput] = useState("undefined");
	const [workTypeInput, setWorkTypeInput] = useState("undefined");

	const history = useHistory();
	let path = useLocation();

	useEffect(() => {
		fetchJobs();
	}, [fetchJobs]);


	const serchOnSubmit = (e) => {
		e.preventDefault();

		var paramString = "";

		if(locationInput!=="Location" && locationInput!=="undefined"){
			paramString += `location=${locationInput}&`;
		}
		if(departmentInput!=="Department" && departmentInput!=="undefined"){
			paramString += `department=${departmentInput}&`;
		}
		if(teamInput!=="Team" && teamInput!=="undefined"){
			paramString += `team=${teamInput}&`;
		}
		if(workTypeInput!=="Work Type" && workTypeInput!=="undefined"){
			paramString += `commitment=${workTypeInput}&`;
		}

		paramString ? history.push(`/result/${paramString}`) : history.push(path.pathname);
	}

	let _ = require('underscore');
	const location = _.keys(_.countBy(alljobs, function(alljobs) { return alljobs.categories.location; }));
	const department = _.keys(_.countBy(alljobs, function(alljobs) { return alljobs.categories.department; }));
	const team = _.keys(_.countBy(alljobs, function(alljobs) { return alljobs.categories.team; }));
	const workType = _.keys(_.countBy(alljobs, function(alljobs) { return alljobs.categories.commitment; }));

	return (
		pending ? <Loader /> : (

		<div>
			<form className="mt-2 mb-1" onSubmit={serchOnSubmit}>
				<div className="form-row justify-content-center  align-items-center">
			      	<div className="col-auto">
			      		<div className="input-group mb-1">
							<select onChange={ e => setLocationInput(e.target.value) } className="custom-select" id="locationInput">
								<option defaultValue="Location" >Location</option>
								{
									location && location.map(loc=>
										<option value={loc} key={loc}>{loc}</option>)
								}
							</select>
						</div>
			      	</div>
			      	<div className="col-auto">
			      		<div className="input-group mb-1">
							<select onChange={ e => setDepartmentInput(e.target.value) } className="custom-select" id="deptInput">
								<option defaultValue="Department" >Department</option>
								{
									department && department.map(dept=>
										<option value={dept} key={dept}>{dept}</option>)
								}
							</select>
						</div>
			      	</div>
					<div className="col-auto">
			      		<div className="input-group mb-1">
							<select onChange={ e => setTeamInput(e.target.value) } className="custom-select" id="teamInput">
								<option defaultValue="Team" >Team</option>
								{
									team && team.map(t=>
										<option value={t} key={t}>{t}</option>)
								}
							</select>
						</div>
			      	</div>
					<div className="col-auto">
			      		<div className="input-group mb-1">
							<select onChange={ e => setWorkTypeInput(e.target.value) } className="custom-select" id="workTypeInput">
								<option defaultValue="Work Type" >Work Type</option>
								{
									workType && workType.map(wt=>
										<option value={wt} key={wt}>{wt}</option>)
								}
							</select>
						</div>
			      	</div>
			      	<div className="col-auto">
						<button className="btn gradient float-left">Find Job</button>	
					</div>
				</div>
			</form>
		</div>
		)
	)
}

const mapStateToProps = state => {
	return state.AllJobs;
}

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchJobs: fetchAllJobs
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);