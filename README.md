# Logbook 2 - Form Validate

## Setup Project
### Step 1: Install package
```
npm instal
```
### Step 2: Create a development server that runs in the browser
```
ionic serve
```

## Bulid Project
### Step 1: Compiles web assets and prepares them for deployment
```
ionic build
```
### Step 2: Add a native platform to your Ionic project
```
ionic capacitor add <platform>
```
<table>
  <thead>
    <tr>
      <th colspan="2">platform</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Description</td>
      <td>The platform to add (e.g. android, ios)</td>
    </tr>
  </tbody>
</table>

## Application explanation
Create a PhoneGap App that displays a form that allows a user to enter all the fields specified in the coursework section 1 a. <br>
The app should perform some validation of the data input and display an error message to the user if the data is invalid. <br>

- Property type (e.g. flat, house, bungalow) – required field
- Bedrooms (e.g. studio, one, two, etc.) - required field
- Date and time of adding the Property  (when the property have been added) – required field
- Monthly rent price - required field
- Furniture types (e.g. Furnished, Unfurnished, Part Furnished) - optional field
- Notes – optional field
- Name of the reporter – required fields

