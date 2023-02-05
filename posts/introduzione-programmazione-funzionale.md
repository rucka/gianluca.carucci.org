---
title: 'Erik Meijer: il pioniere della programmazione funzionale spiega come creare codice robusto e scalabile'
metaTitle: 'Erik Meijer: il pioniere della programmazione funzionale spiega come creare codice robusto e scalabile'
metaDesc: 'Scopri come la programmazione funzionale di Erik Meijer può migliorare la tua efficienza di sviluppo e creare codice pulito, robusto e scalabile'
socialImage: /posts/introduzione-programmazione-funzionale/feature-image.jpg
date: '20230128'
tags:
  - programmazione
  - funzionale
  - parallelprogramming
---

Oggi ti parlo del perchè Erik Meijer è un punto di riferimento nel mondo dello sviluppo software.

Ora ti racconto il perchè.

_Partiamo dall'inizio._

La programmazione concorrente è diventata sempre più importante negli ultimi anni a causa della legge di Moore.

La legge di Moore afferma che il **numero di transistor su un chip raddoppia ogni 18-24 mesi**.

Con questa crescita della potenza di calcolo, è diventato possibile utilizzare la programmazione concorrente per sfruttare appieno la potenza dei computer moderni.

La programmazione concorrente consente di eseguire più attività in parallelo su un singolo processore, aumentando l'utilizzo della CPU e migliorando le prestazioni del sistema.

Con l'aumento dei dispositivi con più core (come i processori multicore) **la programmazione concorrente diventa sempre più importante per** la creazione di **software che sfrutti** appieno **la potenza dei moderni processori**.

![La legge di Moore](/posts/introduzione-programmazione-funzionale/moore.jpg)

_Cosa c'entra con tutto questo Erik Meijer?_

Erik è stato capace di portare concetti complessi prima destinati solo al mondo scientifico anche alla popolazione utilizzatrice di linguaggi di programmazione tradizionali come C# e Visual Basic.

Ha contribuito inoltre alla diffusione di questi concetti nella progettazione dei sistemi distribuiti attraverso modelli di computazione parallela capaci di sfruttare al massimo i dispositivi con più core.

**Il suo contributo alla programmazione funzionale è stato fondamentale per l'evoluzione del modo in cui pensiamo e scriviamo il codice**.

La sua carriera iniziò come sviluppatore di software in Olanda, dove si innamorò della programmazione funzionale e decise di dedicare la sua carriera alla sua diffusione.

Trasferitosi in America, Meijer iniziò a lavorare in Microsoft dove ebbe l'opportunità di influire sulla progettazione di linguaggi di programmazione come C# e Visual Basic e contribuire allo sviluppo di LINQ e Rx, librerie per il trattamento degli stream di dati in C# e F#.

![Erik Meijer](/posts/introduzione-programmazione-funzionale/erik.jpg)

Ma Meijer non si è limitato a influire sulla progettazione di singoli linguaggi, ha anche **contribuito alla diffusione della programmazione funzionale in ambito accademico**, come professore di programmazione funzionale all'Università di Utrecht e come **co-creatore del famoso corso di programmazione funzionale "Introduction to Haskell" su Coursera**.

Il suo approccio alla programmazione funzionale ha influito sulla progettazione di linguaggi di programmazione, sul modo di pensare l'architettura dei sistemi e sull'educazione degli sviluppatori di software.

In questo articolo, esploreremo l'approccio alla programmazione funzionale di Meijer e come ha influenzato la sua carriera e il suo lavoro.

_Sei pronto?_

**Partiamo!**

## La programmazione funzionale secondo Meijer

Secondo Meijer **la programmazione funzionale è un modo di pensare al problema da risolvere, piuttosto che un insieme di caratteristiche da implementare** in un linguaggio di programmazione: _è una questione di progettazione mentale piuttosto che di sintassi_ .

Meijer ha cercato di portare questa visione nei linguaggi di programmazione tradizionali, come C# e Visual Basic, introducendo funzionalità come le espressioni lambda e le query LINQ.

Queste funzionalità hanno permesso agli sviluppatori di scrivere codice più conciso e comprensibile, riducendo la quantità di stato mutabile e di side effect nel codice.

![Linq](/posts/introduzione-programmazione-funzionale/linq.png)

Meijer **è stato anche un pioniere nello sviluppo di linguaggi di programmazione funzionali** come Haskell e F#.

Ha lavorato come co-creatore di Haskell, uno dei linguaggi di programmazione funzionale più popolari e utilizzati in ambito accademico e di ricerca, e ha contribuito allo sviluppo di F#, un linguaggio di programmazione funzionale per la piattaforma .NET.

In sintesi, Meijer ha portato la programmazione funzionale in linguaggi di programmazione tradizionali e ha contribuito allo sviluppo di linguaggi di programmazione funzionali, con l'obiettivo di rendere il codice più comprensibile, conciso e privo di side effect.

> Functional programming is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects.
>
> Scott Wlaschin

## L'impatto di Meijer sui linguaggi tradizionali

Come detto, Erik Meijer è stato uno dei co-creatori di LINQ (Language Integrated Query) e Rx (Reactive Extensions), due progetti che hanno avuto un impatto significativo sullo sviluppo di C# e Visual Basic.

LINQ è una estensione del linguaggio C# che consente di eseguire query su dati strutturati e non strutturati utilizzando una sintassi simile a quella dei linguaggi di query SQL: gli sviluppatori possono utilizzare una sintassi familiare per lavorare con dati provenienti da fonti eterogenee come database, XML e JSON.

Rx, d'altra parte, è una libreria per il reactive programming che è stata originariamente sviluppata per C# e .NET Framework. Rx fornisce una libreria di operatori per lavorare con flussi di dati _reattivi_ e ha ispirato la creazione di librerie simili per altri linguaggi di programmazione, come RxJS in JavaScript.

Inoltre, Erik Meijer ha lavorato come membro del team di sviluppo di C# e Visual Basic, contribuendo allo sviluppo di molte funzionalità importanti dei linguaggi stessi, come la possibilità di utilizzare tipi anonimi e lambda expression.

> Functional programming is a way of describing what your program does, not how it does it.
>
> Eric Normand

In sintesi, Erik Meijer ha avuto un contributo significativo allo sviluppo di LINQ, Rx e C# e Visual Basic, introducendo funzionalità che hanno semplificato la vita degli sviluppatori e hanno permesso di lavorare in modo più efficiente con i dati e l'elaborazione di eventi.

## L'impatto di Meijer sull'architettura dei sistemi

L'approccio alla programmazione funzionale di Meijer non si è limitato alla scrittura del codice, ma ha anche influito sulla progettazione dell'architettura dei sistemi.

Meijer ha sviluppato il concetto di **_Functor_ e _Monad_ come strumenti per la progettazione di sistemi distribuiti** e per la creazione di interfacce utente.

Gli aspetti che più complicano i sistemi distribuiti sono tre:

- la mutabilità
- la condivisione dello stato
- i side effect

Il concetto di **Functor** consente di trattare i dati come oggetti immutabili, rendendo più facile la creazione di sistemi distribuiti e paralleli. Il concetto di **Monad** invece, consente di gestire gli side effect e lo stato mutabile, rendendo più facile la creazione di interfacce utente e di sistemi interattivi.

> Concurrent programming is the most complex, and the most important, form of programming. It's also the hardest.
>
> Erik Meijer

Meijer ha anche introdotto il concetto di **Reactive Programming**, una tecnologia che consente di creare sistemi altamente scalabili e reattivi, utilizzando il concetto di **Functor** e **Monad** per gestire gli eventi e gli stream di dati.

Reactive Programming è alla base di librerie come Rx in C# e F#, che consentono agli sviluppatori di creare sistemi distribuiti e interfacce utente reattive.

### I Functor

Per dimostrare come i **Functor** possono essere utilizzati per la creazione di sistemi distribuiti e paralleli, vediamo come possono essere implementati in Typescript.

Supponiamo di avere _una funzione `map` che prende come input una funzione e un array, e restituisce un nuovo array in cui ogni elemento è stato trasformato dalla funzione data_:

```js
function map<T, U>(f: (x: T) => U, xs: T[]): U[] {
  return xs.map(f)
}
```

Possiamo quindi utilizzare questa funzione per trasformare gli elementi di un array, ad esempio moltiplicando ogni elemento per 2:

```js
function map<T, U>(f: (x: T) => U, xs: T[]): U[] {
const numbers = [1, 2, 3, 4];
const doubleNumbers = map(x => x * 2, numbers);
console.log(doubleNumbers); // output: [2, 4, 6, 8]
```

Ma la funzione `map` può essere utilizzata per trasformare anche altri tipi di oggetti, come ad esempio gli _oggetti "Maybe" e "Either", che rappresentano il concetto di valori presenti o assenti o valori con un valore di errore_.

```js
interface Maybe<T> {
  map<U>(f: (x: T) => U): Maybe<U>;
}

const maybeNumber: Maybe<number> = {
  map: function <U>(f: (x: number) => U): Maybe<U> {
    if (this.value === undefined) {
      return { value: undefined }
    } else {
      return { value: f(this.value) }
    }
  },
  value: 2
}

const maybeDoubleNumber = maybeNumber.map((x) => x * 2)
console.log(maybeDoubleNumber.value) // output: 4
```

In questo modo possiamo utilizzare la stessa funzione `map` per trasformare sia gli array che gli oggetti `Maybe`, rendendo il codice più flessibile e facile da gestire.

> Functors are ubiquitous in functional programming, and they're one of the most important abstractions in the functional programmer's toolbox.
>
> Bartosz Milewski

### I Monad

Come abbiamo visto nei punti precedenti, i **Functor** ci permettono di trattare i dati come oggetti immutabili e di utilizzare la funzione `map` per trasformarli.

Le **Monad estendono questo concetto fornendo un modo per incapsulare la logica di un sistema distribuito o parallelo all'interno di un'unica struttura dati**.

In Typescript, possiamo implementare le **Monad** utilizzando una classe che estende la classe `Functor` e che implementa i metodi `bind` e `return`:

```js
class Monad<T> extends Functor<T> {
  bind<U>(f: (x: T) => Monad<U>): Monad<U> {
    return f(this.value)
  }

  return<U>(x: U): Monad<U> {
    return new Monad(x)
  }
}
```

Il metodo `bind` consente di eseguire una funzione su un oggetto `Monad` e di restituire un nuovo oggetto `Monad` contenente il risultato. Il metodo `return` crea un nuovo oggetto `Monad` a partire da un valore.

Possiamo quindi utilizzare questi metodi per incapsulare la logica di un sistema distribuito all'interno di un'unica struttura dati:

```js
const monadNumber = new Monad(2)
const monadDoubleNumber = monadNumber.bind((x) => new Monad(x * 2))
console.log(monadDoubleNumber.value) // output: 4
```

La funzione passata al metodo `bind` restituisce un nuovo oggetto `Monad` contenente il doppio del valore originale.

Ricapitolando, le **Monad** estendono il concetto dei **Functor** fornendo un modo per incapsulare la logica di un sistema distribuito o parallelo all'interno di un'unica struttura dati.

In questo esempio abbiamo visto come è possibile implementare le **Monad** in Typescript utilizzando la classe **Monad** che estende la classe **Functor** e che implementa i metodi `bind` e `return`.

> Monads are a way to structure computations with effects, such as input/output, exceptions, state, and non-determinism.
>
> Bartosz Milewski

### La proprietà associativa, i monoidi e la programmazione concorrente

**La proprietà associativa è fondamentale nella programmazione concorrente** in quanto influisce sul modo in cui i risultati vengono combinati e ordinati.

Ad esempio, quando si mescolano colori, se la proprietà associativa non fosse rispettata, i risultati potrebbero non essere come previsto.

Immaginiamo di avere tre secchi di vernice rossa, gialla e blu e che vogliamo mescolare questi colori per ottenere il verde. Se la proprietà associativa non fosse rispettata, potremmo finire per ottenere un colore diverso da quello previsto, come ad esempio un marrone.

Questo è perché l'ordine in cui si mescolano i colori ha un impatto sulla tonalità finale del colore.

In altre parole, la proprietà associativa dice che l'operazione di combinazione deve essere associativa, ovvero che:

`(a * b) * c`

(dove `*` è una generica operazione) _deve essere equivalente a_:

`a * (b * c)`

**Se questa proprietà non viene rispettata, i risultati possono essere imprevedibili e le operazioni non parallelizzabili**.

Questo è anche vero per le operazioni concorrenti, dove **l'ordine di esecuzione delle operazioni ha un impatto sul risultato finale**.

E' importante rispettare la proprietà associativa per garantire che i risultati siano precisi e affidabili.

_Come avere la garanzia che una operazione sia parallelizzabile?_

Ti presento **il monoide**.

Un monoide è un insieme matematico con una operazione binaria che soddisfa alcune proprietà come l'associatività e l'esistenza di un elemento neutro.

Queste proprietà **rendono i monoidi adatti per l'utilizzo in contesti di programmazione concorrente**, poiché garantiscono che gli operazioni eseguite sulla stessa istanza in parallelo possono essere combinate in un ordine qualsiasi senza influire sul risultato finale.

Ciò significa che **i monoidi possono essere utilizzati per modellare e risolvere problemi di concorrenza in modo efficiente e affidabile, fornendo una base solida per lo sviluppo di algoritmi e sistemi distribuiti concorrenti**.

### Map Reduce e le analogie con i Monad

**Il paradigma Map Reduce è un modello di programmazione distribuita utilizzato per elaborare grandi volumi di dati in modo parallelo**.

La sua filosofia si basa sull'utilizzo di due funzioni fondamentali: `map` e `reduce`.

La funzione `map` trasforma i dati in input in una serie di coppie chiave-valore, mentre la funzione `reduce` combina tutti i valori associati alla stessa chiave.

![Esempio di word count con map reduce](/posts/introduzione-programmazione-funzionale/wordcount.png)

L'analogia con le **Monad** è evidente: _entrambi i modelli consentono di incapsulare la logica distribuita all'interno di un'unica struttura dati_.

In entrambi i casi, **il concetto chiave è quello di composizione**: nel paradigma Map Reduce, la composizione avviene tramite la combinazione di funzioni `map` e `reduce`, mentre nel caso delle **Monad** la composizione avviene tramite la combinazione di metodi `bind` e `return`.

Entrambi i modelli permettono di trattare i dati come oggetti immutabili, evitando la modifica degli stessi durante l'elaborazione.

In sintesi, l'analogia tra le **Monad** e il paradigma Map Reduce è molto forte, poiché entrambi consentono di incapsulare la logica distribuita all'interno di un'unica struttura dati e di trattare i dati come oggetti immutabili.

### Combiniamo tutto assieme: Reactive Programming

Il reactive programming è un paradigma di programmazione che si basa sull'utilizzo di flussi di dati **reattivi**, ovvero flussi di dati che cambiano nel tempo.

In questo modello, i dati vengono trattati come flussi di eventi che possono essere trasformati, combinati e filtrati in modo simile a come avviene con le Monad.

Il reactive programming può essere implementato utilizzando diverse librerie e framework, tra cui RxJS in JavaScript e Typescript.

Con RxJS ad esempio, è possibile creare oggetti "Observable" che rappresentano un flusso di dati e utilizzare metodi come `map`, `filter` e `reduce` per trasformare e combinare questi flussi.

![Reactive Programming](/posts/introduzione-programmazione-funzionale/reactive.png)

Se consideriamo un oggetto "Observable" che rappresenta un flusso di posizioni GPS, possiamo utilizzare il metodo `map` per trasformare questo flusso in uno che rappresenta la velocità attuale del dispositivo, e utilizzare il metodo `filter` per eliminare i valori che superano una determinata soglia.

## Conclusione

In questo articolo, abbiamo esplorato il mondo della programmazione funzionale attraverso gli occhi di uno dei suoi principali rappresentanti, Erik Meijer.

Abbiamo visto come **la programmazione funzionale offra un approccio alternativo alla risoluzione dei problemi rispetto alla programmazione imperativa, con una maggiore enfasi sull'utilizzo di funzioni pure e immutabilità dei dati**.

Abbiamo anche visto come gli **strumenti come Functor, Monad e reactive programming possono essere utilizzati per rendere il codice più leggibile e manutenibile, permettendo di scrivere codice più conciso e prevenire gli side effect**.

Erik Meijer ha contribuito a portare questi concetti nell'ecosistema Microsoft attraverso il suo lavoro su LINQ e Rx, introducendo funzionalità che hanno reso più semplice lavorare con i dati e l'elaborazione degli eventi. Questi concetti sono stati ripresi da altri programmatori per estendere linguaggi fuori dallo stack tecnologico Microsoft.

Per gli sviluppatori di software con un background imperativo, può essere una sfida abbracciare un nuovo paradigma di programmazione; il vantaggio di questo nuovo strumeno è che la programmazione funzionale migliora il codice in termini di qualità del codice e manutenibilità.

> Imperative programming is a style of programming that is based on telling the computer what to do, step by step, and how to do it.
>
> Eric Lippert

In definitiva, la programmazione funzionale è uno strumento potente che può aiutare gli sviluppatori a creare software più robusto e scalabile.

_Stai attento però!_

E' lo strumento che risolverà tutti i nostri problemi?

**No**.

_Come ogni strumento, anche la programmazione funzionale è un asset_: dobbiamo padroneggiarlo ed utilizzarlo nel contesto giusto senza abusarne.

Ma il tempo per questa discussione non è ancora arrivato.

Prima di concludere ti lascio alcuni link per approfondire l'argomento di questo articolo:

- [Serie di video "Functional Programming Fundamentals" di Erik Meijer su Microsoft Virtual Academy](https://learn.microsoft.com/it-it/shows/c9-lectures-erik-meijer-functional-programming-fundamentals/)
- [libro "Functional Programming in C#" di Enrico Buonanno e Erik Meijer](https://www.manning.com/books/functional-programming-in-c-sharp)
- [Pagina wikipedia di Rx](http://reactivex.io/)
- [Pagina wikipedia di LINQ](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/)
- [Pagina wikipedia di Functor](https://en.wikipedia.org/wiki/Functor)
- [Pagina wikipedia di Monad](<https://en.wikipedia.org/wiki/Monad_(functional_programming)>)
- [Pagina wikipedia di Reactive Programming](https://en.wikipedia.org/wiki/Reactive_programming)
- [Pagina wikipedia di Map-Reduce](https://en.wikipedia.org/wiki/MapReduce)

---

Sarei contento se lasciassi un commento per raccontare la tua esperienza con la programmazione funzionale, i tuoi spunti, le tue riflessioni o i dubbi costruttivi.

_Parliamone ed arricchiamoci insieme._

E se vuoi, condividi questo articolo con chi pensi possa essergli utile.

Se invece sei timido o vuoi contattarmi, [scrivimi](/contattami)

Tieni botta,  
Gianluca
