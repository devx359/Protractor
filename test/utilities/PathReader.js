var PropertiesReader = require('properties-reader');
class PathReader {
    
    constructor(){
        this.properties = PropertiesReader('test/UI/propertyFiles/paths.properties');
       }

    getLocator(propertyFileKey){
        var xpath=this.properties.get(propertyFileKey);
        return xpath;
    }

    getByElement(propertyKey){
        let ByElement;

        var xpath=this.getLocator(propertyKey);
        var path=xpath.split(":");
        console.log(typeof path);
        var locatorType=path[0];
        var locatorValue=path[1];
        console.log("locatorType:"+locatorType+" ::locatorValue: "+locatorValue);

        
			switch (locatorType) {
            case "model":
                ByElement = By.model(locatorValue);
                break;
            case "binding":
                ByElement = By.binding(locatorValue);
                break;  
            case "repeater":
                ByElement = By.repeater(locatorValue);
                break;     
			case "id":
				ByElement = By.id(locatorValue);
				break;
			case "xpath":
				ByElement = By.xpath(locatorValue);
				break;
			case "name":
				ByElement = By.name(locatorValue);
				break;
			case "css":
				ByElement = By.cssSelector(locatorValue);
				break;
			case "linktext":
				ByElement = By.linkText(locatorValue);
				break;
			case "tag":
				ByElement = By.className(locatorValue);
				break;
			case "class":
				ByElement = By.className(locatorValue);
				break;

			}
		return ByElement;
    }



}

module.exports=PathReader;