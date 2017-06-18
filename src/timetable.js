'use stric'

function TimeTable(teste, daysOfWeek, aulaHorarios) {

  //setando os dias da semana
  this.daysOfWeek = daysOfWeek;
  this.horarios   = aulaHorarios;
  this.dspList = [];
  this.minhasDisciplinas = [];
  this.teste;
  this.isF = true;  


  //construtor do App
  TimeTable.prototype.init = () => {
      this.addFromList([
                {
                 "horario":"c48",
                 "turma":"MAT254",
                 "periodo":"5/2016",
                 "sigla":"-",
                 "disciplina": "'Etica'",
                 "professor":"Lucas Lattari",
                 "color": ""
               }
               ]);
      this.createTable();
  }
 

var MyArray = (callback) => { 
    var arr = [];
    arr.push = function() {
        console.log("I'M PUSHING>", arguments);

        Array.prototype.push.apply(this, arguments);
        if (typeof callback === "function") {
            // Call it, since we have confirmed it is callable​
            //this callback will call an update method to repaint the DOM
            callback();
        }
    }
    return arr;
};

TimeTable.prototype.callback = () => {
    console.log('sou eu callback');
   
        console.log('>>arr: ', this.minhasDisciplinas);

    
}

TimeTable.prototype.addFromList = (my_object) => {
      //incializa o array que receberá as disciplina
      this.minhasDisciplinas = new MyArray(this.callback);
      
      //for temporário para adicionar várias disciplinas
      for ( let x in my_object){
          console.log('push: ', my_object[x]);
          my_object[x].color = this.getRandomColor();
          this.minhasDisciplinas.push(my_object[x]);
      }

    this.dspList = this.dspList.concat(this.minhasDisciplinas);
    //console.log('arrpushed: ', this.dspList);
};

  TimeTable.prototype.createTable = () => {

    //criando tablela  
    let tabela = document.createElement("table");
    tabela.setAttribute("id", "myTable");
    tabela.className = 'time-table';
    tabela.setAttribute('border','0');
    tabela.setAttribute('cellpadding' ,'0');
    tabela.setAttribute('cellspacing','0');
    document.getElementById('wrapper').appendChild(tabela);

    //criando linhas
    for (var j=0; j < this.horarios.length+1; j++){
            let line = document.createElement("tr");
            line.setAttribute("id", "myTr" + j);
            line.className = 'days';
            document.getElementById("myTable").appendChild(line);
    }
    //percorrer os dias da semana e adiconar à primeira linha, head of the table
    for( var d in this.daysOfWeek){
        var th = document.createElement("th");
        var cell = document.createTextNode(this.daysOfWeek[d]);
        th.appendChild(cell);
        document.getElementById("myTr0").appendChild(th);
    }
    //cria colunas i e adiciona a Kth linha
    var lineID = 1;
    var cellID = 1;
    //percorre cada horario existente na grade de horarios e adiciona uma celula de 
    //tempo para cada dia da semana.
    for (var ah=0; ah < this.horarios.length; ah++){
            for (var col=0; col<7; col++){
                //se for a primeira celula da linha, adicionar o horario referente
                //condição necessária pois, a primeira célula não pode ter id referente a sua posição xy.
                if (col === 0){
                    var td = document.createElement("td");
                    var cell = document.createTextNode(this.horarios[ah]);
                    td.appendChild(cell);
                    td.className = 'time';
                    document.getElementById("myTr" + lineID ).appendChild(td);
                //caso contrario, apenas crie celulas de tempo vazias     
                }else{
                    var td = document.createElement("td");
                    td.setAttribute("id", "c" + cellID); // setar id à célula referente à sua posição.

                    let codigo = 'c' + cellID;
                    let materia_sigla;
                    let materia_nome;

                    //verifica se ha disciplinas no array, caso haja, percorrer as displinas e adicion'alas em seus  devidos lugares
                    if(this.dspList.length > 0){  
                        for (var a = 0; a < this.dspList.length; a++) {
                           // console.log(codigo);
                           if( (this.dspList[a].horario === codigo) && (this.dspList[a].horario !== undefined) ){
                               materia_sigla = this.dspList[a].sigla;
                               materia_nome = this.dspList[a].disciplina;
                                //console.log('>> ',materia_sigla);
                           }
                                
                        }
                    }
                    td.setAttribute('class', 'cell');
                    td.setAttribute('data-tooltip', materia_nome ? materia_nome : ' vazio ' ); // caso esteja definida adicionar atributo para o bal~ao.
                    var cell = document.createTextNode(materia_sigla ? materia_sigla : '' ); // caso haja materia acionar o nome, sen~ao adicionar um traço.
                    td.appendChild(cell);
                    document.getElementById("myTr" + lineID ).appendChild(td);
                    cellID++;  
                }
              
            }
            lineID++;
        }
    
  }
TimeTable.prototype.getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

TimeTable.prototype.createList = () => {
       var vetor = ['asd','qwqe','13123'];
        //criando tablela  
        let dspList = document.createElement("ul");

        dspList.setAttribute("id", "dsp-wrapper");
        
        document.getElementById('lista').appendChild(dspList);

       for ( let x in this.todasDisciplinas){
            console.log('idd',x);
               let li = document.createElement('li');
                    li.setAttribute("dsp-id", "dsp-wrapper");
                    li.className = 'list-item';
                let span = document.createElement('span');
                    span.setAttribute('position',this.todasDisciplinas[x].horario);
                    li.appendChild(span);
                    dspList.appendChild(li);
                    li.innerHTML = li.innerHTML + this.todasDisciplinas[x].disciplina;
              //console.log('push: ', my_object[x]);
       }
  }
  
  this.updateTable = () => {
        //  for (var a = 0; a < this.dspList.length; a++) {
        //      console.log('log: updateTable: ', this.dspList[a].horario, this.dspList[a].sigla );
             

        //  }
      for (var ah=0; ah < this.horarios.length; ah++){
            for (var col=0; col<7; col++){
                 if(this.dspList.length > 0){  
                     console.log('len: ', this.dspList.length);
                        for (var a = 0; a < this.dspList.length; a++) {
                           // console.log(codigo);
                           if( (this.dspList[a].horario ) ){
                               let cod = this.dspList[a].horario;
                               console.log('cod: ', cod);
                               var t = document.getElementById('c17');
                               if (t === 'c17'){
                                   t.style.fontSize = '30px';
                               }

                                    //console.log('>> ', this.dspList[a].horario);

                               //materia_sigla = this.dspList[a].sigla;
                               //materia_nome = this.dspList[a].disciplina;
                               
                                
                           }
                                
                        }
                    }
                
                //se for a primeira celula da linha, adicionar o horario referente
                //condição necessária pois, a primeira célula não pode ter id referente a sua posição xy.
                // if (col === 0){
                //     var td = document.createElement("td");
                //     var cell = document.createTextNode(this.horarios[ah]);
                //     td.appendChild(cell);
                //     td.className = 'time';
                //     document.getElementById("myTr" + lineID ).appendChild(td);
                // //caso contrario, apenas crie celulas de tempo vazias     
                // }else{
                //     var td = document.createElement("td");
                //     td.setAttribute("id", "c" + cellID); // setar id à célula referente à sua posição.

                //     let codigo = 'c' + cellID;
                //     let materia_sigla;
                //     let materia_nome;

                //     //verifica se ha disciplinas no array, caso haja, percorrer as displinas e adicion'alas em seus  devidos lugares
                //     if(this.dspList.length > 0){  
                //         for (var a = 0; a < this.dspList.length; a++) {
                //            // console.log(codigo);
                //            if( (this.dspList[a].horario === codigo) && (this.dspList[a].horario !== undefined) ){
                //                materia_sigla = this.dspList[a].sigla;
                //                materia_nome = this.dspList[a].disciplina;
                //                 //console.log('>> ',materia_sigla);
                //            }
                                
                //         }
                //     }
                //     td.setAttribute('class', 'cell');
                //     td.setAttribute('data-tooltip', materia_nome ? materia_nome : ' vazio ' ); // caso esteja definida adicionar atributo para o bal~ao.
                //     var cell = document.createTextNode(materia_sigla ? materia_sigla : ' . ' ); // caso haja materia acionar o nome, sen~ao adicionar um traço.
                //     td.appendChild(cell);
                //     document.getElementById("myTr" + lineID ).appendChild(td);
                //     cellID++;  
                // }
              
            }
            //lineID++;
        }
  }

  this.alocateDisciplina = () => {}

  this.removeDisciplina = () => {}

  this.hoveringCheck = () => {}
};

export default TimeTable;