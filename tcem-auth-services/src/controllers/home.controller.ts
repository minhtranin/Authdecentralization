import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '@/interfaces/IControllerBase.interface';
import RestfulApiBase from '@/interfaces/Restful.interface';
class HomeController implements IControllerBase, RestfulApiBase {
    list() {
        throw new Error("Method not implemented.");
    }
    create() {
        throw new Error("Method not implemented.");
    }
    update(id: any) {
        throw new Error("Method not implemented.");
    }
    destroy() {
        throw new Error("Method not implemented.");
    }
    get(id: any) {
        throw new Error("Method not implemented.");
    }
    public path : string = '/'
    public router : express.Router = express.Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get('/', this.index)
    }

    index = (_: Request, res: Response) => {

        const users = [
            {
                id: 1,
                name: 'Ali'
            },
            {
                id: 2,
                name: 'Can'
            },
            {
                id: 3,
                name: 'Ahmet'
            }
        ]

        res.render('home/index', { users })
    }
}

export default HomeController
