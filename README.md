# Project : Hospital API
## To Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd API
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```
## API
- To register doctor make POST request to http://localhost:8000/doctor/register

- To login doctor make POST request to http://localhost:8000/doctor/login

- To register patient make POST request to http://localhost:8000/paitent/register

- To make a report of patient make POST request to http://localhost:8000/paitent/patient.id/create_report in body you need to provide status form these four options ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine","Positive-Admit"]

- To get a all report of particular patient make GET request to http://localhost:8000/paitent/patient.id/all_reports

- To get a report of particular status make GET request to http://localhost:8000/reports/["Negative", "Travelled-Quarantine", "Symptoms-Quarantine","Positive-Admit"]
 provide status form these four options.

## Folder Structure

```bash
API            
├───config 
│   ├───mongoose.js
│   └───passport-jwt.js
│         
├───controllers
│    ├───doctor.js
│    ├───patient.js
│    └───report.js
│
├───models
│   ├───doctor.js
│   ├───patient.js
│   └───report.js
│  
├───Routes
│   ├───doctor.js
│   ├───index.js
│   ├───patient.js
│   └───report.js
│
├───.gitignore
├───index.js
├───package-lock.json
├───package.json
└───README.md

```