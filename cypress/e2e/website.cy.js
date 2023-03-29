

// For webiste tab visit
it('ambition', function () {
  cy.viewport(1920, 1020)
  cy.visit('https://ambition.guru')
  // visit all top navbar tabs
  cy.get('.hidden > [href="/articles"]').click()
  // not selected subject


  cy.get('.border-transparent').click()
  cy.wait(500)
  cy.get('.brand-button').click()

  // for visit notice tab
  cy.wait(2000)
  cy.get('.hidden > [href="/notices"]').click()
  // switch tab
  cy.get('#headlessui-tabs-tab-22').click()
  cy.wait(500)
  cy.get('#headlessui-tabs-tab-23').click()
  cy.wait(2000)
  cy.get('.hidden > [href="/about-us"]').click()
  cy.wait(2000)
  cy.get('.hidden > [href="/mock-test"]').click()
  cy.get('#headlessui-tabs-tab-28').click()
  cy.wait(1000)
  cy.get('#headlessui-tabs-tab-27').click()
  // view mock exam detail

  cy.get('.space-y-6 > :nth-child(1)').click()
  cy.wait(500)
  cy.get('.space-y-6 > :nth-child(1)').click()
  // for validating  inquiry form 
  cy.get('#name').type("Krishu Pandit")
  cy.wait(100)
  cy.get('#email').type("panditkusum2051@gmail.com")
  cy.get('#mobile').type(9861556640)
  cy.get('#message').type("Why it is necessary to take Ambition Guru mock exam regularly will it be helpful for me to  get desire score on cee entrance and to get scholorship.")
  
  cy.get('.g-recaptcha').click()


})
