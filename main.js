const { app } = require("./configs/basic");
const { sql } = require("./configs/database");
const { getCategories, createCategory } = require("./services/categoryService");

app.get("/categories", async (req, res) => {
    const list = await getCategories();
    res.json(list);
});

app.post("/categories", async (req, res) => {
    const input = req.body;
    const id = await createCategory(input);
    res.status(201).json({ id });
});

app.get("/dbtest", async (req, res) => {
    const result = await sql`select version()`;
     console.log(result);
     res.json({ result });
});
