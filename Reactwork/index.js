// const a = document.getElementById("Div");
// const h1 = document.createElement("h1");
// h1.innerText="Hello JS";
// a[0].appendChild(h1);
// console.log(h1);

const p = document.getElementById("root");
const root=ReactDOM.createRoot(p);
// const h3 = React.createElement("h3",{style:{color:'red'}},"Hello React");
// const li1 = React.createElement("li",{},"Orange");
// const li2 = React.createElement("li",{},"Apple");
// const ul = React.createElement("ul",{},li1,li2);
// const div = React.createElement("div",{style:{backgroundColor:'cyan'}},h3,ul);

//JSX
const h2 = React.createElement("h2",{},"Starting Tag");
const h21 = <h2>Hello JSX in JS</h2>;

const li1 = <li>Orange</li>;
const li2 = <li>Banana</li>;
const li3 = <li>Apple</li>;
const li4 = <li>Pineapple</li>;
const ul = <ul style={{color:'red'}}>{li1}{li2}{li3}{li4}</ul>;

const container = (
    <div>
        <div><h2>Welcome to react application development</h2></div>
        <div>{ul}</div>
        <div>{h21}</div>
    </div>
);

root.render(container);