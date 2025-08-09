doc.type.html
html lang en 
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings1’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=game plays overview
heading2=covid strings calculator 
heading3=thought box 
subheading1=calculator interface 
subheading2=calculator functionality
subheading3=red thought box
subheading4=orange thought box
subheading5=yellow thought box
subheading6=green thought box
subheading7=burgundy thought box
subheading8=indigo thought box
subheading9=blue thought box
subheading10=black thought box
filename=covid strings1 game plays.js
<header.html>
game plays overview
an overview of covid string game plays
string unit=style for non-concatenated strings 
string array=style for concatenated strings 
blank=part of string that user must answer
user answer=indivudal users answer
team answer=teams answer
userinselect string category
if category==non-concatenated
user.fill blank in string unit
else:
remain
if category==concatenated
user.fill blank in string array
else:
remain
if selected question==multiple choice
user in select a,b,c,d
else:
remain
if hyperlink from meta==reference
user in.select hyperlink
else:
remain
if selected question ==math problem:
open covid strings calculator 
else:
remain
<header.html>
calculator 
the calculator used for players to calculate math problems in covid strings1
covid strings calculator=calculator for math problems
operations=addition,subtraction,multiplication,division
if operation==addition:
return addition
else:
remain
if operation==subtraction:
return subtraction
else:
remain
if operation==multiplication:
return multiplication
else:
remain
if operation==division
return division
else:
remain
user in select covid strings calculator 
<subheading.html>
calculator interface
the user Interface Of The Covid Strings Calculator 
<doctype.html>
html lang en
<head>
utf8
“viewport” content=width device-width inital scale 1.0
<title> simple calculator /<title>
<style>
body
font family arial sans serif
display:flex
justify content:center
align  items:center
height 100vh;
background-color:f0f0f0
calculator
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display 
width 100%
height 40px
margin-bottom: 10px;
text-align: right;
padding: 10px;
font-size: 1.5em;
border: 1px solid ccc
border-radius 5px
buttons 
display:grid;
grid-template-columns:repeat (4,1 fr)
gap: 10px;
button 
padding 20px
font size 1.2em
border:none
border radius:5px 
cursor:pointer;
background color f9f9f9
box shadow 0 2px 5pxrgba(0,0,0,0.1);
button operator
background color ff9500
color:fff
button equal
background color 34c759
color fff
grid column span 2
button clear
background color ff3B30
color fff
grid column span 2
<style>
<head>
<body>
<div class= “calculator”
<input type=”text” class=”display” id “display”=disabled>
<div class buttons”>
<button class “button” on click=”appendnumber(‘0’)>0<button
<button class “button” on click=”appendnumber(‘1’)>1<button
<button class “button” on click=”appendnumber(‘2’)>2<button
<button class “button” on click=”appendnumber(‘3’)>3<button
<button class “button” on click=”appendnumber(‘4)>4<button
<button class “button” on click=”appendnumber(‘5’)>5<button
<button class “button” on click=”appendnumber(‘6’)>6<button
<button class “button” on click=”appendnumber(‘7’)>7<button
<button class “button” on click=”appendnumber(‘8’)>8<button
<button class “button” on click=”appendnumber(‘9’)>9<button
<button class “button” on click=”appendnumber(‘.’)>.<button
button class operator on click=choose operation (addition) button
button class operator on click=choose operation (subtraction) button
button class operator on click=choose operation (multiplication) button
button class operator on click=choose operation (division) button
button class =”button equal on click compute ()=</button>
button class = “button clear” on click=clear display button >c</button>
div
div
src= “calculator.js”><
<script>
</body>
</html>
<subheading.html>
calculator functionality
the operation organization for practical use of the covid strings calculator
let display=document get element by id (‘display)
let currentoperand=’’
let previous operand=’’
let operation=undefined
append number
if (number ===’.’& currentoperand.includes(‘.’)return;
currentoperand=currentoperand.tostring()+number.tostring();
updatedisplay();
choseoperation(op)
if(currentoperand===’’)
if(previousoperand!==’’)
compute
let computation
prev=parsefloat(previousoperand)
current=parsefloat(currentoperand)
<header.html>
thought box
a place to type your thoughts on what the answer is 
<doctype.html>
<html lang “en”>
<head>
utf8
“viewport” content=width device-width inital scale 1.0
<title> thought box /<title>
<style>
body
font family arial sans serif
display:flex
justify content:center
align items:center
height 100vh;
background-color:f0f0f0
thought box 
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display 
width 300px
text align center
thought box input 
width  80%
padding: 10px;
margin-bottom: 10px;
border:1px solid ccc
border-radius 5px
thought box button
padding 10px, 20px
border-radius 5px
background color 007bff
color:fff
cursor:pointer;
thought box hover button
background color 0056b3
thought display 
margin-top 20px;
font-size 1.2em
color 333
<style>
</head>
<body>
<div class= “thought box”
input type= “text” id=”thought input” 
click on button display thought> submit</ button>
div class thought display  id=”thought display
</div>
<script>
display thought
thought input=document.getelement by id (‘thought input).value
thought display =document.getelement by id(‘thought display’)
thought display.text contet=thought input 
<script>
</body>
</html>
covid strings team thought box =feature for teams to discuss what category to take and what each person thinks the correct answer to a question is 
prompt covid strings team thought box
if user prompt covid strings team thought box==correctanswer:
return answer
else
check answer
<subheading.html>
red thought box
thought box for red protein spikers
<doctype.html>
<html lang “en”>
<head>
utf8
“viewport" content=width device-width inital scale 1.0
<title> thought box/<title>
<style>
body
font family arial sans serif
display:flex
justify content:center
align items:center
height 100vh;
background-color:f0f0f0
thought box 
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display 
width 300px
text align center
thought box input 
width 80%
padding:10px;
margin-bottom: 10px;
border:1px solid ccc
border-radius 5px
thought box button
padding 10px, 20px
border-radius 5px
background color 007bff
color:fff
cursor:pointer;
thought box hover button
background color 0056b3
thought display 
margin-top 20px;
font-size 1.2em
color 333
<style>
<head>
<body>
<div class= “thought box”
input type= “text” id=”thought input” 
click on button display thought>submit</button>
div class thought display id=”thought display
<div>
<script>
display  thought
thought input=document.get element by id (‘thought input).value
thought display=document.get element by id(‘thought display’)
thought display.text content=thought input 
<script>
</body>
</html>
<subheading.html>
orange thought box
thought box for orange rna messengers
<doctype.html>
<hmtl lang “en”>
<head>
utf8
“viewport” content=width device-width inital scale 1.0
<title> thought box/<title>
<style>
body
font family arial sans serif
display:flex
justify content:center
align items:center
height 100vh;
background-color:f0f0f0
thought box 
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display 
width 300px
text align center
thought box input 
width  80%
padding: 10px;
margin-bottom: 10PX;
border:1px solid ccc
border-radius 5px
thought box button
padding 10px, 20px
border-radius 5px
background color 007bff
color:fff
cursor:pointer;
thought box hover button
background color 0056b3
thought display 
margin-top 20px;
font-size 1.2em
color 333
<style>
<head>
<body>
<div class= “thought box”
input type= “text” id=”thought input” 
click on button display thought>sumbit</button>
div class thought display id=”thought display
<div>
<script>
display thought
thought input=document.get element by id (‘thought input) .value
thought display=document.get element by id(‘thought display’)
thought display.text content=thought input 
<script>
<body>
<html>
<subheading.html>
yellow thought box
thought box for yellow moxie
<doc type.html>
<html lang “en”>
<head>
utf8
“viewport” content=width device-width inital scale 1.0
<title> thought box/<title>
<style>
body
font family arial sans serif
display:flex
justify content:center
align items:center
height 100vh;
background-color:f0f0f0
thought box 
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display 
width 300px
text align center
thought box input 
width 80%
padding:10px;
margin-bottom: 10px;
border:1px solid ccc
border-radius 5px
thought box button
padding 10px, 20px
border-radius 5px
background color 007bff
color:fff
cursor:pointer;
thought box hover button
background color 0056b3
thought display 
marign-top 20px;
font-size 1.2em
color 333
<style>
<head>
<body>
<div class= “thought box”
input type= “text” id=”thought input” 
click on button display thought>submit</button>
div class thought display id=”thought display
<div>
<script>
display thought
thought input=document.getelement by id (‘thought input) .value
thought display=document.get element by id(‘thought display’)
thought display.text content=thought input 
<script>
<body>
<html>
<subheading.html>
green thought boxh
thought box for green peacemakers
<doc type.html>
< html lang “en”>
<head>
utf8
“viewport” content =width device-width inital scale 1.0
<title> thought box /<title>
<style>
body
font family arial sans serif
display:flex
justify content:center
align items:center
height 100vh;
background-color:f0f0f0
thought box 
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display 
width 300px
text align center
thought box input 
width  80%
padding:10px;
margin-bottom: 10px;
border:1px solid ccc
border-radius 5px
thought box button
padding 10px, 20px
border-radius 5px
background color 007bff
color:fff
cursor:pointer;
thought box hover button
background color 0056b3
thought display 
margin-top 20px;
font-size 1.2em
color 333
<style>
<head>
<body>
<div class=“thought box”
input type= “text” id=”thought input” 
click on button display thought>submit</button>
div class thought display id=”thought display
<div>
<script>
display thought
thought input=document.getelement by id (‘thought inpuy) .value
thought display=document.get element by id(‘thought display’)
thought display.text content=thought input 
<script>
<body>
<html>
<sub heading.html>
burgundy thought box
thought box for burgundy rebuilders
<doc type.html>
<html lang “en”>
<head>
utf8
“viewport” content=width device-width inital scale 1.0
<title> thought box /<title>
<style>
body
font family arial sans serif
display:flex
justify content:center
align items:center
height 100vh;
background-color:f0f0f0
thought box 
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display 
width 300px
text align center
thought box input 
width 80%
padding: 10px;
margin-bottom: 10px;
border:1px solid ccc
border-radius 5px
thought box button
padding 10px, 20px
border-radius 5px
background color 007bff
color:fff
cursor:pointer;
thought box hover button
background color 0056b3
thought display 
margin-top 20px;
font-size 1.2em
color 333
<style/>
<head>
<body>
<div class= “thought box”
input type= “text” id=”thought input” 
click on button display thought> submit</button>
div class thought display id=”thought display
</div>
<script>
display thought
thought input=document.get element by id (‘thought input) .value
thought display=document.get element by id(‘thought display’)
thought display.text content=thought input
<script>
</body>
</html>
<subheading.html>
indigo thought box
thought box for indigo isos
<doc type.html>
<html lang “en”>
<head>
utf8
“viewport” content=width device-width inital scale 1.0
<title> thought box /<title>
<style>
body
font family arial sans serif
display:flex
justify content:center
align items:center
height 100vh;
background-color:f0f0f0
thought box 
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display 
width 300px
text align center
thought box input 
width  80%
padding: 10px;
margin-bottom: 10px;
border:1px solid ccc
border-radius 5px
thought box button
padding 10px, 20px
border-radius 5px
background color 007bff
color:fff
cursor:pointer;
thought box hover button
background color 0056b3
thought display 
margin-top 20px;
font-size 1.2em
color 333
<style/>
</head>
<body>
<div class= “thought box”
input type= “text” id=”thought input” 
click on button display thought> submit</button>
div class thought display id=”thought display
</div>
<script>
display thought
thought input=document.get element by id (‘thought input) .value
thought display=document.get element by id(‘thought display’)
thought display.text content=thought input 
<script>
</body>
</html>
<sub heading.html>
blue thought box
thought box for blue curve crushers
<doc type.html>
<html lang “en”>
<head>
utf8
“viewport” content=width device-width inital scale 1.0
<title> thought box/<title>
<style>
body
font family arial sans serif
display:flex
justify content:center
align items:center
height 100vh;
background-color:f0f0f0
thought box 
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display
width 300px
text align center
thought box input 
width 80%
padding:10px;
margin-botton: 10px;
border:1px solid ccc
border-radius 5px
thought box button
padding 10px, 20px
border-radius 5px
background color 007bff
color:fff
cursor:pointer;
thought box hover button
background color 0056b3
thought display 
margin-top 20px;
font-size 1.2em
color 333
<style/>
</head>
<body>
<div class= “thought box”
input type= “text” id=”thought input” 
click on button display thought> submit</button>
div class thought display id=”thought display
</div>
<script>
display thought
thought input=document.get element by id (‘thought input) .value
thought display=document. get element by id(‘thought display’)
thought display. text content=thought input 
<script>
</body>
</html>
<subheading.html>
black thought box
thought box for black night riders
<doc type.html>
<html lang “en”>
<head>
utf8
“viewport” content=width device-width inital scale 1.0
<title> thought box /<title>
<style>
body
font family arial sans serif
display:flex
justify content:center
align items:center
height 100vh;
background-color:f0f0f0
thought box 
background color fff
padding 20px
border radius 10px
box-shadow 00 10px rgba(0,0,0,0.1);
display 
width 300 px
text align center
thought box input 
width  80%
padding: 10px;
margin-bottom:10px;
border:1px solid ccc
border-radius 5px
thought box button
padding 10px, 20px
border-radius 5px
background color 007bff
color:fff
cursor:pointer;
thought box hover button
background color 0056b3
thought display 
margin-top 20px;
font-size 1.2em
color 333
<style>
</head>
<body>
<div class= “thought box”
input type=“text” id=”thought input” 
click on button display thought>sumbit</button>
div class thought display id=”thought display
</div>
<script>
display thought
thought input=document. get element by id (‘thought input).value
thought display=document.get element by id(‘thought display’)
thought display. text content=thought input 
<script>
</body>
</hmtl>
return filename
