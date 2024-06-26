
import { PlusCircledIcon } from "@radix-ui/react-icons";
import SideBar from "@/components/sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import UploadField from "@/components/FileUpload";
import { breeds } from "../../public/constants";
import BreedsList from "@/components/BreedsList";


export default function Home() {

  return (
    <main className="w-full h-screen flex flex-row overflow-hidden gap-3 bg-white dark:bg-black">
      <SideBar />
      <div className="flex flex-col w-full h-full gap-3 items-center justify-center sm:pr-3 md:px-10 md:py-3">
        <div className="w-full flex flex-col rounded-md sm:border sm:border-slate-200 sm:dark:border-gray-700 sm:dark:bg-slate-900 shadow-sm py-10">
            <UploadField/>
        </div>

        <div className="w-full h-[400px] border border-slate-200 rounded-lg overflow-y-auto no-scrollbar shadow-sm dark:border-gray-700 dark:bg-slate-900">
          <BreedsList />
        </div>
      </div>
    </main>
  );
}
