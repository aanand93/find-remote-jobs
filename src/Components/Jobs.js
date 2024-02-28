import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css';

const Jobs = () => {
	const [jobs, setJobs] = useState([]);
	const url =
		'https://jobicy.com/api/v2/remote-jobs?count=50&geo=usa&tag=javascript';

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
				console.log(data.jobs); // Show data in console
			})
			.catch((error) => {
				console.error('There was a problem with the fetch operation:', error);
			});
	}, [url]); // Empty dependency array to run the effect only once on component mount

	// onClick method for apply now button
	const handleApplyButtonClick = (jobUrl) => {
		window.open(jobUrl, '_blank'); // Open job URL in a new tab
	};

	// Format the date
	const formatPubDate = (pubDate) => {
		// Create a new Date object from the provided date string
		const date = new Date(pubDate);

		// Check if the date is valid
		if (!isNaN(date.getTime())) {
			// Format the date as "Month Day, Year"
			const month = date.toLocaleString('default', { month: 'short' }); // Get month abbreviation
			const day = date.getDate(); // Get day of the month
			const year = date.getFullYear(); // Get year
			return `${month} ${day}, ${year}`;
		} else {
			return 'Invalid Date';
		}
	};

	return (
		<div>
			<h2>Remote Jobs</h2>
			<div className='container'>
				{/* Each indivual card mapped via each job */}
				{jobs.map((job) => (
					<div className='card' key={job.id}>
						<div className='card-image'>
							<img src={job.companyLogo} alt={job.id} />
						</div>
						{/* Job Title */}
						<h3 className='job-title'>{job.jobTitle}</h3>
						{/* Company Name */}
						<p className='company-name'>{job.companyName}</p>
						{/* Job Type */}
						<p className='job-type'>Job Type: {job.jobType}</p>
						{/* Salary */}
						<p className='salary'>
							{job.annualSalaryMin && job.annualSalaryMax
								? `$${parseInt(
										job.annualSalaryMin
								  ).toLocaleString()} - $${parseInt(
										job.annualSalaryMax
								  ).toLocaleString()}`
								: 'N/A'}
						</p>
						{/* Apply Here Button */}
						<button
							className='apply-here-button'
							alt='apply-here-button'
							onClick={() => handleApplyButtonClick(job.url)}>
							Apply Here
						</button>
						{/* Description Container */}
						<div className='description-container'>
							<div className='job-description'>
								<h5>Job Description</h5>
								<p>
									{job.jobExcerpt.replace(/[^a-zA-Z0-9\s]/g, '').slice(0, -7)}
									...
								</p>
								<p className='pubDate'>Posted: {formatPubDate(job.pubDate)}</p>
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
