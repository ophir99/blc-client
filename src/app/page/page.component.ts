import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { AspectsService } from '../services/aspects.service';
import { ContentService } from '../services/content.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {
  pageId: string;
  page: any;
  name: string;
  bgImg = '';
  coverImg = '';
  content: any[];
  aspects: any[];
  styleClass = {
    bigheading: 'big',
    smallheading: 'small',
    paragraph: 'paragraph',
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private title: Title,
    private contentService: ContentService,
    private aspectsService: AspectsService
  ) {
    const id = this.activatedRoute.snapshot.params.id;
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          console.log('params', params);
          this.name = params.page;
          this.pageId = params.id;
          return this.http.get(`http://localhost:9000/page/by/${params.id}`);
        })
      )
      .subscribe((res: any) => {
        console.log(res);
        this.page = res.data;
        this.title.setTitle(this.page.title);
        this.bgImg = `url('${this.page.bgImgURL}')`;
        this.coverImg = this.page.coverImgURL;
      });
  }

  ngOnInit(): void {
    this.contentService.get(this.pageId).subscribe(({ data }) => {
      console.log('Data of this page', data);
      this.content = data;
    });
    this.aspectsService.get(this.pageId).subscribe(({ data }) => {
      console.log('Aspects of this page', data);
      this.aspects = data;
    });
  }
}
