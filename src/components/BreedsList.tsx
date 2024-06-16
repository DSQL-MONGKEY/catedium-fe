import React from 'react'
import {ArrowTopRightIcon} from '@radix-ui/react-icons'

import { breeds } from '../../public/constants'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'


const BreedsList = () => {
   return (
      <div className='grid grid-cols-2 gap-5 p-5'>
         {breeds.map((breed, idx) => (
            <Card key={idx}>
               <CardHeader>
                  <CardTitle>{breed.breed}</CardTitle>
               </CardHeader>
               <CardContent>
                  <Dialog>
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