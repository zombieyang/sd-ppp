import React from "react";
import { BaseFormWidget } from "../../../../common/tsx/BaseFormWidget";

enum TextfieldRerenderEnum {
    none = 0,
    should = 1,
    pending = 2
}   

interface PrimitiveStringWidgetProps {
    value?: string,
    onValueChange: (value: string) => void
}

interface PrimitiveStringWidgetState {
    hiddenDivHeight: number,
    textfieldRerender: TextfieldRerenderEnum,
    editing: boolean
}

export class PrimitiveStringWidget extends BaseFormWidget<PrimitiveStringWidgetProps, PrimitiveStringWidgetState> {
    private hiddenDivRef: React.RefObject<HTMLDivElement | null> = React.createRef();
    private heightChecker: any = setInterval(() => {
        if (this.hiddenDivRef.current) {
            const height = this.hiddenDivRef.current.offsetHeight;
            if (height !== this.state.hiddenDivHeight) {
                this.setState({
                    hiddenDivHeight: height,
                    textfieldRerender: this.state.editing ?
                        TextfieldRerenderEnum.pending :
                        TextfieldRerenderEnum.should
                });
            }
        }
    }, 16);

    state = {
        hiddenDivHeight: 0,
        editing: false,
        textfieldRerender: TextfieldRerenderEnum.none
    };

    componentWillUnmount(): void {
        clearInterval(this.heightChecker)
    }

    onInput = (event: Event) => {
        const newValue = (event.target as any).value;
        this.props.onValueChange(newValue);
    }

    onFocus = () => {
        this.setState({ editing: true });
    }

    onBlur = () => {
        const setter = {
            textfieldRerender: this.state.textfieldRerender,
            editing: false
        }
        if (this.state.textfieldRerender == TextfieldRerenderEnum.pending) {
            setter.textfieldRerender = TextfieldRerenderEnum.should
        }
        this.setState(setter);
    }

    shouldComponentUpdate(nextProps: any, nextState: Readonly<{ value: string; hiddenDivHeight: number; textfieldRerender: TextfieldRerenderEnum; editing: boolean; }>): boolean {
        if (
            nextState.textfieldRerender == TextfieldRerenderEnum.should &&
            nextState.textfieldRerender != this.state.textfieldRerender
        ) {
            Promise.resolve().then(async () => {
                await new Promise(requestAnimationFrame)
                this.setState({ textfieldRerender: TextfieldRerenderEnum.none })
            })
        }
        return true;
    }

    render() {
        return (
            <div
                className="widget-container"
                style={{
                    ...this.computeUIWeightCSS(this.props.uiWeight),
                    position: 'relative',
                    height: Math.max(55, this.state.hiddenDivHeight)
                }}>
                {this.state.textfieldRerender == TextfieldRerenderEnum.should ? "" :
                    <sp-textarea style={{ position: 'absolute', height: '100%', width: '100%', top: 0, left: 0 }}
                        value={this.props.value}
                        onInput={this.onInput}
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                    >
                    </sp-textarea>
                }
                <p
                    // @ts-ignore
                    ref={this.hiddenDivRef}
                    style={{ fontSize: 14, visibility: 'hidden', whiteSpace: 'pre-line' }}
                >
                    {this.props.value}
                </p>
            </div>
        );
    }
} 
