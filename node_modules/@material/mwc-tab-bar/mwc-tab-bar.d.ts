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
import { Tab } from '@material/mwc-tab';
import { TabScroller } from '@material/mwc-tab-scroller';
import '@material/mwc-tab';
import '@material/mwc-tab-scroller';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-tab-bar': TabBar;
    }
}
export interface TabBarFoundation extends Foundation {
    scrollIntoView(index: number): void;
    activateTab(index: number): void;
    handleTabInteraction(e: Event): void;
    handleKeyDown(e: Event): void;
}
export declare var TabBarFoundation: {
    prototype: TabBarFoundation;
    new (adapter: Adapter): TabBarFoundation;
};
export declare class TabBar extends BaseElement {
    protected mdcFoundation: TabBarFoundation;
    protected readonly mdcFoundationClass: typeof TabBarFoundation;
    protected mdcRoot: HTMLElement;
    protected scrollerElement: TabScroller;
    protected tabsSlot: HTMLSlotElement;
    activeIndex: number;
    private _previousActiveIndex;
    private _handleTabInteraction;
    private _handleKeydown;
    renderStyle(): import("lit-html/lib/template-result").TemplateResult;
    render(): import("lit-html/lib/template-result").TemplateResult;
    private _getTabs;
    private _getTab;
    createAdapter(): {
        scrollTo: (scrollX: number) => void;
        incrementScroll: (scrollXIncrement: number) => void;
        getScrollPosition: () => any;
        getScrollContentWidth: () => number;
        getOffsetWidth: () => number;
        isRTL: () => boolean;
        setActiveTab: (index: number) => void;
        activateTabAtIndex: (index: number, clientRect: ClientRect) => void;
        deactivateTabAtIndex: (index: number) => void;
        focusTabAtIndex: (index: number) => void;
        getTabIndicatorClientRectAtIndex: (index: number) => any;
        getTabDimensionsAtIndex: (index: number) => any;
        getPreviousActiveTabIndex: () => number;
        getFocusedTabIndex: () => number;
        getIndexOfTab: (tabToFind: Tab) => number;
        getTabListLength: () => number;
        notifyTabActivated: (index: number) => void;
    };
    firstUpdated(): void;
    readonly updateComplete: Promise<void>;
    scrollIndexIntoView(index: number): void;
}
