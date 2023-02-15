export default class BasePage {

    open (path) {
        return browser.url(`https://www.pecodesoftware.com/` + path)
    }

    async validateFieldWithText (field, tex){
        await expect(field).toHaveText(tex)
    }
}
