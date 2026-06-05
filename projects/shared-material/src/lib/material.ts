import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

export const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatSnackBarModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatDividerModule,
  MatMenuModule
] as const;

export {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatSnackBarModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatDividerModule,
  MatMenuModule
};

export const MATERIAL_LAYOUT_MODULES = [
  MatCardModule,
  MatToolbarModule,
  MatDividerModule
];

export const MATERIAL_FORM_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule
];