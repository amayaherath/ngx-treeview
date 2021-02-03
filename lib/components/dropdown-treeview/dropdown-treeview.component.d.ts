import { EventEmitter, TemplateRef } from '@angular/core';
import { TreeviewI18n } from '../../models/treeview-i18n';
import { TreeviewItem } from '../../models/treeview-item';
import { TreeviewConfig } from '../../models/treeview-config';
import { TreeviewComponent } from '../treeview/treeview.component';
import { TreeviewHeaderTemplateContext } from '../../models/treeview-header-template-context';
import { TreeviewItemTemplateContext } from '../../models/treeview-item-template-context';
import * as ɵngcc0 from '@angular/core';
export declare class DropdownTreeviewComponent {
    i18n: TreeviewI18n;
    private defaultConfig;
    buttonClass: string;
    headerTemplate: TemplateRef<TreeviewHeaderTemplateContext>;
    itemTemplate: TemplateRef<TreeviewItemTemplateContext>;
    items: TreeviewItem[];
    config: TreeviewConfig;
    selectedChange: EventEmitter<any[]>;
    filterChange: EventEmitter<string>;
    treeviewComponent: TreeviewComponent;
    buttonLabel: string;
    constructor(i18n: TreeviewI18n, defaultConfig: TreeviewConfig);
    onSelectedChange(values: any[]): void;
    onFilterChange(text: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DropdownTreeviewComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<DropdownTreeviewComponent, "ngx-dropdown-treeview", never, {
    "buttonClass": "buttonClass";
    "config": "config";
    "headerTemplate": "headerTemplate";
    "itemTemplate": "itemTemplate";
    "items": "items";
}, {
    "selectedChange": "selectedChange";
    "filterChange": "filterChange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdHJlZXZpZXcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImRyb3Bkb3duLXRyZWV2aWV3LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmVldmlld0kxOG4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaTE4bic7XHJcbmltcG9ydCB7IFRyZWV2aWV3SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1pdGVtJztcclxuaW1wb3J0IHsgVHJlZXZpZXdDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctY29uZmlnJztcclxuaW1wb3J0IHsgVHJlZXZpZXdDb21wb25lbnQgfSBmcm9tICcuLi90cmVldmlldy90cmVldmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUcmVldmlld0hlYWRlclRlbXBsYXRlQ29udGV4dCB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1oZWFkZXItdGVtcGxhdGUtY29udGV4dCc7XHJcbmltcG9ydCB7IFRyZWV2aWV3SXRlbVRlbXBsYXRlQ29udGV4dCB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1pdGVtLXRlbXBsYXRlLWNvbnRleHQnO1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEcm9wZG93blRyZWV2aWV3Q29tcG9uZW50IHtcclxuICAgIGkxOG46IFRyZWV2aWV3STE4bjtcclxuICAgIHByaXZhdGUgZGVmYXVsdENvbmZpZztcclxuICAgIGJ1dHRvbkNsYXNzOiBzdHJpbmc7XHJcbiAgICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8VHJlZXZpZXdIZWFkZXJUZW1wbGF0ZUNvbnRleHQ+O1xyXG4gICAgaXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxUcmVldmlld0l0ZW1UZW1wbGF0ZUNvbnRleHQ+O1xyXG4gICAgaXRlbXM6IFRyZWV2aWV3SXRlbVtdO1xyXG4gICAgY29uZmlnOiBUcmVldmlld0NvbmZpZztcclxuICAgIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55W10+O1xyXG4gICAgZmlsdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPjtcclxuICAgIHRyZWV2aWV3Q29tcG9uZW50OiBUcmVldmlld0NvbXBvbmVudDtcclxuICAgIGJ1dHRvbkxhYmVsOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcihpMThuOiBUcmVldmlld0kxOG4sIGRlZmF1bHRDb25maWc6IFRyZWV2aWV3Q29uZmlnKTtcclxuICAgIG9uU2VsZWN0ZWRDaGFuZ2UodmFsdWVzOiBhbnlbXSk6IHZvaWQ7XHJcbiAgICBvbkZpbHRlckNoYW5nZSh0ZXh0OiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcbiJdfQ==