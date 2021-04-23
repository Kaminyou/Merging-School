describe('Hackathon 2 Test', () => {
    // checkpoint 1
    it('#1 [Easy] Show the 16 grids according to the board matrix with corresponding id grid-i-j with a child named value-i-j (5%)', () => {
        cy.visit('/')
        cy.get('#grid-3-0').children().eq(0).should('have.id', 'value-3-0')
        cy.get('#grid-3-1').children().eq(0).should('have.id', 'value-3-1')
        cy.get('#grid-1-1').children().eq(0).should('have.id', 'value-1-1')
        cy.get('#grid-0-3').children().eq(0).should('have.id', 'value-0-3')
    })
  
    // checkpoint 2
    it('#2 [Easy] Show the grids with corresponding background color (5%)', () => {
        cy.visit('/')
        cy.get('#grid-3-0').should('have.css', 'background-color', 'rgb(248, 243, 232)')
        cy.get('#grid-3-1').should('have.css', 'background-color', 'rgb(248, 243, 232)')
        cy.get('#goodend-btn').click()
        cy.get('#grid-3-0').should('have.css', 'background-color', 'rgb(31, 164, 226)')
        cy.get('#grid-3-1').should('have.css', 'background-color', 'rgb(54, 174, 230)')
        cy.get('#grid-3-2').should('have.css', 'background-color', 'rgb(75, 182, 231)')
        cy.get('#grid-3-3').should('have.css', 'background-color', 'rgb(97, 192, 237)')

    })

    // checkpoint 3
    it('#3 [Easy] Mapping the numeric value to the corresponding school name (5%)', () => {
        cy.visit('/')
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#value-2-1').should('have.text', '')
        cy.get('#value-1-3').should('have.text', '')
        cy.get('#goodend-btn').click()
        cy.get('#value-3-0').should('have.text', 'Stanford')
        cy.get('#value-3-1').should('have.text', 'Cambridge')
        cy.get('#value-2-1').should('have.text', 'UCB')
        cy.get('#value-1-3').should('have.text', 'UCSD')
        
    })

    // checkpoint 4
    it('#4 [Easy] Enable moving in right direction and step changing with keyboard (15%)', () => {
        cy.visit('/')
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#general-step-value').should('have.text', '0')
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('#general-step-value').should('have.text', '1')
        cy.get('#value-3-3').should('have.text', 'NYMU')
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('#general-step-value').should('have.text', '2')
        cy.get('#value-3-3').should('have.text', 'NYMU')
        cy.get('#value-3-2').should('have.text', 'NCTU')
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('#general-step-value').should('have.text', '4')
        cy.get('#value-2-3').should('have.text', 'NYMU')
        cy.get('#value-3-3').should('have.text', 'NYMU')
        cy.get('#value-0-3').should('have.text', 'NCTU')
        cy.get('#value-3-2').should('have.text', 'NCTU')
    })

    // checkpoint 5
    it('#5 [Easy] Enable QS ranking update (5%)', () => {
        cy.visit('/')
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#general-qs-ranking-value').should('have.text', '32768')
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('#general-qs-ranking-value').should('have.text', '32767')
    })

    // checkpoint 6
    it('#6 [Easy] Enable the New Game btn (10%)', () => {
        cy.visit('/')
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#general-qs-ranking-value').should('have.text', '32768')
        cy.get('#general-step-value').should('have.text', '0')
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('#general-step-value').should('have.text', '1')
        cy.get('#reset-button').click()
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#general-qs-ranking-value').should('have.text', '32768')
        cy.get('#general-step-value').should('have.text', '0')


    })

    // checkpoint 7
    it('#7 [Easy] Enable recording of best QS ranking (5%)', () => {
        cy.visit('/')
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#best-qs-ranking-value').should('have.text', '32768')
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('#best-qs-ranking-value').should('have.text', '32767')
        cy.get('#reset-button').click()
        cy.get('#best-qs-ranking-value').should('have.text', '32767')
    })

    // checkpoint 8
    it('#8 [Medium][Public] Enabling moving in all direction and record correctly (10%)', () => {
        //left
        cy.visit('/')
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#best-qs-ranking-value').should('have.text', '32768')
        cy.get('#general-step-value').should('have.text', '0')
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('#value-3-0').should('have.text', 'NYMU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#best-qs-ranking-value').should('have.text', '32767')
        cy.get('#general-step-value').should('have.text', '1')

        //up
        cy.visit('/')
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#best-qs-ranking-value').should('have.text', '32768')
        cy.get('#general-step-value').should('have.text', '0')
        cy.get('body').trigger('keydown', {keyCode: 38, which: 38})
        cy.get('#value-0-0').should('have.text', 'NCTU')
        cy.get('#value-0-1').should('have.text', 'NCTU')
        cy.get('#value-1-2').should('have.text', 'NCTU')
        cy.get('#best-qs-ranking-value').should('have.text', '32768')
        cy.get('#general-step-value').should('have.text', '1')

        //down -> would not work
        cy.visit('/')
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#best-qs-ranking-value').should('have.text', '32768')
        cy.get('#general-step-value').should('have.text', '0')
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#best-qs-ranking-value').should('have.text', '32768')
        cy.get('#general-step-value').should('have.text', '0')

        //up and down and left and right
        cy.visit('/')
        cy.get('body').trigger('keydown', {keyCode: 38, which: 38})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('#value-0-3').should('have.text', 'NCTU')
        cy.get('#value-2-3').should('have.text', 'NYMU')
        cy.get('#value-3-2').should('have.text', 'NYMU')
        cy.get('#value-3-3').should('have.text', 'NCTU')
        cy.get('#best-qs-ranking-value').should('have.text', '32766')
        cy.get('#general-step-value').should('have.text', '4')

    })

    // checkpoint 8 private
    it('#8 [Medium][Private] Enabling moving in all direction and record correctly (10%)', () => {    
        //private
        //up down up down up down right right
        cy.visit('/')
        cy.get('body').trigger('keydown', {keyCode: 38, which: 38})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 38, which: 38})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 38, which: 38})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('#value-0-3').should('have.text', 'NCTU')
        cy.get('#value-1-3').should('have.text', 'NCTU')
        cy.get('#value-2-3').should('have.text', 'NYMU')
        cy.get('#value-3-2').should('have.text', 'NCTU')
        cy.get('#value-3-3').should('have.text', 'NTU')
        cy.get('#value-3-2').should('have.text', 'NCTU')
        cy.get('#best-qs-ranking-value').should('have.text', '32764')
        cy.get('#general-step-value').should('have.text', '8')

        //private
        //left up pair *9
        cy.visit('/')
        for (let i=0;i<9;i++){
            cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
            cy.get('body').trigger('keydown', {keyCode: 38, which: 38})
        }

        cy.get('#value-0-0').should('have.text', 'UCSD')
        cy.get('#best-qs-ranking-value').should('have.text', '32756')
        cy.get('#general-qs-ranking-value').should('have.text', '32756')
        cy.get('#general-step-value').should('have.text', '16')

        //private
        // right up pair *28
        cy.visit('/')
        for (let i=0;i<28;i++){
            cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
            cy.get('body').trigger('keydown', {keyCode: 38, which: 38})
        }
        cy.get('#value-0-3').should('have.text', 'UBC')
        cy.get('#best-qs-ranking-value').should('have.text', '32726')
        cy.get('#general-qs-ranking-value').should('have.text', '32726')
        cy.get('#general-step-value').should('have.text', '52')


        // private
        // left left up up right right down down left left up up right right down down left left up up right right down down
        cy.visit('/')
        for (let i=0;i<3;i++){
            cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
            cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
            cy.get('body').trigger('keydown', {keyCode: 38, which: 38})
            cy.get('body').trigger('keydown', {keyCode: 38, which: 38})
            cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
            cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
            cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
            cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        }
        
        cy.get('#value-0-0').should('have.text', '')
        cy.get('#value-0-1').should('have.text', 'NCTU')
        cy.get('#value-2-3').should('have.text', 'UBC')
        cy.get('#value-3-3').should('have.text', 'NYMU')
        cy.get('#value-3-0').should('have.text', 'NCTU')

        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('#value-3-3').should('have.text', 'NTU')
        cy.get('#best-qs-ranking-value').should('have.text', '32749')
        cy.get('#general-qs-ranking-value').should('have.text', '32749')
        cy.get('#general-step-value').should('have.text', '22')

        cy.get('#reset-button').click()
        cy.get('#general-step-value').should('have.text', '0')
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 38, which: 38})
        cy.get('body').trigger('keydown', {keyCode: 38, which: 38})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})

        cy.get('#value-1-0').should('have.text', 'NTU')
        cy.get('#best-qs-ranking-value').should('have.text', '32749')
        cy.get('#general-qs-ranking-value').should('have.text', '32764')
        cy.get('#general-step-value').should('have.text', '7')

    })

    // checkpoint 9
    it('#9 [Medium][Public] Loss game detection (5%)', () => {
        cy.visit('/')
        cy.get('#game-over-info').should('have.css', 'opacity', '0')
        cy.get('#board-full').should('have.css', 'opacity', '1')
        cy.get('#badend-btn').click()
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('#game-over-info').should('have.css', 'opacity', '1')
        cy.get('#board-full').should('have.css', 'opacity', '0.15')
        cy.get('#game-over-text').should('have.text', 'No funding this year QAO')

        cy.get('#game-over-button').click()
        cy.get('#game-over-info').should('have.css', 'opacity', '0')
        cy.get('#board-full').should('have.css', 'opacity', '1')
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#general-qs-ranking-value').should('have.text', '32768')
        cy.get('#general-step-value').should('have.text', '0')
    })

    // checkpoint 9 private
    it('#9 [Medium][Private] Loss game detection (5%)', () => {
        //private
        cy.visit('/')
        cy.get('#game-over-info').should('have.css', 'opacity', '0')
        cy.get('#board-full').should('have.css', 'opacity', '1')
        cy.get('#goodend-btn').click()
        for (let i=0;i<10;i++){
            cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        }
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('#game-over-info').should('have.css', 'opacity', '1')
        cy.get('#board-full').should('have.css', 'opacity', '0.15')
        cy.get('#game-over-text').should('have.text', 'No funding this year QAO')

        cy.get('#game-over-button').click()
        cy.get('#game-over-info').should('have.css', 'opacity', '0')
        cy.get('#board-full').should('have.css', 'opacity', '1')
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#general-qs-ranking-value').should('have.text', '32768')
        cy.get('#general-step-value').should('have.text', '0')
        
    })

    // checkpoint 10
    it('#10 [Medium][Public] Win game detection (2.5%)', () => {
        cy.visit('/')
        cy.get('#game-over-info').should('have.css', 'opacity', '0')
        cy.get('#board-full').should('have.css', 'opacity', '1')

        cy.get('#goodend-btn').click()
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})

        cy.get('#value-3-0').should('have.text', 'MIT')
        cy.get('#game-over-info').should('have.css', 'opacity', '1')
        cy.get('#board-full').should('have.css', 'opacity', '0.15')
        cy.get('#game-over-text').should('have.text', 'You should study a PhD!')

        cy.get('#game-over-button').click()
        cy.get('#game-over-info').should('have.css', 'opacity', '0')
        cy.get('#board-full').should('have.css', 'opacity', '1')
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#general-qs-ranking-value').should('have.text', '32768')
        cy.get('#general-step-value').should('have.text', '0')
    })

    // checkpoint 10 private
    it('#10 [Medium][Private] Win game detection (2.5%)', () => {
        //private
        cy.visit('/')
        cy.get('#game-over-info').should('have.css', 'opacity', '0')
        cy.get('#board-full').should('have.css', 'opacity', '1')

        cy.get('#goodend-btn').click()
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})

        cy.get('#value-3-0').should('have.text', 'MIT')
        cy.get('#game-over-info').should('have.css', 'opacity', '1')
        cy.get('#board-full').should('have.css', 'opacity', '0.15')
        cy.get('#game-over-text').should('have.text', 'You should study a PhD!')

        cy.get('#game-over-button').click()
        cy.get('#game-over-info').should('have.css', 'opacity', '0')
        cy.get('#board-full').should('have.css', 'opacity', '1')
        cy.get('#value-3-0').should('have.text', 'NCTU')
        cy.get('#value-3-1').should('have.text', 'NCTU')
        cy.get('#general-qs-ranking-value').should('have.text', '32768')
        cy.get('#general-step-value').should('have.text', '0')

    })


    // checkpoint 11
    it('#11 [Hard][Public] When player win or lost the game, please gradually show the message (0.5%)', () => {
        cy.visit('/')
        cy.get('#game-over-info').should('have.css', 'opacity', '0')
        cy.get('#game-over-info').should('not.have.class', 'end-fade-in')
        cy.get('#board-full').should('have.css', 'opacity', '1')
        cy.get('#goodend-btn').click()
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        
        cy.get('#game-over-info').should('have.class', 'end-fade-in')
        cy.get('#value-3-0').should('have.text', 'MIT')
        cy.get('#game-over-info').should('have.css', 'opacity', '1')
        cy.get('#board-full').should('have.css', 'opacity', '0.15')

        cy.visit('/')
        cy.get('#game-over-info').should('have.css', 'opacity', '0')
        cy.get('#game-over-info').should('not.have.class', 'end-fade-in')
        cy.get('#board-full').should('have.css', 'opacity', '1')
        cy.get('#badend-btn').click()
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('#game-over-info').should('have.class', 'end-fade-in')
        cy.get('#game-over-info').should('have.css', 'opacity', '1')
        cy.get('#board-full').should('have.css', 'opacity', '0.15')

    })

    // checkpoint 11 private
    it('#11 [Hard][Private] When player win or lost the game, please gradually show the message (0.5%)', () => {
        //private
        cy.visit('/')
        cy.get('#game-over-info').should('have.css', 'opacity', '0')
        cy.get('#game-over-info').should('not.have.class', 'end-fade-in')
        cy.get('#board-full').should('have.css', 'opacity', '1')
        cy.get('#goodend-btn').click()
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        
        cy.get('#game-over-info').should('have.class', 'end-fade-in')
        cy.get('#value-3-0').should('have.text', 'MIT')
        cy.get('#game-over-info').should('have.css', 'opacity', '1')
        cy.get('#board-full').should('have.css', 'opacity', '0.15')

        cy.visit('/')
        cy.get('#game-over-info').should('have.css', 'opacity', '0')
        cy.get('#game-over-info').should('not.have.class', 'end-fade-in')
        cy.get('#board-full').should('have.css', 'opacity', '1')
        cy.get('#goodend-btn').click()
        for (let i=0;i<10;i++){
            cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        }
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('#game-over-info').should('have.class', 'end-fade-in')
        cy.get('#game-over-info').should('have.css', 'opacity', '1')
        cy.get('#board-full').should('have.css', 'opacity', '0.15')

        
    })

    // checkpoint 12
    it('#12 [Hard][Public] If one grid is firstly generated, make a fade-in animation for it (7%)', () => {
        cy.visit('/')
        cy.get('#grid-3-0').should('have.class', 'school-fade-in')
        cy.get('#grid-3-1').should('have.class', 'school-fade-in')
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('#grid-2-1').should('have.class', 'school-fade-in')
        cy.get('#grid-0-3').should('not.have.class', 'school-fade-in')
        cy.get('#grid-0-0').should('not.have.class', 'school-fade-in')

    })

    // checkpoint 12 private
    it('#12 [Hard][Private] If one grid is firstly generated, make a fade-in animation for it (7%)', () => {

        //private
        cy.visit('/')
        cy.get('#grid-3-0').should('have.class', 'school-fade-in')
        cy.get('#grid-3-1').should('have.class', 'school-fade-in')
        cy.get('body').trigger('keydown', {keyCode: 37, which: 37})
        cy.get('#grid-3-0').should('not.have.class', 'school-fade-in')
        cy.get('#grid-3-1').should('have.class', 'school-fade-in')
        cy.get('body').trigger('keydown', {keyCode: 38, which: 38})
        cy.get('#grid-0-0').should('not.have.class', 'school-fade-in')
        cy.get('#grid-2-3').should('have.class', 'school-fade-in')
        cy.get('body').trigger('keydown', {keyCode: 39, which: 39})
        cy.get('#grid-0-3').should('not.have.class', 'school-fade-in')
        cy.get('#grid-2-2').should('have.class', 'school-fade-in')
        cy.get('body').trigger('keydown', {keyCode: 40, which: 40})
        cy.get('#grid-3-3').should('not.have.class', 'school-fade-in')
        cy.get('#grid-0-3').should('have.class', 'school-fade-in')
    })
})