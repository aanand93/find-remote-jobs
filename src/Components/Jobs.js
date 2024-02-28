import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css';

const Jobs = () => {
	const [jobs, setJobs] = useState([]);
	const url =
		'https://jobicy.com/api/v2/remote-jobs?count=50&geo=usa&tag=software+engineer';

	/*
    API Query Parameters (optional)

    count - Number of listings to return (default: 50, range: 1-50)
    geo - Filter by job region (default: all regions)
    industry - Filter by job category (default: all categories)
    tag - Search by job title and description (default: all jobs)

    Eg: https://jobicy.com/api/v2/remote-jobs?count=20&geo=usa&industry=marketing&tag=seo
        
    */

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw new Error('Network response was not ok');
				}
				return res.json();
			})
			.then((data) => {
				setJobs(data.jobs); // Update state with fetched data
				console.log(jobs); // show data in console
			})
			.catch((error) => {
				console.error('There was a problem with the fetch operation:', error);
			});
	}, [url]); // Empty dependency array to run the effect only once on component mount

	return (
		<div>
			<h2>Remote Jobs</h2>
			<div className='container'>
				{jobs.map((job) => (
					<div className='card' key={job.id}>
						<div className='card-image'>
							<img src={job.companyLogo} alt={job.id} />
						</div>
						{/* Render job details here */}
						<h3>{job.jobTitle}</h3>
						<p>Company: {job.companyName}</p>
						<p>Job Type: {job.jobType}</p>
						<a href={job.url}>Apply Here</a>
						<div className='description-container'>
							<div className='job-description'>
								<h5>Job Description</h5>
								<p>{job.jobExcerpt}</p>
							</div>
						</div>
						{/* Additional job details can be rendered here */}
					</div>
				))}
			</div>
		</div>
	);
};

export default Jobs;
