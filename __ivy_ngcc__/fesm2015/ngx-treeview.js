import { EventEmitter, Directive, Input, Output, HostBinding, HostListener, ElementRef, Injectable, Component, ViewChild, Pipe, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isNil, pull, concat, isString, isBoolean, includes } from 'lodash';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/forms';

function TreeviewComponent_ng_template_0_i_1__svg_svg_1_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 15);
        ɵngcc0.ɵɵelement(1, "path", 16);
        ɵngcc0.ɵɵelementEnd();
    }
}
function TreeviewComponent_ng_template_0_i_1__svg_svg_2_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 17);
        ɵngcc0.ɵɵelement(1, "path", 18);
        ɵngcc0.ɵɵelementEnd();
    }
}
function TreeviewComponent_ng_template_0_i_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "i", 12);
        ɵngcc0.ɵɵlistener("click", function TreeviewComponent_ng_template_0_i_1_Template_i_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r15); const onCollapseExpand_r8 = ɵngcc0.ɵɵnextContext().onCollapseExpand; return onCollapseExpand_r8(); });
        ɵngcc0.ɵɵtemplate(1, TreeviewComponent_ng_template_0_i_1__svg_svg_1_Template, 2, 0, "svg", 13);
        ɵngcc0.ɵɵtemplate(2, TreeviewComponent_ng_template_0_i_1__svg_svg_2_Template, 2, 0, "svg", 14);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const item_r7 = ɵngcc0.ɵɵnextContext().item;
        ɵngcc0.ɵɵproperty("ngSwitch", item_r7.collapsed);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", true);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", false);
    }
}
function TreeviewComponent_ng_template_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 7);
        ɵngcc0.ɵɵtemplate(1, TreeviewComponent_ng_template_0_i_1_Template, 3, 3, "i", 8);
        ɵngcc0.ɵɵelementStart(2, "div", 9);
        ɵngcc0.ɵɵelementStart(3, "input", 10);
        ɵngcc0.ɵɵlistener("ngModelChange", function TreeviewComponent_ng_template_0_Template_input_ngModelChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r18); const item_r7 = ctx.item; return item_r7.checked = $event; })("ngModelChange", function TreeviewComponent_ng_template_0_Template_input_ngModelChange_3_listener() { const onCheckedChange_r9 = ctx.onCheckedChange; return onCheckedChange_r9(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "label", 11);
        ɵngcc0.ɵɵlistener("click", function TreeviewComponent_ng_template_0_Template_label_click_4_listener() { const item_r7 = ctx.item; const onCheckedChange_r9 = ctx.onCheckedChange; item_r7.checked = !item_r7.checked; return onCheckedChange_r9(); });
        ɵngcc0.ɵɵtext(5);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const item_r7 = ctx.item;
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", item_r7.children);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngModel", item_r7.checked)("disabled", item_r7.disabled)("indeterminate", item_r7.indeterminate);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", item_r7.text, " ");
    }
}
function TreeviewComponent_ng_template_2_div_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r29 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 21);
        ɵngcc0.ɵɵelementStart(1, "div", 22);
        ɵngcc0.ɵɵelementStart(2, "input", 23);
        ɵngcc0.ɵɵlistener("ngModelChange", function TreeviewComponent_ng_template_2_div_0_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); const ctx_r28 = ɵngcc0.ɵɵnextContext(2); return ctx_r28.filterText = $event; })("ngModelChange", function TreeviewComponent_ng_template_2_div_0_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r29); const onFilterTextChange_r25 = ɵngcc0.ɵɵnextContext().onFilterTextChange; return onFilterTextChange_r25($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r26 = ɵngcc0.ɵɵnextContext(2);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("placeholder", ctx_r26.i18n.getFilterPlaceholder())("ngModel", ctx_r26.filterText);
    }
}
function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r38 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "div", 29);
        ɵngcc0.ɵɵelementStart(1, "input", 30);
        ɵngcc0.ɵɵlistener("ngModelChange", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_input_ngModelChange_1_listener($event) { ɵngcc0.ɵɵrestoreView(_r38); const item_r22 = ɵngcc0.ɵɵnextContext(3).item; return item_r22.checked = $event; })("ngModelChange", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_input_ngModelChange_1_listener() { ɵngcc0.ɵɵrestoreView(_r38); const onCheckedChange_r24 = ɵngcc0.ɵɵnextContext(3).onCheckedChange; return onCheckedChange_r24(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "label", 11);
        ɵngcc0.ɵɵlistener("click", function TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template_label_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r38); const ctx_r42 = ɵngcc0.ɵɵnextContext(3); const item_r22 = ctx_r42.item; const onCheckedChange_r24 = ctx_r42.onCheckedChange; item_r22.checked = !item_r22.checked; return onCheckedChange_r24(); });
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const item_r22 = ɵngcc0.ɵɵnextContext(3).item;
        const ctx_r34 = ɵngcc0.ɵɵnextContext();
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngModel", item_r22.checked)("indeterminate", item_r22.indeterminate);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r34.i18n.getAllCheckboxText(), " ");
    }
}
function TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_2_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 35);
        ɵngcc0.ɵɵelement(1, "path", 36);
        ɵngcc0.ɵɵelement(2, "path", 37);
        ɵngcc0.ɵɵelement(3, "path", 38);
        ɵngcc0.ɵɵelementEnd();
    }
}
function TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_3_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵnamespaceSVG();
        ɵngcc0.ɵɵelementStart(0, "svg", 39);
        ɵngcc0.ɵɵelement(1, "path", 40);
        ɵngcc0.ɵɵelement(2, "path", 41);
        ɵngcc0.ɵɵelement(3, "path", 42);
        ɵngcc0.ɵɵelementEnd();
    }
}
function TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r48 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "label", 31);
        ɵngcc0.ɵɵlistener("click", function TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template_label_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r48); const onCollapseExpand_r23 = ɵngcc0.ɵɵnextContext(3).onCollapseExpand; return onCollapseExpand_r23(); });
        ɵngcc0.ɵɵelementStart(1, "i", 32);
        ɵngcc0.ɵɵtemplate(2, TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_2_Template, 4, 0, "svg", 33);
        ɵngcc0.ɵɵtemplate(3, TreeviewComponent_ng_template_2_div_1_div_1_label_3__svg_svg_3_Template, 4, 0, "svg", 34);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const item_r22 = ɵngcc0.ɵɵnextContext(3).item;
        const ctx_r35 = ɵngcc0.ɵɵnextContext();
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("title", ctx_r35.i18n.getTooltipCollapseExpandText(item_r22.collapsed))("ngSwitch", item_r22.collapsed);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", true);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngSwitchCase", false);
    }
}
function TreeviewComponent_ng_template_2_div_1_div_1_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 26);
        ɵngcc0.ɵɵelementStart(1, "div", 22);
        ɵngcc0.ɵɵtemplate(2, TreeviewComponent_ng_template_2_div_1_div_1_div_2_Template, 4, 3, "div", 27);
        ɵngcc0.ɵɵtemplate(3, TreeviewComponent_ng_template_2_div_1_div_1_label_3_Template, 4, 4, "label", 28);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const config_r21 = ɵngcc0.ɵɵnextContext(2).config;
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", config_r21.hasAllCheckBox);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", config_r21.hasCollapseExpand);
    }
}
function TreeviewComponent_ng_template_2_div_1_div_2_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 43);
    }
}
function TreeviewComponent_ng_template_2_div_1_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, TreeviewComponent_ng_template_2_div_1_div_1_Template, 4, 2, "div", 24);
        ɵngcc0.ɵɵtemplate(2, TreeviewComponent_ng_template_2_div_1_div_2_Template, 1, 0, "div", 25);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const config_r21 = ɵngcc0.ɵɵnextContext().config;
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", config_r21.hasAllCheckBox || config_r21.hasCollapseExpand);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", config_r21.hasDivider);
    }
}
function TreeviewComponent_ng_template_2_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, TreeviewComponent_ng_template_2_div_0_Template, 3, 2, "div", 19);
        ɵngcc0.ɵɵtemplate(1, TreeviewComponent_ng_template_2_div_1_Template, 3, 2, "div", 20);
    } if (rf & 2) {
        const config_r21 = ctx.config;
        const ctx_r3 = ɵngcc0.ɵɵnextContext();
        ɵngcc0.ɵɵproperty("ngIf", config_r21.hasFilter);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx_r3.hasFilterItems);
    }
}
function TreeviewComponent_ng_template_5_Template(rf, ctx) { }
function TreeviewComponent_div_7_ngx_treeview_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r55 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "ngx-treeview-item", 46);
        ɵngcc0.ɵɵlistener("checkedChange", function TreeviewComponent_div_7_ngx_treeview_item_1_Template_ngx_treeview_item_checkedChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r55); const item_r53 = ctx.$implicit; const ctx_r54 = ɵngcc0.ɵɵnextContext(2); return ctx_r54.onItemCheckedChange(item_r53, $event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const item_r53 = ctx.$implicit;
        const ctx_r52 = ɵngcc0.ɵɵnextContext(2);
        const _r0 = ɵngcc0.ɵɵreference(1);
        ɵngcc0.ɵɵproperty("config", ctx_r52.config)("item", item_r53)("template", ctx_r52.itemTemplate || _r0);
    }
}
function TreeviewComponent_div_7_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 44);
        ɵngcc0.ɵɵtemplate(1, TreeviewComponent_div_7_ngx_treeview_item_1_Template, 1, 3, "ngx-treeview-item", 45);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r5 = ɵngcc0.ɵɵnextContext();
        ɵngcc0.ɵɵstyleProp("max-height", ctx_r5.maxHeight, "px");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.filterItems);
    }
}
function TreeviewComponent_div_8_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 47);
        ɵngcc0.ɵɵtext(1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r6 = ɵngcc0.ɵɵnextContext();
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.i18n.getFilterNoItemsFoundText(), " ");
    }
}
function TreeviewItemComponent_div_0_ng_template_1_Template(rf, ctx) { }
function TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = ɵngcc0.ɵɵgetCurrentView();
        ɵngcc0.ɵɵelementStart(0, "ngx-treeview-item", 5);
        ɵngcc0.ɵɵlistener("checkedChange", function TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template_ngx_treeview_item_checkedChange_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r6); const child_r4 = ctx.$implicit; const ctx_r5 = ɵngcc0.ɵɵnextContext(3); return ctx_r5.onChildCheckedChange(child_r4, $event); });
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const child_r4 = ctx.$implicit;
        const ctx_r3 = ɵngcc0.ɵɵnextContext(3);
        ɵngcc0.ɵɵproperty("config", ctx_r3.config)("item", child_r4)("template", ctx_r3.template);
    }
}
function TreeviewItemComponent_div_0_div_2_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div");
        ɵngcc0.ɵɵtemplate(1, TreeviewItemComponent_div_0_div_2_ngx_treeview_item_1_Template, 1, 3, "ngx-treeview-item", 4);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r2 = ɵngcc0.ɵɵnextContext(2);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx_r2.item.children);
    }
}
const _c0 = function (a0, a1, a2) { return { item: a0, onCollapseExpand: a1, onCheckedChange: a2 }; };
function TreeviewItemComponent_div_0_Template(rf, ctx) {
    if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 1);
        ɵngcc0.ɵɵtemplate(1, TreeviewItemComponent_div_0_ng_template_1_Template, 0, 0, "ng-template", 2);
        ɵngcc0.ɵɵtemplate(2, TreeviewItemComponent_div_0_div_2_Template, 2, 1, "div", 3);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r0 = ɵngcc0.ɵɵnextContext();
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction3(3, _c0, ctx_r0.item, ctx_r0.onCollapseExpand, ctx_r0.onCheckedChange));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.item.collapsed);
    }
}
class DropdownDirective {
    constructor() {
        this.internalOpen = false;
        this.openChange = new EventEmitter();
    }
    get isOpen() {
        return this.internalOpen;
    }
    onKeyupEsc() {
        this.close();
    }
    onDocumentClick(event) {
        if (event.button !== 2 && !this.isEventFromToggle(event)) {
            this.close();
        }
    }
    open() {
        if (!this.internalOpen) {
            this.internalOpen = true;
            this.openChange.emit(true);
        }
    }
    close() {
        if (this.internalOpen) {
            this.internalOpen = false;
            this.openChange.emit(false);
        }
    }
    toggle() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    isEventFromToggle(event) {
        return !isNil(this.toggleElement) && this.toggleElement.contains(event.target);
    }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(); };
DropdownDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({
    type: DropdownDirective, selectors: [["", "ngxDropdown", ""]], hostVars: 2, hostBindings: function DropdownDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
            ɵngcc0.ɵɵlistener("keyup.esc", function DropdownDirective_keyup_esc_HostBindingHandler() { return ctx.onKeyupEsc(); })("click", function DropdownDirective_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, ɵngcc0.ɵɵresolveDocument);
        } if (rf & 2) {
            ɵngcc0.ɵɵclassProp("show", ctx.isOpen);
        }
    }, inputs: { internalOpen: ["open", "internalOpen"] }, outputs: { openChange: "openChange" }, exportAs: ["ngxDropdown"]
});
DropdownDirective.propDecorators = {
    internalOpen: [{ type: Input, args: ['open',] }],
    openChange: [{ type: Output }],
    isOpen: [{ type: HostBinding, args: ['class.show',] }],
    onKeyupEsc: [{ type: HostListener, args: ['keyup.esc',] }],
    onDocumentClick: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(DropdownDirective, [{
        type: Directive,
        args: [{
            selector: '[ngxDropdown]',
            exportAs: 'ngxDropdown'
        }]
    }], function () { return []; }, {
        internalOpen: [{
            type: Input,
            args: ['open']
        }], openChange: [{
            type: Output
        }], isOpen: [{
            type: HostBinding,
            args: ['class.show']
        }], onKeyupEsc: [{
            type: HostListener,
            args: ['keyup.esc']
        }], onDocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }]
    });
})();

class DropdownMenuDirective {
    constructor(dropdown) {
        this.dropdown = dropdown;
    }
}
DropdownMenuDirective.ɵfac = function DropdownMenuDirective_Factory(t) { return new (t || DropdownMenuDirective)(ɵngcc0.ɵɵdirectiveInject(DropdownDirective)); };
DropdownMenuDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({
    type: DropdownMenuDirective, selectors: [["", "ngxDropdownMenu", ""]], hostVars: 4, hostBindings: function DropdownMenuDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
            ɵngcc0.ɵɵclassProp("dropdown-menu", true)("show", ctx.dropdown.isOpen);
        }
    }
});
DropdownMenuDirective.ctorParameters = () => [
    { type: DropdownDirective }
];
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(DropdownMenuDirective, [{
        type: Directive,
        args: [{
            selector: '[ngxDropdownMenu]',
            host: {
                '[class.dropdown-menu]': 'true',
                '[class.show]': 'dropdown.isOpen'
            }
        }]
    }], function () { return [{ type: DropdownDirective }]; }, null);
})();

class DropdownToggleDirective {
    constructor(dropdown, elementRef) {
        this.dropdown = dropdown;
        dropdown.toggleElement = elementRef.nativeElement;
    }
}
DropdownToggleDirective.ɵfac = function DropdownToggleDirective_Factory(t) { return new (t || DropdownToggleDirective)(ɵngcc0.ɵɵdirectiveInject(DropdownDirective), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
DropdownToggleDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({
    type: DropdownToggleDirective, selectors: [["", "ngxDropdownToggle", ""]], hostAttrs: ["aria-haspopup", "true", 1, "dropdown-toggle"], hostVars: 1, hostBindings: function DropdownToggleDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
            ɵngcc0.ɵɵlistener("click", function DropdownToggleDirective_click_HostBindingHandler() { return ctx.dropdown.toggle(); });
        } if (rf & 2) {
            ɵngcc0.ɵɵattribute("aria-expanded", ctx.dropdown.isOpen);
        }
    }
});
DropdownToggleDirective.ctorParameters = () => [
    { type: DropdownDirective },
    { type: ElementRef }
];
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(DropdownToggleDirective, [{
        type: Directive,
        args: [{
            selector: '[ngxDropdownToggle]',
            host: {
                class: 'dropdown-toggle',
                'aria-haspopup': 'true',
                '[attr.aria-expanded]': 'dropdown.isOpen',
                '(click)': 'dropdown.toggle()'
            }
        }]
    }], function () { return [{ type: DropdownDirective }, { type: ɵngcc0.ElementRef }]; }, null);
})();

class TreeviewI18n {
}
TreeviewI18n.ɵfac = function TreeviewI18n_Factory(t) { return new (t || TreeviewI18n)(); };
TreeviewI18n.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TreeviewI18n, factory: TreeviewI18n.ɵfac });
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(TreeviewI18n, [{
        type: Injectable
    }], null, null);
})();
class DefaultTreeviewI18n extends TreeviewI18n {
    getText(selection) {
        if (selection.uncheckedItems.length === 0) {
            if (selection.checkedItems.length > 0) {
                return this.getAllCheckboxText();
            }
            else {
                return '';
            }
        }

        switch (selection.checkedItems.length) {
            case 0:
                return 'Select options';
            case 1:
                return '1  option selected';
            default:
                return `${selection.checkedItems.length} options selected`;
        }
    }
    getAllCheckboxText() {
        return 'All';
    }
    getFilterPlaceholder() {
        return 'Filter';
    }
    getFilterNoItemsFoundText() {
        return 'No items found';
    }
    getTooltipCollapseExpandText(isCollapse) {
        return isCollapse ? 'Expand' : 'Collapse';
    }
}
DefaultTreeviewI18n.ɵfac = function DefaultTreeviewI18n_Factory(t) { return ɵDefaultTreeviewI18n_BaseFactory(t || DefaultTreeviewI18n); };
DefaultTreeviewI18n.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DefaultTreeviewI18n, factory: DefaultTreeviewI18n.ɵfac });
const ɵDefaultTreeviewI18n_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(DefaultTreeviewI18n);
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(DefaultTreeviewI18n, [{
        type: Injectable
    }], null, null);
})();

class TreeviewConfig {
    constructor() {
        this.hasAllCheckBox = true;
        this.hasFilter = false;
        this.hasCollapseExpand = false;
        this.decoupleChildFromParent = false;
        this.maxHeight = 500;
    }
    get hasDivider() {
        return this.hasFilter || this.hasAllCheckBox || this.hasCollapseExpand;
    }
    static create(fields) {
        const config = new TreeviewConfig();
        Object.assign(config, fields);
        return config;
    }
}
TreeviewConfig.ɵfac = function TreeviewConfig_Factory(t) { return new (t || TreeviewConfig)(); };
TreeviewConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TreeviewConfig, factory: TreeviewConfig.ɵfac });
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(TreeviewConfig, [{
        type: Injectable
    }], function () { return []; }, null);
})();

const TreeviewHelper = {
    findItem,
    findItemInList,
    findParent,
    removeItem,
    concatSelection
};
function findItem(root, value) {
    if (isNil(root)) {
        return undefined;
    }
    if (root.value === value) {
        return root;
    }
    if (root.children) {
        for (const child of root.children) {
            const foundItem = findItem(child, value);
            if (foundItem) {
                return foundItem;
            }
        }
    }
    return undefined;
}
function findItemInList(list, value) {
    if (isNil(list)) {
        return undefined;

    }
    for (const item of list) {
        const foundItem = findItem(item, value);
        if (foundItem) {
            return foundItem;
        }
    }
    return undefined;
}
function findParent(root, item) {
    if (isNil(root) || isNil(root.children)) {
        return undefined;
    }
    for (const child of root.children) {
        if (child === item) {
            return root;
        }
        else {
            const parent = findParent(child, item);
            if (parent) {
                return parent;
            }
        }
    }
    return undefined;
}
function removeItem(root, item) {
    const parent = findParent(root, item);
    if (parent) {
        pull(parent.children, item);
        if (parent.children.length === 0) {
            parent.children = undefined;
        }
        else {
            parent.correctChecked();
        }
        return true;
    }
    return false;
}
function concatSelection(items, checked, unchecked) {
    let checkedItems = [...checked];
    let uncheckedItems = [...unchecked];
    for (const item of items) {
        const selection = item.getSelection();
        checkedItems = concat(checkedItems, selection.checkedItems);
        uncheckedItems = concat(uncheckedItems, selection.uncheckedItems);
    }
    return {
        checked: checkedItems,
        unchecked: uncheckedItems
    };
}

class TreeviewItem {
    constructor(item, autoCorrectChecked = false) {
        this.internalDisabled = false;
        this.internalChecked = false;
        this.internalCollapsed = false;
        if (isNil(item)) {
            throw new Error('Item must be defined');
        }
        if (isString(item.text)) {
            this.text = item.text;
        }
        else {
            throw new Error('A text of item must be string object');
        }

        this.value = item.value;
        if (isBoolean(item.checked)) {
            this.checked = item.checked;
        }
        if (isBoolean(item.collapsed)) {
            this.collapsed = item.collapsed;
        }
        if (isBoolean(item.disabled)) {
            this.disabled = item.disabled;
        }
        if (!isNil(item.children) && item.children.length > 0) {
            this.children = item.children.map(child => {
                if (this.disabled === true) {
                    child.disabled = true;
                }
                return new TreeviewItem(child);
            });
        }
        if (autoCorrectChecked) {
            this.correctChecked();
        }
    }
    get checked() {
        return this.internalChecked;
    }
    set checked(value) {
        if (!this.internalDisabled) {
            if (this.internalChecked !== value) {
                this.internalChecked = value;
            }
        }
    }
    get indeterminate() {
        return this.checked === undefined;
    }
    setCheckedRecursive(value) {
        if (!this.internalDisabled) {
            this.internalChecked = value;
            if (!isNil(this.internalChildren)) {
                this.internalChildren.forEach(child => child.setCheckedRecursive(value));
            }
        }
    }
    get disabled() {
        return this.internalDisabled;
    }
    set disabled(value) {
        if (this.internalDisabled !== value) {
            this.internalDisabled = value;
            if (!isNil(this.internalChildren)) {
                this.internalChildren.forEach(child => child.disabled = value);
            }
        }
    }
    get collapsed() {
        return this.internalCollapsed;
    }
    set collapsed(value) {
        if (this.internalCollapsed !== value) {
            this.internalCollapsed = value;
        }
    }
    setCollapsedRecursive(value) {
        this.internalCollapsed = value;
        if (!isNil(this.internalChildren)) {
            this.internalChildren.forEach(child => child.setCollapsedRecursive(value));
        }
    }
    get children() {
        return this.internalChildren;
    }
    set children(value) {
        if (this.internalChildren !== value) {
            if (!isNil(value) && value.length === 0) {
                throw new Error('Children must be not an empty array');
            }
            this.internalChildren = value;
            if (!isNil(this.internalChildren)) {
                let checked = null;
                this.internalChildren.forEach(child => {
                    if (checked === null) {
                        checked = child.checked;
                    }
                    else {
                        if (child.checked !== checked) {
                            checked = undefined;
                            return;
                        }
                    }
                });
                this.internalChecked = checked;
            }
        }
    }
    getSelection() {
        let checkedItems = [];
        let uncheckedItems = [];
        if (isNil(this.internalChildren)) {
            if (this.internalChecked) {
                checkedItems.push(this);
            }
            else {
                uncheckedItems.push(this);
            }
        }

        else {
            var flag = 0;
            for (let i = 0; i < this.internalChildren.length; i++) {
                if (this.internalChildren[i].internalChildren) {
                    flag = 1;
                    break;
                }
            }

            if (flag == 0) {
                const selection = TreeviewHelper.concatSelection(this.internalChildren, checkedItems, uncheckedItems);
                //if all the children are checked
                if (selection.unchecked.length <= 0) {
                    if (this.checked) {
                        checkedItems.push(this);
                    }
                    // checkedItems.push(this);
                    for (let i = 0; i < this.children.length; i++) {
                        checkedItems.push(this.children[i]);
                    }
                }
                //if none of the children are selected
                else if (selection.checked.length <= 0) {
                    if (this.checked) {
                        checkedItems.push(this);
                    }
                }
                else {
                    if (this.checked) {
                        checkedItems.push(this);
                        for (let i = 0; i < this.children.length; i++) {
                            if (this.children[i].checked) {
                                checkedItems.push(this.children[i]);
                            }
                        }
                    }
                    else {
                        checkedItems = selection.checked;
                        uncheckedItems = selection.unchecked;
                    }
                }
            }

            else {
                for (let i = 0; i < this.internalChildren.length; i++) {
                    // console.log(this.internalChildren[i].internalChildren[i]);
                    // console.log(this, this.internalChildren[i].internalChecked);
                    for (let j = 0; j < this.internalChildren[i].internalChildren.length; j++) {
                        if (isNil(this.internalChildren[i].internalChildren[j].internalChildren)) {
                            if (this.internalChildren[i].internalChildren[j].internalChecked) {
                                checkedItems.push(this.internalChildren[i].internalChildren[j]);
                            }
                            else {
                                uncheckedItems.push(this.internalChildren[i].internalChildren[j]);
                            }

                        }
                        else {
                            for (let k = 0; k < this.internalChildren[i].internalChildren[j].internalChildren.length; k++) {
                                if (isNil(this.internalChildren[i].internalChildren[j].internalChildren[k].internalChildren)) {
                                    if (this.internalChildren[i].internalChildren[j].internalChildren[k].internalChecked) {
                                        checkedItems.push(this.internalChildren[i].internalChildren[j].internalChildren[k]);
                                    }
                                    else {
                                        uncheckedItems.push(this.internalChildren[i].internalChildren[j].internalChildren[k]);
                                    }

                                }
                            }

                            const selection = TreeviewHelper.concatSelection(this.internalChildren[i].internalChildren[j].internalChildren, checkedItems, uncheckedItems);
                            //if all the children are checked
                            if (selection.unchecked.length <= 0) {
                                if (this.internalChildren[i].internalChildren[j].checked) {
                                    checkedItems.push(this.internalChildren[i].internalChildren[j]);
                                }
                            }
                            //if none of the children are selected
                            else if (selection.checked.length <= 0) {
                                if (this.internalChildren[i].internalChildren[j].checked) {
                                    checkedItems.push(this.internalChildren[i].internalChildren[j]);
                                }
                            }
                            else {
                                if (this.internalChildren[i].internalChildren[j].checked) {
                                    checkedItems.push(this.internalChildren[i].internalChildren[j]);
                                }
                            }
                        }
                    }

                    const selection = TreeviewHelper.concatSelection(this.internalChildren[i].internalChildren, checkedItems, uncheckedItems);
                    //if all the children are checked
                    if (selection.unchecked.length <= 0) {
                        if (this.internalChildren[i].checked) {
                            checkedItems.push(this.internalChildren[i]);
                        }
                    }
                    //if none of the children are selected
                    else if (selection.checked.length <= 0) {
                        if (this.internalChildren[i].checked) {
                            checkedItems.push(this.internalChildren[i]);
                        }
                    }
                    else {
                        if (this.internalChildren[i].checked) {
                            checkedItems.push(this.internalChildren[i]);
                        }
                    }
                }
                if (this.checked) {
                    checkedItems.push(this);
                }
            }
        }
        return {
            checkedItems,
            uncheckedItems
        };
    }
    correctChecked() {
        this.internalChecked = this.getCorrectChecked();
    }
    getCorrectChecked() {
        let checked = null;
        if (!isNil(this.internalChildren)) {
            for (const child of this.internalChildren) {
                child.internalChecked = child.getCorrectChecked();
                if (checked === null) {
                    checked = child.internalChecked;
                }
                else if (checked !== child.internalChecked) {
                    checked = undefined;
                    break;
                }
            }
        }
        else {
            checked = this.checked;
        }
        return checked;
    }
}

class TreeviewEventParser {
}
TreeviewEventParser.ɵfac = function TreeviewEventParser_Factory(t) { return new (t || TreeviewEventParser)(); };
TreeviewEventParser.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: TreeviewEventParser, factory: TreeviewEventParser.ɵfac });
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(TreeviewEventParser, [{
        type: Injectable
    }], null, null);
})();
class DefaultTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const checkedItems = component.selection.checkedItems;
        if (!isNil(checkedItems)) {
            return checkedItems.map(item => item.text);
        }
        return [];
    }
}
DefaultTreeviewEventParser.ɵfac = function DefaultTreeviewEventParser_Factory(t) { return ɵDefaultTreeviewEventParser_BaseFactory(t || DefaultTreeviewEventParser); };
DefaultTreeviewEventParser.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DefaultTreeviewEventParser, factory: DefaultTreeviewEventParser.ɵfac });
const ɵDefaultTreeviewEventParser_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(DefaultTreeviewEventParser);
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(DefaultTreeviewEventParser, [{
        type: Injectable
    }], null, null);
})();
class DownlineTreeviewEventParser extends TreeviewEventParser {
    getSelectedChange(component) {
        const items = component.items;
        if (!isNil(items)) {
            let result = [];
            items.forEach(item => {
                const links = this.getLinks(item, null);
                if (!isNil(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        return [];
    }
    getLinks(item, parent) {
        if (!isNil(item.children)) {
            const link = {
                item,
                parent
            };
            let result = [];
            item.children.forEach(child => {
                const links = this.getLinks(child, link);
                if (!isNil(links)) {
                    result = result.concat(links);
                }
            });
            return result;
        }
        if (item.checked) {
            return [{
                item,
                parent
            }];
        }
        return null;
    }
}
DownlineTreeviewEventParser.ɵfac = function DownlineTreeviewEventParser_Factory(t) { return ɵDownlineTreeviewEventParser_BaseFactory(t || DownlineTreeviewEventParser); };
DownlineTreeviewEventParser.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DownlineTreeviewEventParser, factory: DownlineTreeviewEventParser.ɵfac });
const ɵDownlineTreeviewEventParser_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(DownlineTreeviewEventParser);
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(DownlineTreeviewEventParser, [{
        type: Injectable
    }], null, null);
})();
class OrderDownlineTreeviewEventParser extends TreeviewEventParser {
    constructor() {
        super(...arguments);
        this.currentDownlines = [];
        this.parser = new DownlineTreeviewEventParser();
    }
    getSelectedChange(component) {
        const newDownlines = this.parser.getSelectedChange(component);
        if (this.currentDownlines.length === 0) {
            this.currentDownlines = newDownlines;
        }
        else {
            const intersectDownlines = [];
            this.currentDownlines.forEach(downline => {
                let foundIndex = -1;
                const length = newDownlines.length;
                for (let i = 0; i < length; i++) {
                    if (downline.item.value === newDownlines[i].item.value) {
                        foundIndex = i;
                        break;
                    }
                }
                if (foundIndex !== -1) {
                    intersectDownlines.push(newDownlines[foundIndex]);
                    newDownlines.splice(foundIndex, 1);
                }
            });
            this.currentDownlines = intersectDownlines.concat(newDownlines);
        }
        return this.currentDownlines;
    }
}
OrderDownlineTreeviewEventParser.ɵfac = function OrderDownlineTreeviewEventParser_Factory(t) { return ɵOrderDownlineTreeviewEventParser_BaseFactory(t || OrderDownlineTreeviewEventParser); };
OrderDownlineTreeviewEventParser.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: OrderDownlineTreeviewEventParser, factory: OrderDownlineTreeviewEventParser.ɵfac });
const ɵOrderDownlineTreeviewEventParser_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(OrderDownlineTreeviewEventParser);
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(OrderDownlineTreeviewEventParser, [{
        type: Injectable
    }], null, null);
})();

class FilterTreeviewItem extends TreeviewItem {
    constructor(item) {
        super({
            text: item.text,
            value: item.value,
            disabled: item.disabled,
            checked: item.checked,
            collapsed: item.collapsed,
            children: item.children
        });
        this.refItem = item;
    }
    updateRefChecked() {
        this.children.forEach(child => {
            if (child instanceof FilterTreeviewItem) {
                child.updateRefChecked();
            }
        });
        let refChecked = this.checked;
        if (refChecked) {
            for (const refChild of this.refItem.children) {
                if (!refChild.checked) {
                    refChecked = false;
                    break;
                }
            }
        }
        this.refItem.checked = refChecked;
    }
}
class TreeviewComponent {
    constructor(i18n, defaultConfig, eventParser) {
        this.i18n = i18n;
        this.defaultConfig = defaultConfig;
        this.eventParser = eventParser;
        this.selectedChange = new EventEmitter();
        this.filterChange = new EventEmitter();
        this.filterText = '';
        this.config = this.defaultConfig;
        this.allItem = new TreeviewItem({ text: 'All', value: undefined });
    }
    get hasFilterItems() {
        return !isNil(this.filterItems) && this.filterItems.length > 0;
    }
    get maxHeight() {
        return `${this.config.maxHeight}`;
    }
    ngOnInit() {
        this.createHeaderTemplateContext();
        this.generateSelection();
    }
    ngOnChanges(changes) {
        const itemsSimpleChange = changes.items;
        if (!isNil(itemsSimpleChange) && !isNil(this.items)) {
            this.updateFilterItems();
            this.updateCollapsedOfAll();
            this.raiseSelectedChange();
        }
    }
    onAllCollapseExpand() {
        this.allItem.collapsed = !this.allItem.collapsed;
        this.filterItems.forEach(item => item.setCollapsedRecursive(this.allItem.collapsed));
    }
    onFilterTextChange(text) {
        this.filterText = text;
        this.filterChange.emit(text);
        this.updateFilterItems();
    }
    onAllCheckedChange() {
        const checked = this.allItem.checked;
        this.filterItems.forEach(item => {
            item.setCheckedRecursive(checked);
            if (item instanceof FilterTreeviewItem) {
                item.updateRefChecked();
            }
        });
        this.raiseSelectedChange();
    }

    onItemCheckedChange(item, checked) {
        // console.log(item);
        // let checkedItems = [];
        // let uncheckedItems = [];
        // const selection = TreeviewHelper.concatSelection(this.items, checkedItems, uncheckedItems);
        // for (let i = 0; i < this.items.length; i++) {

        //     if (this.items[i].text == item.text) {
        //         console.log(this.items[i].text, item.text);
        //         this.items[i].internalChecked = false;
        //         selection.checked.splice(0, 1);
        //         break;
        //     }
        // }

        // console.log(selection);

        if (item instanceof FilterTreeviewItem) {
            item.updateRefChecked();
        }
        this.updateCheckedOfAll();
        this.raiseSelectedChange();
    }
    raiseSelectedChange() {
        this.generateSelection();
        const values = this.eventParser.getSelectedChange(this);
        const checks = this.selection.checkedItems;
        setTimeout(() => {
            this.selectedChange.emit(checks);

        });
    }
    createHeaderTemplateContext() {
        this.headerTemplateContext = {
            config: this.config,
            item: this.allItem,
            onCheckedChange: () => this.onAllCheckedChange(),
            onCollapseExpand: () => this.onAllCollapseExpand(),
            onFilterTextChange: (text) => this.onFilterTextChange(text)
        };
    }
    generateSelection() {
        let checkedItems = [];
        let uncheckedItems = [];
        if (!isNil(this.items)) {
            const selection = TreeviewHelper.concatSelection(this.items, checkedItems, uncheckedItems);
            checkedItems = selection.checked;
            uncheckedItems = selection.unchecked;
        }
        this.selection = {
            checkedItems,
            uncheckedItems
        };
    }
    updateFilterItems() {
        if (this.filterText !== '') {
            const filterItems = [];
            const filterText = this.filterText.toLowerCase();
            this.items.forEach(item => {
                const newItem = this.filterItem(item, filterText);
                if (!isNil(newItem)) {
                    filterItems.push(newItem);
                }
            });
            this.filterItems = filterItems;
        }
        else {
            this.filterItems = this.items;
        }
        this.updateCheckedOfAll();
    }
    filterItem(item, filterText) {
        const isMatch = includes(item.text.toLowerCase(), filterText);
        if (isMatch) {
            return item;
        }
        else {
            if (!isNil(item.children)) {
                const children = [];
                item.children.forEach(child => {
                    const newChild = this.filterItem(child, filterText);
                    if (!isNil(newChild)) {
                        children.push(newChild);
                    }
                });
                if (children.length > 0) {
                    const newItem = new FilterTreeviewItem(item);
                    newItem.collapsed = false;
                    newItem.children = children;
                    return newItem;
                }
            }
        }
        return undefined;
    }
    updateCheckedOfAll() {
        let itemChecked = null;
        for (const filterItem of this.filterItems) {
            if (itemChecked === null) {
                itemChecked = filterItem.checked;
            }
            else if (itemChecked !== filterItem.checked) {
                itemChecked = undefined;
                break;
            }
        }
        if (itemChecked === null) {
            itemChecked = false;
        }
        this.allItem.checked = itemChecked;
    }
    updateCollapsedOfAll() {
        let hasItemExpanded = false;
        for (const filterItem of this.filterItems) {
            if (!filterItem.collapsed) {
                hasItemExpanded = true;
                break;
            }
        }
        this.allItem.collapsed = !hasItemExpanded;
    }
}
TreeviewComponent.ɵfac = function TreeviewComponent_Factory(t) { return new (t || TreeviewComponent)(ɵngcc0.ɵɵdirectiveInject(TreeviewI18n), ɵngcc0.ɵɵdirectiveInject(TreeviewConfig), ɵngcc0.ɵɵdirectiveInject(TreeviewEventParser)); };
TreeviewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
    type: TreeviewComponent, selectors: [["ngx-treeview"]],
    inputs: { config: "config", headerTemplate: "headerTemplate", itemTemplate: "itemTemplate", items: "items" },
    outputs: { selectedChange: "selectedChange", filterChange: "filterChange" },
    features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 9, vars: 5,
    consts: [["defaultItemTemplate", ""], ["defaultHeaderTemplate", ""], [1, "treeview-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["class", "treeview-container", 3, "max-height", 4, "ngSwitchCase"], ["class", "treeview-text", 4, "ngSwitchCase"], [1, "form-inline", "row-item"], ["aria-hidden", "true", 3, "ngSwitch", "click", 4, "ngIf"], [1, "form-check"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "disabled", "indeterminate", "ngModelChange"], [1, "form-check-label", 3, "click"], ["aria-hidden", "true", 3, "ngSwitch", "click"],
    ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "class", "bi bi-caret-right-fill", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"],
    ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "class", "bi bi-caret-down-fill", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"],
    ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-right-fill"], ["d", "M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"],
    ["width", "0.8rem", "height", "0.8rem", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-down-fill"], ["d", "M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"], ["class", "row row-filter", 4, "ngIf"], [4, "ngIf"], [1, "row", "row-filter"], [1, "col-12"], ["type", "text", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["class", "row row-all", 4, "ngIf"], ["class", "dropdown-divider", 4, "ngIf"], [1, "row", "row-all"], ["class", "form-check form-check-inline", 4, "ngIf"], ["class", "float-right form-check-label", 3, "click", 4, "ngIf"], [1, "form-check", "form-check-inline"], ["type", "checkbox", 1, "form-check-input", 3, "ngModel", "indeterminate", "ngModelChange"], [1, "float-right", "form-check-label", 3, "click"], ["aria-hidden", "true", 3, "title", "ngSwitch"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "class", "bi bi-arrows-angle-expand", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "class", "bi bi-arrows-angle-contract", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 4, "ngSwitchCase"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrows-angle-expand"], ["fill-rule", "evenodd", "d", "M1.5 10.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M6.354 9.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm8.5-8.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z"], ["fill-rule", "evenodd", "d", "M10.036 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0V2h-3.5a.5.5 0 0 1-.5-.5z"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-arrows-angle-contract"], ["fill-rule", "evenodd", "d", "M9.5 2.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z"], ["fill-rule", "evenodd", "d", "M14.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm-7.5 7.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z"], ["fill-rule", "evenodd", "d", "M2.036 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V10h-3.5a.5.5 0 0 1-.5-.5z"], [1, "dropdown-divider"], [1, "treeview-container"], [3, "config", "item", "template", "checkedChange", 4, "ngFor", "ngForOf"], [3, "config", "item", "template", "checkedChange"], [1, "treeview-text"]], template: function TreeviewComponent_Template(rf, ctx) {
        if (rf & 1) {
            ɵngcc0.ɵɵtemplate(0, TreeviewComponent_ng_template_0_Template, 6, 5, "ng-template", null, 0, ɵngcc0.ɵɵtemplateRefExtractor);
            ɵngcc0.ɵɵtemplate(2, TreeviewComponent_ng_template_2_Template, 2, 2, "ng-template", null, 1, ɵngcc0.ɵɵtemplateRefExtractor);
            ɵngcc0.ɵɵelementStart(4, "div", 2);
            ɵngcc0.ɵɵtemplate(5, TreeviewComponent_ng_template_5_Template, 0, 0, "ng-template", 3);
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementStart(6, "div", 4);
            ɵngcc0.ɵɵtemplate(7, TreeviewComponent_div_7_Template, 2, 3, "div", 5);
            ɵngcc0.ɵɵtemplate(8, TreeviewComponent_div_8_Template, 2, 1, "div", 6);
            ɵngcc0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r2 = ɵngcc0.ɵɵreference(3);
            ɵngcc0.ɵɵadvance(5);
            ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx.headerTemplate || _r2)("ngTemplateOutletContext", ctx.headerTemplateContext);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngSwitch", ctx.hasFilterItems);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngSwitchCase", true);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngSwitchCase", false);
        }
    }, directives: function () { return [ɵngcc1.NgTemplateOutlet, ɵngcc1.NgSwitch, ɵngcc1.NgSwitchCase, ɵngcc1.NgIf, ɵngcc2.CheckboxControlValueAccessor, ɵngcc2.NgControlStatus, ɵngcc2.NgModel, ɵngcc2.DefaultValueAccessor, ɵngcc1.NgForOf, TreeviewItemComponent]; }, styles: ["[_nghost-%COMP%]   .treeview-header[_ngcontent-%COMP%]   .row-filter[_ngcontent-%COMP%]{margin-bottom:.5rem}[_nghost-%COMP%]   .treeview-header[_ngcontent-%COMP%]   .row-all[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .treeview-container[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]{flex-wrap:nowrap;margin-bottom:.3rem}[_nghost-%COMP%]   .treeview-container[_ngcontent-%COMP%]   .row-item[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%]{cursor:pointer;margin-right:.3rem}.treeview-container[_ngcontent-%COMP%]{overflow-y:auto;padding-right:.3rem}.treeview-text[_ngcontent-%COMP%]{padding:.3rem 0;white-space:nowrap}"]
});
TreeviewComponent.ctorParameters = () => [
    { type: TreeviewI18n },
    { type: TreeviewConfig },
    { type: TreeviewEventParser }
];
TreeviewComponent.propDecorators = {
    headerTemplate: [{ type: Input }],
    itemTemplate: [{ type: Input }],
    items: [{ type: Input }],
    config: [{ type: Input }],
    selectedChange: [{ type: Output }],
    filterChange: [{ type: Output }]
};
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(TreeviewComponent, [{
        type: Component,
        args: [{
            selector: 'ngx-treeview',
            template: "<ng-template #defaultItemTemplate let-item=\"item\" let-onCollapseExpand=\"onCollapseExpand\"\r\n  let-onCheckedChange=\"onCheckedChange\">\r\n  <div class=\"form-inline row-item\">\r\n    <i *ngIf=\"item.children\" (click)=\"onCollapseExpand()\" aria-hidden=\"true\" [ngSwitch]=\"item.collapsed\">\r\n      <svg *ngSwitchCase=\"true\" width=\"0.8rem\" height=\"0.8rem\" viewBox=\"0 0 16 16\" class=\"bi bi-caret-right-fill\"\r\n        fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path\r\n          d=\"M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z\" />\r\n      </svg>\r\n      <svg *ngSwitchCase=\"false\" width=\"0.8rem\" height=\"0.8rem\" viewBox=\"0 0 16 16\" class=\"bi bi-caret-down-fill\"\r\n        fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n        <path\r\n          d=\"M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z\" />\r\n      </svg>\r\n    </i>\r\n    <div class=\"form-check\">\r\n      <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"item.checked\" (ngModelChange)=\"onCheckedChange()\"\r\n        [disabled]=\"item.disabled\" [indeterminate]=\"item.indeterminate\" />\r\n      <label class=\"form-check-label\" (click)=\"item.checked = !item.checked; onCheckedChange()\">\r\n        {{item.text}}\r\n      </label>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-template #defaultHeaderTemplate let-config=\"config\" let-item=\"item\" let-onCollapseExpand=\"onCollapseExpand\"\r\n  let-onCheckedChange=\"onCheckedChange\" let-onFilterTextChange=\"onFilterTextChange\">\r\n  <div *ngIf=\"config.hasFilter\" class=\"row row-filter\">\r\n    <div class=\"col-12\">\r\n      <input class=\"form-control\" type=\"text\" [placeholder]=\"i18n.getFilterPlaceholder()\" [(ngModel)]=\"filterText\"\r\n        (ngModelChange)=\"onFilterTextChange($event)\" />\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"hasFilterItems\">\r\n    <div *ngIf=\"config.hasAllCheckBox || config.hasCollapseExpand\" class=\"row row-all\">\r\n      <div class=\"col-12\">\r\n        <div class=\"form-check form-check-inline\" *ngIf=\"config.hasAllCheckBox\">\r\n          <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"item.checked\" (ngModelChange)=\"onCheckedChange()\"\r\n            [indeterminate]=\"item.indeterminate\" />\r\n          <label class=\"form-check-label\" (click)=\"item.checked = !item.checked; onCheckedChange()\">\r\n            {{i18n.getAllCheckboxText()}}\r\n          </label>\r\n        </div>\r\n        <label *ngIf=\"config.hasCollapseExpand\" class=\"float-right form-check-label\" (click)=\"onCollapseExpand()\">\r\n          <i [title]=\"i18n.getTooltipCollapseExpandText(item.collapsed)\" aria-hidden=\"true\" [ngSwitch]=\"item.collapsed\">\r\n            <svg *ngSwitchCase=\"true\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrows-angle-expand\"\r\n              fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M1.5 10.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z\" />\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M6.354 9.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm8.5-8.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z\" />\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M10.036 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 1 1-1 0V2h-3.5a.5.5 0 0 1-.5-.5z\" />\r\n            </svg>\r\n            <svg *ngSwitchCase=\"false\" width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrows-angle-contract\"\r\n              fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M9.5 2.036a.5.5 0 0 1 .5.5v3.5h3.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5z\" />\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M14.354 1.646a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0zm-7.5 7.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708l4.5-4.5a.5.5 0 0 1 .708 0z\" />\r\n              <path fill-rule=\"evenodd\"\r\n                d=\"M2.036 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V10h-3.5a.5.5 0 0 1-.5-.5z\" />\r\n            </svg>\r\n          </i>\r\n        </label>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"config.hasDivider\" class=\"dropdown-divider\"></div>\r\n  </div>\r\n</ng-template>\r\n<div class=\"treeview-header\">\r\n  <ng-template [ngTemplateOutlet]=\"headerTemplate || defaultHeaderTemplate\"\r\n    [ngTemplateOutletContext]=\"headerTemplateContext\">\r\n  </ng-template>\r\n</div>\r\n<div [ngSwitch]=\"hasFilterItems\">\r\n  <div *ngSwitchCase=\"true\" class=\"treeview-container\" [style.max-height.px]=\"maxHeight\">\r\n    <ngx-treeview-item *ngFor=\"let item of filterItems\" [config]=\"config\" [item]=\"item\"\r\n      [template]=\"itemTemplate || defaultItemTemplate\" (checkedChange)=\"onItemCheckedChange(item, $event)\">\r\n    </ngx-treeview-item>\r\n  </div>\r\n  <div *ngSwitchCase=\"false\" class=\"treeview-text\">\r\n    {{i18n.getFilterNoItemsFoundText()}}\r\n  </div>\r\n</div>\r\n",
            styles: [":host .treeview-header .row-filter{margin-bottom:.5rem}:host .treeview-header .row-all .bi{cursor:pointer}:host .treeview-container .row-item{flex-wrap:nowrap;margin-bottom:.3rem}:host .treeview-container .row-item .bi{cursor:pointer;margin-right:.3rem}.treeview-container{overflow-y:auto;padding-right:.3rem}.treeview-text{padding:.3rem 0;white-space:nowrap}"]
        }]
    }], function () { return [{ type: TreeviewI18n }, { type: TreeviewConfig }, { type: TreeviewEventParser }]; }, {
        selectedChange: [{
            type: Output
        }], filterChange: [{
            type: Output
        }], config: [{
            type: Input
        }], headerTemplate: [{
            type: Input
        }], itemTemplate: [{
            type: Input
        }], items: [{
            type: Input
        }]
    });
})();

class DropdownTreeviewComponent {
    constructor(i18n, defaultConfig) {
        this.i18n = i18n;
        this.defaultConfig = defaultConfig;
        this.buttonClass = 'btn-outline-secondary';
        this.selectedChange = new EventEmitter(true);
        this.filterChange = new EventEmitter();
        this.config = this.defaultConfig;
    }
    onSelectedChange(values) {
        this.buttonLabel = this.i18n.getText(this.treeviewComponent.selection);
        this.selectedChange.emit(values);
    }
    onFilterChange(text) {
        this.filterChange.emit(text);
    }
}
DropdownTreeviewComponent.ɵfac = function DropdownTreeviewComponent_Factory(t) { return new (t || DropdownTreeviewComponent)(ɵngcc0.ɵɵdirectiveInject(TreeviewI18n), ɵngcc0.ɵɵdirectiveInject(TreeviewConfig)); };
DropdownTreeviewComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
    type: DropdownTreeviewComponent, selectors: [["ngx-dropdown-treeview"]], viewQuery: function DropdownTreeviewComponent_Query(rf, ctx) {
        if (rf & 1) {
            ɵngcc0.ɵɵviewQuery(TreeviewComponent, true);
        } if (rf & 2) {
            var _t;
            ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.treeviewComponent = _t.first);
        }
    }, inputs: { buttonClass: "buttonClass", config: "config", headerTemplate: "headerTemplate", itemTemplate: "itemTemplate", items: "items" }, outputs: { selectedChange: "selectedChange", filterChange: "filterChange" }, decls: 6, vars: 6, consts: [["ngxDropdown", "", 1, "dropdown"], ["type", "button", "role", "button", "ngxDropdownToggle", "", 1, "btn", 3, "ngClass"], ["ngxDropdownMenu", "", "aria-labelledby", "dropdownMenu", 3, "click"], [1, "dropdown-container"], [3, "config", "headerTemplate", "items", "itemTemplate", "selectedChange", "filterChange"]], template: function DropdownTreeviewComponent_Template(rf, ctx) {
        if (rf & 1) {
            ɵngcc0.ɵɵelementStart(0, "div", 0);
            ɵngcc0.ɵɵelementStart(1, "button", 1);
            ɵngcc0.ɵɵtext(2);
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementStart(3, "div", 2);
            ɵngcc0.ɵɵlistener("click", function DropdownTreeviewComponent_Template_div_click_3_listener($event) { return $event.stopPropagation(); });
            ɵngcc0.ɵɵelementStart(4, "div", 3);
            ɵngcc0.ɵɵelementStart(5, "ngx-treeview", 4);
            ɵngcc0.ɵɵlistener("selectedChange", function DropdownTreeviewComponent_Template_ngx_treeview_selectedChange_5_listener($event) { return ctx.onSelectedChange($event); })("filterChange", function DropdownTreeviewComponent_Template_ngx_treeview_filterChange_5_listener($event) { return ctx.onFilterChange($event); });
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementEnd();
            ɵngcc0.ɵɵelementEnd();
        } if (rf & 2) {
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵproperty("ngClass", ctx.buttonClass);
            ɵngcc0.ɵɵadvance(1);
            ɵngcc0.ɵɵtextInterpolate1(" ", ctx.buttonLabel, " ");
            ɵngcc0.ɵɵadvance(3);
            ɵngcc0.ɵɵproperty("config", ctx.config)("headerTemplate", ctx.headerTemplate)("items", ctx.items)("itemTemplate", ctx.itemTemplate);
        }
    }, directives: [DropdownDirective, DropdownToggleDirective, ɵngcc1.NgClass, DropdownMenuDirective, TreeviewComponent], styles: [".dropdown[_ngcontent-%COMP%]{display:inline-block;width:100%}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:.9rem;overflow:hidden;padding-right:30px;text-align:left;text-overflow:ellipsis;width:100%}.dropdown[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:after{margin-top:.6rem;position:absolute;right:.6rem}.dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-container[_ngcontent-%COMP%]{padding:0 .6rem}"]
});
DropdownTreeviewComponent.ctorParameters = () => [
    { type: TreeviewI18n },
    { type: TreeviewConfig }
];
DropdownTreeviewComponent.propDecorators = {
    buttonClass: [{ type: Input }],
    headerTemplate: [{ type: Input }],
    itemTemplate: [{ type: Input }],
    items: [{ type: Input }],
    config: [{ type: Input }],
    selectedChange: [{ type: Output }],
    filterChange: [{ type: Output }],
    treeviewComponent: [{ type: ViewChild, args: [TreeviewComponent, { static: false },] }]
};
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(DropdownTreeviewComponent, [{
        type: Component,
        args: [{
            selector: 'ngx-dropdown-treeview',
            template: "<div class=\"dropdown\" ngxDropdown>\r\n  <button class=\"btn\" [ngClass]=\"buttonClass\" type=\"button\" role=\"button\" ngxDropdownToggle>\r\n    {{buttonLabel}}\r\n  </button>\r\n  <div ngxDropdownMenu aria-labelledby=\"dropdownMenu\" (click)=\"$event.stopPropagation()\">\r\n    <div class=\"dropdown-container\">\r\n      <ngx-treeview [config]=\"config\" [headerTemplate]=\"headerTemplate\" [items]=\"items\" [itemTemplate]=\"itemTemplate\"\r\n        (selectedChange)=\"onSelectedChange($event)\" (filterChange)=\"onFilterChange($event)\">\r\n      </ngx-treeview>\r\n     </div>\r\n   </div>\r\n</div>\r\n",
            styles: [".dropdown{display:inline-block;width:100%}.dropdown button{margin-right:.9rem;overflow:hidden;padding-right:30px;text-align:left;text-overflow:ellipsis;width:100%}.dropdown button:after{margin-top:.6rem;position:absolute;right:.6rem}.dropdown .dropdown-menu .dropdown-container{padding:0 .6rem}"]
        }]
    }], function () { return [{ type: TreeviewI18n }, { type: TreeviewConfig }]; }, {
        buttonClass: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }], filterChange: [{
            type: Output
        }], config: [{
            type: Input
        }], headerTemplate: [{
            type: Input
        }], itemTemplate: [{
            type: Input
        }], items: [{
            type: Input
        }], treeviewComponent: [{
            type: ViewChild,
            args: [TreeviewComponent, { static: false }]
        }]
    });
})();

class TreeviewItemComponent {
    constructor(defaultConfig) {
        this.defaultConfig = defaultConfig;
        this.checkedChange = new EventEmitter();
        this.onCollapseExpand = () => {
            this.item.collapsed = !this.item.collapsed;
        };
        this.onCheckedChange = () => {
            const checked = this.item.checked;
            if (!isNil(this.item.children) || !this.config.decoupleChildFromParent) {
                this.item.children.forEach(child => child.setCheckedRecursive(checked));
            }
            this.checkedChange.emit(checked);
        };
        this.config = this.defaultConfig;
    }
    onChildCheckedChange(child, checked) {
        var count = 0;
        if (this.config.decoupleChildFromParent) {
            let itemChecked = null;
            for (const childItem of this.item.children) {
                if (itemChecked === null) {
                    itemChecked = childItem.checked;
                }
                else if (itemChecked !== childItem.checked) {
                    itemChecked = true;
                    // break;
                }
            }
            if (itemChecked === null) {
                itemChecked = false;
            }
            if (this.item.checked !== itemChecked) {
                // this.item.checked = itemChecked;
            }
        }
        this.checkedChange.emit(checked);
    }
}
TreeviewItemComponent.ɵfac = function TreeviewItemComponent_Factory(t) { return new (t || TreeviewItemComponent)(ɵngcc0.ɵɵdirectiveInject(TreeviewConfig)); };
TreeviewItemComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({
    type: TreeviewItemComponent, selectors: [["ngx-treeview-item"]], inputs: { config: "config", template: "template", item: "item" }, outputs: { checkedChange: "checkedChange" }, decls: 1, vars: 1, consts: [["class", "treeview-item", 4, "ngIf"], [1, "treeview-item"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf"], [3, "config", "item", "template", "checkedChange", 4, "ngFor", "ngForOf"], [3, "config", "item", "template", "checkedChange"]], template: function TreeviewItemComponent_Template(rf, ctx) {
        if (rf & 1) {
            ɵngcc0.ɵɵtemplate(0, TreeviewItemComponent_div_0_Template, 3, 7, "div", 0);
        } if (rf & 2) {
            ɵngcc0.ɵɵproperty("ngIf", ctx.item);
        }
    }, directives: [ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet, ɵngcc1.NgForOf, TreeviewItemComponent], styles: ["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .treeview-item[_ngcontent-%COMP%]{white-space:nowrap}[_nghost-%COMP%]   .treeview-item[_ngcontent-%COMP%]   .treeview-item[_ngcontent-%COMP%]{margin-left:2rem}"]
});
TreeviewItemComponent.ctorParameters = () => [
    { type: TreeviewConfig }
];
TreeviewItemComponent.propDecorators = {
    config: [{ type: Input }],
    template: [{ type: Input }],
    item: [{ type: Input }],
    checkedChange: [{ type: Output }]
};
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(TreeviewItemComponent, [{
        type: Component,
        args: [{
            selector: 'ngx-treeview-item',
            template: "<div *ngIf=\"item\" class=\"treeview-item\">\r\n  <ng-template [ngTemplateOutlet]=\"template\"\r\n    [ngTemplateOutletContext]=\"{item: item, onCollapseExpand: onCollapseExpand, onCheckedChange: onCheckedChange}\">\r\n  </ng-template>\r\n  <div *ngIf=\"!item.collapsed\">\r\n    <ngx-treeview-item [config]=\"config\" *ngFor=\"let child of item.children\" [item]=\"child\" [template]=\"template\"\r\n      (checkedChange)=\"onChildCheckedChange(child, $event)\">\r\n    </ngx-treeview-item>\r\n  </div>\r\n</div>\r\n",
            styles: [":host{display:block}:host .treeview-item{white-space:nowrap}:host .treeview-item .treeview-item{margin-left:2rem}"]
        }]
    }], function () { return [{ type: TreeviewConfig }]; }, {
        checkedChange: [{
            type: Output
        }], config: [{
            type: Input
        }], template: [{
            type: Input
        }], item: [{
            type: Input
        }]
    });
})();

class TreeviewPipe {
    transform(objects, textField) {
        if (isNil(objects)) {
            return undefined;
        }
        return objects.map(object => new TreeviewItem({ text: object[textField], value: object }));
    }
}
TreeviewPipe.ɵfac = function TreeviewPipe_Factory(t) { return new (t || TreeviewPipe)(); };
TreeviewPipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "ngxTreeview", type: TreeviewPipe, pure: true });
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(TreeviewPipe, [{
        type: Pipe,
        args: [{
            name: 'ngxTreeview'
        }]
    }], null, null);
})();

class TreeviewModule {
    static forRoot() {
        return {
            ngModule: TreeviewModule,
            providers: [
                TreeviewConfig,
                { provide: TreeviewI18n, useClass: DefaultTreeviewI18n },
                { provide: TreeviewEventParser, useClass: DefaultTreeviewEventParser }
            ]
        };
    }
}
TreeviewModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: TreeviewModule });
TreeviewModule.ɵinj = ɵngcc0.ɵɵdefineInjector({
    factory: function TreeviewModule_Factory(t) { return new (t || TreeviewModule)(); }, imports: [[
        FormsModule,
        CommonModule
    ]]
});
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(TreeviewModule, {
        declarations: function () { return [TreeviewComponent, TreeviewItemComponent, TreeviewPipe, DropdownDirective, DropdownMenuDirective, DropdownToggleDirective, DropdownTreeviewComponent]; }, imports: function () {
            return [FormsModule,
                CommonModule];
        }, exports: function () { return [TreeviewComponent, TreeviewPipe, DropdownTreeviewComponent]; }
    });
})();
/*@__PURE__*/ (function () {
    ɵngcc0.ɵsetClassMetadata(TreeviewModule, [{
        type: NgModule,
        args: [{
            imports: [
                FormsModule,
                CommonModule
            ],
            declarations: [
                TreeviewComponent,
                TreeviewItemComponent,
                TreeviewPipe,
                DropdownDirective,
                DropdownMenuDirective,
                DropdownToggleDirective,
                DropdownTreeviewComponent
            ], exports: [
                TreeviewComponent,
                TreeviewPipe,
                DropdownTreeviewComponent
            ]
        }]
    }], null, null);
})();

/*
 * Public API Surface of ngx-treeview
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DefaultTreeviewEventParser, DefaultTreeviewI18n, DownlineTreeviewEventParser, DropdownDirective, DropdownToggleDirective, DropdownTreeviewComponent, OrderDownlineTreeviewEventParser, TreeviewComponent, TreeviewConfig, TreeviewEventParser, TreeviewHelper, TreeviewI18n, TreeviewItem, TreeviewModule, TreeviewPipe, TreeviewItemComponent as ɵa, DropdownMenuDirective as ɵb };

//# sourceMappingURL=ngx-treeview.js.map