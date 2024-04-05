import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  updateChatResponse(identifier: string, item: string, answer: string, pages: string | number[], isChapterTitle = false, isAnswered = true) {
    const tableBody = document.querySelector('#chatResponsesTable tbody');

    if (!tableBody) {
      console.error("Table body not found.");
      return;
    }
    const newRow = document.createElement('tr');
    newRow.classList.add('border-bottom'); // Aggiungi la classe CSS per il bordo inferiore
    const answerStyle = isAnswered ? '' : 'color: red;';

    let pagesHtml: string;
    if (Array.isArray(pages)) {
      pagesHtml = pages.map(page =>
        `<span class="page-link" data-page="${page}" title="Vai a pagina ${page}">${page}</span>`
      ).join(', ');
    } else {
      pagesHtml = '-';
    }

    newRow.innerHTML = `
      <td style="font-size:14px; padding:10px; border-bottom: 1px solid #ccc;">${identifier}</td>
      <td style="font-size:14px; text-align:left; padding-left: 20px; padding:10px; border-bottom: 1px solid #ccc;">${isChapterTitle ? '<b>' + item + '</b>' : item}</td>
      <td style="font-size:14px; text-align:left; padding-left: 20px; padding:10px; border-bottom: 1px solid #ccc;">${answer}</td>
      <td style="font-size:14px; padding:10px; border-bottom: 1px solid #ccc;">${pagesHtml}</td>
    `;
     // Aggiungiamo la classe CSS direttamente alle righe dispari
     if (tableBody.children.length % 2 === 0) {
      newRow.classList.add('odd-row');
    }

    tableBody?.appendChild(newRow);
  }
}

