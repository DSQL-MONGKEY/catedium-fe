import HistoryItems from "./HistoryItems"
import { ScrollArea } from "../ui/scroll-area"
const tags = Array.from({ length: 50 }).map(
   (_, i, a) => `v1.2.0-beta.${a.length - i}`
 )


const History = async() => {
   return (
      <div className="flex flex-col">
         <ScrollArea className="h-[200px] w-full bord">
            <HistoryItems data />
            <HistoryItems data />
            <HistoryItems data />
            <HistoryItems data />
         </ScrollArea>
      </div>
   )
}

export default History