import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Jobs.css'

const Jobs = () => {
	const [jobs, setJobs] = useState([]);
	const url = 'https://jobicy.com/api/v2/remote-jobs';

	useEffect(() => {
		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				setJobs(data.jobs); // Update state with fetched data
				console.log(jobs);
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
						{/* Render job details here */}
						<p>{job.jobTitle}</p>
                        <a href={job.url}>{job.url}</a>
						<p>{job.companyName}</p>
						{/* Additional job details can be rendered here */}
					</div>
				))}
			</div>
		</div>
	);
};

export default Jobs;
