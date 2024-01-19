'use client';
import React from 'react';
import { LoginForm } from '../LoginForm';
import { useSession } from 'next-auth/react';
import { Dashboard } from '../Dashboard';

export interface HomeProps {
  // types...
}

const Home: React.FC<HomeProps> = ({}) => {
  const { data } = useSession();
  const isSignedIn = Boolean(data);

  return (
    <div>
      {isSignedIn ? (
        <Dashboard
          name={data?.user?.name ?? ''}
          email={data?.user?.email ?? ''}
          imageSrc={data?.user?.image ?? ''}
        />
      ) : (
        <div className='h-screen flex justify-center items-center'>
          <LoginForm />
        </div>
      )}
    </div>
  );
};

export default Home;
