background-image: url("images/Bg.jpg");

}

.topnav {
overflow: hidden;
background-color: #333;
position:sticky;
top: 0;
width: 100%;
}

.topnav a {
float: left;
color: #f2f2f2;
font-family: cursive;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
}

.topnav a:hover {
background-color: #bbb;
color: black;
}

.topnav-right {
float: right;
}

.row::after {
content: "";
clear: both;
display: table;
}
.img_div{
float: left;
width: 50%;
padding: 5px;
}
.menu_div{
float: right;
width: 50%;
padding: 160px;
color: honeydew;
font-size: 25px;
font-family: cursive;
}
#menu_list{
background-color:#f5c71a;
color:black;
width: 200px;
border: none;
}

.newRow::after {
content: "";
clear: both;
display: table;
}

.block1{
float: left;
width: 20%;
padding: 5px;
}
.block2{
float: left;
width: 80%;
padding: 5px;
color: honeydew;
font-size: 25px;
font-family: cursive;
}

#add_toppings{
/* padding-left:30px; */
width:200px;
height:180px;
border: none;
background-color:#e2062c;
color:black;
font-size: 25px;
font-family: cursive;
}

#add_item {
font-family: cursive;
font-size: 15px;
line-height: 20px;
width: 80%;
height: 50px;
color: #fff;
background: none;
border: none;
border-bottom: 1px solid rgb(223, 205, 205);
outline: none;
}

[placeholder]:focus::-webkit-input-placeholder {
transition: text-indent 0.4s 0.4s ease;
text-indent: -100%;
opacity: 1;
color: white;
}

ol.menulist>li
{
padding-bottom:20px;
}

.cards {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}

div.card {
flex: 0 0 30%;
box-sizing: border-box;
color:black;
margin: 0.5rem .18em;
background-color: antiquewhite;
align-items: center;
font-size: medium;
}
.card img{
width:100px;
height: 80px;
}
