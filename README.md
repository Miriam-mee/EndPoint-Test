# PROJECT-  AUTOMATE ENDPOINTS USING CYPRESS

### DESCRIPTION

Used cypress as a testing tool to automate an assert the following routes;

```
/employee
/employee/{id}
/create
/update/{id}
/delete/{id}
```

**SET UP**
###### Deployment
```
Download Node js and NPM
install Node js
create a folder in a desired location
Use VScode as IDE
```
###### Running Test
```
npx cypress open

```
###### Run Locally
```
npm install
npm install cypress --save-dev
```


####LIMITIATIONS

> Verified each route on Postman locally to ascertain the HTTP response as well as verify the data returned from the response body.
Since these are fake online REST APIs, there are some limitiations.
Example, after creating a POST request, this returned a unique ID, to verify that the data has been created successfuly, i retrieved the data using GET method. however, anytime you run the same request, the ID changes intemitently.

Alos, after performing a delete request, to verify that the data has been successfully deleted, i performed a GET request and this returned data as null, and the response message as > Successfully! Record has been fetched.



#### SCREENSHOTS


<img width="729" alt="Screenshot 2022-05-23 at 20 55 55" src="https://user-images.githubusercontent.com/58312167/170220375-b4804aa5-a138-4df3-89bd-5715bbf952e4.png"><img width="653" alt="Screenshot 2022-05-23 at 21 06 55" src="https://user-images.githubusercontent.com/58312167/170220506-8b8ec849-f93b-4d4b-8f57-3cedb2f68b10.png">
<img width="702" alt="Screenshot 2022-05-23 at 20 58 59" src="https://user-images.githubusercontent.com/58312167/170220662-93799837-c8a2-4989-bb74-0d97072f5bda.png">
<img width="707" alt="Screenshot 2022-05-23 at 20 59 13" src="https://user-images.githubusercontent.com/58312167/170220730-9e62228c-5bcf-4281-a506-f3cfe44184ea.png">
<img width="693" alt="Screenshot 2022-05-23 at 21 09 08" src="https://user-images.githubusercontent.com/58312167/170220785-88a6db65-bf42-4891-92b2-43e84a60d2ee.png">

