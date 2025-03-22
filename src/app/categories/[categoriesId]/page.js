import { getNewsByCategory } from '@/utils/getNewsByCategory';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DynamicNewsPage =async ({searchParams}) => {

            const {data} = await getNewsByCategory(searchParams.category)


    return (
        <div className='grid md:grid-cols-2 gap-5'>
          {
          data.map(news =>  <Link href={`/${news.category.toLowerCase()}/${news._id}`} key={news._id}><div  className="card bg-base-100 shadow-sm">
                <figure>
                  <Image className='h-[230px]'
                    src={news.thumbnail_url} 
                    alt="news" width={500} height={500}/>
                </figure>
                <div className="card-body">
                 <div> <p className='inline-block bg-green-400 rounded-2xl text-center text-white py-2 px-3'>{news.category}</p></div>
                  <h2 className="card-title">{news.title}</h2>
                  <p>{news.details.length > 150 ? news.details.slice(0,150) + " ......" : news.details}</p>
                </div>
              </div>
            </Link>

            )
          }
        </div>
    );
};

export default DynamicNewsPage;