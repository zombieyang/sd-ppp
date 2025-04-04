import React from "react";

export default class SaveIcon extends React.Component {
    render() {
        return (
            <div slot="icon" className="sdppp-icon" style={{
                strokeWidth: 1
            }}>
                <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.083 12.25H2.917a1.167 1.167 0 01-1.167-1.167V2.917A1.167 1.167 0 012.917 1.75h6.416l2.917 2.917v6.416a1.167 1.167 0 01-1.167 1.167z"></path>
                    <path d="M9.917 12.25V7.583H4.083v4.667M4.083 1.75v2.917H8.75"></path>
                </svg>
            </div>
        )
    }
}
