exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;

    /*     if (page.path === `/`) {
            page.matchPath = `/*`;
            createPage(page);
        } 
    */

    if (page.path.match(/^\/vores-dyr/)) {
        page.matchPath = "/vores-dyr/*"
        createPage(page)
    };
}
