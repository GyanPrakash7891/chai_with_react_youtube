function customRender(reactElement,container){

    //  const domELement =document.createElement
    //  (reactElement.type)
    //  domELement.innerHTML = reactElement.childern
    //  domELement.setAttribute('href',reactElement.props.href)
    //  domELement.setAttribute('target',reactElement.props.target)

    //  container.appendChild(domElement)

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML =reactElement.childern
    for(const prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_black'
    },
    childern: 'Click me to visit google'
}

const mainContainer=document.querySelector('#root');

customRender(reactElement,mainContainer)

