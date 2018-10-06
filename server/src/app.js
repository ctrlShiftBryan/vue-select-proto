const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/icd10", (req, res) => {
  let { query } = req;
  let all = [
    { name: "Tuberculosis of spine", code: "A18.01" },
    { name: "Tuberculous arthritis of other joints", code: "A18.02" },
    { name: "Tuberculosis of other bones", code: "A18.03" },
    { name: "Other musculoskeletal tuberculosis", code: "A18.09" },
    {
      name: "Tuberculosis of genitourinary system, unspecified",
      code: "A18.10"
    },
    { name: "Tuberculosis of kidney and ureter", code: "A18.11" },
    { name: "Tuberculosis of bladder", code: "A18.12" },
    { name: "Tuberculosis of other urinary organs", code: "A18.13" },
    { name: "Tuberculosis of prostate", code: "A18.14" },
    { name: "Tuberculosis of other male genital organs", code: "A18.15" },
    { name: "Tuberculosis of cervix", code: "A18.16" },
    {
      name: "Tuberculous female pelvic inflammatory disease",
      code: "A18.17"
    },
    { name: "Tuberculosis of other female genital organs", code: "A18.18" },
    { name: "Tuberculous peripheral lymphadenopathy", code: "A18.2" },
    { name: "Tuberculous peritonitis", code: "A18.31" },
    { name: "Tuberculous enteritis", code: "A18.32" },
    { name: "Retroperitoneal tuberculosis", code: "A18.39" },
    { name: "Tuberculosis of skin and subcutaneous tissue", code: "A18.4" },
    { name: "Tuberculosis of eye, unspecified", code: "A18.50" },
    { name: "Tuberculous episcleritis", code: "A18.51" }
  ];

  let data = all.filter(x => {
    const searchTerm = query.q.toUpperCase();
    return (
      x.code.toUpperCase().includes(searchTerm) ||
      x.name.toUpperCase().includes(searchTerm)
    );
  });

  let resp = {
    q: query.q,
    data
  };
  res.send(resp);
});

app.listen(process.env.PORT || 8082);
