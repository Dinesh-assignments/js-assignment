# js-assignment
````
instructions.txt has the instructions to run the service
guidelines.txt has the guidelines to be followed while solving and submitting the assignment
problem-statement.txt has the problem statements to be solved
````

## Problem 1

### Solution:- 

I have implemented the basics of a local cache to reduce latency time for each query. This can be further improved by using Redis, which would be even better. Currently, I am adding matches corresponding to each tour name on a map. However, We may need to add an eviction policy, especially in cases where the tour count is very high.


## Problem 2

### Solution:-
I have added all required fields in the /sport/tour/match endpoint.

## Problem 3

### Solution:
Created a News Table in the Database with the following field

| Column  | Type | Description |
| ------------- | ------------- |  ------------- |
| id  | int  | Auto-increment Field |
| title  | varchar(50)  | News Title |
| description  | varchar(500)  | News Description |
| matchId  | int  | Match Foreign Key| 
| tourId  | int  | Tour Foreign Key |
| sportId  | int  | Sport Foreign Key |
| recUpdatedAt | Timestamp | Update Timestamp |
| createdAt | Timestamp | Create Timestamp |


Created Following Endpoint:-

1. **Add News**
    - **Endpoint:** `/add/news`
    - **Method:** POST
    - **Curl Example:**
        ```bash
        curl --location --request POST 'http://localhost:3000/add/news' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "title": "Match News",
            "description": "Match News Description",
            "matchId": 1 
        }'
        ```

2. **Get News by Match ID**
    - **Endpoint:** `/match/news?id=x`
    - **Method:** GET
    - **Curl Example:**
        ```bash
        curl --location --request GET 'http://localhost:3000/match/news?id=1'
        ```

3. **Get News by Tour ID**
    - **Endpoint:** `/tour/news?id=x`
    - **Method:** GET
    - **Curl Example:**
        ```bash
        curl --location --request GET 'http://localhost:3000/tour/news?id=1'
        ```

4. **Get News by Sport ID**
    - **Endpoint:** `/sport/news?id=x`
    - **Method:** GET
    - **Curl Example:**
        ```bash
        curl --location --request GET 'http://localhost:3000/sport/news?id=1'
        ```
