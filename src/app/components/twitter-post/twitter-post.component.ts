import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss'],
})
export class TwitterPostComponent implements OnInit {
  @Input() public baseHref = 'https://www.ignaziogatto.com';
  @Input() public hashTags: string[] = [
    'IgnazioGatto',
    'JavaScript',
    'TypeScript',
    'Angular',
    '100 Angular Challenge',
  ];

  public get twitterUrl(): string {
    const base = this.getBaseWithHashTagsAndRoute();
    const message = encodeURIComponent(
      `Check out ${this.titleService.getTitle()} and become a CODING GOD!!!`
    );

    return `${base}${message}`;
  }

  constructor(public titleService: Title) {}

  ngOnInit(): void {}

  private getBaseWithHashTagsAndRoute() {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hashTags.join(',');

    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(
      hashTags
    )}&related=pizzapokerguy&url=${route}&text=`;
  }
}
