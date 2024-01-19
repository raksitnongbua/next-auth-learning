'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import GoogleIcon from './google-icon.svg';
import { Card, CardFooter, CardTitle } from '../ui/card';
import { signIn, useSession } from 'next-auth/react';
export interface LoginFormProps {
  // types...
}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  return (
    <Card className='min-w-28 flex flex flex-col items-center gap-6 p-6'>
      <CardTitle>
        <span className='text-xl'>Next Auth</span>
      </CardTitle>
      <CardFooter>
        <Button
          className='bg-blue-500 hover:bg-blue-400 text-white flex gap-2 text-sm'
          onClick={() => signIn('google')}
        >
          <GoogleIcon className='fill-current' />
          <span>Sign In With Google</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
