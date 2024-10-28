import { Category } from "@/types/type";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
    MdKeyboardArrowDown,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";




  

interface DropDownMultiMenuProps {
  menuData: Category[];
  title: string;
}

const DropDownMultiMenu: React.FC<DropDownMultiMenuProps> = ({ title, menuData }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<number | null>(
    null
  );

  useEffect(() => {
    setCategories(menuData);
  }, [menuData]);

  const handleCategoryToggle = (index: number) => {
    setActiveCategory(index === activeCategory ? index : index);
    setActiveSubCategory(null);
  };

  const handleSubCategoryToggle = (index: number) => {
    setActiveSubCategory(index === activeSubCategory ? index : index);
  };

  const closeMenus = () => {
    setActiveCategory(null);
    setActiveSubCategory(null);
    setDropdownVisible(false);
  };

  console.log(activeCategory);
  return (
    <div className="relative" onMouseLeave={closeMenus}>
      <div
        onMouseEnter={() => setDropdownVisible(true)}
        className="flex items-center justify-between gap-1 cursor-pointer py-3"
      >
        <p>{title}</p>

        <MdKeyboardArrowDown
          size={22}
        //   className={`transition-transform duration-200 ${
        //     isDropdownVisible ? "-rotate-90" : ""
        //   }`}
        />
      </div>

      {isDropdownVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-0 z-50 mt-11 bg-white border shadow-lg min-w-[200px]"
          onMouseLeave={closeMenus}
        >
          <ul>
            {categories?.map((category, categoryIndex) => (
              <li
                key={category.id}
                className="relative px-5 py-3 border-b border-[#E2E2E2]"
              >
                <div
                  className="flex items-center justify-between text-sm font-normal cursor-pointer hover:text-primary"
                  onMouseEnter={() => handleCategoryToggle(categoryIndex)}
                >
                  {/* <Link href={`/product-filter?category=${category.id}`}> */}
                    <span>{category.name}</span>
                  {/* </Link> */}
                  {category.subCategories && (
                    <MdOutlineKeyboardArrowRight
                      size={22}
                      className={`transition-transform duration-200 ${
                        activeCategory === categoryIndex ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </div>
                {activeCategory === categoryIndex &&
                  category?.subCategories && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-full top-0 min-w-[200px] bg-white border shadow-lg"
                    >
                      <ul>
                        {category.subCategories.map(
                          (subCategory, subCategoryIndex) => (
                            <li
                              key={subCategory.id}
                              className="relative px-4 py-3 border-b border-[#F5F5F5]"
                            >
                              <div
                                className="flex items-center justify-between text-sm font-normal cursor-pointer hover:text-primary"
                                onMouseEnter={() =>
                                  handleSubCategoryToggle(subCategoryIndex)
                                }
                              >
                                {/* <Link
                                  href={`/product-filter?subcategory=${subCategory.id}`}
                                > */}
                                  <span>{subCategory.name}</span>
                                {/* </Link> */}
                                {subCategory.childCategories && (
                                  <MdOutlineKeyboardArrowRight
                                    size={22}
                                    className={`transition-transform duration-200 ${
                                      activeSubCategory === subCategoryIndex
                                        ? "rotate-90"
                                        : ""
                                    }`}
                                  />
                                )}
                              </div>
                              {activeSubCategory === subCategoryIndex &&
                                subCategory.childCategories && (
                                  <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute left-full top-0 w-[180px] bg-white border shadow-lg"
                                  >
                                    <ul>
                                      {subCategory.childCategories.map(
                                        (childCategory) => (
                                          <li
                                            key={childCategory.id}
                                            className="px-4 py-3 border-b border-[#F5F5F5]"
                                          >
                                            {/* <Link
                                              href={`/product-filter?child_category=${childCategory.id}`}
                                            > */}
                                              <span className="text-sm font-normal hover:text-primary cursor-pointer">
                                                {childCategory.name}
                                              </span>
                                            {/* </Link> */}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </motion.div>
                                )}
                            </li>
                          )
                        )}
                      </ul>
                    </motion.div>
                  )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default DropDownMultiMenu;
