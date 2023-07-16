# Dignity Requirements

## Non-functional requirements
- Map details will always be up to date within the last 1 minute
- Map will take less than 5 seconds to load
- Website will have 99.9% availability, including scheduled monthly maintenance downtime
- All HTML on the site will be valid, as tested by W3C Markup Validator

## Homepage
This page will always contain:
- H1a: A header image 
- H1b: A “Dignity’s Goal” description explaining Diginity’s mission and purpose
- H1c: An “About Us” section with an introduction of the team 

When the user is not logged in:
- H2a: A log in/sign up button 

The user will be able to navigate to other pages from the home page by utilizing the navbar detailed in N1-N2

## Navbar
The navigation bar will always contain the following:
- N1a: Will always be placed at the top of the page
- N1b: Brand logo, when clicked on brings user to the homepage
- N1c: Links to the Opportunity Map Page, and Opportunity Creator Page, and Homepage
- N1d: When hovered over, the selected link will become highlighted

When the user is not logged in:
- N2a: Log in/Create account button
- N2b: On click of “Log in/Create Account” button, a pop-up form appears 
- N2c: Pop-up form will include fields for log-in details (email and password), a submit button, and a create account button
- N2d: If user enters and submits incorrect log-in details or an empty field, an error message is shown
- N2e: If user enters and submits valid log-in details, the user is logged in and the pop-up disappears
- N2f: If user clicks on the Create Account button, the pop-up form expands to include required fields for email, password, confirm password, address, phone number, and a create account button.
- N2g: If password fields do not match, an error message is shown
- N2h: If email or phone number is incomplete or invalid, an error message is shown
- N2i: If user enters and submits valid account details, the user is logged into their newly created account, and the pop-up disappears

When the user is logged in:
- N3a: User avatar replaces Log in/Create Account button
- N3b: On hover, drop-down shows user to Profile Page link and log-out button

## Opportunity Map Page
This page will always contain:
- O1a: Map of King County, with icon to expand filtering options

---

***Expandable/collapsible filtering options that will include:***

- O1b1: Location selection: the user will be able to search a specific neighborhood by zip code and then select whether they would like to view opportunities within 1 mile, 5 miles, or 10+ miles of their selected neighborhood
- O1b2: Volunteer type: checkbox list with types of volunteer opportunities the user can check/uncheck
- O1b3: In person/virtual: checkboxes for user to check/uncheck to select whether they would like to do an in person or virtual opportunity (or either)

---

- O1c: Apply button on filter options that applies selected filters
- O1d: Icons pins on map that indicate opportunities available based on filters

---

***Pop-ups for each icon that display the following:***

This pop-up will always contain:
- O1d1: On hover, popup displays basic opportunity info (location, opportunity type, time start, volunteers needed)
- O1d2: On click, popup expands to display more detailed info (opportunity description, directions link to google maps)

If the user is not logged in:
- O1d3: The expanded popup displays a button with a prompt to log in order to sign up for the opportunity 
- O1d4: When the login button is clicked, redirects to the profile page

If the user is logged in:
- O1d5: The expanded popup displays a sign up / cancel button 

If the user is not signed up:
- O1d6: The cancel button is hidden and the sign up button is displayed
- O1d7: Clicking the sign up button will sign up the user for the opportunity, updating volunteers needed by -1

If the user is signed up:
- O1d8: The sign up button is hidden and the cancel button is displayed
- O1d9: Clicking the cancel button will remove the user from the opportunity, updating volunteers needed by +1

If the opportunity is full:
- O1d10: The sign up button is visible but grayed out and unable to be clicked with a message underneath telling the user to check back later
- O1d11: Section that describes each type of volunteer opportunity icon (what it means and what that type of opportunity is typically like)
- O1d12: Button that redirects users to the opportunity creator page if they are a user looking to post an opportunity

---

- O1e: Section that describes each type of volunteer opportunity icon (what it means and what that type of opportunity is typically like)

---

***Opportunity volunteer data should be:***

- O1e1: The populated data from UW services should be formatted and parsed appropriately to extract relevant information
- O1e2: Create tables or collections to accommodate the different data entities and relationships
- O1e3: Check for missing, incomplete, or incorrect data and handle such cases gracefully
- O1e4: Ensure that the populated data maps correctly to the icons on the opportunity map page

---

- O1f: Button that redirects users to the opportunity creator page if they are a user looking to post an opportunity

---

When user is not logged in:
- O2: Button to redirect users to log in to get access to signing up for opportunities by signing waiver form detailed in P2

## Profile Page
When user is not logged in:
- P1a: Page has a “Login” button
- P1b: On click of “Login” button, user is shown the log-in pop-up form described in requirement N2b

When user is logged in:
- P2a: Profile avatar
- P2b: Username and password
- P2c: Email/Phone number
- P2d: User address/Neighborhood
- P2e: Page has a “Logout” button
- P2f: On click of “Logout” button, user is logged out of their account
- P2g: Page should include a link to the online waiver form
- P2h: Clicking on the link should redirect the user to the specified online waiver form, allowing the user to participate at all opportunities shown
- P2i: Waiver form includes details about liability and fields for the user to input their full name, date, E-Signature and submit button.
- P2j: On click of submit button, if one of the fields is incomplete, an error message is shown
- P2k: On click of submit button, if all fields are completed, the user is shown a message of completion and redirected to the Opportunity Map Page

## Opportunity Creator Page
This page will always contain:
- C1a: Header image and text 
- C1b: Paragraph short description of the page’s purpose

When user is not logged in OR is logged in but their account is not verified (done manually):
- C2a: A pop-up informing the user to log in and/or contact our email to verify their account to gain access to opportunity creation

When the user is logged in and their account is verified:
- C3a: Form field prompting for position name is required
- C3b: Form field prompting for organization name is required
- C3c: Form field prompting for location address is required unless the checkbox indicating the location is virtual is checked
- C3d: Prompt to select opportunity type - Donations, Food Bank, or Shelter is required
- C3e: Prompt to select start/end times is required
- C3f: Form field prompting for number of volunteers needed is required
- C3g: Form field prompting for donations needed is not required
- C3h: Form field prompting for description about opportunity is required
- C3i: On click of submit button, if a required field is left empty, an error message is shown
- C3j: On click of submit button, if all required fields are filled in, the opportunity is added to the Opportunity Map Page
- C3k: On click of submit button, if all required fields are filled in, user is shown a message informing the opportunity has been successfully created and is visible to other users

## Footer
The footer will always contain the following:
- F1a: Contact us
- F1b: Our email
- F1c: Our phone number
- F1e: Will always be placed at the bottom of the page

## Stretch Requirements
- Profile Picture interactions 
    - P3c: Profile picture must have an edit function to allow users to upload and display a profile picture to their account. Maximum size should be 1MB
    - P3d: On click of the profile picture, a pop-up page should appear prompting for an image upload through an “Upload New Picture” button
    - P3e: On click of “Upload New Picture” button, a file browser page should appear to allow users to browse through all files in the local device. Only JPG, JPEG and PNG formats will be allowed to upload. The file browser page disappears upon successful upload
    - P3f: Incompatible file formats are grayed out in the file browser page, indicating they cannot be chosen
    - P3g: Once a profile picture is uploaded, two buttons (“Save” and “Cancel”) should appear on the pop-up page
    - P3h: On click of “Save” button, the picture change is confirmed and the new profile picture should appear in the picture section of the login page. Pop-page should disappear
    - P3i: On click of “Cancel” button, the picture change is revoked. The file browser page disappears and the user returns to the pop-up page
- Profile creation
    - P4a: Profile creation page has a “Save”, “Submit” and “Cancel” button
    - P4b: On click of “Save” button, previously entered user information is stored into the backend database
    - P4c: When saved, user can retrieve previously entered information when opening profile creation page again
    - P4d: On click of “Submit” button, user information is submitted and stored to the backend database, and the user can access the privileges of a registered account
    - P4e: Profile information entered by users should be validated to ensure it meets the required format and all mandatory fields are provided
    - P4f: Display appropriate error messages for any validation errors encountered
    - P4g: The required profile information includes full name, email address, preferred username, password and address/neighborhood
- Opportunities previously attended
- Use SQL for the database
- Automatic opportunity creator verification

