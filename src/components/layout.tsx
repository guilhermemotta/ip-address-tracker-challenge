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

  & > * {
    grid-column: 2;
  }
`;

export default Layout;
