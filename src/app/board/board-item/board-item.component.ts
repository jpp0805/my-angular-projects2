import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.css']
})
export class BoardItemComponent implements OnInit {
  @Input() item: any;
  commentInput = '';
  open = false;
  constructor() { }

  ngOnInit(): void {
  }

}
