class HelloComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }

        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        var name = this.props.name;
        var counter = this.state.counter;

        return (
            <div>
                <p>Hello, {name}. This is HelloComponent</p>
                <p>The current counter value is: {counter}</p>
                <button onClick={this.handleIncrement} >Increment</button>
            </div>
        );
    }
}

ReactDOM.render(
    <HelloComponent name={"Felipe"} />,
    document.getElementById('app')
)