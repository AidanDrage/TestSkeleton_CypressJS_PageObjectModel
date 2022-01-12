import testData from '../fixtures/testdata.json';
import HomePage from '../pages/wiki_homepage_obj'
import ArticlePage from '../pages/wiki_article_obj'

const homePage = new HomePage();
const article = new ArticlePage();

describe('Wikipedia Search Tests', () => {
    it('Takes you to the correct article', () => {
        homePage.searchBox().type(testData.searchTerm);
        homePage.searchButton().click();

        article.articleHeader().should('have.text', testData.searchTerm);
    });
});