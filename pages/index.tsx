import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearance={"ghost"} className="sdsdsd">
        Кнопка
      </Button>
    </>
  );
}
