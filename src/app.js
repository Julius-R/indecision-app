const app = {
   title: 'Indecision App',
   subtitle: 'This is a sub-title',
   options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    rend();
  }
};

const clearOpts = () => {
  app.options = [];
  rend();
}

const rend = () => {
  const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Options available" : "No options"}</p>
    <p>{app.options.length}</p>
    <button onClick={clearOpts}>Remove All</button>
    <ol>
      {app.options.map((option) => {
        return <li key={option}>{option}</li>
      })}
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
    </form>
  </div>
  );

  ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
rend();
