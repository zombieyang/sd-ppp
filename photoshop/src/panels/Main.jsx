<<<<<<< HEAD
import React from "react";
import { storage } from "uxp";
import { Model, ComfyConnection, TEXTS } from "../system/system.mjs";
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
            const setter = {
                isConnected: instance?.isConnected,
                isReconnecting: instance?.isReconnecting,
                lastConnectErrorMessage: instance?.lastErrorMessage,
                autoRunning: '',
                pageInstances: []
            };
            if (instance && instance.isConnected) {
                setter.backendURL = instance.backendURL;
            }
            this.setState(setter)
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
                    onInput={(ev) => { this.state.backendURL = ev.currentTarget.value }}
                    {...inputDisable}
                    value={this.state.backendURL}
                    placeholder="http://127.0.0.1:8188"
                ></sp-textfield>
                <div className="connect-box">
                    <div className={"status-bar " + (
                        this.state.isConnected ? ('connected') : (
                            this.state.isReconnecting ? ('reconnecting') :
                                ('disconnected')
                        )
                    )}>
                        <div className="status-icon">⬤</div>
                        <div className="status-text">{(
                            this.state.isConnected ? TEXTS('connected') : (
                                this.state.isReconnecting ? TEXTS('reconnecting...') :
                                    (this.state.lastConnectErrorMessage?.toString() || TEXTS('disconnected'))
                            )
                        )}</div>
                    </div>
                    <sp-button
                        id="connect-btn"
                        variant="primary"
                        onClick={this.doConnectOrDisconnect.bind(this)}
                    >{this.state.isConnected || this.state.isReconnecting ? TEXTS('disconnect') : TEXTS('connect')}</sp-button>
                </div>

                <sp-divider size="small"></sp-divider>

                <sp-label>{TEXTS('webpage-list')}</sp-label>
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
                <sp-label class="autorun-desc">{this.state.autoRunning ? TEXTS(`auto run page [{0}] after change..`, this.state.pageInstances.find(item =>
                    item.sid == this.state.autoRunning
                )?.name || ''): ''}</sp-label>
            </>
        )
    }
} 
=======
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
                        <sp-label>{expandMore ? "▼ more" : "▶ more"}</sp-label>
                    </div>
                    <div class="content">
                        <div class="input-row" id="user-id-bar">
                            <sp-label>user-name:</sp-label>
                            <div class="input-label">
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
>>>>>>> tl/develop_sio_multi_user
