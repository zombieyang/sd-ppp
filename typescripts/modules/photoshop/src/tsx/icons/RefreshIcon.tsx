import React from "react";

export default class RefreshIcon extends React.Component<{
    size?: number,
    onClick?: (...args: any[]) => any
}> {
    render() {
        const size = this.props.size || 1
        return (
            <div slot="icon" className="sdppp-icon" onClick={this.props.onClick}>
                <svg width={20 * size} height={20 * size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M7.092.5H7a6.5 6.5 0 106.41 7.583.5.5 0 10-.986-.166A5.495 5.495 0 017 12.5a5.5 5.5 0 010-11h.006a5.5 5.5 0 014.894 3H10a.5.5 0 000 1h3a.5.5 0 00.5-.5V2a.5.5 0 00-1 0v1.535A6.495 6.495 0 007.092.5z"></path>
                </svg>
            </div>
        )
    }
}
