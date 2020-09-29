exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions;

    /*     if (page.path === `/`) {
            page.matchPath = `/*`;
            createPage(page);
        } 
    */

    if (page.path.match(/^\/app/)) {
        page.matchPath = "/app/*"
        createPage(page)
    };
}
