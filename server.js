import {fastify} from 'fastify'
import {DatabaseMemory} from './database-memory.js'


const server=fastify()


const database= new DatabaseMemory() 
server.post("/video",()=>{
    database.create({
        title:'video 01',
        description:'descripcion del video',
        duration:180
        
 
    })
    console.log(database.list())

})

server.get('/video',()=>{
    return {message:'Hello, World!'}
})

server.put("/video/:id",()=>{

})

server.delete("/video/:id",()=>{

})


server.listen({port:3333})