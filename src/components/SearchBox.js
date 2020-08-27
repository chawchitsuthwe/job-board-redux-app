import React from 'react'

const SearchBox = () => {
	return (
		<div>
			<form className="mt-2 mb-1">
				<div className="form-row">
					<div className="col-md-10">
						<input className="form-control" type="text" placeholder="job,tag,category" />
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