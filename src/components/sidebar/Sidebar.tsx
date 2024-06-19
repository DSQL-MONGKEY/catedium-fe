
import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons'

import History from "./History";
import { ModeToggle } from "../ModeToggle";
import Link from "next/link";
import { useSidabarStateStore } from '@/state';


const SideBar = () => {

   return (
      <aside className="hidden sm:flex h-screen w-[300px] bg-white border-r border-slate-200 dark:bg-slate-900 dark:border-gray-700 p-2 relative">
         <div className="flex flex-col">
            <div className="flex flex-col text-center p-5">
               <span className="text-xl font-bold">
                  Catedium 
               </span>
               <span className="text-md font-semibold">
                  Cat Breeds Predictor
               </span>
               <p className="text-sm text-slate-500">
                  Catedium is a web application that allows users to predict the breed of a cat based on an uploaded image. The application utilizes a Convolutional Neural Network (CNN) to analyze the image and identify the cat breed with high      accuracy.
               </p>
            </div>

            <div className="flex gap-3 justify-center mb-2">
               <Link href='https://github.com/DSQL-MONGKEY/Catedium' target="blank">
                  <div id="docs" className="flex border boder-slate-200 h-11 text-center items-center px-7 rounded-md shadow-sm bg-popover hover:bg-accent hover:text-accent-foreground">
                     <span>
                        Docs
                     </span>
                  </div>
               </Link>
               <div id="mode-toggle" className="">
                  <ModeToggle/>
               </div>
            </div>

            <div className="border-t border-slate-200 dark:border-gray-700 mt-1 pt-2">
               <span className="ml-3 text-md font-semibold">
                  Prediction History
               </span>
               <History />
            </div>
         </div>
      </aside>
   )
} 

export default SideBar;