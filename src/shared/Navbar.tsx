"use client";
import { ConfigProvider, Select } from "antd";
import Image from "next/image";
import React from "react";
import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <div className="border-b-2 border-[#F2F4F7] bg-white">
      <div className="flex justify-between items-center container ">
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

          <ul className="flex space-x-4 text-[#344054] text-base font-normal">
            <li className="text-sm font-medium">Home</li>
            <li className="text-sm font-medium">About</li>
            <li className="text-sm font-medium">Courses</li>
            <li className="text-sm font-medium">Contact</li>
          </ul>
        </div>

        <div>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
