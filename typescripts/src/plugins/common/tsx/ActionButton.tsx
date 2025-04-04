import React from "react";

export default class ActionButton extends React.Component<{
    onClick?: (...args: any[]) => any
    highlight?: boolean
    children?: React.ReactNode
}> {
    render() {
        return (
            <div className={`action-button ${this.props.highlight ? 'highlight' : ''}`} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    }
}
