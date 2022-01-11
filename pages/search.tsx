import Head from "next/head";
import { useRouter } from "next/router";
import {
  Button,
  Container,
  Dimmer,
  Header,
  Label,
  List,
  Loader,
} from "semantic-ui-react";
import ContentContainer from "../components/ContentContainer";
import { parenthesisRegexp } from "../constants/regexp";
import useStationByName from "../hooks/useStationByName";

export default function Search() {
  const router = useRouter();
  const { loading, error, stations } = useStationByName(
    router.query.q as string | undefined
  );
  const handleBackClick = () => router.back();

  if (loading) {
    return (
      <Container text textAlign="center">
        <ContentContainer>
          <Dimmer active>
            <Loader inverted>Loading</Loader>
          </Dimmer>
        </ContentContainer>
      </Container>
    );
  }

  if (error) {
    return (
      <Container text textAlign="center">
        <ContentContainer>
          <Header as="h1">AN ERROR OCCURRED.</Header>
          <Header as="p">なんかエラー起きたくさい。ゆるして</Header>
        </ContentContainer>
      </Container>
    );
  }

  if (!stations) {
    return null;
  }

  return (
    <Container>
      <Head>
        <title>{router.query.q}で検索中 - SSS</title>
      </Head>

      <Button onClick={handleBackClick}>戻る</Button>
      <Header>
        {router.query.q}で検索しました({stations.length}駅)
      </Header>
      <List divided relaxed>
        {stations.map((s) => (
          <List.Item key={s.id}>
            <List.Content>
              <List.Header>{s.name}</List.Header>
              {s.address}
              <br />
              <List horizontal>
                {s.lines.map((l) => (
                  <List.Item key={l.id}>
                    <Label
                      style={{
                        color: "white",
                        backgroundColor: `#${l.lineColorC}`,
                      }}
                    >
                      {l.name.replace(parenthesisRegexp, "")}
                    </Label>
                  </List.Item>
                ))}
              </List>
            </List.Content>
          </List.Item>
        ))}
      </List>
      <Button onClick={handleBackClick}>戻る</Button>
    </Container>
  );
}
