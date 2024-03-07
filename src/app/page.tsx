'use client'
import ReadMore from '../Components/ReadMore';
import Link from 'next/link'

export default function Home() {
  const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor massa sit amet dolor dictum elementum. Nulla nec lacinia ligula. Proin et ultricies nunc. Fusce nec lorem nec arcu ullamcorper ultrices id at libero. Vivamus sit amet vestibulum odio. Sed eu augue mauris.";

  return (
    <div className='flex justify-center items-center min-w-[100vw]  min-h-[100vh]'>
      <div className='max-w-[50vw]'>
    <Link href="/readmore" className='text-[#007bff]'>
      Read More Component
    </Link>

      </div>
    </div>
  );

}
