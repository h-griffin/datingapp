import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { ConfirmService } from '../_services/confirm.service';

@Injectable({
  providedIn: 'root'
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {

  constructor(private confirmService: ConfirmService){}

  canDeactivate(
    component: MemberEditComponent): Observable<boolean> | boolean {   //access to member form for change status
    if(component.editForm.dirty){
      return this.confirmService.confirm() // observable, auto subscribe
    }

    return true;
  }

}
