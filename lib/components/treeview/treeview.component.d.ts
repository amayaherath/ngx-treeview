import { EventEmitter, SimpleChanges, OnChanges, TemplateRef, OnInit } from '@angular/core';
import { TreeviewI18n } from '../../models/treeview-i18n';
import { TreeviewItem, TreeviewSelection } from '../../models/treeview-item';
import { TreeviewConfig } from '../../models/treeview-config';
import { TreeviewHeaderTemplateContext } from '../../models/treeview-header-template-context';
import { TreeviewItemTemplateContext } from '../../models/treeview-item-template-context';
import { TreeviewEventParser } from '../../helpers/treeview-event-parser';
import * as ɵngcc0 from '@angular/core';
export declare class TreeviewComponent implements OnChanges, OnInit {
    i18n: TreeviewI18n;
    private defaultConfig;
    private eventParser;
    headerTemplate: TemplateRef<TreeviewHeaderTemplateContext>;
    itemTemplate: TemplateRef<TreeviewItemTemplateContext>;
    items: TreeviewItem[];
    config: TreeviewConfig;
    selectedChange: EventEmitter<any[]>;
    filterChange: EventEmitter<string>;
    headerTemplateContext: TreeviewHeaderTemplateContext;
    allItem: TreeviewItem;
    filterText: string;
    filterItems: TreeviewItem[];
    selection: TreeviewSelection;
    constructor(i18n: TreeviewI18n, defaultConfig: TreeviewConfig, eventParser: TreeviewEventParser);
    get hasFilterItems(): boolean;
    get maxHeight(): string;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onAllCollapseExpand(): void;
    onFilterTextChange(text: string): void;
    onAllCheckedChange(): void;
    onItemCheckedChange(item: TreeviewItem, checked: boolean): void;
    raiseSelectedChange(): void;
    private createHeaderTemplateContext;
    private generateSelection;
    private updateFilterItems;
    private filterItem;
    private updateCheckedOfAll;
    private updateCollapsedOfAll;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TreeviewComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TreeviewComponent, "ngx-treeview", never, {
    "config": "config";
    "headerTemplate": "headerTemplate";
    "itemTemplate": "itemTemplate";
    "items": "items";
}, {
    "selectedChange": "selectedChange";
    "filterChange": "filterChange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXcuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInRyZWV2aWV3LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWV2aWV3STE4biB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1pMThuJztcclxuaW1wb3J0IHsgVHJlZXZpZXdJdGVtLCBUcmVldmlld1NlbGVjdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1pdGVtJztcclxuaW1wb3J0IHsgVHJlZXZpZXdDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctY29uZmlnJztcclxuaW1wb3J0IHsgVHJlZXZpZXdIZWFkZXJUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaGVhZGVyLXRlbXBsYXRlLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBUcmVldmlld0l0ZW1UZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctaXRlbS10ZW1wbGF0ZS1jb250ZXh0JztcclxuaW1wb3J0IHsgVHJlZXZpZXdFdmVudFBhcnNlciB9IGZyb20gJy4uLy4uL2hlbHBlcnMvdHJlZXZpZXctZXZlbnQtcGFyc2VyJztcclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVHJlZXZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XHJcbiAgICBpMThuOiBUcmVldmlld0kxOG47XHJcbiAgICBwcml2YXRlIGRlZmF1bHRDb25maWc7XHJcbiAgICBwcml2YXRlIGV2ZW50UGFyc2VyO1xyXG4gICAgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPFRyZWV2aWV3SGVhZGVyVGVtcGxhdGVDb250ZXh0PjtcclxuICAgIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8VHJlZXZpZXdJdGVtVGVtcGxhdGVDb250ZXh0PjtcclxuICAgIGl0ZW1zOiBUcmVldmlld0l0ZW1bXTtcclxuICAgIGNvbmZpZzogVHJlZXZpZXdDb25maWc7XHJcbiAgICBzZWxlY3RlZENoYW5nZTogRXZlbnRFbWl0dGVyPGFueVtdPjtcclxuICAgIGZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz47XHJcbiAgICBoZWFkZXJUZW1wbGF0ZUNvbnRleHQ6IFRyZWV2aWV3SGVhZGVyVGVtcGxhdGVDb250ZXh0O1xyXG4gICAgYWxsSXRlbTogVHJlZXZpZXdJdGVtO1xyXG4gICAgZmlsdGVyVGV4dDogc3RyaW5nO1xyXG4gICAgZmlsdGVySXRlbXM6IFRyZWV2aWV3SXRlbVtdO1xyXG4gICAgc2VsZWN0aW9uOiBUcmVldmlld1NlbGVjdGlvbjtcclxuICAgIGNvbnN0cnVjdG9yKGkxOG46IFRyZWV2aWV3STE4biwgZGVmYXVsdENvbmZpZzogVHJlZXZpZXdDb25maWcsIGV2ZW50UGFyc2VyOiBUcmVldmlld0V2ZW50UGFyc2VyKTtcclxuICAgIGdldCBoYXNGaWx0ZXJJdGVtcygpOiBib29sZWFuO1xyXG4gICAgZ2V0IG1heEhlaWdodCgpOiBzdHJpbmc7XHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQ7XHJcbiAgICBvbkFsbENvbGxhcHNlRXhwYW5kKCk6IHZvaWQ7XHJcbiAgICBvbkZpbHRlclRleHRDaGFuZ2UodGV4dDogc3RyaW5nKTogdm9pZDtcclxuICAgIG9uQWxsQ2hlY2tlZENoYW5nZSgpOiB2b2lkO1xyXG4gICAgb25JdGVtQ2hlY2tlZENoYW5nZShpdGVtOiBUcmVldmlld0l0ZW0sIGNoZWNrZWQ6IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgcmFpc2VTZWxlY3RlZENoYW5nZSgpOiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBjcmVhdGVIZWFkZXJUZW1wbGF0ZUNvbnRleHQ7XHJcbiAgICBwcml2YXRlIGdlbmVyYXRlU2VsZWN0aW9uO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVGaWx0ZXJJdGVtcztcclxuICAgIHByaXZhdGUgZmlsdGVySXRlbTtcclxuICAgIHByaXZhdGUgdXBkYXRlQ2hlY2tlZE9mQWxsO1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVDb2xsYXBzZWRPZkFsbDtcclxufVxyXG4iXX0=