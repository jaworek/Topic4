var player;
var tree;
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var interval;

function move()
{
    var positionLeft = player.offsetLeft;
    var positionTop = player.offsetTop;
    var detected = treeDetection();
    if (leftPressed)
    {
        if (positionLeft < 0)
        {
            leftPressed = false;
        }
        else
        {
            if (!detected)
            {
                player.style.left = positionLeft - 1 + 'px';
                player.className = 'character walkLeft';
            }
            else
            {
                player.style.left = positionLeft + 1 + 'px';
            }

        }
    }
    if (rightPressed)
    {
        if (positionLeft > window.innerWidth - 32)
        {
            rightPressed = false;
        }
        else
        {
            if (!detected)
            {
                player.style.left = positionLeft + 1 + 'px';
                player.className = 'character walkRight';
            }
            else
            {
                player.style.left = positionLeft - 1 + 'px';
            }
        }
    }
    if (upPressed)
    {
        if (positionTop < 0)
        {
            upPressed = false;
        }
        else
        {
            /*if (!detected)
            {*/
                player.style.top = positionTop - 1 + 'px';
                player.className = 'character walkUp';
            /*}
            else
            {
                player.style.top = positionTop + 1 + 'px';
            }*/
        }
    }
    if (downPressed)
    {
        if (positionTop > window.innerHeight - 46)
        {
            downPressed = false;
        }
        else
        {
            /*if (!detected)
            {*/
                player.style.top = positionTop + 1 + 'px';
                player.className = 'character walkDown';
            /*}
            else
            {
                player.style.top = positionTop - 1 + 'px';
            }*/
        }
    }
}

function keyDown(event)
{
    if (event.keyCode == 37)
    {
        leftPressed = true;
    }
    if (event.keyCode == 39)
    {
        rightPressed = true;
    }
    if (event.keyCode == 38)
    {
        upPressed = true;
    }
    if (event.keyCode == 40)
    {
        downPressed = true;
    }
}

function keyUp()
{
    if (event.keyCode == 37)
    {
        leftPressed = false;
        if (!leftPressed && !rightPressed && !upPressed && !downPressed)
        {
            player.className = 'character standLeft';
        }
    }
    if (event.keyCode == 39)
    {
        rightPressed = false;
        if (!leftPressed && !rightPressed && !upPressed && !downPressed)
        {
            player.className = 'character standRight';
        }
    }
    if (event.keyCode == 38)
    {
        upPressed = false;
        if (!leftPressed && !rightPressed && !upPressed && !downPressed)
        {
            player.className = 'character standUp';
        }
    }
    if (event.keyCode == 40)
    {
        downPressed = false;
        if (!leftPressed && !rightPressed && !upPressed && !downPressed)
        {
            player.className = 'character standDown';
        }
    }
}

function treeDetection()
{
    for (var i = 0; i < tree.length; i++)
    {
        if (player.offsetLeft == tree[i].offsetLeft + 128 && player.offsetTop + 46 >= tree[i].offsetTop && player.offsetTop <= tree[i].offsetTop + 160)
        {
            return true;
        }
        if (player.offsetLeft + 32 == tree[i].offsetLeft && player.offsetTop + 46 >= tree[i].offsetTop && player.offsetLeft <= tree[i].offsetLeft + 160)
        {
            return true;
        }
        /*if (player.offsetTop == tree[i].offsetTop + 160 && player.offsetLeft + 32 >= tree[i].offsetLeft && player.offsetLeft <= tree[i].offsetLeft + 128)
        {
            return true;
        }
        if (player.offsetTop + 46 == tree[i].offsetTop && player.offsetLeft + 32 >= tree[i].offsetLeft && player.offsetLeft <= tree[i].offsetLeft + 128)
        {
            return true;
        }*/
    }
}

function addHead()
{
    var heads = document.getElementsByClassName('heads');
    var elements = heads[0].getElementsByTagName('li');
    for (var i = 0; i < elements.length; i++)
    {
        elements[i].addEventListener('click', function()
        {
            chooseHead(this.id);
        });
    }
}

function chooseHead(i)
{
    var chooseHead = document.getElementsByClassName('head')[0];
    chooseHead.style.backgroundImage = 'url(images/' + i + '.png)';
}

function addBody()
{
    var bodies = document.getElementsByClassName('bodies');
    var elements = bodies[0].getElementsByTagName('li');
    for (var i = 0; i < elements.length; i++)
    {
        elements[i].addEventListener('click', function()
        {
            chooseBody(this.id);
        });
    }
}

function chooseBody(i)
{
    var chooseBody = document.getElementsByClassName('body')[0];
    chooseBody.style.backgroundImage = 'url(images/' + i + '.png)';
}

function asideHide()
{
    var aside = document.getElementsByTagName('aside')[0];
    var positionLeft = parseInt(aside.style.marginLeft);
    aside.style.marginLeft = (positionLeft + 1) + 'px';
    if (positionLeft === 0)
    {
        clearInterval(interval);
    }
}

function asideClose()
{
    var aside = document.getElementsByTagName('aside')[0];
    aside.style.marginLeft = '-240px';
    interval = setInterval(asideHide, 1);
}

function asideShow()
{
    var aside = document.getElementsByTagName('aside')[0];
    var positionLeft = parseInt(aside.style.marginLeft);
    aside.style.marginLeft = (positionLeft - 1) + 'px';
    if (positionLeft == -240)
    {
        clearInterval(interval);
    }
}

function asideOpen()
{
    var aside = document.getElementsByTagName('aside')[0];
    aside.style.marginLeft = '0px';
    interval = setInterval(asideShow, 1);
}

function start()
{
    player = document.getElementById('player');
    tree = document.getElementsByClassName('tree');

    addHead();
    addBody();

    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
    setInterval(move, 10);

    var close = document.getElementById('closeside');
    close.addEventListener('click', asideClose);
    player.addEventListener('click', asideOpen);
}

document.addEventListener('DOMContentLoaded', start);
