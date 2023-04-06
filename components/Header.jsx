import Image from 'next/image';
import React from 'react';
import HeaderIcon from './HeaderIcon';
import { BellIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, RectangleGroupIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/solid';
import { FlagIcon, PlayIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useSession, signOut } from 'next-auth/react';
import Login from './Login';

const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  if (!session) return <Login />;

  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      {/* Left*/}
      <div className='flex items-center'>
        <Image
          src='https://links.papareact.com/5me'
          width={40}
          height={40}
          layout='fixed'
        />
        <div className='flex items-center ml-2 rounded-full bg-gray-100 p-2'>
          <MagnifyingGlassIcon className='h-5 w-5 text-gray-500' />
          <input
            type='text'
            placeholder='Search Facebook'
            className=' bg-transparent rounded-full pl-2 w-52 ml-2 focus:outline-none items-center text-sm 
              hidden md:inline-flex
            '
          />
        </div>
      </div>
      {/* Center*/}
      <div className='flex justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon
            active={true}
            Icon={HomeIcon}
          />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right*/}
      <div className='flex items-center sm:space-x-2 justify-end'>
        {/* Profile Pic*/}
        <Image
          className='rounded-full cursor-pointer'
          src={session.user.image}
          width={40}
          height={40}
          onClick={signOut}
          layout='fixed'
        />

        <p className='whitespace-nowrap font-semibold pr-3'>{session.user.name}</p>
        <RectangleGroupIcon className='icon' />
        <ChatBubbleLeftIcon className='icon' />
        <BellIcon className='icon' />
        <ChevronDownIcon className='icon' />
        <button onClick={signOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
