import HistoryItems from "./HistoryItems"
import { ScrollArea } from "../ui/scroll-area"



const History = async() => {
   return (
      <div className="flex flex-col">
         <ScrollArea className="h-[200px] w-full bord">
            <HistoryItems />
         </ScrollArea>
      </div>
   )
}

export default History