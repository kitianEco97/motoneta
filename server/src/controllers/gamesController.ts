import { Request, Response } from 'express';

import pool from '../database';

class GamesController{

    public async list (req: Request, res: Response) {        
        // res.json({text: 'listando motos'});
        const motorcycles = await pool.query("SELECT * FROM motos");
        res.json(motorcycles);
    } 

    public async getOne(req: Request, res: Response): Promise<any>{
        // res.json({text: 'this is the moto: ' + req.params.id});
        const { id } = req.params;
        const motos = await pool.query("SELECT * FROM motos WHERE id = ?", [id]);
        console.log(motos);
        if(motos.length > 0){
            return res.json(motos[0]);
        }
        res.status(404).json({text: 'The motorcycle does not exist'});
    }

    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO motos SET ?', [req.body]);
        res.json({message: 'Motorcicle saved'});        
    }

    public async update (req: Request, res: Response): Promise<void>{
        // res.json({text: 'updating a moto ' + req.params.id});
        const { id } = req.params;
        await pool.query('UPDATE motos SET ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The motorcycle was updated'});
    }

    public async delete (req: Request, res: Response): Promise<void>{
        // res.json({text: 'deleting a moto ' + req.params.id});
        const { id } = req.params;
        await pool.query('DELETE FROM motos WHERE id = ?', [id]);
        res.json({message: 'The motorcycle was deleted'});
    }    

}

const gamesController = new GamesController();
export default gamesController;
 