"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/my-ui/button";

type Topic = {
  id: string;
  name: string;
};

const topics: Topic[] = [
  { id: "business", name: "Business" },
  { id: "science-econom", name: "Science Econom" },
  { id: "arts", name: "Arts" },
  { id: "digital-marketing", name: "Digital Marketing" },
  { id: "chemistry", name: "Chemistry" },
  { id: "math", name: "Math" },
  { id: "cemetery", name: "Cemetery" },
  { id: "english", name: "English" },
  { id: "biology", name: "Biology" },
  { id: "ux-ui-design", name: "UX/UI Design" },
  { id: "web-development", name: "Web Development" },
  { id: "mobile-apps-development", name: "Mobile Apps Development" },
  { id: "others", name: "Others" },
  { id: "tech", name: "Tech" },
];

export default function TopicSelector() {
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());

  const toggleTopic = (topicId: string) => {
    const newSelectedTopics = new Set(selectedTopics);
    if (newSelectedTopics.has(topicId)) {
      newSelectedTopics.delete(topicId);
    } else {
      newSelectedTopics.add(topicId);
    }
    setSelectedTopics(newSelectedTopics);
  };

  const handleGetStarted = () => {
    console.log("Selected topics:", Array.from(selectedTopics));
    // Handle the selected topics here
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {topics.map((topic) => (
          <Button
            variant={"outline"}
            key={topic.id}
            onClick={() => toggleTopic(topic.id)}
            className={cn(
              " hover:bg-primary/10 dark:border-primary dark:text-primary dark:hover:bg-primary/10 transition-colors",
              selectedTopics.has(topic.id)
                ? "bg-primary-bold text-white hover:bg-primary"
                : " text-primary-bold/50 hover:bg-primary hover:text-white"
            )}
          >
            {topic.name}
          </Button>
        ))}
      </div>
      <Button
        onClick={handleGetStarted}
        className="w-full bg-primary hover:bg-primary text-white py-2 rounded-lg text-base font-medium"
      >
        Get Started
      </Button>
    </div>
  );
}
