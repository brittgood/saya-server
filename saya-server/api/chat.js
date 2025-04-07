// api/chat.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { messages, model, max_tokens } = req.body;

        // Call OpenAI API here or whatever logic you want

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: model || 'gpt-3.5-turbo',
                messages: messages,
                max_tokens: max_tokens || 200
            })
        });

        const data = await response.json();
        res.status(200).json(data);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
