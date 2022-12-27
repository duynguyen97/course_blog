import { ComponentStoryObj, ComponentMeta } from "@storybook/react";

import { IconButton } from "./IconButton";

export default {
  title: "Controls/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const BasicIconButton: ComponentStoryObj<typeof IconButton> = {
  args: {
    name: "Home",
  },
};
