function handler(req, res){
    if(req.method === 'POST'){
        const {email, name, message} = req.body
        if(!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === ''){
            res.status(422).json({message: 'Invalid Data!'});
            return;
        }

        // Stored in database
        const newData ={
            email, name, message
        }
        console.log(newData);
        res.status(201).json({message: 'Data successfully Added.', data: newData});
    }
}
export default handler;