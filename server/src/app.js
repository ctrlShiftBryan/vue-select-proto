const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/icd10", (req, res) => {
  let resp = [
    {
      data: [
        {
          name: "Acute gastroenteropathy due to other small round viruses",
          code: "A08.19"
        },
        { name: "Tuberculosis of other male genital organs", code: "A18.15" },
        {
          name: "Tuberculous female pelvic inflammatory disease",
          code: "A18.17"
        },
        { name: "Tuberculosis of other female genital organs", code: "A18.18" },
        { name: "Secondary syphilitic female pelvic disease", code: "A51.42" },
        {
          name: "Gonococcal infection of other male genital organs",
          code: "A54.23"
        },
        {
          name: "Gonococcal female pelvic inflammatory disease",
          code: "A54.24"
        },
        {
          name: "Chlamydial female pelvic inflammatory disease",
          code: "A56.11"
        },
        {
          name: "Herpesviral infection of other male genital organs",
          code: "A60.02"
        },
        { name: "Smallpox", code: "B03" },
        {
          name: "Plasmodium falciparum malaria with cerebral complications",
          code: "B50.0"
        },
        {
          name: "Other severe and complicated Plasmodium falciparum malaria",
          code: "B50.8"
        },
        { name: "Plasmodium falciparum malaria, unspecified", code: "B50.9" },
        {
          name: "Plasmodium vivax malaria with rupture of spleen",
          code: "B51.0"
        },
        {
          name: "Plasmodium vivax malaria with other complications",
          code: "B51.8"
        },
        {
          name: "Plasmodium vivax malaria without complication",
          code: "B51.9"
        },
        { name: "Plasmodium malariae malaria with nephropathy", code: "B52.0" },
        {
          name: "Plasmodium malariae malaria with other complications",
          code: "B52.8"
        },
        {
          name: "Plasmodium malariae malaria without complication",
          code: "B52.9"
        },
        { name: "Plasmodium ovale malaria", code: "B53.0" }
      ]
    }
  ];
  res.send(resp);
});

app.listen(process.env.PORT || 8081);
