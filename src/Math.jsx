import {Component} from "react"

class Math extends Component {
    render() {
        // const result = this.props.a + this.props.b + this.props.c
        const result =
            <button style={{color: 'red'}} onClick={this.props.foo}>{this.props.a + this.props.b}</button>
        return (
            <div>
                {/*<button onClick={this.props.foo}>{result}</button>*/}
                {result}
            </div>
        )
    }
}

export default Math
