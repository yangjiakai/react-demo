

import React from 'react'


// Create a new component called Button
class Button extends React.Component {
    // clickHandler
    handleClick = () => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }

    // Render the component
    render() {
        return (
            <div>
                <button>Click Me!</button>
            </div>
        )
    }
}


export default Button;