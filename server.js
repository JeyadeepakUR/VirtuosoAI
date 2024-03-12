const PORT = 8000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = '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'
app.post('/completions', async (req, res)=>{
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: "how are you?"
                }
            ],
            max_tokens: 150
        })
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    }catch(err){
        console.log(err)
    }
})
app.listen(PORT, () => console.log('Your server is running on PORT ' + PORT));
