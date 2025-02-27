import React, { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'


interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc: string
    dark?: boolean
}

const Phone = ({imgSrc, className,dark = false,...props}:PhoneProps) => {
  return (
    <div
     className={cn("relative pointer-events-none z-50 overflow-hidden", className)} 
    {...props}
    >
        <Image 
        width={1000} 
        height={1000} 
        alt='phone'
        src={dark
            ?'/phone-template-dark-edges.png'
            :'/phone-template-white-edges.png'
        }
        className='pointer-events-none z-50 select-none'
        />
        <div className='absolute -z-10 inset-0'>
            <Image 
            className='object-cover' 
            src={imgSrc} 
            alt='overlaying phone image'
            width={1000}
            height={1000}
            />
        </div>
    </div>
  )
}

export default Phone