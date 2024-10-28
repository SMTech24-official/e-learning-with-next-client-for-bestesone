"use client";
import bannerImage from "@/assets/home/banner.jpg";
import { Button } from "@/components/ui/button";
import DropDownMultiMenu from "@/components/ui/DropDownMultiMenu/DropDownMultiMenu";
import MultiLayerMenu from "@/components/ui/MultiLayerMenu/MultiLayerMenu";
import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { Category } from "@/types/type";
import { ConfigProvider, Drawer, Select } from "antd";
import Image from "next/image";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";

const mockCategories: Category[] = [
  {
    id: "1",
    name: "Centers",
    subCategories: [
      {
        id: "1-1",
        name: "Technology Centers",
        childCategories: [
          { id: "1-1-1", name: "IT Training" },
          { id: "1-1-2", name: "Computer Repairs" },
        ],
      },
      {
        id: "1-2",
        name: "Fitness Centers",
        childCategories: [
          { id: "1-2-1", name: "Gym Memberships" },
          { id: "1-2-2", name: "Personal Training" },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "University",
    subCategories: [
      {
        id: "2-1",
        name: "Undergraduate",
        childCategories: [
          { id: "2-1-1", name: "Bachelor of Science" },
          { id: "2-1-2", name: "Bachelor of Arts" },
        ],
      },
      {
        id: "2-2",
        name: "Graduate Programs",
        childCategories: [
          { id: "2-2-1", name: "Master of Science" },
          { id: "2-2-2", name: "Master of Arts" },
        ],
      },
    ],
  },
  {
    id: "3",
    name: "Collage",
    subCategories: [
      {
        id: "3-1",
        name: "Art Collage",
        childCategories: [
          { id: "3-1-1", name: "Painting" },
          { id: "3-1-2", name: "Sculpture" },
        ],
      },
      {
        id: "3-2",
        name: "Community Collage",
        childCategories: [
          { id: "3-2-1", name: "Local Events" },
          { id: "3-2-2", name: "Workshops" },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };
  const onClose = () => {
    setMenuOpen(false);
  };
  const handleSearch = () => {};
  return (
    <div className="border-b-2 border-[#F2F4F7] bg-white">
      {/* Pc Mode start */}
      <div className=" justify-between items-center gap-4 container hidden md:flex">
        {/* left side start */}
        <div className="flex items-center justify-center gap-6 py-5">
          <div className="overflow-hidden">
            <Image
              className="w-36"
              src={"https://i.ibb.co.com/s5vxFJb/image-32.png"}
              height={500}
              width={500}
              alt="Logo"
            />
          </div>

          <ul className="flex items-center space-x-4 text-[#344054] text-base font-normal whitespace-nowrap">
            <li className="text-sm font-medium">Home</li>
            <li className="text-sm font-medium">
              <DropDownMultiMenu title="Type of education" />
            </li>
            <li className="text-sm font-medium">Materials</li>
            <li className="text-sm font-medium">Map view</li>
          </ul>
        </div>
        {/* left side end */}
        {/* right side start */}
        <div className="flex items-center gap-5">
          <div className="border border-[#98A2B3] rounded-full flex items-center">
            <div className="border-r border-[#98A2B3]">
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      hoverBorderColor: "#fff",
                      activeBorderColor: "#fff",
                    },
                  },
                }}
              >
                <Select
                  variant="borderless"
                  placeholder="Category"
                  optionFilterProp="label"
                  className="w-24  placeholder:text-[#344054]"
                  onChange={onChange}
                  // onSearch={onSearch}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
              </ConfigProvider>
            </div>

            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 text-sm rounded-full border-none focus:outline-none"
              />

              <button className=" p-[10px] rounded-full bg-primary text-white m-1">
                <IoMdSearch />
              </button>
            </div>
          </div>
          <div
            className="relative  h-16 flex items-center"
            onMouseEnter={toggleDropdown}
            onMouseLeave={closeDropdown}
          >
            <div className="rounded-full h-11 w-11 overflow-hidden cursor-pointer ">
              <Image
                src={bannerImage} // Replace with your banner image source
                height={50}
                width={50}
                alt="Banner Image"
                className="object-contain rounded-full"
              />
            </div>
            <div className="absolute bottom-2 -right-1 bg-[#F2F4F7] p-[1px] rounded-full border-2 border-white">
              <FaAngleDown size={12} />
            </div>
            {isDropdownVisible && (
              <div className="absolute right-0 top-14  w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={closeDropdown}
                  >
                    My Profile
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={closeDropdown}
                  >
                    Logout
                  </li>
                  {/* Add other necessary items here */}
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={closeDropdown}
                  >
                    Settings
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Button className="py-[10px]">Login</Button>
        </div>
        {/* right side end */}
      </div>
      {/* Pc Mode end */}
      {/* Mobile Mode start */}
      <div className="mobile-navbar py-3 px-2 block md:hidden">
        <div className="flex items-center justify-between">
          <div className="" onClick={() => setMenuOpen(true)}>
            <HiOutlineMenuAlt1 size={20} />
          </div>

          <div className=" w-28 overflow-hidden">
            <Image
              className="w-36"
              src={"https://i.ibb.co.com/s5vxFJb/image-32.png"}
              height={500}
              width={500}
              alt="Logo"
            />
          </div>

          <Drawer
            // title="Basic Drawer"
            placement="left"
            width="90%"
            closable={false}
            onClose={onClose}
            open={menuOpen}
            closeIcon={
              <FaArrowLeftLong style={{ fontSize: "24px", color: "black" }} />
            }
            // extra={
            //   <Space>
            //     <Button onClick={onClose}>Cancel</Button>
            //     <Button type="primary" onClick={onClose}>
            //       OK
            //     </Button>
            //   </Space>
            // }
          >
            <div>
              {/* drawer header start */}
              <div className="flex items-center justify-between border-b-[1px] px-2 py-3">
                <div className=" w-28 overflow-hidden">
                  <Image
                    className="w-36"
                    src={"https://i.ibb.co.com/s5vxFJb/image-32.png"}
                    height={500}
                    width={500}
                    alt="Logo"
                  />
                </div>

                <div onClick={onClose}>
                  <IoMdClose size={25} />
                </div>
              </div>
              {/* drawer header end */}
              {/* drawer body start */}
              {/* account start */}
              <div className="my-2">
                <div
                  onClick={onClose}
                  className="mx-auto rounded-full border border-black p-1 w-min h-min"
                >
                  <BsPerson className="font-semibold text-black " size={18} />
                </div>
                <p className="text-center text-black -mt- text-xs">Profile</p>
              </div>

              <div className="border-t-[1px]  w-full py-3 text-base font-semibold">
                <MultiLayerMenu menuData={mockCategories} onClose={onClose} />
              </div>

              {/* drawer body end */}
            </div>
          </Drawer>
        </div>
        <div>
          <MyFormWrapper onSubmit={handleSearch} className="relative">
            <MyFormInput name="search" />

            <button
              type="submit"
              className="absolute bottom-2 right-2 text-white"
            >
              <BiSearchAlt2 className="text-[#00000099]" size={20} />
            </button>
          </MyFormWrapper>
        </div>
      </div>
      {/* Mobile Mode end */}
    </div>
  );
};

export default Navbar;
