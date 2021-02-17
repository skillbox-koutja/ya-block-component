class Button extends Block {
  constructor(props) {
    // Создаём враппер дом-элемент button
    super('button', props);
  }

  render() {
    // В проекте должен быть ваш собственный шаблонизатор
    return `<div>${this.props.text}</div>`;
  }
}

function render(query, block) {
  const root = document.querySelector(query);
  const btn = block.getContent();
  root.appendChild(btn);
  return root;
}

const button = new Button({
  text: 'Click me',
});

// app — это id дива в корне DOM
render('.app', button);

// Через секунду контент изменится сам, достаточно обновить пропсы
setTimeout(() => {
  button.setProps({
    text: 'Click me, please',
  });
  // Через секунду контент изменится сам, достаточно обновить пропсы
}, 1000);
