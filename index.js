const fs = require("fs");
const data = `
id,name,age
1,Johny,45
2,Mary,20
3,Anene,30
4,Kachi,79
`;

fs.writeFile("data.csv", data, "utf-8", (err) => {
    if (err) console.log(err);
    else console.log("Data saved");
  });