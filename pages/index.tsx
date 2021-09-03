import { Button, Htag, P } from "../components";

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
    </>
  );
}
