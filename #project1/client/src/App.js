import PropTypes from "prop-types";

const items = [
  {
    id: 1,
    name: "duck",
    img:
      "https://images.unsplash.com/photo-1465153690352-10c1b29577f8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=358&q=80",
    rating: 4.5,
  },
  {
    id: 2,
    name: "poodle",
    img:
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvb2RsZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 3.4,
  },
  {
    id: 3,
    name: "schnauzer",
    img:
      "https://images.unsplash.com/photo-1585943870180-be99fca07f23?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNjaG5hdXplcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 5.0,
  },
];

function Food({ title, pic, rate }) {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{rate} / 5</h4>
      <p>
        <img src={pic} alt={title} />
      </p>
    </div>
  );
}

Food.propTypes = {
  title: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
};
function App() {
  return (
    <div className="App">
      {items.map((a) => (
        <Food key={a.id} title={a.name} pic={a.img} rate={a.rating} />
      ))}
    </div>
  );
}

export default App;
