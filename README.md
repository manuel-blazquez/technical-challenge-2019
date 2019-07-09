DESCRIPTION

A dashboard has been developed so that the user can control the status of their account transactions.

TECHNICAL RESUME

For this project we have used for the backend: Node.js and express framework, all secured with helmet. In the frontend we have used Angular 7, in order to have access to the UI news that this version offers in the case of continuing to develop soon.

FUNCTIONAL DESCRIPTION

-The client consumes the facilitated transactions endpoint. -It is able to filter by actions and currency.

TO GET THE CONTAINER

docker push manulill0/technical-challenge

TO RUN TEST

npm run test

TO RUN PROJECT

docker run -p 3000:3000 technical-challenge

TO ACCESS THE DASHBOARD

ADDITIONAL NOTES

You could change the way in which information is managed in the backend in case you need better performance. The filters in the remote endpoint could not be accessed, so the results were filtered in the backend.
Having more data we could have implemented graphs, a login system, etc.