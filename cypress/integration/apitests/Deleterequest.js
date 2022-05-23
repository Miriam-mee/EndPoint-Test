/// <reference types ='cypress' />

describe('Test APIS', () =>{

    it('Delete an employee record', () => {
       
        cy.request({
            method:'GET',
            url: 'https://dummy.restapiexample.com/api/v1/employee/2',
            body: {
                "id": 2,
                "employee_name": "Garrett Winters",
                "employee_salary" : 170750,
                "employee_age":  63,
                "profile_image": ""
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.data.employee_name).contains('Garrett Winters')
        })
        cy.request({
            method : 'DELETE',
            url: 'https://dummy.restapiexample.com/api/v1/delete/2'
        })
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.message).contains("Successfully! Record has been deleted")        })
    })
})