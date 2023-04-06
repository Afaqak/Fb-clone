import React from 'react';
import { useSession } from 'next-auth/react';
import { BellIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, UserIcon, ComputerDesktopIcon } from '@heroicons/react/24/solid';
import { ShoppingCartIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import SidebarRow from './SidebarRow';
import Image from 'next/image';

const Sidebar = () => {
  const { data: session, loading } = useSession();
  return (
    <div className='p-2 mt-5 max-w-[200px] xl:min-w-[300px]'>
      <SidebarRow
        src={session?.user.image}
        title={session?.user.name}
      />
      <SidebarRow
        Icon={UserIcon}
        title='Friends'
      />
      <SidebarRow
        Icon={UserGroupIcon}
        title='Groups'
      />
      <SidebarRow
        Icon={ShoppingCartIcon}
        title='Marketplace'
      />
      <SidebarRow
        Icon={ComputerDesktopIcon}
        title='Watch'
      />
      <SidebarRow
        Icon={CalendarIcon}
        title='Events'
      />
      <SidebarRow
        Icon={ClockIcon}
        title='Memories'
      />
      <SidebarRow
        Icon={ChevronDownIcon}
        title='See More'
      />
    </div>
  );
};

export default Sidebar;
