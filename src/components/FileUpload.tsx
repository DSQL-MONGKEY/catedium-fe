'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useHistoryStore } from '@/state'
import { Progress } from './ui/progress'
import { useToast } from './ui/use-toast'
import { toast } from 'sonner'


const FileUpload = () => {
   const [file, setFile] = useState<any>()
   const [progress, setProgress] = useState<number>(0)
   const { addHistories } = useHistoryStore()
   const topToast = useToast().toast

   const handleFilePredict = async() => {
      const formData = new FormData()
      formData.append('file', file)
      try {
         if(file) {
            toast("Predicting...",{
               description: `Predicting the breeds on ${file.name}`,
               duration: 7000,
            })
            setProgress(20)
            setTimeout(() => setProgress(50), 2000)
            setTimeout(() => setProgress(80), 4000)
         }
         if(!file) {
            return toast("Error", {
               description: "Please ensure the image you've chosen",
               duration: 5000,
               classNames: {
                  error: 'bg-rose-500'
               },
               style: {
                  background: 'red',
                  color: 'white'
               }
            })
         }
         
         const { data } = await axios.post('https://flask-api-v2-zchoaqtzcq-et.a.run.app/api/predict', formData, {
            headers: {
               "Content-Type": "multipart/form-data",
            }
         })
         addHistories({
            requestId: data.requestId,
            class: data.data.class,
            timestamp: new Date().toLocaleTimeString()
         })

         if(data) {
            toast("Success", {
               description: 'The prediction proccess succeeded',
               duration: 7000,
            })
            setProgress(100)
            setTimeout(() => setProgress(0), 800)

            setTimeout(() => 
               toast(`Rawrr! I'm ${data.data.class}`,{
               description: `You can check the detail on list below`,
               duration: 7000
            }), 1000)
         }         
      } catch(err: any) {
         toast("Error", {
            description: err.message,
         })
      }

   }

   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFile(e.target.files?.[0])
   }


   return (
      <div className='flex flex-col gap-4 h-full items-center w-full'>
         <div className='grid grid-cols-1 gap-1.5'>
            <label htmlFor="image-input" className='font-semibold'>
               Image
            </label>
            <input
               id='image-input'
               type='file'
               onChange={handleFileUpload} 
               accept='image/*'
               className='file:bg-transparent file:border-none border rounded-md border-slate-200 dark:border-white/[0.2]'
            />
         </div>

         <div>
            <Button
               disabled={progress > 0}
               onClick={handleFilePredict} 
               className="text-white dark:text-accent text-sm">
               Predict Image
            </Button>
         </div>
         
         <div className='w-[500px]'>
            <Progress value={progress} className='h-2' />
         </div>
      </div>
   )
}

export default FileUpload