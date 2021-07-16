import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';
import { take } from 'rxjs/operators';
import { Member } from 'src/app/_models/member';
import { Message } from 'src/app/_models/message';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';
import { MessageService } from 'src/app/_services/message.service';
import { PresenceService } from 'src/app/_services/presence.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit, OnDestroy {
  @ViewChild('memberTabs', {static: true}) memberTabs: TabsetComponent;
  member: Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  activeTab: TabDirective;
  messages: Message[] = [];
  user: User;

  constructor(public presence: PresenceService, private route: ActivatedRoute,
      private messageService: MessageService, private accountService: AccountService) {
        this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
      }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.member = data.member;
    })

    this.route.queryParams.subscribe(params => {
      params.tab ? this.selectTab(params.tab) : this.selectTab(0);
    })

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ]

    this.galleryImages = this.getImages();
  }

  getImages() : NgxGalleryImage[] {
    const imageUrls = [];
    for( const photo of this.member.photos){
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        large: photo?.url,
      })
    }
    return imageUrls;
  }


  loadMessages(){
    this.messageService.getMessageThread(this.member.username).subscribe(messages => {
      // no pagination so dont need to get from response body
      this.messages = messages;
    })
  }

  selectTab(tabId: number){
    this.memberTabs.tabs[tabId].active = true;
  }

  onTabActivated(data: TabDirective){
    this.activeTab = data;
    if (this.activeTab.heading === "Messages" && this.messages.length === 0){
      this.messageService.createHubConnection(this.user, this.member.username)
    } else {
      // leave message tab
      this.messageService.stopHubConnection();
    }
  }

  // leave mem detail component / page
  ngOnDestroy(): void {
    this.messageService.stopHubConnection();
  }

}
