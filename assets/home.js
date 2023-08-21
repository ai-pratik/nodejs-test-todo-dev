const deletebtnid = document.getElementById("deleteButton");

deletebtnid.onclick = async () => {
  const selectedCheckboxes = document.querySelectorAll(
    "input[type='checkbox']:checked"
  );
  const selectedIds = Array.from(selectedCheckboxes).map(
    (checkbox) => checkbox.value
  );

  // send the response with selected ids for deletion for the server side
  const response = await fetch("/delete-todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ids: selectedIds }),
  });
  if (response.ok) {
    // Successful deletion
    window.location.reload(); // Reload the page
  } else {
    console.error("Error deleting todos");
    // Handle error, maybe show an error message to the user
  }
};
