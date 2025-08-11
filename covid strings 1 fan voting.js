<doc.type.html>
<html lang en>
<script>
<header.html>
heading for heading variables 
the heading numbers that determine where each heading and subheading go 
heading1=fan voting rounds
heading2=string voting
heading3=result
heading4=non-concatenated string variables
heading5=concatenated string variables
heading6=second round
heading7=third round
heading8=fourth round
heading9=fifth round
subheading1=covid strings first round matchups
subheading2=first round non-concatenated string advancing
subheading3=first round concatenated string advancing
subheading4=second  round non-concatenated string advancing
subheading5=second round concatenated string advancing
subheading6=third round non-concatenated string advancing
subheading7=third round concatenated string advancing
subheading8=fourth round non-concatenated string advancing
subheading9=fourth round concatenated string advancing
subheading10=covid strings fan voting victory
filename=covid strings1 fan voting.js
<meta charset utf-8>
<meta name “viewport” content=”width=device-width,inital scale 1>
<title covid strings1 fan voting</title>
<style>
vote button
margin:5px;
padding:10px;
background-color: 4caf50
color:white;
border:none;
cursor:pointer;
vote button.hover
background color 45a049
<header.html>
fan voting rounds
the number of rounds overall in covid strings fan voting
total entry limit=32
non-concatenated string limit=16
concatenated string limit=16
amount of rounds=math.log(entry limit) /math.log(2) 
for(i=amount_ of_rounds;-i>0;i- -)
s=round+(amount_ of_ rounds;i+1)+’ of amount_ of_ rounds consist of ‘math.pow(2,i-1)+matches’;
</style>
</head>
<h1 vote for your favorite string>
<header.html>
string voting
the processes by which a user votes for their favorite string
<button class=vote button  on click “vote” (‘string 1’) <string pair button>
<button class=vote button on click “vote” (string 2’) <string pair button>
<button class=vote button  on click “vote” (‘string 3’) <string pair button>
<button class=vote button on click “vote” (‘string 4’) <string pair button>
<button class=vote button on click “vote” (‘string 5’) <string pair button>
<button class=vote button  on click “vote” (‘string 6’) <string pair button>
<Button class=vote button  on click “vote” (‘string 7’) <string pair button>
<Button class=vote button  on click “vote” (‘string 8’) <string pair button>
<Button class=vote button  on click “vote” (‘string 9’) <string pair button>
<Button class=vote button  on click “vote” (‘string 10’) <string pair button>
<Button class=vote button  on click “vote” (‘string 11’) <string pair button>
<Button class=vote button  on click “vote” (‘string 12’) <string pair button>
<Button class=vote button  on click “vote” (‘string 13’) <string pair button>
<Button class=vote button  on click “vote” (‘string 14’) <string pair button>
<Button class=vote button  on click “vote” (‘string 15’) <string pair button>
<Button class=vote button  on click “vote” (‘string 16’) <string pair button>
<header.html>
first round
the first round in covid strings fan voting
render round
roundcontainer.innerhtml=<h1 round {first round} <h1>
candidates foreach((candidate,index)
candidatediv.innerhtml
<p> {candidate name } {candidate votes} votes </p>
<button on click= “vote {index} >”vote for {candidate name} </button>
round container.appendchild(candidatediv)
add event listener (‘dom content loaded ,()
let current round=1
total rounds= 5
round container=document.get element by id(‘round-container’)
nextroundbutton=document.get element by id(‘next-round’)
window open 
window vote function(index)
candidates [index] votes++
commence round .addeventlistener(click)
if current round ==round 1:
commence round 1
else:
remain 
<subheading.html>
covid strings first round matchups
the matchups that appear in the first round of covid strings fan voting 
<div class=”matchup”
non-concatenated strings 
matchup1=string 6 vs string 11
<button id vote string 6 “vote for string 6”  </button>
<button id vote string 11 “vote for string 11”  </button>
<div class =”results”>
<p> string 6 <span id= “votes string 6 >0</span> votes <p>
<p> string 11 <span id= “votes string 11 >0</span> votes <p>
<div>
matchup2=string 2 Vs string 15
<button id vote string 2 “vote for string 2”  </button>
<button id vote string 15 “vote for string 15”  </button>
<div Class =”Results”>
<p> string 2 <span id= “votes string 2 >0</span> votes <p>
<p> string 15 <span id=“votes string 15 >0</span> votes <p>
<div>
matchup3=string 7 vs string 10
<button id vote string 7 “vote for string 7”  </button>
<button id vote string 10 “vote for string 10”  </button>
<div class =”results”>
<p> string 7 <span id= “votes string 7 >0</span> votes <p>
<p> string 10 <span id= “votes string 10 >0</span> votes <p>
<div>
matchup4=string 3 vs string 14
<button id vote string 3 “vote for string 3” </button>
<button id vote string 14 “vote for string 14”  </button>
<div class =”results”>
<p> string 3 <span id= “votes string 3 >0</span> votes <p>
<p> string 14 <span id= “votes string 14 >0</span> votes <p>
<div>
matchup5=string 8 vs string 9
<Button Id Vote String 8 “Vote For String 8”  </Button>
<Button Id Vote String 9 “Vote For String 9”  </Button>
<Div Class =”Results”>
<P> String 8 <Span Id= “ Votes String 8 >0</Span> Votes <P>
<P> String 9 <Span Id= “ Votes String 9 >0</Span> Votes <P>
<Div>
Matchup6= String 1 Vs String 16
<Button Id Vote String 1 “Vote For String 1”  </Button>
<Button Id Vote String 16 “Vote For String 16”  </Button>
<Div Class =”Results”>
<P> String 1 <Span Id= “ Votes String 1 >0</Span> Votes <P>
<P> String 16 <Span Id= “ Votes String 16 >0</Span> Votes <P>
<Div>
Matchup7=String 4 Vs String 13
<Button Id Vote String 4 “Vote For String 4”  </Button>
<Button Id Vote String 13 “Vote For String 13”  </Button>
<Div Class =”Results”>
<P> String 4 <Span Id= “Votes String 4 >0</Span> Votes <P>
<P> String 13 <Span Id= “Votes String 13 >0</Span> Votes <P>
<Div>
Matchup8= String 5 Vs String 12
<Button Id Vote String 5 “Vote For String 5”  </Button>
<Button Id Vote String 12 “Vote For String 12”  </Button>
<Div Class =”Results”>
<P> String 5 <Span Id= “Votes String 5 >0</Span> Votes <P>
<P> String 12 <Span Id= “Votes String 12 >0</Span> Votes <P>
<Div>
Concatenated Strings 
Matchup1=String 5 Vs String 12
<Button Id Vote String 5 “Vote For String 5”  </Button>
<Button Id Vote String 12 “Vote For String 12”  </Button>
<Div Class =”Results”>
<P> String 5 <Span Id= “Votes String 5 >0</Span> Votes <P>
<P> String 12 <Span Id= “Votes String 12 >0</Span> Votes <P>
<Div>
Matchup2= String 4 Vs String 13
<Button Id Vote String 4 “Vote For String 4”  </Button>
<Button Id Vote String 13 “Vote For String 13”  </Button>
<Div Class =”Results”>
<P> String 4 <Span Id= “ Votes String 4 >0</Span> Votes <P>
<P> String 13 <Span Id= “Votes String 13 >0</Span> Votes <P>
<Div>
Matchup3= String 8 Vs String 9
<Button Id Vote String 8 “Vote For String 8”  </Button>
<Button Id Vote String 9 “Vote For String 9”  </Button>
<Div Class =”Results”>
<P> String 8 <Span Id= “ Votes String 8 >0</Span> Votes <P>
<P> String 9 <Span Id= “ Votes String 9 >0</Span> Votes <P>
<Div>
Matchup4= String 1 Vs String 16
<Button Id Vote String 1 “Vote For String 1”  </Button>
<Button Id Vote String 16 “Vote For String 16”  </Button>
<Div Class =”Results”>
<P> String 1 <Span Id= “ Votes String 1 >0</Span> Votes <P>
<P> String 16 <Span Id= “ Votes String 16 >0</Span> Votes <P>
Matchup5= String 7 Vs String 10
<Button Id Vote String 7 “Vote For String 7”  </Button>
<Button Id Vote String 10 “Vote For String 10”  </Button>
<Div Class =”Results”>
<P> String 7 <Span Id= “Votes String 7 >0</Span> Votes <P>
<P> String 10 <Span Id= “Votes String 10 >0</Span> Votes <P>
<Div>
Matchup6= String 2 Vs String 15
<Button Id Vote String 2 “Vote For String 2”  </Button>
<Button Id Vote String 15 “Vote For String 15”  </Button>
<Div Class =”Results”>
<P> String 2 <Span Id= “Votes String 2 >0</Span> Votes <P>
<P> String 15 <Span Id= “Votes String 15 >0</Span> Votes <P>
<Div>
Matchup7=String 6 Vs String 11
<Button Id Vote String 6 “Vote For String 6”  </Button>
<Button Id Vote String 11 “Vote For String 11”  </Button>
<Div Class =”Results”>
<P> String 6 <Span Id= “Votes String 6 >0</Span> Votes <P>
<P> String 11 <Span Id= “Votes String 11 >0</Span> Votes <P>
<Div>
Matchup8= String 3 Vs String 14
<Button Id Vote String 3 “Vote For String 3”  </Button>
<Button Id Vote String 14 “Vote For String 14”  </Button>
<Div Class =”Results”>
<P> String 3 <Span Id= “Votes String 3 >0</Span> Votes <P>
<P> String 14 <Span Id= “Votes String 14 >0</Span> Votes <P>
<Div>
<Script Src= Script. Js
</Body>
</Html>
<H2 Id =”Result”></H2>
<Header.Html>
Result
The End Result Of Voting On A Particular Pair Of Strings
<Script Src=”Vote.Js”><
<Script>
<Body>
<Html>
Vote Js File Notes:
Votes={
‘String 1
‘String 2’
Vote (String)
If (Votes.HasOwnProperty(Character))
Votes [Character]++
Display Results
Else:
Console.Error(‘Invalid String’)
DisplayResults
Result Element=Document Get Element By Id (‘Result’)
Result Element Inner Html
<Header.Html>
Non-Concatenated String Variables 
Non-Concatenated Strings In Covid Strings
Non-Concatenated Strings List=[“Dont Eat Bleach”,”Hello Covid World”, Math Problem ”If A Covid Value Of C=3 Is Added To  The Double Of The Value Its Equal To What Do You Get?”, “Dont Overcrowd Hospital Capacity”,  Math Problem “If A Covid Value Represented By A Variable C Is Quadrupled And Then Added By5 What Is The Resulting Product”?,”The Covid Tracker Shows”, Math Problem ”If The CDCs Covid Tracker Has 50,000 Cases If Only 35,000 Were Reported Last Week How Many New Cases Happened?”, “Could You Please Get Vaccinated”,  Math Problem “The Cov 19 Emergency Alert System Was Installed On March 12 2020 After Its First Two Weeks There Were 1,975 Calls If The Rate Was 5 Calls Per Hour How Many Calls Happened After The First Week?”, Math Problem ”If There Were 840 Calls In Week 1 And 1,975 Calls If The Rate Of Calls Was 5 How Many Calls Happened Between The Two Weeks”?,  Math Problem “Town A1s Annual Thanksgiving Parade Happens On November 19Th If A1s Annual Guidelines Require That Events Of More Than 20,000 People Be Held Only If The Positivity Rate Is Less Than Or Equal To 5 Percent If The Current Positivity Rate Is Six And A Third Percent And The Parade Is Next Week Could It Be Held”?, Math Problem”If The Decision Could Be Made No Later Than The 16Th And The Amount Of Precautions Taken Include 10 Cartons Of 100 Masks And 6Ft Of Distancing Can The Parade Still Happen?”, “Are We Going Back To 1918”,”There Have 100,000 Deaths So Far”,  Sentence “Pfizer Has A 95% Effective Vaccine”, Sentence “Goodbye Covid World”  ]
 Non-Concatenated String1=Phrase”Dont Eat Bleach”
Non-Concatenated String2=Phrase ”Hello Covid World”
Non-Concatenated String3= Math Problem ”If A Covid Value Of C=3 Is Added To The Double Of The Value Its Equal To What Do You Get?”
Non-Concatenated String4=Phrase “Dont Overcrowd Hospital Capacity”
Non-Concatenated String5= Math Problem “If A Covid Value Represented By A Variable C Is Quadrupled And Then Added By5 What Is The Resulting Product”?
Non-Concatenated String6=Phrase ”The Covid Tracker Shows”,
Non-Concatenated String7= Math Problem ”If The CDCs Covid Tracker Has 50,000 Cases If Only 35,000 Were Reported Last Week How Many New Cases Happened?”
Non-Concatenated String8=Phrase ”Could You Please Get Vaccinated”
Non-Concatenated String9= Math Problem ”The Cov 19 Emergency Alert System Was Installed On March 12 2020 After Its First Two Weeks There Were 1,975 Calls If The Rate Was 5 Calls Per Hour How Many Calls Happened After The First Week?”
Non-Concatenated String10= Math Problem ”If There Were 840 Calls In Week 1 And 1,975 Calls If The Rate Of Calls Was 5 How Many Calls Happened Between The Two Weeks”?
Non-Concatenated String11= Math Problem ”Town A1s Annual Thanksgiving Parade Happens On November 19Th If A1s Annual Guidelines Require That Events Of More Than 20,000 People Be Held Only If The Positivity Rate Is Less Than Or Equal To 5 Percent If The Current Positivity Rate Is Six And A Third Percent And The Parade Is Next Week Could It Be Held”?
Non-Concatenated String12= Math Problem ”If The Decision Could Be Made No Later Than The 16Th And The Amount Of Precautions Taken Include 10 Cartons Of 100 Masks And 6Ft Of Distancing Can The Parade Still Happen?”,
Non-Concatenated String13=Phrase “Are We Going Back To 1918”
Non-Concatenated String14=Phrase ”There Have 100,000 Deaths So Far”,
Non-Concatenated String15= Sentence ”Pfizer Has A 95% Effective Vaccine”
Non-Concatenated String16= Sentence ”Goodbye Covid World”
Chapter=Document.Queryselector(Chapter)
Chapter Inner Html
Replace ‘ With/ 
For Apostrophe In Covid Strings1Fan Voting  
Select Characters
Edit Diffuse Property
Desired Color=Green
<P>String 1[Votes ‘String 1 ‘]}Votes</P>
<P>String 2[Votes ‘String 2 ‘]}Votes</P>
<P>String 3 [Votes ‘String 3 ‘]}Votes</P>
<P>String 4 [Votes ‘String 4 ‘]}Votes</P>
<P>String 5[Votes ‘String 5 ‘]}Votes</P>
<P>String 6[Votes ‘String 6 ‘]}Votes</P>
<P>String 7 [Votes ‘String 7 ‘]}Votes</P>
<P>String 8[Votes ‘String 8 ‘]}Votes</P>
<P>String 9 [Votes ‘String 9 ‘]}Votes</P>
<P>String 10 [Votes ‘String 10 ‘]}Votes</P>
<P>String 11[Votes ‘String 11 ‘]}Votes</P>
<P>String 12 [Votes ‘String 12 ‘]}Votes</P>
<P>String 13 [Votes ‘String 13 ‘]}Votes</P>
<P>String 14 [Votes ‘String 14 ‘]}Votes</P>
<P>String 15 [Votes ‘String 15 ‘]}Votes</P>
<P>String 16 [Votes ‘String 16 ‘]}Votes</P>
<Subheading.Html>
First Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings= Sorted Strings.Slice(0,Num To 8)
Return Advancing Strings 
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
If Result Matchup5>=.5
If Result Matchup6>=.5
If Result Matchup7>=.5
If Result Matchup8>=.5
<Header.Html>
Concatenated String Variables
Concatenated Strings In Covid Strings
Concatenated String List=[“SNL”+”Nailed”+”A”+”RONA”+”Christmas”,+”YOU”+”Should”+”Get”+”Tested”,”Pfizer”+”Is”+”95”+”Percent”+”Effective”,”You”+”Should”+”Not”+”Forget”+”Your”+”Flu”+”Shot”, Math Problem ”A”+”Knock”+”Off”+”Vaccine”+”Company”+”Promises”+”To”+”Deliver”+”A”+”Vaccine”+”Within”+”2”+”Weeks”+”If”+”The”+”Standard”+”Timeline”+”Is”+”4”+”Weeks”+”How”+”Much”+”Damage”+”Can”+”Happen?”, Math Problem”If”+”The”+”Knock”+”Off”+”Showed”+”Side”+”Effects”+”Within”+”3”+”Days”+”Involving”+”Goosebumps”+”And”+”The”+”Actual”+”Vaccine”+”Only”+”Showed”+”Slight”+”Chills”+”What”+”Vaccine”+”Should”+”You”+”Take”?,”Some”+”Of”+”These”+”Effects”+”Include”+”Suicide”, Math Problem”If”+”875”+”People”+”Were”+”Reported”+”To”+”A”+”Covid”+”Hotline”+”Because”+”They”+”Thought”+”Injecting”+”Bleach”+”Cured”+”Covid”+And”+”89”+”Percent”+”Of”+”Them”+”Said”+”They”+”Beleived”+”Trump”+”How”+”Many”+”People”+”Out”+”Of”+”The”+”Total”+”Beleived”+”Trump?”, Math Problem”If”+”A”+”Poll”+”On”+”This”+”Question”+”Showed”+”That”+”92”+”Percent”+”Of”+”Republicans”+”Thought”+”He”+”Was”+”Joking”+”When”+”It”+”Came”+”To”+”Bleach”+”How”+”Many”+”Risked”+”Illness?”, Math Problem ”If”+”The”+”Margin”+”Of”+”Error”+”Is”+”.505”+”Percent”+”What”+”Is”+”The”+”Range?”, Math Problem ”A”+”News”+”Report”+”Suggested”+”That”+”The”+”Level”+”Two”+”Emergency”+”Will”+”Continue”+”For”+”Another”+”Week”+”If”+”The”+”Rate”+”Is”+”Greater”+”Than”+”Three”+”Percent”+”If”+”It”+”Is”+”Currently”+”Two”+”And”+”A”+”Quarter”+”Percent”+”Would”+”It”+”Continue?”,”There”+”Have”+”Been”+”Some”+”Negative”+”Effects”,”If”+”Four”+”People”+”Took”+”An”+”Unknown”+”Number”+”Of”+”Shots”+”From”+”Pfizers”+”Vaccine”+”At”+”3:45”+”P.M.”+”On”+”October”+”Seventh”+”When”+”Would”+”It”+”Expire?”, ”The”+”Best”+”Thing”+”To”+”Do”+”Is”+”Practice”+”Continuity”+”Safely”,”In”+”Short”+”You”+”Should”+”Not”+”Change”+”Your”+”Beahvoir”+”Much”, Sentence ”The”+”Most”+”Obvious”+”Simialirty”+”Between”+”Covid”+”And”+”The”+”Spanish”+”Flu”+”Is”+”That”+”They”+”Were”+”Global”+”Pandemics”]
Concatenated String1=Phrase ”SNL”+”Nailed”+”A”+”RONA”+”Christmas”,
Concatenated String2= Phrase ”YOU”+”Should”+”Get”+”Tested”
Concatenated String3=Phrase ”Pfizer”+”Is”+”95”+”Percent”+”Effective”
Concatenated String4=Phrase ”You”+”Should”+”Not”+”Forget”+”Your”+”Flu”+”Shot”
Concatenated String5= Math Problem ”A”+”Knock”+”Off”+”Vaccine”+”Company”+”Promises”+”To”+”Deliver”+”A”+”Vaccine”+”Within”+”2”+”Weeks”+”If”+”The”+”Standard”+”Timeline”+”Is”+”4”+”Weeks”+”How”+”Much”+”Damage”+”Can”+”Happen?”
Concatenated String6= Math Problem If”+”The”+”Knock”+”Off”+”Showed”+”Side”+”Effects”+”Within”+”3”+”Days”+”Involving”+”Goosebumps”+”And”+”The”+”Actual”+”Vaccine”+”Only”+”Showed”+”Slight”+”Chills”+”What”+”Vaccine”+”Should”+”You”+”Take”?
Concatenated String7=Phrase ”Some”+”Of”+”These”+”Effects”+”Include”+”Suicide”
Concatenated String8= Math Problem If”+”875”+”People”+”Were”+”Reported”+”To”+”A”+”Covid”+”Hotline”+”Because”+”They”+”Thought”+”Injecting”+”Bleach”+”Cured”+”Covid”+”And”+”89”+”Percent”+”Of”+”Them”+”Said”+”They”+”Beleived”+”Trump”+”How”+”Many”+”People”+”Out”+”Of”+”The”+”Total”+”Beleived”+”Trump?”
Concatenated String9= Math Problem If”+”A”+”Poll”+”On”+”This”+”Question”+”Showed”+”That”+”92”+”Percent”+”Of”+”Republicans”+”Thought”+”He”+”Was”+”Joking”+”When”+”It”+”Came”+”To”+”Bleach”+”How”+”Many”+”Risked”+”Illness?”
Concatenated String10= Math Problem ”If”+”The”+”Margin”+”Of”+”Error”+”Is”+”.505”+”Percent”+”What”+”Is”+”The”+”Range?”
Concatenated String11= Math Problem ”A”+”News”+”Report”+”Suggested”+”That”+”The”+”Level”+”Two”+”Emergency”+”Will”+”Continue”+”For”+”Another”+”Week”+”If”+”The”+”Rate”+”Is”+”Greater”+”Than”+”Three”+”Percent”+”If”+”It”+”Is”+”Currently”+”Two”+”And”+”A”+”Quarter”+”Percent”+”Would”+”It”+”Continue?”
Concatenated String12=Phrase ”There”+”Have”+”Been”+”Some”+”Negative”+”Effects”
Concatenated String13=Math Problem ”If”+”Four”+”People”+”Took”+”An”+”Unknown”+”Number”+”Of”+”Shots”+”From”+”Pfizers”+”Vaccine”+”At”+”3:45”+”P.M.”+”On”+”October”+”Seventh”+”When”+”Would”+”It”+”Expire?”
Concatenated String14=Phrase ”The”+”Best”+”Thing”+”To”+”Do”+”Is”+”Practice”+”Continuity”+”Safely”
Concatenated String15=Phrase ”In”+”Short”+”You”+”Should”+”Not”+”Change”+”Your”+”Beahvoir”+”Much”
Concatenated String16= Sentence ”The”+”Most”+”Obvious”+”Simialirty”+”Between”+”Covid”+”And”+”The”+”Spanish”+”Flu”+”Is”+”That”+”They”+”Were”+”Global”+”Pandemics”
Chapter= Document.Queryselector(Chapter)
Chapter Inner Html
Replace ‘ With/ 
For Apostrophe In Covid Strings1Fan Voting 
Select Characters
Edit Diffuse Property
Desired Color=Green
<P>String 1[Votes ‘String 1 ‘]}Votes</P>
<P>String 2[Votes ‘String 2 ‘]}Votes</P>
<P>String 3 [Votes ‘String 3 ‘]}Votes</P>
<P>String 4 [Votes ‘String 4 ‘]}Votes</P>
<P>String 5[Votes ‘String 5 ‘]}Votes</P>
<P>String 6[Votes ‘String 6 ‘]}Votes</P>
<P>String 7 [Votes ‘String 7 ‘]}Votes</P>
<P>String 8[Votes ‘String 8 ‘]}Votes</P>
<P>String 9 [Votes ‘String 9 ‘]}Votes</P>
<P>String 10 [Votes ‘String 10 ‘]}Votes</P>
<P>String 11[Votes ‘String 11 ‘]}Votes</P>
<P>String 12 [Votes ‘String 12 ‘]}Votes</P>
<P>String 13 [Votes ‘String 13 ‘]}Votes</P>
<P>String 14 [Votes ‘String 14 ‘]}Votes</P>
<P>String 15 [Votes ‘String 15 ‘]}Votes</P>
<P>String 16 [Votes ‘String 16 ‘]}Votes</P>
<Subheading.Html>
First Round  Concatenated String Advancing 
The Code Designed To Advancing Winning Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 8)
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
If Result Matchup5>=.5
If Result Matchup6>=.5
If Result Matchup7>=.5
If Result Matchup8>=.5
NewWindow=Window.Open(Current Round)
CurrentRound=First Round
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For  First Round
<Header.Html>
Second Round
The Second Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H2 Round {Second Round} <H2>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name } {Candidate Votes} Votes </P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name} </Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=Round2
Total Rounds= 5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
Window Open 
Window Vote Function (Index)
Candidates [Index] Votes++
Commence Round .AddEventListener(Click)
If Current Round ==Round 2:
Commence Round 2
Else:
Remain 
String Numbers[Non-Concatenated Strings :Name ‘String Pair1’ Votes 
Name: ‘String Pair2’ Votes
Name: ‘String Pair3’ Votes
Name:’String Pair4’ Votes
String Numbers[Concatenated Strings : Name ‘String Pair1’ Votes 
Name: ‘String Pair 2’ Votes
Name: ‘String Pair3’ Votes
Name:’String Pair4’ Votes
Non-Concatenated Strings
Name String1 Votes
Name String2 Votes
Name String3 Votes
Name String4 Votes
Name String5 Votes
Name String6 Votes
Name String7 Votes
Name String8 Votes
<Subheading.Html>
Second Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 4)
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
Return Advancing Strings 
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
Concatenated Strings 
Name String1 Votes
Name String2 Votes
Name String3 Votes
Name String4 Votes
Name String5 Votes
Name String6 Votes
Name String7 Votes
Name String8 Votes
<Subheading.Html>
Second Round Concatenated String Advancing 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 4)
Return Advancing Strings
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result  
If Result Matchup1>=.5
If Result Matchup2>=.5
If Result Matchup3>=.5
If Result Matchup4>=.5
NewWindow=Window.Open(Current Round)
CurrentRound=First Round
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For  Second Round
<Header.Html>
Third Round
The Third Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H3 Round {Third Round} <H3>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name } {Candidate Votes} Votes </P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name} </Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Let Current Round=Round3
Total Rounds= 5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
Window Open 
Window Vote Function (Index)
Candidates [Index] Votes++
Commence Round .AddEventListener(Click)
If Current Round ==Round 3:
Commence Round 3
Else:
Remain 
String Numbers[Non-Concatenated Strings :Name  ‘String Pair1’ Votes 
Name: ‘String Pair2’ Votes
String Numbers[Concatenated Strings : Name  ‘String Pair1’ Votes 
Name: ‘String Pair2’ Votes
Name String1 Votes
Name String2 Votes
Name String3 Votes
Name String4 Votes
<Subheading.Html>
Third Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings .Slice(0,Num To 2)
Return Advancing Strings
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result  
If Result Matchup1>=.5
If Result Matchup2>=.5
Name String1 Votes
Name String2 Votes
Name String3 Votes
Name String4 Votes
<Subheading.Html>
Third Round Concatenated String Advancing 
The Code Designed To Advancing Winning Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(0,Num To 2)
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
If Result Matchup2>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Third Round 
<Header.Html>
Fourth Round
The Fourth Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H4 Round {Fourth Round} <H4>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name } {Candidate Votes} Votes </P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name}</Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Window Open 
Window Vote Function (Index)
Candidates [Index] Votes++
Commence Round .AddEventListener(Click)
If Current Round ==Round 4:
Commence Round 4
Else:
Remain 
Let Current Round=ROUND4
Total Rounds=5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
String Numbers[Non-Concatenated Strings : Name ‘String Pair1’ Votes 
String Numbers[Concatenated Strings :Name ‘String Pair1’ Votes 
Name String1 Votes
Name String2 Votes
<Subheading.Html>
Fourth Round Non-Concatenated String Advancing 
The Code Designed To Advancing Winning Non-Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2)Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice( Last Concatenated String Last Non-Concatenated String )
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
Name String1 Votes
Name String2 Votes
<Subheading.Html>
Fourth Round Concatenated String Advancing 
The Code Designed To Advancing Winning Concatenated Strings 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice( Last Concatenated String Last Non-Concatenated String)
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Result Matchup1>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Fourth Round 
<Header.Html>
Fifth Round
The Fifth Round Of Fan Voting
Render Round
RoundContainer.InnerHtml=<H5 Round {Fifth Round} <H5>
Candidates ForEach((Candidate,Index)
CandidateDiv.Innerhtml
<P> {Candidate Name} {Candidate Votes} Votes</P>
<Button On Click= “Vote {Index} >”Vote For {Candidate Name} </Button>
Round Container.AppendChild(CandidateDiv)
Add Event Listener (‘Dom Content Loaded)
Window Open 
Window Vote Function (Index)
Candidates [Index] Votes++
Commence Round .AddEventListener(Click)
If Current Round ==Round 5:
Commence Round 5
Else:
Remain 
Let Current Round=Round5
Total Rounds= 5
Round Container=Document.Get Element By Id(‘Round-Container’)
NextRoundButton=Document.Get Element By Id(‘Next-Round’)
String Numbers[Name ‘String Pair Votes‘]
Last Remaining Non-Concatenated String 
Last Remaining Non-Concatenated String 
<Subheading.Html>
Covid Strings Fan Voting Victory
The End Result Of Fan Voting 
Advance To Next Round (Strings To Advance)
Sorted Strings=(Strings.Sort(String1,String2) Strings 1 Votes String 2 Votes)
Advancing Strings=Sorted Strings.Slice(Winner String)
Return Winner
Last Remaining Non-Concatenated String=Last Non-Concatenated String Variable Left In Fan Voting
Last Remaining Concatenated String=Last Concatenated String Variable Left In Fan Voting
Return Advancing Strings 
Percentage Calculator
Part=Number Of Votes Per Day In Round 
Whole= Total Number Of Votes For String
Calculate {Part,Whole}
Return (Part/Whole)*100
Display (Part,Whole)
Percentage=This.Calculate(Part,Whole)
Return {Part} Is {Percentage} Of {Whole}
Result=PercentageCalculator.Display()
Console Log Result 
If Last Remaining Non-Concatenated String>=.5
If Last Remaining Concatenated String>=.5
NewWindow=Window.Open(Current Round)
Window.Close(Current Round)
Window.Vote =Function(Index)
Candidates [Index] Votes++;
Next Round Button.AddEventListener(‘Click’,()
If(CurrentRound <TotalRounds)
CurrentRound++
Else:
Alert(‘Voting Has Ended)
If NextRoundButton.Disabled=True
Conclude Voting For Fifth Round 
Return Filename
