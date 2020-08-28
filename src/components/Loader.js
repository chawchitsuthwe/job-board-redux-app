import React from 'react';

const Loader = () => {
	return (
		<div>
			<div className="spinner-border text-warning my-5" role="status">
		        <span className="sr-only">Loading...</span>
		      </div>
		</div>
	)
}

export default Loader;