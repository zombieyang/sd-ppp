import React from "react";

export default class LockIcon extends React.Component<{
    size?: number,
    unlockStyle?: boolean,
    onClick?: () => void
}> {
    render() {
        return (
            <div
                onClick={this.props.onClick}
                slot="icon"
                className="sdppp-icon"
            >
                {
                    this.props.unlockStyle ? (
                        <svg width={this.props.size || 20} height={this.props.size || 20} viewBox="0 0 330 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M15,160c8.284,0,15-6.716,15-15V85c0-30.327,24.673-55,55-55c30.327,0,55,24.673,55,55v45h-25   c-8.284,0-15,6.716-15,15v170c0,8.284,6.716,15,15,15h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15H170V85   c0-46.869-38.131-85-85-85S0,38.131,0,85v60C0,153.284,6.716,160,15,160z"/>
                            </g>
                        </svg>
                    ) : (
                        <svg width={this.props.size || 20} height={this.props.size || 20} viewBox="0 0 330 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85   S80.001,38.131,80.001,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M110.001,85   c0-30.327,24.673-55,54.999-55c30.327,0,55,24.673,55,55v45H110.001V85z"/>
                            </g>
                        </svg>
                    )
                }
            </div>
        )
    }
}
