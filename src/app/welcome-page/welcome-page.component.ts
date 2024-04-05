import { Component,OnInit,ViewChild,Inject, PLATFORM_ID  } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth_service';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [MatDividerModule,MatProgressSpinnerModule,MatSidenavContainer,MatToolbarModule,MatIconModule,MatButtonModule,MatDrawer,MatSidenavModule,MatListModule,MatMenuModule,CommonModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent implements OnInit{
  submitting:boolean=false;
  @ViewChild('sidenav')sidenav: MatDrawer | undefined;
  logoutTimestamp: number | null = null; // Inizializza la variabile per il timestamp del logout
  username: string | null = null; // Inizializza la variabile per il nome utente
  constructor(private router:Router,private _boolean: AuthService,@Inject(PLATFORM_ID) private platformId: Object){}
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
  GotoChecklistPOS():void{
    this.router.navigate(['page-toolbar']);
  }
}


