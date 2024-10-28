/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Menu } from "antd";
import "./MultiLayerMenu.css";
import { Category, ChildCategory, SubCategory } from "@/types/type";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";

interface MultiLayerMenuProps {
  title?: string;
  menuData: Category[];
  onClose?: () => void;
}

// Function to create the item structure for Ant Design Menu
const createMenuItems = (menuData: Category[], onClose: () => void): any[] => {
  return menuData.map((item) => {
    if (item.subCategories) {
      return {
        key: item.id,
        label: item.name,
        children: createSubMenuItems(item.subCategories, onClose),
      };
    } else {
      return {
        key: item.id,
        label: item.name,
        onClick: onClose,
      };
    }
  });
};

// Function to create sub menu items
const createSubMenuItems = (
  subItems: SubCategory[],
  onClose: () => void
): any[] => {
  return subItems.map((subItem) => {
    if (subItem.childCategories) {
      return {
        key: subItem.id,
        label: subItem.name,
        children: createSubSubMenuItems(subItem.childCategories, onClose),
      };
    } else {
      return {
        key: subItem.id,
        label: subItem.name,
        onClick: onClose,
      };
    }
  });
};

// Function to create sub sub menu items
const createSubSubMenuItems = (
  subItems: ChildCategory[],
  onClose: () => void
): any[] => {
  return subItems.map((item) => ({
    key: item.id,
    label: item.name,
    onClick: onClose,
  }));
};

const MultiLayerMenu: React.FC<MultiLayerMenuProps> = ({
  title,
  menuData,
  onClose = () => {},
}) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const menuItems = createMenuItems(menuData, onClose);

  const handleCloseMenu = () => {
    setIsShowMenu(false);
  };

  return (
    <div>
      {title && (
        <div onClick={() => setIsShowMenu(!isShowMenu)} className="flex items-center justify-between z-10">
          <p>{title}</p>
          <MdKeyboardArrowDown
            size={22}
            className={`transition-transform duration-200 ${isShowMenu ? "-rotate-180" : ""}`}
          />
        </div>
      )}
      {isShowMenu && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-transparent"
          onMouseLeave={handleCloseMenu} // Closes the menu on mouse leave
        >
          <Menu
            style={{ border: "none" }}
            className="bg-transparent"
            mode={"inline"}
            theme={"light"}
            items={menuItems}
          />
        </motion.div>
      )}
    </div>
  );
};

export default MultiLayerMenu;
