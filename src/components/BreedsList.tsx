import React from 'react'
import {ArrowTopRightIcon} from '@radix-ui/react-icons'

import { breeds } from '../../public/constants'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { ScrollArea } from './ui/scroll-area'


const BreedsList = () => {
   return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 md:p-5'>
         {breeds.map((breed, idx) => (
            <Card key={idx} className='hover:border-slate-400 dark:hover:border-cyan-900 duration-100'>
               <CardHeader>
                  <div className='w-full flex justify-center mb-2'>
                     <Image
                        src={breed.image} 
                        sizes='auto'
                        loading={'lazy'} 
                        alt={breed.breed} 
                        className='rounded-md'
                     />
                  </div>
                  <CardTitle className='text-lg md:text-xl'>
                     {breed.breed}
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <div className='mb-2'>
                     <p className='text-sm md:text-md'>
                        {breed.description.substring(0, 100).concat('...')}
                     </p>
                  </div>
                  <Dialog>
                     <DialogTrigger asChild >
                        <Button size='icon' variant='secondary'>
                           <ArrowTopRightIcon className='w-[1.2rem] h-[1.2rem]' />
                        </Button>
                     </DialogTrigger>
                     <DialogContent>
                        <DialogHeader>
                           <DialogTitle>
                              {breed.breed} &nbsp;{breed.icon}
                           </DialogTitle>
                           <DialogDescription>
                              {breed.breedLatin}
                           </DialogDescription>
                        </DialogHeader>
                        <div className='flex flex-col gap-3'>
                           <div id='characteristics-container'>
                              <label htmlFor="characteristic" className=''>
                                 Characteristics ✨
                              </label>
                              <ul className='list-disc ml-5'>
                                 {breed.characteristics.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                 ))}
                              </ul>
                           </div>
                           <div id='age-container'>
                              <label htmlFor="age">
                                 Age 💖
                              </label>
                              <p id='age' className='text-sm'>
                                 {breed.ageRate}
                              </p>
                           </div>
                           <div id="descriptions-container">
                              <div id='description'>
                                 <p className='text-sm sm:text-md'>
                                    {breed.description}
                                 </p>
                              </div>
                           </div>
                        </div>
                     </DialogContent>
                     </Dialog>
               </CardContent>
            </Card>
         ))}
      </div>
   )
}

export default BreedsList

{/* <Dialog>
                  <DialogTrigger asChild>
                     <Button size='icon' variant='secondary'>
                        <ArrowTopRightIcon className='text-2xl' />
                     </Button>
                  </DialogTrigger>
                  <DialogContent>
                     <DialogHeader>
                        <DialogTitle>
                           {breed.breed} &nbsp;{breed.icon}
                        </DialogTitle>
                        <DialogDescription>
                           {breed.breedLatin}
                        </DialogDescription>
                     </DialogHeader>
                  </DialogContent>
               </Dialog> */}