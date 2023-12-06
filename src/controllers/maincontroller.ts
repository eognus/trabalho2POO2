import { Request, Response } from 'express';
import path from 'path';

class MainController{

    constructor(){}

    renderMainPage(req: Request, res: Response){
        res.sendFile(path.join(__dirname) + '../views/index.html');
    }

}

export default new MainController();