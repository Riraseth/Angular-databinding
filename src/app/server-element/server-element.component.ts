import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  // @Input for getting something passed into the component
  @Input('srvName') name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() {
    console.log('constructor called');
  }
  ngOnInit(): void {
    console.log('onInit called');
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges called');
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('doCheck called');
  }

  ngAfterContentInit(): void {
    console.log('afterContentInit called');
    console.log(this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log('afterContentChecked called');
  }
  ngAfterViewChecked(): void {
    console.log('afterViewChecked called');
  }
  ngAfterViewInit(): void {
    console.log('afterViewInit called');
    console.log(this.header.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

}
