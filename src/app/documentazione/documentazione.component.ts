import { Component,Inject, OnInit, PLATFORM_ID,ViewChild,ElementRef} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth_service';
import {MatStepperModule} from '@angular/material/stepper';
import { MatCard } from '@angular/material/card';
import { ApiService } from '../users-admin/API/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documentazione',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatMenuModule,MatDrawer,MatProgressSpinnerModule,MatStepperModule,MatCard,CommonModule],
  templateUrl: './documentazione.component.html',
  styleUrl: './documentazione.component.css'
})
export class DocumentazioneComponent implements OnInit {
  submitting:boolean=false;
  @ViewChild('sidenav')sidenav: MatDrawer | undefined;
  fileSelected: boolean = false;
  logoutTimestamp: number | null = null; // Inizializza la variabile per il timestamp del logout
  username: string | null = null; // Inizializza la variabile per il nome utente
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | undefined;
  fileList: HTMLElement | null = null;
  numOfFiles: HTMLElement | null = null;
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object, private _boolean: AuthService,private POSservice:ApiService){}
  ngOnInit(): void {
    this.fileList = document.querySelector<HTMLUListElement>("#files-list");
    this.numOfFiles = document.querySelector<HTMLDivElement>("#num-of-files");
     // Verifica se il codice viene eseguito lato client
     if (isPlatformBrowser(this.platformId)) {
      // Registra il gestore per l'evento beforeunload solo se siamo lato client
      window.addEventListener('beforeunload', this.onBeforeUnload.bind(this));
      // Verifica se il nome utente è memorizzato in sessionStorage
      const storedUsername = sessionStorage.getItem('username');
      if (storedUsername) {
        this.username = storedUsername; // Imposta il nome utente se è presente in sessionStorage
      }
    
  }
  // const fileInput = document.querySelector<HTMLInputElement>("#file-input");
  // const fileList = document.querySelector<HTMLUListElement>("#files-list");
  // const numOfFiles = document.querySelector<HTMLDivElement>("#num-of-files");
  
  // fileInput?.addEventListener("change", () => {
  //   fileList!.innerHTML = "";
  //   numOfFiles!.textContent = `${fileInput?.files?.length || 0} File Selezionati`;
  
  //   const files = fileInput?.files as FileList | null;
  //   if (files) {
  //     for (const file of Array.from(files)) {
  //   const listItem = document.createElement("li");
  //   listItem.textContent = file.name;
  //   listItem.style.fontWeight = '500';
  //   listItem.style.color = '#151516';
  //   listItem.style.backgroundColor = '#eff5ff';
  //   listItem.style.borderRadius = '0.3em';
  //   listItem.style.alignContent = 'center';
  //   listItem.style.textAlign = 'center';
  //   listItem.style.height = '35px';
  //   listItem.style.width = '92%';

  //   const icon = document.createElement("i");
  //   icon.className = "fa-solid fa-circle-check";
  //   icon.style.marginLeft = "15px";
  //   icon.style.color = "#1de32c73";
  //   listItem.appendChild(icon);

  //   fileList?.appendChild(listItem);

  //   const reader = new FileReader();
  //   reader.onload = (event) => {
  //     // Puoi leggere il contenuto del file qui se necessario
  //   };
  //   reader.readAsText(file);
  // }
// }
// });

}
onFileSelected(event: any) {
  if (!this.fileList || !this.numOfFiles) return;

  this.fileList.innerHTML = "";
  this.numOfFiles.textContent = `${this.fileInput?.nativeElement.files?.length || 0} File Selezionati`;

  const files = this.fileInput?.nativeElement.files as FileList | null;
  if (files) {
    for (const file of Array.from(files)) {
      const listItem = document.createElement("li");
      listItem.textContent = file.name;
      listItem.style.fontWeight = '500';
      listItem.style.color = '#151516';
      listItem.style.backgroundColor = '#eff5ff';
      listItem.style.borderRadius = '0.3em';
      listItem.style.alignContent = 'center';
      listItem.style.textAlign = 'center';
      listItem.style.height = '35px';
      listItem.style.width = '92%';

      const icon = document.createElement("i");
      icon.className = "fa-solid fa-circle-check";
      icon.style.marginLeft = "15px";
      icon.style.color = "#1de32c73";
      listItem.appendChild(icon);

      this.fileList.appendChild(listItem);

      const reader = new FileReader();
      reader.onload = (event) => {
        // Puoi leggere il contenuto del file qui se necessario
      };
      reader.readAsText(file);
    }
  }
}
// onSubmit(file: File): void {
//   let checklist = Object.values(PosChecklist) as string[]; // Dichiarazione di checklist
//   this.POSservice.uploadPOS(file).subscribe(
//     (response) => {
//       console.log('File caricato con successo:', response);
//       this.router.navigate(['map']);
//       // Dopo aver caricato il file con successo, richiama askQuestionsFromChecklist()
//       this.POSservice.askQuestionsFromChecklist(checklist).then(() => {
//         console.log('Domande inviate con successo');

//         // Gestisci la risposta del backend
//       })
//       .catch((error) => {
//         console.error('Errore durante l\'invio delle domande:', error);
//         // Gestisci eventuali errori
//       });
//     },
//     (error) => {
//       console.error('Errore durante il caricamento del file:', error);
//       // Gestisci eventuali errori, ad esempio mostrando un messaggio di errore all'utente
//     }
//   );
// }
logout(): void {
  // Salva il timestamp del logout
  this.logoutTimestamp = Date.now();

  // Visualizza il timestamp del logout nella console
  const formattedTimestamp = new Date(this.logoutTimestamp).toLocaleString();
  console.log('Timestamp del logout:', formattedTimestamp);

  // Effettua la navigazione verso la pagina di login quando viene premuto il pulsante "Logout"
  sessionStorage.clear();//svuota le informazioni salvate in session storage
  this.router.navigate(['login']);
  // this._boolean.isAuthenticated;//aggiorna lo stato dell'utente a false
  // console.log(this._boolean.IsLogged);
}

private onBeforeUnload(event: BeforeUnloadEvent): void {
  // Verifica se l'evento di logout è già stato gestito
  if (!this.logoutTimestamp) {
    // Salva il timestamp del logout
    this.logoutTimestamp = Date.now();
  }

  // Visualizza il timestamp del logout (beforeunload) nella console
  const formattedTimestamp = new Date(this.logoutTimestamp).toLocaleString();
  console.log('Timestamp del logout (beforeunload):', formattedTimestamp);
}
isAdmin(): boolean {
  // Implementa la logica per controllare se l'utente ha il ruolo di amministratore
  return this._boolean.isAdmintoken();
}
Closeside():void{
  if (this.sidenav) {
    this.sidenav.close();
}
}
}
