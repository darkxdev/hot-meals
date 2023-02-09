const createCommentForm = () => {
  const form = document.createElement('form');
  
  const h3 = document.createElement('h3');
  h3.textContent = 'Add a Comment';
  form.appendChild(h3);
  
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('placeholder', 'Name');
  form.appendChild(nameInput);
  
  const messageTextArea = document.createElement('textarea');
  messageTextArea.setAttribute('placeholder', 'Message');
  form.appendChild(messageTextArea);
  
  const submitButton = document.createElement('button');
  submitButton.textContent = 'Comment';
  form.appendChild(submitButton);
  
  return form;
};

export default createCommentForm;