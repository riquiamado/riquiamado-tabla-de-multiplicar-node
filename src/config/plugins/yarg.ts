
import yargs,{options} from 'yargs'
import {hideBin} from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv) )
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Multiplicacion table base'
})
.option('l',{
    alias:'listar',
    type:'boolean',
    default:false,
    describe:'Mostrar tabla de multiplicar'
})
.option('h',{
    alias:'limit',
    type:'number',
    default:10,
    describe:'Limite de la tabla de multiplicar'
})
.option('n',{
    alias:'name',
    type:'string',
    default:'multiplication-table',
    describe:'Nombre del archivo'
})
.option('d',{
    alias:'destination',
    type:'string',
    default:'outputs',
    describe:'Carpeta de destino'
})
.check((argv,options)=>{
    if(argv.b<0) throw 'La base debe ser un numero positivo'
    return true
})
.parseSync()
