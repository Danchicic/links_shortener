This is url shortener service with frontend and backend

#### Frontend

React + react router

Description:<br>
Frontend has two pages: <br>
/ - for links creating <br>
/link/:id - for redirecting to another page

##### Backend

Python + redis + fastapi<br>
All backend are async, there are two endpoints, like in frontend:<br>
GET: /links/{id} - to get long link, using short link <br>
POST: /links - to get short link, using user link<br>
<br>
Short links creates by uuid, and storing in redis with 24 hours TTL
