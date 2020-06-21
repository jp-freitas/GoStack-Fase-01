import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export default function helloWorld(req: Request, res: Response) {
    const user = createUser({
        email: 'tec.joao.freitas@gmail.com',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJs',
            'React Native',
            { title: 'Javascript', experience: 100 },
        ]
    });

    return res.json({ message: 'Hello World' });
}
