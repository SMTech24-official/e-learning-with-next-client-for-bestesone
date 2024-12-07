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
      <div className=" justify-between items-center gap-4 container hidden lg:flex">
        {/* left side start */}
        <div className="flex items-center justify-center gap-6 py-5">
          <div className="overflow-hidden w-36">
            <Image
              src={"https://i.ibb.co.com/s5vxFJb/image-32.png"}
              height={500}
              width={500}
              alt="Logo"
            />
          </div>

          <ul className="flex items-center space-x-4 text-[#344054] text-base font-normal whitespace-nowrap">
            <li className="text-sm font-medium">Home</li>
            <li className="text-sm font-medium">
              <DropDownMultiMenu
                title="Type of education"
                menuData={mockCategories}
              />
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
      <div className="mobile-navbar py-3 px-2 block lg:hidden">
        <div className="flex items-center justify-between mb-2">
          <div className=" w-28 overflow-hidden">
            <Image
              className="w-36"
              src={"https://i.ibb.co.com/s5vxFJb/image-32.png"}
              height={500}
              width={500}
              alt="Logo"
            />
          </div>
          <div className="" onClick={() => setMenuOpen(true)}>
            <HiOutlineMenuAlt1 size={25} />
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
          >
            <>
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
              <div>
                <div className="flex items-center gap-4 m-3">
                  <div className="rounded-full h-12 w-12 overflow-hidden">
                    <Image
                      src={bannerImage}
                      height={70}
                      width={70}
                      alt="Banner Image"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-base font-medium mb-2">Abdul Ahad</p>
                  </div>
                </div>

                <p className="border-y-[1px]  w-full ps-3 py-3 text-base font-semibold">
                  Home
                </p>

                <div className="  w-full px-3 py-3 text-base font-semibold">
                  <MultiLayerMenu
                    menuData={mockCategories}
                    title="Type of education"
                    onClose={onClose}
                  />
                </div>
                <p className="border-y-[1px] w-full ps-3 py-3 text-base font-semibold">
                  Materials
                </p>
                <p className="border-y-[1px] w-full ps-3 py-3 text-base font-semibold">
                  Map view
                </p>
                <Button className="m-3 py-2">Logout</Button>
              </div>
              {/* drawer body end */}
            </>
          </Drawer>
        </div>
        <div>
          <MyFormWrapper onSubmit={handleSearch}>
            <div className="relative">
              <MyFormInput name="search" inputClassName="" />
              <button
                type="submit"
                className="absolute bottom-[1px] right-[1px] rounded-md text-white bg-primary p-[9px]"
              >
                <BiSearchAlt2 className="text-white   " size={20} />
              </button>
            </div>
          </MyFormWrapper>
        </div>
      </div>
      {/* Mobile Mode end */}
    </div>
  );
};

export default Navbar;
