import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC0SGqXk8-ukswHszedCjcY_7Xh5zF2gUc",
    authDomain: "todo-app-408ed.firebaseapp.com",
    projectId: "todo-app-408ed",
    storageBucket: "todo-app-408ed.firebasestorage.app",
    messagingSenderId: "87251262905",
    appId: "1:87251262905:web:8065979aae628bbc2faa68"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//   console.log("INIT", app);
//   console.log("Firestore Database", db);

const todoStudents = collection(db, "students");

// Add Student
async function addStudent(studentName, studentEmail, studentNumber) {
    try {
        const docRef = await addDoc(todoStudents, {
            sid: new Date().getTime(),
            name: studentName,
            email: studentEmail,
            number: studentNumber
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', () => {
    todoList.innerHTML = ``;
    const studentName = document.getElementById('student-name').value;
    const studentEmail = document.getElementById('student-email').value;
    const studentNumber = document.getElementById('student-number').value;
    if (studentName !== "" && studentEmail !== "" && studentNumber !== "") {
        addStudent(studentName, studentEmail, studentNumber);
        getStudent();
        emptyFields();
    } else {
        alert("Please Enter Name, Email, and Number");
        getStudent();
    }
});

// get student
const todoList = document.getElementById('todo-list');
async function getStudent() {
    const querySnapshot = await getDocs(todoStudents);
    querySnapshot.forEach((doc) => {
        const docId = doc.id;
        const { sid, name, email, number } = doc.data(); // destructuring method
        // create li and ul
        const ul = document.createElement('ul');
        ul.id = docId;
        ul.classList.add('student-list');
        const li = document.createElement('li');
        // end
        // first Li
        const firstLi = document.createElement('li');
        firstLi.textContent = `SID: ${sid}`;
        // end
        // first Li
        const secondLi = document.createElement('li');
        secondLi.textContent = `Student Name: ${name}`;
        // end
        // first Li
        const thirdLi = document.createElement('li');
        thirdLi.textContent = `Student Email: ${email}`;
        // end
        // first Li
        const fourthLi = document.createElement('li');
        fourthLi.textContent = `Student Number: ${number}`;
        // end
        // create delete button
        const btnDelete = document.createElement('button');
        btnDelete.textContent = "Delete";
        btnDelete.id = docId;
        btnDelete.classList.add('delete');
        // end

        // create delete button
        const btnUpdate = document.createElement('button');
        btnUpdate.textContent = "Update";
        btnUpdate.id = docId;
        btnUpdate.classList.add('update');
        // end

        li.appendChild(btnDelete);
        li.appendChild(btnUpdate);

        // end
        ul.appendChild(firstLi);
        ul.appendChild(secondLi);
        ul.appendChild(thirdLi);
        ul.appendChild(fourthLi);
        ul.appendChild(li);
        todoList.appendChild(ul)

        // Button Event 
        btnDelete.addEventListener('click', () => deleteRow(btnDelete.id));
        btnUpdate.addEventListener('click', () => updateRow(btnUpdate.id))
    });
}

getStudent();

// delete doc
async function deleteRow(id) {
    try {
        const studentDoc = doc(db, "students", id);
        await deleteDoc(studentDoc);
        alert("Document Delete Successfully", id);
        getStudent();
        todoList.innerHTML = ``;

    } catch (e) {
        console.error("Error Delete Document", e);
    }
}

// update doc
async function updateRow(id) {
    try {
        const studentName = document.getElementById('student-name').value;
        const studentEmail = document.getElementById('student-email').value;
        const studentNumber = document.getElementById('student-number').value;
        const studentDoc = doc(db, "students", id);
        if (studentName !== "" && studentEmail !== "" && studentNumber !== "") {
            await updateDoc(studentDoc, {
                name: studentName,
                email: studentEmail,
                number: studentNumber
            });
            console.log("Document Update Successfully", id);
            getStudent();
            emptyFields();
            todoList.innerHTML = ``;
        } else {
            alert("Please Enter Name, Email, and Number");
        }

    } catch (e) {
        console.error("Error Delete Document", e);
    }
}
// end

// empty fields
function emptyFields() {
    document.getElementById('student-name').value = '';
    document.getElementById('student-email').value = '';
    document.getElementById('student-number').value = '';
}
// end
