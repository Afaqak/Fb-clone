import React from 'react';
import StoryCard from './StoryCard';
const userStories = [
  {
    id: 1,
    name: 'Story 1',
    src: 'https://links.papareact.com/zof',
    profile: 'https://links.papareact.com/l4v',
  },
  {
    id: 2,
    name: 'Story 2',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    id: 3,
    name: 'Story 3',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p',
  },
  {
    id: 4,
    name: 'Story 4',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf',
  },
  {
    id: 5,
    name: 'Story 5',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy',
  },
];

const Stories = () => {
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {userStories.map((story) => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
