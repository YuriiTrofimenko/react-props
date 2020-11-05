function Math2 (props) {
    const result = props.a - props.b
    return (
        <div>
            {result} (the value of specProp is: {props.specProp})
        </div>
    )
}
Math2.defaultProps = {specProp: 'some value'}
export default Math2
