const API = "http://https://googlekeepclone-1.onrender.com/api/notes";

const title = document.getElementById("titleInput");
const description = document.getElementById("descriptionInput");
const addButton = document.getElementById("addNoteBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const notesContainer = document.getElementById("notesContainer");

const colors = document.querySelectorAll(".color");
let selectedColor = "#fff4b8";

colors.forEach(color => {
  color.addEventListener("click", () => {
    selectedColor = color.dataset.color;

    colors.forEach(c => c.classList.remove("active"));
    color.classList.add("active");
  });
});

addButton.addEventListener("click", addNote);

// create //

async function addNote() {
  const note = {
    title: title.value,
    description: description.value,
    color: selectedColor
  };

  const response = await fetch(`${API}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(note)
  });

  const data = await response.json();

  console.log(data);

  title.value = "";
  description.value = "";

  getNotes();
}

// get //
async function getNotes() {
  const response = await fetch(`${API}/get`);
  const notes = await response.json();

  notesContainer.innerHTML = "";

  notes.forEach(note => {
    notesContainer.innerHTML += `
      <div class="note-card" style="background:${note.color}">
        <h3>${note.title}</h3>
        <p>${note.description}</p>

        <small>
          ${new Date(note.createdAt).toLocaleString()}
        </small>

        <div class="note-actions">
          <button onclick="updatenote('${note._id}')">Edit</button>
          <button onclick="copynote('${note._id}')">Copy</button>
          <button onclick="deletnote('${note._id}')">Delete</button>
        </div>
      </div>
    `;
  });
}

// delete //
async function deletnote(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  getNotes();
}

// copy //
async function copynote(id) {
  await fetch(`${API}/${id}/copy`, {
    method: "POST"
  });

  getNotes();
}

// update //
async function updatenote(id) {
  const titleText = prompt("Enter new title");
  const descriptionText = prompt("Enter new description");

  if (!titleText || !descriptionText) return;

  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: titleText,
      description: descriptionText
    })
  });

  getNotes();
}

// clearall
clearAllBtn.addEventListener("click", clearall);

async function clearall() {
  const confirmDelete = confirm("Are you sure you want to delete all notes?");
  if (!confirmDelete) return;

  await fetch(`${API}/delete`, {
    method: "DELETE"
  });

  getNotes();
}

getNotes();