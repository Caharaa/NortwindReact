class simpleDict{
    constructor(){
        this.store = new Map()
    }
    set(key,value,ttl=null){
        this.store.set(key,{value,expir: ttl ? Date.now() + ttl : null})
    }
    get(key){
        const result = this.store.get(key);
        return result;
    }
}
module.exports = simpleDict;
