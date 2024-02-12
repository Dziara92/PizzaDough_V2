export const handleNumberForm = (e, setForm) => {
  let valueStringPizza = parseInt(e.target.value);
  if (e.target.name === "doughGrams") {
    if (valueStringPizza === 0) return;
    setForm(valueStringPizza);
  }
  if (e.target.name === "numberOfPizza") {
    if (valueStringPizza === 0) return;
    setForm(valueStringPizza);
  }

  if (e.target.name === "doughMoisture") {
    if (valueStringPizza === 0) return;
    setForm(valueStringPizza);
  }
};
