export function renderWithTemplate(template, parentElement, data, callback) {
    parentElement.innerHTML = template;
    if (callback) {
        callback(data);
    }
}

export async function loadTemplate(path) {
    const response = await fetch(path);
    return await response.text();
            
}

export async function loadHeaderFooter() {
    const templateHeader = await loadTemplate("./partials/header.html");
    const templateFooter = await loadTemplate("./partials/footer.html");

    const header = document.querySelector("#dynamic-header");
    const footer = document.querySelector("#dynamic-footer");

    renderWithTemplate(templateHeader, header);
    renderWithTemplate(templateFooter, footer);

    const year = document.querySelector("#current-year");
    year.textContent = new Date().getFullYear();

    
    const currentPage = window.location.pathname.split("/").pop();

    const links = header.querySelectorAll("nav li a");
    links.forEach(link => {
        let linkPage = link.getAttribute("href").trim().replace(/^(\.\/|\/)/, "");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}

export function camelToTitle(camelCaseStr) {
    if (!camelCaseStr) return "";
    // Insert space before capital letters, then capitalize the first letter
    const spaced = camelCaseStr.replace(/([A-Z])/g, ' $1'); 
    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

