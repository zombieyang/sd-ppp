import React from "react";

export default class LivePaintingIcon extends React.Component<{
    size?: number,
    onClick?: (...args: any[]) => any
}> {
    render() {
        const size = this.props.size || 1
        return (
            <div slot="icon" className="sdppp-icon" onClick={this.props.onClick}>
                <svg width={20 * size} height={20 * size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M5.5 1A.5.5 0 005 .5H2a.5.5 0 000 1h1.535a6.502 6.502 0 002.383 11.91.5.5 0 10.165-.986A5.502 5.502 0 014.5 2.1V4a.5.5 0 001 0V1.353a.5.5 0 000-.023V1zM7.507 1a.5.5 0 01.576-.41 6.502 6.502 0 012.383 11.91H12a.5.5 0 010 1H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.9A5.5 5.5 0 007.917 1.576.5.5 0 017.507 1z" ></path>
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M6.2 9.08L9.068 7 6.2 4.92v4.16zM5 4.214v5.574a.8.8 0 001.212.686l4.445-2.787a.8.8 0 000-1.372L6.212 3.527A.8.8 0 005 4.213z"></path>
                </svg>
            </div>
        )
    }
}