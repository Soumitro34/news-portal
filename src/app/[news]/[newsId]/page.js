import { getSingleNews } from '@/utils/getSingleNews';
import Image from 'next/image';
import React from 'react';

const DynamicNewsPage =async ({params}) => {


const {data:news} = await getSingleNews(params.newsId)


    return (
        <div className='mx-4 md:m-20'>
           <div  className="card bg-base-100 shadow-sm">
                           <div className='md:grid grid-cols-2 gap-3 md:h-[300px]'>
                           <figure>
                             <Image className='w-full mt-2'
                               src={news.thumbnail_url} 
                               alt="news" width={500} height={500}/>
                           </figure>
                           <figure>
                             <Image className='w-full mt-2'
                               src={news.image_url} 
                               alt="news" width={500} height={500}/>
                           </figure>
                           </div>
                           <div className="card-body">
                            <div> <p className='inline-block bg-green-400 rounded-2xl text-center text-white py-2 px-3'>{news.category}</p></div>
                             <h2 className="card-title">{news.title}</h2>
                             <p>{news.details}</p>
                           </div>
                           <div className="card-body">
                           <Image className='rounded-full border-2 border-green-400 p-2'
                               src={news.author.img} 
                               alt="news" width={100} height={100}/>
                               <h2 className="card-title">{news.author.name}</h2>
                               <p className="card-title">{news.author.published_date}</p>
                           </div>
                         </div>
        </div>
    );
};

export default DynamicNewsPage;