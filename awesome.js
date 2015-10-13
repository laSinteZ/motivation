var motivWords = [
    'Поднажми.',
    'Ты вообще пытаешься?',
    'Делай дело.',
    'Just do it.',
    'Просто сделай это'
];

var demotivWords = [
    'Чёрт с тобой.',
    'Ты ничтожество.',
    'У тебя всё равно не получилось бы.',
    'И не делай.',
    'Бросай.',
    'А зачем тогда брался?',
    'Лучше бы и не брался.'

];

var congratWords = [
    'Well done!',
    'Отличная работа!',
    'Молодец, всё правильно.',
    'Хорошая работа.',
    'Ты смог.'
];

var previousWord;
var clickCount = 0;

var getRandomWord = function(words){
    var word=words[Math.floor(Math.random() * words.length)];
    while(word==previousWord){
        word=words[Math.floor(Math.random() * words.length)];
    };
    previousWord=word;
    return word;
};

var showMotivationVideo = function(){
    document.getElementById("motivationVideo").style.display = 'inline-block';
};

var hideMotivationVideo = function(){
    document.getElementById("motivationVideo").style.display = 'none';
};

var showDemotivationVideo = function(){
    document.getElementById("DEmotivationVideo").style.display = 'inline-block';
};

var hideDemotivationVideo = function(){
    document.getElementById("DEmotivationVideo").style.display = 'none';
};

var motivOrDemotiv = function(){
    if (clickCount<6) {motivation();} else {DEmotivation();};
    clickCount=clickCount+1;
};

var motivation = function(){
    showYesNo();
    document.getElementById("motivation").innerHTML=getRandomWord(motivWords);
    hideDemotivationVideo();
    showMotivationVideo();
};

var DEmotivation = function(){
    showSad();
    document.getElementsByTagName("body")[0].style.color='#808080';
    document.getElementsByTagName("body")[0].style.backgroundColor='#000000';
    document.getElementById("motivation").innerHTML=getRandomWord(demotivWords);
    hideMotivationVideo();
    showDemotivationVideo();
};

var showYesNo = function(){
    document.getElementById("yn").style.display='block';
    document.getElementById("sad").style.display='none';
    document.getElementById("good").style.display='none';
};

var showSad = function(){
    document.getElementById("sad").style.display='block';
    document.getElementById("yn").style.display='none';
    document.getElementById("good").style.display='none';
};

var showGood = function(){
    document.getElementById("good").style.display='block';
    document.getElementById("yn").style.display='none';
    document.getElementById("sad").style.display='none';
    document.getElementById("yes").style.display='none';
    document.getElementById("no").style.display='none';
};

var wellDone = function(){
    showGood();
    document.getElementsByTagName("body")[0].style.color='#000000';
    document.getElementsByTagName("body")[0].style.backgroundColor='#ffffff';
    document.getElementById("motivation").innerHTML=getRandomWord(congratWords);
    hideMotivationVideo();
    hideDemotivationVideo();
    clickCount=0;
};
