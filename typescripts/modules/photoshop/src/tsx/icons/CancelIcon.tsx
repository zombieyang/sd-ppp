import React from "react";

export default class CancelIcon extends React.Component<{
    size?: number,
}> {
    render() {
        return (
            <div slot="icon" className="sdppp-icon">
                <svg width={this.props.size || 20} height={this.props.size || 20} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Single diagonal line from bottom-left to top-right */}
                    <path d="M2.35 10.95L3.05 11.65L11.65 3.05L10.95 2.35L2.35 10.95Z" fill="currentColor"/>
                    
                    {/* Circle outline */}
                    <path d="M7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14ZM7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" fill="currentColor"/>
                </svg>
            </div>
        )
    }
}