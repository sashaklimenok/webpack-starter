export interface IElement {
  [key: string]: string
}


export const createElement = (element: string, styles: IElement, attributes: IElement = {}) => {
  const htmlElement: HTMLElement = document.createElement(element);
  for (const [key, value] of Object.entries(styles)) {
    (htmlElement.style as any)[key] = value;
  }

  for (const [key, value] of Object.entries(attributes)) {
    htmlElement.setAttribute(key, value);
}

  return htmlElement;
}