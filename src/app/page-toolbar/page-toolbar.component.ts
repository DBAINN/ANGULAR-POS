import { Component, Inject, OnInit, PLATFORM_ID,ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../services/auth_service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule
import { MatDividerModule } from '@angular/material/divider';
import { FormBuilder, FormGroup, FormsModule,ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../users-admin/API/api.service';
import { DataService } from '../data.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';
import { PosChecklist } from './posCheckList';



@Component({

  selector: 'app-page-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatMenuModule, CommonModule, MatFormFieldModule, MatCard, MatInputModule, MatDividerModule,FormsModule,ReactiveFormsModule,MatProgressSpinnerModule],
  templateUrl: './page-toolbar.component.html',
  styleUrl: './page-toolbar.component.css'
})
export class PageToolbarComponent implements OnInit {
  submitting:boolean=false;
  @ViewChild('sidenav')sidenav: MatDrawer | undefined;
  fileSelected: boolean = false;
  logoutTimestamp: number | null = null; // Inizializza la variabile per il timestamp del logout
  username: string | null = null; // Inizializza la variabile per il nome utente

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object, private _boolean: AuthService, private fb:FormBuilder,private POSservice:ApiService,private dataService:DataService) { }
  ngOnInit(): void {
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
    // Ottieni i riferimenti agli elementi HTML utilizzando il metodo querySelector
    const fileInput = document.querySelector<HTMLInputElement>("#file-input");
    const fileList = document.querySelector<HTMLUListElement>("#files-list");
    const numOfFiles = document.querySelector<HTMLDivElement>("#num-of-files");
    // Aggiungi un listener per l'evento di cambio dell'input file
    fileInput?.addEventListener("change", () => {
      // Cancella il contenuto della lista dei file e aggiorna il numero di file selezionati
      fileList!.innerHTML = "";
      numOfFiles!.textContent = `${fileInput?.files!.length || 0} File Selezionato`;

      // Itera su tutti i file selezionati
      for (let i = 0; i < (fileInput.files!.length || 0); i++) {
        const file = fileInput.files![i];
        console.log(file);

        // Crea un elemento <li> per ciascun file selezionato e aggiungilo alla lista
        const listItem = document.createElement("li");
        listItem.textContent = file?.name || "";
        listItem.style.fontWeight='500';
        listItem.style.color='#151516';
        listItem.style.backgroundColor='#eff5ff';
        listItem.style.borderRadius= '0.3em';
        listItem.style.alignContent= 'center';
        listItem.style.textAlign='center';
        listItem.style.height="35px";
        listItem.style.width= "92%";


        
         // Aggiungi un'icona all'elemento <li>
        const icon = document.createElement("i");
        icon.className = "fa-solid fa-circle-check"; // Aggiungi le classi CSS per l'icona
        icon.style.marginLeft = "15px"; // Aggiungi margine alla destra dell'icona
        icon.style.color = "#1de32c73"; //
        listItem.appendChild(icon);
        // Aggiungi il nome del file dopo l'icona
        const fileNameSpan = document.createElement("span");
        fileNameSpan.textContent = file?.name || "";
        // listItem.appendChild(fileNameSpan);
        fileList?.appendChild(listItem);

        // Leggi il contenuto del file utilizzando FileReader se necessario
        const reader = new FileReader();
        reader.onload = (event) => {
        };
        reader.readAsText(file as Blob); // Leggi il contenuto del file come testo
      }
    });
  }
  Closeside():void{
    if (this.sidenav) {
      this.sidenav.close();
  }
}
onSubmit(file: File): void {
  let checklist = Object.values(PosChecklist) as string[]; // Dichiarazione di checklist
  this.POSservice.uploadPOS(file).subscribe(
    (response) => {
      console.log('File caricato con successo:', response);
      this.router.navigate(['map']);
      // Dopo aver caricato il file con successo, richiama askQuestionsFromChecklist()
      this.POSservice.askQuestionsFromChecklist(checklist).then(() => {
        console.log('Domande inviate con successo');

        // Gestisci la risposta del backend
      })
      .catch((error) => {
        console.error('Errore durante l\'invio delle domande:', error);
        // Gestisci eventuali errori
      });
    },
    (error) => {
      console.error('Errore durante il caricamento del file:', error);
      // Gestisci eventuali errori, ad esempio mostrando un messaggio di errore all'utente
    }
  );
}
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
}
