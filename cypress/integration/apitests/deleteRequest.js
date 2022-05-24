/// <reference types ='cypress' />

describe('Test APIS', () =>{

    it('Delete an employee record', () => {
       
    
        cy.request({
            method : "DELETE",
            url: 'https://dummy.restapiexample.com/api/v1/delete/3941'
        })
        .then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.body.message).contains("Successfully! Record has been deleted")   
             })

             cy.request({
                method: 'GET',
                url: 'https://dummy.restapiexample.com/api/v1/employee/3941'
            }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.message).contains('Successfully! Record has been fetched.')
    })
    
    
    
})
})