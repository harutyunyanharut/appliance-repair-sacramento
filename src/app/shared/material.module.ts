import { NgModule } from "@angular/core";

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatTooltipModule,
    // MatSnackBarModule,
    // MatRadioModule,
    // MatSlideToggleModule,
    // MatExpansionModule,
    // MatTreeModule,
    // MatIconModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatTableModule,
    // MatSortModule,
    // MatTabsModule,
    // MatSidenavModule,
    // MatButtonToggleModule,
    // DragDropModule,
    // MatDialogModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatTooltipModule,
  ],
  providers: [
    // Revue Required
    MatDatepickerModule,
  ]
})
export class MaterialModule { }
