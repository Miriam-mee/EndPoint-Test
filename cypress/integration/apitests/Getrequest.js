/// <reference types="cypress" />

describe('Test APIs', () =>{

it('Get all employee data', () =>{
cy.request({
    method: 'GET',
    url: 'https://dummy.restapiexample.com/api/v1/employees',
}).then((response)=>{
    expect(response.status).to.eq(200)
    expect(response.body.message).contains('Successfully! All records has been fetched.')

})

})


})
