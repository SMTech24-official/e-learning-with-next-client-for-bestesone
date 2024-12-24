/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import bannerImage from "@/assets/home/banner.jpg";
import { Button } from "@/components/ui/my-ui/button";
import MyFormInput from "@/components/ui/MyForm/MyFormInput/MyFormInput";
import MyFormWrapper from "@/components/ui/MyForm/MyFormWrapper/MyFormWrapper";
import { ConfigProvider, Drawer, Select } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { MdOutlineShield } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { BiSearchAlt2 } from "react-icons/bi";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaRegEdit } from "react-icons/fa";
import checklist from "@/assets/checklist.png";
import coin from "@/assets/dollar.png";
import { Mail, Phone, User } from "lucide-react";
import LocationSearchModal from "@/components/location-modal/LocationSearchModal";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useGetUserQuery } from "@/redux/features/authSlice/authApi";
import { logout, setUser } from "@/redux/features/authSlice/authSlice";
import { useRouter } from "next/navigation";
// import CourseReviewModal from "@/components/CourseReview/CourseReviewModal";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const token = useAppSelector((state: RootState) => state.auth.token);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(token);

  const { data, error, isLoading } = useGetUserQuery(token);
  const { data: user } = data || {};
  const loggedUser = user?.student[0];
  console.log(user);
  console.log(user.student[0]);

  useEffect(() => {
    if (user && token) {
      dispatch(setUser({ token: token, user: user }));
    }
  }, [dispatch, token, user]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
    router.refresh();
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  // const [isReviewModalVisible, setReviewModalVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // const toggleReviewModal = () => {
  //   setReviewModalVisible(!isReviewModalVisible);
  // };

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
          <div className="overflow-hidden w-16">
            <Image
              src={logo}
              height={500}
              width={500}
              alt="Logo"
              className="w-full h-full"
            />
          </div>

          <ul className="flex items-center space-x-4 text-[#344054] text-base font-normal whitespace-nowrap">
            <Link href={"/"}>
              <li className="text-sm font-medium">Home</li>
            </Link>
            <Link href={"/all-courses"}>
              <li className="text-sm font-medium">Courses</li>
            </Link>
            <Link href={"/my-courses"}>
              <li className="text-sm font-medium">My Courses</li>
            </Link>
            <Link href={"/all-institute"}>
              <li className="text-sm font-medium">All Institutes</li>
            </Link>
            <li
              onClick={toggleModal}
              className="text-sm font-medium cursor-pointer"
            >
              Map view
            </li>
          </ul>
        </div>
        {/* map view modal */}

        {isModalVisible && (
          <div className="absolute  top-32  w-1/3 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <LocationSearchModal toggleModal={toggleModal} />
          </div>
        )}

        {/* Course Review Modal */}
        {/* {isReviewModalVisible && (
          <div className="absolute  top-32  w-1/3 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
            <CourseReviewModal toggleModal={ toggleReviewModal} />
          </div>
        )} */}

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
          {user ? (
            <>
              <div
                className="relative  h-16 flex items-center"
                onMouseEnter={toggleDropdown}
                onMouseLeave={closeDropdown}
              >
                <div className="rounded-full h-11 w-11 overflow-hidden cursor-pointer ">
                  <Image
                    src={bannerImage}
                    height={50}
                    width={50}
                    alt="Banner Image"
                    className="object-contain rounded-full"
                  />
                </div>
                <div className="absolute bottom-2 -right-1 bg-[#F2F4F7] p-[1px] rounded-full border-2 border-white">
                  {isDropdownVisible ? (
                    <FaAngleDown size={12} />
                  ) : (
                    <FaAngleUp size={12} />
                  )}
                </div>
                {isDropdownVisible && (
                  <div className="absolute right-0 top-14  w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <Card className="w-full">
                      <CardHeader className="space-y-6">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={loggedUser.profileImage} />
                            <AvatarFallback>AS</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h2 className="font-semibold text-base">
                              {loggedUser.name}
                            </h2>
                            <p className="text-xs text-muted-foreground">
                              {loggedUser?.email || "demo@example.com"}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center gap-4">
                          <div className="flex flex-col bg-primary/10 w-full h-full rounded-md items-center gap-2 px-3 py-1">
                            <div className="rounded-md  p-1">
                              <Image
                                src={checklist}
                                alt="dollar"
                                className="h-8 w-8"
                              />
                            </div>
                            <div className="text-sm flex">
                              <p className="font-medium">{loggedUser.enrolled || "0 Enrolled"}</p>
                            </div>
                          </div>
                          <div className="flex flex-col bg-primary/10 w-full h-full rounded-md items-center gap-2 px-3 py-1">
                            <div className="rounded-md  p-1">
                              <Image
                                src={coin}
                                alt="dollar"
                                className="h-8 w-8"
                              />
                            </div>
                            <div className="text-sm flex">
                              <p className="font-medium">{loggedUser.coin} Coin</p>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-base">
                            Personal Info
                          </h3>
                          <Button variant="ghost" size="sm" className="h-8 w-8">
                            <FaRegEdit className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-sm ">
                            <User className="h-8 w-8 border border-[#72698633] p-1 rounded text-gray-600" />
                            <span>{loggedUser.name}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Mail className="h-8 w-8 border border-[#72698633] p-1 rounded text-gray-600" />
                            <span>{loggedUser.email}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Phone className="h-8 w-8 border border-[#72698633] p-1 rounded text-gray-600" />
                            <span>{loggedUser.phone || "add number"}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <MdPayment className="h-8 w-8 border border-[#72698633] p-1 rounded text-gray-600" />
                            Payment History
                          </div>
                          <Link
                            className="flex items-center gap-3 text-sm"
                            href={"/terms-and-condition"}
                          >
                            <div className="flex items-center gap-3 text-sm">
                              <MdOutlineShield className="h-8 w-8 border border-[#72698633] p-1 rounded text-gray-600" />
                              <span>Terms & Conditions </span>
                            </div>
                          </Link>
                          <div className="flex items-center gap-3 text-sm">
                            <FiHelpCircle className="h-8 w-8 border border-[#72698633] p-1 rounded text-gray-600" />
                            <span>Help Center </span>
                          </div>
                          <div
                            onClick={handleLogout}
                            className="flex items-center gap-3 text-sm cursor-pointer"
                          >
                            <CgLogOut className="h-8 w-8 border border-[#72698633] p-1 rounded text-gray-600" />
                            Logout
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Link href={"/login"}>
              <Button className="py-[10px]">Login</Button>
            </Link>
          )}
        </div>
        {/* right side end */}
      </div>
      {/* Pc Mode end */}
      {/* Mobile Mode start */}
      <div className="mobile-navbar py-3 px-2 block lg:hidden">
        <div className="flex items-center justify-between mb-2">
          <div className=" w-28 overflow-hidden">
            <Link href={"/"}>
              <Image
                className="w-12 h-12"
                src={logo}
                height={500}
                width={500}
                alt="Logo"
              />
            </Link>
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
                {user ? (
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
                ) : (
                  <></>
                )}

                <Link href={"/"}>
                  <p className="border-y-[1px]  w-full ps-3 py-3 text-base font-semibold">
                    Home
                  </p>
                </Link>
                <Link href={"/all-courses"}>
                  <p className="border-y-[1px] w-full ps-3 py-3 text-base font-semibold">
                    Courses
                  </p>
                </Link>

                <p className="border-y-[1px] w-full ps-3 py-3 text-base font-semibold">
                  Map view
                </p>
                {user ? (
                  <Button onClick={handleLogout} className="m-3 py-2">
                    Logout
                  </Button>
                ) : (
                  <Button className="m-3 py-2">Login</Button>
                )}
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
