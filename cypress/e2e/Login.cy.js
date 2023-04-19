

describe('Login', () => {
    it('SCN_Login_2', () => {
      cy.visit('https://besty-staging.netlify.app/auth/login')
      
      cy.get('#email').type('mochlucam@gmail.com')

      cy.get('button').contains('Lanjut').click()
      cy.get('#password').type('Ulum1976')
      cy.get('button').contains('Masuk').click()
    })
    it('SCN_Login_2', () => {
        cy.visit('https://besty-staging.netlify.app/auth/login')
        
        cy.get('#email').type('Test.gmail.com')
        cy.contains('Format email salah!').should('exist');
  
      })
    it('S3CN_Login_3', () => {
      cy.visit('https://besty-staging.netlify.app/auth/login')
      
      cy.get('#email').type('mochlucam@gmail.com')
      cy.get('button').contains('Lanjut').click()
      cy.get('#password').type('hjghjhjy677')
      cy.get('button').contains('Masuk').click()
      cy.contains('Kata sandi Anda salah, silahkan coba lagi').should('exist');

    })

  })