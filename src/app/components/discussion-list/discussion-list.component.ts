import { Component, OnInit } from '@angular/core';
import { DiscussionItem } from 'src/app/models/discussionItem';
import { DiscussionService } from 'src/app/services/discussion.service';

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.css']
})
export class DiscussionListComponent implements OnInit {
  discussionItems: DiscussionItem[];

  constructor(
    private discussionService: DiscussionService
  ) { }

  ngOnInit(): void {
    this.getDiscussionItems()
  }

  getDiscussionItems(): void {
    this.discussionService.getDiscussionItems()
      .subscribe(discussionItems => this.discussionItems = discussionItems)
  }
}
