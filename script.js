const inputs = document.querySelectorAll("input");
const toggle = document.getElementById("bg")


const handleChange = () => {
    const suffix = event.target.getAttribute("data-suffix") || "";
    document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + suffix)
}

const darkModeOnOff = () => {
    console.log(event.target.name)
    document.documentElement.style.setProperty(`--${event.target.name}`, "#000")
}

inputs.forEach(input => {
    addEventListener("change", handleChange);
})

toggle.addEventListener("click", darkModeOnOff)