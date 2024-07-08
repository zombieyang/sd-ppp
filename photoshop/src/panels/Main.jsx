import React from "react";
import ComfyConnection from "../system/ComfyConnection";
import { storage } from "uxp";
export default class Main extends React.Component {
    state = {
        comfyURL: '', 
        isConnected: false,
        isReconnecting: false,
    }

    componentDidMount() {
        ComfyConnection.onConnectStateChange(() => {
            const instance = ComfyConnection.instance
            console.log('isConnected：', instance?.isConnected)
            this.setState({
                isConnected: instance?.isConnected,
                isReconnecting: instance?.isReconnecting,
                comfyURL: instance ? instance.comfyURL : ''
            })
        });
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
        console.log(ComfyConnection.instance?.isConnected, ComfyConnection.instance?.isReconnecting)
        if (ComfyConnection.instance?.isConnected || ComfyConnection.instance?.isReconnecting) 
            ComfyConnection.instance.disconnect();
        else 
            ComfyConnection.createInstance(this.state.comfyURL);
    }

    render() {
        return (
            <> 
                <sp-textfield 
                    id="url-bar" 
                    label="ComfyURL" 
                    onInput={(ev) => { this.state.comfyURL = ev.currentTarget.value }} 
                    value={this.state.comfyURL} 
                    placeholder="http://127.0.0.1:8188"
                ></sp-textfield>
                <div className="connect-box">
                    <div className={"status-bar " + (
                            this.state.isConnected ? 'connected' : (
                                this.state.isReconnecting ? 'reconnecting' :
                                'disconnected'
                            )
                        )}>
                        <div className="status-icon">⬤</div>
                        <div className="status-text">{(
                            this.state.isConnected ? 'connected' : (
                                this.state.isReconnecting ? 'reconnecting...' :
                                'disconnected'
                            )
                        )}</div>
                    </div>
                    <sp-button 
                        id="connect-btn"
                        variant="primary"
                        onClick={this.doConnectOrDisconnect.bind(this)}
                    >{this.state.isConnected || this.state.isReconnecting ? 'disconnect' : 'connect'}</sp-button>
                </div> 

                <sp-divider size="small"></sp-divider>

                {/* <sp-label>webpage-list</sp-label>
                <ul className="client-list">
                    <li className="client-list-item">
                        <sp-label class="client-name">AE231DDEB64C</sp-label>
                        <sp-link>Run</sp-link>
                    </li>
                </ul> */}
            </>
        )
    }
} 
