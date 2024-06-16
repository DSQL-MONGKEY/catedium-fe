'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useHistoryStore } from '@/state'
import { Progress } from './ui/progress'
import { useToast } from './ui/use-toast'
import { ToastAction } from './ui/toast'
import { ToastTitle } from '@radix-ui/react-toast'
import { cn } from '@/lib/utils'


const FileUpload = () => {
   const [file, setFile] = useState<any>()
   const [progress, setProgress] = useState<number>(0)
   const { addHistories } = useHistoryStore()
   const { toast } = useToast()

   const handleFilePredict = async() => {
      const formData = new FormData()
      formData.append('file', file)

      try {
         if(file) {
            toast({
               title: "Predicting...",
               description: "Predicting the breeds on the image",
            })
            setProgress(20)
            setTimeout(() => setProgress(50), 2000)
            setTimeout(() => setProgress(80), 4000)
         }
         if(!file) {
            return toast({
               title: "Error",
               description: "Please ensure you've chosen your image",
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
            toast({
               title: 'Success',
               description: 'The prediction proccess has been succeeded',
            })
            setProgress(100)
            setTimeout(() => setProgress(0), 800)
         }
         console.log(data)
         console.log(file)
         
      } catch(err: any) {
         toast({
            title: "Error",
            description: err.message,
            variant: "destructive"
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
            <Button onClick={handleFilePredict} className="text-slate-400 text-sm">
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