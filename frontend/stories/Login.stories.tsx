import Login from "@/pages/login";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Pages/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

export const LoginPage = () => <Login />;
