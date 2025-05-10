import React, { useCallback, useState, useEffect } from 'react';
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
    extraOptions?: Record<string, any>;
}

export const NumberWidget: React.FC<NumberWidgetProps> = ({
    inputMin,
    inputMax,
    inputStep,
    name,
    value = 0,
    uiWeight = 1,
    extraOptions,
    onValueChange
}) => {
    const uiWeightCSS = useUIWeightCSS(uiWeight || 12);
    const [localValue, setLocalValue] = useState<number>(+value.toFixed(3));

    // Update local state when props value changes
    useEffect(() => {
        setLocalValue(+value.toFixed(3));
    }, [value]);

    const handleValueChange = useCallback((newValue: number | null) => {
        if (newValue !== null) {
            // 保留3位小数
            const roundedValue = +newValue.toFixed(3);
            setLocalValue(roundedValue);
        }
    }, []);

    const handleBlur = useCallback(() => {
        // Only call onValueChange when input loses focus
        onValueChange(localValue);
    }, [localValue, onValueChange]);

    // 检查步长范围是否过大
    const isStepRangeTooBig = ((inputMax - inputMin) / inputStep) > 1000;

    if (!isStepRangeTooBig && uiWeight >= 1 && extraOptions?.useSliderForNumberWidget) {
        return (
            <Flex
                style={{ width: '100%', ...uiWeightCSS }}
                align='center'
            >
                <Slider
                    style={{ flex: 1 }}
                    min={inputMin}
                    max={inputMax}
                    step={inputStep}
                    value={localValue}
                    onChange={handleValueChange}
                    onChangeComplete={handleBlur}
                />
                <InputNumber
                    style={{ width: 80 }}
                    min={inputMin}
                    max={inputMax}
                    step={inputStep} 
                    value={localValue}
                    onChange={handleValueChange}
                    onBlur={handleBlur}
                    controls={false}
                />
            </Flex>
        );
    }

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
                value={localValue}
                onChange={handleValueChange}
                onBlur={handleBlur}
                controls={false}
            />
        </Flex>
    );
};
