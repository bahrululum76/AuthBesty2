

describe('Forgot', () => {
    
    it('SCN_Forgot passowrd_1', () => {
        cy.visit('https://besty-staging.netlify.app/auth/login')
        
        cy.get('#email').type('mochlucam@gmail.com')
        cy.get('button').contains('Lanjut').click()
        cy.get('button').contains('Lupa kata sandi?').click()
        cy.get('#email').type('mochlucam@gmail.com')
        cy.get('button').contains('Lanjut').click()

        const chars1 = '1234';
        const chars = chars1.split('');
        cy.get('input[aria-label="Character 1."]').type(chars[0]);
        cy.get('input[aria-label="Character 2."]').type(chars[1]);
        cy.get('input[aria-label="Character 3."]').type(chars[2]);
        cy.get('input[aria-label="Character 4."]').type(chars[3]);
        cy.contains('Atur ulang kata sandi kamu').should('be.visible')
  
      })
    it('SCN_Forgot passowrd_2', () => {
        cy.visit('https://besty-staging.netlify.app/auth/login')
        
        cy.get('#email').type('mochlucam@gmail.com')
        cy.get('button').contains('Lanjut').click()
        cy.get('button').contains('Lupa kata sandi?').click()
        cy.get('#email').type('mochlucam@gmail.com')
        cy.get('button').contains('Lanjut').click()

        const chars1 = '1234';
        const chars = chars1.split('');
        cy.get('input[aria-label="Character 1."]').type(chars[0]);
        cy.get('input[aria-label="Character 2."]').type(chars[1]);
        cy.get('input[aria-label="Character 3."]').type(chars[2]);
        cy.get('input[aria-label="Character 4."]').type(chars[3]);

        cy.contains('Kode verifikasi yang kamu masukkan tidak cocok, silahkan periksa kembali kotak masuk kamu.').should('be.visible')
      })
    

  })