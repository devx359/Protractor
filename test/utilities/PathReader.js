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
       // console.log("xpath "+xpath);
        var path=xpath.split(":");

        var locatorType=path[0];
        var locatorValue=path[1];
       // console.log("locatorType:"+locatorType+" ::locatorValue: "+locatorValue);
    
			switch (locatorType) {
            case "model":
                ByElement = By.model(locatorValue);
               // console.log(typeof ByElement);
                break;
            case "binding":
                ByElement = By.binding(locatorValue);
                break;  
            case "repeater":
                ByElement = By.repeater(locatorValue);
                break;     
			case "id":
                ByElement = By.id(locatorValue);
             //   console.log(typeof ByElement);
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