import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';

import { FormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { BoardItemComponent } from './board-item/board-item.component';
import { CommentItemComponent } from './comment-item/comment-item.component';

@NgModule({
  declarations: [
    BoardComponent,
    BoardItemComponent,
    CommentItemComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
