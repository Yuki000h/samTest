import { auth, db } from "./firebase-config.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html";
  } catch (error) {
    document.getElementById("errorMsg").innerText = "Login failed. Check credentials.";
  }
});

// Add User
const addUserForm = document.getElementById("addUserForm");
addUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("useremail").value;

  try {
    await addDoc(collection(db, "users"), { username, email });
    alert("User added successfully!");
    window.location.reload();
  } catch (error) {
    console.error("Error adding user: ", error);
  }
});

// Fetch Users
const userList = document.getElementById("userList");
async function fetchUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    const user = doc.data();
    userList.innerHTML += `
      <tr>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editUser('${doc.id}', '${user.username}', '${user.email}')">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteUser('${doc.id}')">Delete</button>
        </td>
      </tr>
    `;
  });
}
fetchUsers();

// Delete User
window.deleteUser = async (id) => {
  try {
    await deleteDoc(doc(db, "users", id));
    alert("User deleted successfully!");
    window.location.reload();
  } catch (error) {
    console.error("Error deleting user: ", error);
  }
};

