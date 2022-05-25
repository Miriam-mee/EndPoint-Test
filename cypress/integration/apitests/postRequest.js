/// <reference types ='cypress' />


describe('Test APIs' ,() =>{

    it('Create a new record in database' ,()=>{
        cy.request({

            method: "POST",
            url: 'https://dummy.restapiexample.com/api/v1/create',
            body:{
                "employee_name": "John Doe",
                "employee_salary": 420000,
                "employee_age": 36
            }
            

    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.message).contains("Successfully! Record has been added.")
    })


    cy.request({
        method: 'GET',
        url: 'https://dummy.restapiexample.com/api/v1/employee/3941'
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.data).to.eq(null)
    
    })

    
    
    })
    


})