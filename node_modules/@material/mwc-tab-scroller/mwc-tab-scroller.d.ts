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
import { BaseElement, Adapter, Foundation } from '@material/mwc-base/base-element';
import MDCTabScrollerFoundation from '@material/tab-scroller/foundation.js';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-tab-scroller': TabScroller;
    }
}
export interface TabScrollerFoundation extends Foundation {
    handleInteraction(e: Event): void;
    handleTransitionEnd(e: Event): void;
    scrollTo(scrollX: number): void;
    incrementScroll(scrollX: number): void;
    getScrollPosition(): number;
}
export declare var TabScrollerFoundation: {
    prototype: TabScrollerFoundation;
    new (adapter: Adapter): TabScrollerFoundation;
};
export declare class TabScroller extends BaseElement {
    protected mdcFoundation: MDCTabScrollerFoundation;
    protected mdcFoundationClass: typeof TabScrollerFoundation;
    protected mdcRoot: HTMLElement;
    protected scrollAreaElement: HTMLElement;
    protected scrollContentElement: HTMLElement;
    private _handleInteraction;
    private _handleTransitionEnd;
    private _scrollbarHeight;
    renderStyle(): import("lit-html/lib/template-result").TemplateResult;
    render(): import("lit-html/lib/template-result").TemplateResult;
    createAdapter(): {
        eventTargetMatchesSelector: (evtTarget: EventTarget, selector: string) => any;
        addScrollAreaClass: (className: string) => void;
        setScrollAreaStyleProperty: (prop: string, value: string) => void;
        setScrollContentStyleProperty: (prop: string, value: string) => void;
        getScrollContentStyleValue: (propName: string) => string;
        setScrollAreaScrollLeft: (scrollX: number) => number;
        getScrollAreaScrollLeft: () => number;
        getScrollContentOffsetWidth: () => number;
        getScrollAreaOffsetWidth: () => number;
        computeScrollAreaClientRect: () => ClientRect | DOMRect;
        computeScrollContentClientRect: () => ClientRect | DOMRect;
        computeHorizontalScrollbarHeight: () => number;
    };
    /**
     * Returns the current visual scroll position
     * @return {number}
     */
    getScrollPosition(): any;
    /**
     * Returns the width of the scroll content
     * @return {number}
     */
    getScrollContentWidth(): number;
    /**
     * Increments the scroll value by the given amount
     * @param {number} scrollXIncrement The pixel value by which to increment the scroll value
     */
    incrementScrollPosition(scrollXIncrement: Number): void;
    /**
     * Scrolls to the given pixel position
     * @param {number} scrollX The pixel value to scroll to
     */
    scrollToPosition(scrollX: Number): void;
}
