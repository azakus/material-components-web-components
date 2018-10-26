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
import { BaseElement, Foundation, Adapter } from '@material/mwc-base/base-element.js';
export interface FormFieldFoundation extends Foundation {
}
export declare var FormFieldFoundation: {
    prototype: FormFieldFoundation;
    new (adapter: Adapter): FormFieldFoundation;
};
declare global {
    interface HTMLElementTagNameMap {
        'mwc-formfield': Formfield;
    }
}
export declare class Formfield extends BaseElement {
    alignEnd: boolean;
    label: string;
    protected mdcRoot: HTMLElement;
    protected mdcFoundation: FormFieldFoundation;
    protected readonly mdcFoundationClass: typeof FormFieldFoundation;
    protected createAdapter(): {
        registerInteractionHandler: (type: string, handler: EventListener) => void;
        deregisterInteractionHandler: (type: string, handler: EventListener) => void;
        activateInputRipple: () => void;
        deactivateInputRipple: () => void;
    };
    protected slotEl: HTMLSlotElement;
    protected labelEl: HTMLLabelElement;
    protected readonly input: HTMLElement | null;
    renderStyle(): import("lit-html/lib/template-result").TemplateResult;
    render(): import("lit-html/lib/template-result").TemplateResult;
    private _labelClick;
}
