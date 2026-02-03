import Application_card from "@/components/Application_card";
import Project_card from "@/components/Project_card";
import UserProfileAnlytics from "@/components/UserProfileAnlytics";
import TaskList from "@/components/TaskList";

export default function Homepage() {
  return (
    /* PAGE ROOT */
    <div className=" h-full p-4 flex flex-col gap-6 overflow-hidden">

      {/* ---------------- TOP CARDS ---------------- */}
      <div className="flex flex-col sm:flex-row gap-6 shrink-0">
        <Project_card />
        <Application_card />
      </div>

      {/* ---------------- BOTTOM SECTION ---------------- */}
      <div className="grid grid-cols-[1.25fr_0.75fr] gap-6 flex-1 min-h-0">

        {/* Analytics */}
        <div className="bg-white rounded-2xl shadow-sm flex flex-col min-h-0">
          <div className="flex-1 overflow-y-auto">
            <UserProfileAnlytics />
          </div>
        </div>

        {/* Task List */}
        <div className="bg-white rounded-2xl shadow-sm flex flex-col min-h-0">
          <div className="flex-1 overflow-y-auto">
            <TaskList />
          </div>
        </div>

      </div>
    </div>
  );
}
