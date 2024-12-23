import { z } from "zod";

export const topicSchema = z.object({
  interest: z.array(z.string()).min(1, "At least one topic must be selected"),
});
