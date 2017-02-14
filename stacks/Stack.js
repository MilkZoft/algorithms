function Stack() {
    let items = [];

    this.push = (element) => {
        console.log('> Adding new element: ', element);
        items.push(element);
    };

    this.pop = () => {
        if (this.hasElements()) {
            const removedElement = items.pop();

            console.log('> Removing last element (pop): ', removedElement);

            return removedElement;
        } else {
            console.log('> The stack is empty there is not more elements to remove');
        }
    };

    this.last = () => {
        const lastElement = items[items.length - 1];

        console.log('> Getting last element: ', lastElement);

        return lastElement;
    };

    this.hasElements = () => {
        const elements = items.length;

        console.log(`> ${elements > 0 ? 'The Stack has elements' : 'The Stack is empty'}`);

        return elements > 0;
    };

    this.size = () => {
        const size = items.length;

        console.log('> The stack size is: ', size);
        
        return size;
    };

    this.clear = () => {
        console.log('> Clearing the stack');
        items = [];
    };

    this.print = () => {
        console.log(`> Current Stack: [${items.toString()}]`);
    };
}