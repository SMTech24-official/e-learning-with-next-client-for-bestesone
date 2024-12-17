"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/my-ui/button";
import { Controller, useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";

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
  const { control, setValue } = useFormContext();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  useEffect(() => {
    // Synchronize the selected topics with the react-hook-form state when selectedTopics changes
    setValue("topics", selectedTopics);
  }, [selectedTopics, setValue]);

  // Function to toggle the selected topic
  const toggleTopic = (topicId: string) => {
    setSelectedTopics((prevSelectedTopics) => {
      const isTopicSelected = prevSelectedTopics.includes(topicId);
      return isTopicSelected
        ? prevSelectedTopics.filter((id) => id !== topicId) // Remove the topic if already selected
        : [...prevSelectedTopics, topicId]; // Add the topic if not selected
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Controller
        name="topics"
        control={control}
        rules={{ required: "At least one topic must be selected" }}
        render={({ fieldState: { error } }) => (
          <>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {topics.map((topic) => (
                <span
                  key={topic.id}
                  onClick={() => toggleTopic(topic.id)}
                  className={cn(
                    "border border-[#726986] hover:bg-primary/10 dark:border-primary dark:text-primary dark:hover:bg-primary/10 transition-colors p-3 rounded-lg",
                    selectedTopics.includes(topic.id)
                      ? "bg-primary-bold text-white hover:bg-primary"
                      : "text-primary-bold/50 hover:bg-primary hover:text-white"
                  )}
                >
                  {topic.name}
                </span>
              ))}
            </div>
            {error && <small style={{ color: "red" }}>{error.message}</small>}
          </>
        )}
      />
    </div>
  );
}
