import React from "react";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr min(340px, 100%) 1fr;
  gap: 1rem;

  padding-top: 1rem;

  & > * {
    grid-column: 2;
  }
`;

export default Layout;
