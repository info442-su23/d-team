# Testing Plan

## Types of Testing 
- We will utilize two types of testing on our product: automated unit testing and manual acceptance testing. We chose these two types to thoroughly test our code’s input and output functions, as well as to verify that our stakeholders’ needs are met.


## Testing Process
- Acceptance testing will be run once a week, typically before each phase submission, by our product designer. Since unit testing will be conducted automatically as the developers are writing code, there is no set time for running this test. At least 48 hours before the phase deadline, the developers will merge their code onto the main branch of our repository to give the designer adequate time to conduct acceptance testing. This will also give the developers time to address any errors that may arise during the testing process.


## Testing Environment(s)
- The environment the acceptance testing will be conducted on will be the Google Chrome browser on the product designers’ operating system.


## Defect Management
1. In the case that a problem is found while testing, the product designer will promptly screenshot and report the error they see to the rest of the team. 
2. The project manager will then track the error to the Github task that caused it, as well as the team member(s) assigned to the task, and mark it as unresolved.
3. The developer will then work on debugging the error, with the assistance of the second developer. 
4. If the error keeps persisting, the whole team will search for possible solutions through searching the web and reaching out to the teaching team. 
5. Once the error is resolved, the product designer will run through the acceptance testing script again to confirm that the product works as intended. If another error is found, repeat steps 1-4. If no error is found, the project manager marks the task as resolved.


## User Acceptance Testing Scripts


### Home Page and Footer


- Expect to see the nav bar located at the top of the page. (Requirement N1a)
- Expect to see a header image. (Requirement H1a)
- Expect to see a “Dignity’s Goal” description explaining Diginity’s mission and purpose. (Requirement H1b)
- Expect to see an “About Us” section with an introduction of the team. (Requirement H1c)
- Expect to see the footer at the bottom of the page containing the following information: contact us, our email, and our phone number. (Requirements F1a-F1d) 


#### Context: User is not logged in
- Expect to see a log in/sign up button. (Requirement H2a)

  
### Nav Bar and Log In
- Expect to see the nav bar at the top of the page. (Requirement N1a)
- Click on the brand logo and expect to be redirected to the home page. (Requirement N1b)
- Click on the Opportunity Map Page link and expect to be redirected to the Opportunity Map Page. (Requirement N1c)
- Click on the Opportunity Creator Page link and expect to be redirected to the Opportunity Creator Page. (Requirement N1c)
- Click on the Home Page link and expect to be redirected to the home page. (Requirement N1c)
- Hover over each of the nav bar links and expect the link to be highlighted. (Requirement N1d)

#### Context: User is not logged in 

- Expect to see a log in/ create account button. (Requirement N2a)
- Click “log in/create account” button and expect a pop up form to appear. (Requirement N2b)
- Expect the pop up form to include fields for log in details  (email and password), a submit button, and a create account button. (Requirement N2c)
- Click the submit button without entering anything into the log in details and expect an error message to show up. (Requirement N2d)
- Click on the “Create Account” button and expect the pop up form to expand and include required fields for email, password, confirm password, address, phone number, and a create account button. (Requirement N2f)
- Fill out the form and hit “submit.” Expect an error message if the password fields do not match or the other fields are not complete. If account details are valid expect the log in pop up to disappear. (Requirement N2g-N2i)

#### Context: User is logged in 
- Expect the user avatar to replace the log in/sign up button. (Requirement N3a)
- Hover over drop down menu and expect to see links to the profile page and a log out button. (Requirement N3b)


### Map Feature


#### Context: User is not logged in 
- Expect to see map with location pins on it. (Requirement O1a)
- Expect to see clickable expand button that opens filtering option. (Requirement O1a)
- Type in desired neighborhood. (Requirement O1b1)
- Click check box of desired radius in miles of neighborhood. (Requirement O1b1)
- Click check box of desired types of volunteer opportunities. (Requirement O1b2)
- Click check box of virtual or in person opportunity. (Requirement O1b3)
- Click ‘Apply’ button at bottom of filter. Expect button to fade to a lighter color. (Requirement O1c)
- Expect to see updated pins on map page based on applied filters. (Requirement O1d)
- Hover over a pin and expect to see basic opportunity info (location, opportunity type, time start, volunteers needed) (Requirement O1d1)
- Click on pin and expect to see more detailed info (opportunity description, directions link to google maps). Also expect to see a button with a prompt to log in in order to sign up for the opportunity. (Requirement O1d2 and O1d3)
- Click on log in button and expect to be redirected to the log in page. (Requirement O1d4)


#### Context: User is logged in
- Expect to see map with location pins on it. (Requirement O1a)
- Expect to see clickable expand button that opens filtering option. (Requirement O1a)
- Type in desired neighborhood. (Requirement O1b1)
- Click check box of desired radius in miles of neighborhood. (Requirement O1b1)
- Click check box of desired types of volunteer opportunities. (Requirement O1b2)
- Click check box of virtual or in person opportunity. (Requirement O1b3)
- Click ‘Apply’ button at bottom of filter. Expect button to fade to a lighter color. (Requirement O1c)
- Expect to see updated pins on map page based on applied filters. (Requirement O1d)
- Hover over a pin and expect to see basic opportunity info (location, opportunity type, time start, volunteers needed) (Requirement O1d1)
- Click on pin and expect to see more detailed info (opportunity description, directions link to google maps, sign up button). (Requirement O1d2)
- Click on sign up button and expect ‘volunteers needed’ count to go down by 1. (Requirement O1d6) 
- Expect to no longer see the ‘sign up’ button and a cancel button displayed instead. (Requirement O1d7)



### Creator Feature


#### Context: User is not logged in 
- Expect to see a pop-up informing the user to log in and/or contact our email to verify their account to gain access to opportunity creation (Requirement C2a)


#### Context: User is logged in
- Expect to see a form to fill out regarding information about volunteer opportunity being posted. (Requirement C3)
- Type into form field prompting for position name. Expect to see a ‘this field is required’ error pop up if not filled in after submit button is clicked. (Requirement C3a)
- Type into form field prompting for organization name. Expect to see a ‘this field is required’ error pop up if not filled in after submit button is clicked. (Requirement C3b)
- Type into form field prompting for location address. Expect to see a ‘this field is required’ error pop up if not filled in after submit button is clicked, unless the checkbox indicating the location is virtual is checked. (Requirement C3c)
- Check off boxes in form field prompting for opportunity type (donations, food bank, or shelter). Expect to see a ‘this field is required’ error pop up if not filled in after submit button is clicked. (Requirement C3d)
- Enter form field for start/end times. Expect to see a ‘this field is required’ error pop up if not filled in after submit button is clicked. (Requirement C3e)
- Type into form field prompting for number of volunteers needed. Expect to see a ‘this field is required’ error pop up if not filled in after submit button is clicked.(Requirement C3f)
- Type into form field prompting for donations needed. (Requirement C3g)
- Type into form field prompting for description about opportunity. Expect to see a ‘this field is required’ error pop up if not filled in after submit button is clicked. (Requirement C3h)
- Click submit button and expect to see a pop up message informing the opportunity has been successfully created and is visible to other users, if all required fields are filled in. (Requirement C3i and C3j)
- Navigate to map page by clicking ‘map’ in the nav bar, and expect to see the new opportunity on the map as a location pin. (Requirement C3k)


### Viewing profile and completing waiver 


#### Context: User is not logged in
- Expect to see a “log in” button. (Requirement P1a)
- Click on “log in” button and expect to see a log in pop up form. (Requirement P1b)


#### Context: User is logged in
- Expect to see profile avatar, username, email, and neighborhood. (Requirement P2a-P2c)
- Expect to see “log out” button. (Requirement P2e)
- Expect to see link to waiver form. (Requirement P2g)
- Click on link to waiver form and expect to see the form pop up. (Requirement P2h)
- Expect to see details about liability. (Requirement P2i)
- Fill out full name, date, and e-signature fields at the bottom of the form. (Requirement P2i)
- Click submit button and expect to see (1) a pop up indicating one of the fields is incomplete if all fields are not filled in or (2) a message of completion and expect to be - redirected to opportunity map page. (Requirement P2j and P2k)

