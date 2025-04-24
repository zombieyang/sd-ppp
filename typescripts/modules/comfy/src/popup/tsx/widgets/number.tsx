import React from 'react';
import { Flex, InputNumber, Slider, Space, Typography } from 'antd';
import { useUIWeightCSS } from './hooks.mts';
import { BaseWidgetProps } from './_base';

interface NumberWidgetProps extends BaseWidgetProps {
    inputMin: number;
    inputMax: number;
    inputStep: number;
    value?: number;
    name?: string;
    onValueChange: (value: number) => void;
}

export const NumberWidget: React.FC<NumberWidgetProps> = ({
    inputMin,
    inputMax,
    inputStep,
    name,
    value = 0,
    uiWeight = 1,
    onValueChange
}) => {
    const uiWeightCSS = useUIWeightCSS(uiWeight || 12);
    const handleValueChange = (newValue: number | null) => {
        if (newValue !== null) {
            // 保留3位小数
            const value = +newValue.toFixed(3);
            onValueChange(value);
        }
    };

    const currentValue = +value.toFixed(3);
    
    // 检查步长范围是否过大
    // const isStepRangeTooBig = ((inputMax - inputMin) / inputStep) > 1000;

    // if (!isStepRangeTooBig && uiWeight >= 1) {
    //     return (
    //         <Flex style={{ width: '100%', ...uiWeightCSS }}>
    //             <Slider
    //                 style={{ flex: 1 }}
    //                 min={inputMin}
    //                 max={inputMax}
    //                 step={inputStep}
    //                 value={currentValue}
    //                 onChange={handleValueChange}
    //             />
    //             <InputNumber
    //                 style={{ width: 80 }}
    //                 min={inputMin}
    //                 max={inputMax}
    //                 step={inputStep}
    //                 value={currentValue}
    //                 onChange={handleValueChange}
    //                 controls={false}
    //             />
    //         </Flex>
    //     );
    // }

    return (
        <Flex
            style={{ width: '100%', ...uiWeightCSS }}
            align='center'
        >
            {name && <span style={{ flex: 1 }}>{name}</span>}
            <InputNumber
                style={{ width: '100%', flex: 2 }}
                min={inputMin}
                max={inputMax}
                step={inputStep}
                value={currentValue}
                onChange={handleValueChange}
                controls={false}
            />
        </Flex>
    );
};
