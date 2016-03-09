var React = require('react');

class Hello extends React.Component {
    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}

export {Hello};