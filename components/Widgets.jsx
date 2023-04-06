import React from 'react';
import { VideoCameraIcon, MagnifyingGlassIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

const contacts = [
  { src: 'https://links.papareact.com/f0p', name: 'Jeff Bezos' },
  {
    src: 'https://links.papareact.com/kxk',
    name: 'Elon Musk',
  },
  {
    src: 'https://links.papareact.com/zvy',
    name: 'Bill Gates',
  },
  {
    src: 'https://links.papareact.com/snf',
    name: 'Mark Zuckerberg',
  },
  {
    src: 'https://links.papareact.com/d0c',
    name: 'Harry Potter',
  },
  {
    src: 'https://links.papareact.com/6gg',
    name: 'The Queen',
  },
  {
    src: 'https://links.papareact.com/r57',
    name: 'James Bond',
  },
];

const Widgets = () => {
  return (
    <div className='hidden lg:flex flex-col p-2 mt-5 pr-5 w-60'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-gray-400'>Contacts</h2>
        <div className='flex space-x-2'>
          <VideoCameraIcon className='h-6' />
          <MagnifyingGlassIcon className='h-6' />
          <EllipsisHorizontalIcon className='h-6' />
        </div>
      </div>
      {contacts.map((contact) => (
        <div
          key={contact.src}
          className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 p-2 rounded-xl cursor-pointer'
        >
          <img
            className='rounded-full'
            src={contact.src}
            width={40}
            height={40}
            layout='fixed'
          />
          <p>{contact.name}</p>
          <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce' />
        </div>
      ))}
    </div>
  );
};

export default Widgets;
