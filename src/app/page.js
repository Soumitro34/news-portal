import LatestNews from '@/components/ui/LatestNews/LatestNews';
import Sidebar from '@/components/ui/LatestNews/Sidebar/Sidebar';
import React from 'react';

const HomePage = () => {
  return (
    <div className='p-4 md:px-16 py-5 md:flex gap-5'>
      <div className='w-1/1 md:w-2/3'>
      <LatestNews></LatestNews>
      </div>
      <div className='w-1/1 md:w-1/3'>
      <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default HomePage;