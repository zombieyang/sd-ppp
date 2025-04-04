import React from "react";

export default class AgentIcon extends React.Component<{
    size?: number,
    onClick?: (...args: any[]) => any
}> {
    render() {
        const size = this.props.size || 1
        return (
            <div slot="icon" className="sdppp-icon" onClick={this.props.onClick}>
                <svg width={20 * size} height={20 * size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M10 7.854a4.5 4.5 0 10-6 0V13a.5.5 0 00.497.5h.006c.127 0 .254-.05.35-.146L7 11.207l2.146 2.147A.5.5 0 0010 13V7.854zM7 8a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-.354 2.146a.5.5 0 01.708 0L9 11.793v-3.26C8.398 8.831 7.718 9 7 9a4.481 4.481 0 01-2-.468v3.26l1.646-1.646z"></path>
                </svg>
            </div>
        )
    }
}