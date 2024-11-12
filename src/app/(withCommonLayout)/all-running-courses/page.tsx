import AllRunningCourses from '@/components/AllRunningCourses/AllRunningCourses';
import BusinessManagementSystem from '@/components/AllRunningCourses/BusinessManagementSystem';
import React from 'react';

const AllRunningCoursesPage = () => {
    return (
        <div className='container'>
            <AllRunningCourses/>
            <BusinessManagementSystem/>
        </div>
    );
};

export default AllRunningCoursesPage;