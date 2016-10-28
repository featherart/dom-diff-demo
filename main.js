const jsElem = document.getElementById('js');
const reactElem = document.getElementById('react');
const jsxElem = document.getElementById('jsx');

let nums = [1,2,3,4];

// imperative add
function add(arr) {
  let results = 0;
  for( let i = 0; i < arr.length; i++) {
    results += arr[i];
  }
  return results;
}

// declarative add
function add2(arr) {
  return arr.reduce((prev, current) => prev + current, 0)
}


class Add extends React.Component {

  render() {
    let arr = [3,6,9];
    return ReactDOM.render("p", {}, arr.reduce((prev, current) => prev + current, 0));
  }
}

let x = 0;
setInterval(() => {
  x++;
  jsElem.innerHTML = `<div>
                        <div>Hi JavaScript!</div>
                        <div id="date">${new Date()}</div>
                        <input type="text" />
                        <p id="nums">${add(nums)}</p>
                        <Add />
                      </div>`;

  ReactDOM.render(
    React.createElement("div", {},
      React.createElement("div", {}, "Hola React!"),
      React.createElement("div", {id: "date"}, new Date().toString()),
      React.createElement("input", {}),
      React.createElement("div", {id: "nums"}, add2(nums))
    ),
    reactElem
  );

}, 3000);

// ReactDOM.render(
//   <div id="jsx">Hello JSX</div>, jsxElem );
// );
