import { Card, CardDescription, CardTitle } from "../ui/card";
import Image, { StaticImageData } from "next/image";

interface Mentor {
  id: number | string;
  image: string | StaticImageData;
  name: string;
  title: string;
}

interface MentorsCardProps {
  mentor: Mentor;
}

const MentorsCard: React.FC<MentorsCardProps> = ({ mentor }) => {
  const { image, name, title } = mentor;
  return (
    
    <Card className="p-3">
      <div className="w-full rounded-xl">
        <Image src={image} alt="tutor-image" className="w-full rounded-xl" />
      </div>
      <div className="pt-6">
        <CardTitle className="text-2xl text-heading-text font-bold">
          {name}
        </CardTitle>
        <CardDescription className="text-sm text-heading-text font-normal">
          {title}
        </CardDescription>
      </div>
    </Card>
  );
};

export default MentorsCard;
