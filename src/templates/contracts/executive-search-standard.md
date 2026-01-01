# CONTRAT DE MANDAT DE RECHERCHE DE CADRE DIRIGEANT

**Reference** : {{CONTRACT_REF}}
**Date** : {{DATE}}

---

## ENTRE LES SOUSSIGNES

**LE CLIENT**

{{CLIENT_NAME}}
{{CLIENT_ADDRESS}}
SIRET : {{CLIENT_SIRET}}
Represente par : {{CLIENT_CONTACT}}, {{CLIENT_TITLE}}

Ci-apres denomme "le Client"

**ET**

**IRBIS**
{{IRBIS_ADDRESS}}
SIRET : {{IRBIS_SIRET}}
Represente par : {{IRBIS_CONTACT}}

Ci-apres denomme "le Cabinet"

---

## ARTICLE 1 - OBJET DU MANDAT

Le Client confie au Cabinet une mission de recherche et de selection pour le poste de :

**{{JOB_TITLE}}**

Rattachement : {{JOB_REPORTING}}
Localisation : {{JOB_LOCATION}}
Package cible : {{PACKAGE_MIN}} - {{PACKAGE_MAX}} EUR brut annuel

Le descriptif detaille du poste figure en Annexe 1.

---

## ARTICLE 2 - MODALITES D'EXECUTION

### 2.1 Methodologie

Le Cabinet s'engage a :

- Definir avec le Client le profil recherche (competences, experience, soft skills)
- Identifier les candidats potentiels par approche directe et base de donnees
- Evaluer les candidatures (entretiens, references)
- Presenter une shortlist de {{SHORTLIST_COUNT}} candidats qualifies
- Accompagner le Client dans le processus de decision

### 2.2 Delais

| Phase | Delai |
|-------|-------|
| Cadrage mission | J+{{DELAY_BRIEFING}} |
| Premiere shortlist | J+{{DELAY_SHORTLIST}} |
| Presentation finale | J+{{DELAY_FINAL}} |

### 2.3 Reporting

Le Cabinet fournira un reporting {{REPORTING_FREQUENCY}} incluant :
- Avancement de la recherche
- Candidatures en cours
- Points d'attention

---

## ARTICLE 3 - HONORAIRES

### 3.1 Success Fee

Les honoraires sont fixes a **{{FEE_PERCENT}}%** du package annuel brut du candidat retenu.

Base de calcul : salaire fixe + variable cible + avantages valorisables

### 3.2 Retainer (si applicable)

{{#IF RETAINER}}
Un acompte de **{{RETAINER_AMOUNT}} EUR HT** est du a la signature, imputable sur le success fee.

Echeancier :
- {{RETAINER_PERCENT_1}}% a la signature : {{RETAINER_AMOUNT_1}} EUR HT
- {{RETAINER_PERCENT_2}}% a la shortlist : {{RETAINER_AMOUNT_2}} EUR HT
- Solde au placement
{{/IF RETAINER}}

{{#IF NO_RETAINER}}
Mission au succes uniquement. Aucun acompte requis.
{{/IF NO_RETAINER}}

### 3.3 Facturation

- Facture emise a la confirmation d'embauche du candidat
- Paiement a {{PAYMENT_DAYS}} jours date de facture
- TVA applicable : {{TVA_RATE}}%

---

## ARTICLE 4 - EXCLUSIVITE

{{#IF EXCLUSIVE}}
Le Client s'engage a confier cette mission en **exclusivite** au Cabinet pour une duree de {{EXCLUSIVITY_DURATION}} mois.

Durant cette periode, le Client s'interdit de :
- Mandater un autre cabinet sur le meme poste
- Proceder a un recrutement direct sur le meme profil

En contrepartie, le Cabinet s'engage a prioriser cette mission.
{{/IF EXCLUSIVE}}

{{#IF NON_EXCLUSIVE}}
Cette mission est confiee de maniere **non-exclusive**. Le Client reste libre de mener des recherches en parallele.
{{/IF NON_EXCLUSIVE}}

---

## ARTICLE 5 - GARANTIE

En cas de depart du candidat place durant la periode d'essai :

- Le Cabinet s'engage a presenter de nouveaux candidats sans frais supplementaires
- Cette garantie est valable une fois
- Elle ne s'applique pas en cas de licenciement economique ou modification substantielle du poste

---

## ARTICLE 6 - CONFIDENTIALITE

Les parties s'engagent a :

- Traiter comme confidentielles toutes informations echangees
- Ne pas divulguer l'identite des candidats a des tiers
- Respecter le RGPD pour les donnees personnelles

Cette obligation perdure 2 ans apres la fin du mandat.

---

## ARTICLE 7 - PROTECTION DES CANDIDATS

Le Client s'interdit, pendant la duree du mandat et les {{CANDIDATE_PROTECTION_MONTHS}} mois suivants, d'approcher directement les candidats presentes par le Cabinet pour tout autre poste, sans accord prealable ecrit.

---

## ARTICLE 8 - DUREE ET RESILIATION

### 8.1 Duree

Le present mandat est conclu pour une duree de **{{CONTRACT_DURATION}} mois** a compter de sa signature.

### 8.2 Resiliation

Chaque partie peut resilier le mandat avec un preavis de {{NOTICE_DAYS}} jours.

En cas de resiliation par le Client :
{{#IF RETAINER}}
- Les retainers verses restent acquis au Cabinet
{{/IF RETAINER}}
- Si un candidat presente est recrute dans les {{POST_TERMINATION_MONTHS}} mois suivant la resiliation, les honoraires restent dus

---

## ARTICLE 9 - DISPOSITIONS GENERALES

### 9.1 Droit applicable

Le present contrat est regi par le droit francais.

### 9.2 Litiges

En cas de litige, les parties s'engagent a rechercher une solution amiable. A defaut, le Tribunal de Commerce de {{JURISDICTION}} sera competent.

### 9.3 Integralite

Le present contrat et ses annexes constituent l'integralite de l'accord entre les parties.

---

## SIGNATURES

Fait en deux exemplaires originaux.

**Pour le Client**

Nom : {{CLIENT_CONTACT}}
Fonction : {{CLIENT_TITLE}}
Date : {{DATE}}

Signature :




**Pour le Cabinet**

Nom : {{IRBIS_CONTACT}}
Date : {{DATE}}

Signature :




---

## ANNEXES

- Annexe 1 : Descriptif de poste
- Annexe 2 : Grille d'evaluation
- Annexe 3 : Conditions generales

---

*Template v1.0 - Irbis Executive Search*
