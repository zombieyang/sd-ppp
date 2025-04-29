import React from 'react';
import { Input } from 'antd';
import type { TextAreaProps } from 'antd/es/input';
import { useUIWeightCSS } from './hooks.mts';
import { BaseWidgetProps } from './_base';

const { TextArea } = Input;

interface StringWidgetProps extends BaseWidgetProps {
    value?: string;
    onValueChange: (value: string) => void;
    extraOptions?: Record<string, any>;
}

export const StringWidget: React.FC<StringWidgetProps> = ({
    value = '',
    onValueChange,
    uiWeight
}) => {
    const uiWeightCSS = useUIWeightCSS(uiWeight || 12);

    const handleChange: TextAreaProps['onChange'] = (e) => {
        onValueChange(e.target.value);
    };

    return (
        <div
            className="widget-container"
            style={uiWeightCSS}
        >
            <TextArea
                value={value}
                onChange={handleChange}
                autoSize={{ minRows: 1 }}
            />
        </div>
    );
};
