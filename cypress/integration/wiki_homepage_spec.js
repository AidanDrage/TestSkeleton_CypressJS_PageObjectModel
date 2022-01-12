import testData from '../fixtures/testdata.json'
import HomePage from '../pages/wiki_homepage_obj'

const homePage = new HomePage();

describe('Wikipedia Homepage Tests', () => {
    it('Displays Correctly', () => {    
        homePage.wikipediaHeader().should('be.visible');
    });

    testData.languages.forEach(language => {
        it(language + ' is listed as an avalible language', () => {
            homePage.langunageLinks().contains('strong', language);
        });
    });
});

