/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { BaseElement, Adapter, Foundation } from '@material/mwc-base/base-element.js';
import { TabIndicator } from '@material/mwc-tab-indicator';
import '@material/mwc-tab-indicator';
import MDCTabFoundation from '@material/tab/foundation';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-tab': Tab;
    }
}
export interface TabFoundation extends Foundation {
    handleClick(): void;
    activate(clientRect: ClientRect): void;
    deactivate(): void;
    computeDimensions(): {
        rootLeft: number;
        rootRight: number;
        contentLeft: number;
        contentRight: number;
    };
}
export declare var TabFoundation: {
    prototype: TabFoundation;
    new (adapter: Adapter): TabFoundation;
};
export declare class Tab extends BaseElement {
    protected mdcFoundation: MDCTabFoundation;
    protected readonly mdcFoundationClass: typeof TabFoundation;
    protected mdcRoot: HTMLElement;
    protected tabIndicator: TabIndicator;
    label: string;
    icon: string;
    isFadingIndicator: boolean;
    minWidth: boolean;
    isMinWidthIndicator: boolean;
    indicatorIcon: string;
    stacked: boolean;
    /**
     * Other properties
     * indicatorContent <slot>
     * previousIndicatorClientRect (needed?)
     * onTransitionEnd (needed?)
     */
    private _tabIndicator;
    private _contentElement;
    private _handleClick;
    createRenderRoot(): ShadowRoot;
    renderStyle(): import("lit-html/lib/template-result").TemplateResult;
    render(): import("lit-html/lib/template-result").TemplateResult;
    renderIndicator(): import("lit-html/lib/template-result").TemplateResult;
    createAdapter(): {
        setAttr: (attr: string, value: string) => void;
        activateIndicator: (previousIndicatorClientRect: ClientRect) => void;
        deactivateIndicator: () => void;
        notifyInteracted: () => boolean;
        getOffsetLeft: () => number;
        getOffsetWidth: () => number;
        getContentOffsetLeft: () => number;
        getContentOffsetWidth: () => number;
        focus: () => void;
    };
    activate(clientRect: ClientRect): void;
    deactivate(): void;
    computeDimensions(): any;
    computeIndicatorClientRect(): any;
    focus(): void;
}
