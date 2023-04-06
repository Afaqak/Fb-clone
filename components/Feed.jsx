import React from 'react';
import Stories from './Stories';
import InputBox from './InputBox';
import Posts from './Posts';
const Feed = () => {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 overflow-y-auto scrollbar-hide'>
      <Stories />
      <InputBox />
      <Posts />
    </div>
  );
};

export default Feed;
