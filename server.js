const express = require('express');
const app = express();
app.use(require('cors')());
app.use(express.json());
let donations = [];
app.post('/webhook', (req, res) => {
  console.log("DATA:", req.body);

  const { donator_name, amount_raw, message } = req.body;

  donations.unshift({
    name: donator_name || 'Anonim',
    amount: Number(amount_raw) || 0,
    message: message || ''
  });

  if (donations.length > 20) donations.pop();

  res.json({ ok: true });
});
app.get('/donations',(req,res)=>{
  res.json(donations);
  donations=[];
});
app.listen(process.env.PORT||3000);
