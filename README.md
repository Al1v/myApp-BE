
## Description  
  
Server part of the myApp based on Nest JS, Sequelize and PostgreSQL  
  
## Installation  
  
Needs Docker installed  

```terminal
docker compose up --build
```
The api is available on port 5000  

## API details

The api consists of 5 main endpoints, that fullfill the task requirements:  
POST: /auth/register - allows to register as a user.  
POST: /auth/login - allows to login.  
GET: /users/ - gets details about all registered users. Access limited to users with ADMIN role.  
GET: /users/me - gets information about current user.  
  
Pre-registered credentials:  
email | password  
admin@foo.com | admin  
user@foo.com | user  

The authentication/authorization is implemented using sigle JWT token.  
Logout functionality required by the task is performed on FE side of the App.    
The migration required by task is run automatically on build stage by Docker.
