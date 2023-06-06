import React, {  useState } from "react";

type Props = {
  name: string;
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AlwaysSuspend: React.FC = () => {
  console.log("AlwaysSuspend is rendered");
  throw sleep(1000);
};

export const SometimesSuspend: React.FC = () => {
  if (Math.random() < 0.5) {
    throw sleep(1000);
  }
  return <p>Hello, world!</p>;
};

export const RenderingNotifier: React.FC<Props> = ({ name }) => {
  console.log(`${name} is rendered`);
  return null;
};