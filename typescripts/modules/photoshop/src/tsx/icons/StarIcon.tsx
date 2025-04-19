import React from "react";

export default class SaveIcon extends React.Component<{
    size?: number,
    hollowStyle?: boolean
}> {
    render() {
        return (
            <div slot="icon" className="sdppp-icon">
                {
                    this.props.hollowStyle ? (
                        <svg width={this.props.size || 20} height={this.props.size || 20} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.319.783a.75.75 0 011.362 0l1.63 3.535 3.867.458a.75.75 0 01.42 1.296L10.74 8.715l.76 3.819a.75.75 0 01-1.103.8L7 11.434l-3.398 1.902a.75.75 0 01-1.101-.801l.758-3.819L.401 6.072a.75.75 0 01.42-1.296l3.867-.458L6.318.783zm.68.91l-1.461 3.17a.75.75 0 01-.593.431l-3.467.412 2.563 2.37a.75.75 0 01.226.697l-.68 3.424 3.046-1.705a.75.75 0 01.733 0l3.047 1.705-.68-3.424a.75.75 0 01.226-.697l2.563-2.37-3.467-.412a.75.75 0 01-.593-.43L7 1.694z"></path>
                        </svg>
                    ): (
                        <svg width={this.props.size || 20} height={this.props.size || 20} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.68.783a.75.75 0 00-1.361 0l-1.63 3.535-3.867.458A.75.75 0 00.4 6.072l2.858 2.643-.758 3.819a.75.75 0 001.101.8L7 11.434l3.397 1.902a.75.75 0 001.102-.801l-.759-3.819L13.6 6.072a.75.75 0 00-.421-1.296l-3.866-.458L7.68.783z"></path>
                        </svg>
                    )
                }
            </div>
        )
    }
}
