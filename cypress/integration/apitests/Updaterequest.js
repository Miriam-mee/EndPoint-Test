/// <reference types = 'cypress' />

describe('Test APIs' ,()=> {

it('Update an employee record', ()=>{

    cy.request({
        method:'GET',
        url: 'https://dummy.restapiexample.com/api/v1/employee/21',
        body: {
            "id": " 21",
            "employee_name" : " Jenette Caldwell",
            "employee_salary": 354000,
            "employee_age": 35,
            "profile_image": ""
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.data.employee_name).contains('Jenette Caldwell')
    })

cy.request({
    method: 'PUT',
    url: 'https://dummy.restapiexample.com/api/v1/update/21',
    body:{
        "employee_name": "Miriam Sunday",
        "employee_salary" : "342000",
        "employee_age":  40
    }
    
}).then((response)=>{
    expect(response.status).to.eq(200)
    expect(response.body.message).contains("Successfully! Record has been updated.")
    
   
})
})
})