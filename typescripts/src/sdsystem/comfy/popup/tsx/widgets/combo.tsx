import { Select } from 'antd';
import React from 'react';
import i18n from '../../../../../common/i18n.mts';
import { useUIWeightCSS } from './hooks.mts';
import { BaseWidgetProps } from './_base';

export interface DropdownWidgetProps extends BaseWidgetProps {
    onSelectUpdate: (identify: string, index: number) => void;
    options: string[];
    value: string;
}   

export const ComboWidget: React.FC<DropdownWidgetProps> = ({
    onSelectUpdate,
    options,
    value,
    uiWeight
}) => {
    // 处理选择变化
    const handleSelect = (selectedValue: string) => {
        const selectedIndex = options.indexOf(selectedValue);
        onSelectUpdate(selectedValue, selectedIndex);
    };
    const uiWeightCSS = useUIWeightCSS(uiWeight || 12);
    console.log(options);

    return (
        <Select
            value={value}
            options={options.map(option => ({ value: option, label: option }))}
            style={{ ...uiWeightCSS }}
            onSelect={handleSelect}
            placeholder={i18n("select...")}
            showSearch
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
        />
    );
};


