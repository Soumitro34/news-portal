import Image from 'next/image';
import React from 'react';
import HeaderImage from '@/assets/logo.svg'
import { getCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {
    const currentDate = getCurrentDate();
    return (
        <div className='w-full my-6'>
           <div className='text-center'>
            <div>
            <Image className='mx-auto w-4/6 md:w-2/6 h-4/6 md:h-4/6' src={HeaderImage} alt='the daily star'width={500} height={500}/>
            </div>
            <p>Journalist without Fear or Favour</p>
            <p>{currentDate}</p>
           </div>
        </div>
    );
};

export default Header;