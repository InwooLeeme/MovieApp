import React from "react";

function Food({ fav }){
  console.log(fav);
  return <h1>I love {fav}</h1>
}
// Component
function App() {
  return (
    <div className="App">
      <Food fav="kimchi"/>
      <Food fav="Ramen" />
      <Food fav="chukumi"/>
    </div>
    
  );
}

export default App;
