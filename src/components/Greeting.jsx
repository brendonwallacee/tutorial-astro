import { useState } from "preact/hooks";

export default function Greeting({ olas, messages }) {
  const randomOla = () => olas[Math.floor(Math.random() * olas.length)];
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [ola, setOla] = useState(olas[0]);
  const [message, setMessage] = useState(messages[0]);

  return (
    <div>
      <h2>
        {ola}, {message}!
      </h2>
      <button
        onClick={() => {
          setOla(randomOla());
          setMessage(randomMessage());
        }}
      >
        Nova Saudação
      </button>
    </div>
  );
}
