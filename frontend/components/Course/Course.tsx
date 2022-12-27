import { FC } from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import styled from "@emotion/styled";

import { boxShadow, borderRadius } from "@/components/styles";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};
  ${borderRadius};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)};
  width: 94vw;
  @media (min-width: 900px) {
    width: 46vw;
  }
`;

const CourseLink = styled.div`
  padding: 1vmin 4vmin;
`;

export type Props = {
  header: string;
  link: string;
  imageProps: ImageProps;
  children: JSX.Element;
};

export const Course: FC<Props> = ({ children, header, link, imageProps }) => (
  <Section>
    <Link href={link} passHref>
      <CourseLink>
        <h2>{header}</h2>
        <Image {...imageProps} />
        {children}
      </CourseLink>
    </Link>
  </Section>
);
