import { Component } from "react";
import { computeUIWeightCSS } from "./util";

export class BaseFormWidget<T, S> extends Component<{
    uiWeight: number
} & T, S> {
    protected computeUIWeightCSS(uiWeight: number) {
        return computeUIWeightCSS(uiWeight);
    }
}