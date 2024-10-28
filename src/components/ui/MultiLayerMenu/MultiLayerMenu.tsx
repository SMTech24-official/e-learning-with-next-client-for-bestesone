/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Menu } from "antd";
import "./MultiLayerMenu.css";
import { Category, ChildCategory, SubCategory } from "@/types/type";

// const { SubMenu } = Menu;

interface MultiLayerMenuProps {
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
                children: createSubMenuItems(item.subCategories, onClose), // Create sub-items for this category
            };
        } else {
            return {
                key: item.id,
                label: item.name,
                onClick: onClose, // Trigger onClose when the item is clicked
            };
        }
    });
};

// Function to create sub menu items
const createSubMenuItems = (subItems: SubCategory[], onClose: () => void): any[] => {
    return subItems.map((subItem) => {
        if (subItem.childCategories) {
            return {
                key: subItem.id,
                label: subItem.name,
                children: createSubSubMenuItems(subItem.childCategories, onClose), // Create sub-sub-items for this sub-category
            };
        } else {
            return {
                key: subItem.id,
                label: subItem.name,
                onClick: onClose, // Trigger onClose when the item is clicked
            };
        }
    });
};

// Function to create sub sub menu items
const createSubSubMenuItems = (subItems: ChildCategory[], onClose: () => void): any[] => {
    return subItems.map((item) => ({
        key: item.id,
        label: item.name,
        onClick: onClose, // Trigger onClose when the item is clicked
    }));
};

const MultiLayerMenu: React.FC<MultiLayerMenuProps> = ({ menuData, onClose = () => {} }) => {
    const menuItems = createMenuItems(menuData, onClose); // Create menu items based on the menu data

    return (
        <div>
            <Menu style={{ border: "none" }} defaultOpenKeys={["sub1"]} mode={"inline"} theme={"light"} items={menuItems} /> {/* Use items prop */}
        </div>
    );
};

export default MultiLayerMenu;
