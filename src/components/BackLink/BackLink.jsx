import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from '@emotion/styled'

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
  font-weight: 400;
  font-style: italic;

  :hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="20" />
      {children}
    </StyledLink>
  );
};