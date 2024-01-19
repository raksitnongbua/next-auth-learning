'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { signOut } from 'next-auth/react';

export interface DashboardProps {
  name: string;
  email: string;
  imageSrc: string;
}

const Dashboard: React.FC<DashboardProps> = ({ name, email, imageSrc }) => {
  console.log(imageSrc);
  return (
    <div className='p-10 flex items-center gap-4'>
      <Avatar>
        <AvatarImage src={imageSrc} alt='img' />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <span>{`${name} (${email})`}</span>
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  );
};

export default Dashboard;
