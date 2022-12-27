import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Layout } from "./Layout";

export default {
  title: "Content/Layout",
  component: Layout,
  argTypes: {
    feedback: {
      children: false,
    },
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;
export const BasicLayout = Template.bind({});

BasicLayout.args = {
  children: (
    <>
      <h1>Main article area</h1>
      <p>
        In this layout, we display the areas in source order for any screen less
        that 500 pixels wide. We go to a two column layout, and then to a three
        column layout by redefining the grid, and the placement of items on the
        grid.
      </p>
    </>
  ),
};
