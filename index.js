// import files/modules

import { issueInsert } from "./issue-form.js";

// 1. declare all variables

document.querySelector(".input-section-el").innerHTML = issueInsert;

// 2. create constructor function / CLASS

class IssueObject {
  constructor(issue, priority, date, assigned, assignor) {
    this.issue = issue;
    this.priority = priority;
    this.date = date;
    this.assigned = assigned;
    this.assignor = assignor;
    // additional
    this.ident = generateRandomID();
  }
}
// 3. create Array to store the objects

const issueObjectArray = [];

// 4. create event listener - collect the input values

document.getElementById("submit-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const issue = document.getElementById("description-id").value;
  const priority = document.getElementById("dropdown-id").value;
  const date = document.getElementById("date-id").value;
  const assigned = document.getElementById("assigned-id").value;
  const assignor = document.getElementById("assignor-id").value;

  const newIssueArray = new IssueObject(
    issue,
    priority,
    date,
    assigned,
    assignor
  );

  // Check for duplicates based on the "ident" property
  const isDuplicate = issueObjectArray.some(
    (issueObj) => issueObj.ident === newIssueArray.ident
  );
  if (!isDuplicate) {
    issueObjectArray.push(newIssueArray);
  }

  document.getElementById("output-section-el").innerHTML = issueObjectArray
    .map(function (issue) {
      return `
      <div class="issue-box-el" id="">
            <div class="issue-box-top-info">
                <p>Issue ID: ${issue.ident}</p>
                <p class="deadline-style">Deadline: ${issue.date}</p>
            </div>

            <div class="issue-box-status-el">
                <div id="job-status-id" class="job-status"><span class="job-status-span">open</span>
                </div>
                
                <div class="priority-name-el">
                <div><span class="priority-box-el">${issue.priority}</span></div>
                </div>
            </div>
            
            <h2>${issue.issue}</h2>

            <div class="assign-el">
                <div>Assigned to: ${issue.assigned}</div>
                <div>Assigned by: ${issue.assignor}</div>
            </div>

            <div class="button-el">
                <button class="close-btn">Close</button>
                <button class="delete-btn" >Delete</button>
                <button class="archive-btn">Archive</button>
            </div>
      </div>
        `;
    })
    .join("");

  clearInputs();

  document.addEventListener("click", function (e) {
    if (e.target.textContent === "Delete") {
      console.log("Delete Item");
    } else if (e.target.textContent === "Close") {
      console.log("Close Item");
    } else if (e.target.textContent === "Archive") {
      console.log("Archive Item");
    }
  });
});

// function to generate random ID for EACH SECTION
function generateRandomSectionID() {
  let id = "";
  const characters = "0123456789abcdef";

  for (let i = 0; i < 10; i++) {
    id += characters[Math.floor(Math.random() * characters.length)];
  }
  return id;
}

// function to generate random ID for TASK
function generateRandomID() {
  let id = "";
  const characters = "0123456789abcdef";

  for (let i = 0; i < 8; i++) {
    id += characters[Math.floor(Math.random() * characters.length)];
  }
  return id;
}

function clearInputs() {
  const issue = (document.getElementById("description-id").value = "");
  const priority = (document.getElementById("dropdown-id").value = "");
  const date = (document.getElementById("date-id").value = "");
  const assigned = (document.getElementById("assigned-id").value = "");
  const assignor = (document.getElementById("assignor-id").value = "");
}
