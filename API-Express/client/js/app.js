$("#testModal").on("show.bs.modal", function(event) {
  var button = $(event.relatedTarget);
  var recipient = button.data("whatever");
  console.log(recipient);
  var modal = $(this);
  modal.find(".modal-title").text("Update Chirp: #" + recipient);

  $("#chirpUpdate").click(() => {
    let dated = new Date();
    let editing = JSON.stringify({
      message: $("#message-editor").val(),
      time: dated.toString()
    });
    console.log(editing);
    $.ajax({
      type: "PUT",
      url: `/api/chirps/${recipient}`,
      data: editing,
      dataType: "json",
      contentType: "application/json",
      success: console.log("success")
    });
    $(`#chirptext${recipient}`).html($("#message-editor").val());
    $(`#chirptime${recipient}`).html(`<small>${dated.toString()}</small>`);
    $("#message-editor").val("");
  });
});

let goGetCards = () => {
  $.get("/api/chirps", function(data) {
    console.log(data);
    let results1 = Object.values(data);
    let results2 = Object.keys(data);
    console.log(results2);

    results1.forEach(element => {
      console.log(results2[results1.indexOf(element)]);
      console.log(element);
      createCard(results1, results2, element);
    });
  });
};

let createCard = (a, b, element) => {
  if (
    $(`#chirpNum${b[a.indexOf(element)]}`).attr("id") ===
    `chirpNum${b[a.indexOf(element)]}`
  ) {
    return;
  }
  if (!isNaN(b[a.indexOf(element)])) {
    let card = `
<div class="col my-1 text-center mx-auto" id="chirpNum${b[a.indexOf(element)]}">
    <div class="card text-center" style="width: 300px">
        <div class="card-body">
        <button type="button" class="close" id="DeleteChirp${b[a.indexOf(element)]}">
            <span aria-hidden="true">&times;</span>
        </button>
        <p class="card-text" id="chirptext${b[a.indexOf(element)]}">${element.message}</p>
        <p class="card-text mb-2 text-muted" id="chirptime${b[a.indexOf(element)]}"><small>At: ${element.time}</small></p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#testModal" data-whatever="${b[a.indexOf(element)]}">Click to Update</button>
        </div>
    </div>
</div>
`;
    $(".row").append(card);
  }
  $(`#DeleteChirp${b[a.indexOf(element)]}`).click(() => {
    $(`#chirpNum${b[a.indexOf(element)]}`).remove();
    $.ajax({
        type: "DELETE",
        url: `/api/chirps/${b[a.indexOf(element)]}`,
        success: console.log("success")
      });    
    });
};

$("document").ready(() => {
  goGetCards();
  $("#chirpSubmit").click(() => {
    let dated = new Date();
    let sending = JSON.stringify({
      message: $("#message-text").val(),
      time: dated.toString()
    });
    console.log(sending);
    $.ajax({
      type: "POST",
      url: "/api/chirps",
      data: sending,
      dataType: "json",
      contentType: "application/json",
      success: console.log("success")
    });
    $("#message-text").val("");
    goGetCards();
  });
});
