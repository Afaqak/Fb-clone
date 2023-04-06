import React from 'react';
import { useSession } from 'next-auth/react';
import { ChatBubbleBottomCenterIcon, HandThumbUpIcon, ShareIcon } from '@heroicons/react/24/outline';

const Post = ({ name, message, image, timestamp }) => {
  const { data: session } = useSession();
  return (
    <div className='flex flex-col'>
      <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
        <div className='flex items-center space-x-2'>
          <img
            src={session?.user.image}
            alt=''
            className='rounded-full'
            width={40}
            height={40}
          />
          <div>
            <p className='font-medium'>{name}</p>
            {timestamp ? <p className='text-xs text-gray-400'>{new Date(timestamp?.toDate()).toLocaleString()}</p> : <p className='text-xs text-gray-400'>Loading...</p>}
          </div>
        </div>
        <p className='pt-4'>{message}</p>
      </div>
      {image && (
        <div className='relative h-56 md:h-96 bg-white'>
          <img
            src={image}
            alt=''
            className='object-cover w-full h-full'
          />
        </div>
      )}

      <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t px-10 py-4'>
        <div className='inputIcon'>
          <HandThumbUpIcon className='h-4' />
          <p className='text-xs sm:text-base'>Like</p>
        </div>
        <div className='inputIcon'>
          <ChatBubbleBottomCenterIcon className='h-4' />
          <p className='text-xs sm:text-base'>Comment</p>
        </div>
        <div className='inputIcon'>
          <ShareIcon className='h-4' />
          <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
