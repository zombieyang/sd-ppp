import React from "react";

export default class StopIcon extends React.Component<{
    size?: number,
    hollowStyle?: boolean
}> {
    render() {
        return (
            <div slot="icon" className="sdppp-icon">
                <svg width={this.props.size || 20} height={this.props.size || 20} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11z" fill="currentColor"></path></svg>
            </div>
        )
    }
}
