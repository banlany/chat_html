
//获取头像
const userUrl ='./img/chat.ico'
const rUrl = './img/bili.ico'
const userImg = document.createElement('img');
const rImg = document.createElement('img');
userImg.src = userUrl;
// 将头像元素添加到消息元素的前面
let newMessage = document.createElement('div');
// 获取当前用户的用户名
const username = 'User';

// 设置消息的样式
if (username === 'User' && newMessage != null) {
    // 用户的消息样式
    newMessage.style.backgroundColor = '#428bca';
    newMessage.style.color = 'white';
} else if (newMessage != null) {
    // 对方的消息样式
    newMessage.style.backgroundColor = '#f5f5f5';
    newMessage.style.color = '#333';
}
// 获取元素
const messageInput = document.getElementById('text-input');
const submitBtn = document.getElementById('send-button');
const chatDisplay = document.getElementsByClassName('chat-display')[0];

// 添加事件监听器
submitBtn.addEventListener('click', sendMessage);

// 定义函数：发送消息
function sendMessage() {
    // 获取输入的消息内容
    const message = messageInput.value;

    // 创建一个新的消息元素
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');

    // 设置消息内容和样式

    newMessage.innerHTML = message;
    newMessage.style.backgroundColor = '#428bca';
    newMessage.style.color = 'white';
    newMessage.style.marginBottom = '10px';
    //newMessage.style['float'] = 'right';
    newMessage.style['display'] = 'flex';
    newMessage.style['margin-left'] = 'auto';
    newMessage.style['margin-right'] = '10px';
    newMessage.style['padding'] = '10px';
    newMessage.style['line-height'] = '20px';
    newMessage.style['width'] = 'auto';
    //newMessage.style['justify-content'] = 'flex-end';
    newMessage.style['align-items'] = 'center';
    newMessage.style['border-radius'] = '10px';
    newMessage.style['height'] = 'auto';
    newMessage.style['word-break'] = 'break-all';

    // 将消息添加到对话展示框中

    if(message.length > 0){
        chatDisplay.appendChild(newMessage);
        rSent('sorry');
    }
    // 清空输入框
    if (messageInput != null)
        messageInput.value = '';
    
}
function rSent(answer) {
    //定义新的消息元素
    let me = Message;
    me.message = answer;
    me.id=1000;
    console.log(me);
    const newMessage = document.createElement('div');
    newMessage.innerHTML = answer;
    newMessage.style.backgroundColor = '#ffffff';
    newMessage.style.color = 'black';
    newMessage.style.marginBottom = '10px';
    //newMessage.style['float'] = 'right';
    newMessage.style['display'] = 'flex';
    newMessage.style['margin-right'] = 'auto';
    newMessage.style['padding'] = '10px';
    newMessage.style['line-height'] = '20px';
    newMessage.style['width'] = 'auto';
    //newMessage.style['justify-content'] = 'flex-end';
    newMessage.style['align-items'] = 'center';
    newMessage.style['border-radius'] = '10px';
    newMessage.style['height'] = 'auto';
    newMessage.style['word-break'] = 'break-all';

    // 将消息添加到对话展示框中
    chatDisplay.appendChild(newMessage);
}