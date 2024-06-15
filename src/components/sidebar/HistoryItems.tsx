'use client'

import { useHistoryStore } from "@/state"



const HistoryItems = () => {
   const { histories } = useHistoryStore()

   return (
      <div className="bg-slate-200 p-2 m-3 rounded">
         {histories.map((item) => (
            <div key={item.requestId}>
               <h3 className="text-xl text-black">
                  {item.class}
               </h3>
            </div>
         ))}
      </div>
   )
}

export default HistoryItems