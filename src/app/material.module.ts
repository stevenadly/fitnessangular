import { NgModule } from '@angular/core';
import { MatSliderModule, MatFormFieldModule ,MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule, MatIconModule , MatListModule, MatTabsModule, MatCardModule, MatSelectModule, MatSpinner, MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule} from '@angular/material';

let  IMPORtS_EXPOERTS =[
    MatSliderModule,
     MatFormFieldModule ,
     MatInputModule ,
     MatButtonModule,
     MatDatepickerModule,
     MatNativeDateModule,
     MatSidenavModule,
     MatToolbarModule,
     MatIconModule,
     MatListModule,
     MatTabsModule,
     MatCardModule,
     MatSelectModule,
     MatProgressSpinnerModule,
     MatProgressBarModule,
     MatDialogModule
    ]

 @NgModule({
    imports:[...IMPORtS_EXPOERTS],
    exports:[...IMPORtS_EXPOERTS]
})
export class MaterialModule{

}