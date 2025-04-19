import React from "react";

export default class EditIcon extends React.Component<{
    size?: number,
    onClick?: (...args: any[]) => any
}> {
    render() {
        const size = this.props.size || 1
        return (
            <div slot="icon" className="sdppp-icon" onClick={this.props.onClick}>
                <svg width={20 * size} height={20 * size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M13.854 2.146l-2-2a.5.5 0 00-.708 0l-1.5 1.5-8.995 8.995a.499.499 0 00-.143.268L.012 13.39a.495.495 0 00.135.463.5.5 0 00.462.134l2.482-.496a.495.495 0 00.267-.143l8.995-8.995 1.5-1.5a.5.5 0 000-.708zM12 3.293l.793-.793L11.5 1.207 10.707 2 12 3.293zm-2-.586L1.707 11 3 12.293 11.293 4 10 2.707zM1.137 12.863l.17-.849.679.679-.849.17z"></path>
                </svg>
            </div>
        )
    }
}
