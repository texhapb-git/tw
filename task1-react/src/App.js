import { useState } from "react";
import { TimerForm } from "./components/TimerForm";
import { Countdown } from "./components/Countdown";

function App() {
  const [lastTime, setLastTime] = useState(0);

  return (
    <>
      {!lastTime ? <TimerForm init={setLastTime} /> : <Countdown eventLastTime={lastTime} init={setLastTime} />}
    </>
  );
}

export default App;
