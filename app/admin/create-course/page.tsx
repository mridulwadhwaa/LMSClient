'use client'
import React from 'react'
import AdminSidebar from '../../components/Admin/Sidebar/AdminSidebar'
import Heading from '../../../app/utils/Heading'
import CreateCourse from '../../components/Admin/Course/CreateCourse'
import DashboardHeader from '../../../app/components/Admin/DashboardHeader'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Heading 
        title='LMS -Admin'
        description='It is a platform for the students to learn and get help from teachers'
        keywords='Programming,MERN,Redux,Machine Learning'
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
                <DashboardHeader />
                <CreateCourse />
            </div>
        </div>
    </div>
  )
}

export default page
