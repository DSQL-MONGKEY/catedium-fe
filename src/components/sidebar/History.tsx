import HistoryItems from "./HistoryItems"
import { ScrollArea } from "../ui/scroll-area"



const History = async() => {
   return (
      <div className="flex flex-col">
         <ScrollArea className="h-[160px] w-full">
            <HistoryItems />
         </ScrollArea>
      </div>
   )
}

export default History