import { Button, Htag, P, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
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
      <Tag color={"red"}>ярлык красны</Tag>
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
    </>
  );
}
