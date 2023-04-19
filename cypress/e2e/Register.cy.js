import 'xpath';


function makeRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}



describe('Register', () => {
  it('SCN_Register_1', () => {
    const randomString = makeRandomString(12);
    const email = `${randomString}@yopmail.com`;

    cy.visit('https://besty-staging.netlify.app/en/auth/register');

    cy.get('#email').type(email).type('{enter}');
    cy.get('button').contains('Yakin').click()

    let Respons = '';
    cy.GetOTP(email).then((e)=> 
    {
      console.log(e)
      Respons = e; 
    
    }
    )
    
    const chars1 = Respons;
    const chars = chars1.split('');
   cy.get('input[aria-label="Character 1."]').type(chars[0]);
   cy.get('input[aria-label="Character 2."]').type(chars[1]);
   cy.get('input[aria-label="Character 3."]').type(chars[2]);
   cy.get('input[aria-label="Character 4."]').type(chars[3]);    
    
  
  })

  // it('test', ()=> {

  // })

  it('SCN_Register_2', () => {
   

    cy.visit('https://besty-staging.netlify.app/en/auth/register');

    cy.get('#email').type('email.mail.co').type('{enter}');
    cy.contains('Format yang kamu masukkan belum tepat!').should('be.visible')

  })

  it('SCN_Register_3', () => {
   

    cy.visit('https://besty-staging.netlify.app/en/auth/register');

    cy.get('#email').type('mochlucam@gmail.com').type('{enter}');
    cy.contains('Email ini sudah terdaftar').should('be.visible')
    
  })

  it('SCN_Register_4', () => {

    cy.visit('https://besty-staging.netlify.app/en/auth/register');

    cy.get('#email').type('test@mail.co').type('{enter}');
    cy.get('button').contains('Yakin').click()
   const chars1 = '1234';
   const chars = chars1.split('');
   cy.get('input[aria-label="Character 1."]').type(chars[0]);
  cy.get('input[aria-label="Character 2."]').type(chars[1]);
  cy.get('input[aria-label="Character 3."]').type(chars[2]);
  cy.get('input[aria-label="Character 4."]').type(chars[3]);
    cy.xpath('/html/body/div/section/main/div/div[1]').should('be.visible')
  })
       
})

