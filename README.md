# db-challenge

Facciamo un ripasso approfondito dei concetti fondamentali sui Database Relazionali e MySQL. Lavorerai ad un progetto reale che ti permetterà di mettere in pratica le conoscenze acquisite.

## 1. Progettazione DB

1. Analizza il testo e individua entità, attributi e relazioni
2. Disegna il diagramma E/R utilizzando uno dei tool per grafici che conosci (vedi sotto la sezione reference)
3. Esporta il diagramma come immagine e caricalo nella repo

**Piattaforma Social:**

- Utenti, Post, Media, Commenti, Likes

## 2. Gestione Database

Proseguire con l'implementazione del DB Piattaforma Social usando MySQL.

Una volta sicuri del diagramma e/r, puoi passare alla nuova fase. Crea un nuovo database usando il un qualsiasi client MySQL e importate il file `db.sql` fornito. Aprite il file PDF e scrivete le query richieste. Al fianco di ogni richiesta, c'è il numero di risultati che dovrebbe restituirvi la query.

Dopo aver testato le vostre query, riportatele in un file `.txt` e caricatelo nella repo.

1. Seleziona tutti gli utenti e calcolane l'età (25)
2. Seleziona tutti i post senza Like (13)
3. Conta il numero di like per ogni post (165)
4. Ordina gli utenti per il numero di media caricati (25)
5. Ordina gli utenti per totale di likes ricevuti nei loro posts (25)
6. Seleziona tutti i post degli utenti tra i 20 e i 30 anni (49)
7. Seleziona il numero di post e di media per ogni utente

**Note Importanti:**

- Prima di disegnare, ragiona sulle relazioni e sulle cardinalità
- Un errore comune è confondere attributi con entità
- Ogni entità deve avere una chiave primaria
- Documenta le scelte e le eventuali assunzioni

## Bonus

Sviluppa un semplice server REST API con Express, connettilo al database mysql ed implementa le seguenti rotte:

- `GET /users` - restituisce tutti gli utenti
- `GET /users/:id` - restituisce un utente specifico
- `GET /posts` - restituisce tutti i post
- `GET /posts/:id` - restituisce un post specifico

## AI Linee guida

- per la scrittura del codice e delle query SQL puoi utilizzare l'AI per generare una bozza, ma assicurati di comprendere e verificare il codice prima di utilizzarlo.

## Argomenti da ripassare man mano

- Entità, attributi e relazioni
- Chiavi primarie e chiavi esterne
- Relazioni uno-a-molti, molti-a-molti
- Cardinalità e relazioni
- Tipi di dato e comandi base in MySQL
- Chiavi, indicizzazione e query
- Vari tipi di JOIN
