import React from 'react';

import SearchBox from './SearchBox';
import NoResult from './NoResult';

const Result = () => {
	return (
		<div className="container">
			<div className="row my-5">
				<div className="col-12">
					<SearchBox />
				</div>
			</div>
			<NoResult />
		</div>
	)
}

export default Result