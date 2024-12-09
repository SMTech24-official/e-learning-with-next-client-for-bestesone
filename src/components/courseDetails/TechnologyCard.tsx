import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechnologyCard = () => {
  return (
    <Card className="w-full p-4 sm:py-9 sm:px-3 rounded-[20px] shadow">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Softwares You&apos;ll Learn
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-yellow-100">
            <span className="text-yellow-600 text-sm font-medium">JS</span>
          </div>
          <span className="text-gray-600 text-sm">JavaScript</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-100">
            <span className="text-blue-600 text-sm font-medium">C++</span>
          </div>
          <span className="text-gray-600 text-sm">C++</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-blue-600"
            >
              <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" />
              <path d="M12 2v20" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <span className="text-gray-600 text-sm">Python</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-blue-600"
            >
              <path d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              <path d="M9 3v18" />
              <path d="M14 3v18" />
            </svg>
          </div>
          <span className="text-gray-600 text-sm">VS Code</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-red-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-red-600"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <span className="text-gray-600 text-sm">Angular</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnologyCard;
