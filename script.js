// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var addButton = document.getElementById("add");
const tasksCounter = document.getElementById('tasks_count');
const toastContainer = document.getElementById('toast');
var tasks = [];
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
  task.remove(1);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
  
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
function showNotification (type, message) 
{
    if (type === 'error') {
      toastContainer.classList.remove('toast-success');
      toastContainer.classList.add('toast-error');
    } else if (type === 'success') {
      toastContainer.classList.remove('toast-error');
      toastContainer.classList.add('toast-success');
    }
    toastContainer.style.display = 'block';
    toastContainer.innerText = message;
  
    setTimeout(() => {
      toastContainer.style.display = 'none';
    }, 1000)
  }

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("LI");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    showNotification('success', 'Task added successfully!');

  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7")
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  tasks.push(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  // tasksCounter.innerHTML = tasks.length;

  }
function keypressHandle (e) {
    if (event.key === 'Enter' ) {
      var li = document.createElement("LI");
      var inputValue = e.target.value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
      document.getElementById("myUL").appendChild(li);
      }
      document.getElementById("myInput").value = "";

      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
      tasks.push(span);
      console.log(tasks);


      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      // tasksCounter.innerHTML = tasks.length;

      }
    }
  }
myInput.addEventListener('keyup', keypressHandle);
addButton.addEventListener('click' , newElement);
