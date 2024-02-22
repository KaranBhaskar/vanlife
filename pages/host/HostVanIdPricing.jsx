import React from "react";
import { useOutletContext } from "react-router-dom";
export default function HostVanIdPricing() {
  const van = useOutletContext();

  return <h3>${van.price}/day</h3>;
}
