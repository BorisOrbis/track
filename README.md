# track 🎯

> Jednostavna PWA za praćenje težine, kalorija i navika — namijenjena za osobnu upotrebu.  
> Radi **100% offline**, bez servera, bez baze podataka, bez registracije.  
> Sve se čuva lokalno u `localStorage` preglednika.

---

## Screenshotovi

| Danas | Hrana | Favoriti | Statistike |
|-------|-------|----------|------------|
| Pregled težine, kalorija i navika | Pretraga namirnica i dnevni log | Brzi unos omiljenih obroka | Graf težine i habit heatmap |

---

## Značajke

- ⚖️ **Praćenje težine** — unos dnevne težine, graf napretka, ETA do cilja
- 🍽️ **Dnevnik hrane** — 519 namirnica u bazi (hrvatska kuhinja + marketnski proizvodi)
- ⭐ **Favoriti** — spremi omiljene obroke s defaultnom količinom, jedan tap za unos
- 🚶 **Navike** — voda, šetnja, bicikl, stres, san
- 📊 **Statistike** — izgubljeno/preostalo, habit heatmap zadnjih 14 dana
- 💾 **Backup** — izvoz/uvoz svih podataka kao JSON
- 🌙 **Dark / Light mode**
- 📱 **PWA ready** — dodaj na početni ekran mobitela

---

## Pokretanje

Nije potrebna instalacija.

```bash
# Opcija 1 — direktno u pregledniku
Otvori boris-mrsavljenje-2.html u bilo kojem pregledniku

# Opcija 2 — lokalni server (opcionalno)
python3 -m http.server 8080
# → http://localhost:8080/boris-mrsavljenje-2.html

# Opcija 3 — GitHub Pages
# Fork repozitorija → Settings → Pages → Deploy from branch
```

---

## Baza namirnica (519 stavki)

| Kategorija | Primjeri |
|------------|---------|
| Meso & perad | Piletina, govedina, svinjetina, puretina |
| Riba & plodovi mora | Losos, tuna, brancin, škampi |
| Mliječni proizvodi | Dukat, 'z bregov, Müller, Alpro |
| Gotovi marketnski proizvodi | Podravka, Ledo, Gavrilović, Argeta |
| Hrvatska kuhinja | Sarma, pašticada, maneštra, burek |
| Žitarice & kruh | Mlinar, Kellogg's, Quaker |
| Čokolade & grickalice | Kraš, Milka, Kinder, Lay's, Pringles |
| Napici | Coca-Cola, Red Bull, Cedevita, Jana |
| Proteinski suplementi | Whey, kazein, protein barovi |
| Začini & dodaci | Vegeta, ajvar, hummus, tahini |

> Dodatne namirnice moguće dodati kroz sučelje (Postavke → Moje namirnice).

---

## Struktura projekta

```
index.html   ← cijela aplikacija u jednom fajlu
README.md
```

Namjerno **single-file** arhitektura — lakši prijenos, nema dependencyja, radi iz bilo kojeg direktorija.

---

## Konfiguracija

Otvori **☰ Postavke** (hamburger ikona gore desno):

| Postavka | Default |
|----------|---------|
| Dob | 5 god. |
| Visina | 184 cm |
| Početna težina | 109 kg |
| Ciljna težina | 94 kg |
| Kalorijski cilj | 1.750 kcal/dan |
| Cilj proteina | 140 g/dan |

BMR i TDEE se računaju automatski po **Mifflin-St Jeor** formuli.

---

## Kako koristiti Favorite

1. Idi na tab **Hrana**
2. Pretraži namirnicu (npr. "skyr")
3. Tapni ♥ desno od rezultata → dodano u Favorite
4. Idi na tab **⭐ Favoriti**
5. Tapni na favorit → otvara se modal s predpopulanom količinom
6. Promijeni gram po potrebi → **+ Dodaj**

Aplikacija pamti zadnju korištenu količinu za sljedeći put.

---

## Backup podataka

**Izvoz:** Postavke → ⬇️ Izvezi sve podatke (JSON)  
**Uvoz:** Postavke → ⬆️ Uvezi backup (JSON)

Backup uključuje: težine, obroke, navike, custom namirnice, favorite i postavke.

---

## Tehnologije

- Vanilla JavaScript (bez frameworka)
- CSS custom properties (dark/light theme)
- localStorage (persistencija podataka)
- Canvas API (graf težine)
- System fonts (radi offline)

---

## Licenca

Osobni projekt. Slobodno forkai i prilagodi za vlastitu upotrebu.
