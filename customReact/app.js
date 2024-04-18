//only for understandiong how react js renders elements under the hood

const root = document.querySelector("#root")

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click to visit google"
}


const setElement = (reactElement, root) => {
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children
    element.setAttribute("href", reactElement.props.href)
    element.setAttribute("target", reactElement.props.target)
    root.appendChild(element)
}


setElement(reactElement, root)