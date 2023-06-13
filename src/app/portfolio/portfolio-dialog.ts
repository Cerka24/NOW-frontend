import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {NgIf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {Clipboard} from '@angular/cdk/clipboard';
import {MatSnackBar} from "@angular/material/snack-bar";

export interface DialogData {
  fullName: string,
  email: string,
  universityName: string,
  universityYear: string,
  shortBio: string,
  linkedinUrl: string,
  profileImage: string,
  gpa: number
  certificates: string
}

@Component({
  selector: 'portfolio-data-dialog',
  templateUrl: 'portfolio-dialog.html',
  styleUrls: ['./portfolio.component.css'],
  standalone: true,
  imports: [MatDialogModule, NgIf, MatButtonModule],
})
export class PortfolioDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private clipboard: Clipboard, private _snackBar: MatSnackBar) {}

  public copyToClipboard(url: string){
    this.clipboard.copy(url);
    this._snackBar.open("Linkedin url copied", '', {
      duration: 1000
    })
  }


  protected readonly window = window;
}
