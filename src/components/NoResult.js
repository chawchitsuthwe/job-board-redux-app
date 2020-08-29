import React from 'react';

const NoResult = ({ keyword }) => {
	return (
		<div className="align-middle mb-5">
			<h1>Nothing Found</h1>
			<p>Sorry, but nothing matched your search of <strong>{ keyword.substring(3) }</strong>. <br />
				Please try again with some different keywords.</p>
	
		</div>
	)
}

export default NoResult