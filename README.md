# TASK-1-HNG

## Description

A public API that returns JSON formatted data.

## Setup Instruction

### Prerequisites
- Node.js (v12.0.0 or later)
- npm (Node Package Manager), or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/Dom-HTG/HNG-task-1.git
```
2. Install the dependencies
```bash
npm install
```
3. Start the application
```bash
npm run start:dev
```
## API Documentation

### Endpoint URL
- **GET** `https://hng-task-1-s006.onrender.com/api/dummy`
### Request Format
- **Method**: GET
- **Headers**:
  - `Content-Type: application/json`
### Response Format
- **Status Code**: 
  - 200 OK: Successful Request
  - 500 : `Error retrieving data`
- **Response Body**:
  ```json
  {
      "email": "dominicdutchboy@gmail.com",
      "current_datetime": "2025-01-29T11:43:50.769Z",
      "github_url": "https://github.com/Dom-HTG/HNG-task-1.git"
  }
  ```
### Usage
To retrieve the JSON data using `curl`:
```bash
curl -X GET https://hng-task-1-s006.onrender.com/api/dummy
```




