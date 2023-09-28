import {HomeIcon} from "@heroicons/react/outline"


export default function Sidebar() {
    return (
      <div className="hidden sm:flex flex-col fixed">
        <div>Logo</div>
        <nav>
                <SidebarLink Icon={ HomeIcon } text={"Home"} />
          {/* <SidebarLink text={"Explore"} />
          <SidebarLink text={"Notifications"} />
          <SidebarLink text={"Messeges"} /> */}

            </nav>
            <div>User</div>
      </div>
    );
}

function SidebarLink({text, Icon}) {
    return (
      <li className="flex mb-6 items-center text-xl space-x-3">
        <Icon className="h-7" />
        <span className=" xl:inline">{text}</span>
      </li>
    );
}