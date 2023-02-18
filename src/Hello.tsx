import React, { ReactElement } from "react";
import { useQuery } from "@apollo/client";

import { gql } from "../src/__generated__/gql";

const HELLO = gql(/* GraphQL */ `
  query Hello($name: String!) {
    hello(name: $name)
  }
`);

export function Hello({ name }: { name: string }): ReactElement {
  console.log("adskjfhadlskjfh");
  const { data } = useQuery(HELLO, { variables: { name } });
  console.log(data);

  return <p style={{ fontSize: 100 }}>{data?.hello}</p>;
}
