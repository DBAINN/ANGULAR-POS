export const PosChecklist = [
    {
        number: "1",
        content: {
            capitolo: "Identificazione e descrizione dell'Opera",
            elementi: {
                "a": {
                    chiave: "Nominativo del Committente",
                    domanda: "Quale è l'impresa committente dell'opera?"
                },
                "b": {
                    chiave: "Nominativo del Responsabile dei lavori",
                    domanda: "Fornisci il nominativo della persona Responsabile dei Lavori nel cantiere in questione"
                },
                "c": {
                    chiave: "Indirizzo del cantiere",
                    domanda: "Dove è il cantiere? Fornisci l'indirizzo del cantiere in questione"
                },
                "d": {
                    chiave: "Descrizione sintetica delle attività che saranno svolte in cantiere",
                    domanda: "Descrivi con un frase le attività svolte in cantiere dall'impresa esecutrice dei lavori"
                },
                "e": {
                    chiave: "Descrizione sintetica delle singole lavorazioni svolte in cantiere dai lavoratori autonomi sub affidatari",
                    domanda: "Verifica innanzitutto la presenza di lavoratori autonomi in cantiere (essi devono essere specificati esattamente con la dicitura \"lavoratori autonomi\"!). Solamente nel caso siano presenti (devono esserci i nominativi dei lavoratori autonomi!), elenca le attività svolte da ciascun lavoratore autonomo"
                }
            }
        }
    },
    {
        number: "2",
        content: {
            capitolo: "Dati identificativi dell'Impresa",
            elementi: {
                "a": {
                    chiave: "Ragione sociale",
                    domanda: "Scrivi la Ragione sociale della impresa esecutrice dei lavori"
                },
                "b": {
                    chiave: "Nominativo del datore di lavoro",
                    domanda: "Se specificato, fornisci nome e cognome del Datore di lavoro (deve essere una persona!) dell'impresa esecutrice dei lavori"
                },
                "c": {
                    chiave: "Sede legale (indirizzo; tel.; fax; e-mail)",
                    domanda: "Qual è la sede legale della impresa esecutrice (indirizzo, telefono, fax, e-mail)?"
                },
                "d": {
                    chiave: "Sede operativa (indirizzo; tel.; fax; e-mail)",
                    domanda: "Qual è la sede operativa / amministrativa della ditta esecutrice (indirizzo, telefono, fax, e-mail)? Rispondi alla domanda solo e soltanto se viene specificata esattamente come 'sede operativa' o 'sede amministrativa' nel documento (non come 'sede legale')!"
                },
                "e": {
                    chiave: "Uffici di cantiere (indirizzo; tel.; fax; e-mail)",
                    domanda: "Gli uffici di cantiere sono spazi chiusi o locali posti a servizio del personale addetto alla produzione ed alla conduzione del cantiere. Scrivi l'indirizzo degli Uffici di Cantiere e successivamente descrivi come sono costituiti nel cantiere in questione (solo se specificato!)"
                },
                "f": {
                    chiave: "Durata dei lavori",
                    domanda: "Quant'è la durata dei lavori?"
                }
            }
        }
    },
    {
        number: "2.1",
        content: {
            capitolo: "Nominativi del direttore tecnico di cantiere e del capocantiere",
            elementi: {
                "a": {
                    chiave: "Il nominativo dell'incaricato dall'impresa affidataria per l'assolvimento dei compiti previsti all'art. 97 del D. Lgs. 81/08 (Datore di lavoro o dirigente delegato)",
                    domanda: "Verifica per prima cosa se il documento riguarda un subappalto (ovvero se l'impresa esecutrice è subappaltatrice): in caso affermativo rispondi \"N/A\"; in caso negativo, dimmi nome e cognome dell'Incaricato dell'assolvimento dei compiti previsti dall'art.97 del D.lgs. 81/2008 (se non esplicitamente specificato, riporta il nominativo del Datore di Lavoro!)."
                },
                "b": {
                    chiave: "Mansioni specifiche svolte in cantiere dal datore di lavoro ai fini della sicurezza",
                    domanda: "Verifica per prima cosa se il documento riguarda un subappalto (ovvero se l'impresa esecutrice è subappaltatrice): in caso affermativo rispondi semplicemente \"N/A\" e non considerare il resto della domanda; in caso negativo, scrivi sinteticamente le specifiche mansioni inerenti la sicurezza svolte dall'Incaricato assolvimento compiti art.97 del D.Lgs. 81/2008 (se non esplicitamente specificate, scrivi le specifiche mansioni inerenti la sicurezza svolte dal Datore di lavoro, solo se presenti!)."
                },
                "c": {
                    chiave: "Nominativo del direttore tecnico di cantiere",
                    domanda: "Fornisci nome e cognome del Direttore tecnico di cantiere per il cantiere in questione (solo se presente!)"
                },
                "d": {
                    chiave: "Mansioni specifiche svolte in cantiere dal direttore tecnico di cantiere ai fini della sicurezza",
                    domanda: "Quali sono le mansioni specifiche svolte in cantiere ai fini della sicurezza dal direttore tecnico di cantiere?"
                },
                "e": {
                    chiave: "Nominativo del preposto/capocantiere",
                    domanda: "Dimmi il nome e cognome del soggetto Capo cantiere / Preposto. Nel caso sono più persone, forniscimi tutti i nominativi con il ruolo di Preposto."
                },
                "f": {
                    chiave: "Attestati di formazione e addestramento del preposto/capocantiere",
                    domanda: "Fornisci l'elenco degli attestati di formazione e addestramento del soggetto preposto/capocantiere"
                },
                "g": {
                    chiave: "Mansioni specifiche svolte in cantiere dal preposto/capocantiere ai fini della sicurezza",
                    domanda: "Quali sono le specifiche mansioni inerenti la sicurezza svolte in cantiere dal Preposto / Capo cantiere?"
                }
            }
        }
    },
    {
        number: "2.2",
        content: {
            capitolo: "Responsabile del servizio di prevenzione e protezione",
            elementi: {
                "": {
                    chiave: "Nominativo del responsabile del servizio di prevenzione e protezione",
                    domanda: "Fornisci il nominativo della persona Responsabile del Servizio di Prevenzione e Protezione (RSPP)"
                },
                "a": {
                    chiave: "Mansioni specifiche svolte in cantiere dal RSPP ai fini della sicurezza",
                    domanda: "Se specificate, dimmi quali sono le specifiche mansioni inerenti la sicurezza svolte dal Responsabile del Servizio di Prevenzione e Protezione (RSPP)"
                },
                "b": {
                    chiave: "Attestati di formazione del RSPP",
                    domanda: "Fornisci l'elenco degli attestati di formazione (se presenti) della persona Responsabile del Servizio di Prevenzione e Protezione (RSPP)"
                }
            }
        }
    },
    {
        number: "2.3",
        content: {
            capitolo: "Medico competente",
            elementi: {
                "": {
                    chiave: "Nominativo del medico competente ove previsto",
                    domanda: "Fornisci il nominativo del medico competente per il cantiere in questione"
                },
                "a": {
                    chiave: "Mansioni specifiche svolte in cantiere dal medico competente ai fini della sicurezza",
                    domanda: "Descrivi sinteticamente le specifiche mansioni inerenti la sicurezza svolte in cantiere dal medico competente (solo se presenti!)"
                }
            }
        }
    },
    {
        number: "2.4",
        content: {
            capitolo: "Rappresentante dei lavoratori per la sicurezza (RLS o RLST)",
            elementi: {
                "": {
                    chiave: "Nominativo del rappresentante dei lavoratori per la sicurezza (RLS o RLST)",
                    domanda: "Fornisci nome e cognome del Rappresentante dei Lavoratori per la Sicurezza (RLS o RLST)"
                },
                "a": {
                    chiave: "Viene indicato se il rappresentante dei lavoratori per la sicurezza è aziendale o territoriale",
                    domanda: "Viene indicato se il Rappresentante dei Lavoratori per la Sicurezza è aziendale (RLS) o territoriale (RLST)? Se è indicato come RLS, esso è aziendale, mentre se il Rappresentante dei Lavoratori per la Sicurezza è indicato come RLST, esso è territoriale"
                },
                "b": {
                    chiave: "Mansioni specifiche svolte in cantiere dal rappresentante dei lavoratori ai fini della sicurezza",
                    domanda: "Quali sono le specifiche mansioni inerenti la sicurezza svolte in cantiere dal Rappresentante dei Lavoratori per la Sicurezza (RLS o RLST)?"
                }
            }
        }
    },
    {
        number: "3",
        content: {
            capitolo: "Organizzazione del servizio di pronto soccorso, antincendio ed evacuazione dei lavoratori",
            elementi: {
                "": {
                    chiave: "Organizzazione del servizio di pronto soccorso, antincendio ed evacuazione dei lavoratori",
                    domanda: "Scrivi sinteticamente le procedure di pronto soccorso in caso di infortunio e antincendio specificate nel documento"
                },
                "a": {
                    chiave: "Congruenza tra PSC e POS in merito alla gestione dell'Emergenza, Evacuazione e Primo Soccorso",
                    domanda: ""
                }
            }
        }
    },
    {
        number: "3.1",
        content: {
            capitolo: "Addetti alla prevenzione incendi, evacuazione",
            elementi: {
                "": {
                    chiave: "Nominativi degli addetti alla prevenzione incendi, evacuazione",
                    domanda: "Fornisci nome e cognome degli Addetti Antincendio in cantiere"
                },
                "a": {
                    chiave: "Mansioni specifiche svolte dagli addetti alla prevenzione incendi ed evacuazione in cantiere ai fini della sicurezza",
                    domanda: "Quali sono le specifiche mansioni inerenti la sicurezza svolte dagli addetti all'antincendio e gestione emergenze incendio in cantiere? Scrivi 'non presenti' se non sono adeguatamente specificate"
                },
                "b": {
                    chiave: "Attestati di formazione degli addetti alla prevenzione incendi, evacuazione",
                    domanda: "Fornisci l'elenco degli attestati di formazione (se presenti nel documento) delle persone addette all'antincendio e prevenzione incendi"
                }
            }
        }
    },
    {
        number: "3.2",
        content: {
            capitolo: "Addetti al primo soccorso",
            elementi: {
                "": {
                    chiave: "Nominativi degli addetti al primo soccorso",
                    domanda: "Fornisci nome e cognome degli addetti all'emergenza e al primo soccorso in cantiere"
                },
                "a": {
                    chiave: "Mansioni specifiche svolte in cantiere dagli addetti al primo soccorso ai fini della sicurezza",
                    domanda: "Quali sono le specifiche mansioni inerenti la sicurezza svolte in cantiere dagli addetti al primo soccorso?"
                },
                "b": {
                    chiave: "Attestati di formazione degli addetti al primo soccorso",
                    domanda: "Fornisci l'elenco degli attestati di formazione (se presenti nel documento) delle persone addette al primo soccorso"
                }
            }
        }
    },
    {
        number: "4",
        content: {
            capitolo: "Numero e qualifica dei lavoratori operanti in cantiere per conto dell'impresa",
            elementi: {
                "a": {
                    chiave: "Nomi e qualifiche dei lavoratori dipendenti dell'impresa assegnati al cantiere",
                    domanda: "Fornisci i nominativi e le relative qualifiche dei lavoratori dipendenti dell'impresa assegnati al cantiere"
                },
                "b": {
                    chiave: "Attestati di formazione e addestramento dei lavoratori dipendenti dell'impresa assegnati al cantiere",
                    domanda: "Fornisci l'elenco degli attestati di formazione (se presenti nel documento) dei lavoratori dipendenti dell'impresa presenti in cantiere"
                }
            }
        }
    },
    {
        number: "5",
        content: {
            capitolo: "Esito del rapporto di valutazione rumore e vibrazioni",
            elementi: {
                "a": {
                    chiave: "Esito del rapporto di valutazione del rumore in funzione delle modalità esecutive individuate e delle macchine/attrezzature utilizzate",
                    domanda: "Fornisci l'esito del rapporto di valutazione del rumore"
                },
                "b": {
                    chiave: "Esito del rapporto di valutazione delle vibrazioni in funzione delle modalità esecutive individuate e delle macchine/attrezzature utilizzate",
                    domanda: "Fornisci l'esito del rapporto di valutazione delle vibrazioni"
                }
            }
        }
    },
    {
        number: "6",
        content: {
            capitolo: "Lavorazioni svolte in cantiere",
            elementi: {
                "a": {
                    chiave: "Descrizione dei lavori svolti dall'impresa",
                    domanda: "Descrivi le attività di cantiere / fasi lavorative svolte dall'impresa esecutrice"
                },
                "b": {
                    chiave: "Modalità e organizzazione dei lavori",
                    domanda: "Descrivi sinteticamente le modalità organizzative dei lavori specificate nel documento"
                },
                "c": {
                    chiave: "Sub-appalti previsti e descrizione dei lavori svolti da ogni Impresa Subappaltatrice (specificare tutti i livelli di subappalto)",
                    domanda: "Fornisci una descrizione dei sub-appalti previsti (solo se previsti) e delle attività svolte dalle imprese subappaltatrici"
                },
                "d": {
                    chiave: "Nomi e dati identificativi dei lavoratori autonomi operanti in cantiere per conto dell'impresa e descrizione dei lavori affidati a ogni singolo lavoratore autonomo",
                    domanda: "Dimmi i nominativi dei lavoratori autonomi presenti in cantiere (solo se specificati nel documento!), descrivendone per ciascuno l'attività svolta"
                },
                "e": {
                    chiave: "Programma dei lavori appaltati (indicare il numero di uomini-giorno previsti in ogni fase di lavoro)",
                    domanda: ""
                },
                "f": {
                    chiave: "Suddivisione delle attività in fasi dettagliate di lavoro (cronoprogramma pre fasi di lavoro); inizio e fine presunta dei lavori",
                    domanda: "Descrivi le attività di cantiere / fasi lavorative e dimmi la durata dei lavori"
                },
                "g": {
                    chiave: "Elenco opere provvisionali",
                    domanda: "Le opere provvisionali sono strutture o manufatti che hanno una durata temporanea e non faranno parte dell'opera compiuta. Scrivi le opere provvisionali previste in cantiere (se menzionate!)"
                },
                "h": {
                    chiave: "Elenco impianti",
                    domanda: "Gli impianti di cantiere includono l'impianto elettrico, impianto fognario, impianto di telecomunicazione, impianto idrico ecc... Fornisci l'elenco degli impianti di cantiere per il cantiere in questione (solo se presenti!)."
                },
                "i": {
                    chiave: "Elenco macchine",
                    domanda: "Fornisci l'elenco delle macchine e delle attrezzature utilizzate in cantiere"
                },
                "j": {
                    chiave: "Turni di lavoro",
                    domanda: "Quali sono i turni / orari di lavoro degli addetti presenti in cantiere?"
                },
                "k": {
                    chiave: "Analisi dei rischi",
                    domanda: "Descrivi in maniera sintetica la valutazione dei rischi rilevati."
                },
                "l": {
                    chiave: "DPI",
                    domanda: "Elenca i Dispositivi di Protezione Individuale (DPI) consegnati agli operatori in cantiere"
                },
                "m": {
                    chiave: "Misure preventive e protettive",
                    domanda: "Descrivi in modo sintetico le MISURE DI PREVENZIONE E PROTEZIONE in relazione a ciascun rischio"
                }
            }
        }
    },
    {
        number: "7",
        content: {
            capitolo: "Procedure complementari o di dettaglio richieste dal PSC (se previsto)",
            elementi: {
                "a": {
                    chiave: "Sono indicate le procedure complementari o di dettaglio richieste dal PSC",
                    domanda: "Sono indicate le procedure complementari o di dettaglio al PSC?"
                }
            }
        }
    },
    {
        number: "8",
        content: {
            capitolo: "Elenco allegati obbligatori",
            elementi: {
                "a": {
                    chiave: "Sostanze e preparati pericolosi e relative schede di sicurezza",
                    domanda: "Quali sostanze e preparati pericolosi sono utilizzati dall'impresa?"
                },
                "b": {
                    chiave: "Sono fornite le schede di consegna DPI ai lavoratori",
                    domanda: ""
                }
            }
        }
    },
    {
        number: "9",
        content: {
            capitolo: "Firme",
            elementi: {
                "a": {
                    chiave: "Data e firma del RLS/RLST per consultazione",
                    domanda: ""
                },
                "b": {
                    chiave: "data e firma del RSPP",
                    domanda: ""
                },
                "c": {
                    chiave: "data e firma del datore di lavoro",
                    domanda: ""
                }
            }
        }
    }
]


let questions = ["Chi ha commissionato l'opera?", "Chi è il responsabile dei lavori?", "Qual'è l'indirizzo del cantiere?", 
                 "Descrivi in maniera sintetica le attività svolte in cantiere.", "Elenca le lavorazioni svolte dai lavoratori autonomi.",
                 "Qual è la ragione sociale della ditta esecutrice?", "Chi è il datore di lavoro?", "Qual è la sede legale della ditta esecutrice (indirizzo, telefono, fax, e-mail)?", 
                 "Qual è la sede operativa della ditta esecutrice (indirizzo, telefono, fax, e-mail)?", "Quali sono gli uffici di cantiere?",
                 "Quant'è la durata dei lavori?", 
                 "Chi è l'incaricato dall'impresa affidataria per l'assolvimento dei compiti previsti all'art. 97 del D. Lgs. 81/08 (Datore di lavoro o dirigente delegato)?",
                 "Quali sono le mansioni specifiche svolte in cantiere ai fini della sicurezza dal datore di lavoro / dirigente delegato?", 
                 "Chi è il direttore tecnico di cantiere?",
                 "Quali sono le mansioni specifiche svolte in cantiere ai fini della sicurezza dal direttore tecnico di cantiere?", 
                 "Chi è il soggetto preposto / capocantiere?",
                 "Fornisci l'elenco degli attestati di formazione e addestramento.", "Quali sono le mansioni specifiche svolte ai fini della sicurezza dal preposto/capocantiere?",
                 "Chi è la persona responsabile del servizio di prevenzione e protezione (RSPP)?", "Quali sono le mansioni specifiche svolte ai fini della sicurezza dal responsabile del servizio di prevenzione e protezione (RSPP)?",
                 "Fornisci l'elenco degli attestati di formazione del responsabile del servizio di prevenzione e protezione.", "Fornisci il nominativo del medico competente.",
                 "Quali sono le mansioni specifiche svolte ai fini della sicurezza dal medico competente?", "Qual è il nominativo del rappresentante dei lavoratori per la sicurezza (RLS o RLST)?",
                 "Il rappresentante dei lavoratori per la sicurezza è aziendale o territoriale?", "Quali sono le mansioni specifiche svolte ai fini della sicurezza dal rappresentante dei lavoratori per la sicurezza (RLS o RLST)?"]