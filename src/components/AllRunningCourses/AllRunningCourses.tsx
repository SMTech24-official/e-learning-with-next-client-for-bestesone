import React from 'react';
import RunningCourseCard from './RunningCourseCard/RunningCourseCard';

const AllRunningCourses = () => {
    const count = [1, 2, 3, 4, 5, ]
    return (
        <>
            <h3 className='text-xl md:text-3xl font-semibold mt-10 mb-5'>All Running Courses</h3>
            <div className='border rounded-2xl p-3'>
                <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                    {
                        count.map(item => <RunningCourseCard key={item} />)
                    }
                  
                </div>

            </div>
        </>
    );
};

export default AllRunningCourses;