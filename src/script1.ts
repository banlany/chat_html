let newMessage = document.createElement('div');
// 获取当前用户的用户名
const username = 'User';

// 设置消息的样式
if (username === 'User'&&newMessage!=null) {
    // 用户的消息样式
    newMessage.style.backgroundColor = '#428bca';
    newMessage.style.color = 'white';
} else if(newMessage!=null) {
    // 对方的消息样式
    newMessage.style.backgroundColor = '#f5f5f5';
    newMessage.style.color = '#333'; 
}
// 获取元素
let text ='sorry';
let messageInput  = document.querySelector('#text-input') as HTMLInputElement;
const submitBtn = document.getElementById('send-button');
const chatDisplay = document.querySelector('.chat-display');
// 添加事件监听器
if(submitBtn!=null)
submitBtn.addEventListener('click', function(){
    sendMessage(text)});

// 定义函数：发送消息
function sendMessage(text:string) {
    // 获取输入的消息内容
    const message = messageInput?.value;
    
    // 创建一个新的消息元素
    const newMessage = document.createElement('div');
    newMessage.classList.add('userMessage');
    
    // 设置消息内容和样式
    newMessage.innerHTML = message;

    
    // 将消息添加到对话展示框中
    if(message){
        chatDisplay?.appendChild(newMessage);
        robotSend(text);
    }
    // 清空输入框
    if(messageInput!=null)
    messageInput.value = '';
}
function robotSend(answer:string){
    //定义新的消息元素
    const newMessage = document.createElement('div');
    newMessage.innerHTML=answer;
    newMessage.classList.add('robotMessage');
    // 将消息添加到对话展示框中
    chatDisplay?.appendChild(newMessage);
}
