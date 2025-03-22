import { getAllNews } from '@/utils/getAllNews';
import { getCurrentDate } from '@/utils/getCurrentDate';
import Image from 'next/image';
import React from 'react';

const Sidebar =async () => {
   const currentDate = getCurrentDate();
  const {data} = await getAllNews();
    return (
        <div>
           <div className="card bg-base-100 shadow-sm">

              <Image className='w-full'
                src={data[5].thumbnail_url} 
                alt="news" width={500} height={500} />
          
            <div className="card-body">
              <button className='bg-green-400 rounded-2xl w-[100px] text-center text-white p-2 '>{data[5].category}</button>
              <h2 className="card-title">{data[5].title}</h2>
              <p>{data[5].details.length > 100 ? data[5].details.slice(0,120) + " ......" : data[5].details}</p>
            </div>
          </div>
           {/* data map 8 item  */}
          
               <div className='my-5'>
               {
                    data.slice(6, 14).map(news => <div key={news._id} className="flex items-center shadow-sm my-5">
                      
                        <Image className='w-16 h-16 rounded-2xl'
                          src={news.thumbnail_url} 
                          alt="news" width={500} height={500}/>
                    
                      <div className="card-body">
                       
                        <h2 className="card-title">{news.title}</h2>
                        <h2 className="text-sm text-purple-400">{currentDate}</h2>
                       
                      </div>
                    </div>) 
                }
               </div>
                  <div className="shadow-sm">

                  <Image className='rounded-xl'
                    src={data[14].thumbnail_url} 
                    alt="news" width={500} height={500} />
                  </div>
        </div>
    );
};

export default Sidebar;