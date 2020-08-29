import React from 'react';
import { Link } from "react-router-dom";

import './Home.css';
import SearchBox from './SearchBox';
import JobSlider from './JobSlider';
import CategoryCard from './CategoryCard';

const Home = () => {

	const categories = ["Contract", "Contract - Remote", "Freelance", "Full Time", "Internship", "Part Time",
					"Regular Full Time (Salary)", "Student" ];

	return (
		<div className="text-center">
				<section className="container">
					<div className="jumbotron mx-5">
						<h1>Hello</h1>
						<p className="sologan">The home of your dream job</p>
						<p className="introtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
						sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

						<SearchBox />
					</div>
				</section>

				<section>
					<div className="curved-div upper">
						<svg viewBox="0 0 1440 225">
							<path fill="#C779D0" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
						</svg>
					</div>  
					<div className="curved-div">
						<div className="container">
							<h2 className="text-white text-center mt-3 mb-5">Recent Offering Jobs</h2>
							<JobSlider />
							<a href="/result/all"><button className="btn gradient mt-2">See All</button></a>
						</div>
						<svg viewBox="0 0 1440 225">
							<path fill="#fff" fillOpacity="1" d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,90.7C672,53,768,75,864,96C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
						</svg>
					</div>
				</section>
				<section id="categories" className="mb-3">
					<h2 className="text-center my-5">Find Jobs By Category</h2>
					<div className="container">
						<div className="d-flex justify-content-center flex-wrap">
							{ categories && categories.map( (category, index) => 
								<Link key={index} to={`/result/ca:${category}`}>
									<CategoryCard key={index} category={category}/>
								</Link> 
							)}
						</div>
					</div>
				</section>
		</div>
	)
}

export default Home;