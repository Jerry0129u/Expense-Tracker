const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

async function createCategory (input) {
    const content = fs.readFileSync("data/categories.json", "utf-8");
    const categories= JSON.parse(content);
    const id = uuidv4();
    categories.push({...input, id });
    fs.writeFileSync("data/categories.json", JSON.stringify(categories));
    return id;
}

async function getCategories() {
    const content = fs.readFileSync("data/categories.json", "utf-8");
    const categories = JSON.parse(content);
    return categories;
}

module.export = {
    createCategory,
    getCategories,
};