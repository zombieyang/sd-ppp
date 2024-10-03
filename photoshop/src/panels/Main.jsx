import React from "react";
import { ComfyConnection, TEXTS, photoshopPageStoreMap, photoshopStore } from "../system/system.mjs";
import { ViewModel } from "./ViewModel";

class WebPageList extends React.Component {
    state = {
        pageInstances: {},
        autoRunning: false
    }

    onConnectStateChange() {
        if (this.unmount) return;
        const setter = {
            pageInstances: {},
            autoRunning: '',
        };
        this.setState(setter)
    }

    componentWillUnmount() {
        this.unmount = true;
    }

    componentDidMount() {
        let cooldown = false;
        photoshopStore.subscribe('/canvasStateID', (cur, prev) => {
            const anyRunning = Object.values(this.state.pageInstances).filter(item => item.progress && item.progress > 0).length;
            if (this.state.autoRunning && !anyRunning && !cooldown) {
                ComfyConnection.instance?.pageInstanceRun(this.state.autoRunning)
                cooldown = true;
                setTimeout(() => { cooldown = false }, 1000)
            }
        });
        photoshopPageStoreMap.subscribe('/', (sid, cur, prev) => {
            if (cur == null) {
                delete this.state.pageInstances[sid];
            } else {
                this.state.pageInstances[sid] = cur;
            }
            this.setState({ pageInstances: this.state.pageInstances })
        })
        ComfyConnection.onConnectStateChange(this.onConnectStateChange.bind(this));
    }

    render() {
        return (
            <>
                <sp-label>{TEXTS('webpage-list')}</sp-label>
                <ul className="client-list">
                    {
                        Object.keys(this.state.pageInstances).map((sid) => {
                            const item = this.state.pageInstances[sid]
                            const checkAttr = { title: 'autorun' };
                            if (this.state.autoRunning == sid) checkAttr['checked'] = true
                            return (
                                <li key={Math.random()} className="client-list-item">
                                    <div className="client-list-item-left">
                                        <sp-checkbox {...checkAttr} onClick={(e) => {
                                            e.preventDefault();
                                            e.target.checked = !e.target.checked;
                                            this.setState({
                                                autoRunning: !e.target.checked ? sid : ''
                                            })
                                        }}></sp-checkbox>
                                        <sp-label class="client-name">{item.progress ? `${item.progress}% - ` : ""}({item.ssid}) {item.error ? item.error.replace('sdppp PS side error:', '') : item.title}</sp-label>
                                    </div>
                                    <div className="client-list-item-right">
                                        {item.layerNameEntries.filter(entry => entry.startsWith('$sd-ppp$/')).length ? <sp-link onClick={() => {
                                            const validLayersName = item.layerNameEntries.filter(entry => entry.startsWith('$sd-ppp$/'));
                                            validLayersName.forEach(layerName => {

                                            });
                                        }}>Init Layers</sp-link> : ''}
                                        <sp-action-button onClick={() => { ComfyConnection.instance?.pageInstanceRun(item.sid) }}>▶</sp-action-button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <sp-label class="autorun-desc">{this.state.autoRunning ? TEXTS(`auto run page [{0}] after change..`, this.state.pageInstances[this.state.autoRunning]?.title) : ''}</sp-label>
            </>
        )
    }
}

export default class Main extends React.Component {
    state = {
        backendURL: localStorage.getItem('backendURL'),
        isConnected: false,
        isReconnecting: false,
        lastConnectErrorMessage: '',

        wideMode: ViewModel.wideMode
    }

    componentDidMount() {
        ViewModel.onChange('wideMode', (value) => {
            this.setState({ wideMode: value });
        })
        ComfyConnection.onConnectStateChange(() => {
            const instance = ComfyConnection.instance
            const setter = {
                isConnected: instance?.isConnected,
                isReconnecting: instance?.isReconnecting,
                lastConnectErrorMessage: instance?.lastErrorMessage,
            };
            if (instance && instance.isConnected) {
                setter.backendURL = instance.backendURL;
            }
            this.setState(setter)
        });
        if (this.state.backendURL) {
            this.doConnectOrDisconnect()
        }
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
        const addressBar = <sp-textfield
            id="url-bar"
            label="backendURL"
            onInput={(ev) => { this.state.backendURL = ev.currentTarget.value }}
            {...inputDisable}
            value={this.state.backendURL}
            placeholder="http://127.0.0.1:8188"
        ></sp-textfield>
        return (
            <div className="container">
                <div className="connect-box">
                    <div className={"status-bar " + (
                        this.state.isConnected ? ('connected') : (
                            this.state.isReconnecting ? ('reconnecting') :
                                ('disconnected')
                        )
                    )}>
                        <div className="status-icon" title={this.state.isConnected ? TEXTS('connected') : (
                            this.state.isReconnecting ? TEXTS('reconnecting...') :
                                (this.state.lastConnectErrorMessage?.toString() || TEXTS('disconnected'))
                        )}>⬤</div>
                    </div>
                    {addressBar}
                    <sp-action-button
                        id="connect-btn"
                        onClick={this.doConnectOrDisconnect.bind(this)}
                    >{this.state.isConnected || this.state.isReconnecting ? '⊗' : '→'}</sp-action-button>
                </div>

                <sp-divider size="small"></sp-divider>

                <div className="panel-body">
                    {this.state.wideMode ? (this.state.isConnected ? <webview id="webview" src={this.state.backendURL} height="100%" width="100%" /> : "") : <WebPageList />}
                </div>
            </div>
        )
    }
} 