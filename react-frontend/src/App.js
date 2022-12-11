import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1>Full-stack Dockerized Application</h1>
      <h3>Message from backend is:</h3>
      {message && <p>{message.message}</p>}
    </div>
  );
}

export default App;
