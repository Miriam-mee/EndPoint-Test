/// <reference types="cypress" />

describe('Test APIs' ,()=> {

it('Update an employee record', ()=>{

cy.request({
    method: "PUT",
    url: 'https://dummy.restapiexample.com/api/v1/update/21',
    body:{
        "employee_name": "Sunny Doe"
    }
    
}).then((response)=>{
    expect(response.status).to.eq(200)
    expect(response.body.message).contains("Successfully! Record has been updated.")
    
   
})

cy.request({
    method:'GET',
    url: 'https://dummy.restapiexample.com/api/v1/employee/3941',
    
        

}).then((response)=>{
    expect(response.status).to.eq(200)
    expect(response.body.message).contains('Successfully! Record has been fetched.')
})


})
})