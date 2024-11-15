import * as React from "react";
import styled from "styled-components";

type HUDProps = {
  children: React.ReactNode;
};

export default function HUD({ children }: HUDProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min(340px, 100%) 1fr;
  gap: 1rem;
  z-index: 100;

  padding-top: 1rem;

  & > * {
    grid-column: 2;
  }
`;
