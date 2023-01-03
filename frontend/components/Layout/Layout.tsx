import { useState, useLayoutEffect, useEffect, FC } from "react";
import Link from "next/link";
import { ThemeProvider } from "@emotion/react";

import { AppDispatch, RootState } from "@/store";
import { Themes } from "@/styles/themes";
import logo from "../../public/blogger.svg";
import { IconButton } from "@/components/IconButton";
import { StyledLink } from "@/components/StyledLink";

import {
  Wrapper,
  LogoLink,
  StyledLogo,
  MainNav,
  SearchInput,
  Content,
  Footer,
} from "./components";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "@/services/userSlice";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const { username } = useSelector<RootState, RootState["user"]>(selectUser);
  const [isDark, setIsDark] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const toggleDark = () => {
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
  };

  useIsomorphicLayoutEffect(() => {
    dispatch(login());
    const isDark =
      Boolean(localStorage.getItem("theme") === "dark") ||
      window.matchMedia("prefers-color-scheme: dark").matches;

    setIsDark(isDark);
  }, []);

  const theme = Themes[isDark ? "dark" : "light"];

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <LogoLink href="/" passHref>
          <StyledLogo
            width={60}
            height={60}
            src={logo}
            alt="logo-blog"
          ></StyledLogo>
        </LogoLink>
        <MainNav>
          <StyledLink href="/all" passHref>
            All
          </StyledLink>
          <Link href={username ? "/user" : "/login"} passHref>
            <IconButton name={username ? "User" : "Login"} size={1} />
          </Link>
          <IconButton
            name={isDark ? "Moon" : "Sun"}
            size={1}
            onClick={toggleDark}
          />
        </MainNav>
        <SearchInput icon="Search" placeholder="Search" onChange={() => null} />
        <Content>{children}</Content>
        <Footer>
          © {new Date().getFullYear()} Duynb. All rights reserved.
        </Footer>
      </Wrapper>
    </ThemeProvider>
  );
};
