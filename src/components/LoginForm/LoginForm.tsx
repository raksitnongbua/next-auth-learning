'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import GoogleIcon from './google-icon.svg';
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card';
export interface LoginFormProps {
  // types...
}

const LoginForm: React.FC<LoginFormProps> = ({}) => {
  return (
    <Card className='w-96 flex min-h-40 flex flex-col items-center gap-6 p-6'>
      <CardTitle>
        <h4 className='text-xl'>Next Auth</h4>
      </CardTitle>
      <CardFooter>
        <Button className='bg-blue-500 hover:bg-blue-400 text-white flex gap-2 text-sm'>
          <GoogleIcon className='fill-current' />
          <span>Sign In With Google</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
