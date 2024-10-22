import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: "E Learning",
    description: ""  };
  

const CommonLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <div className=''>
            {children}
        </div>
    );
};

export default CommonLayout;