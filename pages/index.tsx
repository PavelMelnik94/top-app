import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance={"ghost"} arrow={"right"} className="sdsdsd">
        Кнопка
      </Button>
      <Button appearance={"primary"} arrow={"down"} className="sdsdsd">
        button
      </Button>
    </>
  );
}
