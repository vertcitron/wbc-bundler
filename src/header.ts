export default class Header {
  private element: HTMLHeadingElement

  constructor () {
    this.element = document.createElement('h1')
    this.element.textContent = "- WBC Bundler -"
  }

  render (parent: HTMLElement): void {
    parent.appendChild(this.element)
  }
}
