---
sidebar_position: 1
---

# answerClientServices.js

```js
const Answers = require('../models/answerSchema');


const createNewAnswer = async(properties)=>{
    try{
        const newAnswers = await new Answers(properties).save();
        return newAnswers;
    }catch(err){
        console.log(`Error al crear nuevas respuestas para el cliente ${err.message}`)
    }
};
const findOneAnswer = async(properties)=>{
    try{
        console.log(`A buscar respuestas del cliente : `, properties)
        const foundAnswers = await Answers.findOne(properties);
        return foundAnswers;
    }catch(err){
        console.log(`Error al buscar respuestas del cliente ${err}`);
        return null;
    }
};


const updateAnswer = async (properties, updateData) => {
    try {
        console.log(`properties: `, properties);
        console.log(`updateData`, updateData);
        const updatedDocument = await Answers.findOneAndUpdate(
            properties, 
            updateData, 
            { new: true, useFindAndModify: false }
        );
        return updatedDocument;
        
    } catch (err) {
        console.log(`Error al actualizar una respuesta: ${err}`);
        return null;
    }
};

const runAggregationAnswerSchema = async(pipeline)=>{
    try{
        const res = await Answers.aggregate(pipeline);
        return res;
    }catch(err){
        console.log(`Error al obtener resultados de la aggregation ${err}`);
        return null;
    }
}



module.exports= {
    findOneAnswer,
    createNewAnswer,
    updateAnswer,
    runAggregationAnswerSchema
}
```

