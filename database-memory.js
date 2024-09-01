import { randomUUID } from 'node:crypto';
export class DatabaseMemory{
    // metodo privado e utilizando uma estrutura de dados 
    #videos=new Map()
    list(){
        return this.#videos.values()
    }
    create(video){
        const videoId=randomUUID
        this.#videos.set(videoId,video)
    }
    update(id,video){
        this.#videos.set(video)
    }
}