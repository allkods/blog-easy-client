// Main OBJECT

const Svg={
    arrow : '<svg viewBox="0 0 409.6 409.6"><g><g><path d="M135.6,410.8c-5.08-2.17-6.57-6.11-6.56-11.47c0.11-68.53,0.03-137.06,0.17-205.59c0.01-3.83-0.85-4.79-4.73-4.77c-28.66,0.19-57.33,0.1-86,0.11c-2.15,0-4.29-0.02-6.29-0.87c-4.65-1.97-6.52-7.75-3.82-12.07c0.9-1.45,2.16-2.7,3.37-3.92C87.16,116.76,142.58,61.32,198.01,5.88c6.22-6.22,10.26-6.19,16.55,0.12c55.26,55.43,110.5,110.86,165.77,166.28c2.6,2.6,5.06,5.22,4.5,9.29c-0.63,4.55-4.06,7.36-9.38,7.48c-5.6,0.12-11.2,0.03-16.8,0.03c-24,0-48,0.08-72-0.09c-3.4-0.02-4.06,0.9-4.06,4.15c0.1,68.53,0.05,137.06,0.13,205.59c0.01,5.34-1.32,9.56-6.33,12.07C229.47,410.8,182.53,410.8,135.6,410.8z"/></g></g></svg>',
    pencil: '<svg viewBox="0 0 500 500"><path d="M4.8,482.7c3.65-9.17,5.22-18.91,7.63-28.41c7.53-29.71,14.85-59.48,22.23-89.23c0.75-3.04,2.23-5.53,4.46-7.76C128,268.47,216.87,179.61,305.63,90.65c2.72-2.72,3.86-2.16,6.21,0.19c32.98,33.13,66.02,66.2,99.18,99.14c2.72,2.7,2.51,3.98-0.06,6.55c-88.6,88.45-177.12,176.97-265.62,265.52c-2.69,2.69-5.63,4.46-9.37,5.37c-39.07,9.6-78.11,19.31-117.15,29.01c-0.23,0.06-0.38,0.45-0.57,0.69c-1.92,0-3.84,0-5.77,0c-4.31-0.81-6.87-3.38-7.69-7.69C4.8,487.19,4.8,484.95,4.8,482.7z"/><path class="st0" d="M4.8,489.43c1.77,3.36,4.39,5.86,7.69,7.69C4.8,497.12,4.8,497.12,4.8,489.43z"/><path d="M496.82,88.63c-0.31,13.56-4.52,25.78-14.01,35.67c-11.97,12.47-24.41,24.48-36.48,36.86c-2.85,2.93-3.78,0.16-5.1-1.16c-27.88-27.81-55.71-55.66-83.56-83.5c-5.55-5.55-11.04-11.15-16.68-16.59c-1.75-1.68-1.88-2.66-0.04-4.47c11.87-11.67,23.38-23.72,35.44-35.19C396.72,0.9,429.04,0.5,449.6,19.53c11.62,10.75,22.67,22.16,33.57,33.65C492.47,62.99,496.53,75.12,496.82,88.63z"/></svg>',
    close : '<svg viewBox="0 0 409.806 409.806"><path d="M228.929,205.01L404.596,29.343c6.78-6.548,6.968-17.352,0.42-24.132c-6.548-6.78-17.352-6.968-24.132-0.42c-0.142,0.137-0.282,0.277-0.42,0.42L204.796,180.878L29.129,5.21c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.713L180.664,205.01L4.997,380.677c-6.663,6.664-6.663,17.468,0,24.132c6.664,6.662,17.468,6.662,24.132,0l175.667-175.667l175.667,175.667c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712L228.929,205.01z"/></svg>',
    image : '<svg viewBox="0 0 384 384"><g><path d="M384.83,230.99c0.04-53.12,0.04-106.23,0.02-159.35c0-4-0.25-7.97-1.66-11.8c-5.47-14.79-19.07-23.87-35.97-23.87c-102.98-0.01-205.96-0.01-308.94,0C17.88,35.98,4.25,47.2,0.5,67c0,84,0,168,0,252c0.31,7.03,3.33,12.9,7.7,18.24c5.2,6.35,6.88,6.5,12.62,0.77c41.45-41.45,82.96-82.83,124.29-124.39c9.34-9.39,14.55-7.9,21.88-0.2c10.94,11.49,22.35,22.54,33.61,33.73c3.4,3.38,4.34,3.33,7.72,0.09c0.9-0.86,1.77-1.76,2.66-2.65c26.69-26.69,53.38-53.38,80.07-80.06c7.81-7.81,11.86-7.79,19.77,0.11c10.61,10.6,21.21,21.21,31.81,31.81c12.2,12.2,24.37,24.41,36.61,36.56c1.44,1.43,2.85,4.08,5,3.18C385.82,235.53,384.83,232.79,384.83,230.99z M95.97,180.19c-25.96-0.06-47.4-21.61-47.33-47.57c0.07-25.98,21.67-47.44,47.58-47.29c26.1,0.15,47.44,21.58,47.32,47.54C143.44,158.92,121.98,180.25,95.97,180.19z"/><path d="M382.35,266.16c-26.29-26.2-52.54-52.43-78.7-78.76c-2.1-2.12-3.08-2.36-5.34-0.08c-28.09,28.28-56.31,56.44-84.51,84.62c-6.26,6.25-12.26,6.23-18.54-0.04c-12.03-12.01-24.1-23.97-36-36.1c-2.24-2.28-3.32-2.47-5.71-0.07c-36.67,36.85-73.46,73.58-110.21,110.35c-0.74,0.74-1.83,1.27-2.03,2.83c0.65,0,1.24,0,1.83,0c101.72,0,203.45,0.04,305.17-0.03c20.87-0.01,36.09-15.44,36.18-36.29c0.06-13.75-0.04-27.49,0.06-41.24C384.57,269.16,383.89,267.69,382.35,266.16z"/><path d="M96.23,107.85c-13.68-0.11-25.12,11.28-25.07,24.96c0.05,13.54,11.29,24.8,24.81,24.87c13.66,0.07,25.14-11.36,25.08-25C120.99,119.12,109.84,107.96,96.23,107.85z"/></g></svg>',
    add   : '<svg viewBox="0 0 512 512"><path d="M256,0C114.84,0,0,114.84,0,256s114.84,256,256,256s256-114.84,256-256S397.16,0,256,0z M256,475.429c-120.997,0-219.429-98.432-219.429-219.429S135.003,36.571,256,36.571S475.429,135.003,475.429,256S376.997,475.429,256,475.429z"/><path d="M256,134.095c-10.1,0-18.286,8.186-18.286,18.286v207.238c0,10.1,8.186,18.286,18.286,18.286c10.1,0,18.286-8.186,18.286-18.286V152.381C274.286,142.281,266.1,134.095,256,134.095z"/><path d="M359.619,237.714H152.381c-10.1,0-18.286,8.186-18.286,18.286c0,10.1,8.186,18.286,18.286,18.286h207.238c10.1,0,18.286-8.186,18.286-18.286C377.905,245.9,369.719,237.714,359.619,237.714z"/></svg>'
};

// contains all renderable elements in json form.
var Nodes=[];

var Selected = null;
var Input = null;
var LastNode = null;
var Dvalue = null;
var InpSpace = false;

var Publishing = false;
var cusSlug = null;
var Title = false;
var Coverimage = false;
var Doctype = undefined;

var NxtId=1;
const NameTag='akblid';
var Wrap=null;

const Menu = {
    container : null,
    contentBox : null
};

const MainMenu={
    container : null,
    contentBox : null,
    trigger : null
};

var ListCheck = false;
var aapi;

const POST = function(path){
    aapi=path;
};

const getScroll = function(){
    if(typeof pageYOffset!='undefined'){
        return pageYOffset;
    }else{
        var b=document.body;
        var d=document.documentElement;
        d=(d.clientHeight)? d : b;
        return d.scrollTop;
    }
};

var LastScroll = document.body.clientHeight;

const applyStyle = function(cnt,style){
    var arr=Object.entries(style);

    for(var i=0; i<arr.length; i++){
        cnt.style[arr[i][0]] = arr[i][1]
    }
}

const createMenu = function(){
    const main=document.createElement('div');
    Menu.container = main;
    var st={
        position: 'fixed',
        left: '0',
        top: '0',
        height: '100vh',
        width: '100%',
        display: 'none',
        zIndex: '10'
    }
    applyStyle(main,st);

    const close = document.createElement('div');
    st={
        flex: '1',
        background: 'rgba(0, 0, 0, .4)'
    }
    applyStyle(close,st);
    close.onclick = function(){
        disableSecMenu();
    }

    const cnt=document.createElement('div');
    Menu.contentBox = cnt;
    st={
        width: '250px',
        height: '100%',
        background: 'rgb(238, 238, 238)'
    }
    applyStyle(cnt,st);
    
    main.append(close);
    main.append(cnt);
    document.body.append(main);

}

const createMainMenu = function(){
    const main=document.createElement('div');
    MainMenu.container = main;
    var st={
        position: 'fixed',
        left: '0',
        top: '0',
        height: '100vh',
        width: '100%',
        display: 'none',
        zIndex: '10'
    }
    applyStyle(main,st);

    const close = document.createElement('div');
    st={
        flex: '1',
        background: 'rgba(0, 0, 0, .4)'
    }
    applyStyle(close,st);
    close.onclick = function(){
        disableMainMenu();
    }

    const cnt=document.createElement('div');
    MainMenu.contentBox = cnt;
    st={
        width: '250px',
        height: '100%',
        background: 'whitesmoke',
        overflowY : 'scroll'
    }
    applyStyle(cnt,st);
    
    main.append(close);
    main.append(cnt);
    document.body.append(main);

    const trig=document.createElement('div');
    trig.innerHTML = Svg.add;
    var st={
        height: '70px',
        width: '70px',
        borderRadius: '50%',
        position: 'fixed',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        cursor: 'pointer',
        transition: 'all 200ms ease',
        overflow : 'hidden',
        zIndex: '9'
    }
    applyStyle(trig,st);
    var svg=trig.getElementsByTagName('svg')[0];
    svg.style.height = "100%";
    svg.style.width = "100%";
    svg.style.fill = "#03204c";

    trig.onclick = function(){
        enableMainMenu();
    };

    trig.onmouseover = function(){
        this.style.transform = 'translateX(-50%)scale(1.1)';
    }
    trig.onmouseout = function(){
        this.style.transform = 'translateX(-50%)';
    }

    MainMenu.trigger = trig;
    document.body.append(trig);
}



// Assign parent node in which elements will be added.
const wrapper = function(val){
    Wrap = val;
}

// returns auto incremented unique id.
const setId = function(){
    var id=NameTag + NxtId++;
    return id;
};

// to get index of given element from nodes array
const getIndex = function(node){
    for(var i=0; i<Nodes.length; i++){
        if(Nodes[i].id === node.id){
            return i;
        }
    }
}

// to get index of list element from nodes array
const getNode = function(){
    for(var i=0; i<Nodes.length; i++){
        if(Nodes[i].type === 'list'){
            
            for(var j=0; j<Nodes[i].list.length; j++){
                if(Nodes[i].list[j].id === Selected.id){
                    return {i:i,j:j};
                }
            }
        }else{
            if(Nodes[i].id === Selected.id){
                return {i:i};
            }
        }
    }
}

const findByTag = function(tag){
    for(var i=0; i<Nodes.length; i++){
        if(Nodes[i].tag == tag){
            return Nodes[i];
        }
    }
    return undefined;

}

const findByType = function(type){
    for(var i=0; i<Nodes.length; i++){
        if(Nodes[i].type == type){
            return Nodes[i];
        }
    }
    return undefined;

}

const cusStyle ={
    para:{
        fontSize: '24px',
        lineHeight: '40px',
        padding: '0 20px',
        margin: '0 0 10px 0'
    },
    list:{
        margin: '0 0 10px 0',
        padding: '0 20px 0 45px'
    },
    listElem:{
        fontSize: '24px',
        lineHeight: '40px'
    },
    paraSpace:{
        width: '100%',
        height: '60px'
    },
    note:{
        fontSize: '22px',
        color: '#02339c',
        fontStyle: 'italic',
        padding: '10px 50px',
        margin : '0 0 10px 0'
    },
    code:{
        margin: '0 0 10px 0',
        height: 'auto',
        maxHeight: '400px',
        background: 'whitesmoke',
        overflow: 'scroll',
        padding: '10px'
    },
    header:{
        fontSize: '50px',
        lineHeight: '52px',
        marginBottom: '15px',
        margin: '30px 0 10px 0',
        textAlign: 'left',
        maxWidth: '600px',
        fontWeight: 'normal'
    },
    subHeader:{
        fontSize: '26px',
        margin: '0 0 10px 0',
    },
    h3:{
        margin: '0 0 10px 0'
    },
    h4:{
        margin: '0 0 10px 0'
    },
    h5:{
        margin: '0 0 10px 0'
    },
    h6:{
        margin: '0 0 10px 0'
    },
    imageBox:{
        width: '100%',
        height: '60vw',
        maxHeight: '400px',
        margin: '50px 0',
        background: 'rgb(231, 231, 231)',
        fill: 'rgb(87, 87, 87)'
    },
    coverImage :{
        width: '100%',
        height: '60vw',
        maxHeight: '400px',
        margin: '50px 0',
        background: 'rgb(231, 231, 231)',
        fill: 'rgb(87, 87, 87)'
    },
    date:{
        margin: '10px 0 0 0',
        color: 'rgb(71,71,71)',
        padding : '0 0 0 2px'
    }
}

const cusClass={
    para:"BEpara", list:"BElist", listElem:"BElistelem", paraSpace:"BEparaspace", note:"BEnote", code:"BEcode",
    header:"BEheader", subHeader:"BEsubheader", h3:"BEh3", h4:"BEh4", h5:"BEh5", h6:"BEh6",
    imageBox:"BEimgbox", coverImage:"BEcoverimage", date:"BEdate"

}
// Adds text element to the hierarchy.
const ADDTEXT = function(){

        Nodes.push({
            id:setId(),
            tag:'p',
            type:'text',
            html : "Text...",
            class: cusClass.para,
            style: cusStyle.para
        });
        LastScroll = document.body.clientHeight;
        render();
};

// Adds list element to the hierarchy.
const ADDLIST = function(){

    Nodes.push({
        id:setId(),
        tag:'ul',
        type:'list',
        list : [{id:setId(),value:'List item',class: cusClass.listElem,style: cusStyle.listElem}],
        class: cusClass.list,
        style: cusStyle.list
    });
    LastScroll = document.body.clientHeight;
    render();

};
const ADDOLIST = function(){

    Nodes.push({
        id:setId(),
        tag:'ol',
        type:'list',
        list : [{id:setId(),value:'List item',class: cusClass.listElem,style: cusStyle.listElem}],
        class: cusClass.list,
        style: cusStyle.list
    });
    LastScroll = document.body.clientHeight;
    render();

};

//Adds verticle space element to the hierarchy.
ADDPARASPACE = function(clas){

    Nodes.push({
        id:setId(),
        tag:'p',
        type:'space',
        class: cusClass.paraSpace,
        style: cusStyle.paraSpace
    })
    LastScroll = document.body.clientHeight;
    render();

};

//Adds note element to the hierarchy.
const ADDNOTE = function(){

    Nodes.push({
        id:setId(),
        tag:'p',
        type:'note',
        html : "Note...",
        class: cusClass.note,
        style: cusStyle.note
    });
    
    LastScroll = document.body.clientHeight;
    render();
};

// Adds code element to the hierarchy.
const ADDCODE = function(){

    Nodes.push({
        id:setId(),
        tag:'pre',
        type:'code',
        html : "Code Snippet...",
        class: cusClass.code,
        style: cusStyle.code
    });
    LastScroll = document.body.clientHeight;
    render();
};

// Adds (headers h1 to h6) element to the hierarchy.

const ADDH1 = function(){

    Nodes.push({
        id:setId(),
        tag:'h1',
        type:'header',
        html : "Header...",
        class: cusClass.header,
        style: cusStyle.header
    });
    LastScroll = document.body.clientHeight;
    Title = true;
    render();
};
const ADDH2 = function(){

    Nodes.push({
        id:setId(),
        tag:'h2',
        type:'header',
        html : "Header...",
        class: cusClass.subHeader,
        style: cusStyle.subHeader
    });
    LastScroll = document.body.clientHeight;
    render();
};
const ADDH3 = function(){

    Nodes.push({
        id:setId(),
        tag:'h3',
        type:'header',
        html : "Header...",
        class: cusClass.h3,
        style: cusStyle.h3
    });
    LastScroll = document.body.clientHeight;
    render();
};
const ADDH4 = function(){

    Nodes.push({
        id:setId(),
        tag:'h4',
        type:'header',
        html : "Header...",
        class: cusClass.h4,
        style: cusStyle.h4
    });
    LastScroll = document.body.clientHeight;
    render();
};
const ADDH5 = function(){

    Nodes.push({
        id:setId(),
        tag:'h5',
        type:'header',
        html : "Header...",
        class: cusClass.h5,
        style: cusStyle.h5
    });
    LastScroll = document.body.clientHeight;
    render();
};
const ADDH6 = function(){

    Nodes.push({
        id:setId(),
        tag:'h6',
        type:'header',
        html : "Header...",
        class: cusClass.h6,
        style: cusStyle.h6
    });
    LastScroll = document.body.clientHeight;
    render();
};

// Adds Image Box element to the hierarchy.
const ADDIMAGEBOX = function(){

    Nodes.push({
        id:setId(),
        tag:'div',
        type:'imageBox',
        file : null,
        data:null,
        class: cusClass.imageBox,
        style: cusStyle.imageBox
    });
    LastScroll = document.body.clientHeight;
    render();
};

const ADDCOVERIMAGE = function(){

    Nodes.push({
        id:setId(),
        tag:'div',
        type:'coverImage',
        file : null,
        data:null,
        class: cusClass.coverImage,
        style: cusStyle.coverImage
    });
    LastScroll = document.body.clientHeight;
    Coverimage = true;
    render();
};

function getRedableDate(){

    var dateOb=new Date;
    var newDate={};
    
    var date=dateOb.getDate();
    var month=dateOb.getMonth() + 1;
    var year = dateOb.getFullYear();
    var sup;
    if(month === 1) month = 'January';
    if(month === 2) month = 'February';
    if(month === 3) month = 'March';
    if(month === 4) month = 'April';
    if(month === 5) month = 'May';
    if(month === 6) month = 'June';
    if(month === 7) month = 'July';
    if(month === 8) month = 'August';
    if(month === 9) month = 'September';
    if(month === 10) month = 'October';
    if(month === 11) month = 'November';
    if(month === 12) month = 'December';
    
    switch(date){
        case 31:
        case 21:
        case 1: sup = 'st'
        break;
        case 22:
        case 2: sup = 'nd'
        break;
        case 23:
        case 3: sup = 'rd'
        break;
        default : sup = 'th'
    }
    
    newDate = date+'<sup>'+sup+'</sup>'+' '+month+', '+year;
    return newDate;
    
}

const ADDDATE = function(){
    Nodes.push({
        id:setId(),
        tag:'p',
        type:'date',
        html : getRedableDate(),
        class: cusClass.date,
        style: cusStyle.date
    });
    LastScroll = document.body.clientHeight;
    render();
}

//renders nodes elements to html virtual dom.
function render(){
    Wrap.innerHTML = "";
    for(var i=0; i<Nodes.length; i++){

                    var n=document.createElement(Nodes[i].tag);
                        n.setAttribute('id',Nodes[i].id);
                        var spl = Nodes[i].class.split(" ");

                        if(spl.length === 1){
                            applyStyle(n,Nodes[i].style);
                        }
                        spl.forEach(element => {
                            n.classList.add(element);
                        });

        switch(Nodes[i].type){

            case 'header':
            case 'note':
            case 'text':n.innerHTML = Nodes[i].html;
                        n.style.boxSizing = "border-box";
                        n.style.cursor = "pointer";
                        Wrap.append(n);
                        defaultEvents(n);
                        break;

            case 'list':for(var j=0; j<Nodes[i].list.length; j++){
                            var li=document.createElement('li');
                            li.innerHTML = Nodes[i].list[j].value;
                            li.setAttribute('id',Nodes[i].list[j].id);
                            var lcl = Nodes[i].list[j].class.split(" ");
                            lcl.forEach(element => {
                                li.classList.add(element);
                            });

                            if(lcl.length === 1){
                                applyStyle(li,Nodes[i].list[j].style);
                            }

                            li.style.boxSizing = "border-box";
                            li.style.cursor = "pointer";
                            n.append(li);
                            defaultEvents(li);
                        }
                        var btn=document.createElement('button');
                        btn.classList.add('akbl-new-list-add');
                        btn.innerHTML = "+";
                        btn.setAttribute('id',setId());
                        listBtnEvents(btn);
                        n.append(btn);
                        
                        Wrap.append(n);
                        break;

            case 'space' :n.style.boxSizing = "border-box";
                        n.style.cursor = "pointer";
                        Wrap.append(n);
                        defaultEvents(n);
                          break;

            case 'code' :var c=document.createElement('code');
                        c.innerHTML = Nodes[i].html;
                        
                        n.append(c);
                        n.style.boxSizing = "border-box";
                        n.style.cursor = "pointer";
                        Wrap.append(n);
                        defaultEvents(n);
                        break;
            
            case 'coverImage' :
            case 'imageBox' :if(Nodes[i].data !== null){
                                n.innerHTML = ""
                                n.style.background = "url("+Nodes[i].data+")";
                                n.style.backgroundSize = "cover";
                                n.style.backgroundPosition = "center";
                            }else{
                                n.innerHTML = Svg.image;
                                n.style.display = "flex";
                                n.style.boxSizing = "border-box";
                                n.style.cursor = "pointer";
                                var svg = n.getElementsByTagName('svg')[0];
                                svg.style.width = "30%";
                                svg.style.margin = "auto";
                            }
                            defaultEvents(n);
                            Wrap.append(n);
                            break;
            case 'date' :
            n.innerHTML = Nodes[i].html;
            n.style.cursor = "pointer";
            n.style.boxSizing = "border-box";
            defaultEvents(n);
            Wrap.append(n);
            break;

        }

    }
        window.scrollTo(0,LastScroll);

    
}

//Event listeners of text element
function defaultEvents(node){

        node.onmouseenter = function(){
            this.style.border = "1px solid #02339c";
        }
        node.onmouseout = function(){
            this.style.border = "none";
        }

        node.onclick = function(){
            Selected = node;
            enableSecMenu();
        }   
}

//Event listeners of list add btn
function listBtnEvents(node){

    node.onclick = function(){
        Selected = node.parentNode;
        insertElementToList();
    }

}


//Second menu button event Listeners
function secondMenuListeners(node){

        node.onclick = function(){
            if(node.value == 'moveup')
            moveElemUp();
            if(node.value == 'movedown')
            moveElemDown();
            if(node.value == 'edit')
            createInput(Selected);
            if(node.value == 'delete')
            deleteElem();

            disableSecMenu();
        }
}


// DEPENDENCIES FUNCTIONS

//For moving element up by one
function moveElemUp(){
    LastScroll = getScroll();
    var type=Nodes[getNode().i].type;
    var node=getNode();
   
    if(type === 'list' && !ListCheck){
        if(node.j !== 0){
            var elem = Nodes[node.i].list[node.j];
            Nodes[node.i].list[node.j] = Nodes[node.i].list[node.j - 1];
            Nodes[node.i].list[node.j - 1] = elem;

            render();
        }
    }else{

        if(node.i !== 0){
            var elem = Nodes[node.i];
            Nodes[node.i] = Nodes[node.i - 1];
            Nodes[node.i - 1] = elem;

            render();
        }

    }
};

//For moving element down by one
function moveElemDown(){
    LastScroll = getScroll();
    var type=Nodes[getNode().i].type;
    var node=getNode();
    if(type === 'list' && !ListCheck){
        if(node.j !== Nodes[node.i].list.length - 1){
            var elem = Nodes[node.i].list[node.j];
            Nodes[node.i].list[node.j] = Nodes[node.i].list[node.j + 1];
            Nodes[node.i].list[node.j + 1] = elem;

            render();
        }
    }else{

        if(node.i !== Nodes.length - 1){
            var elem = Nodes[node.i];
            Nodes[node.i] = Nodes[node.i + 1];
            Nodes[node.i + 1] = elem;

            render();
        }
    }
};

//For deleting element
function deleteElem(){
    LastScroll = getScroll();
    var type=Nodes[getNode().i].type;
    var tag=Nodes[getNode().i].tag;
    var node=getNode();
    
    if(type === 'list' && !ListCheck){
        Nodes[node.i].list.splice(node.j,1);
        if(Nodes[node.i].list.length === 0){
            Nodes.splice(node.i,1);
        }
    }else{

        Nodes.splice(node.i,1);
    }
    if(tag === 'h1')
    Title = false;

    if(type === 'coverImage')
    Coverimage = false;

    render();
};

//For enabling main menu
function enableMainMenu(){
    MainMenu.container.style.display = "flex";
    createMainMenuInsider();
};

//For enabling second menu
function enableSecMenu(){
    Menu.container.style.display = "flex";
    createSecondMenu();

};

//For disabling main menu
function disableMainMenu(){
    if(Publishing) return;
    MainMenu.container.style.display = "none";
    MainMenu.contentBox.innerHTML = "";
};

//For disabling second menu
function disableSecMenu(){
    Menu.container.style.display = "none";
    Menu.contentBox.innerHTML = "";
    ListCheck = false;
};

// For creating second(side) menu
function createSecondMenu(){
    Menu.contentBox.innerHTML = "";
    var type=Nodes[getNode().i].type;
    const main=document.createElement('div');

    const tt=document.createElement('p');
    var pst ={
        margin: '30px 0 30px 10px',
        fontSize: '24px'
    }
    applyStyle(tt,pst);
    if(type === 'text') tt.innerHTML = "Text Element";
    if(type === 'header') tt.innerHTML = "Header Element";
    if(type === 'imageBox' || type === 'coverImage') tt.innerHTML = "Image Box Element";
    if(type === 'list') tt.innerHTML = "List Element";
    if(type === 'note') tt.innerHTML = "Note Element";
    if(type === 'code') tt.innerHTML = "Code Element";
    if(type === 'space') tt.innerHTML = "Verticle Space Element";
    if(type === 'date') tt.innerHTML = "Date Element";

    Menu.contentBox.append(tt);

    var st={
        height: '180px',
        width:  '180px',
        background: 'white',
        padding: '5px',
        margin: '20px auto'
    }
    applyStyle(main,st);
    if(type === 'list'){
        const ch=document.createElement('div');
        var st={
            height: 'auto',
            width:  '180px',
            background: 'white',
            padding: '5px',
            margin: '20px auto',
            display : 'flex',
            alignItems : 'center',
            justifyContent : 'space-between'
        }
        applyStyle(ch,st);

        const inp=document.createElement('input');
        inp.setAttribute('type','checkbox');
        inp.setAttribute('id',setId());
        if(ListCheck)
        inp.setAttribute('checked','');

        const label=document.createElement('label');
        label.innerHTML = "Alter Whole List";
        label.setAttribute('for',inp.id);

        inp.onchange = function(e){
            ListCheck = !ListCheck;
            createSecondMenu();
        }

        ch.append(label);
        ch.append(inp);
        Menu.contentBox.append(ch);
    }

    st = {
        height: '80px',
        width: '80px',
        margin: '5px',
        border: 'none',
        float: 'left',
        cursor: 'pointer',
        background: 'rgb(241, 241, 241)',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center',
        fontSize : '14px'
    }
    for(var i=0; i<4; i++){
        var b = document.createElement('button');
        applyStyle(b,st);
        if( i=== 0) {
            b.innerHTML = Svg.arrow + "Move Up";
            b.setAttribute('value','moveup');
        }
        if( i === 1) {
            b.innerHTML = Svg.arrow + "Move Down";
            b.setAttribute('value','movedown');
        }
        if( i === 2) {
            if(ListCheck || type === 'space' || type === 'date') continue;
            if(type === 'imageBox' || type === 'coverImage'){
                const imgbox=document.createElement('div');
                var ist={
                    height: '80px',
                    width: '80px',
                    margin: '5px',
                    border: 'none',
                    float: 'left',
                    cursor: 'pointer',
                    background: 'rgb(241, 241, 241)',
                    overflow: 'hidden',
                    position : 'relative'
                }
                applyStyle(imgbox,ist);

                const inp=document.createElement('input');
                inp.setAttribute('id',setId());
                inp.setAttribute('type',"file");
                inp.style.height ="100%";
                inp.style.width ="100%";
                inp.style.position ="absolute";
                inp.style.visibility ="hidden";
                inp.onchange = function(){
                    fileHandler(inp);
                    disableSecMenu();
                }

                var lab=document.createElement('label');
                lab.setAttribute('for',inp.id);
                var ls={
                    cursor:'pointer',
                    height : '100%',
                    width : '100%',
                    position : 'absolute',
                    display : 'flex',
                    flexDirection : 'column',
                    alignItems : 'center',
                    justifyContent : 'center'
                }
                applyStyle(lab,ls);
                lab.innerHTML = Svg.image+"change";
                var svg = lab.getElementsByTagName('svg')[0];
                svg.style.height = "20px";
                svg.style.width = "20px";
                svg.style.margin = "10px 0";
                svg.style.fill = "rgb(71,71,71)";

                imgbox.append(inp);
                imgbox.append(lab);
                main.append(imgbox);
                continue;

            }else{
                b.innerHTML = Svg.pencil + "Edit";
                b.setAttribute('value','edit');
            }
        }
        if( i === 3) {
            b.innerHTML = Svg.close + "Delete";
            b.setAttribute('value','delete');
        }
        var svg = b.getElementsByTagName('svg')[0];
        svg.style.height = "20px";
        svg.style.width = "20px";
        svg.style.margin = "10px 0";
        svg.style.fill = "rgb(71,71,71)";
        if(i == 1) svg.style.transform ="rotate(180deg)";
        secondMenuListeners(b);
        main.append(b);

    }

    Menu.contentBox.append(main);

};

function createMainMenuInsider(){
    MainMenu.contentBox.innerHTML = "";

    // Publish button
    const top = document.createElement('div');
    var st={
        height : '70px',
        width : '95%',
        margin : '0 auto 20px auto',
        position : 'relative',
        background : 'white',
        display : 'flex',
        justifyContent : 'flex-end',
        alignItems : 'center'
    };
    applyStyle(top,st);

    const publish = document.createElement('button');
    publish.innerHTML = "Publish";
    publish.setAttribute('value',0);
    publish.setAttribute('type','button');
    var st={
        height : '50px',
        width : '100px',
        border : 'none',
        background : '#02339c',
        color : 'whitesmoke',
        margin : '0 10px',
        cursor : 'pointer',
        transition : 'all 300ms ease'
    }
    applyStyle(publish,st);

    hover(publish,{transform:'scale(1.1)'},{transform:'none'});

    publish.onclick = function(){

        if(!Wrap){
            new Msg("'wrapper' is not defined");
            return;
        }

        if(!aapi){
            new Msg("'post' is not defined");
            return;
        }

        if(!Title){
            new Msg("Title not inserted");
            return;
        }
        if(!Coverimage){
            new Msg("Cover Image not inserted");
            return;
        }
        if(publish.value++ != 0) return;

        publish.innerHTML = "Publishing...";
        Publishing = true;

        const api=new API();
        api.url = aapi;
        api.method = "POST";

        api.bind({title:findByTag('h1').html});
        api.bind({json:JSON.stringify(Nodes)});
        api.bind({docType:Doctype});
        api.bind({cusSlug:cusSlug});

        // api.progress = function(loaded){
        //     console.log(loaded);
        // };

        api.loaded = function(result){
            publish.innerHTML = 'Publish';
            Publishing = false;
            disableMainMenu();
            if(result.status == 'success'){
                if(result.msg == 'Published Successfully'){
                    Title = Coverimage = false;
                    Nodes = [];
                    render();
                }else{

                    var newS = window.location.href.replace(cusSlug,result.newSlug);
                    window.location.href = newS;
                }
            }
            new Msg(result.msg);
        };

        api.exec();

    };

    top.append(publish);
    MainMenu.contentBox.append(top);

    //Add Title button
    if(!Title)
    createMImenuBtn('title');
    
    //Add cover image button
    if(!Coverimage)
    createMImenuBtn('coverImage');


    createMImenuBtn('date');

    //Add Subheading button
    createMImenuBtn('subheading');


    //More headings option
    const cnt = document.createElement('div');
    const cnts={
        width: '85%',
        margin : '5px auto',
        height : 'auto',
        padding : '10px',
        background : 'white',
        border : '1px solid lightgray',
        boxSizing : 'border-box',
        borderRadius : '10px'
    }
    applyStyle(cnt,cnts);

    var btns={
        border : '1px solid gray',
        padding :'2px',
        borderRadius : '5px',
        height : '30px',
        width : '30px',
        cursor : 'pointer',
        transition : 'all 300ms ease',
        fontSize : '14px',
        display : 'inline-block',
        margin : '6px 4px',
        background : 'white'
    }

    const pt=document.createElement('p');
    pt.innerHTML = 'More Headings';
    cnt.append(pt);

    for(var i=0; i<4; i++){

    var btn1=document.createElement('button');
    applyStyle(btn1,btns);
    if(i== 0){
    btn1.innerHTML = "H3";
    btn1.setAttribute('value','H3');
    }
    if(i== 1){
        btn1.innerHTML = "H4";
        btn1.setAttribute('value','H4');
    }
    if(i== 2){
        btn1.innerHTML = "H5";
        btn1.setAttribute('value','H5');
    }
    if(i== 3){
        btn1.innerHTML = "H6";
        btn1.setAttribute('value','H6');
    }
    addElemOnClick(btn1);
    hover(btn1,{transform:'scale(1.1)'},{transform:'none'});
    cnt.append(btn1);

    }

    MainMenu.contentBox.append(cnt);

    // Rest Menu Buttons
    createMImenuBtn('paragraph');
    createMImenuBtn('code');
    createMImenuBtn('note');
    createMImenuBtn('imageBox');
    createMImenuBtn('paraSpace');


    // List Options
    const lcnt=document.createElement('div');
    applyStyle(lcnt,cnts);

    const lp=document.createElement('p');
    lp.innerHTML = "Lists"
    lcnt.append(lp);

    btns={
        border : '1px solid gray',
        borderRadius : '5px',
        height : 'auto',
        width : '50px',
        cursor : 'pointer',
        transition : 'all 300ms ease',
        display : 'inline-block',
        margin : '6px 4px',
        background : 'white',
        padding : '2px'
    }
    for(var i=0; i<2; i++){
        var btn=document.createElement('button');
        applyStyle(btn,btns);
        hover(btn,{transform:'scale(1.1)'},{transform:'none'})

        var bx=null;
        if(i == 0){
            btn.setAttribute('value','ul');
            bx = document.createElement('ul');
        }
        if(i == 1){
            btn.setAttribute('value','ol');
            bx = document.createElement('ol');
        }

        bx.style.margin = '0 0 0 20px';
        bx.style.padding = "0";
        var l1=document.createElement('li');
        l1.style.fontSize = "14px";
        l1.style.textAlign = 'left';
        l1.innerHTML = '.....';

        addElemOnClick(btn);
        bx.append(l1,l1);
        btn.append(bx);
        lcnt.append(btn);
    }

    MainMenu.contentBox.append(lcnt);

}


function createMImenuBtn(name){
    var shst={
        height : '40px',
        width : '80%',
        margin : '5px auto',
        background : 'white',
        border : '1px solid lightgray',
        borderRadius : '10px',
        overflow : 'hidden',
        transition : 'all 300ms ease',
        padding : '0 5px'
    }
    var shbst = {
        border : 'none',
        background : 'white',
        borderRadius : '5px',
        height : '100%',
        width : '100%',
        cursor : 'pointer',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center'
    }

    var sh = document.createElement('div');
    var shb = document.createElement('button');
    
    applyStyle(sh,shst);
    applyStyle(shb,shbst);
    hover(sh,{transform:'scale(1.1)'},{transform:'none'});

    if(name == 'title'){
        shb.innerHTML = "Title"
        shb.value = 'title';
    }
    if(name == 'coverImage'){
        shb.innerHTML = "Cover Image"
        shb.value = 'coverImage';
    }
    if(name == 'subheading'){
        shb.innerHTML = "Sub Heading"
        shb.value = 'subheading';
    }
    if(name == 'paragraph'){
        shb.innerHTML = "Paragraph"
        shb.value = 'paragraph';
    }
    if(name == 'note'){
        shb.innerHTML = "Note"
        shb.value = 'note';
    }
    if(name == 'code'){
        shb.innerHTML = "Code"
        shb.value = 'code';
    }
    if(name == 'imageBox'){
        shb.innerHTML = "Image Box"
        shb.value = 'imageBox';
    }
    if(name == 'paraSpace'){
        shb.innerHTML = "Para Space"
        shb.value = 'paraSpace';
    }
    if(name == 'date'){
        shb.innerHTML = "Date"
        shb.value = 'date';
    }

    shb.innerHTML += Svg.add;
    var svg=shb.getElementsByTagName('svg')[0];
    svg.style.height = '60%';
    addElemOnClick(shb);

    sh.append(shb);
    MainMenu.contentBox.append(sh);
}

function hover(node,st,st2){

    node.onmouseover = function(){
        applyStyle(node,st);
    }

    node.onmouseout = function(){
        applyStyle(node,st2);
    }
}

function addElemOnClick(node,func){

    node.onclick = function(){
        if(!Wrap){
            new Msg("Error: wrapper is empty");
            return;
        }
        switch(node.value){
            case 'title' : ADDH1();
            createMainMenuInsider();
            break;

            case 'coverImage' : ADDCOVERIMAGE();
            createMainMenuInsider();
            break;

            case 'subheading' : ADDH2();
            break;

            case 'H3' : ADDH3();
            break;

            case 'H4' : ADDH4();
            break;

            case 'H5' : ADDH5();
            break;

            case 'H6' : ADDH6();
            break;

            case 'paragraph' : ADDTEXT();
            break;

            case 'note' : ADDNOTE();
            break;

            case 'code' : ADDCODE();
            break;

            case 'paraSpace' : ADDPARASPACE();
            break;

            case 'imageBox' : ADDIMAGEBOX();
            break;

            case 'ul' : ADDLIST();
            break;

            case 'ol' : ADDOLIST();
            break;

            case 'date' : ADDDATE();
            break;
        }
        disableMainMenu();
    }
}

function styleToCamel(str){

    var arr=str.split(';');
    arr.pop();
    var st={}
    for(var i=0; i<arr.length; i++){
        var newstr=arr[i].replace(/\;/g,'').split(":");
        var left=newstr[0].trim();
        var right=newstr[1].trim();
        var newleft = "";

        for(var j=0; j<left.length; j++){
            if(left[j] != '-'){
                newleft += left[j];
            }else{
                newleft += left[++j].toUpperCase();
            }
        }
        st[newleft] = right
    }
    return st;
}

function addElemOnLoad(){
    var elem=Wrap.children;
    for(var i=0; i<elem.length; i++){
        var node=elem[i];

        switch(node.classList[0]){
            case 'BEheader':
                Nodes.push({
                    id:setId(),
                    tag:'h1',
                    type:'header',
                    html : node.innerHTML.replace(/\n/g,'').replace(/&amp;/g,'&'),
                    class: node.getAttribute('class'),
                    style: styleToCamel(node.getAttribute('style'))
                });
                Title = true;
            break;

            case 'BEsubheader':
                Nodes.push({
                    id:setId(),
                    tag:'h2',
                    type:'header',
                    html : node.innerHTML.replace(/\n/g,'').replace(/&amp;/g,'&'),
                    class: node.getAttribute('class'),
                    style: styleToCamel(node.getAttribute('style'))
                });
            break;

            case 'BEh3' :
            case 'BEh4' :
            case 'BEh5' :
            case 'BEh6' :
                var ne=node.classList[0].replace(/BE/,'');
                Nodes.push({
                    id:setId(),
                    tag:ne,
                    type:'header',
                    html : node.innerHTML.replace(/\n/g,'').replace(/&amp;/g,'&'),
                    class: node.getAttribute('class'),
                    style: styleToCamel(node.getAttribute('style'))
                });
            break;

           case 'BEnote' :
            Nodes.push({
                id:setId(),
                tag:'p',
                type:'note',
                html : node.innerHTML.replace(/\n/g,'').replace(/&amp;/g,'&'),
                class: node.getAttribute('class'),
                style: styleToCamel(node.getAttribute('style'))
            });
            break;

            case 'BEpara' :
                Nodes.push({
                    id:setId(),
                    tag:'p',
                    type:'text',
                    html : node.innerHTML.replace(/\n/g,'').replace(/&amp;/g,'&'),
                    class: node.getAttribute('class'),
                    style: styleToCamel(node.getAttribute('style'))
                });
            break;

            case 'BEcode' :
                Nodes.push({
                    id:setId(),
                    tag:'pre',
                    type:'code',
                    html : node.innerHTML.replace(/\n/g,'').replace(/&amp;/g,'&'),
                    class: node.getAttribute('class'),
                    style: styleToCamel(node.getAttribute('style'))
                });
            break;

            case 'BEdate' :
                Nodes.push({
                    id:setId(),
                    tag:'p',
                    type:'date',
                    html : node.innerHTML.replace(/\n/g,'').replace(/&amp;/g,'&'),
                    class: node.getAttribute('class'),
                    style: styleToCamel(node.getAttribute('style'))
                });
            break;

            case 'BElist' :
                var tag=node.tagName.toLowerCase();
                var list = [];
                var listElem = node.getElementsByTagName('li');

                for(var j=0; j<listElem.length; j++){
                    var element=listElem[j];

                    list.push({
                        id:setId(),
                        value:element.innerHTML.replace(/\n/g,'').replace(/&amp;/g,'&'),
                        class: element.getAttribute('class'),
                        style: styleToCamel(element.getAttribute('style'))
                    })

                }
               
                Nodes.push({
                    id:setId(),
                    tag:tag,
                    type:'list',
                    list : list,
                    class: node.getAttribute('class'),
                    style: styleToCamel(node.getAttribute('style'))
                });
            break;

            case 'BEcoverimage' :
            case 'BEimgbox' :
                var tname = node.classList[0] == 'BEcoverimage' ? 'coverImage' : 'imageBox';
                if(tname === 'coverImage') Coverimage = true;
                var url= node.style.background.split("url")[1].split(" ")[0].slice(3,-2);

                Nodes.push({
                    id:setId(),
                    tag:'div',
                    type:tname,
                    file : null,
                    data: '/'+url,
                    class: node.getAttribute('class'),
                    style: styleToCamel(node.getAttribute('style'))
                });
            break;           
                
        }
    }

    render();
    window.scrollTo(0,0);
}

//For inserting selected image to image box
function fileHandler(inp){
    var node = getNode();
    var file=inp.files[0];
    Nodes[node.i].file = file;

    var fr=new FileReader();
    fr.readAsDataURL(file);
    fr.onload = function(e) {
    Nodes[node.i].data = e.target.result;
    
    render();
    }
}

//For adding new list item to selected list
function insertElementToList(){
    var node= getIndex(Selected);
    Nodes[node].list.push({id:setId(),value:"List item",class: cusClass.listElem,style: cusStyle.listElem});
    render();
};

//For replacing text element with textarea
function createInput(node){

if(!LastNode || node.id !== LastNode.id){
    Dvalue=node.innerHTML;
}
LastNode = node;

var inp=document.createElement('textarea');
Input = inp;

styleInput();
node.parentNode.replaceChild(inp,node);
inp.focus();

inp.oninput = function(e){
    inp.style.height = '';
    inp.style.height = inp.scrollHeight + "px";


    if(InpSpace && e.data === " " && Selected.tagName !== 'PRE'){
        Input.value= Input.value.substring(0,Input.value.length-1);
        return;
    }

    e.data === " " ? InpSpace=true : InpSpace=false
    
}

inp.onblur = function(){

    LastScroll = getScroll();
    InputToText();
    destroyInput();
}

};

//For styling textarea
function styleInput(){

    if(Input === null) return ;
    var cs=window.getComputedStyle(Selected);
   
    Input.style.width = cs.width;
    Input.style.border = "none";
    Input.style.fontSize = cs.fontSize;
    Input.style.lineHeight = cs.lineHeight;
    Input.style.color = cs.color;
    Input.style.fontFamily = cs.fontFamily;
    Input.style.fontStyle = cs.fontStyle;
    Input.style.fontWeight = cs.fontWeight;
    Input.style.padding = cs.padding;
    Input.style.height = cs.height;
    Input.style.overflowY="hidden";
    Input.style.background=cs.background;
    textToInput();

}


//For converting text element to textarea
function textToInput(){
    // var node=Array.prototype.indexOf.call(Nodes, Selected);
        // if(node !== -1) models[i].keys.splice(node,1);

    var node=getNode();
    var str="";
    if(Selected.tagName === 'LI'){
        str=Nodes[node.i].list[node.j].value.split('<br>');
    }else{
        str=Nodes[node.i].html.split('<br>');
    }
  

    var start=0;
    var lst=str.length-1;
    var arr="";
    var space=false;

    while(str[start] === '' || str[start] === ' '){
        start++;
     }
    while(str[lst] === "" || str[lst] === " "){
        lst--;
    }

    for(var i=start; i<=lst; i++){
            for(var j=0; j<str[i].length; j++){
                if(space && str[i][j] === " " && Selected.tagName !== 'PRE'){
                    continue;
                }else{
                    arr += str[i][j];
                }
                str[i][j] === " " ? space=true : space=false
                
            }

            if( i !== str.length-1)
            arr += '\n';
    }
    Input.value = arr;

};


//For converting textarea to text element
function InputToText(){
    var node=getNode();

    var val=Input.value;
    var start=0;
    var lst=val.length-1;
    var str="";
    var space=false;

    if(val == ""){
        Selected.tagName === 'LI' ?
        Nodes[node.i].list[node.j].value = Dvalue :
        Nodes[node.i].html = Dvalue;

    }else{
        while(val[start] === '\n' || val[start] === ' '){
            start++;
         }
         
        while(val[lst] === '\n' || val[lst] === ' '){
            lst--;
         }
         
    
        
        for(var i=start; i<=lst; i++){
            if(val[i] === '\n'){
                str += '<br>';
            }else{
                if(space && val[i] === " " && Selected.tagName !== 'PRE'){
                    continue;
                }else{
                    str += val[i];
                }
                val[i] === " " ? space=true : space=false
                
            }
        }
        Selected.tagName === 'LI' ?
        Nodes[node.i].list[node.j].value = str :
        Nodes[node.i].html = str;
    

    }
    render();
};


//For Destroying dynamically created input
function destroyInput(){
Selected = null;
Input = null;
};

function API(){
    this.url = undefined;
    this.method = undefined;
    const data = {};
    var xhr = undefined;
    this.progress = undefined;
    this.loaded = undefined;
    let urlEncodedData = "",
    urlEncodedDataPairs = [],
    name;

    this.bind = function(res){
       var key= Object.keys(res);
       var val = Object.values(res);
       data[key] = val;
    };

    if(window.XMLHttpRequest) xhr=new XMLHttpRequest();
    else if(window.ActiveXObject) xhr= new ActiveXObject("Microsoft.XMLHTTP");

    this.exec = function(){

        // Turn the data object into an array of URL-encoded key/value pairs.
    for( name in data ) {
        urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
    }

    urlEncodedData = urlEncodedDataPairs.join( '&' ).replace( /%20/g, '+' );


        xhr.upload.addEventListener("progress",e =>{
            var perc=e.lengthComputable?(e.loaded/e.total)*100:0;
            perc=perc.toFixed(2);
            if(this.progress !== undefined)
            this.progress(perc);
        });

        xhr.onreadystatechange = function(e){
            if(this.readyState === 4){
                if(this.status !== 200)
                new Msg("Error: while connecting");
            }
        }

        xhr.onload=function(e){
            if(e.target.status === 200 && this.loaded !== undefined)
            this.loaded(JSON.parse(e.target.responseText));
        };
        xhr.onload = xhr.onload.bind(this);

        xhr.open(this.method, this.url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(urlEncodedData);

    };
}

function Msg(message){
    const msgbox=document.createElement('div');
    var st=msgbox.style;
    st.height = "100vh";
    st.width = "100%";
    st.position = "fixed";
    st.zIndex = "100";
    st.background = "rgba(0,0,0,.3)";
    st.display = "flex";
    st.alignItems = "center";
    st.justifyContent = "center";
    st.top = "0";
    st.left = "0";

    const msg=document.createElement('div');
    st=msg.style;
    st.height = "250px";
    st.width = "300px";
    st.display = "flex";
    st.flexDirection = "column";
    st.justifyContent = "center";
    st.alignItems = "center";
    st.background = "white";

    const p=document.createElement('p');
    p.innerHTML = message;
    
    const btn=document.createElement('button');
    btn.innerHTML = "OK";
    btn.setAttribute('type','button');
    st=btn.style;
    st.height = "40px";
    st.border = "none";
    st.padding = "5px 20px";
    st.margin = "40px 0 0 0";
    st.cursor = "pointer";
    btn.onclick = function(){
        var node= this.parentNode.parentNode;
        node.parentNode.removeChild(node);
    }

    msg.append(p);
    msg.append(btn);
    msgbox.append(msg);
    document.body.append(msgbox);

}

    module.exports.blogEasy = function(sett){
        if(sett.wrapper){
            wrapper(sett.wrapper);
            Wrap.style.paddingBottom = "80px";
        }
    
        if(sett.post)
        POST(sett.post);
    
        if(sett.class){
            var keys=Object.keys(sett.class);
            var val=Object.values(sett.class);
    
            for(var i=0; i<keys.length; i++){
                cusClass[keys[i]] +=' ' + val[i];
            }
        }
    
        if(sett.type && sett.type === 'upload'){
            Doctype = 'upload';
            createMainMenu();
            createMenu();
        }
        if(sett.type && sett.type === 'edit'){
            Doctype = 'edit';
            addElemOnLoad();
            var ntitle = findByTag('h1');
            if(ntitle){
            cusSlug=ntitle.html
            .replace(/[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]/g,"")
            .replace(/[ ]+/g,'-')
            .replace(/-$/g,'')
            .toLowerCase();
            }
    
            createMainMenu();
            createMenu();
        }
    }