import Image, { StaticImageData } from "next/image";

type CategoryCardProps = {
  image: StaticImageData | string; // Depending on image source
  category: string;
  course: string;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  category,
  course,
}) => {
  return (
    <div className="w-full md:w-[300px] h-[100px] flex flex-row gap-5 rounded-xl bg-primary-light">
      <div className="rounded-xl">
        <Image
          className="rounded-l-xl w-full h-full"
          src={image}
          width={100}
          height={100}
          alt="Category-image"
        />
      </div>
      <div className="flex flex-col justify-center gap-y-3">
        <h1 className="text-base text-black font-semibold">{category}</h1>
        <p className="text-sm text-gray-500">{course} Course</p>
      </div>
    </div>
  );
};

export default CategoryCard;
