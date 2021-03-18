import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: MemberEditComponent): boolean {//access to member form for change status
    if(component.editForm.dirty){
      return confirm("Are you sure you want to continue? any unsaved changes will be lost"); // yes or no (yes can deactivate)

    }

    return true;}

}
