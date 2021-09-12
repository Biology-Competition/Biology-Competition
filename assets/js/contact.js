console.log("loaded");
formLoad();
/* CONTACT FORM */
(function () {
  // https://dashboard.emailjs.com/admin/integration
  emailjs.init("user_dq5vxMfl6XwpH27eMRQZ3");
})();
function formLoad() {
    console.log("loaded!");
  document.getElementById("contact-form").addEventListener('submit', function (event) {
      console.log("clicked!");
    event.preventDefault();
      console.log(this);
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_o9uoqia', 'template_2v9j4xj', this)
        .then(function () {
          console.log('SUCCESS!');
        }, function (error) {
          console.log('FAILED...', error);
        });

      document.getElementById("contact-form").style.display = "none";
      document.getElementById("confirmation").style.display = "block";
  });
}
