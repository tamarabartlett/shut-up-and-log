const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/jumps', (req, res) => {
  res.send({jumps:
    [{number: '515', date:'03/31/2018', type: 'night jump', altitude:'12,500',location:'perris'},
    {number: '516', date:'04/01/2018', type: 'freefly', altitude:'12,500',location:'perris'},
    {number: '517', date:'04/01/2018', type: 'belly', altitude:'12,500',location:'perris'},
    {number: '518', date:'04/01/2018', type: 'belly', altitude:'12,500',location:'perris'},
    {number: '519', date:'04/18/2018', type: '4way', altitude:'12,500',location:'mile hi'},
    {number: '520', date:'04/18/2018', type: '4way', altitude:'12,500',location:'mile hi'},
    {number: '521', date:'04/18/2018', type: '4way', altitude:'12,500',location:'mile hi'},
    {number: '522', date:'04/18/2018', type: 'coach', altitude:'12,500',location:'mile hi'},
    {number: '523', date:'04/18/2018', type: 'freefly', altitude:'12,500',location:'mile hi'},
    {number: '524', date:'04/18/2018', type: 'freefly', altitude:'12,500',location:'mile hi'},
    {number: '525', date:'04/27/2018', type: 'belly', altitude:'12,500',location:'sebastian'},
    {number: '526', date:'04/27/2018', type: 'belly', altitude:'12,500',location:'sebastian'},
    {number: '527', date:'04/27/2018', type: 'belly', altitude:'12,500',location:'sebastian'},
    {number: '528', date:'04/28/2018', type: 'wsln', altitude:'12,500',location:'sebastian'},
    {number: '529', date:'04/28/2018', type: 'wsln', altitude:'12,500',location:'sebastian'},
    {number: '530', date:'04/28/2018', type: 'wsln', altitude:'12,500',location:'sebastian'},
    {number: '531', date:'04/28/2018', type: 'wsln', altitude:'12,500',location:'sebastian'},
    {number: '532', date:'04/29/2018', type: 'wsln', altitude:'12,500',location:'sebastian'},
    {number: '533', date:'04/29/2018', type: 'wsln', altitude:'12,500',location:'sebastian'},
    {number: '534', date:'04/29/2018', type: 'wsln', altitude:'12,500',location:'sebastian'},
    {number: '535', date:'04/29/2018', type: 'wsln', altitude:'12,500',location:'sebastian'},
    {number: '536', date:'05/05/2018', type: 'coach', altitude:'12,500',location:'mile hi'},
    {number: '537', date:'05/05/2018', type: 'belly', altitude:'12,500',location:'mile hi'},
    {number: '538', date:'05/05/2018', type: 'coach', altitude:'12,500',location:'mile hi'},
    {number: '539', date:'05/05/2018', type: 'coach', altitude:'12,500',location:'mile hi'},
    {number: '540', date:'05/05/2018', type: 'coach', altitude:'12,500',location:'mile hi'},
    {number: '541', date:'05/06/2018', type: 'hop n pop', altitude:'12,500',location:'mile hi'},
    {number: '542', date:'05/06/2018', type: 'hop n pop', altitude:'12,500',location:'mile hi'},
    {number: '543', date:'05/06/2018', type: 'hop n pop', altitude:'12,500',location:'mile hi'},
    {number: '544', date:'05/06/2018', type: 'hop n pop', altitude:'12,500',location:'mile hi'},
    {number: '545', date:'05/06/2018', type: 'hop n pop', altitude:'12,500',location:'mile hi'},
    {number: '546', date:'06/06/2018', type: 'LO', altitude:'12,500',location:'orange skies'},
  ]});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
