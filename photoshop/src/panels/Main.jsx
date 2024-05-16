import React from "react";
import ComfyConnection from "../system/ComfyConnection";
import { storage, userInfo } from "uxp";

export default class Main extends React.Component {
    state = {
        comfyURL: '', 
        isConnected: false,
        userId: userInfo.userId().slice(0, 10),

        ui_ExpandMore: false,
    }

    componentDidMount() {
        ComfyConnection.onConnectStateChange(() => {
            const instance = ComfyConnection.instance
            console.log('isConnected：', instance?.isConnected)
            this.setState({
                isConnected: instance?.isConnected,
                comfyURL: instance ? instance.comfyURL : ''
            })
        });
        storage.secureStorage.getItem('userId').then((value) => {
            if (!value) return
            this.setState({ userId: Buffer.from(value).toString() })
            if (this.state.userId) {
                console.log('userId:', this.state.userId)
            }
        })
        storage.secureStorage.getItem('comfyURL').then((value) => {
            if (!value) return
            this.setState({ comfyURL: Buffer.from(value).toString() })
            if (this.state.comfyURL) {
                console.log('comfyURL:', this.state.comfyURL)
                this.doConnectOrDisconnect()
            }
        })
    }

    doConnectOrDisconnect() {
        if (!ComfyConnection.instance?.isConnected) 
            ComfyConnection.createInstance(this.state.comfyURL, this.state.userId);
        else 
            ComfyConnection.instance.disconnect();
    }

    render() {
        const expandMore = this.state.ui_ExpandMore;
        return (
            <> 
                <sp-textfield 
                    id="url-bar" 
                    label="ComfyURL" 
                    onInput={(ev) => { this.state.comfyURL = ev.currentTarget.value }} 
                    value={this.state.comfyURL} 
                    placeholder="http://127.0.0.1:8188"
                ></sp-textfield>
                <sp-divider />
                <div id="connection-more" className={expandMore ? "expand-menu expand" : "expand-menu collapse"}>
                    <div class="expand-menu-title" onClick={() => { this.setState({ui_ExpandMore: !expandMore}) }}>
                        <sp-label class="expand-menu-arrow">{expandMore ? "▼" : "▶️"}</sp-label>
                        {/* <sp-icon size="s" name={expandMore ? "ui:ChevronDownSmall" : "ui:ChevronRightSmall"}></sp-icon> */}
                        <sp-label>more</sp-label>
                    </div>
                    <div class="content">
                        <div class="input-row">
                            <sp-label>user-id:</sp-label>
                            <div class="input-label" id="user-id-bar">
                                <sp-label>{this.state.userId}</sp-label>
                                <sp-textfield 
                                    label="USER ID" 
                                    onInput={(ev) => { 
                                        const userID = ev.currentTarget.value;
                                        if (!userID) 
                                            storage.secureStorage.removeItem('userId');
                                        else {
                                            storage.secureStorage.setItem('userId', this.state.userId);
                                            this.setState({
                                                userId: userID
                                            })
                                        }
                                    }} 
                                    value={this.state.userId} 
                                    placeholder="User Name: Change if sharing remote server"
                                ></sp-textfield>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-box">
                    <sp-button 
                        id="connect-btn"
                        variant="primary"
                        onClick={this.doConnectOrDisconnect.bind(this)}
                    >{this.state.isConnected ? 'disconnect' : 'connect'}</sp-button>
                </div>

                <sp-divider size="small"></sp-divider>
            </>
        )
    }
} 
