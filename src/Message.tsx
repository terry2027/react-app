
//PascalCasing for function names
function Message () {
    //JSX: Javascript XML
    //See babeljs.io/repl for example
    const name = 'Terence';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;