import React from "react";
import ComfyConnection from "../system/ComfyConnection";
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
        return (
            <> 

                <sp-textfield 
                    id="url-bar" 
                    label="ComfyURL" 
                    onInput={(ev) => { this.state.comfyURL = ev.currentTarget.value }} 
                    value={this.state.comfyURL} 
                    placeholder="http://127.0.0.1:8188"
                ></sp-textfield>
                <sp-textfield 
                    id="user-id-bar" 
                    label="USER ID" 
                    onInput={(ev) => { 
                        this.state.userId = ev.currentTarget.value;
                        if (!this.state.userId) 
                            storage.secureStorage.removeItem('userId');
                        else
                            storage.secureStorage.setItem('userId', this.state.userId);
                    }} 
                    value={this.state.userId} 
                    placeholder="User Name: Change if sharing remote server"
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
