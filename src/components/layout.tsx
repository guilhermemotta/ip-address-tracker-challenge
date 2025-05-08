import React from "react";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.main`
  /* padding-top: 1rem; */

  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;

  & > * {
    grid-column: 2;
  }
`;

export default Layout;
