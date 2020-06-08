interface RestfulApiBase {
    list(): any
    create(): any
    update(id: any): any
    destroy(): any
    get(id: any): any
}
export default RestfulApiBase
