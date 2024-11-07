import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const question = [
    {
        type: "input",
        name: "url",
        message: "Type your url: ",
    },
];
inquirer.prompt(question).then((answer) => {
    const url = answer.url;
    var qr_code = qr.image(url);
    qr_code.pipe(fs.createWriteStream("qr_image.png"));

    fs.writeFile("url.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    });
})


