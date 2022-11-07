class Proceso{
    constructor(ciclos){
      this.ciclos=ciclos;
      this.sig=null;
      this.ant=null;
    }
  }
  class ColaFIFO{
  	constructor(){
      this.primero=null;
      this.ultimo=null;
    }
    agregar(nuevo){
    	if (this.primero==null){
        this.primero=nuevo;
      }else{
        let temp=this.primero;
        while (temp.sig!=null){
          temp=temp.sig;
        }
        temp.sig=nuevo;
        this.ultimo++;
      }
    }
    actual(){
      return this.primero;
    }
    pasaAlSiguiente(){
      this.primero=this.primero.next;
    }
    extraerActual(){
      let aux=this.primero;
      if (this.primero==null){
        return null;
      }
      this.primero=this.primero.sig;
      return aux;
    }
    size(){
      let long = 0;
      let temp = this.primero;
      while (temp.next!=null){
         long++;
         temp=temp.next;
      }
      return long;
    }
    
  }
  
  let misProcesos=new ColaFIFO();
  let ciclosVacios=0;
  let procesosAtendidos=0;
  for (let i=1; i<=300; i++){
    let probabilidad=Math.floor(Math.random()*100)+1;
    if (probabilidad<=35){
      let ciclos=Math.floor(Math.random()*11)+4;
      let nuevo=new Proceso(ciclos);
      misProcesos.agregar(nuevo);
    }
    if (misProcesos.actual()==null){
      ciclosVacios++;
    }else{
      misProcesos.actual().ciclos--;
      if (misProcesos.actual().ciclos==0){
        misProcesos.extraerActual();
        procesosAtendidos++;
      }
    }
  }
  misProcesos.size();
  let sumaCiclos = 0;
  while (misProcesos.pasaAlSiguiente != null){
    sumaCiclos = sumaCiclos + misProcesos.actual().ciclos;
    misProcesos.pasaAlSiguiente();
  }