import React from "react";

export default class FolderIcon extends React.Component<{
    size?: number
}> {
    render() {
        const size = this.props.size || 1
        return (
            <div slot="icon" className="sdppp-icon">
                <svg width={20 * size} height={20 * size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z"></path>
                </svg>
            </div>
        )
    }
}
