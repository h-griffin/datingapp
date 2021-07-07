import { Component, OnInit, ViewChild } from '@angular/core';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { TabDirective, TabsetComponent } from 'ngx-bootstrap/tabs';
import { Member } from 'src/app/_models/member';
import { Message } from 'src/app/_models/message';
import { MembersService } from 'src/app/_services/members.service';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @ViewChild('memberTabs', {static: true}) memberTabs: TabsetComponent;
  member: Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  activeTab: TabDirective;
  messages: Message[] = [];

  constructor(private memberService: MembersService, private route: ActivatedRoute, private messageService: MessageService) { }

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

  onTabActivated(data: TabDirective){
    this.activeTab = data;
    if (this.activeTab.heading === "Messages" && this.messages.length === 0){
      this.loadMessages();
    }
  }

  selectTab(tabId: number){
    this.memberTabs.tabs[tabId].active = true;
  }

}
