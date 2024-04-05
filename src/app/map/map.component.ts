import { Component,OnInit, PLATFORM_ID,ViewChild,Inject } from '@angular/core';
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
import { MatTableModule } from '@angular/material/table';
import { DataService } from '../data.service';







@Component({
  selector: 'app-map',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatMenuModule, CommonModule, MatFormFieldModule, MatCard, MatInputModule, MatDividerModule,FormsModule,ReactiveFormsModule,MatTableModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  responseData: any | null = null;
  displayedColumns: string[] = ['Data','Comune','Latitudine','Longitudine','Foglio', 'Particella'];
   // Dati di esempio da visualizzare nella tabella
   dataSource: any[]=[];
  @ViewChild('sidenav')sidenav: MatDrawer | undefined;
  logoutTimestamp: number | null = null; // Inizializza la variabile per il timestamp del logout
  username: string | null = null; // Inizializza la variabile per il nome utente
  constructor( @Inject(PLATFORM_ID) private platformId: Object,private _boolean: AuthService,private router: Router, private dataService:DataService){}
  ngOnInit() {
    this.dataService.responseData$.subscribe((data) => {
      this.responseData =  data;}
    );
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
  }
  updateTableData(response: any): void {
    // Aggiorna la sorgente dati della tabella con i dati ricevuti dal backend
    this.dataSource = [response]; // Se il backend restituisce un singolo oggetto, altrimenti sostituisci con response.data se restituisce un array di oggetti
}
  Closeside():void{
    if (this.sidenav) {
      this.sidenav.close();
  }
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
// download_ortofoto(): void {
//   const filename = 'ORTOFOTO.pdf'; // Nome del file PDF
//   this.apiservice.downloadPDF(filename).subscribe(
//     (data: Blob) => {
//       // Crea un URL temporaneo per il blob
//       const blobURL = window.URL.createObjectURL(data);
//       // Crea un elemento link per avviare il download del file
//       const link = document.createElement('a');
//       link.href = blobURL;
//       link.download = filename;
//       // Simula un clic sull'elemento link per avviare il download
//       link.click();
//       // Pulisci l'URL temporaneo
//       window.URL.revokeObjectURL(blobURL);
//     },
//     error => {
//       console.error('Errore durante il download del PDF:', error);
//     }
//   );
// }
download_ortofoto(): void {
  window.open('http://localhost:5000/map/ORTOFOTO.pdf', '_blank');
}
download_mappa_catastale(): void {
  window.open('http://localhost:5000/map/MAPPA_CATASTALE.pdf', '_blank');
}
download_mappa_vincoli(): void {
  window.open('http://localhost:5000/map/ANALISI_DEI_VINCOLI.pdf', '_blank');
}
download_all(): void {
  window.open('http://localhost:5000/map/documentazione.pdf', '_blank');
}
returnhome():void{
  this.router.navigate(['page-toolbar']);
}


}
