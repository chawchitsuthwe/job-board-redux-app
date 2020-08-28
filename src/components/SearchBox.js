import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

const SearchBox = () => {

	const [search, setSearch] = useState("");

	const history = useHistory();

	const serchOnSubmit = (e) => {
		e.preventDefault();
		history.push(`/result/${search}`);
	}

	return (
		<div>
			<form className="mt-2 mb-1" onSubmit={serchOnSubmit}>
				<div className="form-row">
					<div className="col-md-10 mb-1">
						<input className="form-control" type="text" placeholder="search by job" 
						value={search} 
				      	onChange={e => setSearch(e.target.value)}
				      		/>
					</div>
					<div className="col-md-2">
						<button className="btn gradient">Find Job</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default SearchBox