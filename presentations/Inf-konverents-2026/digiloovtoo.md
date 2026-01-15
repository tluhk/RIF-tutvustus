---
marp: true
class: lead
backgroundColor: #fefefe
color: #333
paginate: true
---

# Digiloovtöö GitHubis

## Projektihaldus, koostöö ja dokumentatsioon

Kaasaegne lähenemine kooliprojektidele

---

## Miks GitHub?

Me asendame Taiga keskkonna GitHubiga, et tuua kokku:

1.  **Kood ja failid** (Repository)
2.  **Projektijuhtimine** (Projects)
3.  **Dokumentatsioon** (Wiki)

See on IT-maailma _de facto_ standard. Kõik asub ühes kohas.

---

## 1. Põhimõisted: Git vs GitHub

Tihti aetakse need kaks segamini.

- **Git**
  - Versioonihaldustarkvara sinu arvutis.
  - Salvestab ajalugu ja muudatusi.
- **GitHub**
  - Pilveplatvorm Giti projektide hoidmiseks.
  - Lisab koostöövahendid (Issues, Projects, Wiki).

---

## 2. Repositoorium ja Failid

**Repositoorium (Repo)** on projekti "kaust" pilves.

- **Struktuur:** Digiloovtöös hoiame korda:
  - `src/` - Lähtekood
  - `dokumentatsioon/` - Analüüsid
  - `meedia/` - Pildid ja videod
  - `README.md` - Projekti esileht
- **Failihaldus:** Kõik muudatused on jälgitavad (kes tegi, millal tegi).

---

## 3. GitHub Projects (Projektitahvel)

Asendab Taiga Kanban lauda.

![bg right:45% fit](https://github.githubassets.com/images/modules/site/issues/projects/roadmap.png)

- **Tabelivaade (Table):** Hea nimekiri kõigist töödest.
- **Tahvli vaade (Board):** Klassikaline _Todo_ -> _In Progress_ -> _Done_.
- **Automaatika:** Ülesanded liiguvad ise, kui need märgitakse tehtuks.

---

## 4. Issues (Ülesanded) ja Tasks

Kogu töö toimub **Issue**'de kaudu. See on digiloovtöö "User Story".

Iga **Issue** sisaldab:

- **Pealkiri:** Lühike ja selge.
- **Kirjeldus:** Mida on vaja teha? (User Story formaat).
- **Task List:** Alamülesanded kontrollnimekirjana.

```markdown
- [x] See ülesanne on tehtud
- [ ] See on veel tegemata
```

---

Siin on valmis esitluse kood, mis on optimeeritud Marp (Markdown Presentation Ecosystem) jaoks. See katab kõik sinu poolt nimetatud teemad ja on struktureeritud loogilises järjekorras.

Saad seda koodi kasutada:

VS Code'is: Installi laiendus "Marp for VS Code" ja kleebi kood .md faili.

Veebis: Kleebi kood Marp Web keskkonda.

Markdown

---

marp: true
theme: gaia
class: lead
backgroundColor: #fefefe
color: #333
paginate: true
style: |
section { font-family: 'Arial', sans-serif; }
h1 { color: #24292f; }
h2 { color: #0969da; }
strong { color: #cf222e; }
code { background: #f6f8fa; color: #24292f; padding: 0.2em 0.4em; border-radius: 6px; }

---

# Digiloovtöö GitHubis

## Projektihaldus, koostöö ja dokumentatsioon

Kaasaegne lähenemine kooliprojektidele

---

## Miks GitHub?

Me asendame Taiga keskkonna GitHubiga, et tuua kokku:

1.  **Kood ja failid** (Repository)
2.  **Projektijuhtimine** (Projects)
3.  **Dokumentatsioon** (Wiki)

See on IT-maailma _de facto_ standard. Kõik asub ühes kohas.

---

## 1. Põhimõisted: Git vs GitHub

Tihti aetakse need kaks segamini.

- **Git** 🛠️
  - Versioonihaldustarkvara sinu arvutis.
  - Salvestab ajalugu ja muudatusi.
- **GitHub** ☁️
  - Pilveplatvorm Giti projektide hoidmiseks.
  - Lisab koostöövahendid (Issues, Projects, Wiki).

---

## 2. Repositoorium ja Failid

**Repositoorium (Repo)** on projekti "kaust" pilves.

- **Struktuur:** Digiloovtöös hoiame korda:
  - `src/` - Lähtekood
  - `dokumentatsioon/` - Analüüsid
  - `meedia/` - Pildid ja videod
  - `README.md` - Projekti esileht
- **Failihaldus:** Kõik muudatused on jälgitavad (kes tegi, millal tegi).

---

## 3. GitHub Projects (Projektitahvel)

Asendab Taiga Kanban lauda.

![bg right:45% fit](https://github.githubassets.com/images/modules/site/issues/projects/roadmap.png)

- **Tabelivaade (Table):** Hea nimekiri kõigist töödest.
- **Tahvli vaade (Board):** Klassikaline _Todo_ -> _In Progress_ -> _Done_.
- **Automaatika:** Ülesanded liiguvad ise, kui need märgitakse tehtuks.

---

## 4. Issues (Ülesanded) ja Tasks

Kogu töö toimub **Issue**'de kaudu. See on digiloovtöö "User Story".

Iga **Issue** sisaldab:

- **Pealkiri:** Lühike ja selge.
- **Kirjeldus:** Mida on vaja teha? (User Story formaat).
- **Task List:** Alamülesanded kontrollnimekirjana.

```markdown
- [x] See ülesanne on tehtud
- [ ] See on veel tegemata

---

## 5. Planeerimine: Milestones & Labels

Kuidas hoida suurt pilti?

- Milestones (Teetähised/Sprindid):

  - Grupeerib ülesanded ajaliselt.
  - Näide: "Sprint 1: Analüüs" (Tähtaeg: 20. sept).
  - Näitab progressi (mitu % on valmis).

- Labels (Sildid):

  - Värvilised sildid ülesannete kategoriseerimiseks.
  - Näited: bug 🐛, dokumentatsioon 📝, disain 🎨.
```
