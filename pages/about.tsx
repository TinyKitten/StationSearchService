import Head from "next/head";
import { Container, Header } from "semantic-ui-react";

export default function About() {
  return (
    <Container text>
      <Head>
        <title>なにこれ - SSS</title>
      </Head>

      <Header as="h1">なにこれ</Header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </Container>
  );
}
