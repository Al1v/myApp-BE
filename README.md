
## Description

Server part of the MyCtr App based on Nest JS, Sequelize and PostgreSQL
Perhaps, using Nest JS and SQL database may seem as overengineering in the context of the task.
Nevertheless, I believe that such approach could better demonstrate my familiarity with commonly used technologies.

## Installation

Generally there are 2 ways to start the project:

A) Needs Docker installed
1
```terminal
docker compose up --build
```
2 wait up to 10 seconds before app seeds initial data to DB - can be traced through log
3. The api is available on port 5000


B) Needs PG installed to setup database
1 Create database "Ctr" under PG user "postgress" with password "postgress"
2 Open ".env" file and change POSTGRES_HOST value from "DB" to "localhost"
3
```terminal
npm install
npm run start
```
4 wait up to 10 seconds before app seeds initial data to DB - can be traced through log
5. The api is available on port 5000

## API details

The api consists of 5 main endpoints, that fullfill the task requirements:
GET: /ctr - shows current counter value
POST: /ctr/inc increments counter by 1
POST: /ctr/dec decrements counter by 1
POST: /ctr/save saves current value to history
GET: /ctr/history shows historical counter values
