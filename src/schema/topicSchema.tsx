import { z } from "zod";

export const topicSchema = z.object({
  topics: z.array(z.string()).min(1, "At least one topic must be selected"),
});
