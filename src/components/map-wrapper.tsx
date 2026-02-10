"use client";

import * as React from "react";

const ClientSideMap = React.lazy(() => import("./client-map"));

export function MapWrapper(props: { lat: number; long: number }) {
  const [isClientSide, setClientSide] = React.useState(false);

  React.useEffect(() => {
    setClientSide(true);
  }, []);

  if (!isClientSide) {
    // TODO: dedicidir se vale colocar um placeholder aqui
    return null;
  }

  return <ClientSideMap lat={props.lat} long={props.long} />;
}
