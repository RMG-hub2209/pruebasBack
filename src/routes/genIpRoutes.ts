import {Router, Request, Response} from "express";

const router = Router();

router.post('/:ip',(req: Request, res: Response, next) => {
    try {
        const ip = req.params.ip;
        console.log(ip);
        const string = ip.toString();
        const splt = string.match(/.{1,3}/g);
        console.log(splt);
        // @ts-ignore
        const join = splt.join('.');
        console.log(join);
        const json = JSON.stringify(join);
        console.log(json);
        res.status(200).send(json);
    } catch (err) {
        next(err);
    }
});

export default router;
