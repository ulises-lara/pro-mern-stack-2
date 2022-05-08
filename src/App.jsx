const continents = ["Africa", "America", "Asia", "Australia", "Europe"];
const helloContinents = Array.from(continents, c => `Hello ${c}!`);
const message = helloContinents.join(" ");

class HelloWorld extends React.Component {
    render() {
        return (
            <div title="Outer div">
                <h1>{message}</h1>
            </div>
        );
    }
}

const element = (
    <div title="Outer div">
        <h1>{message}</h1>
    </div>
);

ReactDOM.render(element, document.getElementById("content"));
