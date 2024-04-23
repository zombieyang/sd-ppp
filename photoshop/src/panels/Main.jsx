import React from "react";
import ComfyConnection from "../system/ComfyConnection";
import HistoryChecker from "../system/HistoryChecker";
import { storage } from "uxp";

export default class Main extends React.Component {
    state = {
        comfyURL: '', 
        isConnected: false 
    }

    componentDidMount() {
        ComfyConnection.onConnectStateChange(() => {
            const instance = ComfyConnection.instance
            console.log('isConnected：', instance?.isConnected)
            this.setState({
                isConnected: instance?.isConnected,
                comfyURL: instance ? instance.comfyURL : ''
            })
            if (instance?.isConnected) {
                const hc = HistoryChecker.createInstance();
                hc.setChangeCallback((historyId) => {
                    instance.pushData({history_state_id: historyId})
                });
            } else {
                HistoryChecker.instance?.destroy();
            }
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
        if (!ComfyConnection.instance?.isConnected) 
            ComfyConnection.createInstance(this.state.comfyURL);
        else 
            ComfyConnection.instance.disconnect();
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
