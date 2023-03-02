console.log('Hello!');

document.addEventListener('DOMContentLoaded', function (event) {
  const initalState = {
    value: 5,
  };
  function counterReducer(state = initalState, action) {
    switch (action.type) {
      case 'counter/incremented':
        return { ...state, value: state.value + 1 };
      case 'counter/decremented':
        return { ...state, value: state.value - 1 };
      default:
        return state;
    }
  }

  const store = Redux.createStore(counterReducer);

  const valueEl = document.getElementById('value');

  console.log(valueEl);

  function render() {
    const state = store.getState();
    valueEl.innerHTML = state.value.toString();
  }

  render();

  store.subscribe(render);

  document.getElementById('increment').addEventListener('click', function () {
    store.dispatch({ type: 'counter/incremented' });
  });

  document.getElementById('decrement').addEventListener('click', function () {
    store.dispatch({ type: 'counter/decremented' });
  });

  document
    .getElementById('incrementIfOdd')
    .addEventListener('click', function () {
      const state = store.getState();
      if (state.value % 2 !== 0) {
        store.dispatch({ type: 'counter/incremented' });
      }
    });

  document
    .getElementById('incrementAsync')
    .addEventListener('click', function () {
      setTimeout(function () {
        store.dispatch({ type: 'counter/incremented' });
      }, 1000);
    });
});
