# connection-manager

Library which deals with the internet connectivity. Currenty is supports enabling, disabling and checking connection. Usefull when testing how some application behaves when there is no connection.

### Api

- disableConnection - disables the internet connectivity

- enableConnection - enable internet connectivity. This method works only after disableConnection is called, because there can be other reasons for lost connection.

- isConnected - check if there is internet connection.

### Usage 
See ./sample.js 
