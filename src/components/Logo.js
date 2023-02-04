import styled from "styled-components";
const Logo = () => {
  return (
    <Wrapper>
      <span>ChICAGO</span>DEV
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  margin-bottom: 0;
  color: var(--clr-primary-5);
  span {
    color: var(--clr-grey-1);
  }
`;

export default Logo;
