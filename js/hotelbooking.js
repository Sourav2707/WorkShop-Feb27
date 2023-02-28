function store() {
    let form = document.getElementById("form");
    let name = document.getElementById("name").value;
    let phNo = document.getElementById("phNo").value;
    let room = document.getElementById("room").value;
    let guest = document.getElementById("phNo").value;
    let typeRoom = document.getElementById("typeRoom").value;
}
    
form.addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('phNo', phNo);
    localStorage.setItem('room', room);
    localStorage.setItem('guest', guest);
    localStorage.setItem('typeRoom', typeRoom);
    window.location.href = "C:\Users\Sourav Prasanna\OneDrive\Desktop\JavaScript\Workshop-HotelBooking\js\homepage.js";
})