import React from "react";
import { computeUIWeightCSS } from "./util.mts";

export class BaseFormWidget<T, S> extends React.Component<{
    uiWeight: number
} & T, S> {
    protected computeUIWeightCSS(uiWeight: number) {
        return computeUIWeightCSS(uiWeight);
    }
}