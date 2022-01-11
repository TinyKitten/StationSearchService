import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  DropdownItemProps,
  DropdownProps,
  Form,
  Input,
  InputOnChangeData,
} from "semantic-ui-react";
import styled from "styled-components";
import ContentContainer from "../components/ContentContainer";
import Routes from "../constants/routes";

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
const ButtonWrapper = styled.div`
  margin: 0 8px;
`;

enum DropdownOptionKeys {
  Station = "station",
  Line = "line",
}

const options: DropdownItemProps[] = [
  { text: "駅", value: DropdownOptionKeys.Station },
  // { text: "線", value: DropdownOptionKeys.Line },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [option, setOption] = useState(DropdownOptionKeys.Station);

  const router = useRouter();

  const handleSearchClick = () => {
    router.push({
      pathname: Routes.Search,
      query: { q: query, t: option },
    });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => setQuery(data.value.trim());
  const handleOptionChange = (
    event: React.SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) => {
    setOption(data.value as DropdownOptionKeys);
  };

  return (
    <Container fluid textAlign="center">
      <Head>
        <title>SSS</title>
      </Head>
      <ContentContainer>
        <Form>
          <Form.Field>
            <Input
              action={
                <Dropdown
                  button
                  basic
                  floating
                  options={options}
                  defaultValue="station"
                  onChange={handleOptionChange}
                />
              }
              icon="search"
              iconPosition="left"
              placeholder="検索"
              size="large"
              onChange={handleInputChange}
            />
          </Form.Field>
          <ButtonsContainer>
            <ButtonWrapper>
              <Button
                type="submit"
                size="large"
                disabled={!query.trim().length}
                primary
                onClick={handleSearchClick}
              >
                検索
              </Button>
            </ButtonWrapper>
            {/* <ButtonWrapper>
              <Button size="large">ランダム</Button>
            </ButtonWrapper> */}
          </ButtonsContainer>
        </Form>
      </ContentContainer>
    </Container>
  );
}
