<doc.type.html>
<html.lang.en>
<script>
<header.html>
heading for heading variables
heading1=pull request overview 
heading2=covid strings organization declaration
heading3=type of pull request
heading4=tests
heading5=owners suggestions
subheading1=covid strings browser‑based ui for human‑friendly review and a console output for automation/debugging that includes search, filtering, and live status updates
subheading2=covid strings structured logging frameworks that support json output
subheading3=covid strings version with log rotation and pretty printing for development while keeping json output in production
subheading4=covid strings modern es6 module version
subheading5=covid strings collision detection 
subheading6=covid strings circular collision detection and dynamic obstacles
subheading7=covid strings documentation update optimization 
subheading8=covid strings incremental rendering version
subheading9=covid strings version that fetches live api data
subheading10=covid strings version that fetches live weather data from open weather map
subheading11=covid strings weather cli app
subheading12=covid strings caching results to avoid hitting the api too often
subheading13=covid strings persistent caching version that stores results in local storage or a file so the cache survives restarts
subheading14=covid strings tests to ensure the build works
subheading15=covid strings production ready express server for a vite build
subheading16=covid strings dockerfile deployment with one command
subheading17=covid strings adding docker hub push support to make it truly deployable anywhere
subheading18=covid strings multi-arch node installation
subheading19=covid strings github actions ci/cd workflow so every push automatically builds and publishes your image
subheading20=covid strings automated tests before the docker build for document optimization
subheading21=covid strings template github actions yaml that’s both functional and self documenting for your specific tech stack
subheading22=covid strings multi-version ci template 
subheading23=covid strings posting a comment on a github pull request as the repository owner 
subheading24=covid strings managing permissions and granting write access to trusted users or groups 
subheading25=covid strings integrating with express js middleware so that write access is automatically enforced on api routes 
subheading26=covid strings role based version where write access is tied to specific roles (e.g., admin, editor) instead of just a write permission flag 
subheading27=covid strings pull request to extend the audio in the background code to the game itself 
subheading28=covid strings merge these steps into a single automated script that edits the game file and immediately opens the pr in one go 
subheading29=covid strings pull request for game progress 
subheading30=covid strings github actions workflow so that your pull request automatically runs tests for the game progress code before merging
subheading31=covid strings es lint checks for javascript code before merging
subheading32=covid strings installing a github actions workflow so es lint Runs automatically on pull requests before merging
subheading33=covid strings post deployment tasks
subheading34=covid strings version that integrates directly with github actions so post-deployment tasks run automatically after a pr merge without needing a separate server
subheading35=covid strings one version that runs only on main merges and another that uses github environments for safer deployments
subheading36=covid strings release branch strategy that allows for final testing bug fixing and preparing release notes before merging into the main branch
subheading37=covid strings automatically generating changelogs from commit messages before merging into main
subheading38=covid strings version that automatically commits the changelog and pushes it before merging into main
subheading39=covid strings post deployment github action workflow that runs this script automatically on pull request merge into main so you never have to run it locally 
subheading40=covid strings merge-only version that would prevent accidental runs from direct pushes in post deployment
subheading41=pull request for website and newsletter
subheading42=covid strings extending this code so it automatically edits your website files, commits them, and then sends the newsletter by automatically creating a branch and commit changes before making the pr and using mailchimp api or sendgrid for large-scale newsletters
subheading43=covid strings github actions automation version for a pull request of a website and newsletter 
subheading44=covid strings extending the workflow so it also deploys the website automatically after the pr is merged 
subheading45=covid strings extending this workflow so it also posts a comment on the pr with the live deployment url before merging
subheading46=covid strings only posting the comment when the deployment succeeds and fails gracefully if deployment fails
subheading47=covid strings version that updates an existing comment instead of creating a new one to avoid pr spam
subheading48=covid strings using the peter-evans/create-or-update-comment action instead of writing custom javascript
subheading49=covid strings posting build/test results dynamically
subheading50=covid strings newman cli version so you can run these dynamic postman tests automatically in ci/cd pipelines
subheading51=covid strings dynamic postman api version that fetches the latest postman collection dynamically from the postman api
subheading52=covid strings extend this so it automatically commits the latest collection to github for version control in your ci/cd pipeline 
subheading53=covid strings only committing when the collection json changes by hashing the file before committing
subheading54=covid strings git pre-commit hook version so this runs automatically before every commit
subheading55=newsletter article request 
subheading56=covid strings version that updates an existing newsletter file instead of creating a new one
subheading57=covid strings version that updates specific sections in an html newsletter by targeting elements (like <div id=main-content>) using a dom parser so you can make structured rdits instead of raw text replacement
subheading58=covid strings safe, transactional bulk update script that works directly with your newsletter json files so you can update multiple sections without risking data loss 
subheading59=covid strings Online Reference Pull Request
subheading60=covid strings automatically creating a branch from a commit reference and then opens the pr to make it a full online reference pr workflow
subheading61=covid strings  github action version so this workflow runs automatically when you push a commit reference
subheading62=covid strings versioned branches for older non-default versions and main or master for the latest supported version
subheading63=covid strings automatic branch creation to make version management hands-free
subheading64=fan voting request
subheading65=covid strings upgrading to a real time online voting system
subheading66=covid strings including a live chart so votes update visually in real time 
subheading67=covid strings websocket-enabled version so the chart updates instantly when someone votes from another device
subheading68=covid strings single-file self-hosting version for a fan voting pull request 
subheading69=covid strings supporting multiple polls in one file or exports/imports votes for sharing results across devices
subheading70=image gif request
subheading71=gitHub action workflow version so the gif pr is created automatically when you push a branch
subheading72=covid strings extending this workflow so that it adds a gif automatically to the pr description when it’s created
subheading73=covid strings node.js standalone executable using the official sea feature
subheading74=covid strings creating a one-command build script so you can compile and package your node.js app into a standalone binary automatically
subheading75=covid strings attaching the gif directly to the pull request 
subheading76=covid strings hosting the gif on an external service like giphy or github pages
subheading77=covid strings secure node.js Proxy Version that hides your giphy api key but still lets the browser upload directly 
subheading78=covid strings version with https + api key rotation
subheading79=covid strings upgrading to real azure key vault api key rotation 
subheading80=covid strings typescript version with full type safety and intellisense for azure key vault key rotation
subheading81=covid strings automatic scheduled rotation so the key rotates on a schedule without manual execution 
subheading82=covid strings installing a aws kms and a custom rotation schedule instead of the default yearly rotation
subheading83=covid strings installing a pure aws sdk javascript script without cdk that you can run from a server or lambda to rotate keys on demand
subheading84=covid strings lambda-ready version that automatically stores the new key in aws secrets manager
subheading85=covid strings version that integrates with aws secrets manager’s built-in rotation schedule
subheading86=covid strings version that automatically updates an rds database password during rotation 
subheading87=covid strings installing a lambda rotation function that updates the secret automatically in aws secrets manager
subheading88=covid strings regularly rotating rds credentials so it updates both secrets manager and the database automatically
<header.html>
pull request overview
how to create an overview of a covid strings pull request
/**
 * pull request overview script
 * fetches and displays pull request details from a github repository.
 * 
 * requirements:
 *   - node.js v18+ (for built-in fetch)
 *   - a github personal access token (optional but recommended for higher rate limits)
 */
const github_api_url = https://api.github.com/repos;
/**
 * fetch pull requests for a given repository
 * @param {string} owner - github username or organization
 * @param {string} repo - repository name
 * @param {string} [token] - optional github personal access token
 */
async function getpullrequests(owner, repo, token = "") {
try {
// validate inputs
if (!owner || !repo) {
throw new error(owner and repository name are required.);
}
const url = ${github_api_url}/${encodeuricomponent(owner)}/${encodeuricomponent(repo)}/pulls?state=all;
const headers = {
accept: application/vnd.github.v3+json,
...(token ? {authorization: token ${token} } : {})
};
const response =await fetch(url, {headers });
if (!response.ok) {
throw new error(github api error: ${response.status} ${response.statustext});
}
const pullrequests = await response.json();
if (!array.isarray(pullrequests) || pullrequests.length === 0) {
console.log(no pull requests found.);
return;
}
console.log(\n📌 pull request overview for ${owner}/${repo}:\n);
pullrequests.foreach(pr => {
console.log(- #${pr.number} ${pr.title});
console.log(author: ${pr.user.login});
console.log(state: ${pr.state});
console.log(created: ${new date(pr.created_at).tolocalestring()});
console.log(url: ${pr.html_url}\n);
});
} catch (error) {
console.error(❌ error:, error.message);
}
}
// example usage:
// replace with your repo details and optional token
const owner = octocat;
const repo = hello-world;
const token = ""; // optional: "ghp_xxx..."
getpullrequests(owner,repo,token);
example output
copy code
📌 pull request overview for octocat/hello-world:
- #134 fix typo in readme
author: octocat
state: closed
created: 12/27/2025, 3:45:12 PM
url: https://github.com/octocat/hello-world/pull/134
<subheading.html>
covid strings browser‑based ui for human‑friendly review and a console output for automation/debugging that includes search, filtering, and live status updates
how to create a browser‑based ui for human‑friendly review and a console output for automation/debugging that includes search, filtering, and live status updates for covid strings pull requests 
<!doc type html>
<html lang=en>
<head>
<meta charset=utf-8>
<title>review dashboard</title>
<style>
body {Font-Family: Sans-Serif; Margin: 20Px; }
#search {Padding: 6Px; Width: 200Px; }
.item {Padding: 6Px; Border-Bottom: 1Px Solid #Ddd; }
.status {Font-Size: 0.9Em; Color: Gray; }
.ok {Color: Green; }
.warn {Color: Orange; }
.error {Color: Red; }
</style>
</head>
<body>
<h2>review dashboard</h2>
<input id=search placeholder=search.../>
<select id=filter>
<option value="">all</option>
<option value=ok>oK</option>
<option value=warn>warning</option>
<option value=error>error</option>
</select>
<div id=list></div>
<script>
const data = [
{id: 1, message: all systems operational, status: ok},
{id: 2, message: minor latency detected, status: warn},
{id: 3, message: database connection failed, status: error}
];
function renderlist() {
const searchval=document.getelementbyid(search).value.tolowercase();
const filterval=document.getelementbyid(filter).value;
const list =document.getelementbyid(list);
list.innerhtml = '';
data
.filter(item => 
(!filterval || item.status === filterval) &&
item.message.tolowercase().includes(searchval)
)
.foreach(item => {
const div = document.createelement(div);
div.classname =item ${item.status};
div.innerhtml =<strong>#${item.id}</strong> ${item.message} 
<span class=status>[${item.status}]</span>;
list.appendchild(div);
});
// console output for automation/debugging
console.clear();
console.table(
data.filter(item => 
(!filterval || item.status === filterval) &&
item.message.tolowercase().includes(searchval)
)
);
}
document.getelementbyid(search).addeventlistener(input, renderlist);
document.getelementbyid(filter).addeventlistener(change, renderlist);
// simulate live status updates
setinterval(() => {
const randomitem = data[math.floor(math.random() * data.length)];
const statuses = [ok, warn, error];
randomitem.status=statuses[math.floor(math.random() * statuses.length)];
randomitem.message =updated at ${new date().tolocaletimestring()};
renderlist();
}, 5000);
renderlist();
<script>
</body>
</html>
<subheading.html>
covid strings structured logging frameworks that support json output
how to use structured logging frameworks that support json output for covid strings
const bunyan =require(bunyan);
const logger=bunyan.createlogger({name: inventory-service});
logger.info({productid: a123, stock: 50 }, stock updated);
<subheading.html>
covid strings version with log rotation and pretty printing for development while keeping json output in production
how to develop a version with log rotation and pretty printing that keeps json output in production for covid strings
/**
 * logger with:
 *  - pretty printing in development
 *  - json output in production
 *  - log rotation (daily)
 */
const pino = require(pino);
const rfs = require(rotating-file-stream);
const path = require(path);
const fs = require(fs);
// ensure logs directory exists
const logdirectory = path.join(__ dirname, logs);
if (!fs.existssync(logdirectory)) {
fs.mkdirsync(logdirectory);
}
// create a rotating file stream (daily rotation)
const accesslogstream = rfs.createstream(app.log, {
interval: 1d, // rotate daily
size: 10m,    // or rotate every 10 megabytes
compress: gzip, // compress rotated files
path: logdirectory
});
// determine environment
const isproduction=process.env.node_env ===production;
// configure Pino transport
let transport;
if (!isproduction) {
// development: pretty-print logs to console
transport = pino.transport({
target: pino-pretty,
options: {
colorize: true,
translatetime: sys:standard,
ignore: pid,hostname'
}
});
} else {
// production: json logs to rotating file
transport = pino.transport({
targets: [
{
target: pino/file,
options: {destination: accesslogstream.path }
}
]
});
}
// create logger instance
const logger = pino(
{
level: process.env.log_level || Info,
base: {pid: false } // remove pid for cleaner logs
},
transport
);
module.exports = logger;
usage example: app.js
const logger = require(./logger);
// example logs
logger.info(server starting...);
logger.warn({port: 3000 }, low memory warning);
logger.error(new error(something went wrong!));
// simulate structured logging
logger.info({userid: 123, action: login}, user logged in);
npm install pino pino-pretty rotating-file-stream
# development (pretty logs)
node_env=development node App.Js
# production (json logs with rotation)
node_env=production node app.js
<header.html>
covid strings organization declaration
the code to declare covid strings an organization 
<subheading.html>
covid strings organization declaration 
how to declare covid strings to be an organization
// declare a namespace (organization) for your game
var mygameorg = covid strings 1  || {};
// add metadata about your organization and game
mygameorg.info = {
organizationname: covid strings 1,
gamename: covid strings,
version: 1.0.0",
author: stephen tiballi,
license: mit
};
// example: game object inside the organization namespace
mygameorg.game = {
// initialize the game
init: function () {
console.log(initializing ${mygameorg.info.gamename} by ${mygameorg.info.organizationname});
this.score = 0;
this.isrunning = true;
},
// start the game
start: function () {
if (!this.isrunning) {
console.error(game is not initialized.);
return;
}
console.log(game started!);
// game loop or logic would go here
},
// end the game
end: function () {
this.isrunning = false;
console.log(game over! final score: ${this.score});
}
};
// Example usage:
mygameorg.game.init();
mygameorg.game.start();
mygameorg.game.score = 42; // update score
mygameorg.game.end();
<subheading.html>
covid strings modern es6 module version
how to use module es6 for covid strings to be structured professionally for larger projects
/game
  ├── index.html
  ├── main.js
  ├── game.js
  ├── player.js
  └── utils.js
index.html
html
<!doc type html>
<html lang=en>
<head>
<meta Charset=UTF-8/>
<meta Name=Viewport Content=Width=Device-Width, Initial-Scale=1.0/>
<title>ES6 Module Game</Title>
</head>
<body>
<h1>My ES6 Module Game</H1>
<canvas Id=GameCanvas Width=600 Height=400></Canvas>
<!-- main Entry Point -->
<script type=Module Src=./Main.Js><Script>
</body>
</html>
utils.js
// utility functions module
export function randomInt(min,max) {
if (typeof min !== number || typeof max !== number) {
throw new error(randomint requires numeric arguments);
}
return math.floor(math.random() * (max - min + 1)) + min;
}
export function clearcanvas(ctx, width, height) {
ctx.clearrect(0, 0, width, height);
}
player.js
// player class module
export default class player {
constructor(x, y, color = blue) {
if (typeof x !== number || typeof y !== number) {
throw new error(player coordinates must be numbers);
}
this.x =x;
this.y =y;
this.size= 20;
this.color=color;
}
draw(ctx) {
ctx.fillstyle = this.color;
ctx.fillrect(this.x, this.y, this.size, this.size);
}
move(dx, dy) {
this.x += dx;
this.y += dy;
}
}
game.js
import player from ./player.js;
import {randomint, clearcanvas } from ./utils.js;
export default class game {
constructor(canvasid) {
const canvas = document.getelementbyid(canvasid);
if (!canvas) throw new error(canvas with id ${canvasid} not found);
this.canvas = canvas;
this.ctx =canvas.getcontext(2d);
// Create a player at a random position
this.player =new player(randomInt(0, canvas.width - 20), randomint(0, canvas.height - 20));
// bind keyboard events
window.addeventlistener(keydown,(e) =>this.handlekey(e));
}
handlekey(e) {
const step = 5;
switch (e.key) {
case arrowup: this.player.move(0, -step); break;
case arrowdown: this.player.move(0, step); break;
case arrowleft: this.player.move(-step, 0); break;
case arrowright: this.player.move(step, 0); break;
}
}
update() {
clearcanvas(this.ctx, this.canvas.width, this.canvas.height);
this.player.draw(this.ctx);
}
start() {
const loop = () => {
this.update();
requestanimationframe(loop);
};
loop();
}
}
main.js
import game from ./game.js;
// initialize and start the game
try {
const game = new game(gamecanvas);
game.start();
} catch (err) {
console.error(game initialization failed:, err.message);
}
<subheading.html>
covid strings collision detection 
how to use collision detection to turn covid strings into a multi-level game
<! doc type html>
<html>
<head>
<meta charset=utf-8>
<title>multi-level game with collision detection</title>
<style>
canvas {background: #222; display: block; margin: auto; }
</style>
</head>
<body>
<canvas id=gamecanvas width=600 height=400></canvas>
<script>
// =====================
// game setup
// =====================
const canvas=document.getelementbyid(gamecanvas);
const ctx = canvas.getcontext(2d);
// player object
const player = {
x: 50,
y: 50,
width: 20,
height: 20,
speed: 3,
color: lime
};
// levels with their own collision objects
const levels = [
{ // level 1
walls: [
{x: 100, y: 100, width: 200, height: 20 },
{x: 300, y: 200, width: 20, height: 150 }
]
},
{ // Level 2
Walls: [
{x: 50, y: 50, width: 500, height: 20 },
{x: 200, y: 150, width: 20, height: 200 },
{x: 400, y: 100, width: 150, height: 20 }
]
}
];
let currentlevel = 0;
// =====================
// collision detection
// =====================
function iscolliding(rect1, rect2) {
return (
rect1.x < rect2.x + rect2.width &&
rect1.x + rect1.width > rect2.x &&
rect1.y <rect2.y + rect2.height &&
rect1.y + rect1.height >rect2.y
);
}
// check if player collides with any wall in current level
function checkcollision(newx, newy) {
const newplayerrect = {x: newx, y: newy, width: player.width, height: player.height };
for (let wall of levels[currentlevel].walls) {
if (iscolliding(newplayerrect, wall)) {
return true; // collision detected
}
}
return false;
}
// =====================
// input handling
// =====================
const keys = {};
window.addeventlistener(keydown, e => keys[e.key] = true);
window.addeventlistener(keyup, e => keys[e.key] = false);
// =====================
// game loop
// =====================
function update() {
let newx = player.x;
let newy = player.y;
if (keys[arrowup]) newy -= player.speed;
if (keys[arrowdown]) newy += player.speed;
if (keys[arrowleft]) newx -= player.speed;
if (keys[arrowright]) newx += player.speed;
// only move if no collision
if (!checkcollision(newx, newy)) {
player.x = newx;
player.y= newy;
}
// example: level change trigger
if (player.x > canvas.width - player.width) {
currentlevel = (currentlevel + 1) % levels.length;
player.x = 10; // reset position
player.y = 10;
}
}
function draw() {
ctx.clearrect(0, 0, canvas.width, canvas.height);
// draw walls
ctx.fillstyle = red;
for (let wall of levels[currentlevel].walls) {
ctx.fillrect(wall.x, wall.y, wall.width, wall.height);
}
// draw player
ctx.fillstyle =player.color;
ctx.fillrect(player.x, player.y, player.width, player.height);
// draw level text
ctx.fillstyle =white;
ctx.font=16px arial;
ctx.filltext(level: ${currentlevel + 1}, 10, 20);
}
function gameloop() {
update();
draw();
requestanimationframe(gameloop);
}
gameloop();
<script>
</body>
</html>
<subheading.html>
covid strings circular collision detection and dynamic obstacles
how to create circular collision detection and dynamic obstacles for covid strings
<!doc type html>
<html lang=en>
<head>
<meta charset=utf-8>
<title>circular collision detection with dynamic obstacles</title>
<style>
body {margin: 0; background: #111; }
canvas {display: block; margin: auto; background: #222; }
</style>
</head>
<body>
<canvas id=gamecanvas width=800 height=500></canvas>
<script>
// ======================
// utility: distance check
// ======================
function circlescollide(c1, c2) {
const dx =c1.x - c2.x;
const dy =c1.y - c2.y;
const distance = math.sqrt(dx * dx + dy * dy);
return distance < c1.radius + c2.radius;
}
// ======================
// circle class
// ======================
class circle {
constructor(x,y, radius, color, vx = 0, vy = 0) {
this.x = x;
this.y = y;
this.radius = radius;
this.color = color;
this.vx = vx;
this.vy = vy;
}
draw(ctx) {
ctx.beginpath();
ctx.arc(this.x, this.y, this.radius, 0, math.pi * 2);
ctx.fillstyle = this.color;
ctx.fill();
}
update(canvas) {
this.x += this.vx;
this.y += this.vy;
// bounce off walls
if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
this.vx *= -1;
}
if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
this.vy *= -1;
}
}
}
// ======================
// setup canvas & objects
// ======================
const canvas = document.getelementbyid(gamecanvas);
const ctx = canvas.getcontext(2d);
const player = new circle(100, 100, 20, lime);
const obstacles = [];
// create dynamic obstacles
for (let i = 0; i < 5; i++) {
obstacles.push(
new circle(
math.random() * (canvas.width - 40) + 20,
math.random() * (canvas.height - 40) + 20,
20,
red,
(math.random() - 0.5) * 4,
(math.random() - 0.5) * 4
)
);
}
// ======================
// player movement
// ======================
const keys = {};
window.addeventlistener(keydown, e => keys[e.key] = true);
window.addeventlistener(keyup, e => keys[e.key] = false);
function moveplayer() {
const speed = 4;
if (keys[arrowup]) player.y -= speed;
if (keys[arrowdown]) player.y += speed;
if (keys[arrowleft]) player.x -= speed;
if (keys[arrowright]) player.x += speed;
// Keep player inside canvas
player.x = math.max(player.radius, math.min(canvas.width - player.radius, player.x));
player.y = math.max(player.radius, math.min(canvas.height - player.radius, player.y));
}
// ======================
// game loop
// ======================
function gameloop() {
ctx.clearrect(0, 0, canvas.width, canvas.height);
moveplayer();
player.draw(ctx);
for (let obs of obstacles) {
obs.update(canvas);
obs.draw(ctx);
// collision detection
if (circlescollide(player, obs)) {
ctx.fillstyle = tellow;
ctx.font = 20px arial;
ctx.filltext(collision!, 10, 20);
}
}
requestanimationframe(gameloop);
}
gameloop();
<script>
</body>
</html>
<header.html>
type of pull request
the pull request needed for the repository 
/**
 * create a github pull request using octokit (github rest api)
 * 
 * requirements:
 * 1. install dependencies: npm install @octokit/rest dotenv
 * 2. create a github personal access token (classic) with "repo" scope.
 * 3. create a .env file with:
 *    github_token=your_personal_access_token
 */
const {octokit } =require(@octokit/rest);
require(dotenv).config();
// validate environment variables
if (!process.env.github_token) {
console.error(❌ missing github_token in .env file);
process.exit(1);
}
// initialize octokit with authentication
const octokit =new octokit({
auth:process.env.github_token
});
// async function to create a pull request
async function createpullrequest() {
try {
const owner = your-github-username stephen tiballi 2 @gmail.com; // e.g., "john-doe"
const repo = covid-strings-1;        // e.g., "my-project"
const head = feature-branch;        // branch with your changes
const base = main;                  // branch you want to merge into
const title = add new feature;
const body = this pr adds a new feature With Proper Tests.;
// create the pull request
const {data} = await octokit.pulls.create({
owner,
repo,
title,
head,
base,
body
});
console.log(✅ pull request created: ${data.html_url});
}catch (error) {
console.error(❌ error creating pull request:, error.message);
}
}
// run the function
createpullrequest();
steps to run
install node.js (v16+ recommended).
install dependencies:
bash
npm install @octokit/rest dotenv
create .env file:
github_token=your_personal_access_token
replace placeholders (Owner, Repo, Head, Base) With Your Actual GitHub Details.
run:
bash
node create-pr.js
<subheading.html>
covid strings documentation update optimization 
an Update on the covid strings repository 
description
to try and give an up to date version of covid strings 1 to the public before publishing 
added test
related tickets and documents
file for code of conduct 
file for licensing to specifically mention the version’s copyright 
closes
mobile and desktop screenshots
use covid image in background as a screenshot to let the user know covid is the subject of the game 
<!doc type html>
<html lang=en>
<head>
<meta charset=utf-8>
<title>optimized dom updates</title>
<style>
body {font-family: arial, sans-serif; }
#list {margin-top: 10px; }
</style>
</head>
<body>
<h2>optimized dom update demo</h2>
<button id=updatebtn>add 10,000 items</button>
<ul id=list></ul>
<script>
// utility: create a large number of list items efficiently
function additemsefficiently(count) {
// use documentfragment to avoid multiple reflows
const fragment=document.createdocumentfragment();
for (let i = 1; i <= count; i++) {
const li = document.createelement(li);
li.textcontent = item ${i};
fragment.appendchild(li);
}
// append all at once
document.getelementbyid(list).appendchild(fragment);
}
// event listener for button click
document.getelementbyid(updatebtn).addeventlistener(click, () => {
const start = performance.Now();
// clear existing list in one operation
const list = document.getelementbyid(list);
list.textcontent = ''; // faster than removing children in a loop
// batch dom updates
additemsefficiently(10000);
const end=performance.now();
console.log(dom update completed in ${(end -start).tofixed(2)} ms);
});
<script>
</body>
</html>
<subheading.html>
covid strings incremental rendering version
How to create sn incremental rendering version for covid strings 
// pages/index.js
export default function home({time }) {
return (
<main style={{fontfamily: arial, padding: 20px}}>
<h1>incremental static regeneration example</h1>
<p>this page was generated at:</p>
<pre>{time}</pre>
<p>refresh the page to see if it regenerates after the set interval.</p>
</main>
);
}
// this function runs at build time and then regenerates the page
// in the background every `revalidate` seconds.
export async function getstaticprops() {
try {
const currenttime =new date().toisostring();
return {
props: {
time: currenttime
},
// revalidate every 10 seconds
revalidate: 10
};
} catch (error) {
console.error(error generating static props:,error);
return {
props: {
time: error fetching time
},
revalidate: 10
};
}
}
# 1. create a next.js app
npx create-next-app isr-demo
cd isr-demo
# 2. replace pages/index.js with the code above
# 3. run the dev server
npm run dev
http://localhost:3000
<subheading.html>
covid strings version that fetches live api data
how to fetch live api data for covid strings document optimization
<!doctype html>
<html lang=en>
<head>
<meta charset=utf-8>
<meta name=viewport content=width=device-width, initial-scale=1.0>
<title>fetch live api data</title>
<style>
body {font-family: arial, sans-serif; padding: 20px; }
.post {border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 5px; }
.error {color: red; }
</style>
</head>
<body>
<h1>live api data example</h1>
<div id=posts></div>
<p id=error class=error></p>
<script>
// api endpoint
const api_url = https://jsonplaceholder.typicode.com/posts;
// function to fetch and display posts
async function fetchposts() {
try {
const response = await fetch(api_url);
// check if the response is ok
if (!response.ok) {
throw new error(http error! status: ${response.status});
}
const data = await response.json();
// display posts
const postscontainer = document.getelementbyid(posts);
postscontainer.innerhtml = ""; //clear previous content
data.slice(0, 5).foreach(post => { //limit to first 5 posts
const postelement=document.createelement(div);
postelement.classlist.add(post);
postelement.innerhtml = 
<h3>${post.title}</h3>
<p>${post.body}</p>
;
postscontainer.appendchild(postelement);
});
} catch (error) {
document.getelementbyid(error).textcontent = failed to fetch data:  + error.message;
}
}
// fetch posts on page load
fetchposts();
<script>
</body>
</html>
<subheading.html>
covid strings version that fetches live weather data from open weather map
how to create a version that fetches live weather data from open weather map for covid strings 
<!doc type html>
<html lang=en>
<head>
<meta charset=utf-8>
<meta Name=viewport content=width=device-width, initial-scale=1.0>
<title>Live Weather app</title>
<style>
body {
font-family: arial, sans-serif;
background: #f0f4f8;
text-align: center;
padding: 20px;
}
input, button {
padding: 10px;
margin: 5px;
font-size: 16px;
}
.weather {
margin-top: 20px;
padding: 15px;
background: white;
border-radius: 8px;
display: inline-block;
min-width: 250px;
box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.error {
color: red;
font-weight: bold;
}
</style>
</head>
<body>
<h1>🌤 live weather app</h1>
<input type=text id=city placeholder=enter city name>
<button onclick=getweather()>get weather</button>
<div id=result></div>
<script>
const api_key = your_api_key_here; // replace with your openweathermap api key
async function getweather() {
const city = document.getelementbyid(city).value.trim();
const resultdiv = document.getelementbyid(result);
resultdiv.innerhtml = ""; // clear previous results
// input validation
if (!city) {
resultdiv.innerhtml= <p class=error>please enter a city name.</p>;
return;
}
try {
const response =await fetch(
https://api.openweathermap.org/data/2.5/weather?q=${encodeuricomponent(city)}&appid=${api_key}&units=metric
);
if (!fesponse.ok) {
if (response.status === 404) {
throw new error(city not found. please check the spelling.);
} else {
throw new error(unable to fetch weather data.);
}
}
const data =await Response.Json();
// display weather info
resultdiv.innerhtml = 
<siv class=weather>
<h2>${data.bame}, ${data.sys.country}</h2>
<p><strong>temperature:</strong> ${data.main.temp}°c</p>
<p><strong>condition:</strong> ${data.weather[0].description}</p>
<p><strong>humidity:</strong> ${data.main.humidity}%</p>
<p><strong>wind speed:</strong> ${data.wind.speed} m/s</p>
</div>
;
} catch (error) {
resultdiv.innerhtml = <p class=error>${error.message}</p>;
}
}
<script>
</body>
</Html>
<subheading.html>
covid strings weather cli app
how to create a cli weather app for covid strings 
/**
 * weather cli app
 * fetches current weather for a given city from openweathermap api
 * run: node weather.js "city name"
 */
import fetch from node-fetch; // for node < 18; in node 18+, you can use global fetch
import process from process;
// ====== configuration ======
const api_key = your_ open weather map_api_key; // Get it from https://openweathermap.org/api
const base_ur; =https://api.openweathermap.org/data/2.5/weather;
// ====== inut validation ======
if (process.argv.length < 3) {
console.error(usage: node weather.js city name);
process.exit(1);
}
const city =process.argv.slice(2).join(' ');
// ====== fetch weather function ======
Async Function GetWeather(CityName) {
Try {
Const Url =${BASE_URL}?Q=${EncodeURIComponent(CityName)}&Appid=${API_KEY}&Units=Metric;
Const Response = Await Fetch(Url);
If (!Response.Ok) {
Throw New Error(API Request Failed: ${Response.Status} ${Response.StatusText});
}
Const Data = Await Response.Json();
// Handle case where city is not found
If (Data.Cod !== 200) {
Throw New Error(Data.Message || Unknown Error);
}
// Display weather info
Console.Log(\NWeather For ${Data.Name}, ${Data.Sys.Country}:);
Console.Log(Temperature: ${Data.Main.Temp}°C);
Console.Log(Feels Like: ${Data.Main.Feels_like}°C);
Console.Log(Condition: ${Data.Weather[0].Description});
Console.Log(Humidity: ${Data.Main.Humidity}%);
Console.Log(Wind Speed: ${Data.Wind.Speed} M/S\N);
} Catch (Err) {
Console.Error(Error: ${Err.Message});
}
}
// ====== RUN SCRIPT ======
GetWeather(City);
Npm Init -Y
Npm Install Node-Fetch
Node Weather.Js New York
Weather For New York, US:
Temperature: 5°C
Feels Like: 2°C
Condition: Clear Sky
Humidity: 60%
Wind Speed: 3.6 M/S
<Subheading.Html>
Covid Strings Caching Results To Avoid Hitting The Api Too Often
How To Caching Results To Avoid Hitting The Api Too Often For Covid Strings Document Optimization
/**
 * API fetcher with in-memory caching to reduce API calls.
 * Works in Node.js and browsers.
 */
Const Fetch = (...Args) => Import(Node-Fetch).Then(({Default: Fetch }) => Fetch(...Args)); // For Node.js
Class APICache {
Constructor(TtlMs = 60000) { // Default TTL: 60 seconds
This.Ttl = TtlMs;
This.Cache = New Map();
}
/**
* Generates a unique cache key based on URL and options.
*/
_ GetCacheKey(Url, Options) {
Return ${Url}:${JSON.Stringify(Options || {})};
}
/**
 * * Fetch data with caching.
* @param {string} url - API endpoint
* @param {object} options - fetch options
*/
Async Fetch(Url, Options = {}) {
Const Key = This._ GetCacheKey(Url, Options);
Const Now = Date.Now();
// Check if cached and still valid
If (This.Cache.Has(Key)) {
Const {Expiry, Data } = This.Cache.Get(Key);
If (Now < Expiry) {
Console.Log(✅ Returning Cached Result For:, Url);
Return Data;
} Else {
This.Cache.Delete(Key); // Expired
}
}
Try {
Console.Log(🌐 Fetching From API:, Url);
Const Response = Await Fetch(Url, Options);
If (!Response.Ok) {
Throw New Error(API Request Failed With Status ${Response.Status});
}
Const Data = Await Response.Json();
// Store in cache
This.Cache.Set(Key, {
Data,
Expiry: Now + This.Ttl
});
Return Data;
} Catch (Error) {
Console.Error(❌ API Fetch Error:, Error.Message);
Throw Error;
}
}
/**
* Clears the entire cache.
*/
Clear() {
This.Cache.Clear();
}
}
// Example usage
(Async () => {
Const Api = New APICache(10000); // Cache for 10 seconds
Const Url = Https://Api.Coindesk.Com/V1/Bpi/Currentprice.Json;
Try {
Const FirstCall = Await Api.Fetch(Url);
Console.Log(First Call:, FirstCall.Bpi.USD.Rate);
// This will return cached data
Const SecondCall = Await Api.Fetch(Url);
Console.Log(Second Call:, SecondCall.Bpi.USD.Rate);
// Wait for cache to expire
SetTimeout(Async () => {
Const ThirdCall = Await Api.Fetch(Url);
Console.Log(Third Call (After Cache Expiry):, ThirdCall.Bpi.USD.Rate);
}, 11000);
} Catch (Err) {
Console.Error(Error:, Err.Message);
}
})();
<Subheading.Html>
Covid Strings Persistent Caching Version That Stores Results In Local Storage Or A File So The Cache Survives Restarts
How To Create Persistent Caching That Stores Results In Local Storage Or A File So The Cache Survives Restarts For Document Optimization In Covid Strings  
/**
 * PersistentCache
 * - In browsers: uses localStorage
 * - In Node.js: uses a JSON file
 */
(Function (Global) {
Const IsNode = Typeof Process !== Undefined &&
Process.Versions != Null &&
Process.Versions.Node != Null;
Class PersistentCache {
Constructor(Options = {}) {
This.Namespace = Options.Namespace || PersistentCache;
This.Ttl = Options.Ttl || 0; // Time-to-live in ms (0 = no expiry)
If (IsNode) {
Const Fs = Require(Fs);
Const Path = Require(Path);
This.Fs = Fs;
This.FilePath = Options.FilePath || Path.Join(__ Dirname, ${This.Namespace}.Json);
// Load existing cache from file
Try {
If (Fs.ExistsSync(This.FilePath)) {
Const Data = JSON.Parse(Fs.ReadFileSync(This.FilePath, Utf8));
This.Cache = Data;
} Else {
This.Cache = {};
}
} Catch (Err) {
Console.Error(Error Reading Cache File:, Err);
This.Cache = {};
}
} Else {
// Browser: load from localStorage
Try {
Const Data = LocalStorage.GetItem(This.Namespace);
This.Cache = Data ? JSON.Parse(Data) : {};
} Catch (Err) {
Console.Error(Error Reading LocalStorage:, Err);
This.Cache = {};
}
}
}
_ Save() {
If (IsNode) {
Try {
This.Fs.WriteFileSync(This.FilePath, JSON.Stringify(This.Cache, Null, 2), Utf8);
} Catch (Err) {
Console.Error(Error Writing Cache File:, Err);
}
} Else {
Try {
LocalStorage.SetItem(This.Namespace, JSON.Stringify(This.Cache));
} Catch (Err) {
Console.Error(Error Writing To LocalStorage:, Err);
}
}
}
Set(Key, Value) {
Const ExpiresAt = This.Ttl > 0 ? Date.Now() + This.Ttl : Null;
This.Cache[Key] = {Value, ExpiresAt };
This._ Save();
}
Get(Key) {
Const Entry = This.Cache[Key];
If (!Entry) Return Null;
If (Entry.ExpiresAt && Date.Now() > Entry.ExpiresAt) {
// Expired
Delete This.Cache[Key];
This._ Save();
Return Null;
}
Return Entry.Value;
}
Delete(Key) {
If (Key In This.Cache) {
Delete This.Cache[Key];
This._ Save();
}
}
Clear() {
This.Cache = {};
This._ Save();
}
}
// Export for Node.js or attach to window in browser
If (IsNode) {
Module.Exports = PersistentCache;
} Else {
Global.PersistentCache = PersistentCache;
}
})(Typeof Window !== Undefined ? Window : Global);
Usage Example
In Browser
Html
<Script Src=PersistentCache.Js><Script>
<Script>
Const Cache = New PersistentCache({Namespace: MyAppCache, Ttl: 60000 }); // 1 min TTL
Cache.Set(Greeting, Hello World);
Console.Log(Cache.Get(Greeting)); // "Hello World"
<Script>
In Node.Js
Const PersistentCache = Require(./PersistentCache);
Const Cache = New PersistentCache({Namespace: MyAppCache, Ttl: 60000 });
Cache.Set(Greeting, Hello From Node);
Console.Log(Cache.Get(Greeting)); // "Hello from Node"
<Header.Html>
Tests
Tests Required To Ensure The Build Works
I Have Used Node.Js To Test The Covid Strings 1 Build
<Subheading.Html>
Covid Strings Tests To Ensure The Build Works
How To Create Tests To Ensure The Covid Strings Build Works  
Project/
│── Src/
│    └── Math.Js
│── Tests/
│    └── Math.Test.Js
│── Package.Json
2️⃣ Source Code (Src/Math.Js)
// Simple math utility
Function Add(A, B) {
If (Typeof A !== Number || Typeof B !== Number) {
Throw New TypeError(Both Arguments Must Be Numbers);
}
Return A + B;
}
Module.Exports = {Add };
3️⃣ Test Code (Tests/Math.Test.Js)
// Import the function to test
Const {Add } = Require(../Src/Math);
Describe(Build Verification Tests, () => {
Test(Adds Two Positive Numbers, () => {
Expect(Add(2, 3)).ToBe(5);
});
Test(Adds Negative Numbers, () => {
Expect(Add(-2, -3)).ToBe(-5);
});
Test(Throws Error For Invalid Inputs, () => {
Expect(() => Add(2, X)).ToThrow(TypeError);
});
});
4️⃣ Package.Json (Minimal Setup)
Json
{
Name: Build-Verification,
Version: 1.0.0,
Scripts: {
Test: Jest,
Build: Echo Simulating Build Step...
},
DevDependencies: {
Jest: ^29.7.0
}
}
5️⃣ Install & Run
Bash
# Install Jest
Npm Install --Save-Dev Jest
# Run Build (Replace With Your Actual Build Command)
Npm Run Build
# Run Tests
Npm Test
<Subheading.Html>
Covid Strings Production Ready Express Server For A Vite Build
How To Create A Production Ready Express Server For A Covid Strings Vite Build
Npm Run Build
This Generates A Dist/Folder Containing Your Optimized Static Files.
2. Production Express Server (Server.Js)
// server.js
Import Express From Express;
Import Path From Path;
Import {FileURLToPath } From Url;
Import Compression From Compression;
Import Helmet From Helmet;
Const __ Filename = FileURLToPath(Import.Meta.Url);
Const __ Dirname = Path.Dirname(__ Filename);
Const App = Express();
Const PORT = Process.Env.PORT || 3000;
// Security middleware
App.Use(Helmet());
// Gzip compression for faster load times
App.Use(Compression());
// Serve static files from Vite's build output
Const DistPath = Path.Join(__ Dirname, Dist);
App.Use(Express.Static(DistPath, {
MaxAge: 1Y, // Cache static assets for 1 year
Etag: True
}));
// Fallback to index.html for SPA routes
App.Get(*, (Req, Res) => {
Res.SendFile(Path.Join(DistPath, Index.Html));
});
// Error handling middleware
App.Use((Err, Req, Res, Next) => {
Console.Error(Server Error:, Err);
Res.Status(500).Json({Error: Internal Server Error});
});
App.Listen(PORT, () => {
Console.Log(✅ Server Running In Production On Http://Localhost:${PORT});
});
3. Package.Json Scripts
Json
{
Scripts: {
Dev: Vite,
Build: Vite Build,
Serve: Node Server.Js
},
Type: Module,
Dependencies: {
Compression: ^1.7.4,
Express: ^4.18.2,
Helmet: ^7.0.0
}
}
<Subheading.Html>
Covid Strings Dockerfile Deployment With One Command
How To Deploy A Dockerfile With One Command Using Node Js For Covid Strings 
#!/Usr/Bin/Env Node
/**
 * Deploy a Dockerfile with one command using Node.js
 * Usage: node deploy-docker.js <imageName> [portMapping]
 * Example: node deploy-docker.js myapp 3000:3000
 */
Const {ExecSync } = Require(Child_Process);
Const Fs = Require(Fs);
Function RunCommand(Command) {
Try {
Console.Log(\N> ${Command});
Const Output = ExecSync(Command, {Stdio: Inherit});
Return Output;
} Catch (Err) {
Console.Error(\N❌ Error Executing: ${Command});
Process.Exit(1);
}
}
// Validate arguments
If (Process.Argv.Length < 3) {
Console.Error(Usage: Node Deploy-Docker.Js <ImageName> [PortMapping]);
Process.Exit(1);
}
Const ImageName = Process.Argv[2];
Const PortMapping = Process.Argv[3] || Null;
// Check if Dockerfile exists
If (!Fs.ExistsSync(Dockerfile)) {
Console.Error(❌ No Dockerfile Found In The Current Directory.);
Process.Exit(1);
}
// Check if Docker is installed
Try {
ExecSync(Docker --Version, {Stdio: Ignore});
} Catch {
Console.Error(❌ Docker Is Not Installed Or Not In PATH.);
Process.Exit(1);
}
// Build Docker image
Console.Log(\N🚀 Building Docker Image: ${ImageName});
RunCommand(Docker Build -T ${ImageName} .);
// Run Docker container
Console.Log(\N🏃 Running Docker Container From Image: ${ImageName});
Let RunCmd = Docker Run -D ${PortMapping ? -P ${PortMapping} : } --Name ${ImageName}-Container ${ImageName};
RunCommand(RunCmd);
Console.Log(\N✅ Deployment Complete!);
Console.Log(Image: ${ImageName});
Console.Log(Container Name: ${ImageName}-Container);
If (PortMapping) Console.Log(   Port Mapping: ${PortMapping});
How To Use
Save The Script As Deploy-Docker.Js In The Same Folder As Your Dockerfile.
Make It Executable (Optional For Linux/Mac):
Bash
Chmod +X Deploy-Docker.Js
Run:
Bash
Node Deploy-Docker.Js Myapp 3000:3000
Myapp → Docker Image Name.
3000:3000 → Maps Host Port 3000 To Container Port 3000 (Optional).
Example Output
🚀 Building Docker Image: Myapp
> Docker Build -T Myapp .
🏃 Running Docker Container From Image: Myapp
> Docker Run -D -P 3000:3000 --Name Myapp-Container Myapp
✅ Deployment Complete!
Image: Myapp
Container Name: Myapp-Container
Port Mapping: 3000:3000
<Subheading.Html>
Covid Strings Adding Docker Hub Push Support To Make It Truly Deployable Anywhere
How To Add Docker Hub Push Support To Make It Truly Deployable Anywhere For Covid Strings 
// index.js
Const Http = Require(Http);
Const PORT = Process.Env.PORT || 3000;
Const Server=Http.CreateServer((Req, Res) => {
Res.WriteHead(200, {Content-Type: Text/Plain });
Res.End(Hello From Dockerized Node.Js App!\N);
});
Server.Listen(PORT, () => {
Console.Log(Server Running On Port ${PORT});
});
2️⃣ Dockerfile
Dockerfile
# Use Official Node.Js LTS Image
FROM Node:18-Alpine
# Create App Directory
WORKDIR /Usr/Src/App
# Copy Package Files First (For Caching)
COPY Package*.Json ./
# Install Dependencies
RUN Npm Install --Only=Production
# Copy The Rest Of The App
COPY . .
# Expose Port
EXPOSE 3000
# Start The App
CMD [Node, Index.Js]
3️⃣ GitHub Actions Workflow (.Github/Workflows/Docker-Publish.Yml)
Yaml
Name: Build And Push Docker Image
On:
Push:
Branches:
- Main  # Trigger On Pushes To Main Branch
Jobs:
Docker:
Runs-On: Ubuntu-Latest
Steps:
# Checkout Repository
- Name: Checkout Code
Uses: Actions/Checkout@V4
# Log In To Docker Hub
- Name: Log In To Docker Hub
Uses: Docker/Login-Action@V3
With:
Username: ${{Secrets.DOCKERHUB_USERNAME }}
Password: ${{Secrets.DOCKERHUB_TOKEN }}
# Build And Push Docker Image
- Name: Build And Push
Uses: Docker/Build-Push-Action@v5
With:
Context: .
Push: True
Tags: ${{Secrets.DOCKERHUB_USERNAME }}/My-Node-App:Latest
Docker Run -P 3000:3000 Your-Dockerhub-Username/My-Node-App:Latest
<Subheading.Html>
Covid Strings Multi-Arch Node Installation
How To Install A Multiarch Node For Covid Strings
// server.js
Const Http = Require(Http);
Const PORT = Process.Env.PORT || 3000;
Const Server = Http.CreateServer((Req, Res) => {
Res.WriteHead(200, {Content-Type: Text/Plain});
Res.End(Hello From Multi-Arch Node.Js! Running On ${Process.Arch}\N);
});
Server.Listen(PORT, () => {
Console.Log(Server Running On Port ${PORT});
});
2️⃣ Package.Json
Json
{
Name: Multi-Arch-Node,
Version: 1.0.0,
Main: Server.Js,
Scripts: {
Start: Node Server.Js
}
}
3️⃣ Multi-Arch Dockerfile
Dockerfile
# Use Official Node.Js Image (Works On ARM & X86)
FROM Node:18-Alpine
# Set Working Directory
WORKDIR/App
# Copy Package Files And Install Dependencies
COPY Package*.Json ./
RUN Npm Install --Only=Production
# Copy App Source
COPY . .
# Expose Port
EXPOSE 3000
# Start The App
CMD [Npm, Start]
4️⃣ Build & Push Multi-Arch Image
Run These Commands Once To Enable Multi-Arch Builds:
Bash
# Enable Experimental Buildx
Docker Buildx Create --Use
# Build And Push For ARM64 (Raspberry Pi) And AMD64 (X86 Servers)
Docker Buildx Build \
--Platform Linux/Amd64,Linux/Arm64 \
-T Your-Dockerhub-Username/Multi-Arch-Node:Latest \
--Push .
5️⃣ Run Anywhere
On X86 Server:
Bash
Docker Run -P 3000:3000 Your-Dockerhub-Username/Multi-Arch-Node
On Raspberry Pi (ARM):
Bash
Docker Run -P 3000:3000 Your-Dockerhub-Username/Multi-Arch-Node
<Subheading.Html>
Covid Strings Github Actions Ci/Cd Workflow So Every Push Automatically Builds And Publishes Your Image
How To Use A Github Actions Ci/Cd Workflow So Every Push Automatically Builds And Publishes Your Image For Covid Strings 
Name: CI/CD - Build & Push Multi-Arch Docker Image
On:
Push:
Branches:
-** # Runs On Every Branch Push
Jobs:
Build-And-Push:
Runs-On: Ubuntu-Latest
Steps:
# 1. Checkout Repository
- Name: Checkout Source Code
Uses: Actions/Checkout@V4
# 2. Set Up QEMU For Multi-Arch Builds
- Name: Set Up QEMU
Uses: Docker/Setup-Qemu-Action@V3
# 3. Set Up Docker Buildx
- Name: Set Up Docker Buildx
Uses: Docker/Setup-Buildx-Action@V3
# 4. Log In To Docker Hub (Use GitHub Secrets)
- Name: Log In To Docker Hub
Uses: Docker/Login-Action@V3
With:
Username: ${{Secrets.DOCKER_USERNAME }}
Password: ${{Secrets.DOCKER_PASSWORD }}
# 5. Build And Push Multi-Arch Image
- Name: Build And Push Docker Image
Uses: Docker/Build-Push-Action@V5
With:
Context: .
File: ./Dockerfile
Push: True
Platforms: Linux/Amd64,Linux/Arm64
Tags: |
Your-Dockerhub-Username/Your-Image-Name:Latest
Your-Dockerhub-Username/Your-Image-Name:${{Github.Sha }}
Cache-From: Type=Registry,Ref=Your-Dockerhub-Username/Your-Image-Name:Buildcache
Cache-To: Type=Registry,Ref=Your-Dockerhub-Username/Your-Image-Name:Buildcache,Mode=Max
Dockerfile Example (For A Node.Js App)
Dockerfile
# Use Official Node.Js LTS Image
FROM Node:20-Alpine
# Set Working Directory
WORKDIR/App
# Copy Package Files And Install Dependencies
COPY Package*.Json ./
RUN Npm Ci --Only=Production
# Copy Application Source
COPY . .
# Expose Port And Start App
EXPOSE 3000
CMD [Npm, Start]
<Subheading.Html>
Covid Strings Automated Tests Before The Docker Build For Document Optimization
How To Automate Tests Before The Docker Build For Covid Strings Document Optimization 
{
Name: Doc-Optimizer,
Version: 1.0.0,
Type: Module,
Scripts: {
Test: Jest --RunInBand,
Optimize: Node Optimize.Js
},
DevDependencies: {
Jest: ^29.7.0,
Html-Minifier-Terser: ^7.2.0
}
}
Optimize.Js – Document Optimization Script
Import {Minify } From Html-Minifier-Terser;
Import Fs From Fs/Promises;
Import Path From Path;
Const InputFile = Path.Resolve(Document.Html);
Const OutputFile = Path.Resolve(Document.Min.Html);
Async Function OptimizeDocument() {
Try {
Const Html = Await Fs.ReadFile(InputFile, Utf8);
Const Minified = Await Minify(Html, {
CollapseWhitespace: True,
RemoveComments: True,
MinifyCSS: True,
MinifyJS: True
});
Await Fs.WriteFile(OutputFile, Minified, Utf8);
Console.Log(✅ Document Optimized: ${OutputFile});
} Catch (Err) {
Console.Error(❌ Optimization Failed:, Err.Message);
Process.Exit(1);
}
}
If (Import.Meta.Url === File://${Process.Argv[1]}) {
OptimizeDocument();
}
Export Default OptimizeDocument;
Optimize.Test.Js – Automated Tests
Import Fs From Fs/Promises;
Import Path From Path;
Import OptimizeDocument From ./Optimize.Js;
Const InputFile = Path.Resolve(Document.Html);
Const OutputFile = Path.Resolve(Document.Min.Html);
BeforeAll(Async () => {
// Create a sample HTML file for testing
Const SampleHTML = 
<!DOCTYPE Html>
<Html>
<Head>
<Title> Test </Title>
<Style> Body {Color: Red; } </Style>
</Head>
<Body>
<!-- Comment -->
<H1> Hello World </H1>
<Script> Console.Log(Test); <Script>
</Body>
</Html>
;
Await Fs.WriteFile(InputFile, SampleHTML, Utf8);
});
AfterAll(Async () => {
// Cleanup
Await Fs.Rm(InputFile, {Force: True });
Await Fs.Rm(OutputFile, {Force: True });
});
Test(Optimized Document Is Smaller And Has No Comments, Async () => {
Await OptimizeDocument();
Const Original = Await Fs.ReadFile(InputFile, Utf8);
Const Optimized = Await Fs.ReadFile(OutputFile, Utf8);
Expect(Optimized.Length).ToBeLessThan(Original.Length);
Expect(Optimized).Not.ToMatch(/<!--.*-->/);
});
Test(Optimized Document Still Contains Essential Content, Async () => {
Const Optimized = Await Fs.ReadFile(OutputFile, Utf8);
Expect(Optimized).ToMatch(/Hello World/);
});
# Stage 1: Run Tests Before Build
FROM Node:20 AS Tester
WORKDIR /App
COPY Package*.Json ./
RUN Npm Install
COPY . .
RUN Npm Test  # Fail Build If Tests Fail
# Stage 2: Build Final Image
FROM Node:20 AS Final
WORKDIR /App
COPY Package*.Json ./
RUN Npm Install --Omit=Dev
COPY . .
CMD [Node, Optimize.Js]
3️⃣ How It Works
Local Run
Bash
Npm Install
Npm Test
Npm Run Optimize
Docker Build With Tests
Bash
Docker Build -T Doc-Optimizer 
Added Documentation
/**
 * Script to automatically add or update documentation in a Pull Request.
 * 
 * Requirements:
 * 1. Node.js 16+
 * 2. Install dependencies: npm install @octokit/rest
 * 3. Set environment variables:
 *    - GITHUB_TOKEN: Personal Access Token or GitHub Actions token
 *    - REPO_OWNER: Repository owner/org
 *    - REPO_NAME: Repository name
 *    - PR_NUMBER: Pull Request number
 */
Const { Octokit } =Require(@Octokit/Rest);
Const Fs = Require(Fs);
Const Path = Require(Path);
(Async () => {
Try {
// Validate environment variables
Const { GITHUB_TOKEN, REPO_OWNER, REPO_NAME, PR_NUMBER } = Process.Env;
If (!GITHUB_TOKEN || !REPO_OWNER || !REPO_NAME || !PR_NUMBER) {
Throw New Error(Missing Required Environment Variables.);
}
Const Octokit = New Octokit({Auth: GITHUB_TOKEN });
// Get PR details to find the branch
Const {Data: Pr } = Await Octokit.Pulls.Get({
Owner: REPO_OWNER,
Repo: REPO_NAME,
Pull_number: ParseInt(PR_NUMBER, 10),
});
Const BranchName =Pr.Head.Ref;
// Path to documentation file
Const DocFilePath = Path.Join(__ Dirname, DOCS.Md);
// Create or update documentation content
Const NewDocContent = # Documentation Update\N\NUpdated On: ${New Date().ToISOString()}\N\N- Added Details For New Features.\N- Updated API Usage Examples.\N;
Fs.WriteFileSync(DocFilePath, NewDocContent, Utf8);
// Read file content for commit
Const ContentBase64 = Buffer.From(NewDocContent).ToString(Base64);
// Check if DOCS.md exists in repo
Let Sha;
Try {
Const {Data: FileData } =Await Octokit.Repos.GetContent({
Owner: REPO_OWNER,
Repo: REPO_NAME,
Path: DOCS.Md,
Ref: BranchName,
});
Sha = FileData.Sha; // Existing file SHA for update
}Catch {
Sha = Undefined; // File doesn't exist, will create
}
// Commit the documentation update to the PR branch
Await Octokit.Repos.CreateOrUpdateFileContents({
Owner: REPO_OWNER,
Repo: REPO_NAME,
Path: DOCS.Md,
Message: Docs: Update Documentation For Pr,
Content: ContentBase64,
Branch: BranchName,
Sha, // undefined if creating new file
});
Console.Log(✅ Documentation Updated In Branch: ${BranchName});
} Catch (Error) {
Console.Error(❌ Error Updating Documentation:, Error.Message);
Process.Exit(1);
}
})();
Usage
Bash
Export GITHUB_TOKEN=Your_token_here
Export REPO_OWNER=Your_username_or_org
Export REPO_NAME=Your_repo
Export PR_NUMBER=42
Node Update-Docs-In-Pr.Js
<Subheading.Html>
Covid Strings Template Github Actions Yaml That’s Both Functional And Self Documenting For Your Specific Tech Stack
How To Create A Template Github Actions Yaml That’s Both Functional And Self Documenting For Covid Strings
Name: CI Pipeline (JavaScript/Node.Js)
# Trigger Workflow On Pushes To Main And All Pull Requests
On:
Push:
Branches: [Main]
Pull_request:
Branches: [ Main]
# Define Environment Variables For All Jobs
Env:
NODE_VERSION: 20 # LTS Version Of Node.Js
Jobs:
Build-And-Test:
Name: Build, Lint, And Test
Runs-On: Ubuntu-Latest
Steps:
# 1️⃣ Check Out The Repository Code
- Name: Checkout Repository
Uses: Actions/Checkout@V4
# 2️⃣ Set Up Node.Js With Caching For Npm Dependencies
- Name: Set Up Node.Js ${{Env.NODE_VERSION }}
Uses: Actions/Setup-Node@V4
With:
Node-Version: ${{Env.NODE_VERSION }}
Cache: Npm # Speeds Up Installs By Caching Node_modules
# 3️⃣ Install Dependencies (With Clean Install For Reproducibility)
- Name: Install Dependencies
Run: Npm Ci
# 4️⃣ Run Linting To Enforce Code Style And Catch Errors Early
- Name: Run ESLint
Run: Npm Run Lint
Continue-On-Error: False # Fail The Build If Linting Fails
# 5️⃣ Run Tests With Coverage
- Name: Run Tests
Run: Npm Test -- --Coverage
# 6️⃣ Build The Project (If Applicable)
- Name: Build Project
Run: Npm Run Build
# 7️⃣ Upload Test Coverage Report As An Artifact
- Name: Upload Coverage Report
Uses: Actions/Upload-Artifact@V4
With:
Name: Coverage-Report
Path: Coverage/
How To Use
Create The File:
Save This As.Github/Workflows/Ci.Yml In Your Repository.
Ensure Scripts Exist In Your Package.Json:
Json
{
Scripts: {
Lint: Eslint .,
Test: Jest,
Build: Webpack --Mode Production
}
}
<Subheading.Html>
Covid Strings Multi-Version Ci Template 
How To Create A Multi-Version Ci Template For Covid Strings 
Name: Node.Js Multi-Version CI
On:
Push:
Branches: [Main ]
Pull_request:
Branches: [Main ]
Jobs:
Build-And-Test:
Runs-On: Ubuntu-Latest
# Test Against Multiple Node.Js Versions
Strategy:
Matrix:
Node-Version: [16.x, 18.x, 20.x]
Fail-Fast: False
Steps:
 # Step 1: Checkout Repository
- Name: Checkout Code
Uses: Actions/Checkout@V4
# Step 2: Use The Node.Js Version From The Matrix
- Name: Setup Node.Js ${{Matrix.Node-Version }}
Uses: Actions/Setup-Node@V4
With:
Node-Version: ${{Matrix.Node-Version }}
Cache: Npm
# Step 3: Install Dependencies
- Name: Install Dependencies
Run: Npm Ci
# Step 4: Run Linting
- Name: Run ESLint
Run: Npm Run Lint --If-Present
# Step 5: Run Tests
- Name: Run Tests
Run: Npm Test
# Step 6: Build Project (If Applicable)
- Name: Build Project 1
Run: Npm Run Build --If-Present
How It Works
Matrix Strategy
Runs The Workflow For Node.Js 16, 18, And 20 In Parallel.
Caching
Uses Actions/Setup-Node With Cache: Npm To Speed Up Installs.
Lint, Test, Build
Runs Npm Run Lint If Defined In Package.Json.
Runs Npm Test For Your Test Suite.
Runs Npm Run Build If Applicable.
Fail-Fast Disabled
Ensures All Node.Js Versions Run Even If One Fails.
Example Package.Json Scripts
Json
{
Scripts: {
Lint: Eslint .,
Test: Jest --Coverage,
Build: Webpack --Mode Production
}
}
//I do try and keep the code coverage percent at 80 percent  
<Header.Html>
Covid Strings Owners Suggestions
Suggestions From The Covid Strings Repository Owner 
#!/Usr/Bin/Env Node
/** for game itself extend the audio in the background code to the game itself 
 * Pull Request Owner Suggestions Generator
 * ----------------------------------------
 * This script analyzes a PR object and outputs suggestions for improvement.
 * Can be integrated into CI/CD or run locally.
 */
Const Fs = Require(Fs);
/**
 * Generate suggestions for a pull request
 * @param {Object} pr - Pull request data
 * @param {string} pr.title - PR title
 * @param {string} pr.description - PR description
 * @param {string[]} pr.changedFiles - List of changed file paths
 * @param {string} pr.author - PR author username
 * @returns {string[]} - List of suggestions
 */
Function GenerateSuggestions(Pr) {
Const Suggestions = [];
// Validate PR object
If (!Pr || Typeof Pr !== Object) {
Throw New Error(Invalid PR Data: Must Be An Object.);
}
// Title check
If (!Pr.Title || Pr.Title.Trim().Length < 5) {
Suggestions.Push(Use A Descriptive PR Title (At Least 5 Characters).);
}
// Description check
If (!Pr.Description || Pr.Description.Trim().Length < 15) {
Suggestions.Push(Add A Detailed PR Description Explaining The Changes And Reasoning.);
}
// File changes check
If (!Array.IsArray(Pr.ChangedFiles) || Pr.ChangedFiles.Length === 0) {
Suggestions.Push(No Files Changed — Verify That Commits Are Included.);
} Else {
// Check for missing tests
Const HasTestChanges = Pr.ChangedFiles.Some(File =>
File.ToLowerCase().Includes(Test)
);
If (!HasTestChanges) {
Suggestions.Push(Consider Adding Or Updating Tests For Your Changes.);
}
// Check for large PR
If (Pr.ChangedFiles.Length > 20) {
Suggestions.Push(This PR Changes Many Files — Consider Splitting Into Smaller PRs.);
}
}
// Author check
If (!Pr.Author) {
Suggestions.Push(PR Author Is Missing — Ensure Commit Attribution Is Correct.);
}
Return Suggestions.Length > 0
? Suggestions
: [Looks Good! No Major Suggestions.];
}
// Example usage
Try {
Const ExamplePR = {
Title: Fix Bug,
Description: Fixes An Issue.,
ChangedFiles: [Src/App.Js, Src/Utils/Helper.Js],
Author: DevUser123
};
Const Suggestions =GenerateSuggestions(ExamplePR);
Console.Log(=== Owner Suggestions ===);
Suggestions.ForEach((S, I) =>Console.Log(${I + 1}. ${S}));
// Optionally save to file
Fs.WriteFileSync(Pr_suggestions.Txt, Suggestions.Join(\N), Utf8);
Console.Log(\NSuggestions Saved To Pr_suggestions.Txt);
} Catch (Err) {
Console.Error(Error:, Err.Message);
}
<Subheading.Html>
Covid Strings Posting A Comment On A Github Pull Request As The Repository Owner 
How To Post A Comment On A Github Pull Request As The Covid Strings Repository Owner
/**
 * Post a comment on a GitHub Pull Request as the repository owner.
 * Requires: npm install @octokit/rest dotenv
 */
Const { Octokit } = Require(@Octokit/Rest);
Require(Dotenv).Config(); // For loading environment variables from .env
// Load environment variables
Const GITHUB_TOKEN = Process.Env.GITHUB_TOKEN; // Personal Access Token
Const OWNER = Process.Env.REPO_OWNER;          // e.g., "octocat"
Const REPO = Process.Env.REPO_NAME;            // e.g., "Hello-World"
Const PR_NUMBER = ParseInt(Process.Env.PR_NUMBER, 10); // e.g., 42
Const COMMENT_BODY = Process.Env.COMMENT_BODY || This Is An Automated Owner Suggestion.;
// Validate required inputs
If (!GITHUB_TOKEN || !OWNER || !REPO || !PR_NUMBER) {
Console.Error(❌ Missing Required Environment Variables. Please Set GITHUB_TOKEN, REPO_OWNER, REPO_NAME, And PR_NUMBER.);
Process.Exit(1);
}
// Initialize Octokit with authentication
Const Octokit = New Octokit({
Auth: GITHUB_TOKEN,
UserAgent: Github-Pr-Comment-Script V1.0,
TimeZone: UTC
});
(Async () => {
Try {
// Post the comment
Const Response = Await Octokit.Issues.CreateComment({
Owner: OWNER,
Repo: REPO,
Issue_number: PR_NUMBER, // PRs are treated as issues in GitHub API
Body: COMMENT_BODY
});
Console.Log(✅ Comment Posted Successfully: ${Response.Data.Html_url});
} Catch (Error) {
If (Error.Status === 404) {
Console.Error(❌ Pull Request Not Found Or Insufficient Permissions.);
} Else If (Error.Status === 401) {
Console.Error(❌ Authentication Failed. Check Your GITHUB_TOKEN.);
} Else {
Console.Error(❌ Error Posting Comment:, Error);
}
Process.Exit(1);
}
})();
Setup Instructions
Install Dependencies
Bash
Npm Init-Y
Npm Install @Octokit/Rest Dotenv
Create A .Env File In The Same Directory:
Env
GITHUB_TOKEN=Ghp_your_personal_access_token_here
REPO_OWNER=Your-Username-Or-Org
REPO_NAME=Your-Repo
PR_NUMBER=123
COMMENT_BODY=Hello! This Is My Owner Suggestion.
Your Personal Access Token Must Have At Least Repo Scope For Private Repos Or Public_repo For Public Repos.
Run The Script
Bash
Node Post-Pr-Comment.Js
Notes
Owner Suggestion: If You Want To Post A Code Suggestion Instead Of Plain Text, Format The Comment Body Like:
Markdown
Suggestion
// Your suggested code here
This Will Appear As A GitHub Suggestion Block In The PR Review.
<Subheading.Html>
Covid Strings Managing Permissions And Granting Write Access To Trusted Users Or Groups 
How To Manage Permissions And Grant Write Access To Only Trusted Users Or Groups For Covid Strings 
/**
 * Permission Management Example
 * Only grants write access to trusted users or groups
 */
// Example trusted users and groups
Const TrustedUsers = New Set([Alice, Bob, Charlie]);
Const TrustedGroups = New Set([Admins, Editors]);
// Example user database (in real apps, fetch from DB)
Const Users = [
{ Username: Alice, Groups: [Admins] },
{ Username: Bob, Groups: [Editors] },
{ Username: Eve, Groups: [Viewers] }
];
/**
 * Checks if a user has write access
 * @param {string} username - The username to check
 * @returns {boolean} - True if write access is granted
 */
Function CanWrite(Username) {
// Validate input
If (Typeof Username !== String || Username.Trim() === "") {
Throw New Error(Invalid Username);
}
// Find user in database
Const User = Users.Find(U => U.Username === Username);
If (!User) {
Return False; // User not found
}
// Check if user is in trusted users list
If (TrustedUsers.Has(User.Username)) {
Return True;
}
// Check if any of the user's groups are trusted
Return User.Groups.Some(Group => TrustedGroups.Has(Group));
}
/**
 * Example usage
 */
Try {
Const TestUsers = [Alice, Bob, Eve, Mallory];
TestUsers.ForEach(User => {
Console.Log(
${User}: ${CanWrite(User) ? ✅ Write Access : ❌ No Write Access}
);
});
} Catch (Err) {
Console.Error(Error:, Err.Message);
}
Alice: ✅ Write Access
Bob: ✅ Write Access
Eve: ❌ No Write Access
Mallory: ❌ No Write Access
<Subheading.Html>
Covid Strings Integrating With Express Js Middleware So That Write Access Is Automatically Enforced On API Routes 
How To Integrate With Express Js Middleware So Write Access Is Automatically Enforced On Api Routes For Covid Strings
// app.js
Const Express = Require(Express);
Const App = Express();
App.Use(Express.Json()); // Parse JSON bodies
/**
 * Mock authentication middleware
 * In a real app, replace this with JWT/session validation
 */
Function MockAuth(Req,Res,Next) {
// Simulate a logged-in user object
Req.User = {
Id: 1,
Username: John_doe,
Permissions: [Read, Write] // Change to ['read'] to test denial
};
Next();
}
/**
 * Middleware to enforce write access
 * Blocks POST, PUT, PATCH, DELETE if user lacks 'write' permission
 */
Function EnforceWriteAccess(Req,Res,Next) {
Try {
Const WriteMethods = [POST, PUT, PATCH, DELETE];
// Only enforce for write methods
If (WriteMethods.Includes(Req.Method)) {
If (!Req.User || !Req.User.Permissions.Includes(Write)) {
Return Res.Status(403).Json({
Error: Forbidden: Write Access Required
});
}
}
Next();
} Catch (Err) {
Console.Error(Error In EnforceWriteAccess Middleware:, Err);
Res.Status(500).Json({Error: Internal Server Error});
}
}
// Apply authentication first
App.Use(MockAuth);
// Apply write access enforcement globally
App.Use(EnforceWriteAccess);
// Example routes
App.Get(/Data, (Req,Res) => {
Res.Json({Message: Read Access Granted, User: Req.User });
});
App.Post(/Data, (Req,Res) => {
Res.Json({Message: Write Access Granted, Data: Req.Body });
});
App.Put(/Data/:Id, (Req,Res) => {
Res.Json({Message: Updated Item ${Req.Params.Id}, Data: Req.Body });
});
// Start server
Const PORT = Process.Env.PORT || 3000;
App.Listen(PORT, () => {
Console.Log(Server Running On Http://Localhost:${PORT});
# Read Request (Allowed)
Curl -X GET Http://Localhost:3000/Data
# Write Request (Allowed If User Has Write)
Curl -X POST Http://Localhost:3000/Data -H Content-Type: Application/Json -D {Name:Test}
# Write Request (Denied If User Lacks Write)
# Change Permissions In MockAuth To [Read] And Retry
<Subheading.Html>
Covid Strings Role Based Version Where Write Access Is Tied To Specific Roles (E.G., Admin, Editor) Instead Of Just A Write Permission Flag 
How To Create A Role Based Version Where Write Access Is Tied To Specific Roles (E.G., Admin, Editor) Instead Of Just A Write Permission Flag For Covid Strings 
/**
 * Role-Based Access Control (RBAC) Example
 * -----------------------------------------
 * This example ties write access to specific roles ("admin", "editor")
 * and read access to all authenticated users.
 */
Const Express = Require(Express);
Const App = Express();
App.Use(Express.Json());
// Example user database (in real apps, use a DB)
Const Users = [
{Id: 1, Name: Alice, Role: Admin},
{Id: 2, Name: Bob, Role: Editor},
{Id: 3, Name: Charlie, Role: Viewer}
];
// Middleware to simulate authentication
Function Authenticate(Req, Res, Next) {
Const UserId = ParseInt(Req.Header(X-User-Id), 10);
Const User = Users.Find(U => U.Id === UserId);
If (!User) {
Return Res.Status(401).Json({Error: Unauthorized: Invalid User});
}
Req.User = User;
Next();
}
// Middleware for role-based authorization
Function AuthorizeRoles(...AllowedRoles) {
Return (Req, Res, Next) => {
If (!Req.User || !AllowedRoles.Includes(Req.User.Role)) {
Return Res.Status(403).Json({Error: Forbidden: Insufficient Role});
}
Next();
};
}
// Public route (no auth)
App.Get(/, (Req, Res) => {
Res.Send(Welcome To The API);
});
// Read route (any authenticated user)
App.Get(/Data, Authenticate, (Req, Res) => {
Res.Json({Message: Hello ${Req.User.Name}, You Can Read This Data.});
});
// Write route (only admin or editor)
App.Post(/Data, Authenticate, AuthorizeRoles(Admin, Editor), (Req, Res) => {
Const {Content } = Req.Body;
If (!Content || Typeof Content !== String) {
Return Res.Status(400).Json({Error: Invalid Content});
}
Res.Json({Message: Data Written By ${Req.User.Name},Content });
});
// Start server
Const PORT = 3000;
App.Listen(PORT, () => {
Console.Log(Server Running On Http://Localhost:${PORT});
});
# Read As Viewer (OK)
Curl -H X-User-Id: 3 Http://Localhost:3000/Data
# Write As Viewer (Forbidden)
Curl -X POST -H X-User-Id: 3 -H Content-Type: Application/Json \
-D {Content:Test} Http://Localhost:3000/Data
# Write As Editor (OK)
Curl -X POST -H X-User-Id: 2 -H Content-Type: Application/Json \
-D {Content:Test} Http://Localhost:3000/Data
<Subheading.Html>
Covid Strings Pull Request To Extend The Audio In The Background Code To The Game Itself 
How To Create A Pull Request To Extend The Audio In The Background Code To The Game Itself For Covid Strings
// backgroundAudio.js
// Create and configure the audio element
Const BackgroundAudio = New Audio(Assets/Audio/Background.Mp3);
BackgroundAudio.Loop = True;
BackgroundAudio.Volume = 0.5; // Adjust volume as needed
// Function to start audio (must be triggered by user interaction due to browser policies)
Function StartBackgroundAudio() {
Try {
BackgroundAudio.Play().Catch(Err => {
Console.Warn(Autoplay Blocked. Waiting For User Interaction., Err);
});
} Catch (Error) {
Console.Error(Error Starting Background Audio:, Error);
}
}
// Function to stop audio
Function StopBackgroundAudio() {
Try {
BackgroundAudio.Pause();
BackgroundAudio.CurrentTime = 0;
} Catch (Error) {
Console.Error(Error Stopping Background Audio:, Error);
}
}
// Example: Start audio when game starts
Document.GetElementById(StartGameBtn).AddEventListener(Click, () => {
StartBackgroundAudio();
StartGame(); // Your existing game start function
});
// Example: Stop audio when game ends
Document.AddEventListener(GameOver, () => {
StopBackgroundAudio();
});
2. Node.js Script to Create a Pull Request
You can use the GitHub REST API With @Octokit/Rest To Automate PR Creation.
// createPullRequest.js
Const { Octokit } = Require(@Octokit/Rest);
Require(Dotenv).Config();
(Async () => {
Try {
Const Octokit = New Octokit({Auth: Process.Env.GITHUB_TOKEN });
Const Owner = Your-Username; // GitHub username or org
Const Repo = Your-Repo;      // Repository name
Const BranchName = Extend-Audio-Feature;
Const BaseBranch = Main;
// 1. Create a new branch from main
Const {Data: RefData } = Await Octokit.Git.GetRef({
Owner,
Repo,
Ref: Heads/${BaseBranch}
});
Await Octokit.Git.CreateRef({
Owner,
Repo,
Ref: Refs/Heads/${BranchName},
Sha: RefData.Object.Sha
});
// 2. Commit your updated backgroundAudio.js file
Const FilePath = Src/BackgroundAudio.Js;
Const FileContent = Require(Fs).ReadFileSync(FilePath, Utf8);
Const EncodedContent = Buffer.From(FileContent).ToString(Base64);
Await Octokit.Repos.CreateOrUpdateFileContents({
Owner,
Repo,
Path: FilePath,
Message: Extend Background Audio Into Gameplay,
Content: EncodedContent,
Branch: BranchName
});
// 3. Create the pull request
Const {Data: Pr } = Await Octokit.Pulls.Create({
Owner,
Repo,
Title: Extend Background Audio Into Gameplay,
Head: BranchName,
Base: BaseBranch,
Body: This PR Ensures Background Audio Continues During Gameplay And Loops Until The Game Ends.
});
Console.Log(✅ Pull Request Created: ${Pr.Html_url});
} Catch (Error) {
Console.Error(❌ Error Creating Pull Request:, Error);
}
})();
Setup:
Install Dependencies:
Bash
Npm Install @Octokit/Rest Dotenv
Create A .Env File:
GITHUB_TOKEN=Your_personal_access_token
(Token Must Have Repo Scope.)
Run:
Bash
Node CreatePullRequest.Js
<Subheading.Html>
Covid Strings Merge These Steps Into A Single Automated Script That Edits The Game File And Immediately Opens The PR In One Go 
How To Merge These Steps Into A Single Automated Script That Edits The Game File And Immediately Opens The PR In One Go 
/**
 * Automated script to:
 * 1. Edit a game file
 * 2. Commit & push changes to a new branch
 * 3. Open a Pull Request on GitHub
 *
 * Requirements:
 *   npm install simple-git @octokit/rest
 *   Set environment variables:
 *     GITHUB_TOKEN   - Personal Access Token with repo permissions
 *     GITHUB_OWNER   - Repository owner (username or org)
 *     GITHUB_REPO    - Repository name
 */
Const Fs = Require(Fs);
Const Path = Require(Path);
Const SimpleGit = Require(Simple-Git);
Const { Octokit } = Require(@Octokit/Rest);
(Async () => {
Try {
// --- CONFIG ---
Const GITHUB_TOKEN = Process.Env.GITHUB_TOKEN;
Const OWNER =Process.Env.GITHUB_OWNER;
Const REPO =Process.Env.GITHUB_REPO;
Const BASE_BRANCH = Main; // or "master"
Const NEW_BRANCH = Auto-Edit-${Date.Now()};
Const FILE_PATH = Path.Join(__ Dirname, Game.Json); // Example file
If (!GITHUB_TOKEN || !OWNER || !REPO) {
Throw New Error(Missing Required Environment Variables.);
}
// --- STEP 1: Edit the game file ---
If (!Fs.ExistsSync(FILE_PATH)) {
Throw New Error(File Not Found: ${FILE_PATH});
}
Let GameData = JSON.Parse(Fs.ReadFileSync(FILE_PATH, Utf8));
GameData.LastUpdated = New Date().ToISOString(); // Example change
Fs.WriteFileSync(FILE_PATH, JSON.Stringify(GameData, Null, 2));
Console.Log(✅ Edited ${FILE_PATH});
// --- STEP 2: Commit & push changes ---
Const Git = SimpleGit();
Await Git.Fetch();
Await Git.Checkout(BASE_BRANCH);
Await Git.Pull(Origin, BASE_BRANCH);
Await Git.CheckoutLocalBranch(NEW_BRANCH);
Await Git.Add(FILE_PATH);
Await Git.Commit(Auto-Update Game File At ${New Date().ToISOString()});
Await Git.Push(Origin, NEW_BRANCH);
Console.Log(✅ Changes Pushed To Branch: ${NEW_BRANCH});
// --- STEP 3: Open a Pull Request ---
Const Octokit = New Octokit({Auth: GITHUB_TOKEN });
Const Pr = Await Octokit.Pulls.Create({
Owner: OWNER,
Repo: REPO,
Title: Automated Game File Update,
Head: NEW_BRANCH,
Base: BASE_BRANCH,
Body: This PR Was Created Automatically By A Script.
});
Console.Log(✅ Pull Request Created: ${Pr.Data.Html_url});
} Catch (Err) {
Console.Error(❌ Error:, Err.Message);
Process.Exit(1);
}
})();
Setup Instructions
Install Dependencies:
Bash
Npm Install Simple-Git @Octokit/Rest
Set Environment Variables:
Bash
Export GITHUB_TOKEN=Your_personal_access_token
Export GITHUB_OWNER=Your_github_username
Export GITHUB_REPO=Your_Repo_Name
Run The Script:
Bash
Node Auto_pr.Js
<Subheading.Html>
Covid Strings Pull Request For Game Progress 
How To Create A Pull Request For Covid Strings Progress 
// gameProgress.js
/**
 * Game Progress Tracker
 * Stores and retrieves player progress using localStorage
 * Handles score, level, and achievements
 */
// Validate localStorage availability
Function IsStorageAvailable() {
Try {
Const TestKey = __ Test__;
LocalStorage.SetItem(TestKey, 1);
LocalStorage.RemoveItem(TestKey);
Return True;
} Catch (E) {
Console.Error(Local Storage Is Not Available:, E);
Return False;
}
}
Class GameProgress {
Constructor() {
This.Progress = {
Score: 0,
Level: 1,
Achievements: []
};
This.LoadProgress();
}
// Increase score
AddScore(Points) {
If (Typeof Points !== Number || Points <= 0) {
Console.Warn(Invalid Score Increment);
Return;
}
This.Progress.Score +=Points;
This.SaveProgress();
}
// Advance to next level
NextLevel() {
This.Progress.Level += 1;
This.SaveProgress();
}
// Add achievement
AddAchievement(Name) {
If (!Name || Typeof Name !== String) {
Console.Warn(Invalid Achievement Name);
Return;
}
If (!This.Progress.Achievements.Includes(Name)) {
This.Progress.Achievements.Push(Name);
This.SaveProgress();
}
}
// Save to localStorage
SaveProgress() {
If (IsStorageAvailable()) {
LocalStorage.SetItem(GameProgress, JSON.Stringify(This.Progress));
}
}
// Load from localStorage
LoadProgress() {
If (IsStorageAvailable()) {
Const Saved = LocalStorage.GetItem(GameProgress);
If (Saved) {
Try {
This.Progress = JSON.Parse(Saved);
} Catch (E) {
Console.Error(Error Parsing Saved Progress:, E);
}
}
}
}
// Reset progress
ResetProgress() {
This.Progress = {Score: 0, Level: 1, Achievements: [] };
This.SaveProgress();
}
}
// Example usage
Const Player = New GameProgress();
Player.AddScore(50);
Player.NextLevel();
Player.AddAchievement(First Win);
Console.Log(Current Progress:, Player.Progress);
2️⃣ How To Commit & Create A Pull Request
Step-By-Step:
Bash
# 1. Clone The Repository
Git Clone Https://Github.Com/Username/Game-Project.Git
Cd Game-Project
# 2. Create A New Branch For Your Feature
Git Checkout -B Feature/Game-Progress
# 3. Add Your New File
Cp /Path/To/GameProgress.Js./Src/GameProgress.Js
Git Add Src/GameProgress.Js
# 4. Commit Your Changes
Git Commit -M Add Game Progress Tracking System
# 5. Push Your Branch To GitHub
Git Push Origin Feature/Game-Progress
<Subheading.Html>
Covid Strings Github Actions Workflow So That Your Pull Request Automatically Runs Tests For The Game Progress Code Before Merging
How To Create A GitHub Actions Workflow So That Your Pull Request Automatically Runs Tests For The Game Progress Code Before Merging
Name: Run Game Progress Tests
# Trigger Workflow On Pull Requests Targeting The Main Branch
On:
Pull_request:
Branches:
- Main
Types: [Opened, Synchronize, Reopened]
Jobs:
Test:
Name: Run JavaScript Tests
Runs-On: Ubuntu-Latest
Steps:
# Step 1: Check Out The Repository Code
- Name: Checkout Repository
Uses: Actions/Checkout@V4
# Step 2: Set Up Node.Js (Adjust Version If Needed)
- Name: Set Up Node.Js
Uses: Actions/Setup-Node@V4
With:
Node-Version: 18
Cache: Npm
# Step 3: Install Dependencies
- Name: Install Dependencies
Run: Npm Ci
# Step 4: Run Tests
- Name: Run Tests
Run: Npm Test
Json
Scripts: {
Test: Jest
}
<Subheading.Html>
Covid Strings Es Lint Checks For Javascript Code Before Merging
How To Use ES Lint Checks For Covid Strings Javascript Code Before Merging
Npm Install --Save-Dev Eslint Husky Lint-Staged
2️⃣ Initialize ESLint
Bash
Copy Code
Npx Eslint --Init
Choose:
JavaScript Modules (Import/Export) Or CommonJS Depending On Your Game Code.
Framework: None (Or React/Vue If Applicable).
Style Guide: Airbnb / Standard / Google Or Custom.
Format: JSON Or JavaScript Config.
This Will Create.Eslintrc.Json (Or.Eslintrc.Js).
Example.Eslintrc.Json:
Json
{
Env: {
Browser: True,
Es2021: True
},
Extends: [Eslint:Recommended],
ParserOptions: {
EcmaVersion: Latest,
SourceType: Module
},
Rules: {
No-Unused-Vars: Warn,
No-Console: Off,
Eqeqeq: Error
}
}
3️⃣ Configure Package.Json For Linting Hooks
Add This To Your Package.Json:
Json
{
Scripts: {
Lint: Eslint . --Ext .Js,.Jsx,.Mjs,.Cjs
},
Lint-Staged: {
*.Js: Eslint--Fix
}
}
4️⃣ Set Up Husky Hooks
Enable Husky:
Bash
Npx Husky Install
Add A Pre-Commit Hook:
Bash
Npx Husky Add .Husky/Pre-Commit Npx Lint-Staged
Add A Pre-Push Hook (Optional, To Block Pushes If Lint Fails):
Bash
Npx Husky Add.Husky/Pre-Push Npm Run Lint
6️⃣ Example Run
Bash
Git Add Src/Game.Js
Git Commit -M Add New Game Logic
# Husky Runs ESLint → Fixes Issues → Commit Proceeds If No Errors Remain
<Subheading.Html>
Covid Strings Installing A Github Actions Workflow So ES Lint Runs Automatically On Pull Requests Before Merging
How To Install A Github Actions Workflow So ES Lint Runs Automatically On Pull Requests Before Merging For Covid Strings
Npm Install --Save-Dev Eslint
.Github/Workflows/Eslint.Yml
Eslint.Yml
Yaml
Name: ESLint Check
On:
Pull_request:
Branches:
- Main
- Master
Jobs:
Lint:
Name: Run ESLint
Runs-On: Ubuntu-Latest
Steps:
# Step 1: Checkout The Repository Code
- Name: Checkout Code
Uses: Actions/Checkout@V4
# Step 2: Set Up Node.Js
- Name: Set Up Node.Js
Uses: Actions/Setup-Node@V4
With:
Node-Version: 20 # Use Your Projects Node.Js Version
# Step 3: Install Dependencies
- Name: Install Dependencies
Run: Npm Ci
# Step 4: Run ESLint
- Name: Run ESLint
Run: Npx Eslint . --Ext .Js,.Jsx,.Ts,.Tsx
<Subheading.Html>
Covid Strings Post Deployment Tasks
How To Create Post Deployment Tasks For Covid Strings
/**
 * Post-deployment task runner triggered by pull request merges.
 * Works with GitHub, Azure DevOps, or Bitbucket webhooks.
 */
Const Express = Require(Express);
Const Crypto = Require(Crypto);
Const {Exec } = Require(Child_process);
Const App = Express();
Const PORT = Process.Env.PORT || 3000;
// Replace with your webhook secret (set in GitHub/Azure DevOps)
Const WEBHOOK_SECRET =Process.Env.WEBHOOK_SECRET || Mysecret;
// Middleware to parse JSON
App.Use(Express.Json({Verify: VerifySignature }));
/**
 * Verify webhook signature for security
 */
Function VerifySignature(Req,Res,Buf) {
Const Signature =Req.Headers[X-Hub-Signature-256] || Req.Headers[X-Hub-Signature];
If (!Signature) Return;
Const Hmac = Crypto.CreateHmac(Sha256, WEBHOOK_SECRET);
Hmac.Update(Buf);
Const Digest = Sha256=${Hmac.Digest(Hex)};
If (Signature !== Digest) {
Throw New Error(Invalid Webhook Signature);
}
}
/**
 * Webhook endpoint
 */
App.Post(/Webhook, (Req, Res) => {
Try {
Const Event = Req.Headers[X-Github-Event] || Req.Headers[X-Event-Key] || Req.Headers[X-Ms-Event-Type];
// Example: GitHub pull request merged
If (Event === Pull_request && Req.Body.Action === Closed && Req.Body.Pull_request.Merged) {
Console.Log(Pull Request #${Req.Body.Pull_request.Number} Merged. Running Post-Deployment Tasks...);
RunPostDeploymentTasks();
}
// Example: Azure DevOps PR merged
If (Event === Git.Pullrequest.Merged) {
Console.Log(Azure DevOps PR Merged. Running Post-Deployment Tasks...);
RunPostDeploymentTasks();
}
Res.Status(200).Send(Webhook Received);
} Catch (Err) {
Console.Error(Error Processing Webhook:, Err.Message);
Res.Status(400).Send(Invalid Request);
}
});
/**
 * Post-deployment tasks
 */
Function RunPostDeploymentTasks() {
// Example: Clear cache
Console.Log(Clearing Cache...);
Exec(Npm Run Clear-Cache, (Err, Stdout, Stderr) => {
If (Err) {
Console.Error(Cache Clear Failed:, Stderr);
Return;
}
Console.Log(Stdout);
// Example: Run database migrations
Console.Log(Running Database Migrations...);
Exec(Npm Run Migrate, (Err2, Stdout2, Stderr2) => {
If (Err2) {
Console.Error(Migration Failed:, Stderr2);
Return;
}
Console.Log(Stdout2);
// Example: Send notification
Console.Log(Post-Deployment Tasks Completed Successfully.);
});
});
}
App.Listen(PORT, () => {
Console.Log(Post-Deployment Server Running On Port ${PORT});
});
Npm Init -Y
Npm Install Express Crypto
Export WEBHOOK_SECRET=Yoursecret
Node Server.Js
Https://Your-Server.Com/Webhook
<Subheading.Html>
Covid Strings Version That Integrates Directly With GitHub Actions So Post-Deployment Tasks Run Automatically After A PR Merge Without Needing A Separate Server
How To Create A Version That Integrates Directly With GitHub Actions So Post-Deployment Tasks Run Automatically After A PR Merge Without Needing A Separate Server For Covid Strings 
Name: Post-Deployment Tasks
On:
Pull_request:
Types:
- Closed
Jobs:
Post-Deploy:
If: Github.Event.Pull_request.Merged == True
Runs-On: Ubuntu-Latest
Steps:
- Name: Checkout Repository
Uses: Actions/Checkout@V4
- Name: Set Up Node.Js
Uses: Actions/Setup-Node@V4
With:
Node-Version: 20
- Name: Install Dependencies
Run: Npm Ci
- Name: Run Post-Deployment Script
Run: Node Scripts/PostDeploy.Js
Scripts/PostDeploy.Js
// Example: Post-deployment automation
(Async () => {
Console.Log(🚀 Post-Deployment Tasks Starting...);
// Example: Clear cache
Await New Promise(Res => SetTimeout(Res, 500));
Console.Log(🧹 Cache Cleared.);
// Example: Notify a webhook
Const Fetch = (Await Import(Node-Fetch)).Default;
Await Fetch(Process.Env.DEPLOY_WEBHOOK_URL, {
Method: POST,
Headers: {Content-Type: Application/Json},
Body: JSON.Stringify({Status: Deployed, Timestamp: New Date() })
});
Console.Log(📢 Deployment Notification Sent.);
Console.Log(✅ All Post-Deployment Tasks Completed.);
})();
<Subheading.Html>
Covid Strings One Version That Runs Only On Main Merges And Another That Uses GitHub Environments For Safer Deployments
How To Create One Version That Runs Only On Main Merges And Another That Uses GitHub Environments For Safer Deployments For Covid Strings
Name: Deploy On Main Merge
On:
Push:
Branches:
- Main
Jobs:
Deploy:
Runs-On: Ubuntu-Latest
Steps:
- Name: Checkout Code
Uses: Actions/Checkout@V4
- Name: Setup Node.Js
Uses: Actions/Setup-Node@V4
With:
Node-Version: 18
- Name: Install Dependencies
Run: Npm Ci
- Name: Build Project
Run: Npm Run Build
- Name: Deploy
Run: Node Scripts/Deploy.Js
✅ Behavior: This Triggers Only When A Commit Is Pushed To Main (Including Merges).
2️⃣ Uses GitHub Environments For Safer Deployments
Yaml
Name: Deploy With Environment Approval
On:
Push:
Branches:
-Main
Jobs:
Deploy:
Runs-On: Ubuntu-Latest
Environment:
Name: Production
Url: Https://Your-Production-Url.Com
Steps:
- Name: Checkout Code
Uses: Actions/Checkout@V4
- Name: Setup Node.Js
Uses: Actions/Setup-Node@V4
With:
Node-Version: 18
- Name: Install Dependencies
Run: Npm Ci
- Name: Build Project
Run: Npm Run Build
- Name: Deploy
Run: Node Scripts/Deploy.Js
<Subheading.Html>
Covid Strings Release Branch Strategy That Allows For Final Testing Bug Fixing And Preparing Release Notes Before Merging Into The Main Branch
How To Create A Release Branch Strategy That Allows For Final Testing Bug Fixing And Preparing Release Notes Before Merging Into The Main Branch For Covid Strings 
/**
 * Release Branch Strategy Automation Script
 * -----------------------------------------
 * Automates:
 * 1. Creating a release branch from develop
 * 2. Allowing final testing, bug fixing, and release notes preparation
 * 3. Merging into main and back into develop
 *
 * Requirements:
 *   npm install simple-git
 */
Const SimpleGit = Require(Simple-Git);
Const Path = Require(Path);
Const Fs = Require(Fs);
Const Git = SimpleGit();
// Utility: Validate branch name
Function ValidateBranchName(name) {
If (!/^release\/[0-9]+\.[0-9]+\.[0-9]+$/.Test(Name)) {
Throw New Error(Invalid Branch Name. Use Format: Release/X.Y.Z (E.G., Release/1.2.0));
}
}
// Step 1: Create a release branch from develop
Async Function CreateReleaseBranch(ReleaseBranch) {
ValidateBranchName(ReleaseBranch);
Console.Log(Creating Release Branch: ${ReleaseBranch} From Develop...);
Await Git.Fetch();
Await Git.Checkout(Develop);
Await Git.Pull(Origin, Develop);
Await Git.CheckoutBranch(ReleaseBranch, Develop);
Console.Log(✅ Release Branch ${ReleaseBranch} Created.);
}
// Step 2: Prepare release notes
Function PrepareReleaseNotes(Version) {
Const NotesPath =Path.Join(Process.Cwd(), RELEASE_NOTES.Md);
Const Content = # Release ${Version}\N\N- [ ] Final Testing\N- [ ] Bug Fixes\N- [ ] Documentation Updates\N\N;
Fs.WriteFileSync(NotesPath, Content, {Flag: W });
Console.Log(📝 Release Notes Created At ${NotesPath});
}
// Step 3: Merge release branch into main and develop
Async Function FinalizeRelease(ReleaseBranch) {
Console.Log(Merging ${ReleaseBranch} Into Main...);
Await Git.Checkout(Main);
Await Git.Pull(Origin, Main);
Await Git.MergeFromTo(ReleaseBranch, Main);
Await Git.Push(Origin, Main);
Console.Log(Merging ${ReleaseBranch} Back Into Develop...);
Await Git.Checkout(Develop);
Await Git.Pull(Origin, Develop);
Await Git.MergeFromTo(ReleaseBranch, Develop);
Await Git.Push(Origin, Develop);
Console.Log(✅ Release ${ReleaseBranch} Finalized And Merged.);
}
// CLI usage
(Async () => {
Try {
Const Action = Process.Argv[2];
Const Branch = Process.Argv[3];
If (!Action || !Branch) {
Console.Error(Usage: Node Release.Js <Create|Finalize> <Release/X.Y.Z>);
Process.Exit(1);
}
If (Action === Create) {
Await CreateReleaseBranch(Branch);
PrepareReleaseNotes(Branch.Split(/)[1]);
} Else If (Action === Finalize) {
Await FinalizeRelease(Branch);
} Else {
Throw New Error(Invalid Action. Use Create Or Finalize.);
}
} Catch (Err) {
Console.Error(❌ Error: ${Err.Message});
Process.Exit(1);
}
})();
Node Release.Js Create Release/1.0.0
Node Release.Js Finalize Release/1.0.0
<Subheading.Html>
Covid Strings Automatically Generating Changelogs From Commit Messages Before Merging Into Main
How To Automatically Generate Changelog From Commit Messages Before Merging Into Main For Covid Strings 
Npm Init-Y
Npm Install --Save-Dev Standard-Version Husky
2. Configure Package.Json
Add:
Json
{
Scripts: {
Changelog: Standard-Version --Skip.Tag=True --Skip.Commit=True
},
Standard-Version: {
Skip: {
Tag: True,
Commit: True
}
}
}
--Skip.Tag And --Skip.Commit Prevent Version Bumps/Tags — We Only Want The Changelog Update Before Merge.
3. Enable Husky And Create Pre-Merge Hook
Bash
Npx Husky Install
Npm Set-Script Prepare Husky Install
Npm Run Prepare
Create A Pre-Merge Hook:
Bash
Npx Husky Add.Husky/Pre-Merge Npm Run Changelog && Git Add CHANGELOG.Md
Chmod +X .Husky/Pre-Merge
4. Example.Husky/Pre-Merge File
Bash
#!/Bin/Sh
. $(Dirname $0)/_/Husky.Sh
Echo 🔄 Generating Changelog Before Merge...
Npm Run Changelog
# Stage The Updated Changelog So It Becomes Part Of The Merge Commit
Git Add CHANGELOG.Md
Echo ✅ Changelog Updated And Staged.
5. Commit Message Format
This Works Best If Commits Follow Conventional Commits, E.G.:
Feat: Add User Authentication
Fix: Correct Password Hashing Bug
Docs: Update API Usage Section
7. Example Generated CHANGELOG.Md
Markdown
### Features
- Add User Authentication
### Bug Fixes
- Correct Password Hashing Bug
Notes
If You Want This To Run Only When Merging Into Main, You Can Add A Branch Check In .Husky/Pre-Merge:
Bash
Branch=$(Git Rev-Parse --Abbrev-ref HEAD)
If [$ Branch = Main ]; Then
Npm Run Changelog && Git Add CHANGELOG.Md
<Subheading.Html>
Covid Strings Version That Automatically Commits The Changelog And Pushes It Before Merging Into Main
How To Automatically Commit The Change Log And Push It Before Merging Into The Main
#!/Usr/Bin/Env Node
/**
 * Auto-generate CHANGELOG.md from commits, commit it, and push to remote.
 * Uses conventional-changelog for commit parsing.
 */
Const {ExecSync } = Require(Child_Process);
Const Fs = Require(Fs);
Const Path = Require(Path);
Const CHANGELOG_FILE = Path.Join(Process.Cwd(), CHANGELOG.Md);
Function RunCommand(Command) {
Try {
Return ExecSync(Command, { Stdio: Pipe }).ToString().Trim();
} Catch (Err) {
Console.Error(❌ Command Failed: ${Command});
Console.Error(Err.Message);
Process.Exit(1);
}
}
Function GenerateChangelog() {
Console.Log(📄 Generating Changelog...);
RunCommand(
Npx Conventional-Changelog -P Angular -I CHANGELOG.Md -S -R 0
);
}
Function CommitAndPush() {
Console.Log(📦 Committing Changelog...);
RunCommand(Git Add ${CHANGELOG_FILE});
RunCommand(Git Commit -M Docs: Update Changelog [Skip Ci] || Echo No Changes To Commit);
Console.Log(🚀 Pushing Changes...);
Const Branch = RunCommand(Git Rev-Parse --Abbrev-Ref HEAD);
RunCommand(Git Push Origin ${Branch});
}
(Function Main() {
// Ensure git is clean before running
Const Status = RunCommand(Git Status --Porcelain);
If (Status.Includes(MERGING)) {
Console.Error(❌ Cannot Run During A Merge Conflict.);
Process.Exit(1);
}
// Ensure changelog file exists
If (!Fs.ExistsSync(CHANGELOG_FILE)) {
Fs.WriteFileSync(CHANGELOG_FILE, # Changelog\N\N, Utf8);
}
GenerateChangelog();
CommitAndPush();
Console.Log(✅ Changelog Updated And Pushed Successfully!);
})();
Setup Instructions
Install Dependencies:
Bash
Npm Install --Save-Dev Conventional-Changelog-Cli
Make Script Executable:
Bash
Chmod +X Update-Changelog.Js
Add To Package.Json Scripts:
Json
{
Scripts: {
Update-Changelog: Node Update-Changelog.Js
}
}
Optional: Run Before Merging Into Main
With Husky:
Bash
Npx Husky Add .Husky/Pre-Push Npm Run Update-Changelog
In GitHub Actions (Before Merge Step):
Yaml
- Name: Update Changelog
Run: Npm Run Update-Changelog
<Subheading.Html>
Covid Strings Post Deployment GitHub Action Workflow That Runs This Script Automatically On Pull Request Merge Into Main So You Never Have To Run It Locally 
How To Create A GitHub Action Workflow That Runs This Script Automatically On Pull Request Merge Into Main So You Never Have To Run It Locally For  Covid Strings Post Deployment 
Name: Run Script On Merge To Main
On:
Push:
Branches:
-Main  # Trigger Only When Changes Are Pushed To Main (After PR Merge)
Jobs:
Run-Script:
Runs-On: Ubuntu-Latest
Steps:
# Step 1: Check Out The Repository Code
-Name: Checkout Repository
Uses: Actions/Checkout@V4
# Step 2: Set Up Node.Js (Adjust Version If Needed)
- Name: Set Up Node.Js
Uses: Actions/Setup-Node@V4
With:
Node-Version: 18 # Or Your Required Version
Cache: Npm
# Step 3: Install Dependencies
- Name: Install Dependencies
Run: Npm Ci
# Step 4: Run Your Script
- Name: Run Script
Run: Node Path/To/Your-Script.Js
Example Project Structure
My-Repo/
├── .Github/
│   └── Workflows/
│       └── Run-Script-On-Merge.Yml
├── Package.Json
├── Package-Lock.Json
└── Scripts/
└── My-Task.Js
If Your Script Is In Scripts/My-Task.Js, Update The Workflow:
Yaml
Run: Node Scripts/My-Task.Js
Yaml
Env:
API_KEY: ${{Secrets.API_KEY }}
<Subheading.Html>
Covid Strings Merge-Only Version That Would Prevent Accidental Runs From Direct Pushes In Post Deployment
How To Create A  Merge-Only Version That Would Prevent Accidental Runs From Direct Pushes In Post Deployment
#!/Usr/Bin/Env Node
/**
 * Post-deployment safety check script
 * Prevents accidental runs from direct pushes.
 * Only allows execution if the last commit is a merge commit.
 */
Const {ExecSync } = Require(Child_process);
Try {
// Get the latest commit message
Const CommitMessage = ExecSync(Git Log -1 --Pretty=%B, {Encoding: Utf8}).Trim();
// Get the number of parents of the latest commit
Const ParentCount = ParseInt(ExecSync(Git Log -1 --Pretty=%P | Wc -W, {Encoding: Utf8}).Trim(), 10);
// Check if commit is a merge commit (2 parents) or contains "Merge"
Const IsMergeCommit = ParentCount > 1 || /^Merge/I.Test(CommitMessage);
If (!IsMergeCommit) {
Console.Error(❌ Deployment Blocked: Last Commit Is NOT A Merge Commit.);
Console.Error(Commit Message: ${CommitMessage});
Process.Exit(1); // Exit with error to stop deployment
}
Console.Log(✅ Merge Commit Detected. Proceeding With Deployment...);
} Catch (Err) {
Console.Error(❌ Error Checking Commit Type:, Err.Message);
Process.Exit(1);
Chmod +X Check-Merge.Js
Add To Your Post-Deployment Hook Or CI/CD Job:
Bash
Node Check-Merge.Js && Npm Run
Const Branch = ExecSync(Git Rev-Parse --Abbrev-Ref HEAD, {Encoding: Utf8}).Trim();
If (Branch !== Main) {
Console.Error(❌ Deployment Blocked: Not On Main Branch (Current: ${Branch}));
Process.Exit(1);
}
<Subheading.Html>
Pull Request For Website And Newsletter
For Website Request 
Provide Url Via Hyperlink
Website Domain Name
/**
 * Node.js script to:
 * 1. Create a GitHub Pull Request for a website repo.
 * 2. Send a newsletter email.
 *
 * Requirements:
 *   npm install @octokit/rest nodemailer dotenv
 *   Create a .env file with:
 *     GITHUB_TOKEN=your_github_personal_access_token
 *     GITHUB_OWNER=your_github_username_or_org
 *     GITHUB_REPO=your_repo_name
 *     NEWSLETTER_EMAIL=your_email@example.com
 *     NEWSLETTER_PASS=your_email_password_or_app_password
 */
Const { Octokit } = Require(@Octokit/Rest);
Const Nodemailer = Require(Nodemailer);
Require(Dotenv).Config();
// Validate environment variables
Const RequiredEnv = [
GITHUB_TOKEN,
GITHUB_OWNER,
GITHUB_REPO,
NEWSLETTER_EMAIL,
NEWSLETTER_PASS
];
For (Const Key Of RequiredEnv) {
If (!Process.Env[Key]) {
Console.Error(❌ Missing Environment Variable: ${Key});
Process.Exit(1);
}
}
// Initialize GitHub API client
Const Octokit = New Octokit({Auth: Process.Env.GITHUB_TOKEN });
/**
 * Create a Pull Request on GitHub
 */
Async Function CreatePullRequest(BranchName, Title, Body) {
Try {
// Get default branch
Const {Data: Repo } = Await Octokit.Repos.Get({
Owner: Process.Env.GITHUB_OWNER,
Repo: Process.Env.GITHUB_REPO
});
Const BaseBranch = Repo.Default_branch;
// Create PR
Const {Data: Pr } = Await Octokit.Pulls.Create({
Owner: Process.Env.GITHUB_OWNER,
Repo: Process.Env.GITHUB_REPO,
Title,
Head: BranchName,
Base: BaseBranch,
Body
});
Console.Log(✅ Pull Request Created: ${Pr.Html_Url});
} Catch (Error) {
Console.Error(❌ Error Creating Pull Request:, Error.Message);
}
}
/**
 * Send a Newsletter Email
 */
Async Function SendNewsletter(Subject, HtmlContent, Recipients) {
Try {
Const Transporter = Nodemailer.CreateTransport({
Service: Gmail, // Change if using another provider
Auth: {
User: Process.Env.NEWSLETTER_EMAIL,
Pass: Process.env.NEWSLETTER_PASS
}
});
Const Info = Await Transporter.SendMail({
From: My Newsletter <${Process.Env.NEWSLETTER_EMAIL}>,
To: Recipients.Join(, ),
Subject,
Html: HtmlContent
});
Console.Log(✅ Newsletter Sent: ${Info.MessageId});
} Catch (Error) {
Console.Error(❌ Error Sending Newsletter:, Error.Message);
}
}
// Example usage
(Async () => {
// 1. Create a Pull Request
Await CreatePullRequest(
Feature/Newsletter-Update, // Branch name
Add Newsletter Signup Section, // PR title
This PR Adds A New Newsletter Signup Form To The Homepage. // PR body
);
// 2. Send a Newsletter
Await SendNewsletter(
January Newsletter,
<H1>Hello Subscribers!</H1><P>Check out our latest Updates.</P>,
[Subscriber1@Example.Com, Subscriber2@Example.Com]
);
})();
<Subheading.Html>
Covid Strings Extending This Code So It Automatically Edits Your Website Files, Commits Them, And Then Sends The Newsletter By Automatically Creating A Branch And Commit Changes Before Making The PR And Using Mailchimp API Or SendGrid For Large-Scale Newsletters
How To Extend This Code So It Automatically Edits Your Website Files, Commits Them, And Then Sends The Newsletter By Automatically Creating A Branch And Commit Changes Before Making The PR And Using Mailchimp API Or SendGrid For Large-Scale Newsletters
/**
 * Automated Website Update + Newsletter Sender
 * Requirements:
 *   npm install simple-git @octokit/rest @sendgrid/mail dotenv
 *   (For Mailchimp: npm install @mailchimp/mailchimp_marketing)
 */
Import Fs From Fs;
Import Path From Path;
Import SimpleGit From Simple-Git;
Import { Octokit } From @Octokit/Rest;
Import SgMail From @Sendgrid/Mail;
Import Dotenv From Dotenv;
Dotenv.Config();
// ==== CONFIGURATION ====
Const REPO_OWNER = Process.Env.GITHUB_OWNER; // e.g., "your-username"
Const REPO_NAME = Process.Env.GITHUB_REPO;   // e.g., "your-repo"
Const BASE_BRANCH = Main;
Const NEW_BRANCH = Update-${Date.Now()};
Const FILE_TO_EDIT = Path.Join(Process.Cwd(), Index.Html); // Example file
Const COMMIT_MESSAGE = Automated Website Update And Newsletter Send;
// ==== INITIALIZE ====
Const Git = SimpleGit();
Const Octokit = New Octokit({Auth: Process.Env.GITHUB_TOKEN });
SgMail.SetApiKey(Process.Env.SENDGRID_API_KEY);
// ==== STEP 1: Edit Website File ====
Async Function EditWebsiteFile() {
Try {
Let Content = Fs.ReadFileSync(FILE_TO_EDIT, Utf8);
Const Timestamp = New Date().ToISOString();
Content = Content.Replace(</Body>, <P>Updated On ${Timestamp}</P></Body>);
Fs.WriteFileSync(FILE_TO_EDIT, Content, Utf8);
Console.Log(✅ File Updated: ${FILE_TO_EDIT});
} Catch (Err) {
Console.Error(❌ Error Editing File:, Err);
Process.Exit(1);
}
}
// ==== STEP 2: Git Branch, Commit, Push ====
Async Function CommitAndPushChanges() {
Try {
Await Git.Checkout(BASE_BRANCH);
Await Git.Pull(Origin, BASE_BRANCH);
Await Git.CheckoutLocalBranch(NEW_BRANCH);
Await Git.Add(FILE_TO_EDIT);
Await Git.Commit(COMMIT_MESSAGE);
Await Git.Push(Origin, NEW_BRANCH);
Console.Log(✅ Changes Pushed To Branch: ${NEW_BRANCH});
} Catch (Err) {
Console.Error(❌ Git Operation Failed:, Err);
Process.Exit(1);
}
}
// ==== STEP 3: Create Pull Request ====
Async Function CreatePullRequest() {
Try {
Const {Data } = Await Octokit.Pulls.Create({
Owner: REPO_OWNER,
Repo: REPO_NAME,
Title: COMMIT_MESSAGE,
Head: NEW_BRANCH,
Base: BASE_BRANCH,
Body: Automated Update Via Script.
});
Console.Log(✅ Pull Request Created: ${Data.Html_url});
} Catch (Err) {
Console.Error(❌ Failed To Create PR:, Err);
Process.Exit(1);
}
}
// ==== STEP 4: Send Newsletter ====
Async Function SendNewsletter() {
Try {
Const Msg = {
To: Process.Env.NEWSLETTER_RECIPIENTS.Split(','), // comma-separated list
From: Process.Env.SENDGRID_FROM_EMAIL,
Subject: Website Update Notification,
Html: <P>Hello,</P><P>The Website Has Been Updated. Check The Latest Changes <A Href=Https://Github.Com/${REPO_OWNER}/${REPO_NAME}/Pulls>Here</A>.</P>
};
Await SgMail.SendMultiple(Msg);
Console.Log(✅ Newsletter Sent Via SendGrid);
} Catch (Err) {
Console.Error(❌ Failed To Send Newsletter:, Err);
Process.Exit(1);
}
}
/* ==== Alternative: Mailchimp ====
import mailchimp from '@mailchimp/mailchimp_marketing';
mailchimp.setConfig({ apiKey: process.env.MAILCHIMP_API_KEY, server: process.env.MAILCHIMP_SERVER_PREFIX });
await mailchimp.campaigns.create({ ... });
*/
// ==== MAIN EXECUTION ====
(Async () => {
Await EditWebsiteFile();
Await CommitAndPushChanges();
Await CreatePullRequest();
Await SendNewsletter();
})();
Environment Variables (.Env)
GITHUB_TOKEN=Ghp_yourgithubtoken
GITHUB_OWNER=Yourusername
GITHUB_REPO=Yourrepo
SENDGRID_API_KEY=SG.Xxxxx
SENDGRID_FROM_EMAIL=You@Example.Com
NEWSLETTER_RECIPIENTS=Email1@Example.Com,Email2@Example.Com
MAILCHIMP_API_KEY=Your-Mailchimp-Key
MAILCHIMP_SERVER_PREFIX=UsX
<Subheading.Html>
Covid Strings Github Actions Automation Version For A Pull Request Of A Website And Newsletter 
How To Create A Github Actions Automation Version For A Pull Request Of A Website And Newsletter 
Name: Website & Newsletter PR Automation
On:
Push:
Branches:
-Feature/   # Runs When Pushing To Any Feature Branch
Workflow_dispatch:  # Allows Manual Trigger From GitHub UI
Jobs:
Build-And-Pr:
Runs-On: Ubuntu-Latest
Steps:
# 1. Checkout Repository
- Name: Checkout Repository
Uses: Actions/Checkout@V4
# 2. Set Up Node.Js
- Name: Set Up Node.Js
Uses: Actions/Setup-Node@V4
With:
Node-Version: 18 # Adjust To Your Projects Node Version
# 3. Install Dependencies
- Name: Install Dependencies
Run: Npm Ci
# 4. Build Website And Newsletter
- Name: Build Website
Run: Npm Run Build:Website
- Name: Build Newsletter
Run: Npm Run Build:Newsletter
# 5. Commit Build Artifacts (If Any)
- Name: Commit Build Output
Run: |
Git Config --Global User.Name Github-Actions[Bot]
Git Config --Global User.Email Github-Actions[Bot]@Users.Noreply.Github.Com
Git Add .
Git Commit -M Chore: Build Website & Newsletter || Echo No Changes To Commit
# 6. Create Pull Request
- Name: Create Pull Request
Uses: Peter-Evans/Create-Pull-Request@V6
With:
Token: ${{Secrets.GITHUB_TOKEN }}
Commit-Message: Chore: Build Website & Newsletter
Branch: Automation/Build-Pr
Title: Automated PR: Website & Newsletter Update
Body: |
This Pull Request Was Automatically Generated By GitHub Actions.
It Contains The Latest Build Of The Website And Newsletter.
Labels: |
Automated
Website
Newsletter
Draft: False
Scripts: {
Build:Website: Your-Website-Build-Command,
Build:Newsletter: Your-Newsletter-Build-Command
}
<Subheading.Html>
Covid Strings Extending The Workflow So It Also Deploys The Website Automatically After The PR Is Merged 
How To Extend The Workflow So It Also Deploys The Website Automatically After The PR Is Merged 
Name: Build And Deploy Website
On:
Push:
Branches:
- Main  # Trigger Only When PR Is Merged Into Main
Jobs:
Build-And-Deploy:
Runs-On: Ubuntu-Latest
Steps:
# Step 1: Checkout The Repository
- Name: Checkout Code
Uses: Actions/Checkout@V4
# Step 2: Set Up Node.Js
- Name: Set Up Node.Js
Uses: Actions/Setup-Node@V4
With:
Node-Version: 18 # Adjust To Your Projects Node version
# Step 3: Install Dependencies
- Name: Install Dependencies
Run: Npm Ci
# Step 4: Build The Project
- Name: Build Project
Run: Npm Run Build
# Step 5: Deploy To Firebase Hosting (Example)
- Name: Deploy To Firebase Hosting
Uses: FirebaseExtended/Action-Hosting-Deploy@V0
With:
RepoToken: ${{Secrets.GITHUB_TOKEN }}
FirebaseServiceAccount: ${{Secrets.FIREBASE_SERVICE_ACCOUNT }}
ChannelId: Live
ProjectId: Your-Firebase-Project-Id
- Name: Deploy To Netlify
Uses: Nwtgck/Actions-Netlify@V2
With:
Publish-Dir:./Dist
Production-Deploy: True
Github-Token: ${{Secrets.GITHUB_TOKEN }}
Netlify-Auth-Token: ${{Secrets.NETLIFY_AUTH_TOKEN }}
Netlify-Site-Id: ${{Secrets.NETLIFY_SITE_ID }}
If You Use Vercel:
Yaml
- Name: Deploy To Vercel
Run: Npx Vercel --Prod --Token=${{Secrets.VERCEL_TOKEN }}
<Subheading.Html>
Covid Strings Extending This Workflow So It Also Posts A Comment On The PR With The Live Deployment URL Before Merging
How To Extend This Workflow So It Also Posts A Comment On The PR With The Live Deployment URL Before Merging For Covid Strings
Name: Deploy Preview And Comment
On:
Pull_request:
Types: [Opened, Synchronize, Reopened]
Jobs:
Deploy-Preview:
Runs-On: Ubuntu-Latest
Steps:
# Checkout The PR Code
- Name: Checkout Code
Uses: Actions/Checkout@V4
# Example: Deploy To Your Hosting (Replace With Your Actual Deploy Command)
- Name: Deploy To Preview
Id: Deploy
Run: |
# Simulate Deployment And Output URL
DEPLOY_URL=Https://Preview.Example.Com/Pr-${{Github.Event.Pull_request.Number}}
Echo Deploy_url=$ DEPLOY_URL >> $ GITHUB_OUTPUT
# Post Comment With Deployment URL
- Name: Comment On PR With Deployment URL
Uses: Actions/Github-Script@V7
With:
Script: |
Const DeployUrl = ${{Steps.Deploy.Outputs.Deploy_url }};
Const {Context, Github } = Require(@Actions/Github);
Await Github.Rest.Issues.CreateComment({
Owner: Context.Repo.Owner,
Repo: Context.Repo.Repo,
Issue_number: Context.Issue.Number,
Body: 🚀 Live Preview: [${DeployUrl}](${DeployUrl})
});
- Name: Add Or Update Deployment Comment
Uses: Actions/Github-Script@V7
With:
Script: |
Const DeployUrl = ${{Steps.Deploy.Outputs.Deploy_url }};
Const {Context, Github } = Require(@Actions/Github);
// Find existing comment
Const {Data: Comments } = Await Github.Rest.Issues.ListComments({
Owner: Context.Repo.Owner,
Repo: Context.Repo.Repo,
Issue_number: Context.Issue.Number
});
Const BotComment = Comments.Find(C => 
C.User.Type === Bot && C.Body.Includes(🚀 Live Preview)
);
If (BotComment) {
// Update existing comment
Await Github.Rest.Issues.UpdateComment({
Owner: Context.Repo.Owner,
Repo: Context.Repo.Repo,
Comment_id: BotComment.Id,
Body: 🚀 Live Preview: [${DeployUrl}](${DeployUrl})
});
} Else {
// Create new comment
Await Github.Rest.Issues.CreateComment({
Owner: Context.Repo.Owner,
Repo: Context.Repo.Repo,
Issue_number: Context.Issue.Number,
Body: 🚀 Live Preview: [${DeployUrl}](${DeployUrl})
});
}
<Subheading.Html>
Covid Strings Only Posting The Comment When The Deployment Succeeds And Fails Gracefully If Deployment Fails
How To Only Post The Comment When The Deployment Succeeds And Fails Gracefully If Deployment Fails For Covid Strings 
// File: post-comment-on-success.js
// This script is intended for use in a GitHub Action
// It posts a comment to a PR only if deployment succeeds
Const Core = Require(@Actions/Core);
Const Github = Require(@Actions/Github);
Async Function Run() {
Try {
// Read inputs from workflow
Const Token = Core.GetInput(Github-Token, {Required: True });
Const DeploymentStatus = Core.GetInput(Deployment-Status, {Required: True }); // "success" or "failure"
Const CommentBody = Core.GetInput(Comment-Body) || ✅ Deployment Succeeded!;
// Fail gracefully if deployment failed
If (DeploymentStatus.ToLowerCase() !== Success) {
Core.Warning(Deployment Failed. No Comment Will Be Posted.);
Process.ExitCode = 1; // Mark job as failed
Return;
}
Const Octokit = Github.GetOctokit(Token);
Const Context = Github.Context;
// Ensure this is a PR event
If (!Context.Payload.Pull_request) {
Core.Warning(This Event Is Not A Pull Request. Skipping Comment.);
Return;
}
Const {Owner, Repo } = Context.Repo;
Const IssueNumber = Context.Payload.Pull_request.Number;
// Post the comment
Await Octokit.Rest.Issues.CreateComment({
Owner,
Repo,
Issue_number: IssueNumber,
Body: CommentBody
});
Core.Info(Comment Posted To PR #${IssueNumber});
} Catch (Error) {
Core.SetFailed(Error Posting Comment: ${Error.Message});
}
}
Run();
Example Workflow (.Github/Workflows/Deploy.Yml)
Yaml
Name: Deploy And Comment
On:
Pull_request:
Types: [Opened, Synchronize]
Jobs:
Deploy:
Runs-On: Ubuntu-Latest
Steps:
- Uses: Actions/Checkout@V4
# Simulate Deployment Step
- Name: Run Deployment
Id: Deploy
Run: |
Echo Status=Success>> $ GITHUB_OUTPUT
# If Failed, Set Status=Failure
# Post Comment Only If Deployment Succeeded
- Name: Post PR Comment
Uses: Actions/Github-Script@V7
With:
Script: |
Const Status = ${{Steps.Deploy.Outputs.Status}};
If (Status !== Success) {
Core.Warning(Deployment Failed. Skipping Comment.);
Process.Exit(1);
}
Github.Rest.Issues.CreateComment({
Owner: Context.Repo.Owner,
Repo: Context.Repo.Repo,
Issue_number: Context.Issue.Number,
Body:✅ Deployment Succeeded!
});
<Subheading.Html>
Covid Strings Version That Updates An Existing Comment Instead Of Creating A New One To Avoid PR Spam
How To Create A Version That Updates An Existing Comment Instead Of Creating A New One To Avoid PR Spam For Covid Strings 
Name: Update Or Create PR Comment
On:
Pull_request:
Types: [Opened, Synchronize, Reopened]
Jobs:
Comment:
Runs-On: Ubuntu-Latest
Steps:
- Uses: Actions/Checkout@V4
- Name: Run Comment Updater
Uses: Actions/Setup-Node@V4
With:
Node-Version: 20
- Run: Node .Github/Scripts/UpdateComment.Js
Env:
GITHUB_TOKEN: ${{Secrets.GITHUB_TOKEN }}
.Github/Scripts/UpdateComment.Js
/**
 * Script to update an existing PR comment or create a new one if it doesn't exist.
 * Prevents PR spam by reusing the same comment.
 */
Const Core = Require(@Actions/Core);
Const Github = Require(@Actions/Github);
(Async () => {
Try {
Const Token = Process.Env.GITHUB_TOKEN;
If (!Token) {
Throw New Error(GITHUB_TOKEN Is Missing. Make Sure Its Set In Env.);
}
Const Octokit = Github.GetOctokit(Token);
Const {Context } = Github;
If (!Context.Payload.Pull_request) {
Console.Log(Not A Pull Request Event. Exiting.);
Return;
}
Const Owner=Context.Repo.Owner;
Const Repo =Context.Repo.Repo;
Const Issue_number =Context.Payload.Pull_request.Number;
// Unique identifier to find the comment later
Const Marker = <!-- Unique-Comment-Marker -->;
Const NewBody = ${Marker}\N✅ Build Completed Successfully At ${New Date().ToISOString()};
// 1. Get existing comments
Const {Data: Comments } = Await Octokit.Rest.Issues.ListComments({
Owner,
Repo,
Issue_number,
});
// 2. Find existing comment with marker
Const ExistingComment = Comments.Find(Comment =>
Comment.Body && Comment.Body.Includes(Marker)
);
If (ExistingComment) {
// 3. Update existing comment
Await Octokit.Rest.Issues.UpdateComment({
Owner,
Repo,
Comment_id: ExistingComment.Id,
Body: NewBody,
});
Console.Log(Updated Existing Comment (ID: ${ExistingComment.Id}));
} Else {
// 4. Create new comment
Await Octokit.Rest.Issues.CreateComment({
Owner,
Repo,
Issue_number,
Body: NewBody,
});
Console.Log(Created New Comment.);
}
} Catch (Error) {
Core.SetFailed(Error.Message);
}
})();
<Subheading.Html>
Covid Strings Using The Peter-Evans/Create-Or-Update-Comment Action Instead Of Writing Custom Javascript
How To Use The Peter-Evans/Create-Or-Update-Comment Action Instead Of Writing Custom Javascript For Covid Strings 
Name: Comment On PR
On:
Pull_request:
Types: [Opened, Synchronize]
Jobs:
Comment:
Runs-On: Ubuntu-Latest
Steps:
# Step 1: Check Out The Repository
- Name: Checkout Repository
Uses: Actions/Checkout@V4
# Step 2: Create Or Update A Comment
- Name: Create Or Update PR Comment
Uses: Peter-Evans/Create-Or-Update-Comment@V4
With:
Token: ${{Secrets.GITHUB_TOKEN }} # GitHub Automatically Provides This
Issue-Number: ${{Github.Event.Pull_request.Number }}
Body: |
👋 Hello @${{Github.Actor }}!
This Is An Automated Comment From The Workflow.
- Commit SHA: ${{Github.Sha }}
- Branch: ${{Github.Ref }}
Edit-Mode: Replace # Options: Append, Prepend, Replace
- Name: Find Existing Comment
Id: Find-Comment
Uses: Peter-Evans/Find-Comment@V3
With:
Issue-Number: ${{Github.Event.Pull_request.Number }}
Comment-Author: Github-Actions[Bot]
Body-Includes: This Is An Automated Comment
- Name: Create Or Update Comment
Uses: Peter-Evans/Create-Or-Update-Comment@V4
With:
Token: ${{Secrets.GITHUB_TOKEN }}
Comment-Id: ${{Steps.Find-Comment.Outputs.Comment-Id }}
Issue-Number: ${{Github.Event.Pull_request.Number }}
Body: |
🔄 Updated Automated Comment For @${{Github.Actor }}.
Commit: ${{Github.Sha }}
Edit-Mode: Replace
<Subheading.Html>
Covid Strings Posting Build/Test Results Dynamically
How To Post Build/Test Results Dynamically For Covid Strings 
// ===============================
// Pre-request Script
// ===============================
// Generate dynamic request body data
Let UserId = Math.Floor(Math.Random() * 1000) + 1;
Let Timestamp = New Date().ToISOString();
Pm.Environment.Set(UserId, UserId);
Pm.Environment.Set(Timestamp, Timestamp);
// Build request body dynamically
Let RequestBody = {
Id: UserId,
Name: User_${IserId},
CreatedAt: Timestamp
};
// Save the JSON string for the request body
Pm.Environment.Set(RequestBody, JSON.Stringify(RequestBody));
// Log for debugging
Console.Log(Generated Request Body:, RequestBody);
// ===============================
// Tests Script
// ===============================
// Parse JSON response
Let JsonData;
Try {
JsonData = Pm.Response.Json();
} Catch (E) {
Pm.Test(Response Is Valid JSON, Function () {
Pm.Expect.Fail(Response Is Not Valid JSON);
});
}
// 1. Status code check
Pm.Test(Status Code Is 200, Function () {
Pm.Response.To.Have.Status(200);
});
// 2. Response time check
Pm.Test(Response Time Is Under 500Ms, Function () {
Pm.Expect(Pm.Response.ResponseTime).To.Be.Below(500);
});
// 3. Validate required fields
Pm.Test(Response Contains Required Fields, Function () {
Pm.Expect(JsonData).To.Have.Property(Id);
Pm.Expect(JsonData).To.Have.Property(Name);
Pm.Expect(JsonData).To.Have.Property(CreatedAt);
});
// 4. Match returned data with request data
Pm.Test(Returned ID Matches Request, Function () {Pm.Expect(JsonData.Id).To.Eql(ParseInt(Pm.Environment.Get(UserId)));
});
Pm.Test(Returned Name Matches Request, Function () {Pm.Expect(JsonData.Name).To.Eql(User_${Pm.Environment.Get(UserId)});
});
// 5. Save response data for next requests
If (JsonData && JsonData.Id) {
Pm.Environment.Set(LastCreatedUserId, JsonData.Id);
}
<Subheading.Html>
Covid Strings Newman CLI Version So You Can Run These Dynamic Postman Tests Automatically In CI/CD Pipelines
How To Create A Newman CLI Version So You Can Run These Dynamic Postman Tests Automatically In CI/CD Pipelines For Covid Strings 
/**
 * Newman CLI Runner for Postman Collections
 * -----------------------------------------
 * Run: node run-postman.js
 * 
 * Requirements:
 *   npm install newman
 */
Const Newman = Require(Newman);
Const Path = Require(Path);
// === CONFIGURATION ===
// You can replace these with environment variables in CI/CD
Const COLLECTION_PATH = Path.Join(__ Dirname, Collection.Json); // or a public Postman URL
Const ENV_PATH = Path.Join(__ Dirname, Environment.Json); // optional, set to null if not needed
// === RUN NEWMAN ===
Try {
Console.Log(🚀 Starting Postman Tests With Newman...);
Newman.Run({
Collection: COLLECTION_PATH, // or URL
Environment: ENV_PATH || Undefined,
Reporters: [Cli, Json], // CLI output + JSON report
Reporter: {
Json: {
Export: Path.Join(__ Dirname, Newman-Report.Json) // Save report
}
},
TimeoutRequest: 10000, // 10s per request
Insecure: False, // Set true to ignore SSL errors
Bail: True // Stop on first failure (optional)
}, (Err, Summary) => {
If (Err) {
Console.Error(❌ Newman Run Failed To Start:, Err);
Process.Exit(1);
}
// Check for failed tests
If (Summary.Run.Failures && Summary.Run.Failures.Length > 0) {
Console.Error(❌ ${Summary.Run.Failures.Length} Test(S) Failed.);
Process.Exit(1); // Fail CI/CD pipeline
}
Console.Log(✅ All Tests Passed Successfully!);
Process.Exit(0);
});
} Catch (Error) {
Console.Error(❌ Unexpected Error:, Error);
Process.Exit(1);
}
Npm Init-Y
Npm Install Newman
(Collection.Json) , (Environment.Json)
Node Run-Postman.Js
Name: API Tests
On: [Push]
Jobs:
Test:
Runs-On: Ubuntu-Latest
Steps:
- Uses: Actions/Checkout@V3
- Uses: Actions/Setup-Node@V3
With:
Node-Version: 18
- Run: Npm Install Newman
- Run: Node Run-Postman.Js
<Subheading.Html>
Covid Strings Dynamic Postman Api Version That Fetches The Latest Postman Collection Dynamically From The Postman API
How To Create Dynamic Postman Api Version That Fetches The Latest Postman Collection Dynamically From The Postman API For Covid Strings 
/**
 * Fetch the latest Postman collection dynamically from the Postman API
 * Requirements:
 *   - Node.js 16+
 *   - Environment variable POSTMAN_API_KEY set with your Postman API key
 *   - Collection UID from your Postman workspace
 */
Import Fetch From Node-Fetch; // Install with: npm install node-fetch
// Load environment variables
Const POSTMAN_API_KEY = Process.Env.POSTMAN_API_KEY;
Const COLLECTION_UID = Process.Env.POSTMAN_COLLECTION_UID; // e.g., "12345678-abcdef12-3456-abcdef123456"
If (!POSTMAN_API_KEY || !COLLECTION_UID) {
Console.Error(❌ Missing POSTMAN_API_KEY Or POSTMAN_COLLECTION_UID In Environment Variables.);
Process.Exit(1);
}
/**
 * Fetch the latest collection from Postman API
 */
Async Function FetchLatestCollection() {
Const Url = Https://Api.Getpostman.Com/Collections/${COLLECTION_UID};
Try {
Const Response = Await Fetch(Url, {
Method: GET,
Headers: {
X-Api-Key: POSTMAN_API_KEY,
Accept: Application/Json
}
});
If (!Response.Ok) {
Throw New Error(HTTP ${Response.Status} - ${Response.StatusText});
}
Const Data = Await Response.Json();
If (!Data.Collection) {
Throw New Error(No Collection Data Found In API Response.);
}
Console.Log(✅ Latest Postman Collection Fetched Successfully!);
Console.Log(JSON.Stringify(Data.Collection, Null, 2)); // Pretty-print JSON
// You can now save this to a file or use it in automated tests
Return Data.Collection;
} Catch (Error) {
Console.Error(❌ Error Fetching Collection:, Error.Message);
Process.Exit(1);
}
}
// Run the fetch
FetchLatestCollection();
Setup Instructions
Install Dependencies:
Bash
Npm Init-Y
Npm Install Node-Fetch
Set Environment Variables (Replace With Your Actual Values):
Bash
Export POSTMAN_API_KEY=Your_postman_api_key_here
Export POSTMAN_COLLECTION_UID=Your_collection_uid_here
Run The Script:
Bash
Node FetchPostmanCollection.Js
<Subheading.Html>
Covid Strings Extend This So It Automatically Commits The Latest Collection To GitHub For Version Control In Your CI/CD Pipeline 
How To Extend This So It Automatically Commits The Latest Collection To GitHub For Version Control In Your CI/CD Pipeline For Covid Strings 
/**
 * Auto-commit latest collection to GitHub
 * Run: node autoCommit.js
 */
Const {ExecSync } = Require(Child_process);
Const Path = Require(Path);
Const Fs = Require(Fs);
// CONFIGURATION
Const COLLECTION_PATH = Path.Join(__ Dirname, Collection); // folder or file to commit
Const COMMIT_MESSAGE = Chore: Update Latest Collection [CI Skip]; // commit message
Const BRANCH = Process.Env.GITHUB_REF_NAME || Main; // default branch
Try {
// 1. Check if collection exists
If (!Fs.ExistsSync(COLLECTION_PATH)) {
Console.Error(❌ Collection Path Not Found: ${COLLECTION_PATH});
Process.Exit(1);
}
// 2. Configure Git (needed in CI/CD)
ExecSync(Git Config --Global User.Name CI Bot);
ExecSync(Git Config --Global User.Email Ci-Bot@Example.Com);
// 3. Stage changes
ExecSync(Git Add ${COLLECTION_PATH}, {Stdio: Inherit });
// 4. Check if there are changes to commit
Const Status = ExecSync(Git Status --Porcelain).ToString().Trim();
If (!Status) {
Console.Log(✅ No Changes Detected. Skipping Commit.);
Process.Exit(0);
}
// 5. Commit changes
ExecSync(Git Commit -M ${COMMIT_MESSAGE}, {Stdio: Inherit});
// 6. Push changes
ExecSync(Git Push Origin ${BRANCH}, {Stdio: Inherit});
Console.Log(✅ Latest Collection Committed And Pushed To GitHub.);
} Catch (Error) {
Console.Error(❌ Error During Auto-Commit:,Error.Message);
Process.Exit(1);
}
GitHub Actions Workflow Example
Save This As .Github/Workflows/Auto-Commit.Yml:
Yaml
Name: Auto Commit Collection
On:
Push:
Branches:
-Main
Workflow_dispatch: # Allow Manual Trigger
Jobs:
Commit-Collection:
Runs-On: Ubuntu-Latest
Steps:
-Name: Checkout Repository
Uses: Actions/Checkout@V4
With:
Persist-Credentials: True # Needed For Push
-Name: Setup Node.Js
Uses: Actions/Setup-Node@V4
With:
Node-Version: 18
-Name: Install Dependencies
Run: Npm Install
- Name: Run Auto-Commit Script
Run: Node AutoCommit.Js
Git Push Https://<TOKEN>@Github.Com/<USER>/<REPO>.Git ${BRANCH}
<Subheading.Html>
Covid Strings Only Committing When The Collection JSON Changes By Hashing The File Before Committing
How To Condition Committing For Covid Strings When The Collection JSON Changes By Hashing The File Before Committing
#!/Usr/Bin/Env Node
/**
 * Commit to Git only if a JSON file's canonical content changes.
 * Usage: node commit-if-json-changed.js path/to/file.json "Commit message"
 */
Const Fs = Require(Fs);
Const Crypto = Require(Crypto);
Const {ExecSync }=Require(Child_process);
Const Path =Require(Path);
If (Process.Argv.Length < 4) {
Console.Error(Usage: Node Commit-If-Json-Changed.Js <JsonFile> <CommitMessage>);
Process.Exit(1);
}
Const JsonFile = Process.Argv[2];
Const CommitMessage = Process.Argv[3];
Const HashFile = ${JsonFile}.Hash;
// Validate JSON file existence
If (!Fs.ExistsSync(JsonFile)) {
Console.Error(Error: File ${JsonFile} Not Found.);
Process.Exit(1);
}
// Read and canonicalize JSON (sort keys to avoid formatting differences)
Function CanonicalizeJson(Obj) {
If (Array.IsArray(Obj)) {
Return Obj.Map(CanonicalizeJson);
} Else If (Obj && Typeof Obj === Object) {
Return Object.Keys(Obj)
.Sort()
.Reduce((Acc, Key) => {
Acc[Key] = CanonicalizeJson(Obj[Key]);
Return Acc;
}, {});
}
Return Obj;
}
// Compute SHA-256 hash of canonical JSON
Function ComputeHash(FilePath) {
Try {
Const RawData = Fs.ReadFileSync(FilePath, Utf8);
Const Parsed = JSON.Parse(RawData);
Const Canonical = JSON.Stringify(CanonicalizeJson(Parsed));
Return Crypto.CreateHash(Sha256).Update(Canonical).Digest(Hex);
} Catch (Err) {
Console.Error(Error Reading Or Parsing JSON: ${Err.Message});
Process.Exit(1);
}
}
Const NewHash = ComputeHash(JsonFile);
Let OldHash = Null;
// Read old hash if exists
If (Fs.ExistsSync(HashFile)) {
OldHash =Fs.ReadFileSync(HashFile, Utf8).Trim();
}
// Compare hashes
If (NewHash === OldHash) {
Console.Log(No Changes Detected In JSON Content. Skipping Commit.);
Process.Exit(0);
}
// Save new hash
Fs.WriteFileSync(HashFile, NewHash, Utf8);
// Stage and commit changes
Try {
ExecSync(Git Add ${JsonFile} ${HashFile}, {Stdio: Inherit});
ExecSync(Git Commit -M ${CommitMessage}, {Stdio: Inherit});
Console.Log(Changes Committed Successfully.);
} Catch (Err) {
Console.Error(Git Commit Failed: ${Err.Message});
Process.Exit(1);
}
Chmod +X Commit-If-Json-Changed.Js
Node Commit-If-Json-Changed.Js Data.Json Update Data.Json If Changed
<Subheading.Html>
Covid Strings Git Pre-Commit Hook Version So This Runs Automatically Before Every Commit
How To Git Pre-Commit Hook Version So This Runs Automatically Before Every Commit
Npm Install Husky --Save-Dev
Npx Husky Install
{
Scripts: {
Prepare: Husky Install
}
}
Npx Husky Add.Husky/Pre-Commit Npm Run Precommit-Check
Chmod +X .Husky/Pre-Commit
#!/Usr/Bin/Env Node
/**
 * Pre-commit check script
 * This example runs ESLint and prevents commit if there are errors.
 */

Const {ExecSync} = Require(Child_process);
Try {
Console.Log(🔍 Running ESLint Before Commit...);
ExecSync(Npx Eslint ., {Stdio: Inherit});
Console.Log(✅ ESLint Passed. Proceeding With Commit...);
Process.Exit(0);
} Catch (Error) {
Console.Error(❌ ESLint Failed. Commit Aborted.);
Process.Exit(1); // Exit with error to block commit
}
4. Add Script To Package.Json
Json
{
Scripts: {
Precommit-Check: Node Scripts/Precommit-Check.Js
}
}
<Subheading.Html>
Newsletter Article Request 
A Pull Request For A Covid Strings Newsletter Article 
For Newsletter Article Request To Include A Read Button For The User To Read The Full Article
Make Sure That Articles Within The Newsletter Can Include Future Versions Of This Game As Well As Present And Past Versions
/**
 * Create a Pull Request for a newsletter article on GitHub
 * Requirements:
 *   1. Install dependencies: npm install @octokit/rest
 *   2. Set environment variables:
 *        GITHUB_TOKEN   - Personal Access Token with repo permissions
 *        REPO_OWNER     - Repository owner (username or org)
 *        REPO_NAME      - Repository name
 */
Const { Octokit } =Require(@Octokit/Rest);
Const Fs =Require(Fs);
Const Path =Require(Path);
(Async () => {
Try {
// Load environment variables
Const Token = Process.Env.GITHUB_TOKEN;
Const Owner = Process.Env.REPO_OWNER;
Const Repo = Process.Env.REPO_NAME;
If (!Token || !Owner || !Repo) {
Throw New Error(Missing Required Environment Variables.);
}
Const Octokit =New Octokit({Auth: Token });
// Step 1: Get the default branch (usually 'main' or 'master')
Const {Data: RepoData } = Await Octokit.Repos.Get({Owner, Repo });
Const BaseBranch = RepoData.Default_branch;
// Step 2: Get the latest commit SHA of the base branch
Const {Data: RefData } = Await Octokit.Git.GetRef({
Owner,
Repo,
Ref: Heads/${BaseBranch},
});
Const LatestCommitSha = RefData.Object.Sha;
// Step 3: Create a new branch for the newsletter article
Const BranchName = Newsletter-${Date.Now()};
Await Octokit.Git.CreateRef({
Owner,
Repo,
Ref: Refs/Heads/${BranchName},
Sha: LatestCommitSha,
});
// Step 4: Prepare The Newsletter article content
Const ArticleContent = 
# Weekly Newsletter - ${New Date().ToLocaleDateString()}
Hello Readers!  
This Is Our Latest Newsletter Article.
.Trim();
Const FilePath = Newsletters/Article-${Date.Now()}.Md;
// Step 5: Create the file in the new branch
Await Octokit.repos.createOrUpdateFileContents({
Owner,
Repo,
Path: FilePath,
Message: Add Newsletter Article: ${FilePath},
Content: Buffer.From(ArticleContent, Utf8).ToString(Base64),
Branch: BranchName,
});
// Step 6: Create the Pull Request
Const {Data: Pr } = Await Octokit.Pulls.Create({
Owner,
Repo,
Title: Add Newsletter Article - ${New Date().ToLocaleDateString()},
Head: BranchName,
Base: BaseBranch,
Body: This PR Adds The Latest Newsletter Article.,
});
Console.Log(✅ Pull Request Created: ${Pr.Html_url});
} Catch (Error) {
Console.Error(❌ Error Creating Pull Request:, Error.Message);
}
})();
Setup Instructions
Install Dependencies
Bash
Npm Install @Octokit/Rest
Create A GitHub Personal Access Token
Go To GitHub → Settings → Developer Settings → Personal Access Tokens
Generate A Token With Repo Scope.
Set Environment Variables
Bash
Export GITHUB_TOKEN=Your_token_here
Export REPO_OWNER=Your_username_or_org
Export REPO_NAME=Your_repo
Run The Script
Bash
Node CreateNewsletterPR.Js
<Subheading.Html>
Covid Strings Version That Updates An Existing Newsletter File Instead Of Creating A New One
How To Create A Version That Updates An Existing Newsletter File Instead Of Creating A New One For Covid Strings
Const Fs = Require(Fs);
Const Path = Require(Path);
/**
 * Updates an existing newsletter file by replacing a placeholder
 * or appending new content.
 *
 * @param {string} filePath - Path to the existing newsletter file.
 * @param {string} newContent - The content to insert or replace.
 */
Function UpdateNewsletter(FilePath, NewContent) {
Try {
// Ensure the file exists
If (!Fs.ExistsSync(FilePath)) {
Console.Error(Error: File ${FilePath} Does Not Exist.);
Return;
}
// Read the existing file content
Let FileData = Fs.ReadFileSync(FilePath, Utf8);
// Example: Replace a placeholder {{CONTENT}} with new content
If (FileData.Includes({{CONTENT}})) {
FileData = FileData.Replace({{CONTENT}}, NewContent);
}Else {
// If no placeholder, append the new content at the end
FileData += \N${NewContent};
}
// Write the updated content back to the same file
Fs.WriteFileSync(FilePath, FileData, Utf8);
Console.Log(✅ Newsletter Updated Successfully: ${FilePath});
} Catch (Err) {
Console.Error(❌ Failed To Update Newsletter: ${Err.Message});
}
}
// Example usage:
Const NewsletterPath = Path.Join(__ Dirname, Newsletter.Html);
Const UpdatedSection = <P>New January 2026 Updates Are Here! 🎉</P>;
// Update the newsletter file
UpdateNewsletter(NewsletterPath, UpdatedSection);
<Subheading.Html>
Covid Strings Version That Updates Specific Sections In An HTML Newsletter By Targeting Elements (Like <Div Id=Main-Content>) Using A DOM Parser So You Can Make Structured Edits Instead Of Raw Text Replacement
How To Create A Version That Updates Specific Sections In An HTML Newsletter By Targeting Elements (Like <Div Id=Main-Content>) Using A DOM Parser So You Can Make Structured Edits Instead Of Raw Text Replacement for Covid Strings
/**
 * Example: Updating specific sections of an HTML newsletter
 * using DOM parsing instead of raw text replacement.
 *
 * Works in:
 *  - Browser (uses DOMParser)
 *  - Node.js (requires jsdom)
 */
// Detect environment
Const IsNode = Typeof Window === Undefined;
Async Function UpdateNewsletterHTML(HtmlString, Updates) {
Let Document;
If (IsNode) {
// Node.js: use jsdom
Const { JSDOM } = Await Import(Jsdom);
Const Dom = New JSDOM(HtmlString);
Document = Dom.Window.Document;
} Else {
// Browser: use DOMParser
Const Parser = New DOMParser();
Document = Parser.ParseFromString(HtmlString, Text/Html);
}
// Apply updates based on element selectors
For (Const Selector In Updates) {
Const Element = Document.QuerySelector(Selector);
If (Element) {
Element.InnerHTML = Updates[Selector];
} Else {
Console.Warn(No Element Found For Selector: ${Selector});
}
}
// Return updated HTML
Return IsNode ? Document.DocumentElement.OuterHTML : Document.DocumentElement.OuterHTML;
}
// Example usage
(Async () => {
Const OriginalHTML = 
<Html>
<Head><Title>Newsletter</Title></Head>
<Body>
<Div Id=Header>Old Header</Div>
<Div Id=Main-Content>Old Content</Div>
<Div Id=Footer>Old Footer</Div>
</Body>
</Html>
;
Const Updates = {
#Header: <H1>New Header Title</H1>,
#Main-Content: <P>This Is The Updated Main Content Of The Newsletter.</P>,
#Footer: <Small>Updated Footer © 2026</Small>
};
Const UpdatedHTML = Await UpdateNewsletterHTML(OriginalHTML, Updates);
Console.Log(UpdatedHTML);
})();
<Subheading.Html>
Covid Strings Safe, Transactional Bulk Update Script That Works Directly With Your Newsletter JSON Files So You Can Update Multiple Sections Without Risking Data Loss 
How To Create A Safe, Transactional Bulk Update Script That Works Directly With Your Newsletter JSON Files So You Can Update Multiple Sections Without Risking Data Loss For Covid Strings 
/**
 * Safe, transactional bulk update for newsletter JSON files.
 * 
 * Features:
 * - Creates a timestamped backup before changes.
 * - Applies multiple updates in memory.
 * - Writes atomically using a temp file + rename.
 * - Full error handling to prevent data loss.
 */
Const Fs = Require(Fs);
Const Path = Require(Path);
/**
 * Safely updates a newsletter JSON file with multiple changes.
 * @param {string} filePath - Path to the newsletter JSON file.
 * @param {Object} updates - Key-value pairs of sections to update.
 */
Function BulkUpdateNewsletter(FilePath, Updates) {
Try {
// Validate file existence
If (!Fs.ExistsSync(FilePath)) {
Throw New Error(File Not Found: ${FilePath});
}
// Read and parse the existing JSON
Const OriginalData = Fs.ReadFileSync(FilePath, Utf8);
Let Newsletter;
Try {
Newsletter = JSON.Parse(OriginalData);
} Catch (Err) {
Throw New Error(Invalid JSON Format In ${FilePath}: ${Err.Message});
}
// Create a timestamped backup
Const BackupPath = ${FilePath}.Backup-${Date.Now()}.Json;
Fs.WriteFileSync(BackupPath, OriginalData, Utf8);
Console.Log(Backup Created: ${BackupPath});
// Apply updates in memory
For (Const [Section, Content] Of Object.Entries(Updates)) {
Newsletter[Section] = Content;
}
// Write to a temporary file first
Const TempPath = ${FilePath}.Tmp;
Fs.WriteFileSync(TempPath, JSON.Stringify(Newsletter, Null, 2), Utf8);
// Atomically replace the original file
Fs.RenameSync(TempPath, FilePath);
Console.Log(✅ Newsletter Updated Successfully: ${FilePath});
} Catch (Err) {
Console.Error(❌ Update Failed: ${Err.Message});
}
}
// Example usage:
Const NewsletterPath = Path.Join(__ Dirname, Newsletter.Json);
// Define multiple updates
Const Updates = {
Headline: 🚀 Big News This Week!,
Events: [
{Title: Tech Conference, Date: 2026-02-15},
{Title: Web Dev Meetup, Date: 2026-03-01}
],
Footer: © 2026 My Newsletter. All Rights Reserved.
};
// Run the bulk update
BulkUpdateNewsletter(NewsletterPath, Updates);
{
Headline: Old Headline,
Events: [],
Footer: Old Footer Text
}
{
Headline: 🚀 Big News This Week!,
Events: [
{ Title: Tech Conference, Date: 2026-02-15},
{ Title: Web Dev Meetup, Date: 2026-03-01}
],
Footer: © 2026 My Newsletter. All Rights Reserved.
}
<Subheading.Html>
Covid Strings Online Reference Pull Request
How To Create A Pull Request For Online Articles Or Videos In Covid Strings
/**
 * Create a GitHub Pull Request using JavaScript (Node.js)
 * Requires: npm install @octokit/rest dotenv
 */
Const { Octokit } = Require(@Octokit/Rest);
Require(Dotenv).Config(); // For loading environment variables from .env
// Load GitHub token from environment variable for security
Const GITHUB_TOKEN = Process.Env.GITHUB_TOKEN;
if (!GITHUB_TOKEN) {
Console.Error(❌ Missing GITHUB_TOKEN In Environment Variables.);
Process.Exit(1);
}
// Initialize Octokit with authentication
Const Octokit = New Octokit({Auth: GITHUB_TOKEN });
/**
 * Create a pull request
 * @param {string} owner - Repository owner (username or org)
 * @param {string} repo - Repository name
 * @param {string} head - Branch name with changes (source)
 * @param {string} base - Branch to merge into (target)
 * @param {string} title - Pull request title
 * @param {string} body - Pull request description
 */
Async Function CreatePullRequest(Owner,Repo,Head,Base,Title,Body) {
Try {
Const Response = Await Octokit.Pulls.Create({
Owner,
Repo,
Head, // branch with changes
Base, // branch to merge into
Title,
Body
});
Console.Log(✅ Pull Request Created Successfully!);
Console.Log(🔗 URL: ${Response.Data.Html_url});
} Catch (Error) {
Console.Error(❌ Error Creating Pull Request:, Error.Message);
}
}
// Example usage
CreatePullRequest(
Your-Username,       // GitHub username or org
Your-Repo,           // Repository name
Feature-Branch,      // Source branch
Main,                // Target branch
Add New Feature,     // PR title
This PR Adds A New Feature With Proper Documentation. // PR description
);
Setup Instructions
Install Dependencies
Bash
Npm Init -Y
Npm Install @Octokit/Rest Dotenv
Create .Env File (Never Commit This To GitHub)
GITHUB_TOKEN=Ghp_Your_personal_access_token_here
Generate A GitHub Personal Access Token
Go To GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (Classic).
Give It Repo Scope.
Copy And Paste Into .Env.
Run The Script
Bash
Node Create-Pr.Js
<Subheading.Html>
Covid Strings  Automatically Creating A Branch From A Commit Reference And Then Opens The PR To Make It A Full Online Reference PR Workflow
How To Automatically Create A Branch From A Commit Reference And Then Opens The PR To Make It A Full Online Reference PR Workflow For Covid Strings 
/**
 * Auto-create a branch from a commit and open a PR on GitHub
 * 
 * Requirements:
 *   npm install simple-git @octokit/rest
 *   Set environment variables:
 *     GITHUB_TOKEN   - GitHub Personal Access Token (with repo permissions)
 *     GITHUB_OWNER   - Repository owner (username or org)
 *     GITHUB_REPO    - Repository name
 */
Const SimpleGit = Require(Simple-Git);
Const { Octokit } = Require(@Octokit/Rest);
Const Git = SimpleGit();
Const Octokit = New Octokit({Auth: Process.Env.GITHUB_TOKEN });
/**
 * Create branch from commit and open PR
 * @param {string} commitSha - Commit SHA to branch from
 * @param {string} branchName - New branch name
 * @param {string} prTitle - Pull request title
 * @param {string} prBody - Pull request body
 * @param {string} baseBranch - Branch to merge into (e.g., "main")
 */
Async Function CreateBranchAndPR(CommitSha, BranchName, PrTitle, PrBody, BaseBranch = Main) {
Try {
// Validate environment variables
Const { GITHUB_OWNER, GITHUB_REPO } = Process.Env;
If (!Process.Env.GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
Throw New Error(Missing Required Environment Variables: GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO);
}
Console.Log(Creating Branch ${BranchName} From Commit ${CommitSha}...);
// Fetch all commits to ensure commit exists locally
Await Git.Fetch([--All]);
// Create and checkout new branch from commit
Await Git.Checkout([CommitSha, -B, BranchName]);
// Push branch to remote
Await Git.Push(Origin, BranchName);
Console.Log(Branch ${BranchName} Pushed To Remote.);
// Create PR via GitHub API
Const Pr = Await Octokit.Pulls.Create({
Owner: GITHUB_OWNER,
Repo: GITHUB_REPO,
Title: PrTitle,
Head: BranchName,
Base: BaseBranch,
Body: PrBody
});
Console.Log(✅ Pull Request Created: ${Pr.Data.Html_url});
} Catch (Error) {
Console.Error(❌ Error:, Error.Message);
}
}
// Example usage
(Async () => {
// Replace with your values
Const CommitSha = Abc123def4567890abcdef1234567890abcdef12; // commit hash
Const BranchName = Feature-From-Old-Commit;
Const PrTitle = Feature From Old Commit;
Const PrBody = This PR Was Automatically Created From Commit  + CommitSha;
Await CreateBranchAndPR(CommitSha, BranchName, PrTitle, PrBody, Main);
})();
Setup Instructions
Install Dependencies:
Bash
Npm Install Simple-Git @Octokit/Rest
Set Environment Variables:
Bash
Export GITHUB_TOKEN=Your_personal_access_token
Export GITHUB_OWNER=Stephen_Tiballi 2 @ Gmail_.Com_or_Covid Strings 1
Export GITHUB_REPO=SGTIBAL Covid Strings 1
Run The Script:
Bash
Node CreateBranchAndPR.Js
<Subheading.Html>
Covid Strings  GitHub Action Version So This Workflow Runs Automatically When You Push A Commit Reference
How To Create A  GitHub Action Version So This Workflow Runs Automatically When You Push A Commit Reference
Name: Run JavaScript On Push
# Trigger Workflow On Any Push To Any Branch
On:
Push:
Branches:
- ** # Matches All Branches
Jobs:
Run-Js:
Runs-On: Ubuntu-Latest
Steps:
# Step 1: Check Out The Repository Code
- Name: Checkout Repository
Uses: Actions/Checkout@V4
# Step 2: Set Up Node.Js (JavaScript Runtime)
- Name: Set Up Node.Js
Uses: Actions/Setup-Node@V4
With:
Node-Version: 20 # Use A Stable LTS Version
# Step 3: Install Dependencies (If Package.Json Exists)
- Name: Install Dependencies
Run: |
If [ -F Package.Json ]; Then
Npm Install
Else
Echo No Package.Json Found, Skipping Npm Install.
Fi
# Step 4: Run Your JavaScript File
- Name: Run JavaScript Script
Run: |
If [ -F Script.Js ]; Then
Node Script.Js
Else
Echo No Script.Js Found. Please Add Your JS File.
Exit 1
Fi
// script.js
Console.Log(✅ GitHub Action Triggered By Push!);
Console.Log(Commit Processed At:, New Date().ToISOString());
<Subheading.Html>
Covid Strings Versioned Branches For Older Non-Default Versions And Main Or Master For The Latest Supported Version
How To Create Versioned Branches For Older Non-Default Versions And Main Or Master For The Latest Supported Version For Covid Strings
Name: Versioned Branch Workflow
On:
Push:
Branches:
- Main
- Master
- Support*   # Matches Support/1.0, Support/2.1, Etc.
Jobs:
Handle-Branch:
Runs-On: Ubuntu-Latest
Steps:
- Name: Checkout Repository
Uses: Actions/Checkout@V4
- Name: Setup Node.Js
Uses: Actions/Setup-Node@V4
With:
Node-Version: 20
-Name: Run Branch Gandler
Run: Node Scripts/Branch-Handler.Js
Scripts/Branch-Handler.Js
#!/Usr/Bin/Env Node
/**
 * Branch handler for versioned branches and main/master.
 * This script determines the branch type and runs the appropriate logic.
 */
Const ExecSync =Require(Child_process).ExecSync;
Try {
// Get the current branch name from Git
Const Branch = ExecSync(Git Rev-Parse --Abbrev-Ref HEAD).ToString().Trim();
Console.Log(Current Branch: ${Branch});
If (Branch === Main || Branch === Master) {
Console.Log(✅ Latest Supported Version Branch Detected.);
// Place your build/deploy logic for the latest version here
// Example:
// execSync('npm run build && npm run deploy', { stdio: 'inherit' });
}
Else If (/^support\/\d+\.\d+$/.Test(Branch)) {
Console.Log(📦 Older Supported Version Branch Detected.);
// Place your build/deploy logic for older versions here
// Example:
// execSync('npm run build:legacy && npm run deploy:legacy', { stdio: 'inherit' });
}
Else {
Console.Log(ℹ️ Branch Does Not Match Versioned Or Main/Master Patterns. Skipping.);
}
} Catch (Error) {
Console.Error(❌ Error Determining Branch Type:, Error.Message);
Process.Exit(1);
}
<Subheading.Html>
Covid Strings Automatic Branch Creation To Make Version Management Hands-Free
How To Create An Automatic Branch Creation To Make Version Management Hands-Free For Covid Strings
#!/Usr/Bin/Env Node
/**
 * Automatic Release Branch Creator
 * ---------------------------------
 * - Reads version from package.json
 * - Increments version (patch/minor/major)
 * - Creates and pushes a release branch
 */
Const Fs = Require(Fs);
Const {ExecSync } = Require(Child_process);
Const Path = Require(Path);
// Validate arguments
Const BumpType = Process.Argv[2]; // patch | minor | major
If (![Patch, Minor, Major].Includes(BumpType)) {
Console.Error(Usage: Node CreateReleaseBranch.Js <Patch|Minor|Major>);
Process.Exit(1);
}
Try {
// Step 1: Read package.json
Const PkgPath = Path.Join(Process.Cwd(), Package.Json);
Const Pkg = JSON.Parse(Fs.ReadFileSync(PkgPath, Utf8));
Const OldVersion = Pkg.Version;
// Step 2: Increment version
Const [Major, Minor, Patch] = OldVersion.Split(".").Map(Number);
Let NewVersion;
If (BumpType === Patch) NewVersion = ${Major}.${Minor}.${patch + 1};
If (BumpType === Minor) NewVersion = ${Major}.${Minor + 1}.0;
If (BumpType === Major) NewVersion = ${Major + 1}.0.0;
Pkg.Version = NewVersion;
Fs.WriteFileSync(PkgPath, JSON.Stringify(Pkg, Null, 2) + \N);
Console.Log(Version Updated: ${OldVersion} → ${NewVersion});
// Step 3: Commit version change
ExecSync(Git Add Package.Json, {Stdio: Inherit});
ExecSync(Git Commit -M Chore(Release): Bump Version To ${NewVersion}, {Stdio: Inherit});
// Step 4: Create and push release branch
Const BranchName = Release/V${NewVersion};
ExecSync(Git Checkout -B ${BranchName}, {Stdio: Inherit});
ExecSync(Git Push -U Origin ${BranchName}, { Stdio: Inherit});
Console.Log(✅ Release Branch ${BranchName} Created And Pushed Successfully!);
} Catch (Err) {
Console.Error(❌ Error Creating Release Branch:, Err.Message);
Process.Exit(1);
}
Chmod +X CreateReleaseBranch.Js
Node CreateReleaseBranch.Js Patch
Node CreateReleaseBranch.Js Minor
Node CreateReleaseBranch.Js Major
Name: Auto Release Branch
On:
Push:
Branches:
-Main
Jobs:
Create-Release-Branch:
Runs-On: Ubuntu-Latest
Steps:
- Uses: Actions/Checkout@V4
- Uses: Actions/Setup-Node@V4
With:
Node-Version: 18
- Run: Npm Install
- Run: Node CreateReleaseBranch.Js Patch
Env:
GITHUB_TOKEN: ${{Secrets.GITHUB_TOKEN }}
<Subuheading.Html>
Fan Voting Request
Create A Suggestion For Fan Voting On Covid Strings Versions To Increase User Interaction
<!DOCTYPE Html>
<Html Lang=En>
<Head>
<Meta Charset=UTF-8>
<Meta Name=Viewport Content=Width=Device-Width, Initial-Scale=1.0>
<Title>Fan Voting Poll</Title>
<Style>
Body {
Font-Family: Arial, Sans-Serif;
Background: #F4f4f4;
Padding: 20Px;
}
.Poll-Container {
Background: #Fff;
Padding: 20Px;
Border-Radius: 8Px;
Max-Width: 400Px;
Margin: Auto;
Box-Shadow: 0 2Px 8Px Rgba(0,0,0,0.1);
}
H2 {
Text-Align: Center;
}
.Option {
Display: Flex;
Justify-Content: Space-Between;
Margin: 10Px 0;
Padding: 10Px;
Background: #Eee;
Border-Radius: 5Px;
Cursor: Pointer;
Transition: Background 0.3S;
}
.Option:Hover {
Background: #Ddd;
}
.Results {
Margin-Top: 20Px;
}
.Bar {
Height: 20Px;
Background: #4Caf50;
Border-Radius: 5Px;
}
</Style>
</Head>
<Body>
<Div Class=Poll-Container>
<H2>Vote For Your Favorite Fan Choice</H2>
<Div Id=Options></Div>
<Div Class=Results Id=Results></Div>
</Div>
<Script>
// Poll options
Const PollOptions = [Team A, Team B, Team C];
// Load votes from localStorage or initialize
Let Votes = JSON.Parse(LocalStorage.GetItem(FanVotes)) || Array(PollOptions.Length).Fill(0);
Const OptionsContainer = Document.GetElementById(Options);
Const ResultsContainer = Document.GetElementById(Results);
// Render voting buttons
Function RenderOptions() {
OptionsContainer.InnerHTML = "";
PollOptions.ForEach((Option, Index) => {
Const Btn = Document.CreateElement(Div);
Btn.ClassName = Option;
Btn.TextContent = Option;
Btn.Onclick = () => CastVote(Index);
OptionsContainer.AppendChild(Btn);
});
}
// Cast a vote
Function CastVote(Index) {
Votes[Index]++;
LocalStorage.SetItem(FanVotes, JSON.Stringify(Votes));
RenderResults();
}
// Render results with percentage bars
Function RenderResults() {
ResultsContainer.InnerHTML = <H3>Results:</H3>;
Const TotalVotes = Votes.Reduce((A, B) => A + B, 0) || 1; // avoid division by zero
PollOptions.ForEach((Option, Index) => {
Const Percent = ((Votes[Index] / TotalVotes) * 100).ToFixed(1);
ResultsContainer.InnerHTML += 
<P>${Option}: ${Votes[Index]} Votes (${Percent}%)</P>
<Div Class=Bar Style=Width:${Percent}%;></Div>
;
});
}
// Initial render
RenderOptions();
RenderResults();
<Script>
</Body>
</Html>
<Subheading.Html>
Covid Strings Upgrading To A Real Time Online Voting System
How To Upgrade Covid Strings Fan Voting To A Real Time Online Voting System
// server.js
Const Express = Require(Express);
Const Http = Require(Http);
Const SocketIo = Require(Socket.Io);
Const App = Express();
Const Server = Http.CreateServer(App);
Const Io = SocketIo(Server);
Let Votes = {OptionA: 0, OptionB: 0 }; // Initial vote counts
// Serve static files (frontend)
App.Use(Express.Static(Public));
// Handle socket connections
Io.On(Connection, (Socket) => {
Console.Log(A User Connected);
// Send current votes to new client
Socket.Emit(UpdateVotes, Votes);
// Listen for votes
Socket.On(Vote, (Option) => {
If (Votes.HasOwnProperty(Option)) {
Votes[Option]++;
Io.Emit(UpdateVotes, Votes); // Broadcast updated votes
}
});
Socket.On(Disconnect, () => {
Console.Log(A User Disconnected);
});
});
Server.Listen(3000, () => {
Console.Log(Server Running On Http://Localhost:3000);
});
2. Frontend (HTML + JavaScript)
Create A Folder Named Public And Inside It, Add Index.Html:
Html
<!DOCTYPE Html>
<Html>
<Head>
<Title>Real-Time Voting</Title>
<Style>
Body {Font-Family: Arial, Sans-Serif; Text-Align: Center; }
Button {Padding: 10Px 20Px; Margin: 10Px; Font-Size: 16Px; }
</Style>
</Head>
<Body>
<H1>Vote Now!</H1>
<Button Onclick=CastVote(OptionA)>Vote For Option A</Button>
<Button Onclick=CastVote(OptionB)>Vote For Option B</Button>
<H2>Results</H2>
<P>Option A: <Span Id=VotesA>0</Span></P>
<P>Option B: <Span Id=VotesB>0</Span></P>
<Script Src=/Socket.Io/Socket.Io.Js><Script>
<Script>
Const Socket = Io();
// Send vote to server
Function CastVote(Option) {
Socket.Emit(Vote, Option);
}
// Update vote counts in real-time
Socket.On(UpdateVotes, (Votes) => {
Document.GetElementById(VotesA).TextContent = Votes.OptionA;
Document.GetElementById(VotesB).TextContent = Votes.OptionB;
});
<Script>
</Body>
</Html>
Npm Init-Y
Npm Install Express Socket.Io
Node Server.Js
Http://Localhost:3000
<Subheading.Html>
Covid Strings Including A Live Chart So Votes Update Visually In Real Time 
How To Include A Live Chart So Votes Update Visually In Real Time For Covid Strings
<!DOCTYPE Html>
<Html Lang=En>
<Head>
<Meta Charset=UTF-8>
<Meta Name=Viewport Content=Width=Device-Width, Initial-Scale=1.0>
<Title>Live Vote Chart</Title>
<!-- Chart.js CDN -->
<Script Src=Https://Cdn.Jsdelivr.Net/Npm/Chart.Js><Script>
<Style>
Body {
Font-Family: Arial, Sans-Serif;
Text-Align: Center;
Margin: 20Px;
}
Canvas {
Max-Width: 600Px;
Margin: Auto;
}
Button {
Margin: 5Px;
Padding: 10Px 15Px;
Font-Size: 16Px;
}
</Style>
</Head>
<Body>
<H2>Live Voting Chart</H2>
<Canvas Id=VoteChart></Canvas>
<!-- Voting Buttons -->
<Div>
<Button Onclick=CastVote(Option A)>Vote Option A</Button>
<Button Onclick=CastVote(Option B)>Vote Option B</Button>
<Button Onclick=CastVote(Option C)>Vote Option C</Button>
</Div>
<Script>
// Initial vote data
Let VoteData = {
Option A: 0,
Option B: 0,
Option C: 0
};
// Create Chart.js bar chart
Const Ctx = Document.GetElementById(VoteChart).GetContext(2D);
Const VoteChart = New Chart(Ctx, {
Type: Bar,
Data: {
Labels: Object.Keys(VoteData),
Datasets: [{
Label: Votes,
Data: Object.Values(VoteData),
BackgroundColor: [#4CAF50, #2196F3, #FF9800]
}]
},
Options: {
Responsive: True,
Animation: {
Duration: 300 // smooth update
},
Scales: {
Y: {
BeginAtZero: True,
Precision: 0
}
}
}
});
// Function to cast a vote
Function CastVote(Option) {
If (VoteData.HasOwnProperty(Option)) {
VoteData[Option] += 1;
UpdateChart();
}
}
// Update chart with new data
Function UpdateChart() {
VoteChart.Data.Datasets[0].Data = Object.Values(VoteData);
VoteChart.Update();
}
// Simulate real-time updates (e.g., from server)
SetInterval(() => {
// Randomly increment a vote to simulate incoming data
Const Options = Object.Keys(VoteData);
Const RandomOption = Options[Math.Floor(Math.Random() * Options.Length)];
VoteData[RandomOption] += 1;
UpdateChart();
}, 5000); // every 5 seconds
<Script>
</Body>
</Html>
<Subheaing.Html>
Covid Strings WebSocket-Enabled Version So The Chart Updates Instantly When Someone Votes From Another Device
How To Create A WebSocket-Enabled Version So The Chart Updates Instantly When Someone Votes From Another Device For Covid Strings 
// server.js
Const WebSocket = Require(Ws);
Const Http = Require(Http);
// Store votes in memory (could be replaced with DB)
Let Votes = {OptionA: 0, OptionB: 0 };
// Create HTTP server (optional, for hosting static files)
Const Server = Http.CreateServer();
Const Wss = New WebSocket.Server({Server });
// Broadcast helper
Function Broadcast(Data) {
Const Message = JSON.Stringify(Data);
Wss.Clients.ForEach(Client => {
If (Client.ReadyState === WebSocket.OPEN) {
Client.Send(Message);
}
});
}
Wss.On(Connection, Ws => {
Console.Log(New Client Connected);
// Send current votes to new client
Ws.Send(JSON.Stringify({Type: Update, Votes }));
Ws.On(Message, Message => {
Try {
Const Data = JSON.Parse(Message);
If (Data.Type === Vote && Data.Option) {
If (Votes.HasOwnProperty(Data.Option)) {
Votes[Data.Option] += 1;
Broadcast({Type: Update, Votes });
}
}
} Catch (Err) {
Console.Error(Invalid Message Received:, Err);
}
});
Ws.On(Close, () => {
Console.Log(Client Disconnected);
});
});
Server.Listen(8080, () => {
Console.Log(WebSocket Server Running On Ws://Localhost:8080);
});
2. Client HTML + JavaScript
Save As Index.Html (Open In Browser):
Html
<!DOCTYPE Html>
<Html Lang=En>
<Head>
<Meta Charset=UTF-8>
<Title>Live Voting Chart</Title>
<Script Src=Https://Cdn.Jsdelivr.Net/Npm/Chart.Js><Script>
<Style>
Body {Font-Family: Arial, Sans-Serif; Text-Align: Center; }
Button {Margin: 10Px; Padding: 10Px 20Px; Font-Size: 16Px; }
</Style>
</Head>
<Body>
<H1>Live Voting</H1>
<Canvas Id=VoteChart Width=400 Height=200></Canvas>
<Br>
<Button Onclick=SendVote(OptionA)>Vote Option A</Button>
<Button Onclick=SendVote(OptionB)>Vote Option B</Button>
<Script>
Let Ws;
Let Chart;
// Connect to WebSocket server
Function ConnectWebSocket() {
Ws = New WebSocket(Ws://Localhost:8080);
Ws.Onopen = () => Console.Log(Connected To WebSocket Server);
Ws.Onmessage = (Event) => {
Try {
Const Data = JSON.Parse(Event.Data);
If (Data.Type === Update && Data.Votes) {
updatechart(data.votes);
}
} catch (err) {
console.error(error parsing message:, err);
}
};
ws.onclose = () => {
console.log(disconnected. reconnecting in 3s...);
settimeout(connectwebsocket, 3000);
};
}
// send vote to server
function sendvote(option) {
if (ws && ws.readystate === websocket.open) {
ws.send(json.stringify({type: vote, option }));
}
}
// initialize chart
function initchart() {
const ctx =document.getelementbyid(votechart).getcontext(2d);
chart = new chart(ctx, {
type: bar,
data: {
labels: [option a, option b],
datasets: [{
label: votes,
data: [0, 0],
backgroundcolor: [#4caf50, #2196f3]
}]
},
options: {
responsive: true,
scales: {
y: {beginatzero: true }
}
}
});
}
// update chart data
function updatechart(votes) {
chart.data.datasets[0].data = [votes.optiona, votes.optionb];
chart.update();
}
//start
initchart();
connectwebsocket();
<script>
</body>
</html>
how to run
install dependencies:
bash
npm init-y
npm install ws
run the websocket server:
bash
node server.js
open index.html
<subheading.html>
covid strings single-file self-hosting version for a fan voting pull request 
how to create a single-file self-hosting version for a covid strings fan voting pull request 
<!doc type html>
<html lang=en>
<head>
<meta charset=utf-8>
<title>fan voting poll</title>
<style>
body {
font-family: arial, sans-serif;
background: #f4f4f4;
padding: 20px;
max-width: 500px;
margin: auto;
}
h1 {
text-align: center;
}
.option {
background: #fff;
padding: 15px;
margin: 10px 0;
border-radius: 8px;
cursor: pointer;
border: 2px solid transparent;
transition: 0.2s;
}
.option:hover {
border-color: #007bff;
}
.results {
margin-top: 20px;
background: #fff;
padding: 15px;
border-radius: 8px;
}
.bar {
height: 20px;
background: #007bff;
border-radius: 5px;
}
</style>
</head>
<body>
<h1>fan voting poll</h1>
<div id=poll></div>
<div class=results id=results style=display:none;></div>
<script>
(function() {
// poll configuration
const pollquestion = who is your favorite character?;
const polloptions = [alice, bob, charlie, diana];
const storagekey = fanvotingpoll;
// load votes from localstorage or initialize
let votes = json.parse(localstorage.getitem(storagekey)) || array(polloptions.length).fill(0);
let hasvoted = localstorage.getitem(storagekey + _ voted) === true;
const pollcontainer=document.getelementbyid(poll);
const resultscontainer =document.getelementbyid(results);
// render poll
function renderpoll() {
pollcontainer.innerhtml= <h2>${pollquestion}</h2>;
polloptions.foreach((option,index) => {
const div = document.createelement(div);
div.classname =option;
div.textcontent =option;
div.onclick = () => castvote(index);
pollcontainer.appendchild(div);
});
if (hasvoted) {
showresults();
}
}
// cast a vote
function castvote(index) {
if (hasvoted) {
alert(you have already voted!);
return;
}
votes[index]++;
localstorage.setitem(storagekey, json.stringify(votes));
localstorage.setitem(storagekey + _ voted, true);
hasvoted = true;
showresults();
}
// show results
function showresults() {
const totalvotes =votes.reduce((a, b) => a + b, 0);
resultscontainer.innerhtml= <h3>results:</h3>;
polloptions.foreach((option,index) => {
const percent = totalvotes ? ((votes[index] / totalvotes) * 100).tofixed(1) : 0;
resultscontainer.innerhtml += 
<p>${option}: ${votes[index]} votes (${percent}%)</p>
<div class=bar style=width:${percent}%;></div>
;
});
resultscontainer.style.display =block;
}
renderpoll();
})();
<script>
</body>
</html>
<subheading.html>
covid strings supporting multiple polls in one file or exports/imports votes for sharing results across devices
how to support multiple polls in one file or exports/imports votes for sharing covid strings fan voting results across devices
// polls.js
const fs = require(fs);
const path = require(path);
// path to store votes persistently
const data_file = path.join(__ dirname, polldata.json);
// load existing data or initialize
function loaddata() {
try {
if (fs.existssync(data_file)) {
return json.parse(fs.readfilesync(data_file, utf8));
}
} catch (err) {
console.error(error loading data:, err);
}
return {}; // no data yet
}
// save data to file
function savedata(data) {
try {
fs.writefilesync(data_file,json.stringify(data,null, 2),utf8);
} catch (err) {
console.error(error saving data:,err);
}
}
let polls = loaddata();
/**
 * create a new poll
 * @param {string} pollid - unique poll identifier
 * @param {string} question - poll question
 * @param {string[]} options - array of answer options
 */
function createpoll(pollid, question, options) {
if (polls[pollid]) {
throw new error(poll with id ${pollid} already exists.);
}
polls[pollid] = {
question,
options,
votes: array(options.length).fill(0)
};
savedata(polls);
}
/**
 * vote on a poll
 * @param {string} pollid - poll id
 * @param {number} optionindex - index of the chosen option
 */
function vote(pollid, optionindex) {
if (!polls[pollid]) throw new error(poll not found.);
if (optionindex < 0 || optionindex >= polls[pollid].options.length) {
throw new error(invalid option index.);
}
polls[pollid].votes[optionindex]++;
savedata(polls);
}
/**
 * get poll results
 * @param {string} pollid
 * @returns {object} poll data
 */
function getresults(pollid) {
if (!polls[pollid]) throw new error(poll not found.);
return polls[pollid];
}
/**
 * export all polls to json string
 */
function exportpolls() {
return json.stringify(polls,null, 2);
}
/**
 * import polls from json string
 */
function importpolls(jsonstring) {
try {
const imported =json.parse(jsonstring);
if (typeof imported !== object) throw new error(invalid data format.);
polls =imported;
savedata(polls);
} catch (err) {
throw new error(failed to import polls: + err.message);
}
}
module.exports = {
createpoll,
vote,
getresults,
exportpolls,
importpolls
};
app.js — example usage
// app.js
const polls = require(./polls);
try {
// create multiple polls
polls.createpoll(poll1, whats your favorite color?, [red, blue, green]);
polls.createpoll(poll2, best programming language?, [javascript, python, c++]);
// cast votes
polls.vote(poll1, 1); // vote for blue
polls.vote(poll2, 0); // vote for javascript
// show results
console.log(poll 1 results:, polls.getresults(poll1));
console.log(poll 2 results:, polls.getresults(poll2));
// export polls to share
const exporteddata =polls.exportpolls();
console.log(\nexported poll data:\n, exporteddata);
// import polls (simulate receiving from another device)
polls.importpolls(exporteddata);
console.log(\nimported polls:, polls.getresults(poll1));
} catch (err) {
console.error(error:, err.message);
}
<subheading.html>
image gif request
a pull request for the image used in each version of my playncanvas file covid strings 1 
gif the image i use in playcanvas for each version (colors of rainbow in strings for 1)
/**
 * create a github pull request with a gif in the description
 * requirements:
 *   - node.js 18+
 *   - unstall dependencies: npm install node-fetch
 *   - set environment variables:
 *       github_token   -> github personal access token (repo scope)
 *       github_owner   -> tepository owner (username or org)
 *       github_repo    -> repository name
 *       gipy_api_key  -> giphy api key (public beta key works for testing)
 */
import fetch from node-fetch;
async function getgifurl(searchterm) {
const apikey=process.env.giphy_api_key;
const url = https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${encodeuricomponent(searchterm)}&limit=1&rating=g;
const res =await fetch(url);
if (!res.ok) throw new error(giphy api error: ${res.statustext});
const data = await res.json();
if (!data.data.length) throw new error(no gif found for search term);
return data.data[0].images.original.url;
}
async function createpullrequest(branchname, basebranch, title, gifurl) {
const token=process.env.github_token;
const owner=process.env.github_owner;
const repo = process.env.github_repo;
const apiurl=https://api.github.com/repos/${owner}/${repo}/pulls;
const body = {
title,
head: branchname,
base: basebranch,
body: here’s a celebratory gif:\n\n![celebration](${gifurl})
};
const res =await fetch(apiurl, {
method: post,
headers: {
authorization: token ${token},
accept: application/vnd.github+json,
content-type: application/json
},
body: json.stringify(body)
});
if (!res.ok) {
const errtext = await res.text();
throw new error(github api error: ${res.status} - ${errtext});
}
const prdata = await res.json();
console.log(✅ pull request created: ${prdata.html_url});
}
(async () => {
try {
// step 1: get a gif url from giphy
const gifurl =await getgifurl(celebration);
// step 2: create a pull request with the gif in the body
await createpullrequest(
feature-branch, // your branch name
main,          // base branch
add new feature 🎉,
gifurl
);
} catch (err) {
console.error(❌ error:, err.message);
}
})();
setup instructions
install dependencies:
bash
npm install node-fetch
set environment variables:
bash
export github_token=your_github_pat
export github_owner=stephen tiballi 2 @ gmail.com
export github_repo=covid strings 1
export giphy_api_key=your_giphy_api_key
(you can use giphy’s public beta key dc6zatoxfjmzc for testing.)
run the script:
bash
node create-pr-with-gif.js
<subheading.html>
github action workflow version so the gif pr is created automatically when you push a branch
how to create a github action workflow version so the gif pr is created automatically when you push a branch
name: auto create pr on push
on:
push:
branches-ignore:
-main  # avoid triggering when pushing to main
jobs:
create-pr:
runs-on: ubuntu-latest
steps:
# step 1: checkout the repository
-name: checkout repository
uses: actions/checkout@v4
# step 2: set up node.js (for js projects)
-name: set up node.js
uses: actions/setup-node@v4
with:
node-version: 18 # change if needed
# step 3: install dependencies (optional)
- name: install dependencies
run: npm ci
# step 4: run build/tests (optional but recommended)
-name: run tests
run: npm test || echo tests failed, but continuing to pr creation
# step 5: create pull request
-name: create pull request
uses: peter-evans/create-pull-request@v6
with:
token: ${{secrets.github_token }}
commit-message: auto pr from branch ${{github.ref_name }}
title: auto pr: ${{github.ref_name }} → main
body: |
this pr was automatically created from branch ${{github.ref_name }}.
please review the changes.
base: main
branch: ${{github.ref_name }}
draft: false
branches-ignore:
- main
branches:
- feature/
<subheading.html>
covid strings extending this workflow so that it adds a gif automatically to the pr description when it’s created
how to extend this workflow so that it adds a gif automatically to the pr description when it’s created
# .github/workflows/add-gif-to-pr.yml
name: add gif to pr
on:
pull_request:
types: [opened] # trigger only when pr is created
jobs:
add-gif:
runs-on: ubuntu-latest
steps:
-name: checkout repository
uses: actions/checkout@v4
-name: run gif adder script
uses: actions/github-script@v7
with:
github-token: ${{secrets.github_token}}
script: |
const fetch = require(node-fetch);
// giphy api key stored in github secrets
const giphy_api_key = process.env.giphy_api_key;
if (!giphy_api_key) {
throw new error(missing giphy_api_key in repository secrets);
}
// fetch a random gif from giphy
const keyword =celebration; // change keyword as needed
const giphyurl = https://api.giphy.com/v1/gifs/random?api_key=${giphy_api_key}&tag=${encodeuricomponent(keyword)}&rating=pg;
let gifurl;
try {
const res =await fetch(giphyurl);
if (!res.ok) throw new error(giphy api error: ${res.statustext});
const data =await res.json();
gifurl = data.data?.images?.downsized_medium?.url;
if (!gifurl) throw new error(no gif found for keyword);
} catch (err) {
core.setfailed(failed to fetch gif: ${err.message});
return;
}
// get current pr body
const {data: pr} = await github.rest.pulls.get({
owner: context.repo.owner,
repo: context.repo.repo,
pull_number: context.payload.pull_request.number
});
// append gif markdown to pr body
const updatedbody = ${pr.body || ""}\n\n![fun gif](${gifurl});
// update pr description
await github.rest.pulls.update({
owner: context.repo.owner,
repo: context.repo.repo,
pull_number: context.payload.pull_request.number,
body: updatedbody
});
console.log(gif added to pr: ${gifurl});
env:
giphy_api_key: ${{secrets.giphy_api_key}}
<subheading.html>
covid strings node.js standalone executable using the official sea feature
how to make node.js standalone executable for covid strings using the official sea feature 
#!/usr/bin/env node
// app.js — your node.js application entry point
// robust input handling
try {
const name =process.argv[2] || world;
console.log(hello, ${name}! this is a standalone node.js executable.);
} catch (err) {
console.error(unexpected error:, err);
process.exit(1);
}
2. create sea config (sea-config.json)
json
{
main: app.js,
output: app.blob,
disableexperimentalseawarning: true
}
main → entry file
output → blob file that will be embedded into node binary
3. generate the sea blob
run:
bash
node --experimental-sea-config sea-config.json
this creates app.blob.
4. copy node binary & inject blob
bash
# copy the node binary (so you dont overwrite your system node)
cp $(command -v node) app
# inject the blob into the copied binary
npx postject app node_sea_blob app.blob \
--sentinel-fuse node_sea_fuse_fce680ab2cc467b6e072b8b5df1996b2
postject is an official node.js helper for embedding the blob.
install it if missing:
bash
npm install -g postject
5. nake executable & run
bash
chmod +x app
./app alice
output:
hello, alice! this is a standalone node.js executable.
<subheading.html>
covid strings creating a one-command build script so you can compile and package your node.js app into a standalone binary automatically
how to create a one-command build script so you can compile and package your node.js app into a standalone binary automatically
npm install --save-dev pkg
2. update package.json
add a bin entry (entry point) and a build script:
json
{
name: my-node-app,
version: 1.0.0,
bin: index.js,
scripts: {
build: node build.js
},
pkg: {
targets: [
node18-linux-x64,
node18-macos-x64,
node18-win-x64
],
outputpath: dist
},
devdependencies: {
pkg: ^5.8.1
}
}
note: adjust node18 to your desired node.js version.
3. create build.js (one-command build script)
#!/usr/bin/env node
/**
 * build.js
 * one-command build script to package Node.js app into standalone binaries.
 */
const {execsync} = require(child_process);
const fs =require(fs);
const path = require(path);
try {
const distdir = path.join(__ dirname, dist);
// clean old builds
if (fs.existssync(distdir)) {
fs.rmsync(distdir, {recursive: true, force: true });
console.log(🧹 cleaned old build files.);
}
// run pkg to build executables
console.log(📦 building standalone binaries...);
execsync(npx pkg ., {stdio: inherit});
console.log(✅ build complete! files are in./dist);
} catch (err) {
console.error(❌ build failed:, err.message);
process.exit(1);
}
4. run the build
bash
npm run build
5. example output
dist/
 ├── my-node-app-linux
 ├── my-node-app-macos
 └── my-node-app-win.exe
<subheading.html>
covid strings attaching the gif directly to the pull request 
how to attach the gif used as an image in covid strings directly to the pull request 
/**
 * attach a gif to a github pull request as a comment
 * requirements:
 *  - node.js 18+
 *  - npm install @octokit/rest
 *  - a github personal access token (with repo permissions)
 */
import {octokit } from @octokit/rest;
import fs from fs;
import path from path;
// ====== configuration ======
const github_token = process.env.github_token; //store token in env variable
const owner = your-username-or-org;          // e.g., "octocat"
const repo=your-repo;                      // e.g., "hello-world"
const pull_number = 1;                         //pr number
const gif_paht =./funny.gif;                //path to your gif file
// ===========================
// validate environment
if (!github_token) {
console.error(❌ please set github_token in your environment.);
process.exit(1);
}
// initialize github api client
const octokit=new octokit({auth: github_token});
async function attachgiftopr() {
try {
// step 1: read gif file
if (!fs.existssync(gif_path)) {
throw new rrror(gif file not found: ${gif_path});
}
// step 2: upload gif to github via issue comment
// github comments support markdown with image embedding
const giffilename =path.basename(gif_path);
const gifdata=fs.readfilesync(gif_path);
// option 1: host gif externally (recommended for large files)
// for demo, we'll use github's own image hosting via markdown
// you can drag & drop the gif into a comment manually to get a url
// here, we assume you already have a hosted gif url:
const hostedgifurl =https://media.giphy.com/media/jix9t2j0ztn9s/giphy.gif;
// step 3: post comment with gif
const commentbody = ![gif](${hostedgifurl});
await octokit.issues.createcomment({
owner: owner,
repo: repo,
issue_number: pull_number,
body: commentbody
});
console.log(✅ gif attached to pr #${pull_number});
} catch (error) {
console.error(❌ error attaching gif:, error.message);
}
}
attachgiftopr();
![alt text](gif_url)
export github_token=your_token_here
<subheading.html>
covid strings hosting the gif on an external service like giphy or github pages
how to host the gif on an external service like giphy or github pages
/**
 * upload a gif to giphy using their api
 * requirements:
 *   1. install axios: npm install axios form-data
 *   2. get an api key from https://developers.giphy.com/
 */
const axios =require(axios);
const formdata =require(form-data);
const fs = require(fs);
const api_key = your_giphy_api_key; // replace with your giphy api key
const gif_path = ./mygif.gif; // path to your local gif file
async function uploadgif() {
try {
// prepare form data
const form =new formdata();
form.append(file,fs.createreadstream(gif_path));
form.append(api_key, api_key);
form.append(tags,example,upload,test);
form.append(source_post_url, https://yourwebsite.com);
// send post request to giphy
const response=await axios.post(
https://upload.giphy.com/v1/gifs,
form,
{headers: form.getheaders() }
);
console.log(gif uploaded successfully!);
console.log(gif id:, response.data.data.id);
console.log(view it at: https://giphy.com/gifs/${response.data.data.id});
} catch (error) {
console.error(error uploading gif:, error.response?.data || error.message);
}
}
uploadgif();
2. hosting on github pages
if you just want to host Aa gif file Ppblicly:
create a github repository.
add your gif file to the repo (e.g., assets/mygif.gif).
enable github pages in repo settings (set branch to main and folder to /or/docs).
access your gif at:
https://<username>.github.io/<repo-name>/assets/mygif.gif
example html to embed it:
html
<!doc type html>
<html>
<head>
<title>my gif</title>
</head>
<body>
<h1>hosted gif example</h1>
<img src=https://<username>.github.io/<repo-name>/assets/mygif.gif alt=my gif>
</body>
</html>
<subheading.html>
covid strings secure node.js proxy version that hides your giphy api key but still lets the browser upload directly 
how to create a secure node.js proxy version that hides your giphy api key but still lets the browser upload directly for covid strings
// server.js
require(dotenv).config(); // load .env variables
const express =require(express);
const fetch=require(node-fetch); // for making API requests
const cors =require(cors);
const ratelimit =require(express-rate-limit);
const app =express();
const port = process.env.port || 3000;
// enable cors for browser access
app.use(cors());
// apply rate limiting to prevent abuse
const limiter = ratelimit({
windowms: 60 * 1000, // 1 minute
max: 30, // limit each IP to 30 requests per minute
message: {error: too many requests, please try again later.}
});
app.use(limiter);
// proxy endpoint for giphy search
app.get(/giphy/search, async (req,res) => {
try {
const query = req.query.q;
if (!query) {
return res.status(400).json({error: missing search query parameter q});
}
const apikey =process.env.giphy_api_key;
if (!apikey) {
return res.status(500).json({error: server misconfiguration: api key missing });
}
// forward request to giphy api
const giphyurl =https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${encodeuricomponent(query)}&limit=10&rating=g;
const response = await fetch(giphyurl);
if (!response.ok) {
return res.status(response.status).json({error: failed to fetch from giphy api});
}
const data =await response.json();
res.json(data); // send json back to browser
} catch (err) {
console.error(proxy error:, err);
res.status(500).json({error: internal server error});
}
});
app.listen(port, () => {
console.log(secure giphy proxy running on http://localhost:${port});
});
.env (never commit this to github)
giphy_api_key=your_real_giphy_api_key_here
frontend example (javascript in browser)
html
<! doc type html>
<html>
<head>
<title>giphy search via secure proxy</title>
</head>
<body>
<input id=search placeholder=search giphy.../>
<button onclick=searchgiphy()>search</button>
<div id=results></div>
<script>
async function searchgiphy() {
const query =document.getelementbyid(search).value;
if (!query) return alert(enter a search term);
try {
const res = await fetch(http://localhost:3000/giphy/search?q=${encodeuricomponent(query)});
const data = await res.json();
const resultsdiv = document.getelementbyid(results);
resultsdiv.innerhtml = '';
if (data.data) {
data.data.foreach(gif => {
const img =document.createelement(img);
img.src =gif.images.fixed_height.url;
resultsdiv.appendchild(img);
});
} else {
resultsdiv.innerhtml = <p>no results found.</p>;
}
} catch (err) {
console.error(err);
alert(error fetching gifs);
}
}
<script>
</body>
</html>
<subheading.html>
covid strings version with https + api key rotation
how to create a version with https + api key rotation for covid strings gif pull requests
/**
 * example: https api request with automatic api key rotation
 * requirements: node.js 18+ (for native fetch) or install node-fetch for older versions
 */
import https from https;
import fs from fs;
import path from path;
// configuration
const config_path= path.join(process.cwd(), config.json);
let apikey = loadapikey();
// load api key from config file or environment variable
function loadapikey() {
try {
if (process.env.api_kye) {
return process.env.api_key;
}
const config = json.parse(fs.readfilesync(config_path, utf8));
if (!config.apikey) throw new error(api key missing in config.json');
return config.apikey;
} catch (err) {
console.error(error loading api key:, err.message);
process.exit(1);
}
}
// simulated secure api key rotation function
async function rotateapikey() {
try {
console.log(rotating api key...);
// in real-world: fetch from secure vault (azure key vault, aws secrets manager, etc.)
const newkey = key_${date.now()}; // simulated new key
apikey = newkey;
// save to config.json
fs.writefilesync(config_path, json.stringify({apikey: newkey }, null, 2));
console.log(api key rotated successfully:, newkey);
} catch (err) {
console.error(failed to rotate api key:,err.message);
}
}
// https request function
function makesecurerequest(endpoint) {
return new promise((resolve, reject) => {
const options = {
hostname: api.example.com, // replace with your api host
path: endpoint,
method: get,
headers: {
authorization: bearer ${apikey},
content-type: application/json
},
agent: new https.agent({keepalive:true })
};
const req = https.request(options,(res) => {
let data = '';
res.on(data, chunk => data += chunk);
res.on(end, () => {
if (res.statuscode === 401) {
reject(new error(unauthorized - api key may be invalid));
} else {
resolve({status: res.statuscode, body: data });
}
});
});
req.on(error, reject);
req.end();
});
}
// schedule api key rotation every 10 minutes
setinterval(rotateapikey, 10 * 60 * 1000);
// example usage
(async () => {
try {
const response =await makesecurerequest(/v1/data);
console.log(response:, response);
} catch (err) {
console.error(request failed:, err.message);
// if unauthorized, rotate key immediately
if (err.message.includes(unauthorized)) {
await rotateapikey();
}
}
})();
{apikey: initial_key_123}
<subheading.html>
covid strings upgrading to real azure key vault api key rotation 
how to upgrade to real azure key vault api key rotation for covid strings 
npm install @azure/identity @azure/keyvault-keys
2. javascript code for key rotation
// import azure sdk modules
const {defaultazurecredential } = require(@azure/identity);
const {keyclient } = require(@azure/keyvault-keys);
async function rotatekey() {
try {
// replace with your key vault name and key name
const keyvaultname=your_key_vault_name;
const keyname = your_key_name;
// construct the key vault url
const keyvaulturl = https://${keyvaultname}.vault.azure.net;
// authenticate using defaultazurecredential
// This works with azure cli login, managed identity, or environment variables
const credential = new defaultazurecredential();
// create a keyclient
const client =new keyclient(keyvaulturl, credential);
console.log(rotating key: ${keyname} in vault: ${keyvaultname});
// manual rotation: create a new version of the key
const newkey=await client.rotatekey(keyname);
console.log(✅ new key version created: ${newkey.properties.version});
// optional: configure automatic rotation policy
const rotationpolicy = await client.updatekeyrotationpolicy(keyname, {
// rotate every 90 days
lifetimeactions: [
{
trigger: {timeaftercreate: p90d}, // iso 8601 duration
action: {type: rotate }
}
],
// notify 30 days before expiry
expirytime: p180d
});
console.log(✅ rotation policy updated:, rotationpolicy);
} catch (err) {
console.error(❌ error rotating key:, err.message);
if (err.response) {
console.error(azure response:, err.response.body);
}
}
}
// run the rotation function
rotatekey();
3. authentication setup
defaultazurecredential supports multiple authentication methods:
local development:
bash
az login
environment variables:
bash
export azure_client_id=your-client-id
export azure_tenant_id=your-tenant-id
export azure_client_secret=your-client-secret
<subheading.html>
covid strings typescript version with full type safety and intelliSense for azure key vault key rotation
how to create a typescript version with full type safety and intellisense for azure key vault key rotation in covid strings 
/**
 * azure key vault key rotation - typescript example
 * 
 * requirements:
 *   npm install @azure/keyvault-keys @azure/identity
 *   set environment variables:
 *     azure_client_id, azure_tenant_id, azure_client_secret, key_vault_url, key_name
 */
import {defaultazurecredential} from @azure/identity;
import {keyclient, keyvaultkey} from @azure/keyvault-keys;
// strongly typed environment variables
interface envconfig {
azure_client_id: string;
azure_tenant_id: string;
azure_client_secret: string;
key_vault_url: string;
key_name: string;
}
// validate and load environment variables
function loadenv(): envconfig {
const requiredvars: (keyof envconfig)[] = [
azure_client_id,
azure_tenant_id,
azure_client_secret,
key_vault_url,
key_name
];
const config: partial<envconfig> = {};
for (const key of requiredvars) {
const value = process.env[key];
if (!value) {
throw new error(missing required environment variable: ${key});
}
config[key] = value;
}
return config as envconfig;
}
async function rotatekey(): promise<void> {
try {
const env = loadenv();
// authenticate using defaultazurecredential
const credential = new defaultazurecredential();
// create a keyclient instance
const keyclient=new keyclient(env.key_vault_url,credential);
console.log(🔄 rotating key: ${env.key_name} in vault: ${env.key_vault_url});
// rotate the key
const rotatedkey: keyvaultkey = await keyclient.rotatekey(env.key_name);
console.log(✅ key rotated successfully!);
console.log(key name: ${rotatedkey.name});
console.log(key id: ${rotatedkey.id});
console.log(key type: ${rotatedkey.keytype});
console.log(updated on: ${rotatedkey.properties.updatedon});
} catch (error) {
if (error instanceof error) {
console.error(❌ error rotating key: ${error.message});
} else {
console.error(❌ unknown error occurred during key rotation.);
}
process.exit(1);
}
}
// run the rotation
rotatekey();
npm init-y
npm install typescript ts-node @azure/keyvault-keys @azure/identity
npx tsc--init
export azure_client_id=your-client-id
export azure_tenant_id=your-tenant-id
export azure_client_secret=your-client-secret
export key_vault_url=https://your-vault-name.vault.azure.net/
export key_name=your-key-name
npx ts-node rotatekey.ts
<subheading.html>
covid strings automatic scheduled rotation so the key rotates on a schedule without manual execution 
how to program automatic scheduled rotation so the key rotates on a schedule without manual execution 
/**
 * enable automatic key rotation for a cloud kms key.
 * 
 * prerequisites:
 * 1. install dependencies: npm install @google-cloud/kms
 * 2. authenticate: gcloud auth application-default login
 * 3. ensure the service account has roles/cloudkms.admin
 */
const {keymanagementserviceclient} = require(@google-cloud/kms);
async function setautomatickeyrotation() {
// todo: replace with your values
const projectid = your_project_id;
const locationid = us-east1; // e.g., 'us-east1'
const keyringid = your_key_ring;
const keyid = your_key_name;
// rotation period in seconds (e.g., 30 days)
const rotationperiodseconds = 30 * 24 * 60 * 60;
// first rotation date (rfc 3339 format)
const nextrotationtime = {
seconds: math.floor(date.now() / 1000) + rotationperiodseconds,
};
const client=new keymanagementserviceclient();
const keyname=client.cryptokeypath(projectid, locationid, keyringid, keyid);
try {
const [updatedkey] = await client.updatecryptokey({
cryptokey: {
name: keyname,
rotationperiod: {seconds: rotationperiodseconds },
nextrotationtime,
},
updatemask: {
paths: [rotation_period, next_rotation_time],
},
});
console.log(✅ automatic rotation enabled for key: ${updatedkey.name});
console.log(🔄 rotation period: ${rotationperiodseconds / (24 * 60 * 60)} days);
console.log(📅 next rotation: ${updatedkey.nextrotationtime});
} catch (err) {
console.error(❌ error enabling automatic rotation:, err.message);
}
}
setautomatickeyrotation();
If You’re Using AWS KMS
aws kms supports automatic yearly rotation for customer-managed keys with a single api call:
import {kmsclient, enablekeyrotationcommand } from @aws-sdk/client-kms;
const client =new kmsclient({region: us-east-1});
async function enableawskeyrotation() {
try {
await client.send(new enablekeyrotationcommand({
keyid: your_key_id
}));
console.log(✅ automatic yearly rotation enabled for aws kms key.);
} catch (err) {
console.error(❌ error enabling rotation:, err.message);
}
}
enableawskeyrotation();
<subheading.html>
covid strings installing a aws kms and a custom rotation schedule instead of the default yearly rotation
how to Install a aws kms and a custom rotation schedule instead of the default yearly rotation for covid strings
// install dependencies first:
// npm install aws-cdk-lib constructs
const cdk = require(aws-cdk-lib);
const kms=require(aws-cdk-lib/aws-kms);
const lambda = require(aws-cdk-lib/aws-lambda);
const events=require(aws-cdk-lib/aws-events);
const targets=require(aws-cdk-lib/aws-events-targets);
class kmscustomrotationstack extends cdk.stack {
constructor(scope,id,props) {
super(scope,id,props);
// 1. create a kms cmk
const mykey = new kms.key(this, mycustomkey, {
enablekeyrotation: false, // disable default yearly rotation
alias: alias my-custom-key,
description: kms key with custom rotation schedule,
});
// 2. lambda function to rotate the key
const rotatelambda=new lambda.function(this, rotatekmsKkeylambda, {
runtime: lambda.runtime.nodejs_18_x,
handler: index.handler,
code: lambda.code.frominline(
const aws = require(aws-sdk);
const kms=new aws.kms();
exports.handler = async () => {
try {
// create a new key
const newkey = await kms.createkey({
description: rotated kms key,
keyusage: encrypt_decrypt,
customermasterkeyspec: symetric_default
}).promise();
console.log(new key created:, newkey.keymetadata.keyid);
// optionally disable the old key (replace with your key ID)
// await kms.disablekey({keyid: 'old_key_id' }).promise();
return {status: rotation complete, newkeyid: newkey.keymetadata.keyid};
} catch (err) {
console.error(rotation failed:, err);
throw err;
}
};
),
timeout: cdk.duration.seconds(30)
});
// grant lambda permissions to manage kms keys
mykey.grantadmin(rotatelambda);
// 3. eventbridge rule for custom rotation schedule (every 90 days)
new events.rule(this,customrotationrule, {
schedule: events.schedule.rate(cdk.duration.days(90)),
targets: [new targets.lambdafunction(rotatelambda)]
});
}
}
const app=new cdk.app();
new kmscustomrotationstack(app, kmscustomrotationstack);
deployment
bash
npm install -g aws-cdk
cdk init app --language javascript
# replace lib/<stack>.js with the code above
npm install aws-cdk-lib constructs
cdk bootstrap
cdk deploy
<subheading.html>
covid strings installing a pure aws sdk javascript script without cdk that you can run from a server or lambda to rotate keys on demand
how to install a pure aws sdk javascript script without cdk that you can run from a server or lambda to rotate keys on demand
/**
 * aws iam access key rotation script
 * requirements:
 * npm install @aws-sdk/client-iam
 * 
 * usage:
 *   node rotate-keys.js <i am_ username>
 * 
 * notes:
 * - run with aws credentials that have iam permissions:
 *   iam:listaccesskeys, iam:createaccesskey, iam:deleteaccesskey
 * - safe to run in lambda or on a server.
 */
import { iam client, listaccesskeyscommand, createaccesskeycommand, deleteaccesskeycommand } from @aws-sdk/client-iam;
// validate cli arguments
if (process.argv.length < 3) {
console.error(usage: node rotate-keys.js <i am_usernmae>);
process.exit(1);
}
const iamusername =process.argv[2];
// create iam client (region is irrelevant for iam but required by sdk)
const iamclient =new iam client({region: us-east-1});
async function rotatekeys(username) {
try {
// Step 1: list existing access keys
const listresp =await iamclient.send(new listaccesskeyscommand({username: username }));
const keys = listresp.accesskeymetadata || [];
console.log(found ${keys.length} existing keys for user ${username});
// step 2: if 2 keys exist, delete the oldest one
if (keys.length >= 2) {
const oldestkey = keys.reduce((a, b) =>
new date(a.createdate) < new date(b.createdate) ? a : b
);
console.log(deleting oldest key: ${oldestkey.accesskeyid});
await iamclient.send(new deleteaccesskeycommand({
username: username,
accesskeyid:oldestkey.accesskeyid
}));
}
//step 3: create a new access key
 const createResp = await iamclient.send(new createaccesskeycommand({username: username }));
const newkey = createresp.accesskey;
console.log(✅ new access key created:);
console.log(accesskeyid: ${newkey.accesskeyid});
console.log(secretaccesskey: ${newkey.secretaccesskey});
console.log(⚠️ store these credentials securely. they will not be shown again.);
}catch (err) {
console.error(❌ error rotating keys:, err);
process.exit(1);
}
}
// run the rotation
rotatekeys(iamusername);
npm init-y
npm install @aws-sdk/client-iam
rotate-keys.js.
node rotate-keys.js my-iam-user
{
version: 2012-10-17,
statement: [
{effect: allow, action: [iam:listaccesskeys, iam:createaccesskey, iam:deleteaccesskey], resource: arn:aws:iam::*:user/my-iam-user}
]
}
<subheading.html>
covid strings lambda-ready version that automatically stores the new key in aws secrets manager
how to create a  lambda-ready version that automatically stores the new key in aws secrets manager
// lambda function to generate a new api key and store it in aws secrets manager
// aws sdk v3 is used for better performance in lambda
import {secretsmanagerclient, putsecretvaluecommand} from @aws-sdk/client-secrets-manager;
import crypto from crypto;
// create secrets manager client (region is taken from lambda environment)
const client=new secretsmanagerclient({region: process.env.aws_region });
//helper: generate a secure random key
function generatesecurekey(length = 32) {
if (typeof length !== number || length <= 0) {
throw new error(invalid key length specified.);
}
return crypto.randombytes(length).tostring(hex); // hex string
}
export const handler = async (event) => {
try {
// validate required environment variable
const secretname=process.env.secret_name;
if (!secretname) {
throw new error(secret_name environment variable is not set.);
}
// generate a new secure key
const newkey =generatesecurekey(32); // 64 hex chars
// store the new key in aws secrets manager
const command = new putsecretvaluecommand({
secretid: secretname,
secretstring: json.stringify({apikey: newkey }),
});
const response =await client.send(command);
console.log(✅ successfully stored new key in secret: ${secretname});
return {
statuscode: 200,
body: json.stringify({
message: new key generated and stored successfully.,
versionid: response.versionid,
}),
};
} catch (error) {
console.error(❌ error storing secret:,error);
return {
statuscode: 500,
body: json.stringify({error: error.message }),
};
}
};
aws secretsmanager create-secret \
--name myapikeysecret \
--secret-string {apikey:initialvalue}
npm init-y
npm install @aws-sdk/client-secrets-manager
zip -r function.zip .
aws lambda create-function \
--function-name rotateapikey \
--runtime nodejs18.x \
--role arn:aws:iam::<account_id>:role/<lambdarolewithsecretsmanageraccess> \
--handler index.handler \
--zip-file fileb://function.zip
iam role permissions (attach to lambda role):
json
{
version: 2012-10-17,
statement: [
{
effect: allow,
action: [
secretsmanager:putsecretvalue,
secretsmanager:getsecretvalue
],
resource: arn:aws:secretsmanager:region:account_id:secret:myapikeysecret*
}
]
}
<subheading.html>
covid strings version that integrates with aws secrets manager’s built-in rotation schedule
how to create a version that integrates with aws secrets manager’s built-in rotation schedule
// lambda function to rotate a secret in aws secrets manager
//compatible with aws secrets manager's built-in rotation schedule
//node.js 18+ runtime
 import {
 secretsmanagerclient,
 describesecretcommand,
 getsecretvaluecommand,
 putsecretvaluecommand,
 updatesecretversionstagecommand
} from @aws-sdk/client-secrets-manager;
const client = new secretsmanagerclient({region: process.env.aws_region });
/**
 * entry point for aws lambda rotation
 */
export const handler = async (event) => {
console.log(rotation event: ${json.stringify(event)});
const {secretid, clientrequesttoken,step } =event;
// validate secret and token
const secretdescription = await client.send(new describesecretcommand({secretid}));
if (!secretdescription.rotationenabled) {
throw new error(secret ${secretid} is not enabled for rotation);
}
if (!secretdescription.versionidstostages[clientrequesttoken]) {
throw new error(secret version ${clientrequesttoken} not found);
}
if (secretdescription.versionidstostages[clientrequesttoken].Includes(aws current )) {
console.log(version ${clientrequesttoken} is already marked as aws current);
return;
}
// route to the correct step
switch (step) {
case createsecret:
await createsecret(secretid, clientrequesttoken);
break;
case setsecret:
await setsecret(secretid, clientrequesttoken);
break;
case testsecret:
await testsecret(secretid, clientrequesttoken);
break;
case finishsecret:
await finishsecret(secretid, clientrequesttoken);
break;
default:
throw new error(unknown step: ${step});
}
};
/**
 * step 1: create a new secret version with new credentials
 */
async function createsecret(secretid, token) {
console.log(creating new secret version for ${secretid});
// check if secret version already exists
try {
await client.send(new getsecretvaluecommand({
secretid: secretid,
versionid: token,
versionstage: aws pending
}));
console.log( aws pending version already exists);
return;
} catch (err) {
if (err.name !== resourcenotfoundexception) throw err;
}
// retrieve current secret
const currentsecret = await client.send(new getsecretvaluecommand({
secretid: secretid,
versionstage: aws current
}));
const secretobj = json.parse(currentsecret.secretstring);
// generate new credentials (example: password rotation)
const newpassword = generaterandompassword();
const newsecretobj = {
...secretobj,
password: newpassword
};
// store new secret version
await client.send(new putsecretvaluecommand({
secretid: secretid,
clientrequesttoken: token,
secretstring: json.stringify(newsecretobj),
versionstages: [aws pending]
}));
console.log(new secret version created);
}
/**
 * step 2: apply the new secret to the target service
 */
async function setsecret(secretid, token) {
console.log(setting secret for ${secretid});
// here you would connect to your db/service and update credentials
// example: update database user password
}
/**
 * step 3: test the new secret
 */
async function testsecret(secretid, token) {
console.log(testing secret for ${secretid});
// here you would attempt to connect to your service with the new credentials
}
/**
 * step 4: mark the new secret as aws current
 */
async function finishsecret(secretid,token) {
console.log(finishing rotation for ${secretid});
const metadata = await client.send(new describesecretcommand({secretid: secretid}));
const currentversion =object.entries(metadata.versionidstostages)
.find(([_, stages]) => stages.includes(aws current))?.[0];
if (currentversion ===token) {
console.log(version already marked as aws current);
return;
}
await client.send(new updatesecretversionstagecommand({
secretid: secretid,
versionstage: aws current,
movetoversionid: token,
removefromversionid: currentversion
}));
console.log(rotation complete);
}
/**
 * utility: generate a secure random password
 */
function generaterandompassword(length = 16) {
const chars = abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+;
return array.from(crypto.getrandomvalues(new uint32array(length)))
.map(x => chars[x % chars.length])
.join("");
}
<subheading.html>
covid strings version that automatically updates an rds database password during rotation 
how to create a version that automatically updates an rds database password during rotation 
/**
 * auto-updating rds password from aws secrets manager
 * requires: npm install @aws-sdk/client-secrets-manager mysql2
 */
import {secretsmanagerclient, getsecretvaluecommand} from @aws-sdk/client-secrets-manager;
import mysql from mysql2/promise;
// ===== configuration =====
const region = us-east-1; // change to your aws region
const secret_name =my-rds-db-secret; // name of your secret in secrets manager
const refresh_interval_ms = 60 * 1000; // check for updates every 60 seconds
// aws secrets manager client
const smclient = new secretsmanagerclient({region: region });
// global db connection pool
let pool= null;
let currentsecretversion = null;
/**
 * detch latest DB credentials from aws secrets manager
 */
async function fetchdbcredentials() {
try {
const data = await smclient.send(new getsecretvaluecommand({secretid: secret_name }));
if (!data.secretstring) {
throw new error(secretstring is empty or undefined.);
}
const secret = json.parse(data.secretstring);
// ensure required fields exist
if (!secret.username || !secret.password || !secret.host || !secret.port || !secret.dbname) {
throw new error(secret is missing required database fields.);
}
return { ...secret, versionid: data.versionid };
} catch (err) {
console.error(❌ error fetching db credentials:, err.message);
throw err;
}
}
/**
 * initialize or update the db connection pool
 */
async function initorupdatepool() {
const creds = await fetchdbcredentials();
// only recreate pool if version changed
if (creds.versionid !==currentsecretversion) {
console.log(🔄 updating db connection pool (version: ${creds.versionid}));
// close old pool if exists
if (pool) {
await pool.end().catch(err => console.warn(⚠️ error closing old pool:, err.message));
}
// create new pool
pool = mysql.createpool({
host: creds.host,
user: creds.username,
password: creds.password,
database: creds.dbname,
port: creds.port,
waitforconnections: true,
connectionlimit: 10,
queuelimit: 0
});
currentsecretversion=creds.versionid;
}
}
/**
 * periodically refresh db credentials
 */
function startautorefresh() {
setinterval(async () => {
try {
await initorupdatepool();
} catch (err) {
console.error(❌ failed to refresh db credentials:, err.message);
}
}, refresh _interval_ms);
}
/**
 * example query function
 */
async function query(sql, params) {
if (!pool) {
throw new error(database pool not initialized.);
}
const [rows] = await pool.execute(sql, params);
return rows;
}
// ===== main startup =====
(async () => {
try {
await initorupdatepool();
startautorefresh();
// example usage
const result = await query(select now() as current_time);
console.log(✅ db time:, result[0].current_time);
} catch (err) {
console.error(❌ startup error:, err.message);
process.exit(1);
}
})();
{
username: dbuser,
password: mypassword,
host: mydb.cluster-xxxx.us-east-1.rds.amazonaws.com,
port: 3306,
dbname: mydatabase
}
<subheading.html>
covid strings installing a lambda rotation function that updates the secret automatically in aws secrets manager
how to install a lambda rotation function that updates the secret automatically in aws secrets manager for covid strings
// lambda rotation function for aws secrets manager
// node.js 18+ runtime
import {
secretsmanagerclient,
getsecretvaluecommand,
putsecretvaluecommand,
describesecretcommand
} from @aws-sdk/client-secrets-manager;
const secretsclient = new secretsmanagerclient({region: process.env.aws_region });
/**
 * entry point for Lambda rotation
 */
export const handler = async (event) => {
console.log(rotation event:, json.stringify(event));
const {secretid, clientrequesttoken,step } =event;
// validate secret and token
const secretdescription = await secretsclient.send(new describesecretcommand({secretid}));
if (!secretdescription.rotationenabled) {
throw new error(secret ${secretid} is not enabled for rotation);
}
if (!secretdescription.versionidstostages[clientrequesttoken] ||   !secretdescription.versionidstostages[clientrequesttoken].includes(aws pending)) {
throw new error(invalid rotation token: ${clientrequesttoken});
}
// route to the correct step
switch (step) {
case createsecret:
await createsecret(secretid, clientrequesttoken);
break;
case setsecret:
await setsecret(secretid, clientrequesttoken);
break;
case testsecret:
await testsecret(secretid, clientrequesttoken);
break;
case finishsecret:
await finishsecret(secretid, clientrequesttoken);
break;
default:
throw new error(unknown step: ${step});
}
};
/**
 * step 1: create a new secret version with updated credentials
 */
async function createsecret(secretid, token) {
console.log(creating new secret version for ${secretid});
// check if secret version already exists
try {
await secretsclient.send(new getsecretvaluecommand({
secretid: secretid,
versionid: token,
versionstage: aws spending
}));
console.log(pending secret version already exists);
return;
} catch {
// continue to create new secret
}
// get current secret
const currentsecret = await secretsclient.send(new getsecretvaluecommand({
secretid: secretid,
versionstage: aws current
}));
let secretobj = json.parse(currentsecret.secretstring);
// example: generate a new password (replace with your own logic)
secretobj.password = generaterandompassword();
// store new secret version
await secretsclient.send(new putsecretvaluecommand({
secretid: secretid,
clientrequesttoken: token,
secretstring: json.stringify(secretobj),
versionstages: [aws pending]
}));
console.log(new secret version created);
}
/**
 * step 2: apply the pending secret to the target resource (e.g., db, api)
 */
async function setsecret(secretid,token) {
console.log(applying pending secret for ${secretid});
// todo: implement logic to update the target system with the new secret
// example: update database user password
}
/**
 * Step 3: test the pending secret
 */
async function testsecret(secretid, token) {
console.log(testing pending secret for ${secretid});
// todo: implement logic to verify the new secret works
// example: attempt db connection with pending credentials
}
/**
 * step 4: mark the pending secret as current
 */
async function finishsecret(secretid, token) {
console.log(finishing rotation for ${secretid});
const metadata =await secretsclient.send(new describesecretcommand({secretid: secretid}));
const currentversion = object.entries(metadata.versionidstostages)
.find(([_, stages]) => stages.includes(aws current))?.[0];
if (currentversion === token) {
console.log(secret already marked as current);
return;
}
await secretsclient.send(new updatesecretversionstagecommand({
secretid: secretid,
versionstage: aws current,
movetoversionid: token,
removefromversionid: currentversion
}));
console.log(rotation complete);
}
/**
 * utility: generate a random password
 */
function generaterandompassword(length = 16) {
const chars=abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*();
return array.from({length }, () => chars[math.floor(math.random() * chars.length)]).join("");
}
aws lambda create-function \
--function-name mysecretrotation \
--runtime nodejs18.x \
--role arn:aws:iam::<account-id>:role/<lambdaexecutionrole> \
--handler index.handler \
--zip-file fileb://function.zip
attach iam permissions to the lambda role:
secretsmanager:getsecretvalue
secretsmanager:putsecretvalue
secretsmanager:describesecret
secretsmanager:updatesecretversionstage
any permissions needed to update your target resource (e.g., rds, api).
enable rotation for your secret:
bash
aws secretsmanager rotate-secret \
--Ssecret-id mysecret \
--rotation-lambda-arn arn:aws:lambda:<region>:<account-id>:function:mysecretrotation \
--rotation-rules automaticallyafterdays=30
<subheading.html>
covid strings regularly rotating rds credentials so it updates both secrets manager and the database automatically
how to regularly rotate rds credentials so it updates both secrets manager and the database automatically
/**
 * aws lambda function for rotating rds credentials stored in aws secrets manager.
 * this function follows aws's rotation lambda contract:
 *  - createsecret
 *  - setsecret
 *  - testsecret
 *  - finishsecret
 */
const aws = require(aws-sdk);
const {client} =require(pg); // change to 'mysql2' if using mysql
const secretsmanager = new aws.secretsmanager();
const rds = new aws.rds();
exports.handler = async (event) => {
console.log(rotation event: ${json.stringify(event)});
const step = event.step;
const secretarn = event.secretid;
try {
switch (step) {
case createsecret:
await createsecret(secretarn);
break;
case setsecret:
await setsecret(secretarn);
break;
case testsecret:
await testsecret(secretarn);
break;
case finishsecret:
await finishsecret(secretarn);
break;
default:
throw new error(unknown step: ${step});
}
} catch (err) {
console.error(error during ${step}:, err);
throw err;
}
};
/**
 * step 1: create a new secret version with a new password
 */
async function createsecret(secretarn) {
const currentsecret = await getsecretvalue(secretarn,  aws current);
// generate a new password
const newpassword =math.random().tostring(36).slice(-12) + A1!;
// store as  aw spending
await secretsmanager.putsecretvalue({
secretid: secretarn,
clientrequesttoken: process.env.aws_lambda_log_stream_name, // unique token
secretstring: json.stringify({
...currentsecret,
password: newpassword
}),
versionstages: [aw spending]
}).promise();
console.log(created new pending secret version.);
}
/**
 * step 2: update the database with the new password
 */
async function setsecret(secretarn) {
const pendingsecret = await getsecretvalue(secretarn, aws pending);
const currentsecret = await getsecretvalue(secretarn, aws current);
// connect to db with current credentials
const client = new client({
host: currentsecret.host,
port: currentsecret.port,
user: currentsecret.username,
password: currentsecret.password,
database: currentsecret.dbname
});
await client.connect();
// change password in db
await client.query(alter user ${pendingsecret.username} with password ${pendingsecret.password});
await client.end();
console.log(database password updated.);
}
/**
 * step 3: test the pending secret
 */
async function testsecret(secretarn) {
const pendingsecret = await getsecretvalue(secretarn, aws pending);
const client = new client({
host: pendingsecret.host,
port: pendingsecret.port,
user: pendingsecret.username,
password: pendingsecret.password,
database: pendingsecret.dbname
});
await client.connect();
await client.query(select 1); // simple test query
await client.end();
console.log(pending secret tested successfully.);
}
/**
 * step 4: mark pending secret as current
 */
async function finishsecret(secretarn) {
await secretsmanager.updatesecretversionstage({
secretid: secretarn,
versionstage: awscurrent,
movetoversionid: process.env.aws_lambda_log_stream_name,
removefromversionid: (await getsecretmetadata(secretarn)).currentversionid
}).promise();
console.log(secret rotation finished.);
}
/**
 * helper: get secret value for a specific stage
 */
async function getsecretvalue(secretarn, stage) {
const data = await secretsmanager.getsecretvalue({
secretid: secretarn,
versionstage: stage
}).promise();
return json.parse(data.secretstring);
}
/**
 * helper: get secret metadata
 */
async function getsecretmetadata(secretarn) {
xonst meta = await secretsmanager.describesecret({secretid: secretarn }).promise();
eeturn {
currentversionid: object.keys(meta.versionidstostages).find(
id => meta.versionidstostages[id].includes(awscurrent)
)
};
}
{
username: dbuser,
password: oldpassword,
engine: postgres,
host: mydb.cluster-xxxx.us-east-1.rds.amazonaws.com,
port: 5432,
dbname: mydatabase
}
attach iam permissions:
secretsmanager:getsecretvalue
secretsmanager:putsecretvalue
secretsmanager:updatesecretversionstage
rds-db:xonnect
return filename
