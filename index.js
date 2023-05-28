// import files/modules

import { issueInsert } from "./issue-form.js";

// 1. declare all variables

document.querySelector(".input-section-el").innerHTML = issueInsert;

// 2. create constructor function / CLASS

class IssueObject {
  constructor(issue, priority, date, assigned) {
    this.issue = issue;
    this.priority = priority;
    this.date = date;
    this.assigned = assigned;
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

  const newIssueArray = new IssueObject(issue, priority, date, assigned);

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
      <div class="issue-box-el">
      <p>Issue ID: ${issue.ident}</p>
      <div id="job-status-id" class="job-status">open</div>
      <p>Deadline: ${issue.date}</p>
      <h2>${issue.issue}</h2>
      <div class="priority-name-el">
        <div class="priority-box-el">${issue.priority}</div>
        <div>Assigned: ${issue.assigned}</div>
      </div>
    </div>
        `;
    })
    .join("");

  clearInputs();
});

// function to generate random ID
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
}
