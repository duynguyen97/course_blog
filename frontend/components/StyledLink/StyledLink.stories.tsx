import { ComponentStoryObj, ComponentMeta } from "@storybook/react";

import { StyledLink } from "./StyledLink";

export default {
  title: "Content/StyledLink",
  component: StyledLink,
} as ComponentMeta<typeof StyledLink>;

export const BasicStyledLink: ComponentStoryObj<typeof StyledLink> = {
  args: {
    children: "Hands-On React. Build advanced React JS Frontend with expert",
    href: "/hands-on-react-js",
  },
};
