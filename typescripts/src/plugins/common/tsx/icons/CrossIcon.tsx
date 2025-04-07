import React from "react";

export default class CrossIcon extends React.Component<{
    size?: number,
    hollowStyle?: boolean
}> {
    render() {
        return (
            <div slot="icon" className="sdppp-icon">
                <svg width={this.props.size || 20} height={this.props.size || 20} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7879 2.2121C12.0732 2.49737 12.0732 2.96723 11.7879 3.2525L3.2525 11.7879C2.96723 12.0732 2.49737 12.0732 2.2121 11.7879C1.92684 11.5026 1.92684 11.0328 2.2121 10.7475L10.7475 2.2121C11.0328 1.92684 11.5026 1.92684 11.7879 2.2121Z" fill="currentColor" />
                    <path d="M2.2121 2.2121C2.49737 1.92684 2.96723 1.92684 3.2525 2.2121L11.7879 10.7475C12.0732 11.0328 12.0732 11.5026 11.7879 11.7879C11.5026 12.0732 11.0328 12.0732 10.7475 11.7879L2.2121 3.2525C1.92684 2.96723 1.92684 2.49737 2.2121 2.2121Z" fill="currentColor" />
                </svg>
            </div>
        )
    }
}