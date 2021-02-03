import { EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class DropdownDirective {
    toggleElement: any;
    internalOpen: boolean;
    openChange: EventEmitter<boolean>;
    get isOpen(): boolean;
    onKeyupEsc(): void;
    onDocumentClick(event: MouseEvent): void;
    open(): void;
    close(): void;
    toggle(): void;
    private isEventFromToggle;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DropdownDirective>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<DropdownDirective, "[ngxDropdown]", ["ngxDropdown"], {
    "internalOpen": "open";
}, {
    "openChange": "openChange";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmQudHMiLCJzb3VyY2VzIjpbImRyb3Bkb3duLmRpcmVjdGl2ZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQVdBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIERyb3Bkb3duRGlyZWN0aXZlIHtcclxuICAgIHRvZ2dsZUVsZW1lbnQ6IGFueTtcclxuICAgIGludGVybmFsT3BlbjogYm9vbGVhbjtcclxuICAgIG9wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPjtcclxuICAgIGdldCBpc09wZW4oKTogYm9vbGVhbjtcclxuICAgIG9uS2V5dXBFc2MoKTogdm9pZDtcclxuICAgIG9uRG9jdW1lbnRDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQ7XHJcbiAgICBvcGVuKCk6IHZvaWQ7XHJcbiAgICBjbG9zZSgpOiB2b2lkO1xyXG4gICAgdG9nZ2xlKCk6IHZvaWQ7XHJcbiAgICBwcml2YXRlIGlzRXZlbnRGcm9tVG9nZ2xlO1xyXG59XHJcbiJdfQ==