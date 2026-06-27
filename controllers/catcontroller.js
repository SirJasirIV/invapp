const pool = require("../db/pool");

async function getCategoryList(req, res) {
    try {
    const { rows } = await pool.query("SELECT * FROM categories");
    res.render("catlist", { categories: rows });
    
    } catch (err) {
        console.error(err);
    };    
};
async function categoryDetailGet(req, res) {
    const { slug } = req.params;

    const { rows } = await pool.query(
        "SELECT * FROM categories WHERE slug = $1",
        [slug]
    );

    res.send(rows[0].name);
}
module.exports = { getCategoryList, categoryDetailGet };