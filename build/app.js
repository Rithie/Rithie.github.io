(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _point = require('./point');

var _point2 = _interopRequireDefault(_point);

var _timetable = require('./timetable');

var _timetable2 = _interopRequireDefault(_timetable);

console.warn("BOLSONARO MITO 2018");

console.log("Olá você está curioso como funciona? Poderia me ajudar a melhorar as próximas versões!!!");

var cargahoraria = 0;
// const p1 = new Point(5, 5);
// const p2 = new Point(10, 10);
var teste = [];
var todasDisciplinas = [{
  "dsp_id": "0",
  "horario": "c25 c31",
  "codigo": "DCC",
  "periodo": "Optativa I",
  "sigla": "MULT",
  "disciplina": "Multimídia",
  "professor": "Lucas Lattari",
  "carga_horaria": 66,
  "pre_requisito": " - ",
  "ementa": " - "
}, {
  "dsp_id": "2",
  "horario": "c4 c5 c10 c11",
  "codigo": "DCC",
  "periodo": "Optativa I",
  "sigla": "DES SIST COM",
  "disciplina": "Desenvolvimento de Sistemas Comerciais",
  "professor": "Wellington Moreira",
  "carga_horaria": 66,
  "pre_requisito": "",
  "ementa": " - "
}, {
  "dsp_id": "3",
  "horario": "c16 c17 c22 c23",
  "codigo": "MAT",
  "periodo": "Optativa",
  "sigla": "TEC MOD MAT",
  "disciplina": "Tecnologia Modelagem Matemática",
  "professor": "Alessandra Martings",
  "carga_horaria": 66,
  "pre_requisito": "",
  "ementa": "Comunicação e Linguagem. Significação das Palavras. Redação. Correspondência e redação Técnica. Sintaxe: Concordância verbal e Nominal; Regência, Crase, Colocação de pronomes. Ortografia."
}, {
  "dsp_id": "1",
  "horario": "c37 c43 c39 c45",
  "codigo": "MAT254",
  "periodo": "2 periodo",
  "sigla": "TEOR-N",
  "disciplina": "Teoria dos Números",
  "professor": "Marcelo Oliveira",
  "carga_horaria": 66,
  "pre_requisito": "MAT223",
  "ementa": "Teoremas Teoremos e Teoremas."
}, {
  "dsp_id": "4",
  "horario": "c37 c43",
  "codigo": "EDU432",
  "periodo": "Optativa",
  "sigla": "Met. Ensino",
  "disciplina": "Metodologia de Ensino",
  "professor": "Sandro",
  "carga_horaria": 33,
  "pre_requisito": " - ",
  "ementa": "Indução e Recursão; Lógica Proposicional e de Predicados (Linguagem, Sistemas Dedutivos, Interpretação e Modelos); Teoremas Principais (Dedução, Corretude, Completude, Compacidade, Substituição, Forma Normal de Fórmulas, Forma Normal de Provas); Decidibilidade; Incompletude dos Sistemas Formais."
}, {
  "dsp_id": "5",
  "horario": "c55 c61 c44 c38",
  "codigo": "DCC321",
  "periodo": "Optativa",
  "sigla": "LP",
  "disciplina": "Linguagens de Programação",
  "professor": "Sergio",
  "carga_horaria": 66,
  "pre_requisito": " - ",
  "ementa": "Indução e Recursão; Lógica Proposicional e de Predicados (Linguagem, Sistemas Dedutivos, Interpretação e Modelos); Teoremas Principais (Dedução, Corretude, Completude, Compacidade, Substituição, Forma Normal de Fórmulas, Forma Normal de Provas); Decidibilidade; Incompletude dos Sistemas Formais."
}, {
  "dsp_id": "6",
  "horario": "c67 c73",
  "codigo": "DCC123",
  "periodo": "Optativa",
  "sigla": "SI",
  "disciplina": "Segurança da Informação",
  "professor": "Flávio Freitas",
  "carga_horaria": 33,
  "pre_requisito": " - ",
  "ementa": "Indução e Recursão; Lógica Proposicional e de Predicados (Linguagem, Sistemas Dedutivos, Interpretação e Modelos); Teoremas Principais (Dedução, Corretude, Completude, Compacidade, Substituição, Forma Normal de Fórmulas, Forma Normal de Provas); Decidibilidade; Incompletude dos Sistemas Formais."
}, {
  "dsp_id": "7",
  "horario": "c4 c10 c13 c19",
  "codigo": "MAT111",
  "periodo": "2 periodo",
  "sigla": "FIS1",
  "disciplina": "Física I",
  "professor": " Damião",
  "carga_horaria": 66,
  "pre_requisito": " - ",
  "ementa": "NP-Mais ou Menos."
}, {
  "dsp_id": "8",
  "horario": "c14 c20 c16 c22",
  "codigo": "MAT255",
  "periodo": "2 periodo",
  "sigla": "CALC II",
  "disciplina": "Cálculo Diferêncial e Integral II",
  "professor": " Marcos Barros",
  "carga_horaria": 66,
  "pre_requisito": "MAT254",
  "ementa": "NP-HARD-Opressor."
}, {
  "dsp_id": "9",
  "horario": "c25 c31 c27 c33",
  "codigo": "DCC666",
  "periodo": "2 periodo",
  "sigla": "AEDSII",
  "disciplina": "Algoritmos e Estrutura de Dados II",
  "professor": " Maurício",
  "carga_horaria": 66,
  "pre_requisito": "DCC333",
  "ementa": "NP-HARD-Malígno."
}, {
  "dsp_id": "10",
  "horario": "c26 c32",
  "codigo": "DCC666",
  "periodo": "2 periodo",
  "sigla": "LAB PROG WEB",
  "disciplina": "Laboratório de Programação Web",
  "professor": " Alex Machado",
  "carga_horaria": 66,
  "pre_requisito": "DCC333",
  "ementa": "NP-DEBOAS."
}, {
  "dsp_id": "11",
  "horario": "c29 c35",
  "codigo": "DCC666",
  "periodo": "2 periodo",
  "sigla": "LOG MAT",
  "disciplina": "Lógica Matemática",
  "professor": " Flávio Freitas",
  "carga_horaria": 33,
  "pre_requisito": "DCC333",
  "ementa": "NP-HARD-Malígno."
}, {
  "dsp_id": "12",
  "horario": "c41 c47",
  "codigo": "ADM111",
  "periodo": "2 periodo",
  "sigla": "EMP",
  "disciplina": "Empreendedorismo",
  "professor": "Pedro Paulo",
  "carga_horaria": 33,
  "pre_requisito": "ADM000",
  "ementa": "TOPZEIRA"
}, {
  "dsp_id": "13",
  "horario": "c40 c46",
  "codigo": "EDU",
  "periodo": "2 periodo",
  "sigla": "ET",
  "disciplina": "Ética",
  "professor": "Natália",
  "carga_horaria": 33,
  "pre_requisito": "EDU111",
  "ementa": "TRETAS"
}, {
  "dsp_id": "14",
  "horario": "c38 c44 c28 c34",
  "codigo": "DCC222",
  "periodo": "1 periodo",
  "sigla": "AEDSI",
  "disciplina": "Algoritmos e Estruturas de Dados I",
  "professor": "Lucas Lattari",
  "carga_horaria": 66,
  "pre_requisito": " - ",
  "ementa": "NP-TENSO"
}];

var daysOfWeek = ["@", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
var matrix = ['Seg 7:00 - 7:55', 'Ter 7:00 - 7:55', 'Qua 7:00 - 7:55', 'Qui 7:00 - 7:55', 'Sex 7:00 - 7:55', 'Sab 7:00 - 7:55', 'Seg 7:55 - 8:50', 'Ter 7:55 - 8:50', 'Qua 7:55 - 8:50', 'Qui 7:55 - 8:50', 'Sex 7:55 - 8:50', 'Sab 7:55 - 8:50', 'Seg 9:10 - 10:05', 'Ter 9:10 - 10:05', 'Qua 9:10 - 10:05', 'Qui 9:10 - 10:05', 'Sex 9:10 - 10:05', 'Sab 9:10 - 10:05', 'Seg 10:05 - 11:00', 'Ter 10:05 - 11:00', 'Qua 10:05 - 11:00', 'Qui 10:05 - 11:00', 'Sex 10:05 - 11:00', 'Sab 10:05 - 11:00', 'Seg 13:00 - 13:55', 'Ter 13:00 - 13:55', 'Qua 13:00 - 13:55', 'Qui 13:00 - 13:55', 'Sex 13:00 - 13:55', 'Sab 13:00 - 13:55', 'Seg 13:55 - 14:50', 'Ter 13:55 - 14:50', 'Qua 13:55 - 14:50', 'Qui 13:55 - 14:50', 'Sex 13:55 - 14:50', 'Sab 13:55 - 14:50', 'Seg 7:00 - 7:55', 'Ter 7:00 - 7:55', 'Qua 7:00 - 7:55', 'Qui 7:00 - 7:55', 'Sex 7:00 - 7:55', 'Sab 7:00 - 7:55', 'Seg 7:00 - 7:55', 'Ter 7:00 - 7:55', 'Qua 7:00 - 7:55', 'Qui 7:00 - 7:55', 'Sex 7:00 - 7:55', 'Sab 7:00 - 7:55', 'Seg 7:00 - 7:55', 'Ter 7:00 - 7:55', 'Qua 7:00 - 7:55', 'Qui 7:00 - 7:55', 'Sex 7:00 - 7:55', 'Sab 7:00 - 7:55', 'Seg 7:00 - 7:55', 'Ter 7:00 - 7:55', 'Qua 7:00 - 7:55', 'Qui 7:00 - 7:55', 'Sex 7:00 - 7:55', 'Sab 7:00 - 7:55', 'Seg 7:00 - 7:55', 'Ter 7:00 - 7:55', 'Qua 7:00 - 7:55', 'Qui 7:00 - 7:55', 'Sex 7:00 - 7:55', 'Sab 7:00 - 7:55', 'Seg 7:00 - 7:55', 'Ter 7:00 - 7:55', 'Qua 7:00 - 7:55', 'Qui 7:00 - 7:55', 'Sex 7:00 - 7:55', 'Sab 7:00 - 7:55', 'Seg 7:00 - 7:55', 'Ter 7:00 - 7:55', 'Qua 7:00 - 7:55', 'Qui 7:00 - 7:55', 'Sex 7:00 - 7:55', 'Sab 7:00 - 7:55'];
//Bug detectado, os codigos das mateiras n estao fixos, ex: se eu adicionar um horario antes das 7h por exemplo o codigo c1
//passa a ser o horario q eu adionei antes.
var horarios = ['07:00 - 07:55', '7:55 - 08:50', '09:10 - 10:05', '10:05 - 11:00', '13:00 - 13:55', '13:55 - 14:50', '15:10 - 16:05', '16:05 - 17:00', '17:00- 18:00', '18:30 - 19:25', '19:25 - 20:20', '20:35 - 21:30', '21:30 - 22:25'];
var p = new _timetable2["default"](teste, daysOfWeek, horarios);
var groupedContacts = [];
// console.log(Point.distance(p1, p2));
//console.log(p.greeting(),p.isFree);
p.init();
//console.log(p);

var i = 0;
var free = true;
window.onload = function () {

  //createList();
  createGroupedList();

  var lis = document.querySelectorAll('li.list-item > span');

  // loop para adicionar listenners aos elementos li selecionados.
  for (var _i = 0; _i < lis.length; _i++) {
    lis[_i].addEventListener("mouseover", getAddresses, false);
    lis[_i].addEventListener("mouseout", clearTarget, false);
    lis[_i].addEventListener("click", addToDspList, false);
    lis[_i].addEventListener("click", addToCalendar, false);
  }
  printDisciplinas();

  // let v = document.querySelector('.dsp-list > thead > tr > th:last-child');
  // v.textContent = cargahoraria + 'h';
};

var corAleatoria = function corAleatoria() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
function addToCalendar(event) {

  // Polyfill Support IE6-8
  var target = event.target || event.srcElement;

  //console.log('addToCalendar::event', event.target);

  var overlayDiv = document.getElementById('overlay');

  //se não houver conflitos, adicionar na grade.
  if (free) {
    (function () {

      var dis = target.getAttribute('d-rec'),
          prof = target.getAttribute('prof'),
          content = target.innerHTML;

      //console.log('addToCalendar::dis', dis);
      //var dis = target.getAttribute('d-rec'); // nome da disciplina
      //console.log(dis);
      //console.log(free);

      var pos = target.getAttribute('pos');

      // separa os horários e coloca em um array.
      var addr = pos.split(" ");

      // percorre a lista de horarios e para cada elemento verifica qual o status da disciplina
      addr.forEach(function (element) {

        var alvo = document.getElementById(element);

        //console.log("addToCalendar::alvo: ", alvo.textContent);
        // verifica cada disciplina, se vazia
        if (alvo.textContent === '') {
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
      setTimeout(function () {
        document.getElementById('overlay').style.display = 'none';
      }, 1000);

      // casa haja algum conflito,
    })();
  } else {
      overlayDiv.style.display = 'block'; // tornar visivel mensagem de erro
      overlayDiv.innerHTML = '<strong>Oh snap! Conflito</strong> de Horários!'; // adicionar mensagem de erro
      overlayDiv.style.background = '#e51c23'; // setar cor.
      // reset the color after a small amount of time
      setTimeout(function () {
        overlayDiv.style.display = 'none';
      }, 1200);
    }
}

function createList() {
  //criando lista
  var dspList = document.createElement("ul");
  dspList.setAttribute("id", "dsp-wrapper");
  document.getElementById('lista').appendChild(dspList);

  for (var x in todasDisciplinas) {
    var li = document.createElement('li');
    li.setAttribute("id", 'line-' + x[i]);
    li.className = 'list-item';
    var span = document.createElement('span');
    span.setAttribute('id', todasDisciplinas[x].dsp_id);
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

function groupItems(items) {

  // console.log(items.periodo);

  //ordena em ordem crescente
  var sortedContacts = items.sort(function (a, b) {

    if (a.periodo > b.periodo) {
      return 1;
    }
    if (a.periodo < b.periodo) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

  var currentLetter = false;
  var currentContacts = [];

  console.log('sorted: ', sortedContacts);

  sortedContacts.forEach(function (value, index) {

    if (value.periodo.charAt(0) != currentLetter) {

      currentLetter = value.periodo.charAt(0);

      var newGroup = {
        periodo: value.periodo,
        disciplinas: []
      };

      currentContacts = newGroup.disciplinas;
      groupedContacts.push(newGroup);
    }

    currentContacts.push(items[index]);
  });
}
function createGroupedList() {

  groupItems(todasDisciplinas);

  var dspList = document.createElement("ul");
  dspList.setAttribute("id", "dsp-wrapper");
  document.getElementById('lista').appendChild(dspList);

  var _loop = function (x) {

    var li = document.createElement('li');

    li.className = 'list-head';

    var span = document.createElement('span');

    span.innerHTML = span.innerHTML + groupedContacts[x].periodo;
    li.appendChild(span);
    dspList.appendChild(li);

    groupedContacts[x].disciplinas.forEach(function (item) {

      var li = document.createElement('li');
      li.setAttribute("id", 'line-' + x[i]);
      li.className = 'list-item';

      var span = document.createElement('span');
      span.setAttribute('id', item.dsp_id);
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
  };

  for (var x in groupedContacts) {
    _loop(x);
  }
}
function clearTarget(ev) {

  event.stopPropagation();
  event.preventDefault();

  //console.log("mouseout");

  free = true; // quando retirar o mouse voltar ao estado 0;

  var info = document.getElementById("info");

  var disciplina = "<h5>" + "Nenhuma Informação até agora" + "</h5><p>Passe o mouse sobre a lista de disciplinas.</p>";
  info.innerHTML = disciplina;

  var pos = ev.target.getAttribute('pos');
  var addr = pos.trim().split(" ");

  // percorre cada horario da disciplina e remove as classes.
  addr.forEach(function (element) {
    var alvo = document.getElementById(element).className = document.getElementById(element).className.replace(new RegExp('(?:^|\\s)' + 'corVermelha|corVerde' + '(?:\\s|$)'), ' ');
  });
}

function getAddresses(event) {

  // console.log("mouseover");

  event.stopPropagation();
  event.preventDefault(); // prevent the default Enter's action

  // console.warn('getAddresses::fn: ',event.target.innerHTML);

  var info = document.getElementById("info");

  var disciplina = "<h5>" + event.target.innerHTML + "</h5>";
  var periodo = "<h6>" + event.target.getAttribute('periodo') + "</h6>";
  var professor = "<h6 class='prof-borda'>Prof: " + event.target.getAttribute("prof") + "</h6><b>Ementa: </b>";
  info.innerHTML = disciplina + periodo + professor + "<p>" + event.target.getAttribute("ementa") + "</p>";

  //pega o attr position para verificar quais horarios a disciplina está.
  var pos = event.target.getAttribute('pos');
  //console.log('pos', pos);

  // separa os horários e coloca em um array.
  var addr = pos.trim().split(" ");
  //console.log('addr: ', addr);

  // percorre a lista de horarios e para cada elemento verifica qual o status da disciplina
  addr.forEach(function (element) {

    // console.log('getAddresses::forEach:free ',free);
    // console.log('getAddresses::forEach:ele ',element);
    var alvo = document.getElementById(element);

    // verifica cada disciplina, se vazia
    if (alvo.textContent === '') {
      alvo.className += " corVerde"; // adiciona a classe verde
      free ? true : false;
    } else {
      free = false;
      alvo.className += " corVermelha"; // adiciona a classe vermelha
    }
    //console.log('getAddresses::forEach:free ',free);
  });
}

// get displ from local storage or empty array
var disciplinas = JSON.parse(localStorage.getItem('disciplinas')) || [];

function printDisciplinas() {

  disciplinas.forEach(function (e) {

    var addr = e.pos.split(" ");

    // percorre a lista de horarios e para cada elemento
    // verifica qual o status da disciplina
    addr.forEach(function (element) {

      var alvo = document.getElementById(element);

      // verifica cada disciplina, se vazia
      if (alvo.textContent === '') {
        alvo.textContent = e.sigla;
        alvo.setAttribute('data-tooltip', e.content + ' - ' + e.prof);
        // seta cor de fundo. Futuramente setar cores aleatórias
        alvo.style.background = 'rgba(176, 212, 222,.4)';
      }
    });

    //cria linha
    var tr = document.createElement("tr");
    tr.setAttribute('id', 'tr-' + e.id);
    //tr.className = 'success';
    //let td0 = document.createElement("td");
    //let cell0 = document.createTextNode(e.id);
    //td1.appendChild(cell0);
    var td1 = document.createElement("td");
    var cell1 = document.createTextNode(e.dspcod);
    td1.appendChild(cell1);
    var td2 = document.createElement("td");
    var cell2 = document.createTextNode(e.content);
    td2.appendChild(cell2);
    var td3 = document.createElement("td");
    var cell3 = document.createTextNode(e.prof);
    td3.appendChild(cell3);
    var td4 = document.createElement("td");
    var cell4 = document.createTextNode('5:00-6:00');
    td4.appendChild(cell4);
    var td5 = document.createElement("td");
    var cell5 = document.createTextNode(e.carga);

    cargahoraria += parseInt(e.carga);

    var valor = document.querySelector('.dsp-list > thead > tr > th:last-child');
    valor.textContent = 'Carga Horária: ' + cargahoraria + 'h';

    td5.appendChild(cell5);
    var td6 = document.createElement("td");
    td6.style.cursor = 'pointer';
    td6.setAttribute('id', e.id);
    td6.setAttribute('pos', e.pos);
    var cell6 = document.createTextNode('');
    td6.appendChild(cell6);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6).addEventListener('click', removeDspFromLocalStorage, false);

    var lugar = document.querySelector('table.table.table-striped.table-hover.dsp-list tbody');
    lugar.appendChild(tr);
  });
}

function addToList(e) {
  //cria linha
  var tr = document.createElement("tr");
  tr.setAttribute('id', 'tr-' + e.id);
  //tr.className = 'success';
  var td1 = document.createElement("td");
  var cell1 = document.createTextNode(e.dspcod);
  td1.appendChild(cell1);
  var td2 = document.createElement("td");
  var cell2 = document.createTextNode(e.content);
  td2.appendChild(cell2);
  var td3 = document.createElement("td");
  var cell3 = document.createTextNode(e.prof);
  td3.appendChild(cell3);
  var td4 = document.createElement("td");
  var cell4 = document.createTextNode('5:00-6:00');
  td4.appendChild(cell4);
  var td5 = document.createElement("td");
  var cell5 = document.createTextNode(e.carga);
  td5.appendChild(cell5);
  var td6 = document.createElement("td");
  td6.style.cursor = 'pointer';
  td6.setAttribute('id', e.id);
  td6.setAttribute('pos', e.pos);
  var cell6 = document.createTextNode('');
  td6.appendChild(cell6);

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  tr.appendChild(td6).addEventListener('click', removeDspFromLocalStorage, false);

  var lugar = document.querySelector('table.table.table-striped.table-hover.dsp-list tbody');
  lugar.appendChild(tr);
}
/*
* @params - id
* varre localstorage e procura por ID da disciplina
* se encontrar retorna a pos, senão retorna -1
*/
function findIndexOf(id) {

  for (var i = 0, len = disciplinas.length; i < len; i++) {
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
  var v = document.querySelector('.dsp-list > thead > tr > th:last-child');
  v.textContent = 'Carga Horária: ' + cargahoraria + 'h';
  return elem.parentNode.removeChild(elem);
}
/*
* @params - event
* Essa função recebe evento do elemento clicado, extrai o id da disciplina
* encontra-o no localStorage se possível e retira-o da lista de disciplinas.
*/
function removeDspFromLocalStorage(e) {
  // Polyfill Support IE6-8
  var target = e.target || e.srcElement;
  // console.log('remove', target);  // debug

  // retorna -1 caso não encontre, caso contrário retorna o id da disciplina
  var index = findIndexOf(target.id);

  var position = target.getAttribute('pos');

  if (!target.id) return; // should'n happen

  //console.log('antes', disciplinas);  // debug
  //retira disciplina do array temporário
  disciplinas.splice(index, 1);
  //atualiza localStorage
  localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
  //console.log('depois', disciplinas); // debug
  removeLinhaById("tr-" + target.id);

  // separa os horários e coloca em um array.
  var addr = position.split(" ");

  // percorre a lista de horarios e para cada elemento verifica qual o status da disciplina
  addr.forEach(function (element) {

    var alvo = document.getElementById(element);

    // verifica cada posição correspondente não está vazia no calendário,
    // caso esteja seta para vazio
    if (alvo.textContent !== '') {
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
function addToDspList(e) {

  // Support IE6-8
  var target = e.target || e.srcElement;

  //console.log('addToDspList::event: ', e.target); //debug

  var id = target.id,
      pos = target.getAttribute('pos'),
      prof = target.getAttribute('prof'),
      carga = target.getAttribute('carga'),
      dsp = target.getAttribute('dsp'),
      dspcod = target.getAttribute('dspcod'),
      sigla = target.getAttribute('d-rec'),
      item = target,
      content = target.innerHTML;

  var index = findIndexOf(id);

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
    var obj = { id: id,
      dspcod: dspcod,
      pos: pos,
      prof: prof,
      carga: parseInt(carga),
      content: content,
      sigla: sigla };

    disciplinas.push(obj);

    addToList(obj);
    cargahoraria += obj.carga;
    //pesquisa th com a carga horária
    var v = document.querySelector('.dsp-list > thead > tr > th:last-child');
    v.textContent = 'Carga horária: ' + cargahoraria + 'h';
  }
  //else {// se o item ja estiver na lista, retirar caso seja clicado novamente. ( warning:verificar essa logica)
  //disciplinas.splice(index, 1);
  //item.className = '';
  //}
  // store array in local storage
  localStorage.setItem('disciplinas', JSON.stringify(disciplinas));
}

},{"./point":2,"./timetable":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Point = (function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, null, [{
    key: "distance",
    value: function distance(a, b) {
      var dx = a.x - b.x;
      var dy = a.y - b.y;

      return Math.sqrt(dx * dx + dy * dy);
    }
  }]);

  return Point;
})();

exports["default"] = Point;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

'use stric';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function TimeTable(teste, daysOfWeek, aulaHorarios) {
    var _this = this;

    //setando os dias da semana
    this.daysOfWeek = daysOfWeek;
    this.horarios = aulaHorarios;
    this.dspList = [];
    this.minhasDisciplinas = [];
    this.teste;
    this.isF = true;

    //construtor do App
    TimeTable.prototype.init = function () {
        _this.addFromList([{
            "horario": "c48",
            "turma": "MAT254",
            "periodo": "5/2016",
            "sigla": "",
            "disciplina": "vazio",
            "professor": "Lucas Lattari",
            "color": ""
        }]);
        _this.createTable();
    };

    var MyArray = function MyArray(callback) {
        var arr = [];
        arr.push = function () {
            console.log("I'M PUSHING>", arguments);

            Array.prototype.push.apply(this, arguments);
            if (typeof callback === "function") {
                // Call it, since we have confirmed it is callable​
                //this callback will call an update method to repaint the DOM
                callback();
            }
        };
        return arr;
    };

    TimeTable.prototype.callback = function () {
        console.log('sou eu callback');

        console.log('>>arr: ', _this.minhasDisciplinas);
    };

    TimeTable.prototype.addFromList = function (my_object) {
        //incializa o array que receberá as disciplina
        _this.minhasDisciplinas = new MyArray(_this.callback);

        //for temporário para adicionar várias disciplinas
        for (var x in my_object) {
            console.log('push: ', my_object[x]);
            my_object[x].color = _this.getRandomColor();
            _this.minhasDisciplinas.push(my_object[x]);
        }

        _this.dspList = _this.dspList.concat(_this.minhasDisciplinas);
        //console.log('arrpushed: ', this.dspList);
    };

    TimeTable.prototype.createTable = function () {

        //criando tablela 
        var tabela = document.createElement("table");
        tabela.setAttribute("id", "myTable");
        tabela.className = 'time-table';
        tabela.setAttribute('border', '0');
        tabela.setAttribute('cellpadding', '0');
        tabela.setAttribute('cellspacing', '0');
        document.getElementById('wrapper').appendChild(tabela);

        //criando linhas
        for (var j = 0; j < _this.horarios.length + 1; j++) {
            var line = document.createElement("tr");
            line.setAttribute("id", "myTr" + j);
            line.className = 'days';
            document.getElementById("myTable").appendChild(line);
        }
        //percorrer os dias da semana e adiconar à primeira linha, head of the table
        for (var d in _this.daysOfWeek) {
            var th = document.createElement("th");
            var cell = document.createTextNode(_this.daysOfWeek[d]);
            th.appendChild(cell);
            document.getElementById("myTr0").appendChild(th);
        }
        //cria colunas i e adiciona a Kth linha
        var lineID = 1;
        var cellID = 1;
        //percorre cada horario existente na grade de horarios e adiciona uma celula de
        //tempo para cada dia da semana.
        for (var ah = 0; ah < _this.horarios.length; ah++) {
            for (var col = 0; col < 7; col++) {
                //se for a primeira celula da linha, adicionar o horario referente
                //condição necessária pois, a primeira célula não pode ter id referente a sua posição xy.
                if (col === 0) {
                    var td = document.createElement("td");
                    var cell = document.createTextNode(_this.horarios[ah]);
                    td.appendChild(cell);
                    td.className = 'time';
                    document.getElementById("myTr" + lineID).appendChild(td);
                    //caso contrario, apenas crie celulas de tempo vazias   
                } else {
                        var td = document.createElement("td");
                        td.setAttribute("id", "c" + cellID); // setar id à célula referente à sua posição.

                        var codigo = 'c' + cellID;
                        var materia_sigla = undefined;
                        var materia_nome = undefined;

                        //verifica se ha disciplinas no array, caso haja, percorrer as displinas e adicion'alas em seus  devidos lugares
                        if (_this.dspList.length > 0) {
                            for (var a = 0; a < _this.dspList.length; a++) {
                                // console.log(codigo);
                                if (_this.dspList[a].horario === codigo && _this.dspList[a].horario !== undefined) {
                                    materia_sigla = _this.dspList[a].sigla;
                                    materia_nome = _this.dspList[a].disciplina;
                                    //console.log('>> ',materia_sigla);
                                }
                            }
                        }
                        td.setAttribute('class', 'cell');
                        td.setAttribute('data-tooltip', materia_nome ? materia_nome : ' vazio '); // caso esteja definida adicionar atributo para o bal~ao.
                        var cell = document.createTextNode(materia_sigla ? materia_sigla : ''); // caso haja materia acionar o nome, sen~ao adicionar um traço.
                        td.appendChild(cell);
                        document.getElementById("myTr" + lineID).appendChild(td);
                        cellID++;
                    }
            }
            lineID++;
        }
    };
    TimeTable.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    TimeTable.prototype.createList = function () {
        var vetor = ['asd', 'qwqe', '13123'];
        //criando tablela 
        var dspList = document.createElement("ul");

        dspList.setAttribute("id", "dsp-wrapper");

        document.getElementById('lista').appendChild(dspList);

        for (var x in _this.todasDisciplinas) {
            console.log('idd', x);
            var li = document.createElement('li');
            li.setAttribute("dsp-id", "dsp-wrapper");
            li.className = 'list-item';
            var span = document.createElement('span');
            span.setAttribute('position', _this.todasDisciplinas[x].horario);
            li.appendChild(span);
            dspList.appendChild(li);
            li.innerHTML = li.innerHTML + _this.todasDisciplinas[x].disciplina;
            //console.log('push: ', my_object[x]);
        }
    };

    this.updateTable = function () {
        //  for (var a = 0; a < this.dspList.length; a++) {
        //      console.log('log: updateTable: ', this.dspList[a].horario, this.dspList[a].sigla );

        //  }
        for (var ah = 0; ah < _this.horarios.length; ah++) {
            for (var col = 0; col < 7; col++) {
                if (_this.dspList.length > 0) {
                    console.log('len: ', _this.dspList.length);
                    for (var a = 0; a < _this.dspList.length; a++) {
                        // console.log(codigo);
                        if (_this.dspList[a].horario) {
                            var cod = _this.dspList[a].horario;
                            console.log('cod: ', cod);
                            var t = document.getElementById('c17');
                            if (t === 'c17') {
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
    };

    this.alocateDisciplina = function () {};

    this.removeDisciplina = function () {};

    this.hoveringCheck = function () {};
};

exports["default"] = TimeTable;
module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXVsZXJhbHZhcmVuZ2EvY29kZXMvMTAwLWRheXMtb2YtY29kZS9hcHAvc3JjL2FwcC5qcyIsIi9Vc2Vycy9ldWxlcmFsdmFyZW5nYS9jb2Rlcy8xMDAtZGF5cy1vZi1jb2RlL2FwcC9zcmMvcG9pbnQuanMiLCIvVXNlcnMvZXVsZXJhbHZhcmVuZ2EvY29kZXMvMTAwLWRheXMtb2YtY29kZS9hcHAvc3JjL3RpbWV0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7cUJDSWtCLFNBQVM7Ozs7eUJBQ0wsYUFBYTs7OztBQUxuQyxPQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7O0FBRXBDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEZBQTBGLENBQUMsQ0FBQzs7QUFLeEcsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDOzs7QUFHckIsSUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLElBQU0sZ0JBQWdCLEdBQUcsQ0FDVDtBQUNDLFVBQVEsRUFBQyxHQUFHO0FBQ1osV0FBUyxFQUFDLFNBQVM7QUFDbkIsVUFBUSxFQUFDLEtBQUs7QUFDZCxXQUFTLEVBQUMsWUFBWTtBQUN0QixTQUFPLEVBQUMsTUFBTTtBQUNkLGNBQVksRUFBRSxZQUFZO0FBQzFCLGFBQVcsRUFBQyxlQUFlO0FBQzNCLGlCQUFlLEVBQUcsRUFBRTtBQUNwQixpQkFBZSxFQUFHLEtBQUs7QUFDdkIsVUFBUSxFQUFFLEtBQUs7Q0FDaEIsRUFFRDtBQUNFLFVBQVEsRUFBQyxHQUFHO0FBQ1osV0FBUyxFQUFDLGVBQWU7QUFDekIsVUFBUSxFQUFDLEtBQUs7QUFDZCxXQUFTLEVBQUMsWUFBWTtBQUN0QixTQUFPLEVBQUMsY0FBYztBQUN0QixjQUFZLEVBQUUsd0NBQXdDO0FBQ3RELGFBQVcsRUFBQyxvQkFBb0I7QUFDaEMsaUJBQWUsRUFBRyxFQUFFO0FBQ3BCLGlCQUFl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QUFHLFlBQU0sRUFBRSxDQUFBO0NBQzlCLENBQUM7O3FCQUVhLFNBQVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY29uc29sZS53YXJuKFwiQk9MU09OQVJPIE1JVE8gMjAxOFwiKTtcblxuY29uc29sZS5sb2coXCJPbMOhIHZvY8OqIGVzdMOhIGN1cmlvc28gY29tbyBmdW5jaW9uYT8gUG9kZXJpYSBtZSBhanVkYXIgYSBtZWxob3JhciBhcyBwcsOzeGltYXMgdmVyc8O1ZXMhISFcIik7XG5cbmltcG9ydCBQb2ludCBmcm9tICcuL3BvaW50J1xuaW1wb3J0IFRpbWVUYWJsZSBmcm9tICcuL3RpbWV0YWJsZSdcblxubGV0IGNhcmdhaG9yYXJpYSA9IDA7XG4vLyBjb25zdCBwMSA9IG5ldyBQb2ludCg1LCA1KTtcbi8vIGNvbnN0IHAyID0gbmV3IFBvaW50KDEwLCAxMCk7XG5jb25zdCB0ZXN0ZSA9IFtdO1xuY29uc3QgdG9kYXNEaXNjaXBsaW5hcyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIFwiZHNwX2lkXCI6XCIwXCIsXG4gICAgICAgICAgICAgICAgIFwiaG9yYXJpb1wiOlwiYzI1IGMzMVwiLFxuICAgICAgICAgICAgICAgICBcImNvZGlnb1wiOlwiRENDXCIsXG4gICAgICAgICAgICAgICAgIFwicGVyaW9kb1wiOlwiT3B0YXRpdmEgSVwiLFxuICAgICAgICAgICAgICAgICBcInNpZ2xhXCI6XCJNVUxUXCIsXG4gICAgICAgICAgICAgICAgIFwiZGlzY2lwbGluYVwiOiBcIk11bHRpbcOtZGlhXCIsXG4gICAgICAgICAgICAgICAgIFwicHJvZmVzc29yXCI6XCJMdWNhcyBMYXR0YXJpXCIsXG4gICAgICAgICAgICAgICAgIFwiY2FyZ2FfaG9yYXJpYVwiIDogNjYsXG4gICAgICAgICAgICAgICAgIFwicHJlX3JlcXVpc2l0b1wiIDogXCIgLSBcIixcbiAgICAgICAgICAgICAgICAgXCJlbWVudGFcIjogXCIgLSBcIlxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBcImRzcF9pZFwiOlwiMlwiLFxuICAgICAgICAgICAgICAgICBcImhvcmFyaW9cIjpcImM0IGM1IGMxMCBjMTFcIixcbiAgICAgICAgICAgICAgICAgXCJjb2RpZ29cIjpcIkRDQ1wiLFxuICAgICAgICAgICAgICAgICBcInBlcmlvZG9cIjpcIk9wdGF0aXZhIElcIixcbiAgICAgICAgICAgICAgICAgXCJzaWdsYVwiOlwiREVTIFNJU1QgQ09NXCIsXG4gICAgICAgICAgICAgICAgIFwiZGlzY2lwbGluYVwiOiBcIkRlc2Vudm9sdmltZW50byBkZSBTaXN0ZW1hcyBDb21lcmNpYWlzXCIsXG4gICAgICAgICAgICAgICAgIFwicHJvZmVzc29yXCI6XCJXZWxsaW5ndG9uIE1vcmVpcmFcIixcbiAgICAgICAgICAgICAgICAgXCJjYXJnYV9ob3JhcmlhXCIgOiA2NixcbiAgICAgICAgICAgICAgICAgXCJwcmVfcmVxdWlzaXRvXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICBcImVtZW50YVwiOiBcIiAtIFwiXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBcImRzcF9pZFwiOlwiM1wiLFxuICAgICAgICAgICAgICAgICBcImhvcmFyaW9cIjpcImMxNiBjMTcgYzIyIGMyM1wiLFxuICAgICAgICAgICAgICAgICBcImNvZGlnb1wiOlwiTUFUXCIsXG4gICAgICAgICAgICAgICAgIFwicGVyaW9kb1wiOlwiT3B0YXRpdmFcIixcbiAgICAgICAgICAgICAgICAgXCJzaWdsYVwiOlwiVEVDIE1PRCBNQVRcIixcbiAgICAgICAgICAgICAgICAgXCJkaXNjaXBsaW5hXCI6IFwiVGVjbm9sb2dpYSBNb2RlbGFnZW0gTWF0ZW3DoXRpY2FcIixcbiAgICAgICAgICAgICAgICAgXCJwcm9mZXNzb3JcIjpcIkFsZXNzYW5kcmEgTWFydGluZ3NcIixcbiAgICAgICAgICAgICAgICAgXCJjYXJnYV9ob3JhcmlhXCIgOiA2NixcbiAgICAgICAgICAgICAgICAgXCJwcmVfcmVxdWlzaXRvXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICBcImVtZW50YVwiOiBcIkNvbXVuaWNhw6fDo28gZSBMaW5ndWFnZW0uIFNpZ25pZmljYcOnw6NvIGRhcyBQYWxhdnJhcy4gUmVkYcOnw6NvLiBDb3JyZXNwb25kw6puY2lhIGUgcmVkYcOnw6NvIFTDqWNuaWNhLiBTaW50YXhlOiBDb25jb3Jkw6JuY2lhIHZlcmJhbCBlIE5vbWluYWw7IFJlZ8OqbmNpYSwgQ3Jhc2UsIENvbG9jYcOnw6NvIGRlIHByb25vbWVzLiBPcnRvZ3JhZmlhLlwiXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBcImRzcF9pZFwiOlwiMVwiLFxuICAgICAgICAgICAgICAgICBcImhvcmFyaW9cIjpcImMzNyBjNDMgYzM5IGM0NVwiLFxuICAgICAgICAgICAgICAgICBcImNvZGlnb1wiOlwiTUFUMjU0XCIsXG4gICAgICAgICAgICAgICAgIFwicGVyaW9kb1wiOlwiMiBwZXJpb2RvXCIsXG4gICAgICAgICAgICAgICAgIFwic2lnbGFcIjpcIlRFT1ItTlwiLFxuICAgICAgICAgICAgICAgICBcImRpc2NpcGxpbmFcIjogXCJUZW9yaWEgZG9zIE7Dum1lcm9zXCIsXG4gICAgICAgICAgICAgICAgIFwicHJvZmVzc29yXCI6XCJNYXJjZWxvIE9saXZlaXJhXCIsXG4gICAgICAgICAgICAgICAgIFwiY2FyZ2FfaG9yYXJpYVwiIDogNjYsXG4gICAgICAgICAgICAgICAgIFwicHJlX3JlcXVpc2l0b1wiIDogXCJNQVQyMjNcIixcbiAgICAgICAgICAgICAgICAgXCJlbWVudGFcIjogXCJUZW9yZW1hcyBUZW9yZW1vcyBlIFRlb3JlbWFzLlwiXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBcImRzcF9pZFwiOlwiNFwiLFxuICAgICAgICAgICAgICAgICBcImhvcmFyaW9cIjpcImMzNyBjNDNcIixcbiAgICAgICAgICAgICAgICAgXCJjb2RpZ29cIjpcIkVEVTQzMlwiLFxuICAgICAgICAgICAgICAgICBcInBlcmlvZG9cIjpcIk9wdGF0aXZhXCIsXG4gICAgICAgICAgICAgICAgIFwic2lnbGFcIjpcIk1ldC4gRW5zaW5vXCIsXG4gICAgICAgICAgICAgICAgIFwiZGlzY2lwbGluYVwiOiBcIk1ldG9kb2xvZ2lhIGRlIEVuc2lub1wiLFxuICAgICAgICAgICAgICAgICBcInByb2Zlc3NvclwiOlwiU2FuZHJvXCIsXG4gICAgICAgICAgICAgICAgIFwiY2FyZ2FfaG9yYXJpYVwiIDogMzMsXG4gICAgICAgICAgICAgICAgIFwicHJlX3JlcXVpc2l0b1wiIDogXCIgLSBcIixcbiAgICAgICAgICAgICAgICAgXCJlbWVudGFcIjogXCJJbmR1w6fDo28gZSBSZWN1cnPDo287IEzDs2dpY2EgUHJvcG9zaWNpb25hbCBlIGRlIFByZWRpY2Fkb3MgKExpbmd1YWdlbSwgU2lzdGVtYXMgRGVkdXRpdm9zLCBJbnRlcnByZXRhw6fDo28gZSBNb2RlbG9zKTsgVGVvcmVtYXMgUHJpbmNpcGFpcyAoRGVkdcOnw6NvLCBDb3JyZXR1ZGUsIENvbXBsZXR1ZGUsIENvbXBhY2lkYWRlLCBTdWJzdGl0dWnDp8OjbywgRm9ybWEgTm9ybWFsIGRlIEbDs3JtdWxhcywgRm9ybWEgTm9ybWFsIGRlIFByb3Zhcyk7IERlY2lkaWJpbGlkYWRlOyBJbmNvbXBsZXR1ZGUgZG9zIFNpc3RlbWFzIEZvcm1haXMuXCJcbiAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIFwiZHNwX2lkXCI6XCI1XCIsXG4gICAgICAgICAgICAgICAgIFwiaG9yYXJpb1wiOlwiYzU1IGM2MSBjNDQgYzM4XCIsXG4gICAgICAgICAgICAgICAgIFwiY29kaWdvXCI6XCJEQ0MzMjFcIixcbiAgICAgICAgICAgICAgICAgXCJwZXJpb2RvXCI6XCJPcHRhdGl2YVwiLFxuICAgICAgICAgICAgICAgICBcInNpZ2xhXCI6XCJMUFwiLFxuICAgICAgICAgICAgICAgICBcImRpc2NpcGxpbmFcIjogXCJMaW5ndWFnZW5zIGRlIFByb2dyYW1hw6fDo29cIixcbiAgICAgICAgICAgICAgICAgXCJwcm9mZXNzb3JcIjpcIlNlcmdpb1wiLFxuICAgICAgICAgICAgICAgICBcImNhcmdhX2hvcmFyaWFcIiA6IDY2LFxuICAgICAgICAgICAgICAgICBcInByZV9yZXF1aXNpdG9cIiA6IFwiIC0gXCIsXG4gICAgICAgICAgICAgICAgIFwiZW1lbnRhXCI6IFwiSW5kdcOnw6NvIGUgUmVjdXJzw6NvOyBMw7NnaWNhIFByb3Bvc2ljaW9uYWwgZSBkZSBQcmVkaWNhZG9zIChMaW5ndWFnZW0sIFNpc3RlbWFzIERlZHV0aXZvcywgSW50ZXJwcmV0YcOnw6NvIGUgTW9kZWxvcyk7IFRlb3JlbWFzIFByaW5jaXBhaXMgKERlZHXDp8OjbywgQ29ycmV0dWRlLCBDb21wbGV0dWRlLCBDb21wYWNpZGFkZSwgU3Vic3RpdHVpw6fDo28sIEZvcm1hIE5vcm1hbCBkZSBGw7NybXVsYXMsIEZvcm1hIE5vcm1hbCBkZSBQcm92YXMpOyBEZWNpZGliaWxpZGFkZTsgSW5jb21wbGV0dWRlIGRvcyBTaXN0ZW1hcyBGb3JtYWlzLlwiXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBcImRzcF9pZFwiOlwiNlwiLFxuICAgICAgICAgICAgICAgICBcImhvcmFyaW9cIjpcImM2NyBjNzNcIixcbiAgICAgICAgICAgICAgICAgXCJjb2RpZ29cIjpcIkRDQzEyM1wiLFxuICAgICAgICAgICAgICAgICBcInBlcmlvZG9cIjpcIk9wdGF0aXZhXCIsXG4gICAgICAgICAgICAgICAgIFwic2lnbGFcIjpcIlNJXCIsXG4gICAgICAgICAgICAgICAgIFwiZGlzY2lwbGluYVwiOiBcIlNlZ3VyYW7Dp2EgZGEgSW5mb3JtYcOnw6NvXCIsXG4gICAgICAgICAgICAgICAgIFwicHJvZmVzc29yXCI6XCJGbMOhdmlvIEZyZWl0YXNcIixcbiAgICAgICAgICAgICAgICAgXCJjYXJnYV9ob3JhcmlhXCIgOiAzMyxcbiAgICAgICAgICAgICAgICAgXCJwcmVfcmVxdWlzaXRvXCIgOiBcIiAtIFwiLFxuICAgICAgICAgICAgICAgICBcImVtZW50YVwiOiBcIkluZHXDp8OjbyBlIFJlY3Vyc8OjbzsgTMOzZ2ljYSBQcm9wb3NpY2lvbmFsIGUgZGUgUHJlZGljYWRvcyAoTGluZ3VhZ2VtLCBTaXN0ZW1hcyBEZWR1dGl2b3MsIEludGVycHJldGHDp8OjbyBlIE1vZGVsb3MpOyBUZW9yZW1hcyBQcmluY2lwYWlzIChEZWR1w6fDo28sIENvcnJldHVkZSwgQ29tcGxldHVkZSwgQ29tcGFjaWRhZGUsIFN1YnN0aXR1acOnw6NvLCBGb3JtYSBOb3JtYWwgZGUgRsOzcm11bGFzLCBGb3JtYSBOb3JtYWwgZGUgUHJvdmFzKTsgRGVjaWRpYmlsaWRhZGU7IEluY29tcGxldHVkZSBkb3MgU2lzdGVtYXMgRm9ybWFpcy5cIlxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgXCJkc3BfaWRcIjpcIjdcIixcbiAgICAgICAgICAgICAgICAgXCJob3JhcmlvXCI6XCJjNCBjMTAgYzEzIGMxOVwiLFxuICAgICAgICAgICAgICAgICBcImNvZGlnb1wiOlwiTUFUMTExXCIsXG4gICAgICAgICAgICAgICAgIFwicGVyaW9kb1wiOlwiMiBwZXJpb2RvXCIsXG4gICAgICAgICAgICAgICAgIFwic2lnbGFcIjpcIkZJUzFcIixcbiAgICAgICAgICAgICAgICAgXCJkaXNjaXBsaW5hXCI6IFwiRsOtc2ljYSBJXCIsXG4gICAgICAgICAgICAgICAgIFwicHJvZmVzc29yXCI6XCIgRGFtacOjb1wiLFxuICAgICAgICAgICAgICAgICBcImNhcmdhX2hvcmFyaWFcIiA6IDY2LFxuICAgICAgICAgICAgICAgICBcInByZV9yZXF1aXNpdG9cIiA6IFwiIC0gXCIsXG4gICAgICAgICAgICAgICAgIFwiZW1lbnRhXCI6IFwiTlAtTWFpcyBvdSBNZW5vcy5cIlxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgXCJkc3BfaWRcIjpcIjhcIixcbiAgICAgICAgICAgICAgICAgXCJob3JhcmlvXCI6XCJjMTQgYzIwIGMxNiBjMjJcIixcbiAgICAgICAgICAgICAgICAgXCJjb2RpZ29cIjpcIk1BVDI1NVwiLFxuICAgICAgICAgICAgICAgICBcInBlcmlvZG9cIjpcIjIgcGVyaW9kb1wiLFxuICAgICAgICAgICAgICAgICBcInNpZ2xhXCI6XCJDQUxDIElJXCIsXG4gICAgICAgICAgICAgICAgIFwiZGlzY2lwbGluYVwiOiBcIkPDoWxjdWxvIERpZmVyw6puY2lhbCBlIEludGVncmFsIElJXCIsXG4gICAgICAgICAgICAgICAgIFwicHJvZmVzc29yXCI6XCIgTWFyY29zIEJhcnJvc1wiLFxuICAgICAgICAgICAgICAgICBcImNhcmdhX2hvcmFyaWFcIiA6IDY2LFxuICAgICAgICAgICAgICAgICBcInByZV9yZXF1aXNpdG9cIiA6IFwiTUFUMjU0XCIsXG4gICAgICAgICAgICAgICAgIFwiZW1lbnRhXCI6IFwiTlAtSEFSRC1PcHJlc3Nvci5cIlxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgXCJkc3BfaWRcIjpcIjlcIixcbiAgICAgICAgICAgICAgICAgXCJob3JhcmlvXCI6XCJjMjUgYzMxIGMyNyBjMzNcIixcbiAgICAgICAgICAgICAgICAgXCJjb2RpZ29cIjpcIkRDQzY2NlwiLFxuICAgICAgICAgICAgICAgICBcInBlcmlvZG9cIjpcIjIgcGVyaW9kb1wiLFxuICAgICAgICAgICAgICAgICBcInNpZ2xhXCI6XCJBRURTSUlcIixcbiAgICAgICAgICAgICAgICAgXCJkaXNjaXBsaW5hXCI6IFwiQWxnb3JpdG1vcyBlIEVzdHJ1dHVyYSBkZSBEYWRvcyBJSVwiLFxuICAgICAgICAgICAgICAgICBcInByb2Zlc3NvclwiOlwiIE1hdXLDrWNpb1wiLFxuICAgICAgICAgICAgICAgICBcImNhcmdhX2hvcmFyaWFcIiA6IDY2LFxuICAgICAgICAgICAgICAgICBcInByZV9yZXF1aXNpdG9cIiA6IFwiRENDMzMzXCIsXG4gICAgICAgICAgICAgICAgIFwiZW1lbnRhXCI6IFwiTlAtSEFSRC1NYWzDrWduby5cIlxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgXCJkc3BfaWRcIjpcIjEwXCIsXG4gICAgICAgICAgICAgICAgIFwiaG9yYXJpb1wiOlwiYzI2IGMzMlwiLFxuICAgICAgICAgICAgICAgICBcImNvZGlnb1wiOlwiRENDNjY2XCIsXG4gICAgICAgICAgICAgICAgIFwicGVyaW9kb1wiOlwiMiBwZXJpb2RvXCIsXG4gICAgICAgICAgICAgICAgIFwic2lnbGFcIjpcIkxBQiBQUk9HIFdFQlwiLFxuICAgICAgICAgICAgICAgICBcImRpc2NpcGxpbmFcIjogXCJMYWJvcmF0w7NyaW8gZGUgUHJvZ3JhbWHDp8OjbyBXZWJcIixcbiAgICAgICAgICAgICAgICAgXCJwcm9mZXNzb3JcIjpcIiBBbGV4IE1hY2hhZG9cIixcbiAgICAgICAgICAgICAgICAgXCJjYXJnYV9ob3JhcmlhXCIgOiA2NixcbiAgICAgICAgICAgICAgICAgXCJwcmVfcmVxdWlzaXRvXCIgOiBcIkRDQzMzM1wiLFxuICAgICAgICAgICAgICAgICBcImVtZW50YVwiOiBcIk5QLURFQk9BUy5cIlxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgXCJkc3BfaWRcIjpcIjExXCIsXG4gICAgICAgICAgICAgICAgIFwiaG9yYXJpb1wiOlwiYzI5IGMzNVwiLFxuICAgICAgICAgICAgICAgICBcImNvZGlnb1wiOlwiRENDNjY2XCIsXG4gICAgICAgICAgICAgICAgIFwicGVyaW9kb1wiOlwiMiBwZXJpb2RvXCIsXG4gICAgICAgICAgICAgICAgIFwic2lnbGFcIjpcIkxPRyBNQVRcIixcbiAgICAgICAgICAgICAgICAgXCJkaXNjaXBsaW5hXCI6IFwiTMOzZ2ljYSBNYXRlbcOhdGljYVwiLFxuICAgICAgICAgICAgICAgICBcInByb2Zlc3NvclwiOlwiIEZsw6F2aW8gRnJlaXRhc1wiLFxuICAgICAgICAgICAgICAgICBcImNhcmdhX2hvcmFyaWFcIiA6IDMzLFxuICAgICAgICAgICAgICAgICBcInByZV9yZXF1aXNpdG9cIiA6IFwiRENDMzMzXCIsXG4gICAgICAgICAgICAgICAgIFwiZW1lbnRhXCI6IFwiTlAtSEFSRC1NYWzDrWduby5cIlxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgXCJkc3BfaWRcIjpcIjEyXCIsXG4gICAgICAgICAgICAgICAgIFwiaG9yYXJpb1wiOlwiYzQxIGM0N1wiLFxuICAgICAgICAgICAgICAgICBcImNvZGlnb1wiOlwiQURNMTExXCIsXG4gICAgICAgICAgICAgICAgIFwicGVyaW9kb1wiOlwiMiBwZXJpb2RvXCIsXG4gICAgICAgICAgICAgICAgIFwic2lnbGFcIjpcIkVNUFwiLFxuICAgICAgICAgICAgICAgICBcImRpc2NpcGxpbmFcIjogXCJFbXByZWVuZGVkb3Jpc21vXCIsXG4gICAgICAgICAgICAgICAgIFwicHJvZmVzc29yXCI6XCJQZWRybyBQYXVsb1wiLFxuICAgICAgICAgICAgICAgICBcImNhcmdhX2hvcmFyaWFcIiA6IDMzLFxuICAgICAgICAgICAgICAgICBcInByZV9yZXF1aXNpdG9cIiA6IFwiQURNMDAwXCIsXG4gICAgICAgICAgICAgICAgIFwiZW1lbnRhXCI6IFwiVE9QWkVJUkFcIlxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgXCJkc3BfaWRcIjpcIjEzXCIsXG4gICAgICAgICAgICAgICAgIFwiaG9yYXJpb1wiOlwiYzQwIGM0NlwiLFxuICAgICAgICAgICAgICAgICBcImNvZGlnb1wiOlwiRURVXCIsXG4gICAgICAgICAgICAgICAgIFwicGVyaW9kb1wiOlwiMiBwZXJpb2RvXCIsXG4gICAgICAgICAgICAgICAgIFwic2lnbGFcIjpcIkVUXCIsXG4gICAgICAgICAgICAgICAgIFwiZGlzY2lwbGluYVwiOiBcIsOJdGljYVwiLFxuICAgICAgICAgICAgICAgICBcInByb2Zlc3NvclwiOlwiTmF0w6FsaWFcIixcbiAgICAgICAgICAgICAgICAgXCJjYXJnYV9ob3JhcmlhXCIgOiAzMyxcbiAgICAgICAgICAgICAgICAgXCJwcmVfcmVxdWlzaXRvXCIgOiBcIkVEVTExMVwiLFxuICAgICAgICAgICAgICAgICBcImVtZW50YVwiOiBcIlRSRVRBU1wiXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBcImRzcF9pZFwiOlwiMTRcIixcbiAgICAgICAgICAgICAgICAgXCJob3JhcmlvXCI6XCJjMzggYzQ0IGMyOCBjMzRcIixcbiAgICAgICAgICAgICAgICAgXCJjb2RpZ29cIjpcIkRDQzIyMlwiLFxuICAgICAgICAgICAgICAgICBcInBlcmlvZG9cIjpcIjEgcGVyaW9kb1wiLFxuICAgICAgICAgICAgICAgICBcInNpZ2xhXCI6XCJBRURTSVwiLFxuICAgICAgICAgICAgICAgICBcImRpc2NpcGxpbmFcIjogXCJBbGdvcml0bW9zIGUgRXN0cnV0dXJhcyBkZSBEYWRvcyBJXCIsXG4gICAgICAgICAgICAgICAgIFwicHJvZmVzc29yXCI6XCJMdWNhcyBMYXR0YXJpXCIsXG4gICAgICAgICAgICAgICAgIFwiY2FyZ2FfaG9yYXJpYVwiIDogNjYsXG4gICAgICAgICAgICAgICAgIFwicHJlX3JlcXVpc2l0b1wiIDogXCIgLSBcIixcbiAgICAgICAgICAgICAgICAgXCJlbWVudGFcIjogXCJOUC1URU5TT1wiXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICBdO1xuXG5jb25zdCBkYXlzT2ZXZWVrID0gW1wiQFwiLCBcIlNFR1wiLCBcIlRFUlwiLCBcIlFVQVwiLCBcIlFVSVwiLCBcIlNFWFwiLCBcIlNBQlwiXTsgXG5jb25zdCBtYXRyaXggPSBbXG4nU2VnIDc6MDAgLSA3OjU1JyxcbidUZXIgNzowMCAtIDc6NTUnLFxuJ1F1YSA3OjAwIC0gNzo1NScsXG4nUXVpIDc6MDAgLSA3OjU1JyxcbidTZXggNzowMCAtIDc6NTUnLFxuJ1NhYiA3OjAwIC0gNzo1NScsXG5cbidTZWcgNzo1NSAtIDg6NTAnLFxuJ1RlciA3OjU1IC0gODo1MCcsXG4nUXVhIDc6NTUgLSA4OjUwJyxcbidRdWkgNzo1NSAtIDg6NTAnLFxuJ1NleCA3OjU1IC0gODo1MCcsXG4nU2FiIDc6NTUgLSA4OjUwJyxcblxuJ1NlZyA5OjEwIC0gMTA6MDUnLFxuJ1RlciA5OjEwIC0gMTA6MDUnLFxuJ1F1YSA5OjEwIC0gMTA6MDUnLFxuJ1F1aSA5OjEwIC0gMTA6MDUnLFxuJ1NleCA5OjEwIC0gMTA6MDUnLFxuJ1NhYiA5OjEwIC0gMTA6MDUnLFxuXG4nU2VnIDEwOjA1IC0gMTE6MDAnLFxuJ1RlciAxMDowNSAtIDExOjAwJyxcbidRdWEgMTA6MDUgLSAxMTowMCcsXG4nUXVpIDEwOjA1IC0gMTE6MDAnLFxuJ1NleCAxMDowNSAtIDExOjAwJyxcbidTYWIgMTA6MDUgLSAxMTowMCcsXG5cbidTZWcgMTM6MDAgLSAxMzo1NScsXG4nVGVyIDEzOjAwIC0gMTM6NTUnLFxuJ1F1YSAxMzowMCAtIDEzOjU1JyxcbidRdWkgMTM6MDAgLSAxMzo1NScsXG4nU2V4IDEzOjAwIC0gMTM6NTUnLFxuJ1NhYiAxMzowMCAtIDEzOjU1JyxcblxuJ1NlZyAxMzo1NSAtIDE0OjUwJyxcbidUZXIgMTM6NTUgLSAxNDo1MCcsXG4nUXVhIDEzOjU1IC0gMTQ6NTAnLFxuJ1F1aSAxMzo1NSAtIDE0OjUwJyxcbidTZXggMTM6NTUgLSAxNDo1MCcsXG4nU2FiIDEzOjU1IC0gMTQ6NTAnICxcblxuJ1NlZyA3OjAwIC0gNzo1NScsXG4nVGVyIDc6MDAgLSA3OjU1JyxcbidRdWEgNzowMCAtIDc6NTUnLFxuJ1F1aSA3OjAwIC0gNzo1NScsXG4nU2V4IDc6MDAgLSA3OjU1JyxcbidTYWIgNzowMCAtIDc6NTUnLFxuXG4nU2VnIDc6MDAgLSA3OjU1JyxcbidUZXIgNzowMCAtIDc6NTUnLFxuJ1F1YSA3OjAwIC0gNzo1NScsXG4nUXVpIDc6MDAgLSA3OjU1JyxcbidTZXggNzowMCAtIDc6NTUnLFxuJ1NhYiA3OjAwIC0gNzo1NScsXG5cbidTZWcgNzowMCAtIDc6NTUnLFxuJ1RlciA3OjAwIC0gNzo1NScsXG4nUXVhIDc6MDAgLSA3OjU1JyxcbidRdWkgNzowMCAtIDc6NTUnLFxuJ1NleCA3OjAwIC0gNzo1NScsXG4nU2FiIDc6MDAgLSA3OjU1JyxcblxuJ1NlZyA3OjAwIC0gNzo1NScsXG4nVGVyIDc6MDAgLSA3OjU1JyxcbidRdWEgNzowMCAtIDc6NTUnLFxuJ1F1aSA3OjAwIC0gNzo1NScsXG4nU2V4IDc6MDAgLSA3OjU1JyxcbidTYWIgNzowMCAtIDc6NTUnLFxuXG4nU2VnIDc6MDAgLSA3OjU1JyxcbidUZXIgNzowMCAtIDc6NTUnLFxuJ1F1YSA3OjAwIC0gNzo1NScsXG4nUXVpIDc6MDAgLSA3OjU1JyxcbidTZXggNzowMCAtIDc6NTUnLFxuJ1NhYiA3OjAwIC0gNzo1NScsXG5cbidTZWcgNzowMCAtIDc6NTUnLFxuJ1RlciA3OjAwIC0gNzo1NScsXG4nUXVhIDc6MDAgLSA3OjU1JyxcbidRdWkgNzowMCAtIDc6NTUnLFxuJ1NleCA3OjAwIC0gNzo1NScsXG4nU2FiIDc6MDAgLSA3OjU1JyxcblxuJ1NlZyA3OjAwIC0gNzo1NScsXG4nVGVyIDc6MDAgLSA3OjU1JyxcbidRdWEgNzowMCAtIDc6NTUnLFxuJ1F1aSA3OjAwIC0gNzo1NScsXG4nU2V4IDc6MDAgLSA3OjU1JyxcbidTYWIgNzowMCAtIDc6NTUnLFxuXSBcbi8vQnVnIGRldGVjdGFkbywgb3MgY29kaWdvcyBkYXMgbWF0ZWlyYXMgbiBlc3RhbyBmaXhvcywgZXg6IHNlIGV1IGFkaWNpb25hciB1bSBob3JhcmlvIGFudGVzIGRhcyA3aCBwb3IgZXhlbXBsbyBvIGNvZGlnbyBjMSBcbi8vcGFzc2EgYSBzZXIgbyBob3JhcmlvIHEgZXUgYWRpb25laSBhbnRlcy5cbmNvbnN0IGhvcmFyaW9zID0gWycwNzowMCAtIDA3OjU1JywgJzc6NTUgLSAwODo1MCcsICcwOToxMCAtIDEwOjA1JyAsICcxMDowNSAtIDExOjAwJywgJzEzOjAwIC0gMTM6NTUnLCAnMTM6NTUgLSAxNDo1MCcsICcxNToxMCAtIDE2OjA1JywgJzE2OjA1IC0gMTc6MDAnLCAnMTc6MDAtIDE4OjAwJywgJzE4OjMwIC0gMTk6MjUnLCAnMTk6MjUgLSAyMDoyMCcsICcyMDozNSAtIDIxOjMwJywgJzIxOjMwIC0gMjI6MjUnXTtcbmNvbnN0IHAgPSBuZXcgVGltZVRhYmxlKHRlc3RlLCBkYXlzT2ZXZWVrLCBob3Jhcmlvcyk7XG5sZXQgZ3JvdXBlZENvbnRhY3RzID0gW107XG4vLyBjb25zb2xlLmxvZyhQb2ludC5kaXN0YW5jZShwMSwgcDIpKTtcbi8vY29uc29sZS5sb2cocC5ncmVldGluZygpLHAuaXNGcmVlKTtcbnAuaW5pdCgpO1xuLy9jb25zb2xlLmxvZyhwKTtcblxuXG5sZXQgaT0wO1xubGV0IGZyZWUgPSB0cnVlO1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICBcbiAgICAgIC8vY3JlYXRlTGlzdCgpO1xuICAgICAgY3JlYXRlR3JvdXBlZExpc3QoKTtcblxuICAgICAgbGV0IGxpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmxpc3QtaXRlbSA+IHNwYW4nKTtcblxuICAgICAgLy8gbG9vcCBwYXJhIGFkaWNpb25hciBsaXN0ZW5uZXJzIGFvcyBlbGVtZW50b3MgbGkgc2VsZWNpb25hZG9zLlxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBsaXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBnZXRBZGRyZXNzZXMsIGZhbHNlKTtcbiAgICAgICAgICBsaXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICBjbGVhclRhcmdldCwgZmFsc2UpO1xuICAgICAgICAgIGxpc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgICAgIGFkZFRvRHNwTGlzdCwgZmFsc2UpO1xuICAgICAgICAgIGxpc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgICAgIGFkZFRvQ2FsZW5kYXIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHByaW50RGlzY2lwbGluYXMoKTtcblxuICAgICAgLy8gbGV0IHYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHNwLWxpc3QgPiB0aGVhZCA+IHRyID4gdGg6bGFzdC1jaGlsZCcpO1xuICAgICAgLy8gdi50ZXh0Q29udGVudCA9IGNhcmdhaG9yYXJpYSArICdoJztcbn1cblxuY29uc3QgY29yQWxlYXRvcmlhID0gKCkgPT4ge1xuICAgIHZhciBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnO1xuICAgIHZhciBjb2xvciA9ICcjJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKyApIHtcbiAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3I7XG59XG5mdW5jdGlvbiBhZGRUb0NhbGVuZGFyKGV2ZW50KXtcblxuICAgICAgICAvLyBQb2x5ZmlsbCBTdXBwb3J0IElFNi04XG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudDtcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2FkZFRvQ2FsZW5kYXI6OmV2ZW50JywgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgXG4gICAgICAgIGxldCBvdmVybGF5RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxuICAgICAgICBcbiAgICAgICAgLy9zZSBuw6NvIGhvdXZlciBjb25mbGl0b3MsIGFkaWNpb25hciBuYSBncmFkZS5cbiAgICAgICAgaWYgKGZyZWUpe1xuXG4gICAgICAgICAgICBsZXQgZGlzICAgICAgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkLXJlYycpLFxuICAgICAgICAgICAgICAgIHByb2YgICAgID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgncHJvZicpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQgID0gdGFyZ2V0LmlubmVySFRNTDtcblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYWRkVG9DYWxlbmRhcjo6ZGlzJywgZGlzKTtcbiAgICAgICAgICAgIC8vdmFyIGRpcyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2QtcmVjJyk7IC8vIG5vbWUgZGEgZGlzY2lwbGluYSBcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZGlzKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZnJlZSk7XG5cbiAgICAgICAgICAgIGxldCBwb3MgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdwb3MnKTtcblxuICAgICAgICAgICAgLy8gc2VwYXJhIG9zIGhvcsOhcmlvcyBlIGNvbG9jYSBlbSB1bSBhcnJheS5cbiAgICAgICAgICAgIGxldCBhZGRyID0gcG9zLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICAgICAgLy8gcGVyY29ycmUgYSBsaXN0YSBkZSBob3JhcmlvcyBlIHBhcmEgY2FkYSBlbGVtZW50byB2ZXJpZmljYSBxdWFsIG8gc3RhdHVzIGRhIGRpc2NpcGxpbmFcbiAgICAgICAgICAgIGFkZHIuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICAgICAgICAgICAgICAgIGxldCBhbHZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCk7XG5cblxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImFkZFRvQ2FsZW5kYXI6OmFsdm86IFwiLCBhbHZvLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgIC8vIHZlcmlmaWNhIGNhZGEgZGlzY2lwbGluYSwgc2UgdmF6aWFcbiAgICAgICAgICAgICAgICAgIGlmKGFsdm8udGV4dENvbnRlbnQgPT09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICBhbHZvLnRleHRDb250ZW50ID0gZGlzOyAgXG4gICAgICAgICAgICAgICAgICAgICAgYWx2by5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcsIGNvbnRlbnQgKyAnIC0gJyArIHByb2YpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIHNldGEgY29yIGRlIGZ1bmRvLiBGdXR1cmFtZW50ZSBzZXRhciBjb3JlcyBhbGVhdMOzcmlhc1xuICAgICAgICAgICAgICAgICAgICAgIGFsdm8uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDE3NiwgMjEyLCAyMjIsLjQpJzsgXG4gICAgICAgICAgICAgICAgICAgICAgLy9mcmVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgICAgICAvLyAvL215RnVuY3Rpb24oYXJyWzBdKTtcbiAgICAgICAgICAgIC8vIC8vIGFkaWNpb25hIGRpc2NpcGxpbmEgbmEgZ3JhZGVcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGFkZHIpLnRleHRDb250ZW50ID0gZGlzOyAgXG4gICAgICAgICAgICAgLy8gc2V0YSBjb3IgZGUgZnVuZG8uIEZ1dHVyYW1lbnRlIHNldGFyIGNvcmVzIGFsZWF0w7NyaWFzXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgb3ZlcmxheURpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgLy8gdG9ybmFyIHZpc2l2ZWwgbWVuc2FnZW0gZGUgc3VjZXNzb1xuICAgICAgICAgICAgb3ZlcmxheURpdi5pbm5lckhUTUwgPSAnPHN0cm9uZz5BZGljaW9uYWRvIGNvbSBzdWNlc3NvITwvc3Ryb25nPic7IC8vIGFkaWNpb25hciBtZW5zYWdlbSBkZSBzdWNlc3NvXG4gICAgICAgICAgICBvdmVybGF5RGl2LnN0eWxlLmJhY2tncm91bmQgPSAnIzRjYWY1MCc7IC8vIHNldGFyIGNvci5cbiAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBjb2xvciBhZnRlciBhIHNtYWxsIGFtb3VudCBvZiB0aW1lXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIC8vIGNhc2EgaGFqYSBhbGd1bSBjb25mbGl0bywgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIG92ZXJsYXlEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7IC8vIHRvcm5hciB2aXNpdmVsIG1lbnNhZ2VtIGRlIGVycm9cbiAgICAgICAgICAgIG92ZXJsYXlEaXYuaW5uZXJIVE1MID0gJzxzdHJvbmc+T2ggc25hcCEgQ29uZmxpdG88L3N0cm9uZz4gZGUgSG9yw6FyaW9zISc7IC8vIGFkaWNpb25hciBtZW5zYWdlbSBkZSBlcnJvXG4gICAgICAgICAgICBvdmVybGF5RGl2LnN0eWxlLmJhY2tncm91bmQgPSAnI2U1MWMyMyc7IC8vIHNldGFyIGNvci5cbiAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBjb2xvciBhZnRlciBhIHNtYWxsIGFtb3VudCBvZiB0aW1lXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG92ZXJsYXlEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH0sIDEyMDApO1xuICAgICAgICB9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdCgpe1xuICAgICAgICAvL2NyaWFuZG8gbGlzdGFcbiAgICAgICAgbGV0IGRzcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGRzcExpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkc3Atd3JhcHBlclwiKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RhJykuYXBwZW5kQ2hpbGQoZHNwTGlzdCk7XG5cbiAgICAgICBmb3IgKCBsZXQgeCBpbiB0b2Rhc0Rpc2NpcGxpbmFzKXtcbiAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCAnbGluZS0nICsgeFtpXSk7XG4gICAgICAgICAgICAgICAgbGkuY2xhc3NOYW1lID0gJ2xpc3QtaXRlbSc7XG4gICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgnaWQnLHRvZGFzRGlzY2lwbGluYXNbeF0uZHNwX2lkKTtcbiAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgncG9zJywgdG9kYXNEaXNjaXBsaW5hc1t4XS5ob3JhcmlvKTtcbiAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgnY2FyZ2EnLCB0b2Rhc0Rpc2NpcGxpbmFzW3hdLmNhcmdhX2hvcmFyaWEpO1xuICAgICAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdkc3Bjb2QnLCB0b2Rhc0Rpc2NpcGxpbmFzW3hdLmNvZGlnbyk7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ3Byb2YnLCB0b2Rhc0Rpc2NpcGxpbmFzW3hdLnByb2Zlc3Nvcik7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ2QtcmVjJywgdG9kYXNEaXNjaXBsaW5hc1t4XS5zaWdsYSk7XG4gICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ3BlcmlvZG8nLCB0b2Rhc0Rpc2NpcGxpbmFzW3hdLnBlcmlvZG8pO1xuICAgICAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdyZXEnLCB0b2Rhc0Rpc2NpcGxpbmFzW3hdLnByZV9yZXF1aXNpdG8pO1xuICAgICAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdlbWVudGEnLCB0b2Rhc0Rpc2NpcGxpbmFzW3hdLmVtZW50YSk7XG4gICAgICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBzcGFuLmlubmVySFRNTCArIHRvZGFzRGlzY2lwbGluYXNbeF0uZGlzY2lwbGluYTtcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgICAgICAgICBkc3BMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdwdXNoOiAnLCBteV9vYmplY3RbeF0pO1xuICAgICAgIH1cbn1cblxuZnVuY3Rpb24gZ3JvdXBJdGVtcyhpdGVtcyl7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW1zLnBlcmlvZG8pO1xuXG4gICAgICAvL29yZGVuYSBlbSBvcmRlbSBjcmVzY2VudGVcbiAgICAgIGxldCBzb3J0ZWRDb250YWN0cyA9IGl0ZW1zLnNvcnQoKGEsYikgPT4ge1xuICAgICAgICBcbiAgICAgICAgICBpZiAoYS5wZXJpb2RvID4gYi5wZXJpb2RvKSB7XG4gICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYS5wZXJpb2RvIDwgYi5wZXJpb2RvKSB7XG4gICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gYSBtdXN0IGJlIGVxdWFsIHRvIGJcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICBcblxuICAgICAgfSk7XG5cbiAgICAgIFxuXG4gICAgICBsZXQgY3VycmVudExldHRlciA9IGZhbHNlOyAgICAgICAgIFxuICAgICAgbGV0IGN1cnJlbnRDb250YWN0cyA9IFtdO1xuXG4gICAgICBjb25zb2xlLmxvZygnc29ydGVkOiAnLCBzb3J0ZWRDb250YWN0cyk7XG5cbiAgICAgIHNvcnRlZENvbnRhY3RzLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgXG4gICAgICAgICAgICAgICAgICBpZih2YWx1ZS5wZXJpb2RvLmNoYXJBdCgwKSAhPSBjdXJyZW50TGV0dGVyKXtcblxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRMZXR0ZXIgPSB2YWx1ZS5wZXJpb2RvLmNoYXJBdCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0dyb3VwID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2RvOiB2YWx1ZS5wZXJpb2RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNjaXBsaW5hczogW11cbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbnRhY3RzID0gbmV3R3JvdXAuZGlzY2lwbGluYXM7XG4gICAgICAgICAgICAgICAgICAgICAgZ3JvdXBlZENvbnRhY3RzLnB1c2gobmV3R3JvdXApO1xuICAgICAgXG4gICAgICAgICAgICAgICAgICB9IFxuICAgICAgXG4gICAgICAgICAgICAgICAgICBjdXJyZW50Q29udGFjdHMucHVzaChpdGVtc1tpbmRleF0pO1xuICAgICAgXG4gICAgICAgIH0pO1xuXG59XG5mdW5jdGlvbiBjcmVhdGVHcm91cGVkTGlzdCgpe1xuXG4gICAgICBncm91cEl0ZW1zKHRvZGFzRGlzY2lwbGluYXMpO1xuXG4gICAgICBsZXQgZHNwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgIGRzcExpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkc3Atd3JhcHBlclwiKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0YScpLmFwcGVuZENoaWxkKGRzcExpc3QpO1xuXG4gICAgICBmb3IobGV0IHggaW4gZ3JvdXBlZENvbnRhY3RzKXtcblxuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsaS5jbGFzc05hbWUgPSAnbGlzdC1oZWFkJztcblxuICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gc3Bhbi5pbm5lckhUTUwgKyBncm91cGVkQ29udGFjdHNbeF0ucGVyaW9kbztcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgZHNwTGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBncm91cGVkQ29udGFjdHNbeF0uZGlzY2lwbGluYXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgJ2xpbmUtJyArIHhbaV0pO1xuICAgICAgICAgICAgICAgICAgICBsaS5jbGFzc05hbWUgPSAnbGlzdC1pdGVtJztcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ2lkJyxpdGVtLmRzcF9pZCk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdwb3MnLCBpdGVtLmhvcmFyaW8pO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgnY2FyZ2EnLCBpdGVtLmNhcmdhX2hvcmFyaWEpO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgnZHNwY29kJywgaXRlbS5jb2RpZ28pO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgncHJvZicsIGl0ZW0ucHJvZmVzc29yKTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ2QtcmVjJywgaXRlbS5zaWdsYSk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdwZXJpb2RvJywgaXRlbS5wZXJpb2RvKTtcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5zZXRBdHRyaWJ1dGUoJ3JlcScsIGl0ZW0ucHJlX3JlcXVpc2l0byk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uc2V0QXR0cmlidXRlKCdlbWVudGEnLCBpdGVtLmVtZW50YSk7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gc3Bhbi5pbm5lckhUTUwgKyBpdGVtLmRpc2NpcGxpbmE7XG4gICAgICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgICAgICAgICBkc3BMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFyVGFyZ2V0KGV2KXtcblxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IFxuXG4gICAgLy9jb25zb2xlLmxvZyhcIm1vdXNlb3V0XCIpO1xuICAgIFxuICAgIGZyZWUgPSB0cnVlOyAvLyBxdWFuZG8gcmV0aXJhciBvIG1vdXNlIHZvbHRhciBhbyBlc3RhZG8gMDtcblxuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuXG4gICAgbGV0IGRpc2NpcGxpbmEgPSBcIjxoNT5cIiArIFwiTmVuaHVtYSBJbmZvcm1hw6fDo28gYXTDqSBhZ29yYVwiICsgXCI8L2g1PjxwPlBhc3NlIG8gbW91c2Ugc29icmUgYSBsaXN0YSBkZSBkaXNjaXBsaW5hcy48L3A+XCI7XG4gICAgaW5mby5pbm5lckhUTUwgPSBkaXNjaXBsaW5hIDtcblxuICAgIGxldCBwb3MgPSBldi50YXJnZXQuZ2V0QXR0cmlidXRlKCdwb3MnKTtcbiAgICBsZXQgYWRkciA9IHBvcy50cmltKCkuc3BsaXQoXCIgXCIpO1xuXG4gICAgLy8gcGVyY29ycmUgY2FkYSBob3JhcmlvIGRhIGRpc2NpcGxpbmEgZSByZW1vdmUgYXMgY2xhc3Nlcy5cbiAgICBhZGRyLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIGFsdm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KS5jbGFzc05hbWUgPVxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KS5jbGFzc05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCcoPzpefFxcXFxzKScgKyAnY29yVmVybWVsaGF8Y29yVmVyZGUnICsgJyg/OlxcXFxzfCQpJyksICcgJyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEFkZHJlc3NlcyggZXZlbnQgKSB7XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coXCJtb3VzZW92ZXJcIik7XG4gICAgXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgIC8vIHByZXZlbnQgdGhlIGRlZmF1bHQgRW50ZXIncyBhY3Rpb25cblxuICAgLy8gY29uc29sZS53YXJuKCdnZXRBZGRyZXNzZXM6OmZuOiAnLGV2ZW50LnRhcmdldC5pbm5lckhUTUwpO1xuICAgIFxuICAgIGxldCBpbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmZvXCIpO1xuXG4gICAgbGV0IGRpc2NpcGxpbmEgPSBcIjxoNT5cIiArIGV2ZW50LnRhcmdldC5pbm5lckhUTUwgKyBcIjwvaDU+XCI7XG4gICAgbGV0IHBlcmlvZG8gPSBcIjxoNj5cIiArIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3BlcmlvZG8nKSArIFwiPC9oNj5cIjtcbiAgICBsZXQgcHJvZmVzc29yICA9IFwiPGg2IGNsYXNzPSdwcm9mLWJvcmRhJz5Qcm9mOiBcIiArIGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwcm9mXCIpICsgXCI8L2g2PjxiPkVtZW50YTogPC9iPlwiO1xuICAgIGluZm8uaW5uZXJIVE1MID0gZGlzY2lwbGluYSArIHBlcmlvZG8gKyBwcm9mZXNzb3IgKyBcIjxwPlwiICsgZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImVtZW50YVwiKSArIFwiPC9wPlwiO1xuXG4gICAgLy9wZWdhIG8gYXR0ciBwb3NpdGlvbiBwYXJhIHZlcmlmaWNhciBxdWFpcyBob3JhcmlvcyBhIGRpc2NpcGxpbmEgZXN0w6EuXG4gICAgbGV0IHBvcyA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3BvcycpO1xuICAgIC8vY29uc29sZS5sb2coJ3BvcycsIHBvcyk7XG5cbiAgICAvLyBzZXBhcmEgb3MgaG9yw6FyaW9zIGUgY29sb2NhIGVtIHVtIGFycmF5LlxuICAgIGxldCBhZGRyID0gcG9zLnRyaW0oKS5zcGxpdChcIiBcIik7XG4gICAgLy9jb25zb2xlLmxvZygnYWRkcjogJywgYWRkcik7XG5cbiAgICAvLyBwZXJjb3JyZSBhIGxpc3RhIGRlIGhvcmFyaW9zIGUgcGFyYSBjYWRhIGVsZW1lbnRvIHZlcmlmaWNhIHF1YWwgbyBzdGF0dXMgZGEgZGlzY2lwbGluYVxuICAgIGFkZHIuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICAgLy8gY29uc29sZS5sb2coJ2dldEFkZHJlc3Nlczo6Zm9yRWFjaDpmcmVlICcsZnJlZSk7XG4gICAgIC8vIGNvbnNvbGUubG9nKCdnZXRBZGRyZXNzZXM6OmZvckVhY2g6ZWxlICcsZWxlbWVudCk7XG4gICAgICBsZXQgYWx2byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQpO1xuXG4gICAgICAvLyB2ZXJpZmljYSBjYWRhIGRpc2NpcGxpbmEsIHNlIHZhemlhXG4gICAgICBpZihhbHZvLnRleHRDb250ZW50ID09PSAnJyl7XG4gICAgICAgIGFsdm8uY2xhc3NOYW1lICs9IFwiIGNvclZlcmRlXCI7IC8vIGFkaWNpb25hIGEgY2xhc3NlIHZlcmRlXG4gICAgICAgIGZyZWUgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9ZWxzZXtcbiAgICAgICAgZnJlZSA9IGZhbHNlO1xuICAgICAgICBhbHZvLmNsYXNzTmFtZSArPSBcIiBjb3JWZXJtZWxoYVwiOyAvLyBhZGljaW9uYSBhIGNsYXNzZSB2ZXJtZWxoYVxuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZygnZ2V0QWRkcmVzc2VzOjpmb3JFYWNoOmZyZWUgJyxmcmVlKTtcblxuICAgIH0pO1xuXG59XG5cbi8vIGdldCBkaXNwbCBmcm9tIGxvY2FsIHN0b3JhZ2Ugb3IgZW1wdHkgYXJyYXlcbmxldCBkaXNjaXBsaW5hcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rpc2NpcGxpbmFzJykpIHx8IFtdO1xuXG5mdW5jdGlvbiBwcmludERpc2NpcGxpbmFzKCl7XG5cbiAgICAgICAgZGlzY2lwbGluYXMuZm9yRWFjaChmdW5jdGlvbihlKXtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgYWRkciA9IGUucG9zLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBwZXJjb3JyZSBhIGxpc3RhIGRlIGhvcmFyaW9zIGUgcGFyYSBjYWRhIGVsZW1lbnRvIFxuICAgICAgICAgICAgICAgICAgICAvLyB2ZXJpZmljYSBxdWFsIG8gc3RhdHVzIGRhIGRpc2NpcGxpbmFcbiAgICAgICAgICAgICAgICAgICAgYWRkci5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgIGxldCBhbHZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgLy8gdmVyaWZpY2EgY2FkYSBkaXNjaXBsaW5hLCBzZSB2YXppYVxuICAgICAgICAgICAgICAgICAgICAgIGlmKGFsdm8udGV4dENvbnRlbnQgPT09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx2by50ZXh0Q29udGVudCA9IGUuc2lnbGE7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx2by5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcsIGUuY29udGVudCArICcgLSAnICsgZS5wcm9mKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0YSBjb3IgZGUgZnVuZG8uIEZ1dHVyYW1lbnRlIHNldGFyIGNvcmVzIGFsZWF0w7NyaWFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdm8uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDE3NiwgMjEyLCAyMjIsLjQpJzsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vY3JpYSBsaW5oYVxuICAgICAgICAgICAgICAgICAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgICAgICAgICAgICAgIHRyLnNldEF0dHJpYnV0ZSgnaWQnLCAndHItJyArIGUuaWQpO1xuICAgICAgICAgICAgICAgICAgICAvL3RyLmNsYXNzTmFtZSA9ICdzdWNjZXNzJztcbiAgICAgICAgICAgICAgICAgICAgLy9sZXQgdGQwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgICAgICAgICAvL2xldCBjZWxsMCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUuaWQpO1xuICAgICAgICAgICAgICAgICAgICAvL3RkMS5hcHBlbmRDaGlsZChjZWxsMCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUuZHNwY29kKTtcbiAgICAgICAgICAgICAgICAgICAgdGQxLmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGQyLmFwcGVuZENoaWxkKGNlbGwyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwzID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZS5wcm9mKTtcbiAgICAgICAgICAgICAgICAgICAgdGQzLmFwcGVuZENoaWxkKGNlbGwzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGw0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJzU6MDAtNjowMCcpO1xuICAgICAgICAgICAgICAgICAgICB0ZDQuYXBwZW5kQ2hpbGQoY2VsbDQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbDUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlLmNhcmdhKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXJnYWhvcmFyaWEgKz0gcGFyc2VJbnQoZS5jYXJnYSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRzcC1saXN0ID4gdGhlYWQgPiB0ciA+IHRoOmxhc3QtY2hpbGQnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsb3IudGV4dENvbnRlbnQgPSAnQ2FyZ2EgSG9yw6FyaWE6ICcgKyBjYXJnYWhvcmFyaWEgKyAnaCc7XG5cbiAgICAgICAgICAgICAgICAgICAgdGQ1LmFwcGVuZENoaWxkKGNlbGw1KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGQ2LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgICAgICAgICAgICAgdGQ2LnNldEF0dHJpYnV0ZSgnaWQnLCBlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgdGQ2LnNldEF0dHJpYnV0ZSgncG9zJywgZS5wb3MpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRkNi5hcHBlbmRDaGlsZChjZWxsNik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQzKTtcbiAgICAgICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQ0KTtcbiAgICAgICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQ1KTtcbiAgICAgICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQ2KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVtb3ZlRHNwRnJvbUxvY2FsU3RvcmFnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBsdWdhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlLnRhYmxlLnRhYmxlLXN0cmlwZWQudGFibGUtaG92ZXIuZHNwLWxpc3QgdGJvZHknKTtcbiAgICAgICAgICAgICAgICAgICAgbHVnYXIuYXBwZW5kQ2hpbGQodHIpO1xuICAgICAgfSk7XG59XG5cblxuZnVuY3Rpb24gYWRkVG9MaXN0KGUpIHtcbiAgICAgICAgICAvL2NyaWEgbGluaGFcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgICAgICAgICAgICB0ci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RyLScgKyBlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgLy90ci5jbGFzc05hbWUgPSAnc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsMSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUuZHNwY29kKTtcbiAgICAgICAgICAgICAgICAgICAgdGQxLmFwcGVuZENoaWxkKGNlbGwxKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwyID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGQyLmFwcGVuZENoaWxkKGNlbGwyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwzID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZS5wcm9mKTtcbiAgICAgICAgICAgICAgICAgICAgdGQzLmFwcGVuZENoaWxkKGNlbGwzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGw0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJzU6MDAtNjowMCcpO1xuICAgICAgICAgICAgICAgICAgICB0ZDQuYXBwZW5kQ2hpbGQoY2VsbDQpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbDUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlLmNhcmdhKTtcbiAgICAgICAgICAgICAgICAgICAgdGQ1LmFwcGVuZENoaWxkKGNlbGw1KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGQ2LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcbiAgICAgICAgICAgICAgICAgICAgdGQ2LnNldEF0dHJpYnV0ZSgnaWQnLCBlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgdGQ2LnNldEF0dHJpYnV0ZSgncG9zJywgZS5wb3MpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2VsbDYgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRkNi5hcHBlbmRDaGlsZChjZWxsNik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQxKTtcbiAgICAgICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQyKTtcbiAgICAgICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQzKTtcbiAgICAgICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQ0KTtcbiAgICAgICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQ1KTtcbiAgICAgICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQ2KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycscmVtb3ZlRHNwRnJvbUxvY2FsU3RvcmFnZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxldCBsdWdhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlLnRhYmxlLnRhYmxlLXN0cmlwZWQudGFibGUtaG92ZXIuZHNwLWxpc3QgdGJvZHknKTtcbiAgICAgICAgICAgICAgICAgICAgbHVnYXIuYXBwZW5kQ2hpbGQodHIpO1xufVxuLypcbiogQHBhcmFtcyAtIGlkXG4qIHZhcnJlIGxvY2Fsc3RvcmFnZSBlIHByb2N1cmEgcG9yIElEIGRhIGRpc2NpcGxpbmFcbiogc2UgZW5jb250cmFyIHJldG9ybmEgYSBwb3MsIHNlbsOjbyByZXRvcm5hIC0xXG4qL1xuZnVuY3Rpb24gZmluZEluZGV4T2YoaWQpIHtcbiAgICAgICAgXG4gICAgICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IGRpc2NpcGxpbmFzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgaWYgKGRpc2NpcGxpbmFzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbn1cbi8qXG4qIEBwYXJhbXMgLSBpZFxuKiBFc3NhIGZ1bsOnw6NvIHJlY2ViZSBvIGlkIGNvbW8gcGFyYW1ldHJvIGUgcmVtb3ZlIHVtIGl0ZW0gXG4qIGRhIGxpc3RhIGRlIGRpc2NpcGxpbmFzLiBcbiovXG5mdW5jdGlvbiByZW1vdmVMaW5oYUJ5SWQoaWQpIHtcbiAgICAgICAgICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgICAgICAgIC8vY29uc29sZS53YXJuKGZpbmRJbmRleE9mKGlkKSk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygncmVtb3ZlcjogJywgZWxlbSk7XG4gICAgICAgICAgY2FyZ2Fob3JhcmlhIC09IHBhcnNlSW50KGVsZW0uY2hpbGRyZW5bNF0uaW5uZXJUZXh0KTtcbiAgICAgICAgICBsZXQgdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kc3AtbGlzdCA+IHRoZWFkID4gdHIgPiB0aDpsYXN0LWNoaWxkJyk7XG4gICAgICAgICAgdi50ZXh0Q29udGVudCA9ICdDYXJnYSBIb3LDoXJpYTogJyArIGNhcmdhaG9yYXJpYSArICdoJztcbiAgICAgICAgICByZXR1cm4gZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuXG5cbn1cbi8qXG4qIEBwYXJhbXMgLSBldmVudFxuKiBFc3NhIGZ1bsOnw6NvIHJlY2ViZSBldmVudG8gZG8gZWxlbWVudG8gY2xpY2FkbywgZXh0cmFpIG8gaWQgZGEgZGlzY2lwbGluYVxuKiBlbmNvbnRyYS1vIG5vIGxvY2FsU3RvcmFnZSBzZSBwb3Nzw612ZWwgZSByZXRpcmEtbyBkYSBsaXN0YSBkZSBkaXNjaXBsaW5hcy5cbiovXG5mdW5jdGlvbiByZW1vdmVEc3BGcm9tTG9jYWxTdG9yYWdlKGUpe1xuICAgICAgICAgIC8vIFBvbHlmaWxsIFN1cHBvcnQgSUU2LThcbiAgICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmUnLCB0YXJnZXQpOyAgLy8gZGVidWdcblxuICAgICAgICAgIC8vIHJldG9ybmEgLTEgY2FzbyBuw6NvIGVuY29udHJlLCBjYXNvIGNvbnRyw6FyaW8gcmV0b3JuYSBvIGlkIGRhIGRpc2NpcGxpbmFcbiAgICAgICAgICBsZXQgaW5kZXggPSBmaW5kSW5kZXhPZih0YXJnZXQuaWQpOyBcbiAgICAgICAgICBcbiAgICAgICAgICBsZXQgcG9zaXRpb24gPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdwb3MnKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoIXRhcmdldC5pZCkgcmV0dXJuOyAvLyBzaG91bGQnbiBoYXBwZW5cblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYW50ZXMnLCBkaXNjaXBsaW5hcyk7ICAvLyBkZWJ1Z1xuICAgICAgICAgICAgLy9yZXRpcmEgZGlzY2lwbGluYSBkbyBhcnJheSB0ZW1wb3LDoXJpb1xuICAgICAgICAgICAgZGlzY2lwbGluYXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIC8vYXR1YWxpemEgbG9jYWxTdG9yYWdlXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGlzY2lwbGluYXMnLEpTT04uc3RyaW5naWZ5KGRpc2NpcGxpbmFzKSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdkZXBvaXMnLCBkaXNjaXBsaW5hcyk7IC8vIGRlYnVnXG4gICAgICAgICAgICByZW1vdmVMaW5oYUJ5SWQoXCJ0ci1cIiArIHRhcmdldC5pZCk7XG5cbiAgICAgICAgICAgIC8vIHNlcGFyYSBvcyBob3LDoXJpb3MgZSBjb2xvY2EgZW0gdW0gYXJyYXkuXG4gICAgICAgICAgICBsZXQgYWRkciA9IHBvc2l0aW9uLnNwbGl0KFwiIFwiKTtcblxuICAgICAgICAgICAgLy8gcGVyY29ycmUgYSBsaXN0YSBkZSBob3JhcmlvcyBlIHBhcmEgY2FkYSBlbGVtZW50byB2ZXJpZmljYSBxdWFsIG8gc3RhdHVzIGRhIGRpc2NpcGxpbmFcbiAgICAgICAgICAgIGFkZHIuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG5cbiAgICAgICAgICAgICAgICAgIGxldCBhbHZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIHZlcmlmaWNhIGNhZGEgcG9zacOnw6NvIGNvcnJlc3BvbmRlbnRlIG7Do28gZXN0w6EgdmF6aWEgbm8gY2FsZW5kw6FyaW8sIFxuICAgICAgICAgICAgICAgICAgLy8gY2FzbyBlc3RlamEgc2V0YSBwYXJhIHZhemlvXG4gICAgICAgICAgICAgICAgICBpZihhbHZvLnRleHRDb250ZW50ICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgICAgYWx2by50ZXh0Q29udGVudCA9ICcnOyAgXG4gICAgICAgICAgICAgICAgICAgICAgYWx2by5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcsICcgdmF6aW8gJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAvLyB0b3JuYXIgY29yIHRyYW5zcGFyZW50ZVxuICAgICAgICAgICAgICAgICAgICAgIGFsdm8uc3R5bGUuYmFja2dyb3VuZCA9ICdyZ2JhKDE3NiwgMjEyLCAyMjIsMCknOyBcbiAgICAgICAgICAgICAgICAgICAgICAvL2ZyZWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICBcbn1cbi8qXG4qIEBwYXJhbXMgLSBldmVudFxuKiBFc3NhIGZ1bsOnw6NvIMOpIGNoYW1hZGEgY29tIG8gZXZlbnRvIGNsaWNrLiBPIGxpc3RlbmVyIGNhcHR1cmEgb3MgYXRyaWJ1dG9zIGRhIGxpc3RhIHF1YW5kbyBjbGljYWRhLlxuKiBcbiovXG5mdW5jdGlvbiBhZGRUb0RzcExpc3QoZSl7XG5cbiAgICAgICAgLy8gU3VwcG9ydCBJRTYtOFxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQgfHwgZS5zcmNFbGVtZW50O1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2FkZFRvRHNwTGlzdDo6ZXZlbnQ6ICcsIGUudGFyZ2V0KTsgLy9kZWJ1Z1xuXG4gICAgICAgIGxldCBpZCAgICAgICA9IHRhcmdldC5pZCxcbiAgICAgICAgICAgIHBvcyAgICAgID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgncG9zJyksXG4gICAgICAgICAgICBwcm9mICAgICA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ3Byb2YnKSxcbiAgICAgICAgICAgIGNhcmdhICAgID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnY2FyZ2EnKSxcbiAgICAgICAgICAgIGRzcCAgICAgID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnZHNwJyksXG4gICAgICAgICAgICBkc3Bjb2QgICA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RzcGNvZCcpLFxuICAgICAgICAgICAgc2lnbGEgICAgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCdkLXJlYycpLFxuICAgICAgICAgICAgaXRlbSAgICAgPSB0YXJnZXQsXG4gICAgICAgICAgICBjb250ZW50ICA9IHRhcmdldC5pbm5lckhUTUw7XG5cbiAgICAgICAgICAgIGxldCBpbmRleCA9IGZpbmRJbmRleE9mKGlkKTtcblxuICAgICAgICAgICAvL2NvbnNvbGUuZXJyb3IoJ2RzcGNvZCcsZHNwY29kKTsgLy9kZWJ1Z1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkaXNjaXBsaW5hOiAnLHRhcmdldC5pbm5lckhUTUwpOyAvL2RlYnVnXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Bvc2l0aW9uJyxwb3MpOyAvL2RlYnVnXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2l0ZW0nLGl0ZW0pOyAvL2RlYnVnXG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnaW5kZXgnLGluZGV4KTsgLy9kZWJ1Z1xuXG4gICAgICAgICAgLy8gcmV0dXJuIGlmIHRhcmdldCBkb2Vzbid0IGhhdmUgYW4gaWQgKHNob3VsZG4ndCBoYXBwZW4pXG4gICAgICAgICAgaWYgKCFpZCkgcmV0dXJuO1xuICAgICAgICAgIC8vIGl0ZW0gaXMgbm90IGZhdm9yaXRlIGFuZCBpcyBub3QgaW4gdGhlIHRhYmxlXG4gICAgICAgICAgaWYgKGluZGV4ID09IC0xICYmIGZyZWUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vb2JqZXRvIGEgc2VyIGFkaWNpb25hZG8gbmEgbGlzdGEgZGUgZGlzY2lwbGluYXNcbiAgICAgICAgICAgICAgbGV0IG9iaiA9IHtpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgZHNwY29kOiBkc3Bjb2QsIFxuICAgICAgICAgICAgICAgICAgICAgICAgIHBvczogcG9zLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICBwcm9mOiBwcm9mLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmdhOiBwYXJzZUludChjYXJnYSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICBzaWdsYTogc2lnbGF9O1xuXG4gICAgICAgICAgICAgIGRpc2NpcGxpbmFzLnB1c2gob2JqKTtcblxuICAgICAgICAgICAgICBhZGRUb0xpc3Qob2JqKTtcbiAgICAgICAgICAgICAgY2FyZ2Fob3JhcmlhICs9IG9iai5jYXJnYTtcbiAgICAgICAgICAgICAgLy9wZXNxdWlzYSB0aCBjb20gYSBjYXJnYSBob3LDoXJpYVxuICAgICAgICAgICAgICBsZXQgdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kc3AtbGlzdCA+IHRoZWFkID4gdHIgPiB0aDpsYXN0LWNoaWxkJyk7XG4gICAgICAgICAgICAgIHYudGV4dENvbnRlbnQgPSAnQ2FyZ2EgaG9yw6FyaWE6ICcgKyBjYXJnYWhvcmFyaWEgKyAnaCc7XG4gICAgICAgICAgXG4gICAgICAgICAgfSBcbiAgICAgICAgICAvL2Vsc2Ugey8vIHNlIG8gaXRlbSBqYSBlc3RpdmVyIG5hIGxpc3RhLCByZXRpcmFyIGNhc28gc2VqYSBjbGljYWRvIG5vdmFtZW50ZS4gKCB3YXJuaW5nOnZlcmlmaWNhciBlc3NhIGxvZ2ljYSlcbiAgICAgICAgICAgIC8vZGlzY2lwbGluYXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIC8vaXRlbS5jbGFzc05hbWUgPSAnJztcbiAgICAgICAgICAvL31cbiAgICAgICAgICAvLyBzdG9yZSBhcnJheSBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rpc2NpcGxpbmFzJywgSlNPTi5zdHJpbmdpZnkoZGlzY2lwbGluYXMpKTtcbn1cbiIsImNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIHN0YXRpYyBkaXN0YW5jZShhLCBiKSB7XG4gICAgY29uc3QgZHggPSBhLnggLSBiLng7XG4gICAgY29uc3QgZHkgPSBhLnkgLSBiLnk7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4KmR4ICsgZHkqZHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50OyIsIid1c2Ugc3RyaWMnXG5cbmZ1bmN0aW9uIFRpbWVUYWJsZSh0ZXN0ZSwgZGF5c09mV2VlaywgYXVsYUhvcmFyaW9zKSB7XG5cbiAgLy9zZXRhbmRvIG9zIGRpYXMgZGEgc2VtYW5hXG4gIHRoaXMuZGF5c09mV2VlayA9IGRheXNPZldlZWs7XG4gIHRoaXMuaG9yYXJpb3MgICA9IGF1bGFIb3JhcmlvcztcbiAgdGhpcy5kc3BMaXN0ID0gW107XG4gIHRoaXMubWluaGFzRGlzY2lwbGluYXMgPSBbXTtcbiAgdGhpcy50ZXN0ZTtcbiAgdGhpcy5pc0YgPSB0cnVlOyAgXG5cblxuICAvL2NvbnN0cnV0b3IgZG8gQXBwXG4gIFRpbWVUYWJsZS5wcm90b3R5cGUuaW5pdCA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWRkRnJvbUxpc3QoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgXCJob3JhcmlvXCI6XCJjNDhcIixcbiAgICAgICAgICAgICAgICAgXCJ0dXJtYVwiOlwiTUFUMjU0XCIsXG4gICAgICAgICAgICAgICAgIFwicGVyaW9kb1wiOlwiNS8yMDE2XCIsXG4gICAgICAgICAgICAgICAgIFwic2lnbGFcIjpcIlwiLFxuICAgICAgICAgICAgICAgICBcImRpc2NpcGxpbmFcIjogXCJ2YXppb1wiLFxuICAgICAgICAgICAgICAgICBcInByb2Zlc3NvclwiOlwiTHVjYXMgTGF0dGFyaVwiLFxuICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiXCJcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIF0pO1xuICAgICAgdGhpcy5jcmVhdGVUYWJsZSgpO1xuICB9XG4gXG5cbnZhciBNeUFycmF5ID0gKGNhbGxiYWNrKSA9PiB7IFxuICAgIHZhciBhcnIgPSBbXTtcbiAgICBhcnIucHVzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkknTSBQVVNISU5HPlwiLCBhcmd1bWVudHMpO1xuXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgLy8gQ2FsbCBpdCwgc2luY2Ugd2UgaGF2ZSBjb25maXJtZWQgaXQgaXMgY2FsbGFibGXigItcbiAgICAgICAgICAgIC8vdGhpcyBjYWxsYmFjayB3aWxsIGNhbGwgYW4gdXBkYXRlIG1ldGhvZCB0byByZXBhaW50IHRoZSBET01cbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn07XG5cblRpbWVUYWJsZS5wcm90b3R5cGUuY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3NvdSBldSBjYWxsYmFjaycpO1xuICAgXG4gICAgICAgIGNvbnNvbGUubG9nKCc+PmFycjogJywgdGhpcy5taW5oYXNEaXNjaXBsaW5hcyk7XG5cbiAgICBcbn1cblxuVGltZVRhYmxlLnByb3RvdHlwZS5hZGRGcm9tTGlzdCA9IChteV9vYmplY3QpID0+IHtcbiAgICAgIC8vaW5jaWFsaXphIG8gYXJyYXkgcXVlIHJlY2ViZXLDoSBhcyBkaXNjaXBsaW5hXG4gICAgICB0aGlzLm1pbmhhc0Rpc2NpcGxpbmFzID0gbmV3IE15QXJyYXkodGhpcy5jYWxsYmFjayk7XG4gICAgICBcbiAgICAgIC8vZm9yIHRlbXBvcsOhcmlvIHBhcmEgYWRpY2lvbmFyIHbDoXJpYXMgZGlzY2lwbGluYXNcbiAgICAgIGZvciAoIGxldCB4IGluIG15X29iamVjdCl7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3B1c2g6ICcsIG15X29iamVjdFt4XSk7XG4gICAgICAgICAgbXlfb2JqZWN0W3hdLmNvbG9yID0gdGhpcy5nZXRSYW5kb21Db2xvcigpO1xuICAgICAgICAgIHRoaXMubWluaGFzRGlzY2lwbGluYXMucHVzaChteV9vYmplY3RbeF0pO1xuICAgICAgfVxuXG4gICAgdGhpcy5kc3BMaXN0ID0gdGhpcy5kc3BMaXN0LmNvbmNhdCh0aGlzLm1pbmhhc0Rpc2NpcGxpbmFzKTtcbiAgICAvL2NvbnNvbGUubG9nKCdhcnJwdXNoZWQ6ICcsIHRoaXMuZHNwTGlzdCk7XG59O1xuXG4gIFRpbWVUYWJsZS5wcm90b3R5cGUuY3JlYXRlVGFibGUgPSAoKSA9PiB7XG5cbiAgICAvL2NyaWFuZG8gdGFibGVsYSAgXG4gICAgbGV0IHRhYmVsYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgICB0YWJlbGEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteVRhYmxlXCIpO1xuICAgIHRhYmVsYS5jbGFzc05hbWUgPSAndGltZS10YWJsZSc7XG4gICAgdGFiZWxhLnNldEF0dHJpYnV0ZSgnYm9yZGVyJywnMCcpO1xuICAgIHRhYmVsYS5zZXRBdHRyaWJ1dGUoJ2NlbGxwYWRkaW5nJyAsJzAnKTtcbiAgICB0YWJlbGEuc2V0QXR0cmlidXRlKCdjZWxsc3BhY2luZycsJzAnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpLmFwcGVuZENoaWxkKHRhYmVsYSk7XG5cbiAgICAvL2NyaWFuZG8gbGluaGFzXG4gICAgZm9yICh2YXIgaj0wOyBqIDwgdGhpcy5ob3Jhcmlvcy5sZW5ndGgrMTsgaisrKXtcbiAgICAgICAgICAgIGxldCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICAgICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm15VHJcIiArIGopO1xuICAgICAgICAgICAgbGluZS5jbGFzc05hbWUgPSAnZGF5cyc7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VGFibGVcIikuYXBwZW5kQ2hpbGQobGluZSk7XG4gICAgfVxuICAgIC8vcGVyY29ycmVyIG9zIGRpYXMgZGEgc2VtYW5hIGUgYWRpY29uYXIgw6AgcHJpbWVpcmEgbGluaGEsIGhlYWQgb2YgdGhlIHRhYmxlXG4gICAgZm9yKCB2YXIgZCBpbiB0aGlzLmRheXNPZldlZWspe1xuICAgICAgICB2YXIgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIHZhciBjZWxsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5kYXlzT2ZXZWVrW2RdKTtcbiAgICAgICAgdGguYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUcjBcIikuYXBwZW5kQ2hpbGQodGgpO1xuICAgIH1cbiAgICAvL2NyaWEgY29sdW5hcyBpIGUgYWRpY2lvbmEgYSBLdGggbGluaGFcbiAgICB2YXIgbGluZUlEID0gMTtcbiAgICB2YXIgY2VsbElEID0gMTtcbiAgICAvL3BlcmNvcnJlIGNhZGEgaG9yYXJpbyBleGlzdGVudGUgbmEgZ3JhZGUgZGUgaG9yYXJpb3MgZSBhZGljaW9uYSB1bWEgY2VsdWxhIGRlIFxuICAgIC8vdGVtcG8gcGFyYSBjYWRhIGRpYSBkYSBzZW1hbmEuXG4gICAgZm9yICh2YXIgYWg9MDsgYWggPCB0aGlzLmhvcmFyaW9zLmxlbmd0aDsgYWgrKyl7XG4gICAgICAgICAgICBmb3IgKHZhciBjb2w9MDsgY29sPDc7IGNvbCsrKXtcbiAgICAgICAgICAgICAgICAvL3NlIGZvciBhIHByaW1laXJhIGNlbHVsYSBkYSBsaW5oYSwgYWRpY2lvbmFyIG8gaG9yYXJpbyByZWZlcmVudGVcbiAgICAgICAgICAgICAgICAvL2NvbmRpw6fDo28gbmVjZXNzw6FyaWEgcG9pcywgYSBwcmltZWlyYSBjw6lsdWxhIG7Do28gcG9kZSB0ZXIgaWQgcmVmZXJlbnRlIGEgc3VhIHBvc2nDp8OjbyB4eS5cbiAgICAgICAgICAgICAgICBpZiAoY29sID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuaG9yYXJpb3NbYWhdKTtcbiAgICAgICAgICAgICAgICAgICAgdGQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgIHRkLmNsYXNzTmFtZSA9ICd0aW1lJztcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteVRyXCIgKyBsaW5lSUQgKS5hcHBlbmRDaGlsZCh0ZCk7XG4gICAgICAgICAgICAgICAgLy9jYXNvIGNvbnRyYXJpbywgYXBlbmFzIGNyaWUgY2VsdWxhcyBkZSB0ZW1wbyB2YXppYXMgICAgIFxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICAgICAgICAgIHRkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY1wiICsgY2VsbElEKTsgLy8gc2V0YXIgaWQgw6AgY8OpbHVsYSByZWZlcmVudGUgw6Agc3VhIHBvc2nDp8Ojby5cblxuICAgICAgICAgICAgICAgICAgICBsZXQgY29kaWdvID0gJ2MnICsgY2VsbElEO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYV9zaWdsYTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGVyaWFfbm9tZTtcblxuICAgICAgICAgICAgICAgICAgICAvL3ZlcmlmaWNhIHNlIGhhIGRpc2NpcGxpbmFzIG5vIGFycmF5LCBjYXNvIGhhamEsIHBlcmNvcnJlciBhcyBkaXNwbGluYXMgZSBhZGljaW9uJ2FsYXMgZW0gc2V1cyAgZGV2aWRvcyBsdWdhcmVzXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZHNwTGlzdC5sZW5ndGggPiAwKXsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLmRzcExpc3QubGVuZ3RoOyBhKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvZGlnbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggKHRoaXMuZHNwTGlzdFthXS5ob3JhcmlvID09PSBjb2RpZ28pICYmICh0aGlzLmRzcExpc3RbYV0uaG9yYXJpbyAhPT0gdW5kZWZpbmVkKSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFfc2lnbGEgPSB0aGlzLmRzcExpc3RbYV0uc2lnbGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYV9ub21lID0gdGhpcy5kc3BMaXN0W2FdLmRpc2NpcGxpbmE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJz4+ICcsbWF0ZXJpYV9zaWdsYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2VsbCcpO1xuICAgICAgICAgICAgICAgICAgICB0ZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcsIG1hdGVyaWFfbm9tZSA/IG1hdGVyaWFfbm9tZSA6ICcgdmF6aW8gJyApOyAvLyBjYXNvIGVzdGVqYSBkZWZpbmlkYSBhZGljaW9uYXIgYXRyaWJ1dG8gcGFyYSBvIGJhbH5hby5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShtYXRlcmlhX3NpZ2xhID8gbWF0ZXJpYV9zaWdsYSA6ICcnICk7IC8vIGNhc28gaGFqYSBtYXRlcmlhIGFjaW9uYXIgbyBub21lLCBzZW5+YW8gYWRpY2lvbmFyIHVtIHRyYcOnby5cbiAgICAgICAgICAgICAgICAgICAgdGQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUclwiICsgbGluZUlEICkuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgICAgICAgICAgICAgICBjZWxsSUQrKzsgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5lSUQrKztcbiAgICAgICAgfVxuICAgIFxuICB9XG5UaW1lVGFibGUucHJvdG90eXBlLmdldFJhbmRvbUNvbG9yID0gKCkgPT4ge1xuICAgIHZhciBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnO1xuICAgIHZhciBjb2xvciA9ICcjJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKyApIHtcbiAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3I7XG59XG5cblRpbWVUYWJsZS5wcm90b3R5cGUuY3JlYXRlTGlzdCA9ICgpID0+IHtcbiAgICAgICB2YXIgdmV0b3IgPSBbJ2FzZCcsJ3F3cWUnLCcxMzEyMyddO1xuICAgICAgICAvL2NyaWFuZG8gdGFibGVsYSAgXG4gICAgICAgIGxldCBkc3BMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgICAgIGRzcExpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkc3Atd3JhcHBlclwiKTtcbiAgICAgICAgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0YScpLmFwcGVuZENoaWxkKGRzcExpc3QpO1xuXG4gICAgICAgZm9yICggbGV0IHggaW4gdGhpcy50b2Rhc0Rpc2NpcGxpbmFzKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpZGQnLHgpO1xuICAgICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiZHNwLWlkXCIsIFwiZHNwLXdyYXBwZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9ICdsaXN0LWl0ZW0nO1xuICAgICAgICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgICAgICBzcGFuLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLHRoaXMudG9kYXNEaXNjaXBsaW5hc1t4XS5ob3JhcmlvKTtcbiAgICAgICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICAgICAgICAgIGRzcExpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICAgICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBsaS5pbm5lckhUTUwgKyB0aGlzLnRvZGFzRGlzY2lwbGluYXNbeF0uZGlzY2lwbGluYTtcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygncHVzaDogJywgbXlfb2JqZWN0W3hdKTtcbiAgICAgICB9XG4gIH1cbiAgXG4gIHRoaXMudXBkYXRlVGFibGUgPSAoKSA9PiB7XG4gICAgICAgIC8vICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuZHNwTGlzdC5sZW5ndGg7IGErKykge1xuICAgICAgICAvLyAgICAgIGNvbnNvbGUubG9nKCdsb2c6IHVwZGF0ZVRhYmxlOiAnLCB0aGlzLmRzcExpc3RbYV0uaG9yYXJpbywgdGhpcy5kc3BMaXN0W2FdLnNpZ2xhICk7XG4gICAgICAgICAgICAgXG5cbiAgICAgICAgLy8gIH1cbiAgICAgIGZvciAodmFyIGFoPTA7IGFoIDwgdGhpcy5ob3Jhcmlvcy5sZW5ndGg7IGFoKyspe1xuICAgICAgICAgICAgZm9yICh2YXIgY29sPTA7IGNvbDw3OyBjb2wrKyl7XG4gICAgICAgICAgICAgICAgIGlmKHRoaXMuZHNwTGlzdC5sZW5ndGggPiAwKXsgIFxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xlbjogJywgdGhpcy5kc3BMaXN0Lmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gMDsgYSA8IHRoaXMuZHNwTGlzdC5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29kaWdvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCAodGhpcy5kc3BMaXN0W2FdLmhvcmFyaW8gKSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2QgPSB0aGlzLmRzcExpc3RbYV0uaG9yYXJpbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29kOiAnLCBjb2QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2MxNycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ID09PSAnYzE3Jyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuc3R5bGUuZm9udFNpemUgPSAnMzBweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCc+PiAnLCB0aGlzLmRzcExpc3RbYV0uaG9yYXJpbyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21hdGVyaWFfc2lnbGEgPSB0aGlzLmRzcExpc3RbYV0uc2lnbGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tYXRlcmlhX25vbWUgPSB0aGlzLmRzcExpc3RbYV0uZGlzY2lwbGluYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9zZSBmb3IgYSBwcmltZWlyYSBjZWx1bGEgZGEgbGluaGEsIGFkaWNpb25hciBvIGhvcmFyaW8gcmVmZXJlbnRlXG4gICAgICAgICAgICAgICAgLy9jb25kacOnw6NvIG5lY2Vzc8OhcmlhIHBvaXMsIGEgcHJpbWVpcmEgY8OpbHVsYSBuw6NvIHBvZGUgdGVyIGlkIHJlZmVyZW50ZSBhIHN1YSBwb3Npw6fDo28geHkuXG4gICAgICAgICAgICAgICAgLy8gaWYgKGNvbCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgLy8gICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGNlbGwgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmhvcmFyaW9zW2FoXSk7XG4gICAgICAgICAgICAgICAgLy8gICAgIHRkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgICAgIC8vICAgICB0ZC5jbGFzc05hbWUgPSAndGltZSc7XG4gICAgICAgICAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlUclwiICsgbGluZUlEICkuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgICAgICAgICAgIC8vIC8vY2FzbyBjb250cmFyaW8sIGFwZW5hcyBjcmllIGNlbHVsYXMgZGUgdGVtcG8gdmF6aWFzICAgICBcbiAgICAgICAgICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvLyAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgICAgIC8vICAgICB0ZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNcIiArIGNlbGxJRCk7IC8vIHNldGFyIGlkIMOgIGPDqWx1bGEgcmVmZXJlbnRlIMOgIHN1YSBwb3Npw6fDo28uXG5cbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IGNvZGlnbyA9ICdjJyArIGNlbGxJRDtcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IG1hdGVyaWFfc2lnbGE7XG4gICAgICAgICAgICAgICAgLy8gICAgIGxldCBtYXRlcmlhX25vbWU7XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgLy92ZXJpZmljYSBzZSBoYSBkaXNjaXBsaW5hcyBubyBhcnJheSwgY2FzbyBoYWphLCBwZXJjb3JyZXIgYXMgZGlzcGxpbmFzIGUgYWRpY2lvbidhbGFzIGVtIHNldXMgIGRldmlkb3MgbHVnYXJlc1xuICAgICAgICAgICAgICAgIC8vICAgICBpZih0aGlzLmRzcExpc3QubGVuZ3RoID4gMCl7ICBcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGZvciAodmFyIGEgPSAwOyBhIDwgdGhpcy5kc3BMaXN0Lmxlbmd0aDsgYSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb2RpZ28pO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgaWYoICh0aGlzLmRzcExpc3RbYV0uaG9yYXJpbyA9PT0gY29kaWdvKSAmJiAodGhpcy5kc3BMaXN0W2FdLmhvcmFyaW8gIT09IHVuZGVmaW5lZCkgKXtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBtYXRlcmlhX3NpZ2xhID0gdGhpcy5kc3BMaXN0W2FdLnNpZ2xhO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIG1hdGVyaWFfbm9tZSA9IHRoaXMuZHNwTGlzdFthXS5kaXNjaXBsaW5hO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCc+PiAnLG1hdGVyaWFfc2lnbGEpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICB0ZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NlbGwnKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGQuc2V0QXR0cmlidXRlKCdkYXRhLXRvb2x0aXAnLCBtYXRlcmlhX25vbWUgPyBtYXRlcmlhX25vbWUgOiAnIHZhemlvICcgKTsgLy8gY2FzbyBlc3RlamEgZGVmaW5pZGEgYWRpY2lvbmFyIGF0cmlidXRvIHBhcmEgbyBiYWx+YW8uXG4gICAgICAgICAgICAgICAgLy8gICAgIHZhciBjZWxsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobWF0ZXJpYV9zaWdsYSA/IG1hdGVyaWFfc2lnbGEgOiAnIC4gJyApOyAvLyBjYXNvIGhhamEgbWF0ZXJpYSBhY2lvbmFyIG8gbm9tZSwgc2VufmFvIGFkaWNpb25hciB1bSB0cmHDp28uXG4gICAgICAgICAgICAgICAgLy8gICAgIHRkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15VHJcIiArIGxpbmVJRCApLmFwcGVuZENoaWxkKHRkKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgY2VsbElEKys7ICBcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9saW5lSUQrKztcbiAgICAgICAgfVxuICB9XG5cbiAgdGhpcy5hbG9jYXRlRGlzY2lwbGluYSA9ICgpID0+IHt9XG5cbiAgdGhpcy5yZW1vdmVEaXNjaXBsaW5hID0gKCkgPT4ge31cblxuICB0aGlzLmhvdmVyaW5nQ2hlY2sgPSAoKSA9PiB7fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZVRhYmxlOyJdfQ==
