'use client'

import { cn } from "@/lib/utils"
import { useHistoryStore } from "@/state"

const HistoryItems = () => {
   const { histories } = useHistoryStore()

   return (
      <div className="flex flex-col gap-2 p-2 m-3 rounded">
         {histories.map((item) => (
            <div 
               key={item.requestId}
               className="px-2 py-3 rounded-md bg-white border border-slate-200 hover:border-slate-700 dark:border-white/[0.1] dark:bg-popover dark:hover:border-cyan-900 shadow-sm duration-100"
            >
               <div className="flex justify-between items-center">
                  <h3 className={cn('text-zinc-800 dark:text-white font-bold capitalize', item.class.length > 5 ? 'text-sm' : 'text-lg')}>
                     {item.class.toLowerCase()}  
                  </h3>
                  &nbsp;
                  <span className="text-xs text-slate-500 dark:text-zinc-400 font-semibold">
                     {item.timestamp}
                  </span>
               </div>
            </div>
         ))}
      </div>
   )
}

export default HistoryItems