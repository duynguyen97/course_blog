import Registration from "@/pages/registration";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Pages/Registration",
  component: Registration,
} as ComponentMeta<typeof Registration>;

export const RegistrationPage = () => <Registration />;
