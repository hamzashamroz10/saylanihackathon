import { Outlet } from "react-router-dom"
import Sidebar from '../SideBar/Sidebar.jsx';

const DashboardLayout = () => {
  return (
    <div className="flex">
        <Sidebar />
        <Outlet /> 
    </div>
  )
}

export default DashboardLayout