import { yarg } from './config/plugins/yarg';
import { ServerApp } from './presentacion/server-app';

(async()=>{
    await main()
})()

 async function main(){
    const {b:base, h:limit, l:showTable,n:fileName,d:fileDestination}=yarg
  ServerApp.run({base,limit,showTable,fileName,fileDestination})
}
