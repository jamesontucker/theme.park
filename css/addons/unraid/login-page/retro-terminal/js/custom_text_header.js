
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>  _   _ ______ _______      __  _    _  ____  
 | \\ | |  ____|  __ \\ \\    / / | |  | |/ __ \\ 
 |  \\| | |__  | |__) \\ \\  / /  | |__| | |  | |
 | . \` |  __| |  _  / \\ \\/ /   |  __  | |  | |
 | |\\  | |____| | \\ \\  \\  /    | |  | | |__| |
 |_| \\_|______|_|  \\_\\  \\/     |_|  |_|\\___\\_\\
                                              
                                              </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
