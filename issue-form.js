const issueInsert = `
<form>
  <h2>Add New Issue</h2>
  <div class="input-holder-el">
    <div>
      <label for="description">Description of issue:</label>
      <input
        type="text"
        id="description-id"
        name="description "
        placeholder="e.g. Sub-Doppler laser cooling not working"
        required
      />
    </div>

    <div class="grid-col-2">
            <div>
            <label for="dropdown">Priority:</label>
            <select name="dropdown" id="dropdown-id" required>
                <option disabled selected>Click to choose priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            </div>
            <div>
                <label for="due-date">Due Date (date to be completed by):</label>
                <input type="date" id="date-id" name="due-date" required />
            </div>
    </div>

    <div class="grid-col-2">
            <div>
            <label for="assigned">Assigned To:</label>
            <input
                type="text"
                id="assigned-id"
                name="assigned"
                placeholder="e.g. Gordon Freeman"
                required
            />
            </div>
            <div>
            <label for="assignor">Assigned By:</label>
            <input
                type="text"
                id="assignor-id"
                name="assignor"
                placeholder="e.g. Alyx Vance"
                required
            />
            </div>
    </div>

  </div>
  <div>
    <button type="submit" id="submit-btn">Submit Issue</button>
  </div>
</form>
`;

export { issueInsert };
