import React from "react";
import ComfyConnection from "../system/ComfyConnection";
import { storage } from "uxp";
export default class Main extends React.Component {
    state = {
        backendURL: '',
        isConnected: false,
        isReconnecting: false,
        lastConnectErrorMessage: '',
        pageInstances: []
    }

    componentDidMount() {
        ComfyConnection.onConnectStateChange(() => {
            const instance = ComfyConnection.instance
            console.log('isConnected：', instance?.isConnected)
            this.setState({
                isConnected: instance?.isConnected,
                isReconnecting: instance?.isReconnecting,
                backendURL: instance ? instance.backendURL : '',
                lastConnectErrorMessage: instance?.lastErrorMessage
            })
        });
        ComfyConnection.onPageInstancesChange((data) => {
            this.setState({ pageInstances: data.pages || [] });
        });
        storage.secureStorage.getItem('backendURL').then((value) => {
            if (!value) return
            this.setState({ backendURL: Buffer.from(value).toString() })
            if (this.state.backendURL) {
                console.log('backendURL:', this.state.backendURL)
                this.doConnectOrDisconnect()
            }
        })
    }

    doConnectOrDisconnect() {
        if (ComfyConnection.instance?.isConnected || ComfyConnection.instance?.isReconnecting)
            ComfyConnection.instance.disconnect();
        else
            ComfyConnection.createInstance(this.state.backendURL);
    }

    render() {
        let inputDisable = { };
        if (this.state.isConnected || this.state.isReconnecting) inputDisable = { disabled: true };
        return (
            <>
                <sp-textfield
                    id="url-bar"
                    label="backendURL"
                    onInput={(ev) => { console.log('onInput', ev.currentTarget.value); this.state.backendURL = ev.currentTarget.value }}
                    {...inputDisable}
                    value={this.state.backendURL}
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
                                    (this.state.lastConnectErrorMessage?.toString() || 'disconnected')
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

                <sp-label>webpage-list</sp-label>
                <ul className="client-list">
                    {
                        this.state.pageInstances.map((item) => {
                            return (
                                <li key={item} className="client-list-item">
                                    <sp-label class="client-name">{item.name}</sp-label>
                                    <sp-link onClick={() => { ComfyConnection.instance?.pageInstanceRun(item.sid) }}>{item.type == "comfy" ? "Queue Prompt" : "Generate"}</sp-link>
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
} 
