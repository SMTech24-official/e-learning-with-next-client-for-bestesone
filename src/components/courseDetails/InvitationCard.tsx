import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/my-ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const InvitationCard = () => {
  return (
    <Card className="w-full p-4 sm:py-9 sm:px-3 rounded-[20px] shadow">
      <CardHeader>
        <CardTitle className="text-center text-lg font-medium">
          Share and invite your friend get reward
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center md:justify-start gap-6 mb-2">
          <button className="text-primary hover:text-primary/50">
            <FaFacebookF size={24} />
          </button>
          <button className="text-primary hover:text-primary/50">
            <FaTwitter size={24} />
          </button>
          <button className="text-primary hover:text-primary/50">
            <RiInstagramFill size={24} />
          </button>
          <button className="text-primary hover:text-primary/50">
            <FaLinkedin size={24} />
          </button>
        </div>
        <Button
          variant="outline"
          className="w-full border-[#8B5CF6] text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white"
        >
          Click here for invitation link
        </Button>
      </CardContent>
    </Card>
  );
};

export default InvitationCard;
