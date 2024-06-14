'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { Button } from './ui/button'

const FileUpload = () => {
   const [file, setFile] = useState<any>()
   
   const handleFileUpload = async() => {
      const formData = new FormData()
      formData.append('file', file)

      const { data } = await axios.post('https://flask-api-v2-zchoaqtzcq-et.a.run.app/api/predict', formData, {
         headers: {
            "Content-Type": "multipart/form-data",
         }
      })
      const str = data.data.class
      console.log(str.charAt(0))
      console.log(data)
   } 


   return (
      <div>
         <input
            id='file-input'
            type='file'
            onChange={(e) => setFile(e.target.files?.[0])} 
            accept='.jpeg, jpg, png'
            className='file:bg-blue-500 text-decoration-none'
            />
         <Button onClick={handleFileUpload} className="text-slate-400 text-sm">
            Upload Image
         </Button>
      </div>
   )
}

export default FileUpload