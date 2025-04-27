---
marp: true
theme: default
backgroundImage: url('images/HaapsaluK_est.png')
backgroundPosition: 20px calc(100% - 20px)
backgroundSize: 250px
---

# Igaüks võib luua töötava veebilehe

## Kas sellest piisab, et olla arendaja?

Martti Raavel

<martti.raavel@tlu.ee>

---

## Miks mina täna siin olen?

- TLÜ Haapsalu kolledži rakendusinformaatika õppekava juht
- Õpetame veebiarendust
- Arengud ja väljakutsed tarkvaraarenduses

---

## Millest juttu tuleb?

- Mis on generatiivne tehisinttelekt (TI)?
- Kuidas kasutatakse generatiivset TI-d tarkvaraarenduses?
- Teeme ühe veebirakenduse
- Kas tulevikus (või juba praegu) on programmeerimise oskused üldse vajalikud?

---

## Mis on generatiivne TI?

---

## Mis on generatiivne TI?

"Generatiivne TI, üks tehisintellekti rakendustest, võimaldab luua uut sisu, sh teksti, pilte ja heli. Seda tüüpi tehnoloogiat treenitakse olemasolevate näidete peal, näiteks tekstiandmed nagu raamatud ja veebilehed- masina õppimisprotsessi järel saabki TI abil luua sarnast sisu."

Allikas: <https://www.tlu.ee/tehisintellekt>

---

## Kui paljud teist kasutavad TI-d?

---

## Mille jaoks te TI-d kasutate?

---

## Kuidas TI-d kasutatakse tarkvaraarenduses?

- **Koodi genereerimine**
- Koodi testimine
- Koodi dokumenteerimine
- Koodi täiustamine
- ...

---

## Kuidas see välja näeb?

![alt text](image.png)

---

## Proovime järele

---

## Viip

`Palun loo lihtne veebipõhine rakendus ostunimekirja haldamiseks.`

---

## Kas tänapäeval nii käibki?

---

## Kas tänapäeval nii käibki?

GitHubi andmetel kasutab üle 90% USA arendajatest mingil moel AI koodiassistente oma töös või vabal ajal​

---

## Plussid

- Lihtsus ja mugavus
- Kiirus, suurem tootlikkus
- Vigade leidmine (kirjavead, erinevad nimetused muutujates jne)
- Algajatele sobiv, aga ...
- ...

---

## Miinused

- Piiratud loovus (põhineb treeningandmetel)
- Keeruliste projektide puhul ei pruugi nii hästi töötada
- Ajakohasus (põhineb treeningandmetel)
- Turvalisus
- Sõltuvus TI-st ja arendaja oskuste kahanemine
- Võltsenesekindlus
- TI hallustsineerimine
- ...

---

## Mida näitavad uuringud TI kasutamise kohta tarkvaraarenduses?

- Suurem tootlikus (korduvad ja 'tüütud' ülesanded jne)
- Vigade leidmine (kirjavead, erinevad nimetused muutjates jne)
- TI kirjutatud koodis on vähem vigu lihtsates ülesannetes
- TI kirjutatud koodis on rohkem vigu keerulistes ülesannetes
- TI kirjutatud kood on sageli pikem, kui inimese poolt kirjutatud kood (kordused, ebavajalikud osad)
- TI sobib rohkem tüüpiliste lahenduste loomiseks
- ...

---

## Kui soovid olla tarkvaraarendaja, siis kas on veel vaja osata programmeerida?

---

## Kindasti on!

- Ilma tugeva vundamendita ei saa ka TI abil ehitada turvalist ja toimivat tarkvara
- Arendaja roll on muutunud - inimese ja TI sümbioos

> Tehisintellekt ei asenda arendajat, vaid täiendab teda
>
> P.S. Sama kehtib ka muude valdkondade kohta (kaasa arvatud õppimine)

---

## Turvalisus - CSS süstimine

CSS süstimine on rünnak, mille käigus ründaja lisab pahatahtlikku CSS-i veebilehe koodile, et muuta selle välimust või käitumist.

See võib hõlmata näiteks veebilehe taustavärvi muutmist, elementide peitmist või isegi pahavara levitamist.

---

## Turvalisus - CSS süstimine - näide

```html
"Hambapasta
<style>
  body {
    background-color: red !important;
  }</style
>"
```

---

## Turvalisus - XSS (Cross Site Scripting)

XSS (Cross-Site Scripting) on turvaviga, mis võimaldab ründajal sisestada pahatahtlikku JavaScripti koodi veebilehele, mis seejärel käivitatakse teiste kasutajate brauserites.

---

## Turvalisus - XSS - näide

```html
<img src="x" onerror="alert('XSS!')" />
```

---

## Turvalisus - HTML süstimine

HTML süstimine on rünnak, mille käigus ründaja lisab pahatahtlikku HTML-i veebilehe koodile, et muuta selle välimust või käitumist.

---

## Turvalisus - HTML süstimine - 1

```html
<a href="https://www.example.com">Pesupulber</a>
```

---

## HTML süstimine - 2

```html
Jahu
<button onclick="window.open('https://www.example.com', '_blank')">
  Go to Example
</button>
```

---

## Allikad

- <https://www.tlu.ee/tehisintellekt>
- <https://extendedstudies.ucsd.edu/news-events/extended-studies-blog/will-ai-replace-programmers-navigating-the-future-of-coding>
- <https://www.salesforceben.com/will-ai-replace-developers-4-senior-developers-weigh-in>
- <https://htec.com/insights/blogs/dual-edge-ai-coding-pros-cons-using-ai-code-generators>
- <https://github.blog/news-insights/research/survey-reveals-ais-impact-on-the-developer-experience/>
