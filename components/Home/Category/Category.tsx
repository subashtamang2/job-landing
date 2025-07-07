import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMegaphoneOutline } from "react-icons/io5";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdOutlineMedicalServices } from "react-icons/md";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";

const categoryData = [
  {
    id: 1,
    categoryName: "Accounting/Finance",
    openPositions: 2,
    icon: <GiTakeMyMoney className="w-10 h-10 text-blue-700 dark:text-white" />
  },
  {
    id: 2,
    categoryName: "Marketing",
    openPositions: 86,
    icon: <IoMegaphoneOutline className="w-10 h-10 text-blue-700 dark:text-white" />

  },
  {
    id: 3,
    categoryName: "Design",
    openPositions: 43,
    icon: <PiPaintBrushDuotone className="w-10 h-10 text-blue-700 dark:text-white" />

  },
  {
    id: 4,
    categoryName: "Development",
    openPositions: 12,
    icon: <FaLaptopCode className="w-10 h-10 text-blue-700 dark:text-white" />

  },
  {
    id: 5,
    categoryName: "Project Management",
    openPositions: 2,
    icon: <IoMegaphoneOutline className="w-10 h-10 text-blue-700 dark:text-white" />

  },
  {
    id: 6,
    categoryName: "Customer Service",
    openPositions: 2,
    icon: <RiCustomerService2Fill className="w-10 h-10 text-blue-700 dark:text-white" />

  },
  {
    id: 7,
    categoryName: "Health and Care",
    openPositions: 25,
    icon: <MdOutlineMedicalServices className="w-10 h-10 text-blue-700 dark:text-white" />

  },
  {
    id: 8,
    categoryName: "Automotive Jobs",
    openPositions: 92,
    icon: <LiaCarSideSolid className="w-10 h-10 text-blue-700 dark:text-white" />

  },

];
const Category = () => {
  return <div className="pt-16 pb-16">Category</div>;
};
export default Category