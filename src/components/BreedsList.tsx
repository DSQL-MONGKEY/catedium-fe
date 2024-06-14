import React from 'react'
import {ArrowTopRightIcon} from '@radix-ui/react-icons'

import { breeds } from '../../public/constants'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'


const BreedsList = () => {
   return (
      <div className='flex flex-col gap-5 p-5'>
         {breeds.map((breed, idx) => (
            <div key={idx} className='flex flex-row justify-between bg-white shadow-sm border boder-slate-200 dark:bg-popover hover:border-slate-700 dark:hover:border-cyan-900 p-2 rounded-md duration-100'>
               <div className='flex items-center'>
                  <h4 className='text-2xl font-semibold text-slate-800 dark:text-white'>
                     {breed.breed}
                  </h4>
               </div>

               <Dialog>
                  <DialogTrigger>
                     <Button size='icon' variant='secondary'>
                        <ArrowTopRightIcon className='text-2xl' />
                     </Button>
                  </DialogTrigger>
                  <DialogContent>
                     <DialogHeader>
                        <DialogTitle>
                           {breed.breed}
                        </DialogTitle>
                        <DialogDescription>
                           {breed.breedLatin}
                        </DialogDescription>
                     </DialogHeader>
                  </DialogContent>
               </Dialog>
            </div>
         ))}
      </div>
   )
}

export default BreedsList