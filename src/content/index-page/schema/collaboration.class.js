
export class Collaboration {

    constructor(title, descriptionInHTML, image, imageCSSClazz) {
        this.title = title;
        this.description = descriptionInHTML;
        this.image = image;
        this.clazz = imageCSSClazz ? imageCSSClazz : "";
    }

}
