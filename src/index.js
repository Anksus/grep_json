#! /usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const fs = require("fs");
const argv = yargs(hideBin(process.argv)).argv;

const pattern = argv._[0];
const fileName = argv._[1];
const param1 = argv._[2];

const logic = (props) => {
  // to search for key
  if (param1 == "-k") {
    console.log(props);
    const filterKeys = props.filter((item) => {
      const obj = Object.keys(item);
      console.log(item, obj);
      return obj.join("").indexOf(pattern) !== -1;
    });

    console.log(filterKeys);
  }
  // to search for values
  else if (param1 == "-v") {
    const filterValues = props.filter((item) => {
      const obj = Object.values(item);
      return obj.join("").indexOf(pattern) !== -1;
    });

    console.log(filterValues);
  }
  // case insensitive
  else if (param1 == "-i") {
    const filterValues = json_sample_log.filter((item) => {
      const obj = Object.values(item).concat(Object.keys(item));
      const lowercased = obj.map((name) => name.toLowerCase());
      console.log(obj);
      return lowercased.join("").indexOf(param1Value.toLowerCase()) != -1;
    });
    console.log(filterValues);
  }
};

const val = fs.readFileSync(fileName, "utf-8");

const main = () => {
  logic(val);
};

main();
