import React from 'react';

const CareerJobsDetail = ({ job }) => {
    return (
        <div className="p-4 bg-blue-900 text-white rounded-md shadow-md mt-2 space-y-4">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-sm">About The Role:</p>
            <p>{job.description}</p>
            <p className="text-sm mt-2">Our ideal candidate has:</p>
            <ul className="list-disc list-inside">
                {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                ))}
            </ul>
            <button className="bg-white text-blue-900 px-4 py-2 rounded font-medium hover:bg-gray-200 mt-2">Apply Now</button>
        </div>
    );
};

export default CareerJobsDetail;
