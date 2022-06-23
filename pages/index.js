import { useState } from "react";
export default function Home() {
  const [name, setName] = useStrate("");

  const data = fetch("/api/hello")
    .then((res) => res.json())
    .then((data) => setName(data.name));

  console.log(data);
  return <div>Hello</div>;
}
