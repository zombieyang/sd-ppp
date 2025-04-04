import React from "react";
import { BaseFormWidget } from "../../../../common/tsx/BaseFormWidget";

interface PrimitiveNumberWidgetProps {
    inputMin: number,
    inputMax: number,
    inputStep: number
    value?: number,
    onValueChange: (value: number) => void
}

export class PrimitiveNumberWidget extends BaseFormWidget<PrimitiveNumberWidgetProps, {}> {
    onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = +event.target.value;
        this.setState({ value: +newValue.toFixed(3) });
        this.props.onValueChange(newValue);
    }

    render() {
        const value = +(this.props.value || 0).toFixed(3)
        // 检查步长范围是否过大
        // let isStepRangeTooBig = ((this.props.inputMax - this.props.inputMin) / this.props.inputStep) > 1000;
        // if (!isStepRangeTooBig && this.props.uiWeight >= 1) {
        //     return (
        //         <>
        //             <sp-slider
        //                 style={{
        //                     ...this.computeUIWeightCSS(this.props.uiWeight * 0.6)
        //                 }}
        //                 min={this.props.inputMin}
        //                 max={this.props.inputMax}
        //                 step={this.props.inputStep}
        //                 value={value}
        //                 onInput={this.onInput}
        //                 show-value="false"
        //                 class="sdppp-slider"
        //             >
        //             </sp-slider>
        //             <sp-textfield
        //                 style={{
        //                     ...this.computeUIWeightCSS(this.props.uiWeight * 0.4)
        //                 }}
        //                 onInput={this.onInput}
        //                 value={value}
        //             />
        //         </>
        //     );
        // } else {
            return <sp-textfield
                style={{
                    ...this.computeUIWeightCSS(this.props.uiWeight)
                }}
                onInput={this.onInput}
                value={value}
            />
        // }
    }
} 
