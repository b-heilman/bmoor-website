Release Notes
---------------------------------------

v1.0.0 - 3/31/2016:
---------------------------------------

* Initial release of HTML/CSS for elements pages
* Using native form controls for checkboxes, radio buttons, file upload, select elements


v1.0.1 - 3/31/2016:
---------------------------------------

* assets/styles/main.css update is required
* Added /assets/images/png/checkmark.png for custom checkboxes
* Added JS to /assets/scripts/main.js for the file upload functionality

* Added custom radio buttons for batch/real-time - Step 2 (requires markup change)

- Previous:

<fieldset class="ct-radio-group">
	<legend class="ct-label">Real Time or Batch?</legend>
	<input type="radio" id="process-realtime" name="process" value="realtime">
	<label for="process-realtime">REAL TIME <span class="ct-form-help">Your data will be sent in real time, continously.</span></label>
	<input type="radio" id="process-batch" name="process" value="batch">
	<label for="process-batch">BATCH <span class="ct-form-help">Your data will be sent at a set time, i.e. daily, weekly.</span></label>
</fieldset>

- Updated:

<fieldset class="ct-radio-group">
	<legend class="ct-label">Real Time or Batch?</legend>
	<input type="radio" id="process-realtime" name="process" value="realtime" class="ct-radio acc-hidden">
	<label for="process-realtime" class="ct-radio-label-container"><span class="ct-radio-label">REAL TIME</span> <span class="ct-form-help">Your data will be sent in real time, continously.</span></label>
	<input type="radio" id="process-batch" name="process" value="batch" class="ct-radio acc-hidden">
	<label for="process-batch" class="ct-radio-label-container"><span class="ct-radio-label">BATCH</span> <span class="ct-form-help">Your data will be sent at a set time, i.e. daily, weekly.</span></label>
</fieldset>


* Added custom checkboxes - step 3 (requires markup change)

- Previous:

<div class="ct-field">
	<label class="visibly-hidden" for="confirm_AccountNumber">Confirm AccountNumber</label>
	<input type="checkbox" id="confirm_AccountNumber" name="confirm_AccountNumber">
</div>

- Updated:

<div class="ct-field ct-check-group ct-check-group--confirm">
	<input type="checkbox" id="confirm_AccountNumber" name="confirm_AccountNumber"/>
	<label for="confirm_AccountNumber"><span class="visibly-hidden">Confirm AccountNumber</span></label>
</div>


* Added custom checkboxes - steps 4 (requires markup change to header row only move input above label)

- Previous:

<div class="ct-field-row ct-field-row--header">
	<div class="ct-field ct-check-group">
		<label class="ct-check-label" for="data-field">Share All</label>
		<input type="checkbox" id="data-field" name="data-field" value="data-field">
		YOUR DATA FIELD
	</div>
	<div class="ct-field">VALUE EXAMPLE</div>
</div> <!--end ct-field-row--header-->


- Updated:

<div class="ct-field-row ct-field-row--header">
	<div class="ct-field ct-check-group">
		<input type="checkbox" id="data-field" name="data-field" value="data-field">
		<label class="ct-check-label" for="data-field">Share All</label>
		YOUR DATA FIELD
	</div>
	<div class="ct-field">VALUE EXAMPLE</div>
</div> <!--end ct-field-row--header-->


* Added custom file upload design - step 2 (requires markup change + main.js)

- Previous:

<div class="ct-field">
	<label for="datafile">Upload File  <span class="ct-form-help">EX: .JSON .CSV .XML</span></label>
	<input id="datafile" name="datafile" type="file" accept="">
</div>

- Updated:

<div class="ct-field">
	<div class="ct-label">Upload File</div>
	<div class="file-upload-wrapper" data-text="Select your file">
		<input id="datafile" type="file" class="file-upload-field" value="" accept="">
		<label for="datafile" class="file-upload-label">Upload File</label>                
	</div>
	<span class="ct-form-help">EX: .JSON .CSV .XML</span>
</div>

