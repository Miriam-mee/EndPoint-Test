/// <reference types="cypress" />

describe('Test APIs', () =>{

    it('Get a single employee data', ()=>{
        cy.request({
            method:"GET",
            url: 'https://dummy.restapiexample.com/api/v1/employee/1',
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.data.employee_name).contains('Tiger Nixon')
        })
    })
})