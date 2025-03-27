import React from 'react'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import { X } from 'lucide-react'

const Notification = () => {
  return (
    <div className='flex flex-col gap-4'>
      {/* Notification Item 1 */}
      <div className='flex items-start gap-3 p-4 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors cursor-pointer'>
        <div className='flex-shrink-0'>
          <Image
            src='/avatar.png'
            alt='avatar'
            height={40}
            width={40}
            className='rounded-full'
          />
        </div>
        
        <div className='flex-1 flex flex-col gap-1'>
          <div className="flex justify-between items-start">
            <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'>
              <X size={16} />
            </button>
          </div>
          <div className='flex items-center gap-2'>
            <Badge className='text-xs bg-green-500'>Stock Out</Badge>
            <span className='text-xs text-gray-500 dark:text-gray-400'>
              Dec 12 2021 - 12:40PM
            </span>
          </div>
        </div>
      </div>

      {/* Notification Item 2 */}
      <div className='flex items-start gap-3 p-4 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors cursor-pointer'>
        <div className='flex-shrink-0'>
          <Image
            src='/avatar.png'
            alt='avatar'
            height={40}
            width={40}
            className='rounded-full'
          />
        </div>
        
        <div className='flex-1 flex flex-col gap-1'>
          <div className="flex justify-between items-start">
            <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'>
              <X size={16} />
            </button>
          </div>
          <div className='flex items-center gap-2'>
            <Badge variant='destructive' className='text-xs'>Stock Out</Badge>
            <span className='text-xs text-gray-500 dark:text-gray-400'>
              Dec 12 2021 - 12:40PM
            </span>
          </div>
        </div>
      </div>

      {/* Notification Item 3 */}
      <div className='flex items-start gap-3 p-4 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors cursor-pointer'>
        <div className='flex-shrink-0'>
          <Image
            src='/avatar.png'
            alt='avatar'
            height={40}
            width={40}
            className='rounded-full'
          />
        </div>
        
        <div className='flex-1 flex flex-col gap-1'>
          <div className="flex justify-between items-start">
            <p className='text-sm font-medium text-gray-900 dark:text-gray-100'>
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className='text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'>
              <X size={16} className=''/>
            </button>
          </div>
          <div className='flex items-center gap-2'>
            <Badge variant='destructive' className='text-xs'>Stock Out</Badge>
            <span className='text-xs text-gray-500 dark:text-gray-400'>
              Dec 12 2021 - 12:40PM
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification