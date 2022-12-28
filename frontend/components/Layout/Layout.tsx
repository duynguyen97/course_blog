import { useState, useLayoutEffect, useEffect, FC } from "react";
import Link from "next/link";
import { ThemeProvider } from "@emotion/react";

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

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const Layout: FC = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleDark = () => {
    localStorage.setItem("theme", isDark ? "light" : "dark");
    setIsDark(!isDark);
  };

  useIsomorphicLayoutEffect(() => {
    const isDark =
      Boolean(localStorage.getItem("theme") === "dark") ||
      window.matchMedia("prefers-color-scheme: dark").matches;

    setIsDark(isDark);
  }, []);

  const theme = Themes[isDark ? "dark" : "light"];

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Link href="/" passHref>
          <LogoLink>
            <StyledLogo
              width={60}
              height={60}
              src={logo}
              alt="logo-blog"
            ></StyledLogo>
          </LogoLink>
        </Link>
        <MainNav>
          <Link href="/all" passHref>
            <StyledLink>All</StyledLink>
          </Link>
          <Link href="/login" passHref>
            <IconButton name="Login" size={1} />
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
