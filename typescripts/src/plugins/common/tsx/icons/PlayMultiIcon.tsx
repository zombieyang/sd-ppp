import React from "react";

export default class PlayMultiIcon extends React.Component<{ count: number }> {
    render() {
        return (
            <div slot="icon" className="sdppp-icon">
                <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M5.2 10.88L11.668 7 5.2 3.12v7.76zM4 2.414v9.174a.8.8 0 001.212.686l7.645-4.587a.8.8 0 000-1.372L5.212 1.727A.8.8 0 004 2.413zM1.5 1.6a.6.6 0 01.6.6v9.6a.6.6 0 11-1.2 0V2.2a.6.6 0 01.6-.6z"></path>
                    <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M.963 1.932a.6.6 0 01.805-.268l1 .5a.6.6 0 01-.536 1.073l-1-.5a.6.6 0 01-.269-.805zM3.037 11.132a.6.6 0 01-.269.805l-1 .5a.6.6 0 01-.536-1.073l1-.5a.6.6 0 01.805.268z"></path>
                </svg>{this.props.count}
            </div>
        )
    }
}
