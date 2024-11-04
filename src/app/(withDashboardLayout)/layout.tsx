"use client";
import MyDrawer from "@/components/ui/MyDrawer/MyDrawer";
import ProtectedRoute from "@/components/ui/ProtectedRoute/ProtectedRoute";
import { Layout } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname to track route
import React, { useEffect, useState } from "react";
import { LuWallet } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
import { PiNewspaperBold, PiSpeakerHighBold } from "react-icons/pi";

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Track current route path to conditionally apply styles
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    // Update activeRoute state on route change
    setActiveRoute(pathname);
  }, [pathname]);

  return (
    <Layout className="h-screen overflow-hidden">
      <Layout>
        <Header className="bg-white shadow">
          <MyDrawer title="Menu" className="block md:hidden ">
            <div className="h-full bg-[#001529] pt-5">
              {/* Mobile Menu Items */}
            </div>
          </MyDrawer>
        </Header>
        <Layout>
          <Sider
            className="hidden md:block h-full mt-8 bg-white pt-5 rounded"
            trigger={null}
            collapsible
            collapsed={false}
            width={260}
          >
            <div className="flex flex-col gap-2">
              {/* My Wallet menu item with conditional active styling */}
              <Link href="/dashboard/my-wallet">
                <div
                  className={`flex items-center gap-2 ms-7 ps-5 py-3 cursor-pointer ${
                    activeRoute === "/dashboard/my-wallet"
                      ? "bg-gradient-to-r from-[#ebe3fb] to-transparent border-s-4 border-primary text-primary rounded-s-md"
                      : "text-[#1D2939]"
                  }`}
                >
                  <LuWallet size={22} />
                  <p>My Wallet</p>
                </div>
              </Link>

              {/* Personal Information menu item */}
              <Link href="/dashboard/personal-information">
                <div
                  className={`flex items-center gap-2 ms-7 ps-5 py-3 cursor-pointer ${
                    activeRoute === "/dashboard/personal-information"
                      ? "bg-gradient-to-r from-[#ebe3fb] to-transparent border-s-4 border-primary text-primary rounded-s-md"
                      : "text-[#1D2939]"
                  }`}
                >
                  <MdPersonOutline size={22} />
                  <p>Personal Information</p>
                </div>
              </Link>

              {/* Enrolled Courses menu item */}
              <Link href="/dashboard/enrolled-courses">
                <div
                  className={`flex items-center gap-2 ms-7 ps-5 py-3 cursor-pointer ${
                    activeRoute === "/dashboard/enrolled-courses"
                      ? "bg-gradient-to-r from-[#ebe3fb] to-transparent border-s-4 border-primary text-primary rounded-s-md"
                      : "text-[#1D2939]"
                  }`}
                >
                  <PiNewspaperBold size={22} />
                  <p>Enrolled Courses</p>
                </div>
              </Link>

              {/* Announcement menu item */}
              <Link href="/dashboard/announcement">
                <div
                  className={`flex items-center gap-2 ms-7 ps-5 py-3 cursor-pointer ${
                    activeRoute === "/dashboard/announcement"
                      ? "bg-gradient-to-r from-[#ebe3fb] to-transparent border-s-4 border-primary text-primary rounded-s-md"
                      : "text-[#1D2939]"
                  }`}
                >
                  <PiSpeakerHighBold size={22} />
                  <p>Announcement</p>
                </div>
              </Link>
            </div>
          </Sider>
          <Content
            className="overflow-x-hidden"
            style={{
              margin: "24px 16px",
              minHeight: 280,
            }}
          >
            <ProtectedRoute>{children}</ProtectedRoute>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
