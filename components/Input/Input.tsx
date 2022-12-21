import { FC, ChangeEventHandler, InputHTMLAttributes, ReactChild } from "react";
import styled from "@emotion/styled";

import { Icon, AvailableIcons } from "@/components/Icon/Icon";
import { boxShadow } from "@/components/styles";

const StyledInput = styled.input`
  all: unset;
  border-radius: 1rem;
  font-size: 1.4rem;
  width: ${({ width }) => width}rem;
  height: ${({ height }) => height}rem;
  color: ${({ theme }) => theme.font.regular};
  padding: 0 2.6rem 0 1.4rem;
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2, true)}
  &::placeholder {
    color: ${({ theme }) => theme.font.placeholder};
  }
  &:focus {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow2)}
    ~ svg {
      color: ${({ theme }) => theme.font.regular};
      opacity: 1;
    }
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: ${({ theme }) => theme.font.regular};
  font-size: 1rem;
  padding-left: 1.4rem;
`;

const StyledIcon = styled(Icon)`
  margin-left: -2.5rem;
  color: ${({ theme }) => theme.font.placeholder};
  opacity: 0.7;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.span`
  padding-left: 1.4rem;
`;

export type Props = {
  label?: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  icon?: AvailableIcons;
  feedback?: ReactChild;
  height?: number;
  width?: number;
};

export const Input: FC<Props & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  height = 4,
  width = 20,
  icon,
  feedback,
  ...props
}) => (
  <Label>
    {label && <Text>{label}</Text>}
    <InputWrapper>
      <StyledInput height={height} width={width} {...props} />
      {icon && <StyledIcon name={icon} />}
    </InputWrapper>
    {feedback && <Text>{feedback}</Text>}
  </Label>
);
