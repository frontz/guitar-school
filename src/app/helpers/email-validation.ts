export class EmailValidation {

    isValidEmail(email: string) {
        // Wyrażenie regularne do sprawdzania poprawności adresu e-mail
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        // Testowanie adresu e-mail
        return emailPattern.test(email);
    }
}