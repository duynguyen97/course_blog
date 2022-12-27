import { ComponentStoryObj, ComponentMeta } from "@storybook/react";

import { Feedback } from "./Feedback";

export default {
  title: "Controls/Feedback",
  component: Feedback,
} as ComponentMeta<typeof Feedback>;

export const ValidFeedback: ComponentStoryObj<typeof Feedback> = {
  args: {
    children: "Looks good!",
    isValid: true,
  },
};

export const InvalidFeedback: ComponentStoryObj<typeof Feedback> = {
  args: {
    children: "Please provide a valid value",
    isValid: false,
  },
};
