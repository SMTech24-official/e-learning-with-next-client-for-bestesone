export interface ChildCategory {
    id: string;
    name: string;
  }
  
  export  interface SubCategory {
    id: string;
    name: string;
    childCategories?: ChildCategory[];
  }
  
  export interface Category {
    id: string;
    name: string;
    subCategories?: SubCategory[];
  }