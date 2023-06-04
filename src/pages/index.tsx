import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/700.css";

import React from "react";
import { Redirect } from "@docusaurus/router";

export default function Home(): JSX.Element {
  return <Redirect to="/docs/overview" />;
}
