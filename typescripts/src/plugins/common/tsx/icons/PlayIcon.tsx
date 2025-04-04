import React from "react";

export default class PlayIcon extends React.Component<{
    size?: number
}> {
    render() {
        const size = this.props.size || 1
        return (
            <div slot="icon" className="sdppp-icon">
                <svg width={20 * size} height={20 * size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M4.2 10.88L10.668 7 4.2 3.12v7.76zM3 2.414v9.174a.8.8 0 001.212.686l7.645-4.587a.8.8 0 000-1.372L4.212 1.727A.8.8 0 003 2.413z"></path>
                </svg>
            </div>
        )
    }
}
