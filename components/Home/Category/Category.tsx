import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoMegaphoneOutline } from "react-icons/io5";
import { LiaCarSideSolid } from "react-icons/lia";
import { MdOutlineMedicalServices } from "react-icons/md";
import { PiPaintBrushDuotone } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";
import CategoryCard from "./CategoryCard";

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
  return <div className="pt-16 pb-16">
    <SectionHeading
      heading="Popular Job Categories"
      subHeading="2020 jobs live -293 added today ." />
    <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categoryData.map((category, index) => {
        return <div
          key={category.id}
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay={index * 100}

        >
          <CategoryCard category={category} />
        </div>;
      })}
    </div>

  </div>;
};
export default Category