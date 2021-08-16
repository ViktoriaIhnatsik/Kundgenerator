# Kungnerator

 **JavaScript-bibliotek och ramverk kurs(React)**
 
>Uppgift:

Individuell inlämningsuppgift 

Uppgiften går ut på att skapa ett projekt för småföretag, så att de kan hålla reda på sina kunder samt lite information om varje kund.

Krav:
- React
- JSX
- React Router Dom
- useState
- useEffect
- Styled Components


Logga in användaren
Här visar vi upp input fält för email och användare samt en knapp för att logga in. När användaren trycker på knappen så skickar vi ett anrop till /api-tokenauth/ med email och password. Då får vi tillbaka en token


Hemskärmen
När användaren har logga in navigerar vi vidare till /home
- Lista alla kunder som användaren har kopplat till sitt konto ( GET
/api/v1/customers/)
- Ge användaren möjlighet att lägga till en ny kund ( POST /api/v1/customers/ )
- När användaren har skapat kunden ska kundlistan laddas om från back-end
- Visa vilken användare som är inloggad ( api/v1/me ). Visa den inloggade användarens email, förnamn och efternamn.

Detaljvy för en specifik kund
- Visa följande information på Detaljvy för en specifik kund  (name, orgaNr, vatNr, ....)
- Lägg till en knapp så att användaren kan ta bort en kund (HTTP Method Delete på /api/v1/customers/{id}/ ). Användaren ska därefter navigera tillbaka till "Hemskärmen"


