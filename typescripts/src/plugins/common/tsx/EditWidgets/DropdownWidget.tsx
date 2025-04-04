import { BaseFormWidget } from "../../../../common/tsx/BaseFormWidget";

export interface DropdownWidgetProps {
    onSelectUpdate: (identify: string, index: number) => void,
    options: string[],
    value: string,
}
export interface DropdownWidgetState {
    filter: string
}
export class DropdownWidget extends BaseFormWidget<DropdownWidgetProps, DropdownWidgetState> {
    state = {
        filter: ''
    }
    // Handle selection changes
    handleSelectUpdate = (value: string, index: number): void => {
        this.props.onSelectUpdate(value, index);
        this.setState({
            filter: ''
        })
    }

    // Render dropdown component
    render() {
        const { options, value } = this.props;

        return (
            <sp-picker
                class="sdppp-dropdown-widget"
                size="s"
                style={{
                    ...this.computeUIWeightCSS(this.props.uiWeight)
                }}
            >
                <sp-menu slot="options">
                    {options.map((id, index) => {
                        if (this.state.filter && !id.includes(this.state.filter)) {
                            return ''
                        }

                        return (
                            <sp-menu-item
                                key={getOptionContent(id)}
                                {...(getOptionContent(id) === getOptionContent(value) ? { selected: true } : {})}
                                onClick={() => this.handleSelectUpdate(id, index)}
                            >
                                {getOptionContent(id)}
                            </sp-menu-item>
                        )
                    })}
                </sp-menu>
            </sp-picker>
        );
    }
} 

function getOptionContent(option: any) {
    if (typeof option === 'string') {
        return option
    }
    return option.content;
}