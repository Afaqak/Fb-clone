import Image from 'next/image';
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Login = () => {
  const session = useSession().data;
  console.log('session', session);

  return (
    <div className='grid place-items-center h-[60vh]'>
      <Image
        src='https://links.papareact.com/t4i'
        width={400}
        height={400}
      />

      <h1
        onClick={signIn}
        className='p-4 bg-blue-500 rounded-full text-white text-center cursor-pointer'
      >
        login with facebook
      </h1>
    </div>
  );
};

export default Login;
