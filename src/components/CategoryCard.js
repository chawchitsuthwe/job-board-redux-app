import React from 'react';

const CategoryCard = ({category, slug}) => {
	return (
		<div className="d-inline-flex m-1 m-md-2 m-lg-3 justify-content-center align-items-center card p-4">
			<h4 className="text-secondary">{ category.name }</h4>
		</div>
	)
}

export default CategoryCard