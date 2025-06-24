nimi_pi_sitelen_lasina = ["a", "akesi","ala","alasa","ale","anpa","ante","anu","awen","e","en","esun","ijo","ike","ilo","insa","jaki","jan","jelo","jo","kala","kalama","kama","kasi","ken","kepeken","kili","kiwen","ko","kon","kule","kulupu","kute","la","lape","laso","lawa","len","lete","li","lili","linja","lipu","loje","lon","luka","lukin","lupa","ma","mama","mani","meli","mi","mije","moku","moli", "monsi","mu","mun","musi","mute","nanpa","nasa","nasin","nena","ni","nimi","noka","o","olin","ona","open","pakala","pali","palisa","pan","pana","pi","pilin","pimeja","pini","pipi","poka","poki","pona","pu","sama","seli","selo","seme","sewi","sijelo","sike","sin","sina","sinpin","sitelen","sona","soweli","suli","suno","supa","suwi","tan","taso","tawa","telo","tenpo","toki","tomo","tonsi","tu","unpa","uta","utala","walo","wan","waso","wawa","weka","wile","*"]
nimi_pi_sitelen_pona = ["󱤀", "󱤁","󱤂","󱤃","󱤄","󱤅","󱤆","󱤇","󱤈","󱤉","󱤊","󱤋","󱤌","󱤍","󱤎","󱤏","󱤐","󱤑","󱤒","󱤓","󱤔","󱤕","󱤖","󱤗","󱤘","󱤙","󱤚","󱤛","󱤜","󱤝","󱤞","󱤟","󱤠","󱤡","󱤢","󱤣","󱤤","󱤥","󱤦","󱤧","󱤨","󱤩","󱤪","󱤫","󱤬","󱤭","󱤮","󱤯","󱤰","󱤱","󱤲","󱤳","󱤴","󱤵","󱤶","󱤷","󱤸","󱤹","󱤺","󱤻","󱤼","󱤽","󱤾","󱤿","󱥀","󱥁","󱥂","󱥃","󱥄","󱥅","󱥆","󱥇","󱥈","󱥉","󱥊","󱥋","󱥌","󱥍","󱥎","󱥏","󱥐","󱥑","󱥒","󱥓","󱥔","󱥕","󱥖","󱥗","󱥘","󱥙","󱥚","󱥛","󱥜","󱥝","󱥞","󱥟","󱥠","󱥡","󱥢","󱥣","󱥤","󱥥","󱥦","󱥧","󱥨","󱥩","󱥪","󱥫","󱥬","󱥭","󱥾","󱥮","󱥯","󱥰","󱥱","󱥲","󱥳","󱥴","󱥵","󱥶","󱥷","󱦜"]
points = 0
playsRemaining = 15
upgrades = {
    "plusOnePoint":{name: "plusOnePoint",nimi:"󱥔󱥳󱥝",toki_suli:"󱥞󱤙󱥆󱤡󱥞󱤖󱤓󱤉󱥔󱦕󱥝󱥳",toki:"󱥞󱤙󱥠󱥁󱤡󱥞󱤖󱤓󱤉󱥔󱥳󱥝",word_submited_function:function(){score+=1},uses:3,deckChangeCount:8,type:"letterUpgrade"},
    "o_pana_e_sike":{name:"o_pana_e_sike",nimi:"󱥜󱥐",toki_suli:"󱥞󱤙󱥆󱤡󱥆󱤧󱥖󱥁󱦝󱥠「󱦜」󱤧󱤬󱥐󱥆󱦜󱥞󱤙󱥁󱤡󱤴󱥌󱤉󱥔󱥮󱥮󱥩󱥞",toki:"󱥞󱤙󱥠󱥁󱤡󱤿󱤧󱥖󱥁󱦝󱥠「󱦜」󱤧󱤬󱥐󱥆󱦜󱥞󱤙󱥁󱤡󱤴󱥌󱤉󱥔󱥮󱥮󱥩󱥞",letter_submited_function:oPanaESike,word_submited_function:function(){score+=4},uses:3,deckChangeCount:5,type:"letterUpgrade"},
    "sike_open":{name:"sike_open",nimi:"󱥜󱥇",toki_suli:"󱥞󱤙󱥆󱤡󱥆󱤧󱥖󱥁󱦝󱥠「󱦜」󱤧󱤬󱥇󱥆󱦜󱥞󱤙󱥆󱤡󱤴󱥌󱤉󱥔󱤭󱥩󱥞",toki:"󱥞󱤙󱥠󱥁󱤡󱤿󱤧󱥖󱥁󱦝󱥠「󱦜」󱤧󱤬󱥇󱥍󱥠󱥁󱦜󱥞󱤙󱥆󱤡󱤴󱥌󱤉󱥔󱤭󱥩󱥞",letter_submited_function:sikeOpen,word_submited_function:function(){score+=5},uses:3,deckChangeCount:5,type:"letterUpgrade",canBeApplyedTo:function(letter){return(!letter.vowel)}},
    "StartWordOnly":{name:"StartWordOnly",nimi:"󱥠󱦓󱥇󱥂󱦘",toki_suli:"󱥞󱤘󱤙󱥆󱤬󱥇󱥂󱥨󱦜󱥨󱥞󱤙󱥆󱤡󱤴󱥮󱤉󱥔󱥁󱦝󱥞󱤖󱤓󱤉󱥆󱥧󱥉󱥂",toki:"󱥞󱤘󱤙󱥠󱥁󱤬󱥇󱥂󱥨󱦜󱥨󱥞󱤙󱥆󱤡󱤴󱥮󱤉󱥔󱥁󱦝󱥞󱤖󱤓󱤉󱥆󱥧󱥉󱥂",letter_submited_function:startWordOnly_letterSubmited,after_addition_function:startWordOnly_afterAddition,uses:1,deckChangeCount:5,type:"letterUpgrade"},
    "wawa_li_pona":{name:"wawa_li_pona",nimi:"󱥵󱤧󱥔",toki_suli:"󱥞󱤙󱥆󱤬󱥂󱤡󱥠󱥵󱤄󱥂󱤧󱥌󱤉󱥔󱥮󱥝",toki:"󱥞󱤙󱥁󱤬󱥂󱤡󱥠󱥵󱤄󱥂󱤧󱥌󱤉󱥔󱥮󱥝",uses:1,deckChangeCount:5,word_submited_function:wawaLiPona,type:"letterUpgrade"},
    "ken":{name: "ken",nimi:"󱤘",toki_suli:"󱤘󱤡󱥆󱤧󱥌󱤉󱥔󱤭󱥩󱥞󱦜󱥨󱤘󱥍󱥣󱥖󱤡󱥆󱤧󱥁󱤂",toki:"󱤘󱤡󱥁󱤧󱥌󱤉󱥔󱤭󱥩󱥞󱦜󱥨󱤘󱥍󱥣󱥖󱤡󱥆󱤧󱥁󱤂",word_submited_function:function(){score+=Math.round(Math.random())*5},uses:2,deckChangeCount:5,type:"letterUpgrade"},
    "pakala_pona":{name: "pakala_pona",nimi:"󱥈󱥔",toki_suli:"󱥞󱤙󱥆󱤬󱥂󱤡󱤴󱥌󱤉󱥔󱤭󱥩󱥞󱦜󱥨󱤴󱥈󱤉󱥠󱤄󱥁󱦝󱥞󱤙󱥆󱤬󱥉󱥂󱦜󱥫󱤂󱤖󱤡󱥞󱤖󱤓󱥝󱤉󱥆",toki:"󱥞󱤙󱥁󱤬󱥂󱤡󱤴󱥌󱤉󱥔󱤭󱥩󱥞󱦜󱥨󱤴󱥈󱤉󱥠󱤄󱥁󱦝󱥞󱤙󱥆󱤬󱥉󱥂󱦜󱥫󱤂󱤖󱤡󱥞󱤖󱤓󱥝󱤉󱥆",word_submited_function:function(){score+=5},after_addition_function:deleteUsedLetters,uses:1,deckChangeCount:5,type:"letterUpgrade"},
    "sitelen_pi_nimi_suli":{name: "sitelen_pi_nimi_suli",nimi:"󱥠󱦓󱥂󱥣󱦘",toki_suli:"󱥞󱤘󱤙󱥆󱤬󱥂󱥁󱥨󱦝󱥠󱥮󱥮󱤇󱥠󱤼󱤧󱤬󱥆󱦜󱥨󱥞󱤙󱥆󱤡󱤴󱥌󱤉󱥔󱤭󱥩󱥞",toki:"󱥞󱤘󱤙󱥁󱤬󱥂󱥁󱥨󱦝󱥠󱥮󱥮󱤇󱥠󱤼󱤧󱤬󱥆󱦜󱥨󱥞󱤙󱥆󱤡󱤴󱥌󱤉󱥔󱤭󱥩󱥞",letter_submited_function:function(){if(word.length<4){wordstring="BAD";return(false)}return(false)},word_submited_function:function(){score+=5},uses:1,deckChangeCount:5,type:"letterUpgrade"},
    "wawa_li_ike":{name: "wawa_li_ike",nimi:"󱥵󱤧󱤍",toki_suli:"󱥞󱤘󱤙󱥆󱤬󱥂󱥁󱥨󱦝󱥠󱥵󱤆󱤂󱤧󱤬󱦜󱥨󱥞󱤙󱥆󱤡󱤴󱥮󱤉󱥔󱥁󱦝󱤴󱥌󱤉󱥆󱥩󱥞",toki:"󱥞󱤘󱤙󱥁󱤬󱥂󱥁󱥨󱦝󱥠󱥵󱤆󱤂󱤧󱤬󱥆󱦜󱥨󱥞󱤙󱥆󱤡󱤴󱥮󱤉󱥔󱥁󱦝󱤴󱥌󱤉󱥆󱥩󱥞",letter_submited_function:detectOtherUpgradedLetters,after_addition_function:function(){score*=2},uses:1,deckChangeCount:5,type:"letterUpgrade"},
    "sike_li_ike":{name:"sike_li_ike",nimi:"󱥜󱤧󱤍",toki_suli:"󱥞󱤘󱤂󱤙󱥆󱤬󱥂󱥁󱦝󱥠「󱦜」󱤧󱤬󱥆󱦜󱥨󱥞󱤙󱥆󱤡󱤴󱥌󱤉󱥔󱥮󱥳󱥩󱥞",toki:"󱥞󱤘󱤂󱤙󱥁󱤬󱥂󱥁󱦝󱥠「󱦜」󱤧󱤬󱥆󱦜󱥨󱥞󱤙󱥆󱤡󱤴󱥌󱤉󱥔󱥮󱥳󱥩󱥞",letter_submited_function:detectDot,word_submited_function:function(){score+=3},uses:1,deckChangeCount:5,type:"letterUpgrade"},
    "open_pi_uta_open":{name:"open_pi_uta_open",nimi:"󱥇󱦓󱥰󱥇󱦘",toki_suli:"󱥞󱤙󱥆󱤬󱥂󱤡󱥠󱥂󱤽󱥳󱤧󱥬󱤉󱤕󱦓󱥰󱥇󱦘󱤡󱤴󱥌󱤉󱥔󱥮󱥳󱥩󱥞",toki:"󱥞󱤙󱥁󱤬󱥂󱤡󱥠󱥂󱤽󱥳󱤧󱥬󱤉󱤕󱦓󱥰󱥇󱦘󱤡󱤴󱥌󱤉󱥔󱥮󱥳󱥩󱥞", uses:2, deckChangeCount:5, word_submited_function:function(){if(word[0].vowel){score+=3}},type:"letterUpgrade"},
    
    "pana_sin":{name:"pana_sin",nimi:"󱥌󱥝",toki_suli:"󱥞󱤖󱤓󱤉󱤘󱥌󱥳󱥝",function:function(){playsRemaining+=1;document.getElementById("playsCounter").innerHTML = base10ToNnp(playsRemaining)},type:"instantUpgrade"},//IF YOU SET THE USES TO MORE THAN ONE BUG WILL HAPPEN
    
    "o_tawa_e_wawa":{name:"o_tawa_e_wawa",nimi:"󱥄󱥩󱤉󱥵",toki_suli:"󱥞󱤘󱥩󱤉󱥵󱥧󱥠󱥳󱦓󱤓󱥞󱦘󱥩󱥠󱤆󱦓󱤓󱥞󱦘",uses:3,function:use_o_tawa_e_wawa,type:"toolUpgrade"},
    "o_sin_e_sitelen_wan":{name:"o_sin_e_sitelen_wan",nimi:"󱥄󱥝󱤉󱥠󱥳",toki_suli:"󱥞󱤘󱥌󱤉󱥠󱥳󱥞󱥩󱥓󱥠󱤧󱤘󱤖󱤓󱤉󱥠󱥳󱥝",uses:3, function:use_o_sin_e_sitelen_wan,type:"toolUpgrade"},
    "o_sin_e_sitelen_ali":{name:"o_sin_e_sitelen_ali",nimi:"󱥄󱥝󱤉󱥠󱤄",toki_suli:"󱥞󱤘󱥌󱤉󱥠󱤄󱦓󱤓󱥞󱦘󱥩󱥓󱥠󱤧󱤘󱤖󱤓󱤉󱥠󱥝",uses:3,function:resetHandUpgrade,type:"toolUpgrade"}
}
lastMove = 0
touchStartedTime = 0
unseenUpgrades = Object.values(upgrades) //upgrades not yet shown to the player
highscore = 0

function readCookies(){
    if(document.cookie.indexOf("highscore")!=-1){
        var cookie = document.cookie.split("highscore=")[1]
        if(cookie.indexOf(";")!=-1){
            cookie = cookie.split(";")[0]
        }
        cookie = Number(cookie)
    }else{
        document.cookie = "highscore=0"
        var cookie = 0
    }
    highscore = cookie
    document.getElementById("highscore").innerHTML = base10ToNnp(cookie)
}

function use_o_tawa_e_wawa(upgrageObject){
    useToolUpgrade(upgrageObject)
    openSelectLetterMenu()
    var allletters = [...hand,...word]
    for(var i=0;i<allletters.length;i++){
        if(!allletters[i].upgrade){
            allletters[i].elem.style.opacity = 0.1
        }
    }
    letterClicked = o_tawa_e_wawa_tan
}

function o_tawa_e_wawa_tan(letter){
    if(!letter.upgrade){
        return
    }
    letterToMoveUpgradeFrom = letter
    letterClicked = o_tawa_e_wawa
    var allletters = [...hand,...word]
    for(var i=0;i<allletters.length;i++){
        if(allletters[i].upgrade){
            allletters[i].elem.style.opacity = 0.1
        }
        if(!allletters[i].upgrade){
            allletters[i].elem.style.opacity = 1
        }
    }
}

function o_tawa_e_wawa(letter){
    if(letter.upgrade){
        return
    }
    var allletters = [...hand,...word]
    for(var i=0;i<allletters.length;i++){
        allletters[i].elem.style.opacity = 1
    }
    letter.upgrade = letterToMoveUpgradeFrom.upgrade
    letterToMoveUpgradeFrom.upgrade = false
    updateElem(letter)
    updateElem(letterToMoveUpgradeFrom)
    closeSelectLetterMenu()
    usedToolUpgrade()
}

function openSelectLetterMenu(){
    document.getElementById("useUpgradeFade").style.display='initial'
}

function closeSelectLetterMenu(){
    document.getElementById("useUpgradeFade").style.display='none'
    letterClicked = moveLb
}

function useToolUpgrade(upgradeObject){
    upgrade = upgradeObject
}

function usedToolUpgrade(){
    upgrade.uses -= 1
    upgrade.elem.getElementsByClassName("upgradesLeft")[0].innerHTML = "󱦜".repeat(upgrade.uses)
    if(upgrade.uses==0){
        upgrade.elem.remove()
    }
}

function use_o_sin_e_sitelen_wan(upgradeObject){
    useToolUpgrade(upgradeObject)
    openSelectLetterMenu()
    letterClicked = swapOneLetter
}

function swapOneLetter(letter){
    if(word.indexOf(letter)!=-1){
        word.splice(word.indexOf(letter),1)
    }
    if(hand.indexOf(letter)!=-1){
        hand.splice(hand.indexOf(letter),1)
    }
    if(letter.vowel){
        vowel_deck.push(letter)
    }else{
        consonant_deck.push(letter)
    }
    letter.elem.remove()
    letter.elem = 0
    drawCards(1)
    usedToolUpgrade()
    closeSelectLetterMenu()
}

function detectDot(){
    for(var c=0;c<word.length;c++){
        if(word[c].letter=="󱦜"||word[c].upgrade.name=="o_pana_e_sike"||word[c].upgrade.name=="sike_open"){
            wordstring="BAD"
        }
    }
    return(false)
}
function detectOtherUpgradedLetters(){
    upgradeNum = 0
    for(var c=0;c<word.length;c++){
        if(word[c].upgrade){
            upgradeNum += 1
        }
    }
    if(upgradeNum>1){
        wordstring="BAD"
    }
    return(false)
}
function deleteUsedLetters(){
    for(var i = 0;i<word.length;i++){
        if(vowel_deck.indexOf(word[i])!=-1){
            vowel_deck.splice(vowel_deck.indexOf(word[i],1))
        }
        if(consonant_deck.indexOf(word[i])!=-1){
            consonant_deck.splice(consonant_deck.indexOf(word[i],1))
        }
    }
}
function resetHand(){
    var allLetters = [...hand,...word]
    for(var c=0;c<allLetters.length;c++){
        if(allLetters[c].vowel){
            vowel_deck.push(allLetters[c])
        }else{
            consonant_deck.push(allLetters[c])
        }
    }
    document.getElementById("hand").innerHTML = ""
    document.getElementById("word").innerHTML = ""
    hand=[]
    word=[]
    drawCards(handsize)
}
function resetHandUpgrade(upgradeObject){
    useToolUpgrade(upgradeObject)
    resetHand()
    usedToolUpgrade()
}

function resetHandButton(){
    resetHand()
    playsRemaining-=1;
    document.getElementById('refreshLettersPopup').style.visibility='hidden'
    document.getElementById("playsCounter").innerHTML = base10ToNnp(playsRemaining)
}

function wawaLiPona(){
    mutepinimiwawa = 0
    for(var c=0;c<word.length;c++){
        if(word[c].upgrade){
            mutepinimiwawa += 1
        }
    }
    score += 2*mutepinimiwawa
}
function oPanaESike(){
    lastword = splitMora(word[i].sitelenLasina)
    if(lastword[0].length==1){
        wordstring += lastword.shift()
        wordstring += lastword.shift()
    }else{
        wordstring += lastword.shift()
    }
    return(true)
}
function sikeOpen(){
    if(lastword.length == 0){
        wordstring="BAD"
        return(false)
    }
    wordstring += lastword.shift()
    return(false)
}
function startWordOnly_letterSubmited(){
    if(i!=0){
        wordstring= "BAD"
        return(false)
    }
    return(false)
}
function startWordOnly_afterAddition(){
    score *= 2
}

letterClicked = moveLb
hadUpgrades = []
function init(){
    window.oncontextmenu = function() { return false; }
    document.getElementById("startScreen").style.opacity = 0
    setTimeout(()=>{document.getElementById("startScreen").style.display = "none"},120)
    powerUpCountdown = 10
    powerUpIncrement = 10
    powerUpMax = 10
    handbox = document.getElementById("hand")
    powerUpCountdownElem = document.getElementById("powerUpCountdown")
    powerUpCountdownElem.innerHTML = base10ToNnp(powerUpCountdown)
    hand = []
    word = []
    consonant_deck = []
    vowel_deck = []
    for(i=0;i<nimi_pi_sitelen_pona.length;i++){
        if("aeiou".indexOf(nimi_pi_sitelen_lasina[i][0])!=-1){

            vowel_deck.push({letter:nimi_pi_sitelen_pona[i],sitelenLasina:nimi_pi_sitelen_lasina[i],vowel:true,upgrade:false})
        }else{
            consonant_deck.push({letter:nimi_pi_sitelen_pona[i],sitelenLasina:nimi_pi_sitelen_lasina[i],vowel:false,upgrade:false})
        }
    }
    for(i=0;i<10;i++){
        vowel_deck.push({letter:"󱦜",vowel:true,sitelenLasina:"*",upgrade:false})
    }
    shuffleArray(vowel_deck)
    shuffleArray(consonant_deck)
    vowel_deck.splice(20) // shorten both decks
    consonant_deck.splice(20)
    handsize = 9
    maxid=0
    drawCards(handsize)
}

function drawCards(num){
    handVowels = 0
    for(var i=0;i<hand.length;i++){
        if(hand[i].vowel==true){
            handVowels += 1
        }
    }
    if(handVowels<2){
        vowelsToCollect = 1
    }
    for(let i=maxid;i<num+maxid;i++){
        let newword
        if(vowelsToCollect>0){
            newword = vowel_deck.splice(Math.floor(Math.random()*vowel_deck.length),1)[0]
            vowelsToCollect -=1
        }else{
            if(Math.random()>0.4){
                newword = consonant_deck.splice(Math.floor(Math.random()*consonant_deck.length),1)[0] 
            }else{
                newword = vowel_deck.splice(Math.floor(Math.random()*vowel_deck.length),1)[0]
            }
        }
        newWordElem = document.createElement("div")
        newWordElem.className = "letterBox"
        handbox.appendChild(newWordElem)
        newword.elem=newWordElem
        hand.push(newword)
        updateElem(newword)
    }
    maxid=i+1
}
function updateElem(word){
    var elem = word.elem
    elem.innerHTML = word.letter
    elem.onmouseup = ()=>{if(lastMove > Date.now()-100){return}lastMove = Date.now();letterClicked(word)} //sometimes both the touch and mouse event trigger, so i added a timeout
    if(word.upgrade){
        elem.className = "upgradedLetterBox"
        elem.innerHTML += "<span class='upgradeName'>"+word.upgrade.nimi+"</span>"
        elem.onmouseover = ()=>{if(lastMove > Date.now()-100){return}hoverUpgradedWord(word)}
        elem.onmouseout = ()=>{document.getElementById("toolTip").style.visibility="hidden"}

        elem.ontouchstart = ()=>{hoverUpgradedWord(word);touchStartedTime = Date.now()}
        elem.ontouchend = ()=>{document.getElementById("toolTip").style.visibility="hidden";if(lastMove > Date.now()-100){return}lastMove = Date.now();letterClicked(word)}
    }else{
        elem.className = "letterBox" 
        elem.onmouseover = ()=>{}
        elem.onmouseout = ()=>{}
        elem.ontouchstart = ()=>(touchStartedTime=false)
        elem.ontouchend = ()=>{if(lastMove > Date.now()-100){return}lastMove = Date.now();letterClicked(word)}
    }
}

function hoverUpgradedWord(word){
    var upgradeToolTipBox = document.getElementById("toolTip")
    upgradeToolTipBox.innerHTML=""
    upgradeToolTipBox.style.visibility="visible"
    var upgradeToolTip = createUpgradeElem(word.upgrade,"tooltip")
    var upgradeToolTipDiv = document.createElement("div")
    upgradeToolTipDiv.style.position = "absolute"
    upgradeToolTipDiv.style.top = "0vw"
    upgradeToolTipDiv.style.left = "27.5vw"
    upgradeToolTipDiv.appendChild(upgradeToolTip)
    upgradeToolTipBox.appendChild(upgradeToolTipDiv)
}

function moveLb(letter){
    if(touchStartedTime && touchStartedTime < Date.now() - 500){
        return
    }
    document.getElementById("toolTip").style.visibility="hidden"
    wordbox = document.getElementById("word")
    handbox = document.getElementById("hand")
    if(hand.indexOf(letter) != -1){
        index = hand.indexOf(letter)
        if(word.length>=7){
            return
        }
        wordbox.appendChild(letter.elem)
        word.push(letter)
        hand.splice(index,1)
        updateDisplayedWord()
    } else {
        index = word.indexOf(letter)
        handbox.appendChild(letter.elem)
        hand.push(letter)
        word.splice(index,1)
        updateDisplayedWord()
    }
}

function updateDisplayedWord(){
    wordstring = ""
    lastword = []
    for(i=0;i<word.length;i++){
        if(word[i].upgrade.letter_submited_function){
            if(word[i].upgrade.letter_submited_function()){
                continue
            }
        }
        if(word[i].letter == "󱦜"){
            if(lastword.length == 0){
                wordstring="BAD"
                break
            }
            wordstring += lastword.splice(0,1)[0]
        }else{
            lastword = splitMora(word[i].sitelenLasina)
            if(lastword[0].length==1){
                wordstring += lastword.splice(0,1)[0]
            }else{
                wordstring += lastword[0][0]
                lastword[0] = lastword[0][1]
            }
             
        }
    }
    if(nimi_pi_sitelen_lasina.indexOf(wordstring)!=-1){
        document.getElementById("nimi_pali").innerHTML = nimi_pi_sitelen_pona[nimi_pi_sitelen_lasina.indexOf(wordstring)]
    }else{
        document.getElementById("nimi_pali").innerHTML = ""
    }
}

function chooseUpgradeChangeDeck(upgrade){
    unupgradedCards = []
    allcards = [...hand,...vowel_deck,...consonant_deck]
    for(let i=0;i<allcards.length;i++){
        if(allcards[i].upgrade){
            continue
        }
        if(allcards[i].sitelenLasina=="*"){
            continue
        }
        if(upgrade.canBeApplyedTo&&!upgrade.canBeApplyedTo(allcards[i])){
            continue
        }
        unupgradedCards.push(allcards[i])
    }
    for(let i=0;i<upgrade.deckChangeCount;i++){
        if(unupgradedCards.length==0){
            break
        }
        cardToUpgrade = unupgradedCards.splice(Math.floor(Math.random()*unupgradedCards.length),1)[0]
        cardToUpgrade.upgrade = Object.assign({},upgrade)
        if(cardToUpgrade.elem){
            updateElem(cardToUpgrade)
        }

    }
    document.getElementById("chooseUpgradePopup").style.display = "none"
}

function createUpgradeElem(upgrade,type){
    elem = document.createElement('div')
    elem.className = 'upgrade'
    titleElem = document.createElement('span')
    titleElem.className = 'upgradeTitle'
    titleElem.innerHTML = upgrade.nimi + "󱦝"
    elem.appendChild(titleElem)
    infoElem = document.createElement('div')
    elem.appendChild(infoElem)
    infoElem.className = 'upgradeInfo'
    if(type=="tooltip"){
        infoElem.innerHTML = upgrade.toki
    }else if(upgrade.type=="instantUpgrade"){
        infoElem.innerHTML = upgrade.toki_suli
    }else if(type=="changeDeck"){
        infoElem.innerHTML = "󱤴󱥵󱤉󱥠"+base10ToNnp(upgrade.deckChangeCount)+"󱤬󱥓󱥠󱥞󱥩󱥁󱦝<br>"+upgrade.toki_suli
    }else if(upgrade.type=="toolUpgrade"){
        infoElem.innerHTML = upgrade.toki_suli
    }else{
        infoElem.innerHTML = "󱥞󱤘󱥵󱥁󱤉󱥠󱦝"+upgrade.toki_suli
    }
    buttonContainerElem = document.createElement('div')
    infoElem.appendChild(buttonContainerElem)
    if(upgrade.type=="instantUpgrade"){
        elem.style.backgroundColor = "green"
        elem.onclick = function(){upgrade.function();document.getElementById("chooseUpgradePopup").style.display = "none"}
        return(elem)
    }
    if(type=="inChooseMenu"){
        elem.onclick = function(){chooseUpgrade(upgrade.name)}
        usesLeftElem = document.createElement("span")
        usesLeftElem.style.color = "orange"
        usesLeftElem.innerHTML = "󱥞󱤘󱤙󱥁󱤬󱥫"+base10ToNnp(upgrade.uses)
        infoElem.appendChild(usesLeftElem)
    }
    if(type=="changeDeck"){
        elem.style.backgroundColor = "blue"
        elem.onclick = function(){chooseUpgradeChangeDeck(upgrade)}
    }
    if(type=="useable"){
        upgrade.elem = elem
        buttonElem = document.createElement('button')
        buttonContainerElem.appendChild(buttonElem)
        if(upgrade.type=="letterUpgrade"){
            buttonElem.onclick = function(){useUpgrade(upgrade)}
        }
        if(upgrade.type=="toolUpgrade"){
            buttonElem.onclick = function(){upgrade.function(upgrade)}
        }
        buttonElem.innerHTML = "󱥄󱤙"
        usesLeftElem = document.createElement('span')
        buttonContainerElem.appendChild(usesLeftElem)
        usesLeftElem.className = 'upgradesLeft'
        usesLeftElem.innerHTML = "󱦜".repeat(upgrade.uses)
    }
    return(elem)
}

async function o_pana(){
    if(document.getElementById("nimi_pali").innerHTML == ""){
        return
    }else{
        letterClicked = function(){}
        buttons=document.getElementsByTagName("button")
        for(var i=0; i<buttons.length;i++){
            buttons[i].disabled = true
        }
        score = 0
        pointsGotten = []
        document.getElementById("newPointsAlert").style.visibility = "visible"
        for(i=0;i<word.length;i++){
            await animateGetPoints(word[i], score,i+1)
            score += i+1
            if(word[i].upgrade.word_submited_function){
                oldscore = score
                word[i].upgrade.word_submited_function()
                if(oldscore!=score){
                    await(animateGetPoints(word[i],oldscore,score-oldscore))
                }
            }
            if(word[i].vowel){
                vowel_deck.push(word[i])
            }else{
                consonant_deck.push(word[i])
            }
        }
        for(i=0;i<word.length;i++){
            if(word[i].upgrade.after_addition_function){
                oldscore = score
                word[i].upgrade.after_addition_function()
                await animateMultiplyPoints(word[i],oldscore,score/oldscore)
            }
        }
        points += score
        letterClicked = moveLb
        for(var i=0; i<buttons.length;i++){
            buttons[i].disabled = false
        }
        setTimeout(function(){document.getElementById("newPointsAlert").style.visibility = "hidden"},1000)
        document.getElementById("pointsCounter").innerHTML = base10ToNnp(points)
        for(i=0;i<word.length;i++){
            word[i].elem.remove()
            word[i].elem = 0
        }
        word = []
        drawCards(handsize-hand.length)
        updateDisplayedWord()
        powerUpCountdown -= score
        if(powerUpCountdown<=0){
            powerUpMax += powerUpIncrement
            powerUpCountdown=powerUpMax
            getUpgrade()
        }
        powerUpCountdownElem.innerHTML = base10ToNnp(powerUpCountdown)
        playsRemaining -= 1
        document.getElementById("playsCounter").innerHTML = base10ToNnp(playsRemaining)
        if(playsRemaining==0){
            document.getElementById("gameOverScreenPoints").innerHTML = base10ToNnp(points)
            document.getElementById("gameOverScreen").style.visibility = "visible"
            if(points>highscore){
                highscore = points
                document.cookie="highscore="+points
            }
        }
    }
}

async function animateGetPoints(letter, score,scoreChange){
    pointCounter = document.getElementById("newPointsCounter")
    letter.elem.style.borderColor = "#47A025"
    letter.elem.style.color = "#47A025"
    pointCounter.innerHTML = base10ToNnp(score)+"<span style='color:white'>󱤊"+base10ToNnp(scoreChange)+"</span>"
    await delay(400)
    pointCounter.innerHTML = base10ToNnp(score+scoreChange)
    letter.elem.style.borderColor = ""
    letter.elem.style.color = ""
    await delay(200)
}
async function animateMultiplyPoints(letter, score,factor){
    if(factor==1){
        return
    }
    pointCounter = document.getElementById("newPointsCounter")
    letter.elem.style.borderColor = "#47A025"
    letter.elem.style.color = "#47A025"
    text = base10ToNnp(score)
    for(var i = 0; i<factor-1; i++){
        text += "󱤊"+base10ToNnp(score)
    }
    pointCounter.innerHTML = "<span style='color:white'>"+text+"</span>"
    await delay(400)
    pointCounter.innerHTML = base10ToNnp(score*factor)
    letter.elem.style.borderColor = ""
    letter.elem.style.color = ""
    await delay(400)
}

function splitMora(word){
    var result = []
    word = word.split("")
    while(word.length>0){
        let mora = word.shift()
        if("aeiou".indexOf(word[0])!=-1){
            mora+=word.shift()
        }
        result.push(mora)
    }
    return(result)
}

function getUpgrade(){
    document.getElementById("chooseUpgradePopup").style.display="initial"
    upgradeOptionsElem = document.getElementById("upgradeOptions")
    upgradeOptionsElem.innerHTML = ""
    if(unseenUpgrades.length<3){
        unseenUpgrades = Object.values(upgrades)
    }
    for(i=0;i<3;i++){
        upgradeOption = unseenUpgrades.splice(Math.floor(Math.random()*unseenUpgrades.length),1)[0]
        if(upgradeOption.type=="toolUpgrade"||Math.random()>0.8){
            upgradeOptionsElem.appendChild(createUpgradeElem(upgradeOption,"inChooseMenu"))
        }else{
            upgradeOptionsElem.appendChild(createUpgradeElem(upgradeOption,"changeDeck"))
        }
    }
}
function chooseUpgrade(upgradeName){
    document.getElementById("chooseUpgradePopup").style.display = "none"
    document.getElementById("upgradeList").appendChild(createUpgradeElem(Object.assign({},upgrades[upgradeName]),"useable"))
}
function useUpgrade(upgradeObject){
    upgrade = upgradeObject
    letterClicked = upgradeWord
    document.getElementById("useUpgradeFade").style.display='initial'
    var allletters = [...hand,...word]
    for(var i=0;i<allletters.length;i++){
        if(allletters[i].upgrade){
            allletters[i].elem.style.opacity = 0.1
        }
    }
}
function upgradeWord(wordToUpgrade){
    if(wordToUpgrade.upgrade){
        return
    }
    upgrade.uses -= 1
    upgrade.elem.getElementsByClassName("upgradesLeft")[0].innerHTML = "󱦜".repeat(upgrade.uses)
    if(upgrade.uses==0){
        upgrade.elem.remove()
    }
    wordToUpgrade.upgrade = Object.assign({},upgrade)//copy object
    updateElem(wordToUpgrade)
    document.getElementById("useUpgradeFade").style.display='none'
    var allletters = [...hand,...word]
    for(var i=0;i<allletters.length;i++){
        allletters[i].elem.style.opacity = 1
    }
    letterClicked = moveLb
    updateDisplayedWord()
}
function cancelUpgrade(){
    document.getElementById("useUpgradeFade").style.display='none'
    letterClicked = moveLb
    var allletters = [...hand,...word]
    for(var i=0;i<allletters.length;i++){
        allletters[i].elem.style.opacity = 1
    }
}

function base10ToNnp(num){
    if(num<0){
        var negative = true
    }
    num = String(Number(num))
    if(num=="0"){
        return("󱤂")
    }
    if(num.indexOf(".")!=-1){
        num = num.split(".")
        let dec = Math.round(Number("0."+num[1])*100)
        if(dec/100>=1){
            return(base10ToNnp(Number(num[0])+1))
        }
        num[1] = String(Math.round(Number("0."+num[1])*100)/100).split(".")[1]
        if(dec==0){
            return(base10ToNnp(num[0]))
        }else{
            dec = String(dec).match(/\d*[123456789]/)
        }
        if(num[0]==0){
            return("󱥻"+(negative?"󱥶":"")+"󱥁"+base10ToNnp(dec)+"󱦝󱥆"+base10ToNnp(Number("1"+"0".repeat(num[1].length)))+"󱤧󱥖󱥳")
        }
        return(base10ToNnp(num[0])+"󱤊󱥻"+(negative?"󱥶":"")+"󱥁"+base10ToNnp(dec)+"󱦝󱥆"+base10ToNnp(Number("1"+"0".repeat(num[1].length)))+"󱤧󱥖󱥳")
    }
    let out = ""
    if(num[0]=="-"){
        num = num.slice(1)
    }
    while(num){
        let end = num.slice(-2)
        let addition = ""
        end = Number(end)
        while(end>=20){
            end -= 20
            addition += "󱤼"
        }
        while(end>=5){
            end -= 5
            addition += "󱤭"
        }
        while(end>=2){
            end -= 2
            addition += "󱥮"
        }
        if(end==1){
            end=0
            addition += "󱥳"
        }
        out = addition + out
        num = num.slice(0,-2)
        if(num){
            out = "󱤄"+out
        }
    }
    if(negative){
        out = "󱥶"+out
    }
    return(out)
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function delay(ms){
    return(new Promise(resolve=>setTimeout(resolve, ms)))
}