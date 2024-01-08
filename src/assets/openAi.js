
// // import syntax from syntax;
// const { Configuration, OpenAIApi } = require('openai');
// const configuration = new Configuration({ apikey: "sk - 6pQAVW1sNB9VTNRt7zsVT3BlbkFJb4ON7DefGEriu7Xrb9GZ" })
// const openai = new OpenAIApi(configuration);


// export async function sendMsgToOpenAI(message) {
//     const res = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presense_penalty: 0
//     });
//     return res.data.choices[0].text;
// }


// const openai = new OpenAIApi(config)

// const apikey = 'sk - 6pQAVW1sNB9VTNRt7zsVT3BlbkFJb4ON7DefGEriu7Xrb9GZ';

// console.log(apikey);

// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');


// const { configuration, OpenAIApi } = require('openai');


// const config = new Configuration({
//     apikey: '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',

// })

// const openai = new OpenAIApi(config)


// const app = express();

// app.use(bodyParser.json());
// app.use(cors())

// app.post('/chat', async (req, res) => {
//     const { prompt } = req.body;

//     const completion = await openai.createCompletion({
//         model: "text-davinci-003",
//         max_tokens: 512,
//         temperature: 0,
//         prompt: prompt,
//     });
//     res.send(completion.data.choices[0].text);
// })

// const PORT = 8020;

// app.listen(PORT, () => {
//     console.log(`Server running on port : ${PORT}`);
// });





// ------------ >  API fetch data 

// const url = 'https://chatgpt-gpt4-ai-chatbot.p.rapidapi.com/ask';
// const options = {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json',
//         'X-RapidAPI-Key': '3b33dec5e3msh6a58e505dac1f5fp1886c5jsn5f61d726674c',
//         'X-RapidAPI-Host': 'chatgpt-gpt4-ai-chatbot.p.rapidapi.com'
//     },
//     body: {
//         query: 'how are you?'
//     }
// };

// const url = 'https://open-ai21.p.rapidapi.com/conversationgpt35';
// const options = {
//     method: 'POST',
//     headers: {
//         'content-type': 'application/json',
//         'X-RapidAPI-Key': '3b33dec5e3msh6a58e505dac1f5fp1886c5jsn5f61d726674c',
//         'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
//     },
//     body: {
//         messages: [
//             {
//                 role: 'user',
//                 content: 'how are you'
//             }
//         ],
//         web_access: true,
//         system_prompt: '',
//         temperature: 0.9,
//         top_k: 5,
//         top_p: 0.9,
//         max_tokens: 256
//     }
// };


import axios from 'axios';


const options = {
    method: 'POST',
    url: 'https://open-ai21.p.rapidapi.com/conversationgpt35',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3b33dec5e3msh6a58e505dac1f5fp1886c5jsn5f61d726674c',
        'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
    },
    data: {
        messages: [
            {
                role: 'user',
                content: 'hello'
            }
        ],
        web_access: true,
        system_prompt: '',
        temperature: 0.9,
        top_k: 5,
        top_p: 0.9,
        max_tokens: 256
    }
};


export const dataAI = async () => {
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}