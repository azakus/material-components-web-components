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
import { BaseElement, Adapter, Foundation, PropertyValues } from '@material/mwc-base/base-element.js';
import MDCTopAppBarFoundation from '@material/top-app-bar/standard/foundation.js';
import MDCShortTopAppBarFoundation from '@material/top-app-bar/short/foundation.js';
import MDCFixedTopAppBarFoundation from '@material/top-app-bar/fixed/foundation.js';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-top-app-bar': TopAppBar;
    }
}
export interface TopAppBarFoundation extends Foundation {
}
export declare var TopAppBarFoundation: {
    prototype: TopAppBarFoundation;
    new (adapter: Adapter): TopAppBarFoundation;
};
export declare class TopAppBar extends BaseElement {
    protected mdcFoundation: MDCShortTopAppBarFoundation | MDCFixedTopAppBarFoundation | MDCTopAppBarFoundation;
    protected readonly mdcFoundationClass: typeof TopAppBarFoundation;
    protected mdcRoot: HTMLElement;
    private _navIconSlot;
    private _actionItemsSlot;
    type: string;
    dense: boolean;
    extraRow: boolean;
    private _scrollTarget;
    scrollTarget: HTMLElement | Window;
    renderStyle(): import("lit-html/lib/template-result").TemplateResult;
    render(): import("lit-html/lib/template-result").TemplateResult;
    protected createAdapter(): {
        setStyle: (property: string, value: string) => void;
        getTopAppBarHeight: () => number;
        registerNavigationIconInteractionHandler: (type: string, handler: EventListenerOrEventListenerObject) => void;
        deregisterNavigationIconInteractionHandler: (type: any, handler: any) => void;
        notifyNavigationIconClicked: () => void;
        registerScrollHandler: (handler: EventListenerOrEventListenerObject) => void;
        deregisterScrollHandler: (handler: EventListenerOrEventListenerObject) => void;
        registerResizeHandler: (handler: EventListenerOrEventListenerObject) => void;
        deregisterResizeHandler: (handler: EventListenerOrEventListenerObject) => void;
        getViewportScrollY: () => any;
        getTotalActionItems: () => number;
    };
    firstUpdated(): void;
    updated(changedProperties: PropertyValues): void;
    createFoundation(): void;
}
