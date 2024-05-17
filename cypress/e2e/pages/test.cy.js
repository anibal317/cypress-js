import { convertDateTime } from "../../assets/util";
import LoginPage from "../components/login/loginPage";


describe('Crea la lista de productos en un archivo', () => {
    const loginPage = new LoginPage();


    beforeEach(() => {
        loginPage.navigate();
        loginPage.login(Cypress.env('qauser'), Cypress.env('qapassword'));
    });



    it.skip('should', () => {
        let productList = []

        cy.get('.inventory_item_name').each(($el) => {
            console.log()
            productList.push({
                productName: $el.text(),
                selectorName: $el.text().toLocaleLowerCase().replace(/\s+/g, '-'),
                productDesc: $el.parent().parent().find('div.inventory_item_desc').text(),
                productPrice: $el.parent().parent().siblings().find('.inventory_item_price').text(),
                productImg: $el.parent().parent().parent().parent().find('img').attr('data-test').replace('inventory-', '')
            })
            cy.writeFile('cypress/fixtures/productList.json', productList)
        });


    })

    it.skip('read json', () => {
        //Leo desde el archivo un producto y le hago click en agregar al carrito
        //Reemplazar el [0] por un número random para acceder a cualquier elemento
        cy.fixture('productList').then(function (product) {
            this.product = product
            cy.get(`button[name='add-to-cart-${this.product[3].selectorName}']`).click();
        })

    })


    // probar valor de cookie o vigencia de la misma
    it('cookie', () => {
        // console.log(
        cy.getCookie('session-username').then(el => {
            console.log(el)
            console.log(el.expiry)
            let day = el.expiry
            console.log(new Date(day * 1000).toLocaleString('en-us', { dateStyle: 'short', timeStyle: 'medium' }))
        })
        // .should('have.property', 'value', 'standard_user')
        // .should('have.property', 'expiry', '2024-05-16T19:33:06.000Z')
    })
})