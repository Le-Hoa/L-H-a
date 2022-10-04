css02.css
BaitapJS
c01
bai tap
imghtml {
    height: 100%;}

body {
    background-color: #b6a996;
    background: url('../images/hobart.jpg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    font-family: helvetica, arial, sans-serif;
    font-size: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
    min-height: 100%;}

#content {
    background-color: #fff;
    border: 3px double #31373f;
    color: #31373f;
    display: inline-block;
    padding: 30px 50px;
    margin: 20px auto 50px auto;
    max-width: 580px;
    min-height: 4em;
    overflow: auto;
    text-align: center;}

h1, h2 {
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;}

h1 {
    width: 278px;
    height: 112px;
    margin: 0 auto 0 auto;
    padding-top: 40px;
    background: url('../images/elderflower-logo.png') no-repeat bottom center;}

h2 {
    width: 286px;
    height: 18px;
    margin: 0 auto 20px auto;
    background: url('../images/custom-sign.png') no-repeat center center;}

#title {
    font-size: 120%;
    font-weight: bold;}

#cost, .action {
    background-color: #f84c53;
    color: #fff;
    width: auto;
    height: 1em;
    padding: 0.5em 0.75em;
    float: right;}
#cost {
    position: relative;
    top: 1em;
    right: 2em;}
.action {
    position: relative;
    top: 1.3em;
    right: -2.3em;}

#note {
    background-color: #31373f;
    border-radius: 0.5em;
    color: #e3bb5a;
    padding: 0.5em 1em;
    margin-top: 1em;
    text-transform: uppercase;
    display: inline-block;}

a {
    color: #e3bb5a;
    text-decoration:none;}

.true, .false {
    background: url("../images/tick-cross.png");
    display: block;
    float:right;
    height: 25px;
    width: 25px;}
.false {
    background-position: 0 -25px;}

.message {
    font-weight: bold;
    line-height: 1.5em;
    height: 2em;
    display: block;
    clear: left;
    min-width: 10em;}

.message span {
    font-weight: normal;}

.number {
    text-align: left;}

table {
    margin: 20px 100px 0 100px;}

tr td:first-child {
    font-weight: bold;
    padding-right: 20px;}

body:before, body:after {
    content: "";
    position: fixed;
    background: #fff;
    left: 0;
    right: 0;
    height: 20px;}

body:before {
    top: 0;}

body:after {
    bottom: 0;}

body {
    border-left: 20px solid #fff;
    border-right: 20px solid #fff;}
<!DOCTYPE html>
<html>
<head>

    <title>You must love me</title>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <style>
    #ques {
      position: absolute;
      left: 220px;
      top: 175px;
      width: auto;
      height: 210px;
    }
    #ans-yes {
        position: absolute;
        left: 285px;
        width: 210px;
        height: 210px;
    }
    #ans-no {
        position: absolute;
        left: 360px;
        top: 235px;
        width: 210px;
        height: 210px;
    }
  </style>
    <script type="text/javascript ">
        flag = 1

        function yes() {
            alert ("Yes.You are right!!!!!")
        }

        function love() {
            if (flag == 1) {
                ans_no.style.top = 90;
                ans_no.style.left = 500;
                flag = 2;
            } else if (flag ==2) {
                ans_no.style.top = 180;
                ans_no.style.left = 50;
                flag = 3;
            } else if (flag == 3) {
                ans_no.style.top = 235;
                ans_no.style.left = 360;
                flag = 1;
            }
        }

    </script>
</head>
<body>
    <h1 id="ques">Do you love me?</h1>
    <div id="ans_yes">
        <input type="button" value="YES" onclick="yes()" />
    </div>
    <div id="ans_no" style="">
        <input type="button" value="NO" onmouseover="love()" />
    </div>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
    <title>Constructive &amp; Co.</title>
    <link rel="stylesheet" href="css/c01.css">

</head>
<body>
<h1>Constructive &amp; Co.</h1>
<script src="JS/add-content.Js.js "></script>
<p>For all orders and inquiries please call <em>555-3344</em></p>
</body>
</html>
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript &amp; jQuery - Chapter 1: The ABC of Programming</title>
    <link rel="stylesheet" href="c01/css/c01.css">
</head>
<body>
<h1 id="header"><a href="index.html">JavaScript &amp; jQuery</a></h1>
<h2>Chapter 1: The ABC of Programming</h2>
<table>
    <tr>
        <td>1</td>
        <td><strong>Creating a Basic JavaScript</strong></td>
        <td><a href="add content html.html">add-content.html</a></td>
        <td><a href="add-content.Js.js">add-content.js</a></td>
    </tr>
</table>
</body>
</html>
love.html
JS
img
add content html.html
index.html
