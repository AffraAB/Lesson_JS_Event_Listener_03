/* Page content */
const homePageContent = `
<h1>Välkommen</h1>
<p id="my-id">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti enim rem ducimus nisi cumque, alias ipsum quidem, placeat quis explicabo quibusdam et ad eos accusamus eius quisquam. Distinctio, molestiae magnam!</p>
<p class="my-class">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt veniam exercitationem eum cumque voluptatibus necessitatibus temporibus porro soluta, in nam, voluptatem, asperiores repudiandae sapiente vero esse doloribus laborum hic blanditiis.</p>
<p class="two classes">Lorem ipsum, dolor sit amet consectetur adipisicing elit. In aperiam omnis eos! Alias, maxime aliquid! Porro facere, odio distinctio maxime laboriosam optio id nulla, dolore iure esse delectus dicta veniam.</p>
`;

const aboutPageContent = `
    <h1>Om mig</h1>
    <p>Här kan du skriva lite om dig själv</p>
`;

const hobbiesPageContent = `
    <h1>Mina Hobbies</h1>
    <p>Här kan du skriva om dina hobbies</p>
`;

const contactPageContent = `
    <h1>Kontakt</h1>
    <p>Kontakta mig</p>
`;

/* Functions */
// Grab elements
const mainContent = document.querySelector("#main-content");
const navLinks = document.querySelectorAll("nav a");

// Add event listeners to all elements in navLinks
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault(); // Prevent page reload
        const page = link.dataset.page; // Get the string from data-page attribute
        setActiveNavLink(link); // Move the "active" class
        updatePageContent(page); // Render new page
    });
});

// Way 1, for of
// Set the "active" class on the page we are currently on
// function setActiveNavLink(link) {
//     for(nav of navLinks) {
//         nav.classList.remove("active");
//     }
//     link.classList.add("active");
// }
// Way 2, forEach
function setActiveNavLink(link) {
    navLinks.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
}

// Update page content
function updatePageContent(page) {
    switch(page) {
        case "home":
            mainContent.innerHTML = homePageContent;
            break;
        case "about":
            mainContent.innerHTML = aboutPageContent;
            break;
        case "hobbies":
            mainContent.innerHTML = hobbiesPageContent;
            break;
        case "contact":
            mainContent.innerHTML = contactPageContent;
            break;
        default:
            mainContent.innerHTML = homePageContent;
            break;
    }
}
// Since we have an empty div and need some default content
// We run this function once without a property to get the default case of the switch
updatePageContent(); 