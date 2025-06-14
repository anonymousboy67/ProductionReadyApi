import { Router } from "express";

const subscriptionRouter=Router();

subscriptionRouter.get('/', (req,res)=>res.send({title:'GET all subscription'}))
subscriptionRouter.get('/:id', (req,res)=>res.send({title:'GET subscription details'}))
subscriptionRouter.post('/', (req,res)=>res.send({title:'CREATE subscription'}))
subscriptionRouter.put('/:id', (req,res)=>res.send({title:'UPDATE subscription'}));
subscriptionRouter.delete('/:id', (req,res)=>res.send({title:'DELETE subscription'}));
subscriptionRouter.get('/',(req,res)=>res.send({title:'GET all subscriptions'}));
subscriptionRouter.get('/', (req,res)=>res.send({title:'GET all subscriptions'}));

export default subscriptionRouter;