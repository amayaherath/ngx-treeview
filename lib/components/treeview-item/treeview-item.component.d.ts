import { EventEmitter, TemplateRef } from '@angular/core';
import { TreeviewItem } from '../../models/treeview-item';
import { TreeviewConfig } from '../../models/treeview-config';
import { TreeviewItemTemplateContext } from '../../models/treeview-item-template-context';
import * as ɵngcc0 from '@angular/core';
export declare class TreeviewItemComponent {
    private defaultConfig;
    config: TreeviewConfig;
    template: TemplateRef<TreeviewItemTemplateContext>;
    item: TreeviewItem;
    checkedChange: EventEmitter<boolean>;
    constructor(defaultConfig: TreeviewConfig);
    onCollapseExpand: () => void;
    onCheckedChange: () => void;
    onChildCheckedChange(child: TreeviewItem, checked: boolean): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TreeviewItemComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TreeviewItemComponent, "ngx-treeview-item", never, {
    "config": "config";
    "template": "template";
    "item": "item";
}, {
    "checkedChange": "checkedChange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZXZpZXctaXRlbS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidHJlZXZpZXctaXRlbS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRyZWV2aWV3SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy90cmVldmlldy1pdGVtJztcclxuaW1wb3J0IHsgVHJlZXZpZXdDb25maWcgfSBmcm9tICcuLi8uLi9tb2RlbHMvdHJlZXZpZXctY29uZmlnJztcclxuaW1wb3J0IHsgVHJlZXZpZXdJdGVtVGVtcGxhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL3RyZWV2aWV3LWl0ZW0tdGVtcGxhdGUtY29udGV4dCc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRyZWV2aWV3SXRlbUNvbXBvbmVudCB7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRDb25maWc7XHJcbiAgICBjb25maWc6IFRyZWV2aWV3Q29uZmlnO1xyXG4gICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPFRyZWV2aWV3SXRlbVRlbXBsYXRlQ29udGV4dD47XHJcbiAgICBpdGVtOiBUcmVldmlld0l0ZW07XHJcbiAgICBjaGVja2VkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj47XHJcbiAgICBjb25zdHJ1Y3RvcihkZWZhdWx0Q29uZmlnOiBUcmVldmlld0NvbmZpZyk7XHJcbiAgICBvbkNvbGxhcHNlRXhwYW5kOiAoKSA9PiB2b2lkO1xyXG4gICAgb25DaGVja2VkQ2hhbmdlOiAoKSA9PiB2b2lkO1xyXG4gICAgb25DaGlsZENoZWNrZWRDaGFuZ2UoY2hpbGQ6IFRyZWV2aWV3SXRlbSwgY2hlY2tlZDogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuIl19