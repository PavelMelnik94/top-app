import React, { useState, useEffect } from "react";
import { Button, Htag, P, Tag } from "../components";
import { Rating } from "../components/Rating/Rating";
import { Layout, withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
      <Htag tag="h1">Текст h1</Htag>
      <Htag tag="h2">Текст h2</Htag>
      <Htag tag="h3">Текст h3</Htag>
      <Button appearance={"ghost"} arrow={"right"} className="sdsdsd">
        Кнопка
      </Button>
      <Button appearance={"primary"} arrow={"down"} className="sdsdsd">
        button
      </Button>

      <P size="s">paragraph 'S'</P>
      <P size="m">paragraph 'M'</P>
      <P size="l">paragraph 'L'</P>
      <Tag color={"ghost"}>ярлык стандартный</Tag>
      <Tag color={"red"}>ярлык красный</Tag>
      <Tag color={"gray"}>ярлык серый</Tag>
      <Tag color={"green"}>ярлык зеленый</Tag>
      <Tag color={"primary"}>ярлык primary</Tag>
      <br />
      <br />
      <Tag color={"ghost"} size="s">
        размер S
      </Tag>
      <Tag color={"ghost"}>размер M</Tag>
      <Tag color={"ghost"} href={"google.com"}>
        ссылка
      </Tag>

      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </Layout>
  );
}

export default withLayout(Home);
