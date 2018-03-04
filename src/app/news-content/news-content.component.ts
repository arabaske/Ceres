import { Component, OnInit, Input } from '@angular/core';
import { CKEditorComponent } from 'ng2-ckeditor/lib/src/ckeditor.component';
import { CKEditorModule } from 'ng2-ckeditor/lib/src/ckeditor.module';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {

  public editorContent: String;
  public test: String;
  private ckeditor: CKEditorModule;
  @Input() public action: String;

  private id;

  constructor(ckeditor: CKEditorModule, 
    private route: ActivatedRoute,
    private location: Location) {
    this.ckeditor = ckeditor;
    
    //if(this.action.length < 1) this.action="No action defined";

   }

  ngOnInit() {
    this.test = "Nothing yet";
    this.id = +this.route.snapshot.paramMap.get('id');
    this.action = this.route.snapshot.paramMap.get('action');
  }

  submit_click(): void {
    console.log(this.editorContent);
    this.test = this.editorContent;
  }

}
