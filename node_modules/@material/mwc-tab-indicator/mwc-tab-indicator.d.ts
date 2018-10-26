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
import MDCSlidingTabIndicatorFoundation from '@material/tab-indicator/sliding-foundation.js';
import MDCFadingTabIndicatorFoundation from '@material/tab-indicator/fading-foundation.js';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-tab-indicator': TabIndicator;
    }
}
export interface TabIndicatorFoundation extends Foundation {
    handleTransitionEnd(e: Event): void;
    computeContentClientRect(): ClientRect;
    activate(previousIndicatorClientRect?: ClientRect): void;
    deactivate(): void;
}
export declare var TabIndicatorFoundation: {
    prototype: TabIndicatorFoundation;
    new (adapter: Adapter): TabIndicatorFoundation;
};
export declare class TabIndicator extends BaseElement {
    protected mdcFoundation: MDCSlidingTabIndicatorFoundation | MDCFadingTabIndicatorFoundation;
    protected readonly mdcFoundationClass: typeof TabIndicatorFoundation;
    protected mdcRoot: HTMLElement;
    protected contentElement: HTMLElement;
    icon: string;
    fade: boolean;
    renderStyle(): import("lit-html/lib/template-result").TemplateResult;
    render(): import("lit-html/lib/template-result").TemplateResult;
    updated(changedProperties: PropertyValues): void;
    createAdapter(): {
        computeContentClientRect: () => ClientRect | DOMRect;
        setContentStyleProperty: (prop: string, value: string) => void;
    };
    createFoundation(): void;
    computeContentClientRect(): any;
    activate(previousIndicatorClientRect?: ClientRect): void;
    deactivate(): void;
}
