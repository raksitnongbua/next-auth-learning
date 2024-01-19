'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const page = ({ params }: { params: { id: string } }) => {
  const [value, setValue] = useState('');
  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='text-black'
      />
      dashboard: {params.id}
      <div>
        <Link href={'/dashboard/1'}>Go to 1</Link>
        <Link href={'/dashboard/2'}>Go to 2</Link>
      </div>
    </div>
  );
};

export default page;
