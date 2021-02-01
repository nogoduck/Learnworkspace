const items = [
  {
    name: "OvO",
    id: "22",
  },
  {
    name: "^[OO]^",
    id: "GG",
  },
  {
    name: "NAS HDD",
    id: "ssd",
  },
  {
    name: "Y_Y",
    id: "1004",
  },
];

function Food({ name, id }) {
  return (
    <div>
      <h3>I LOVE {name}</h3>
      <h4>{id}</h4>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {items.map((a) => (
        <Food key={a.id} name={a.name} id={a.id} />
      ))}
    </div>
  );
}

export default App;
