import { Flex, Select, Typography } from 'antd';
import React from 'react';
import i18n from '../../../../../../src/common/i18n.mts';
import { useUIWeightCSS } from './hooks.mts';
import { BaseWidgetProps } from './_base';

export interface DropdownWidgetProps extends BaseWidgetProps {
    onSelectUpdate: (identify: string, index: number) => void;
    options: string[];
    value: string;
    name?: string;
    extraOptions?: Record<string, any>;
}

export const ComboWidget: React.FC<DropdownWidgetProps> = ({
    onSelectUpdate,
    options,
    value,
    name,
    uiWeight
}) => {
    // 处理选择变化
    const handleSelect = (selectedValue: string) => {
        const selectedIndex = options.indexOf(selectedValue);
        onSelectUpdate(selectedValue, selectedIndex);
    };
    const uiWeightCSS = useUIWeightCSS(uiWeight || 12);

    return (
        <Flex
            style={{ width: '100%', ...uiWeightCSS }}
            align='center'
        >
            {name && <span style={{ flex: 1 }}>{name}</span>}
            <Select
                value={value}
                options={options.map(option => ({ value: option, label: option }))}
                style={{ flex: 2, minWidth: '100%' }}
                onSelect={handleSelect}
                placeholder={i18n("select...")}
                showSearch
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
            />
        </Flex>
    );
};


