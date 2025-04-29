import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import { useUIWeightCSS } from './hooks.mts';
import { BaseWidgetProps } from './_base';

interface ToggleProps extends BaseWidgetProps {
    value?: any;
    name?: string;
    onValueChange: (value: boolean) => void;
    extraOptions?: Record<string, any>;
}

export const ToggleWidget: React.FC<ToggleProps> = ({
    value,
    name,
    onValueChange,
    uiWeight
}) => {
    const handleChange: CheckboxProps['onChange'] = (e) => {
        onValueChange(e.target.checked);
    };

    const uiWeightCSS = useUIWeightCSS(uiWeight || 12);

    return (
        <Checkbox
            checked={!!value}
            onChange={handleChange}
            style={{ ...uiWeightCSS }}
        >
            {name || ''}
        </Checkbox>
    );
};
