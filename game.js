var player;
var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;

function keyDownTimer()
{
    var positionLeft = player.offsetLeft;
    var positionTop = player.offsetTop;
    if (leftPressed === true)
    {
        if (positionLeft < 0)
        {
            leftPressed = false;
        }
        else
        {
            player.style.left = positionLeft - 1 + 'px';
        }
    }
    if (rightPressed === true)
    {
        if (positionLeft > window.innerWidth - 200)
        {
            rightPressed = false;
        }
        else
        {
            player.style.left = positionLeft + 1 + 'px';
        }
    }
    if (upPressed === true)
    {
        if (positionTop < 0)
        {
            upPressed = false;
        }
        else
        {
            player.style.top = positionTop - 1 + 'px';
        }
    }
    if (downPressed === true)
    {
        if (positionTop > window.innerHeight - 200)
        {
            downPressed = false;
        }
        else
        {
            player.style.top = positionTop + 1 + 'px';
        }
    }
}

function keyDown(event)
{
    if (event.keyCode == 37)
    {
        leftPressed = true;
        player.className = 'character walkLeft';
    }
    if (event.keyCode == 39)
    {
        rightPressed = true;
        player.className = 'character walkRight';
    }
    if (event.keyCode == 38)
    {
        upPressed = true;
        player.className = 'character walkUp';
    }
    if (event.keyCode == 40)
    {
        downPressed = true;
        player.className = 'character walkDown';
    }
}

function keyUp()
{
    if (event.keyCode == 37)
    {
        leftPressed = false;
        player.className = 'character standLeft';
    }
    if (event.keyCode == 39)
    {
        rightPressed = false;
        player.className = 'character standRight';
    }
    if (event.keyCode == 38)
    {
        upPressed = false;
        player.className = 'character standUp';
    }
    if (event.keyCode == 40)
    {
        downPressed = false;
        player.className = 'character standDown';
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

function start()
{
    player = document.getElementById('player');

    addHead();
    addBody();

    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
    setInterval(keyDownTimer, 10);
}

document.addEventListener('DOMContentLoaded', start);
