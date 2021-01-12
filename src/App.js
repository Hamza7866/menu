import "./App.css";
import menu from "./menu";
function App() {
  return (
    <div className="App">
      <h1>Food Menu😍</h1>
      {menu.map((item) => {
        return (
          <div className="container" key={item.id}>
            <img src={item.img} alt="" />
            <div className="title">
              <h2>{item.title}</h2>
              <h3>Category:{item.category}</h3>
            </div>
            <div className="price">
              <p className="text">{item.desc}</p>
              <p>Price: ${item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
