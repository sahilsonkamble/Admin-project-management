import Application_card from "@/components/Application_card";
import Project_card from "@/components/Project_card";

export default function Page() {
  return (
    <div className=" bg-zinc-800 m-2 h-calc(100vh-60px)">
      
    
      {/* Main Content */}
      <div className="p-2">
        <div className="bg-zinc-800 flex flex-col sm:flex-row gap-10 
                    items-center 
                        min-h-75 rounded-2xl m-3">
          <div>  <Project_card /></div>
          <div> <Application_card /> </div>
        
         

        </div>
      </div>

    </div>
  );
}
