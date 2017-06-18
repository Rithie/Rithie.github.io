console.warn("BOLSONARO MITO 2018");

console.log("Olá você está curioso como funciona? Poderia me ajudar a melhorar as próximas versões!!!");

import Point from './point'
import TimeTable from './timetable'

let cargahoraria = 0;
// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
const teste = [];
const todasDisciplinas = [
                {
                 "dsp_id":"0",
                 "horario":"c25 c31",
                 "codigo":"DCC",
                 "periodo":"Optativa I",
                 "sigla":"MULT",
                 "disciplina": "Multimídia",
                 "professor":"Lucas Lattari",
                 "carga_horaria" : 66,
                 "pre_requisito" : " - ",
                 "ementa": " - "
               },
               
               {
                 "dsp_id":"2",
                 "horario":"c4 c5 c10 c11",
                 "codigo":"DCC",
                 "periodo":"Optativa I",
                 "sigla":"DES SIST COM",
                 "disciplina": "Desenvolvimento de Sistemas Comerciais",
                 "professor":"Wellington Moreira",
                 "carga_horaria" : 66,
                 "pre_requisito" : "",
                 "ementa": " - "
               },
               {
                 "dsp_id":"3",
                 "horario":"c16 c17 c22 c23",
                 "codigo":"MAT",
                 "periodo":"Optativa",
                 "sigla":"TEC MOD MAT",
                 "disciplina": "Tecnologia Modelagem Matemática",
                 "professor":"Alessandra Martings",
                 "carga_horaria" : 66,
                 "pre_requisito" : "",
                 "ementa": "Comunicação e Linguagem. Significação das Palavras. Redação. Correspondência e redação Técnica. Sintaxe: Concordância verbal e Nominal; Regência, Crase, Colocação de pronomes. Ortografia."
               },
               {
                 "dsp_id":"1",
                 "horario":"c37 c43 c39 c45",
                 "codigo":"MAT254",
                 "periodo":"2 periodo",
                 "sigla":"TEOR-N",
                 "disciplina": "Teoria dos Números",
                 "professor":"Marcelo Oliveira",
                 "carga_horaria" : 66,
                 "pre_requisito" : "MAT223",
                 "ementa": "Teoremas Teoremos e Teoremas."
               },
               {
                 "dsp_id":"4",
                 "horario":"c37 c43",
                 "codigo":"EDU432",
                 "periodo":"Optativa",
                 "sigla":"Met. Ensino",
                 "disciplina": "Metodologia de Ensino",
                 "professor":"Sandro",
                 "carga_horaria" : 33,
                 "pre_requisito" : " - ",
                 "ementa": "Indução e Recursão; Lógica Proposicional e de Predicados (Linguagem, Sistemas Dedutivos, Interpretação e Modelos); Teoremas Principais (Dedução, Corretude, Completude, Compacidade, Substituição, Forma Normal de Fórmulas, Forma Normal de Provas); Decidibilidade; Incompletude dos Sistemas Formais."
               },
               {
                 "dsp_id":"5",
                 "horario":"c55 c61 c44 c38",
                 "codigo":"DCC321",
                 "periodo":"Optativa",
                 "sigla":"LP",
                 "disciplina": "Linguagens de Programação",
                 "professor":"Sergio",
                 "carga_horaria" : 66,
                 "pre_requisito" : " - ",
                 "ementa": "Indução e Recursão; Lógica Proposicional e de Predicados (Linguagem, Sistemas Dedutivos, Interpretação e Modelos); Teoremas Principais (Dedução, Corretude, Completude, Compacidade, Substituição, Forma Normal de Fórmulas, Forma Normal de Provas); Decidibilidade; Incompletude dos Sistemas Formais."
               },
               {
                 "dsp_id":"6",
                 "horario":"c67 c73",
                 "codigo":"DCC123",
                 "periodo":"Optativa",
                 "sigla":"SI",
                 "disciplina": "Segurança da Informação",
                 "professor":"Flávio Freitas",
                 "carga_horaria" : 33,
                 "pre_requisito" : " - ",
                 "ementa": "Indução e Recursão; Lógica Proposicional e de Predicados (Linguagem, Sistemas Dedutivos, Interpretação e Modelos); Teoremas Principais (Dedução, Corretude, Completude, Compacidade, Substituição, Forma Normal de Fórmulas, Forma Normal de Provas); Decidibilidade; Incompletude dos Sistemas Formais."
               },
               {
                 "dsp_id":"7",
                 "horario":"c4 c10 c13 c19",
                 "codigo":"MAT111",
                 "periodo":"2 periodo",
                 "sigla":"FIS1",
                 "disciplina": "Física I",
                 "professor":" Damião",
                 "carga_horaria" : 66,
                 "pre_requisito" : " - ",
                 "ementa": "NP-Mais ou Menos."
               },
               {
                 "dsp_id":"8",
                 "horario":"c14 c20 c16 c22",
                 "codigo":"MAT255",
                 "periodo":"2 periodo",
                 "sigla":"CALC II",
                 "disciplina": "Cálculo Diferêncial e Integral II",
                 "professor":" Marcos Barros",
                 "carga_horaria" : 66,
                 "pre_requisito" : "MAT254",
                 "ementa": "NP-HARD-Opressor."
               },
               {
                 "dsp_id":"9",
                 "horario":"c25 c31 c27 c33",
                 "codigo":"DCC666",
                 "periodo":"2 periodo",
                 "sigla":"AEDSII",
                 "disciplina": "Algoritmos e Estrutura de Dados II",
                 "professor":" Maurício",
                 "carga_horaria" : 66,
                 "pre_requisito" : "DCC333",
                 "ementa": "NP-HARD-Malígno."
               },
               {
                 "dsp_id":"10",
                 "horario":"c26 c32",
                 "codigo":"DCC666",
                 "periodo":"2 periodo",
                 "sigla":"LAB PROG WEB",
                 "disciplina": "Laboratório de Programação Web",
                 "professor":" Alex Machado",
                 "carga_horaria" : 66,
                 "pre_requisito" : "DCC333",
                 "ementa": "NP-DEBOAS."
               },
               {
                 "dsp_id":"11",
                 "horario":"c29 c35",
                 "codigo":"DCC666",
                 "periodo":"2 periodo",
                 "sigla":"LOG MAT",
                 "disciplina": "Lógica Matemática",
                 "professor":" Flávio Freitas",
                 "carga_horaria" : 33,
                 "pre_requisito" : "DCC333",
                 "ementa": "NP-HARD-Malígno."
               },
               {
                 "dsp_id":"12",
                 "horario":"c41 c47",
                 "codigo":"ADM111",
                 "periodo":"2 periodo",
                 "sigla":"EMP",
                 "disciplina": "Empreendedorismo",
                 "professor":"Pedro Paulo",
                 "carga_horaria" : 33,
                 "pre_requisito" : "ADM000",
                 "ementa": "TOPZEIRA"
               },
               {
                 "dsp_id":"13",
                 "horario":"c40 c46",
                 "codigo":"EDU",
                 "periodo":"2 periodo",
                 "sigla":"ET",
                 "disciplina": "Ética",
                 "professor":"Natália",
                 "carga_horaria" : 33,
                 "pre_requisito" : "EDU111",
                 "ementa": "TRETAS"
               },
               {
                 "dsp_id":"14",
                 "horario":"c38 c44 c28 c34",
                 "codigo":"DCC222",
                 "periodo":"1 periodo",
                 "sigla":"AEDSI",
                 "disciplina": "Algoritmos e Estruturas de Dados I",
                 "professor":"Lucas Lattari",
                 "carga_horaria" : 66,
                 "pre_requisito" : " - ",
                 "ementa": "NP-TENSO"
               }
               ];

const daysOfWeek = ["@", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]; 
const matrix = [
'Seg 7:00 - 7:55',
'Ter 7:00 - 7:55',
'Qua 7:00 - 7:55',
'Qui 7:00 - 7:55',
'Sex 7:00 - 7:55',
'Sab 7:00 - 7:55',

'Seg 7:55 - 8:50',
'Ter 7:55 - 8:50',
'Qua 7:55 - 8:50',
'Qui 7:55 - 8:50',
'Sex 7:55 - 8:50',
'Sab 7:55 - 8:50',

'Seg 9:10 - 10:05',
'Ter 9:10 - 10:05',
'Qua 9:10 - 10:05',
'Qui 9:10 - 10:05',
'Sex 9:10 - 10:05',
'Sab 9:10 - 10:05',

'Seg 10:05 - 11:00',
'Ter 10:05 - 11:00',
'Qua 10:05 - 11:00',
'Qui 10:05 - 11:00',
'Sex 10:05 - 11:00',
'Sab 10:05 - 11:00',

'Seg 13:00 - 13:55',
'Ter 13:00 - 13:55',
'Qua 13:00 - 13:55',
'Qui 13:00 - 13:55',
'Sex 13:00 - 13:55',
'Sab 13:00 - 13:55',

'Seg 13:55 - 14:50',
'Ter 13:55 - 14:50',
'Qua 13:55 - 14:50',
'Qui 13:55 - 14:50',
'Sex 13:55 - 14:50',
'Sab 13:55 - 14:50' ,

'Seg 7:00 - 7:55',
'Ter 7:00 - 7:55',
'Qua 7:00 - 7:55',
'Qui 7:00 - 7:55',
'Sex 7:00 - 7:55',
'Sab 7:00 - 7:55',

'Seg 7:00 - 7:55',
'Ter 7:00 - 7:55',
'Qua 7:00 - 7:55',
'Qui 7:00 - 7:55',
'Sex 7:00 - 7:55',
'Sab 7:00 - 7:55',

'Seg 7:00 - 7:55',
'Ter 7:00 - 7:55',
'Qua 7:00 - 7:55',
'Qui 7:00 - 7:55',
'Sex 7:00 - 7:55',
'Sab 7:00 - 7:55',

'Seg 7:00 - 7:55',
'Ter 7:00 - 7:55',
'Qua 7:00 - 7:55',
'Qui 7:00 - 7:55',
'Sex 7:00 - 7:55',
'Sab 7:00 - 7:55',

'Seg 7:00 - 7:55',
'Ter 7:00 - 7:55',
'Qua 7:00 - 7:55',
'Qui 7:00 - 7:55',
'Sex 7:00 - 7:55',
'Sab 7:00 - 7:55',

'Seg 7:00 - 7:55',
'Ter 7:00 - 7:55',
'Qua 7:00 - 7:55',
'Qui 7:00 - 7:55',
'Sex 7:00 - 7:55',
'Sab 7:00 - 7:55',

'Seg 7:00 - 7:55',
'Ter 7:00 - 7:55',
'Qua 7:00 - 7:55',
'Qui 7:00 - 7:55',
'Sex 7:00 - 7:55',
'Sab 7:00 - 7:55',
] 
//Bug detectado, os codigos das mateiras n estao fixos, ex: se eu adicionar um horario antes das 7h por exemplo o codigo c1 
//passa a ser o horario q eu adionei antes.
const horarios = ['07:00 - 07:55', '7:55 - 08:50', '09:10 - 10:05' , '10:05 - 11:00', '13:00 - 13:55', '13:55 - 14:50', '15:10 - 16:05', '16:05 - 17:00', '17:00- 18:00', '18:30 - 19:25', '19:25 - 20:20', '20:35 - 21:30', '21:30 - 22:25'];
const p = new TimeTable(teste, daysOfWeek, horarios);
let groupedContacts = [];
// console.log(Point.distance(p1, p2));
//console.log(p.greeting(),p.isFree);
p.init();
//console.log(p);


let i=0;
let free = true;
window.onload = function() {

      
      //createList();
      createGroupedList();

      let lis = document.querySelectorAll('li.list-item > span');

      // loop para adicionar listenners aos elementos li selecionados.
      for (let i = 0; i < lis.length; i++) {
          lis[i].addEventListener("mouseover", getAddresses, false);
          lis[i].addEventListener("mouseout",  clearTarget, false);
          lis[i].addEventListener("click",     addToDspList, false);
          lis[i].addEventListener("click",     addToCalendar, false);
      }
      printDisciplinas();

      // let v = document.querySelector('.dsp-list > thead > tr > th:last-child');
      // v.textContent = cargahoraria + 'h';
}

const corAleatoria = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function addToCalendar(event){

        // Polyfill Support IE6-8
        let target = event.target || event.srcElement;
        
        //console.log('addToCalendar::event', event.target);
        
        let overlayDiv = document.getElementById('overlay')
        
        //se não houver conflitos, adicionar na grade.
        if (free){

            let dis      = target.getAttribute('d-rec'),
                prof     = target.getAttribute('prof'),
                content  = target.innerHTML;

            //console.log('addToCalendar::dis', dis);
            //var dis = target.getAttribute('d-rec'); // nome da disciplina 
            //console.log(dis);
            //console.log(free);

            let pos = target.getAttribute('pos');

            // separa os horários e coloca em um array.
            let addr = pos.split(" ");

            // percorre a lista de horarios e para cada elemento verifica qual o status da disciplina
            addr.forEach(function(element) {

                  let alvo = document.getElementById(element);


                  //console.log("addToCalendar::alvo: ", alvo.textContent);
                  // verifica cada disciplina, se vazia
                  if(alvo.textContent === ''){
                      alvo.textContent = dis;  
                      alvo.setAttribute('data-tooltip', content + ' - ' + prof);
                      // seta cor de fundo. Futuramente setar cores aleatórias
                      alvo.style.background = 'rgba(176, 212, 222,.4)'; 
                      //free = false;
                  }

            });
      
            // //myFunction(arr[0]);
            // // adiciona disciplina na grade
            // document.getElementById(addr).textContent = dis;  
             // seta cor de fundo. Futuramente setar cores aleatórias
            

            overlayDiv.style.display = 'block'; // tornar visivel mensagem de sucesso
            overlayDiv.innerHTML = '<strong>Adicionado com sucesso!</strong>'; // adicionar mensagem de sucesso
            overlayDiv.style.background = '#4caf50'; // setar cor.
            // reset the color after a small amount of time
            setTimeout(function() {
                document.getElementById('overlay').style.display = 'none';
            }, 1000);

        // casa haja algum conflito,  
        }else{
            overlayDiv.style.display = 'block'; // tornar visivel mensagem de erro
            overlayDiv.innerHTML = '<strong>Oh snap! Conflito</strong> de Horários!'; // adicionar mensagem de erro
            overlayDiv.style.background = '#e51c23'; // setar cor.
            // reset the color after a small amount of time
            setTimeout(function() {
                overlayDiv.style.display = 'none';
            }, 1200);
        }

}

function createList(){
        //criando lista
        let dspList = document.createElement("ul");
        dspList.setAttribute("id", "dsp-wrapper");
        document.getElementById('lista').appendChild(dspList);

       for ( let x in todasDisciplinas){
           let li = document.createElement('li');
                li.setAttribute("id", 'line-' + x[i]);
                li.className = 'list-item';
            let span = document.createElement('span');
                span.setAttribute('id',todasDisciplinas[x].dsp_id);
                span.setAttribute('pos', todasDisciplinas[x].horario);
                span.setAttribute('carga', todasDisciplinas[x].carga_horaria);
                span.setAttribute('dspcod', todasDisciplinas[x].codigo);
                span.setAttribute('prof', todasDisciplinas[x].professor);
                span.setAttribute('d-rec', todasDisciplinas[x].sigla);
                span.setAttribute('periodo', todasDisciplinas[x].periodo);
                span.setAttribute('req', todasDisciplinas[x].pre_requisito);
                span.setAttribute('ementa', todasDisciplinas[x].ementa);
                span.innerHTML = span.innerHTML + todasDisciplinas[x].disciplina;
                li.appendChild(span);
                dspList.appendChild(li);
                
          //console.log('push: ', my_object[x]);
       }
}

function groupItems(items){

      // console.log(items.periodo);

      //ordena em ordem crescente
      let sortedContacts = items.sort((a,b) => {
        
          if (a.periodo > b.periodo) {
              return 1;
          }
          if (a.periodo < b.periodo) {
              return -1;
          }
          // a must be equal to b
          return 0;
    

      });

      

      let currentLetter = false;         
      let currentContacts = [];

      console.log('sorted: ', sortedContacts);

      sortedContacts.forEach((value, index) => {
      
                  if(value.periodo.charAt(0) != currentLetter){

                      currentLetter = value.periodo.charAt(0);
                      
                    
                      let newGroup = {
                          periodo: value.periodo,
                          disciplinas: []
                      };
      
                      currentContacts = newGroup.disciplinas;
                      groupedContacts.push(newGroup);
      
                  } 
      
                  currentContacts.push(items[index]);
      
        });

}
function createGroupedList(){

      groupItems(todasDisciplinas);

      let dspList = document.createElement("ul");
      dspList.setAttribute("id", "dsp-wrapper");
      document.getElementById('lista').appendChild(dspList);

      for(let x in groupedContacts){

            let li = document.createElement('li');
                
                li.className = 'list-head';

            let span = document.createElement('span');

            span.innerHTML = span.innerHTML + groupedContacts[x].periodo;
            li.appendChild(span);
            dspList.appendChild(li);
          
            groupedContacts[x].disciplinas.forEach(function(item){
           
                let li = document.createElement('li');
                    li.setAttribute("id", 'line-' + x[i]);
                    li.className = 'list-item';
                
                let span = document.createElement('span');
                    span.setAttribute('id',item.dsp_id);
                    span.setAttribute('pos', item.horario);
                    span.setAttribute('carga', item.carga_horaria);
                    span.setAttribute('dspcod', item.codigo);
                    span.setAttribute('prof', item.professor);
                    span.setAttribute('d-rec', item.sigla);
                    span.setAttribute('periodo', item.periodo);
                    span.setAttribute('req', item.pre_requisito);
                    span.setAttribute('ementa', item.ementa);
                    span.innerHTML = span.innerHTML + item.disciplina;
                    li.appendChild(span);
                    dspList.appendChild(li);
          });
      }
}
function clearTarget(ev){

    event.stopPropagation();
    event.preventDefault(); 

    //console.log("mouseout");
    
    free = true; // quando retirar o mouse voltar ao estado 0;

    let info = document.getElementById("info");

    let disciplina = "<h5>" + "Nenhuma Informação até agora" + "</h5><p>Passe o mouse sobre a lista de disciplinas.</p>";
    info.innerHTML = disciplina ;

    let pos = ev.target.getAttribute('pos');
    let addr = pos.trim().split(" ");

    // percorre cada horario da disciplina e remove as classes.
    addr.forEach(function(element) {
      var alvo = document.getElementById(element).className =
                    document.getElementById(element).className
                            .replace(new RegExp('(?:^|\\s)' + 'corVermelha|corVerde' + '(?:\\s|$)'), ' ');
    });
}

function getAddresses( event ) {
    
    // console.log("mouseover");
    
    event.stopPropagation();
    event.preventDefault();  // prevent the default Enter's action

   // console.warn('getAddresses::fn: ',event.target.innerHTML);
    
    let info = document.getElementById("info");

    let disciplina = "<h5>" + event.target.innerHTML + "</h5>";
    let periodo = "<h6>" + event.target.getAttribute('periodo') + "</h6>";
    let professor  = "<h6 class='prof-borda'>Prof: " + event.target.getAttribute("prof") + "</h6><b>Ementa: </b>";
    info.innerHTML = disciplina + periodo + professor + "<p>" + event.target.getAttribute("ementa") + "</p>";

    //pega o attr position para verificar quais horarios a disciplina está.
    let pos = event.target.getAttribute('pos');
    //console.log('pos', pos);

    // separa os horários e coloca em um array.
    let addr = pos.trim().split(" ");
    //console.log('addr: ', addr);

    // percorre a lista de horarios e para cada elemento verifica qual o status da disciplina
    addr.forEach(function(element) {

     // console.log('getAddresses::forEach:free ',free);
     // console.log('getAddresses::forEach:ele ',element);
      let alvo = document.getElementById(element);

      // verifica cada disciplina, se vazia
      if(alvo.textContent === ''){
        alvo.className += " corVerde"; // adiciona a classe verde
        free ? true : false;
      }else{
        free = false;
        alvo.className += " corVermelha"; // adiciona a classe vermelha
      }
      //console.log('getAddresses::forEach:free ',free);

    });

}

// get displ from local storage or empty array
let disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];

function printDisciplinas(){

        disciplinas.forEach(function(e){

                    let addr = e.pos.split(" ");

                    // percorre a lista de horarios e para cada elemento 
                    // verifica qual o status da disciplina
                    addr.forEach(function(element) {

                      let alvo = document.getElementById(element);
                      
                      // verifica cada disciplina, se vazia
                      if(alvo.textContent === ''){
                          alvo.textContent = e.sigla;  
                          alvo.setAttribute('data-tooltip', e.content + ' - ' + e.prof);
                          // seta cor de fundo. Futuramente setar cores aleatórias
                          alvo.style.background = 'rgba(176, 212, 222,.4)'; 
                          
                      }
                    });
          
                    //cria linha
                    let tr = document.createElement("tr");
                    tr.setAttribute('id', 'tr-' + e.id);
                    //tr.className = 'success';
                    //let td0 = document.createElement("td");
                    //let cell0 = document.createTextNode(e.id);
                    //td1.appendChild(cell0);
                    let td1 = document.createElement("td");
                    let cell1 = document.createTextNode(e.dspcod);
                    td1.appendChild(cell1);
                    let td2 = document.createElement("td");
                    let cell2 = document.createTextNode(e.content);
                    td2.appendChild(cell2);
                    let td3 = document.createElement("td");
                    let cell3 = document.createTextNode(e.prof);
                    td3.appendChild(cell3);
                    let td4 = document.createElement("td");
                    let cell4 = document.createTextNode('5:00-6:00');
                    td4.appendChild(cell4);
                    let td5 = document.createElement("td");
                    let cell5 = document.createTextNode(e.carga);

                    cargahoraria += parseInt(e.carga);

                    let valor = document.querySelector('.dsp-list > thead > tr > th:last-child');
                    valor.textContent = 'Carga Horária: ' + cargahoraria + 'h';

                    td5.appendChild(cell5);
                    let td6 = document.createElement("td");
                    td6.style.cursor = 'pointer';
                    td6.setAttribute('id', e.id);
                    td6.setAttribute('pos', e.pos);
                    let cell6 = document.createTextNode('');
                    td6.appendChild(cell6);
                                    
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tr.appendChild(td6).addEventListener('click',removeDspFromLocalStorage, false);
                        
                    let lugar = document.querySelector('table.table.table-striped.table-hover.dsp-list tbody');
                    lugar.appendChild(tr);
      });
}


function addToList(e) {
          //cria linha
                    let tr = document.createElement("tr");
                    tr.setAttribute('id', 'tr-' + e.id);
                    //tr.className = 'success';
                    let td1 = document.createElement("td");
                    let cell1 = document.createTextNode(e.dspcod);
                    td1.appendChild(cell1);
                    let td2 = document.createElement("td");
                    let cell2 = document.createTextNode(e.content);
                    td2.appendChild(cell2);
                    let td3 = document.createElement("td");
                    let cell3 = document.createTextNode(e.prof);
                    td3.appendChild(cell3);
                    let td4 = document.createElement("td");
                    let cell4 = document.createTextNode('5:00-6:00');
                    td4.appendChild(cell4);
                    let td5 = document.createElement("td");
                    let cell5 = document.createTextNode(e.carga);
                    td5.appendChild(cell5);
                    let td6 = document.createElement("td");
                    td6.style.cursor = 'pointer';
                    td6.setAttribute('id', e.id);
                    td6.setAttribute('pos', e.pos);
                    let cell6 = document.createTextNode('');
                    td6.appendChild(cell6);
                                    
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tr.appendChild(td5);
                    tr.appendChild(td6).addEventListener('click',removeDspFromLocalStorage, false);
                        
                    let lugar = document.querySelector('table.table.table-striped.table-hover.dsp-list tbody');
                    lugar.appendChild(tr);
}
/*
* @params - id
* varre localstorage e procura por ID da disciplina
* se encontrar retorna a pos, senão retorna -1
*/
function findIndexOf(id) {
        
        for(var i = 0, len = disciplinas.length; i < len; i++) {
          if (disciplinas[i].id === id) {
            return i;
          }
        }
        return -1;
}
/*
* @params - id
* Essa função recebe o id como parametro e remove um item 
* da lista de disciplinas. 
*/
function removeLinhaById(id) {
          var elem = document.getElementById(id);

          //console.warn(findIndexOf(id));
          //console.log('remover: ', elem);
          cargahoraria -= parseInt(elem.children[4].innerText);
          let v = document.querySelector('.dsp-list > thead > tr > th:last-child');
          v.textContent = 'Carga Horária: ' + cargahoraria + 'h';
          return elem.parentNode.removeChild(elem);


}
/*
* @params - event
* Essa função recebe evento do elemento clicado, extrai o id da disciplina
* encontra-o no localStorage se possível e retira-o da lista de disciplinas.
*/
function removeDspFromLocalStorage(e){
          // Polyfill Support IE6-8
          let target = e.target || e.srcElement;
          // console.log('remove', target);  // debug

          // retorna -1 caso não encontre, caso contrário retorna o id da disciplina
          let index = findIndexOf(target.id); 
          
          let position = target.getAttribute('pos');
          
          if (!target.id) return; // should'n happen

            //console.log('antes', disciplinas);  // debug
            //retira disciplina do array temporário
            disciplinas.splice(index, 1);
            //atualiza localStorage
            localStorage.setItem('disciplinas',JSON.stringify(disciplinas));
            //console.log('depois', disciplinas); // debug
            removeLinhaById("tr-" + target.id);

            // separa os horários e coloca em um array.
            let addr = position.split(" ");

            // percorre a lista de horarios e para cada elemento verifica qual o status da disciplina
            addr.forEach(function(element) {

                  let alvo = document.getElementById(element);

                  // verifica cada posição correspondente não está vazia no calendário, 
                  // caso esteja seta para vazio
                  if(alvo.textContent !== ''){
                      alvo.textContent = '';  
                      alvo.setAttribute('data-tooltip', ' vazio ');

                      // tornar cor transparente
                      alvo.style.background = 'rgba(176, 212, 222,0)'; 
                      //free = false;
                  }

            });
      
}
/*
* @params - event
* Essa função é chamada com o evento click. O listener captura os atributos da lista quando clicada.
* 
*/
function addToDspList(e){

        // Support IE6-8
        let target = e.target || e.srcElement;

        //console.log('addToDspList::event: ', e.target); //debug

        let id       = target.id,
            pos      = target.getAttribute('pos'),
            prof     = target.getAttribute('prof'),
            carga    = target.getAttribute('carga'),
            dsp      = target.getAttribute('dsp'),
            dspcod   = target.getAttribute('dspcod'),
            sigla    = target.getAttribute('d-rec'),
            item     = target,
            content  = target.innerHTML;

            let index = findIndexOf(id);

           //console.error('dspcod',dspcod); //debug
          // console.log('disciplina: ',target.innerHTML); //debug
          // console.log('position',pos); //debug
          // console.log('item',item); //debug
          //console.log('index',index); //debug

          // return if target doesn't have an id (shouldn't happen)
          if (!id) return;
          // item is not favorite and is not in the table
          if (index == -1 && free == true) {
            
              //objeto a ser adicionado na lista de disciplinas
              let obj = {id: id,
                         dspcod: dspcod, 
                         pos: pos, 
                         prof: prof,
                         carga: parseInt(carga),
                         content: content,
                         sigla: sigla};

              disciplinas.push(obj);

              addToList(obj);
              cargahoraria += obj.carga;
              //pesquisa th com a carga horária
              let v = document.querySelector('.dsp-list > thead > tr > th:last-child');
              v.textContent = 'Carga horária: ' + cargahoraria + 'h';
          
          } 
          //else {// se o item ja estiver na lista, retirar caso seja clicado novamente. ( warning:verificar essa logica)
            //disciplinas.splice(index, 1);
            //item.className = '';
          //}
          // store array in local storage
          localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
}
