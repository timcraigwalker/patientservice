# Patient Service

## Description

This is a TypeScript service connected to a local MongoDB, containing a RESTful API that provides;

- Patient(s) data using NHS number or surname
  - GET /Patient?name.family={:surname}
  - GET /Patient?identifier.system=https://fhir.nhs.uk/Id/nhs-number&identifier.value={:nhs-number}
  
- All observations for a patient ID
  - GET /Patient/{:id}/Observation
 
Additional Patient and Observation entities can be created using;
- POST /Patient
- POST /Observation

## Getting Started

### Dependencies
- Docker

### Running the project
```
docker-compose up -d
```

## Example requests

**GET Patient using NHS number**
```
curl --location --request GET 'localhost:9001/Patient?identifier.value=1111111111&identifier.system=https://fhir.nhs.uk/Id/nhs-numbers'
```

**GET Patient using surname**
```
curl --location --request GET 'localhost:9001/Patient?name.family=Smith'
```

**GET All Observations for a patient ID**
```
curl --location --request GET 'localhost:9001/Patient/1/Observation'
```

**POST Create Patient**
```
curl --location --request POST 'localhost:9001/Patient' \
--header 'Content-Type: application/json' \
--data-raw '{
  "id": "2",
  "identifier": [
    {
      "label": "NHS",
      "system": "https://fhir.nhs.uk/Id/nhs-number",
      "value": "1111111112"
    },
    {
      "label": "EMIS",
      "system": "http://www.e-mis.com/emisopen/MedicalRecord/PatientID",
      "value": "3058"
    }
  ],
  "name": [
    {
      "text": "Miss Eileen Smith",
      "family": "Smith",
      "given": ["Eileen"],
      "prefix": ["Miss"]
    }
  ],
  "telecom": [
    { "system": "phone", "value": "05361052321", "use": "home" },
    { "system": "email", "value": "here@email.com" }
  ],
  "gender": "female",
  "birthDate": "2003-02-16",
  "address": [
    {
      "use": "home",
      "text": "71 St. John'\''s Road, Dover, Moselden Height, West Yorkshire, LS29 7LL",
      "city": "Moselden Height",
      "state": "West Yorkshire",
      "postalCode": "LS29 7LL"
    }
  ]
}'
```

**POST Create observation**
```
curl --location --request POST 'localhost:9001/observation' \
--header 'Content-Type: application/json' \
--data-raw '{
  "resourceType": "Observation",
  "id": "5",
  "code": {
    "coding": [
      {
        "system": "http://read.info/ctv3",
        "code": "X00DR",
        "display": "Stroke of uncertain pathology"
      }
    ],
    "text": "Stroke of uncertain pathology"
  },
  "issued": "2014-03-05T00:00:00+00:00",
  "status": "final",
  "subject": { "reference": "Patient/2" }
}'
```