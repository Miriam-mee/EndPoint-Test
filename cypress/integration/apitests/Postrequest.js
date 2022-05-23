/// <reference types ='cypress' />


describe('Test APIs' ,() =>{

    it('Create a new record in database' ,()=>{
        cy.request({

            method: 'POST',
            url: 'https://dummy.restapiexample.com/api/v1/create',
            body:{
                "id": "27",
                "employee_name": "Mimee sundae",
                "employee_salary": "500000",
                "employee_age": "35",
                "profile_image": ""
            }
            

    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.message).contains("Successfully! Record has been added.")
    })

    })
})