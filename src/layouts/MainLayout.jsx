import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SectionFooter from "../components/SectionFooter";
import TopLine from "../components/TopLine";


export default function MainLayout() {
  return (

    <div className="container">
      <div>
        <TopLine/>
        <Header/>
      </div>
      <main>
        <Outlet/> 

      </main>
      <SectionFooter/>
    </div>
    
  )
}
