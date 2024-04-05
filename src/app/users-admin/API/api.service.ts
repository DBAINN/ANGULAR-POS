import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError,Observable } from 'rxjs';
import { ChatService } from '../../chat.service';
// Definizione dell'interfaccia per l'oggetto 'item'
interface Item {
  chiave: string;
  domanda: string;
  [Symbol.iterator](): IterableIterator<any>;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:5000';
  constructor(private http: HttpClient,private chatService: ChatService){}
  submitCoordinates(data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<any>(`${this.apiUrl}/submit-coordinates`, data, { headers })
      .pipe(
        catchError(error => {
          console.error('Error submitting coordinates:', error);
          return throwError(error);
        })
      );
  }
  downloadPDF(filename: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/map/${filename}`, { responseType: 'blob' });
  }
  uploadPOS(pdfFile: File): Observable<any> {
    const formData = new FormData();
    formData.append('pdfFile', pdfFile);

    return this.http.post<any>(`${this.apiUrl}/uploadPOS`, formData);
  }
  async askQuestionsFromChecklist(checklist: any[]) {
    console.log(checklist);
    await new Promise(r => setTimeout(r, 2000)); // Attesa iniziale di 2 secondi

    for (const chapter of checklist) {
        console.log('Entro nel for');
        // Verifica se 'chapter.content.elementi' è un oggetto valido
        if (typeof chapter.content.elementi === 'object' && chapter.content.elementi !== null) {
            this.chatService.updateChatResponse(`${chapter.number}.`, chapter.content.capitolo, '', '', true, false);
            // Itera sulle chiavi dell'oggetto 'elementi'
            for (const letter in chapter.content.elementi) {
                if (Object.prototype.hasOwnProperty.call(chapter.content.elementi, letter)) {
                    const item = chapter.content.elementi[letter];
                    console.log("Sending question to server...");
                    await this.sendQuestionToServer(`${chapter.number}.${letter}`, item, item.chiave, item.domanda); // Modifica qui
                }
            }
        } else {
            console.error("Invalid 'elementi' object in chapter:", chapter);
        }
    }
}



private async sendQuestionToServer(letter: string, item: Item, key: string, question: string): Promise<void> {
  const data = JSON.stringify({ art: letter, question: question, key: key });
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  try {
      const response = await this.http.post<any>(`${this.apiUrl}/submit_answer`, data, { headers }).toPromise();
      
      // Aggiornamento dell'interfaccia utente con la risposta ricevuta
      this.chatService.updateChatResponse(letter, item.chiave, response.answer, response.page, false, true);
      
      console.log("Question answered by server:", response);
  } catch (error) {
      console.error("Error sending question to server:", error);
      throw error; // Rilancia l'errore per gestirlo altrove se necessario
  }
}
}

