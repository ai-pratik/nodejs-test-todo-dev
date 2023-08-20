const btnid = document.getElementById("deleteButton");

btnid.onclick = async () => {
  const selectedCheckboxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  const selectedIds = Array.from(selectedCheckboxes).map(
    (checkbox) => checkbox.value
  );

  // send the response with selected ids for deletion for the server side
  const reposne = await fetch("/delete-todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ids: selectedIds }),
  });
};
