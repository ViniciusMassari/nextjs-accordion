'use client';
import Image from 'next/image';
import mobileImage from '../../public/mobile-pattern.svg';
import desktopImage from '../../public/desktop-pattern.svg';
import React from 'react';
import useWindowDimensions from '@/lib/useWindowDimension';

export default function Header() {
  const { width } = useWindowDimensions();
  const breakpointForDesktop = 640;

  if (width && width >= breakpointForDesktop) {
    return (
      <header className='w-screen h-52'>
        <Image src={desktopImage} alt='background' className='w-full' />
      </header>
    );
  } else {
    return (
      <header className='w-screen '>
        <Image src={mobileImage} alt='background mobile' className='w-full ' />
      </header>
    );
  }
}
