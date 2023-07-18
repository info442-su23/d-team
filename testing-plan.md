# Testing Plan

## Map Feature


### Context: User is not logged in 
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


### Context: User is logged in
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
