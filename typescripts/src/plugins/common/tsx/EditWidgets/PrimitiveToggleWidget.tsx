import React from "react";
import { BaseFormWidget } from "../../../../common/tsx/BaseFormWidget";

interface PrimitiveToggleWidgetProps {
    value?: any,
    name?: string,
    onValueChange: (value: boolean) => void
}

export class PrimitiveToggleWidget extends BaseFormWidget<PrimitiveToggleWidgetProps, {}> {

    onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = !!event.target.value;
        this.setState({ value: newValue });
        this.props.onValueChange(newValue);
    }

    render() {
        const checkedAttr = !!this.props.value ? { 'checked': true } : {};
        return <sp-checkbox
            label={this.props.name || ''}
            style={{
                ...this.computeUIWeightCSS(this.props.uiWeight)
            }}
            onInput={(e: any) => {
                this.props.onValueChange(e.target.checked)
            }}
            {...checkedAttr}
        >{this.props.name || ''}</sp-checkbox>
    }
} 
