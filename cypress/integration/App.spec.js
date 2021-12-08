describe('App', () => {
  it('crashes when react-pdf is reloaded too many times', () => {
    // This crashes after about the 30th time on my computer
    for (let i = 0; i < 2000; i++){
      cy.visit('localhost:3000/pdf')
      cy.visit('localhost:3000/non-pdf')
    }
  })
})
