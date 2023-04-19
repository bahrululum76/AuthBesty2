import 'cypress-xpath'
import 'xpath'
import 'cypress-iframe'
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://yopmail.com/')

    
      cy.get('input[id="login"]').type('bmd1hs5yx0md@yopmail.com').type('{enter}');
      cy.wait(2000)
      
      
      
// Pilih elemen iframe dengan command cy.iframe()
cy.iframe('#ifmail').then(($iframe) => {
  // Pilih elemen body di dalam iframe
  const $body = $iframe.contents().find('body')
  // Cari elemen CAPTCHA di dalam iframe
  cy.wrap($body).find('.g-recaptcha').then(($captcha) => {
    // Simulasikan klik pada elemen checkbox CAPTCHA
    $captcha.find('.recaptcha-checkbox-border').click({ force: true })
    // Tunggu hingga elemen CAPTCHA selesai dimuat
    cy.wait(5000)
    // Ambil nilai OTP
    const xpathResult = document.evaluate('/html/body/main/div/div/div/table/tbody/tr/td/div/div/div/div/div/div/table[3]/tbody/tr/td/div/p[2]/text()[2]', $body[0], null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
    const element = xpathResult.snapshotItem(0)
    const text = element.textContent.trim()
    // Simpan nilai OTP menggunakan command cy.wrap()
    cy.wrap(text).as('OTP')
  })
})
      
      
        
      


      // cy.contains('today');  
    
      // cy.xpath('/html/body/main/div/div/div/table/tbody/tr/td/div/div/div/div/div/div/table[3]/tbody/tr/td/div/p[2]')
  })
})