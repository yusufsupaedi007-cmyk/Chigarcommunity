const express = require('express');
const app = express();
app.use(require('cors')());
app.use(express.json());
let donations = [];
app.post('/webhook', (req, res) => {
const data = req.body.data || req.body;

const donator_name = data.donator_name;
const amount = Number(data.amount) || 0;
const message = data.message;
  if(donations.length>20)donations.pop();
  res.json({ok:true});
});
app.get('/donations',(req,res)=>{
  res.json(donations);
  donations=[];
});
app.listen(process.env.PORT||3000);
