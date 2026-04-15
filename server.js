const express = require('express');
const app = express();
app.use(require('cors')());
app.use(express.json());
let donations = [];
app.post('/webhook', (req, res) => {
  const data = req.body.data || req.body;

  donations.unshift({
    name: data.donator_name || 'Anonim',
    amount: Number(data.undefined) || 0,
    message: data.message || ''
  });

  if (donations.length > 20) donations.pop();

  console.log("DONASI MASUK:", data); // debug

  res.json({ ok: true });
});
  if (donations.length > 20) donations.pop();
  console.log("DONASI MASUK:", data); // debug
  res.json({ ok: true });
});
app.get('/donations',(req,res)=>{
  res.json(donations);
  donations=[];
});
app.listen(process.env.PORT||3000);
