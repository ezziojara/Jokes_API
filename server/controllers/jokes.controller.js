const Jokes = require('../models/jokes.model');

module.exports.getAllJokes = async (req, res) => {
    try{
        
        const jokesList = await Jokes.find();
        return res.json({ jokesList });
    }catch(err){
        return res.status(500).json({error: err});
    }
};

module.exports.getOneJoke = async (req, res) => {
    try{
        const { id } = req.params;
        const joke = await Jokes.findById(id);
        return res.json({ joke });

    }catch(err){
        return res.status(500).json({error: err});
    }
}

module.exports.createJoke = async (req, res) => {
    try{
        
        const { body } = req;
        const newJoke = await Jokes.create(body)
        
        return res.json({ newJoke })

    }catch(err){
        return res.status(500).json({error: err});
    }
}

module.exports.UpdateJoke = async (req, res) => {
    try{
        const { id } = req.params;
        const updateJoke =  await Jokes.findByIdAndUpdate({_id: id},req.body,{new: true});
        return res.json({msg: 'Se ha actualizado correctamente', updateJoke});

    }catch(err){
        return res.status(500).json({error: err});
    }
}

module.exports.deleteJoke = async (req, res) => {
    try{
        const { id } = req.params;
        const deleteJoke =  await Jokes.deleteOne({_id: id});
        return res.json({msg: 'Se ha borrado joke exitosamente', joke: deleteJoke});
    }catch(err){
        return res.status(500).json({error: err});
    }
}