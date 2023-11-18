import React,{ FC} from 'react'
import Dashboard from './components/Dashboard'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import jwt from "jsonwebtoken";


interface dashboardProps{
    searchParams:{
      event:string
    }
  }

const DashboardPage:FC<dashboardProps> = ({searchParams}) => {
    const authToken = cookies().get("authTokenDDT");

    if(authToken && authToken.value.trim()!==''){
        try{
            jwt.verify(authToken.value,process.env.JWT_SECRET!);
        }catch(err){
            redirect("/admin");
        }
    }else{
        redirect("/admin");
    }
  return (
    <div>
        <div className="container mx-auto">
            <Dashboard event={searchParams.event}/>
        </div>
    </div>
  )
}

export default DashboardPage