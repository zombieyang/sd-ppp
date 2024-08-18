import React from "react";
import ComfyConnection from "../system/ComfyConnection";
import { storage } from "uxp";
import Model from "../system/model";
export default class Main extends React.Component {
    state = {
        backendURL: '',
        isConnected: false,
        isReconnecting: false,
        lastConnectErrorMessage: '',
        pageInstances: [],
        autoRunning: ''
    }

    componentDidMount() {
        const model = new Model();
        let cooldown = false;
        model.onHistoryChange(() => {
            const anyRunning = this.state.pageInstances.filter(item => item.progress && item.progress > 0).length;
            if (this.state.autoRunning && !anyRunning && !cooldown) {
                ComfyConnection.instance?.pageInstanceRun(this.state.autoRunning)
                cooldown = true;
                setTimeout(() => { cooldown = false }, 1000)
            }
        })
        ComfyConnection.onConnectStateChange(() => {
            const instance = ComfyConnection.instance
            console.log('isConnected：', instance?.isConnected)
            this.setState({
                isConnected: instance?.isConnected,
                isReconnecting: instance?.isReconnecting,
                lastConnectErrorMessage: instance?.lastErrorMessage,
                autoRunning: '',
                pageInstances: []
            })
        });
        ComfyConnection.onPageInstancesChange((data) => {
            if (data.pages) {
                this.setState({ pageInstances: data.pages || [] });

            } else if (data.progress) {
                this.state.pageInstances.forEach(instance => {
                    if (instance.sid == data.sid) {
                        instance.progress = data.progress == 100 ? 0 : data.progress;
                    }
                })
                this.setState({
                    pageInstances: this.state.pageInstances
                })
            }
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
        let inputDisable = {};
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
                            const checkAttr = { title: 'autorun' };
                            if (this.state.autoRunning == item.sid) checkAttr['checked'] = true
                            return (
                                <li key={item.sid} className="client-list-item">
                                    <div className="client-list-item-left">
                                        <sp-checkbox {...checkAttr} onClick={(e) => {
                                            e.preventDefault();
                                            e.target.checked = !e.target.checked;
                                            this.setState({
                                                autoRunning: e.target.checked ? '' : item.sid
                                            })
                                        }}></sp-checkbox>
                                        <sp-label class="client-name">{item.progress ? `${item.progress}% - ` : ""}{item.name}</sp-label>
                                    </div>
                                    <div className="client-list-item-right">
                                        <sp-link onClick={() => { ComfyConnection.instance?.pageInstanceRun(item.sid) }}>{item.type == "comfy" ? "Queue Prompt" : "Generate"}</sp-link>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <sp-label class="autorun-desc">{this.state.autoRunning ? `auto run page [${this.state.pageInstances.find(item =>
                    item.sid == this.state.autoRunning
                )?.name || ''}] after change..` : ''}</sp-label>
            </>
        )
    }
} 
