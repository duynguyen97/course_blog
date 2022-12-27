import { FC } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import { Input } from "@/components/Input";
import { IconButton } from "@/components/IconButton/IconButton";
import logo from "../../public/blogger.svg";
import Image from "next/image";

const Wrapper = styled.div`
  display: grid;
  gap: 0.1rem;
  color: ${({ theme }) => theme.font.regular};
  background-color: ${({ theme }) => theme.background};
  padding: 0.5rem;
  grid-template-areas:
    "header  nav"
    "search  search"
    "content content"
    "footer  footer";
  nav {
    flex-direction: row;
    justify-content: flex-end;
    gap: 5vmin;
  }
  @media (min-width: 500px) {
    grid-template-columns: 1fr 3fr;
  }
  @media (min-width: 960px) {
    grid-template-columns: 1fr 4fr 2fr;
    grid-template-areas:
      "header  search  nav"
      "content content content"
      "footer  footer  footer";
  }
`;

const StyledLogo = styled(Image)`
  grid-area: header;
  display: flex;
  align-items: center;
  height: 4rem;
  justify-content: flex-start;
  @media (max-width: 500px) {
    & .logo_full {
      display: none;
    }
    @media (min-width: 560px) {
      & .logo_short {
        display: none;
      }
      & .logo_full {
        display: inline;
      }
    }
  }
`;

const LogoLink = styled.a`
  all: unset;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const MainNav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 2vmin;
  a {
    cursor: pointer;
    color: ${({ theme }) => theme.font.regular};
    &:hover {
      opacity: 0.7;
    }
  }
`;

const SearchInput = styled(Input)`
  grid-area: search;
  width: 100%;
  height: 4rem;
`;

const Content = styled.main`
  grid-area: content;
`;

const Footer = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 5rem;
`;

type Props = {
  isDark: boolean;
  onThemeToggle: () => void;
  children: JSX.Element;
};

export const Layout: FC<Props> = ({ children, isDark, onThemeToggle }) => (
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
      <Link href="/all">All</Link>
      <Link href="/news">News</Link>
      <IconButton
        name={isDark ? "Moon" : "Sun"}
        size={1}
        onClick={onThemeToggle}
      />
    </MainNav>
    <SearchInput icon="Search" placeholder="Search" onChange={() => null} />
    <Content>{children}</Content>
    <Footer>© {new Date().getFullYear()} Duynb. All rights reserved.</Footer>
  </Wrapper>
);