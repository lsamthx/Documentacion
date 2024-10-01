---
sidebar_position: 2
---

# crmServices.js

```js
const CRM = require('../models/crm');

const findOneCRM = async(queryObj)=>{
    try{
        const crmFound = await CRM.findOne(queryObj)
        return crmFound;
    }catch(err){
        console.log(`Error al buscar CRM ${err}`);
        return null;

    }
};

const findListCRM = async(queryObj)=>{
    try{
        const crmFound = await CRM.find(queryObj);
        return crmFound;
    }catch(err){
        console.log(`Error al buscar CRM ${err}`);
        return null;

    }
};

const createNewCRM = async(properties)=>{
    try{
        const newCRM = await new CRM(properties);
        const newCRMSaved = await newCRM.save();
        return newCRMSaved;
    }catch(err){
        console.log(`Error al crear nuevo CRM ${err}`)
        return null;
    }
};

//gus const
const findCRM = async (parameters) => {
    try {
      const crms = await CRM.find(parameters);
      return crms;
    } catch (error) {
      console.error('Error al buscar CRMs: ' + error);
      return null;
    }
  }
  //updateOne

  const UpdateOneCrm = async (properties, updateData) => {
    try {
        const result = await CRM.updateOne(properties, { $set: updateData });
        return result;
    }catch(err){
        console.log("No se pudo actualizar: ",err);
        return null;
    }
  }


module.exports = {
    findOneCRM,
    findListCRM,
    createNewCRM,
    findCRM,
    UpdateOneCrm
}
```