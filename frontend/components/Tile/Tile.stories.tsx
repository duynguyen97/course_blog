import { screen } from "@storybook/testing-library";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";

import { Tile } from "./Tile";

export default {
  title: "Content/Tile",
  component: Tile,
} as ComponentMeta<typeof Tile>;

export const BasicTile: ComponentStoryObj<typeof Tile> = {
  args: {
    header: "Lorem ipsum dolor sit amet",
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
  },
};
