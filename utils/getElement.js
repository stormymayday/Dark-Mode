const getElement = (selection) => {

    const element = document.querySelector(selection);

    if (element) {
        return element;
    } else {
        throw Error(`No element was selected`);
    }

};

export default getElement;