import { rest }  from 'msw';

export const handlers = [
    rest.get('https://api.spacexdata.com/v5/launches', (req, res, ctx) => {
        return res(ctx.status(200),ctx.json({
             name: 'test name',
             date_utc: 'test date',
             rocket: 'test rocket', 
             details: 'test details', 
             launchpad: 'test launchpad', 
             success: true, 
             id: 'test id' }));
    })
]