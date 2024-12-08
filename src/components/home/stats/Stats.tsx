import { Card, CardContent } from "@/components/ui/card";

interface Stat {
  value: string;
  label: string;
}

const Stats = () => {
  const stats: Stat[] = [
    { value: "100,000+", label: "Students worldwide" },
    { value: "200,00+", label: "Total course views" },
    { value: "5,000+", label: "Five-star course reviews" },
    { value: "5,000+", label: "Students community" },
  ];

  return (
    <div className="bg-primary">
      <div className="container">
        <Card className="text-white bg-transparent rounded-none border-0">
          <CardContent className="py-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Stats;
